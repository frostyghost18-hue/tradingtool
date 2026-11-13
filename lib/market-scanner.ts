import type { ActiveSymbol } from '@deriv/core';
import { getLastDigit, pipSizeFromPip } from '@/lib/digit-stats';
import type { ContractMode } from '@/lib/types';

export const MARKET_SCAN_TICK_COUNT = 30;
export const MARKET_SCAN_DURATION_SECONDS = 15;
export const MINIMUM_MARKET_SCAN_TICKS = MARKET_SCAN_TICK_COUNT;

const WILSON_Z_95 = 1.6448536269514722;
const SEQUENCE_LENGTH = 2;
const ANALOG_PATTERN_LENGTH = 5;
const CLUSTER_WINDOW_SIZE = 12;
const PREDICTION_PRIOR_MATCHES = 2;

export interface MarketScanSignal {
  winRate: number;
  matches: number;
  active: boolean;
}

export interface MarketScanCandidate {
  symbol: ActiveSymbol;
  contractMode: Exclude<ContractMode, 'DIGITMATCH'>;
  barrier: number | null;
  predictionPrices: number[];
  estimatedWinRate: number;
  predictedWinRate: number;
  predictionModels: {
    sequence: MarketScanSignal | null;
    analogy: MarketScanSignal | null;
    cluster: MarketScanSignal | null;
    dominance: MarketScanSignal | null;
  };
  activeSignalCount: number;
  eligibleForTrading: boolean;
  probabilityEdge: number;
  sampleCount: number;
}

function getWilsonLowerBound(wins: number, sampleCount: number): number {
  const observedRate = wins / sampleCount;
  const zSquared = WILSON_Z_95 ** 2;
  const denominator = 1 + zSquared / sampleCount;
  const center = observedRate + zSquared / (2 * sampleCount);
  const margin = WILSON_Z_95 * Math.sqrt(
    (observedRate * (1 - observedRate) + zSquared / (4 * sampleCount)) / sampleCount
  );
  return (center - margin) / denominator;
}

function isWinningDigit(
  digit: number,
  contractMode: Exclude<ContractMode, 'DIGITMATCH'>,
  barrier: number | null
): boolean {
  switch (contractMode) {
    case 'DIGITDIFF':
      return digit !== barrier;
    case 'DIGITOVER':
      return digit > 1;
    case 'DIGITUNDER':
      return digit < 8;
    case 'DIGITEVEN':
      return digit % 2 === 0;
    case 'DIGITODD':
      return digit % 2 !== 0;
  }
}

function createSignal(wins: number, matches: number, priorRate: number): MarketScanSignal | null {
  if (matches === 0) return null;
  const winRate =
    (wins + priorRate * PREDICTION_PRIOR_MATCHES) /
    (matches + PREDICTION_PRIOR_MATCHES);
  return {
    winRate,
    matches,
    active: winRate > priorRate,
  };
}

function getSequenceSignal(
  digits: number[],
  contractMode: Exclude<ContractMode, 'DIGITMATCH'>,
  barrier: number | null,
  priorRate: number
): MarketScanSignal | null {
  if (digits.length <= SEQUENCE_LENGTH) return null;
  const context = digits.slice(-SEQUENCE_LENGTH);
  let wins = 0;
  let matches = 0;

  for (let nextIndex = SEQUENCE_LENGTH; nextIndex < digits.length - SEQUENCE_LENGTH; nextIndex += 1) {
    const matchesContext = context.every(
      (digit, offset) => digits[nextIndex - SEQUENCE_LENGTH + offset] === digit
    );
    if (!matchesContext) continue;
    matches += 1;
    if (isWinningDigit(digits[nextIndex]!, contractMode, barrier)) wins += 1;
  }

  return matches >= 3 ? createSignal(wins, matches, priorRate) : null;
}

function getAnalogySignal(
  digits: number[],
  contractMode: Exclude<ContractMode, 'DIGITMATCH'>,
  barrier: number | null,
  priorRate: number
): MarketScanSignal | null {
  if (digits.length <= ANALOG_PATTERN_LENGTH * 2) return null;
  const target = digits.slice(-ANALOG_PATTERN_LENGTH);
  const historicalEnd = digits.length - ANALOG_PATTERN_LENGTH;
  const analogs: Array<{ win: boolean; similarity: number }> = [];

  for (
    let start = 0;
    start + ANALOG_PATTERN_LENGTH < historicalEnd;
    start += 1
  ) {
    let matchingDigits = 0;
    for (let offset = 0; offset < ANALOG_PATTERN_LENGTH; offset += 1) {
      if (digits[start + offset] === target[offset]) matchingDigits += 1;
    }
    if (matchingDigits < ANALOG_PATTERN_LENGTH - 2) continue;
    const nextDigit = digits[start + ANALOG_PATTERN_LENGTH]!;
    analogs.push({
      win: isWinningDigit(nextDigit, contractMode, barrier),
      similarity: matchingDigits / ANALOG_PATTERN_LENGTH,
    });
  }

  const nearestAnalogs = analogs
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, 5);
  if (nearestAnalogs.length < 2) return null;

  const totalWeight = nearestAnalogs.reduce((sum, analog) => sum + analog.similarity, 0);
  const weightedWins = nearestAnalogs.reduce(
    (sum, analog) => sum + (analog.win ? analog.similarity : 0),
    0
  );
  const rate =
    (weightedWins + priorRate * PREDICTION_PRIOR_MATCHES) /
    (totalWeight + PREDICTION_PRIOR_MATCHES);
  return { winRate: rate, matches: nearestAnalogs.length, active: rate > priorRate };
}

function getDigitCluster(digit: number): number {
  return Math.floor(digit / 5) * 2 + digit % 2;
}

function getClusterVector(digits: number[]): number[] {
  const clusters = [0, 0, 0, 0];
  for (const digit of digits) clusters[getDigitCluster(digit)] += 1;
  return clusters.map((count) => count / digits.length);
}

function getClusterSignal(
  digits: number[],
  contractMode: Exclude<ContractMode, 'DIGITMATCH'>,
  barrier: number | null,
  priorRate: number
): MarketScanSignal | null {
  if (digits.length <= CLUSTER_WINDOW_SIZE * 2) return null;
  const currentWindowStart = digits.length - CLUSTER_WINDOW_SIZE;
  const currentVector = getClusterVector(digits.slice(currentWindowStart));
  const neighbors: Array<{ win: boolean; distance: number }> = [];

  for (
    let start = 0;
    start + CLUSTER_WINDOW_SIZE < currentWindowStart;
    start += 1
  ) {
    const historicalVector = getClusterVector(
      digits.slice(start, start + CLUSTER_WINDOW_SIZE)
    );
    const distance = historicalVector.reduce(
      (sum, value, index) => sum + Math.abs(value - currentVector[index]!),
      0
    ) / 2;
    neighbors.push({
      win: isWinningDigit(
        digits[start + CLUSTER_WINDOW_SIZE]!,
        contractMode,
        barrier
      ),
      distance,
    });
  }

  const nearestNeighbors = neighbors
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 5);
  if (nearestNeighbors.length < 3) return null;

  const weightedNeighbors = nearestNeighbors.map((neighbor) => ({
    ...neighbor,
    weight: Math.exp(-4 * neighbor.distance),
  }));
  const totalWeight = weightedNeighbors.reduce((sum, neighbor) => sum + neighbor.weight, 0);
  const weightedWins = weightedNeighbors.reduce(
    (sum, neighbor) => sum + (neighbor.win ? neighbor.weight : 0),
    0
  );
  const winRate =
    (weightedWins + priorRate * PREDICTION_PRIOR_MATCHES) /
    (totalWeight + PREDICTION_PRIOR_MATCHES);
  return { winRate, matches: nearestNeighbors.length, active: winRate > priorRate };
}

export function getScannableMarkets(symbols: ActiveSymbol[]): ActiveSymbol[] {
  return symbols.filter(
    (symbol) => symbol.exchange_is_open === 1 && symbol.is_trading_suspended === 0
  );
}

export function getContractBarrier(
  contractMode: ContractMode,
  differsDigit: number | null
): number | undefined {
  switch (contractMode) {
    case 'DIGITDIFF':
      return differsDigit ?? undefined;
    case 'DIGITOVER':
      return 1;
    case 'DIGITUNDER':
      return 8;
    default:
      return undefined;
  }
}

export function scoreMarket(
  symbol: ActiveSymbol,
  prices: number[],
  contractMode: Exclude<ContractMode, 'DIGITMATCH'>
): MarketScanCandidate | null {
  const predictionPrices = prices
    .filter((price) => Number.isFinite(price))
    .slice(-MARKET_SCAN_TICK_COUNT);
  const pipSize = pipSizeFromPip(symbol.pip_size);
  const digits = predictionPrices.map((price) => getLastDigit(price, pipSize));

  if (digits.length === 0) return null;

  const counts = Array.from({ length: 10 }, () => 0);
  for (const digit of digits) counts[digit] += 1;

  let barrier: number | null = null;
  let wins = 0;
  let baselineWinRate = 0.5;
  switch (contractMode) {
    case 'DIGITDIFF': {
      baselineWinRate = 0.9;
      barrier = 0;
      for (let digit = 1; digit < counts.length; digit += 1) {
        if (counts[digit] < counts[barrier]) barrier = digit;
      }
      wins = digits.length - counts[barrier];
      break;
    }
    case 'DIGITOVER':
      baselineWinRate = 0.8;
      barrier = 1;
      wins = digits.filter((digit) => digit > 1).length;
      break;
    case 'DIGITUNDER':
      baselineWinRate = 0.8;
      barrier = 8;
      wins = digits.filter((digit) => digit < 8).length;
      break;
    case 'DIGITEVEN':
      wins = digits.filter((digit) => digit % 2 === 0).length;
      break;
    case 'DIGITODD':
      wins = digits.filter((digit) => digit % 2 !== 0).length;
      break;
  }

  const observedWinRate =
    (wins + baselineWinRate * PREDICTION_PRIOR_MATCHES) /
    (digits.length + PREDICTION_PRIOR_MATCHES);
  const estimatedWinRate = getWilsonLowerBound(wins, digits.length);
  const predictionModels = {
    sequence: getSequenceSignal(digits, contractMode, barrier, baselineWinRate),
    analogy: getAnalogySignal(digits, contractMode, barrier, baselineWinRate),
    cluster: getClusterSignal(digits, contractMode, barrier, baselineWinRate),
    dominance: createSignal(wins, digits.length, baselineWinRate),
  };
  const activeSignalCount = Object.values(predictionModels)
    .filter((signal) => signal?.active)
    .length;
  const signalModels = Object.values(predictionModels).filter(
    (signal): signal is MarketScanSignal => signal !== null
  );
  const weightedModels = [
    { rate: observedWinRate, weight: 0.4 },
    ...signalModels.map((signal) => ({
      rate: signal.winRate,
      weight: 0.15 * signal.matches / (signal.matches + PREDICTION_PRIOR_MATCHES),
    })),
  ];
  const totalWeight = weightedModels.reduce((sum, model) => sum + model.weight, 0);
  const predictedWinRate = weightedModels.reduce(
    (sum, model) => sum + model.rate * model.weight,
    0
  ) / totalWeight;
  const eligibleForTrading =
    digits.length >= MINIMUM_MARKET_SCAN_TICKS &&
    activeSignalCount >= 2;

  return {
    symbol,
    contractMode,
    barrier,
    predictionPrices: predictionPrices.slice(-MARKET_SCAN_TICK_COUNT),
    estimatedWinRate,
    predictedWinRate,
    predictionModels,
    activeSignalCount,
    eligibleForTrading,
    probabilityEdge: predictedWinRate - baselineWinRate,
    sampleCount: digits.length,
  };
}

export function hasPriceReversalRisk(prices: number[]): boolean {
  const recent = prices.filter((price) => Number.isFinite(price)).slice(-9);
  if (recent.length < 9) return false;

  const midpoint = 4;
  const previousMove = recent[midpoint] - recent[0];
  const latestMove = recent[recent.length - 1] - recent[midpoint];
  if (previousMove === 0 || latestMove === 0 || previousMove * latestMove >= 0) return false;

  const averageTickMove = recent.slice(1).reduce(
    (total, price, index) => total + Math.abs(price - recent[index]),
    0
  ) / (recent.length - 1);
  const minimumMove = averageTickMove * 1.5;

  return Math.abs(previousMove) >= minimumMove && Math.abs(latestMove) >= minimumMove;
}
