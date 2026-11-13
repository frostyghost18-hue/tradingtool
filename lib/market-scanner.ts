import type { ActiveSymbol } from '@deriv/core';
import { getLastDigit, pipSizeFromPip } from '@/lib/digit-stats';
import type { ContractMode } from '@/lib/types';

export const MARKET_SCAN_TICK_COUNT = 100;
export const MARKET_SCAN_DURATION_SECONDS = 15;
export const MINIMUM_MARKET_SCAN_TICKS = 80;

export interface MarketScanCandidate {
  symbol: ActiveSymbol;
  contractMode: ContractMode;
  barrier: number | null;
  estimatedWinRate: number;
  sampleCount: number;
}

export function getScannableMarkets(symbols: ActiveSymbol[]): ActiveSymbol[] {
  return symbols.filter(
    (symbol) => symbol.exchange_is_open === 1 && symbol.is_trading_suspended === 0
  );
}

export function getContractBarrier(contractMode: ContractMode, differsDigit: number): number | undefined {
  switch (contractMode) {
    case 'DIGITDIFF':
      return differsDigit;
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
  contractMode: ContractMode
): MarketScanCandidate | null {
  if (contractMode === 'DIGITMATCH') return null;
  const pipSize = pipSizeFromPip(symbol.pip_size);
  const digits = prices
    .filter((price) => Number.isFinite(price))
    .map((price) => getLastDigit(price, pipSize));

  if (digits.length < MINIMUM_MARKET_SCAN_TICKS) return null;

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

  const estimatedWinRate = wins / digits.length;
  if (estimatedWinRate <= baselineWinRate) return null;

  return {
    symbol,
    contractMode,
    barrier,
    estimatedWinRate,
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
