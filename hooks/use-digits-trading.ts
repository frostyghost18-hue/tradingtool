'use client';

import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import {
  useProposal,
  useBuy,
} from '@deriv/core';
import type {
  ActiveSymbol,
  Tick,
  ProposalInfo,
  ProposalParams,
  DurationLimits,
  BuyResult,
  ProposalResponse,
  TicksHistoryResponse,
} from '@deriv/core';
import { toast } from 'sonner';
import { useBaseTrading } from '@/hooks/use-base-trading';
import type { UseBaseTradingParams } from '@/hooks/use-base-trading';
import { computeDigitStats, getLastDigit } from '../lib/digit-stats';
import {
  getContractBarrier,
  hasPriceReversalRisk,
  MARKET_SCAN_TICK_COUNT,
  scoreMarket,
} from '../lib/market-scanner';
import type { MarketScanCandidate } from '../lib/market-scanner';
import { getNextMartingaleStake, initialMartingaleProgress } from '../lib/martingale';
import type { MartingaleMode } from '../lib/martingale';
import { useAppTranslations } from '@/components/custom/i18n-provider';
import type { ContractMode, TradeType, DigitStats, OpenPosition, ClosedPosition } from '../lib/types';

const CONTRACT_TYPES = ['DIGITDIFF', 'DIGITOVER', 'DIGITUNDER', 'DIGITEVEN', 'DIGITODD'];

type AutoTradingStatus = 'idle' | 'scanning' | 'running' | 'stopping';
const CONTRACT_SETTLEMENT_TIMEOUT_MS = 15 * 60 * 1000;
const CONNECTION_POLL_INTERVAL_MS = 250;
const MARKET_SCAN_CONCURRENCY = 6;
const MARKET_RESCAN_DELAY_MS = 3000;
const CONNECTION_LOST = Symbol('connection-lost');

async function fetchTickHistory(
  ws: NonNullable<UseBaseTradingParams['ws']>,
  symbol: string,
  count: number,
  shouldStop: () => boolean
): Promise<number[] | null> {
  const deadline = Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS;

  while (true) {
    const connected = await waitForConnection(ws, deadline, shouldStop);
    if (!connected) return null;

    let connectionDropped = false;
    const removeConnectionListener = ws.onConnectionStateChange((isConnected) => {
      if (!isConnected) connectionDropped = true;
    });

    try {
      const response = await ws.send<TicksHistoryResponse>({
        ticks_history: symbol,
        end: 'latest',
        count,
        style: 'ticks',
      });
      if (connectionDropped) continue;

      return (response.history?.prices ?? [])
        .map(Number)
        .filter((price) => Number.isFinite(price));
    } catch (error) {
      if (!connectionDropped && ws.isConnected) throw error;
      if (shouldStop()) return null;
      if (Date.now() >= deadline) {
        throw new Error('Timed out retrieving tick history after the WebSocket connection was interrupted.');
      }
    } finally {
      removeConnectionListener();
    }
  }
}

async function scanMarkets(
  ws: NonNullable<UseBaseTradingParams['ws']>,
  symbols: ActiveSymbol[],
  contractMode: ContractMode,
  shouldStop: () => boolean
): Promise<MarketScanCandidate | null> {
  const candidates: MarketScanCandidate[] = [];
  const failures: string[] = [];
  const openSymbols = symbols.filter(
    (symbol) => symbol.exchange_is_open === 1 && symbol.is_trading_suspended === 0
  );
  if (openSymbols.length === 0) {
    throw new Error('No open, unsuspended markets are available to scan.');
  }

  for (let index = 0; index < openSymbols.length; index += MARKET_SCAN_CONCURRENCY) {
    if (shouldStop()) return null;
    const batch = openSymbols.slice(index, index + MARKET_SCAN_CONCURRENCY);
    const results = await Promise.all(batch.map(async (symbol) => {
      try {
        const prices = await fetchTickHistory(
          ws,
          symbol.underlying_symbol,
          MARKET_SCAN_TICK_COUNT,
          shouldStop
        );
        if (!prices || shouldStop()) return null;
        return scoreMarket(symbol, prices, contractMode);
      } catch (error) {
        failures.push(
          `${symbol.underlying_symbol}: ${error instanceof Error ? error.message : String(error)}`
        );
        return null;
      }
    }));

    for (const candidate of results) {
      if (candidate) candidates.push(candidate);
    }
  }

  if (shouldStop()) return null;
  if (failures.length > 0) {
    console.warn('[market scanner] Some markets could not be evaluated.', failures);
  }
  if (candidates.length === 0 && failures.length === openSymbols.length) {
    throw new Error('The market scanner could not retrieve tick history for any available market.');
  }

  candidates.sort((a, b) =>
    b.estimatedWinRate - a.estimatedWinRate ||
    b.sampleCount - a.sampleCount ||
    a.symbol.underlying_symbol.localeCompare(b.symbol.underlying_symbol)
  );
  return candidates[0] ?? null;
}

async function waitBeforeRescan(shouldStop: () => boolean): Promise<void> {
  const deadline = Date.now() + MARKET_RESCAN_DELAY_MS;
  while (!shouldStop() && Date.now() < deadline) {
    await new Promise((resolve) => setTimeout(resolve, CONNECTION_POLL_INTERVAL_MS));
  }
}

export interface AutoTradingThresholdResult {
  outcome: 'take-profit' | 'stop-loss';
  profit: number;
  market: string;
}

async function waitForConnection(
  ws: NonNullable<UseBaseTradingParams['ws']>,
  deadline: number,
  shouldStop: () => boolean = () => false
): Promise<boolean> {
  while (!ws.isConnected) {
    if (shouldStop()) return false;
    const remaining = deadline - Date.now();
    if (remaining <= 0) {
      throw new Error('Timed out waiting for the WebSocket connection to recover.');
    }
    await new Promise((resolve) => setTimeout(resolve, Math.min(CONNECTION_POLL_INTERVAL_MS, remaining)));
  }
  return true;
}

async function waitForContractSettlement(
  ws: NonNullable<UseBaseTradingParams['ws']>,
  contractId: number
): Promise<number> {
  const deadline = Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS;

  while (true) {
    await waitForConnection(ws, deadline);

    let unsubscribe: () => Promise<void> = async () => {};
    let hasSubscription = false;
    let finished = false;
    let connectionDropped = false;
    let removeConnectionListener = () => {};
    let timeout: ReturnType<typeof setTimeout> | null = null;

    const settlement = new Promise<number>((resolve, reject) => {
      void ws.subscribe(
        { proposal_open_contract: 1, contract_id: contractId },
        (data) => {
          const contract = data.proposal_open_contract as Partial<OpenPosition> | undefined;
          if (!contract) return;
          const isClosed = contract.is_sold === 1 || contract.is_expired === 1 ||
            (typeof contract.status === 'string' && contract.status !== 'open');
          if (!isClosed) return;

          const profit = Number(contract.profit);
          if (!Number.isFinite(profit)) {
            reject(new Error('The settled contract did not include a valid profit/loss value.'));
            return;
          }
          resolve(profit);
        }
      ).then((subscription) => {
        unsubscribe = subscription.unsubscribe;
        hasSubscription = true;
        if (finished) void unsubscribe();
      }).catch(reject);
    });

    const connectionLost = new Promise<typeof CONNECTION_LOST>((resolve) => {
      removeConnectionListener = ws.onConnectionStateChange((connected) => {
        if (connected) return;
        connectionDropped = true;
        resolve(CONNECTION_LOST);
      });
    });

    const remaining = deadline - Date.now();
    const timeoutPromise = new Promise<never>((_, reject) => {
      timeout = setTimeout(
        () => reject(new Error('Timed out waiting for the contract to settle. Auto-trading was stopped.')),
        Math.max(0, remaining)
      );
    });

    try {
      const result = await Promise.race([settlement, connectionLost, timeoutPromise]);
      if (result !== CONNECTION_LOST) return result;
    } catch (error) {
      if (!connectionDropped && ws.isConnected) throw error;
    } finally {
      finished = true;
      removeConnectionListener();
      if (timeout) clearTimeout(timeout);
      if (hasSubscription) await unsubscribe();
    }
  }
}

interface UseDigitsTradingReturn {
  isConnected: boolean;
  isLoading: boolean;
  error: string | null;
  symbols: ActiveSymbol[];
  activeSymbol: ActiveSymbol | null;
  selectSymbol: (symbol: string) => void;
  currentTick: Tick | null;
  lastDigit: number | null;
  digitStats: DigitStats;
  tradeType: TradeType;
  setTradeType: (type: TradeType) => void;
  contractMode: ContractMode;
  setContractMode: (mode: ContractMode) => void;
  selectedDigit: number;
  contractsAvailable: boolean;
  pipSize: number;
  stake: string;
  setStake: (value: string) => void;
  duration: number;
  setDuration: (value: number) => void;
  durationLimits: DurationLimits;
  defaultStake: number;
  proposal: ProposalInfo | null;
  isProposalLoading: boolean;
  buyContract: () => Promise<void>;
  isBuying: boolean;
  buyResult: BuyResult | null;
  buyError: string | null;
  clearBuyResult: () => void;
  openPositions: OpenPosition[];
  closedPositions: ClosedPosition[];
  sellContract: (contractId: number, bidPrice: string) => Promise<void>;
  sellingId: number | null;
  sellError: string | null;
  clearSellError: () => void;
  takeProfit: string;
  setTakeProfit: (value: string) => void;
  stopLoss: string;
  setStopLoss: (value: string) => void;
  martingaleMode: MartingaleMode;
  setMartingaleMode: (value: MartingaleMode) => void;
  martingaleValues: Record<MartingaleMode, string>;
  setMartingaleValue: (mode: MartingaleMode, value: string) => void;
  thresholdResult: AutoTradingThresholdResult | null;
  clearThresholdResult: () => void;
  autoTradingStatus: AutoTradingStatus;
  autoTradingTradeCount: number;
  autoTradingProfit: number;
  autoTradingMarket: string | null;
  autoTradingEstimatedWinRate: number | null;
  stopAutoTrading: () => void;
}

export type UseDigitsTradingParams = Pick<UseBaseTradingParams, 'ws' | 'isConnected' | 'isExhausted' | 'isAuthenticated' | 'onAuthWSFailed'>;

export function useDigitsTrading({ ws, isConnected, isExhausted, isAuthenticated, onAuthWSFailed }: UseDigitsTradingParams): UseDigitsTradingReturn {
  const { localize } = useAppTranslations();
  const {
    ws: tradingWs,
    isConnected: tradingIsConnected,
    isLoading,
    error,
    symbols,
    activeSymbol,
    selectSymbol,
    currentTick,
    prices,
    pipSize,
    contractsAvailable,
    durationLimits,
    defaultStake,
    openPositions,
    closedPositions,
    sellContract,
    sellingId,
    sellError,
    clearSellError,
  } = useBaseTrading({ ws, isConnected, isExhausted, isAuthenticated, onAuthWSFailed, contractTypes: CONTRACT_TYPES });

  // Digits-specific trade state
  const [tradeType, setTradeTypeRaw] = useState<TradeType>('matches-differs');
  const [contractMode, setContractMode] = useState<ContractMode>('DIGITDIFF');
  const [selectedDigit, setSelectedDigit] = useState<number>(5);
  const [stake, setStake] = useState<string>('2.5');
  const [duration, setDuration] = useState<number>(2);
  const [takeProfit, setTakeProfit] = useState('5');
  const [stopLoss, setStopLoss] = useState('25');
  const [martingaleMode, setMartingaleMode] = useState<MartingaleMode>('classic');
  const [martingaleValues, setMartingaleValues] = useState<Record<MartingaleMode, string>>({
    classic: '1.85',
    dynamic: '1.85',
    'super-hybrid': '1.85',
  });
  const [thresholdResult, setThresholdResult] = useState<AutoTradingThresholdResult | null>(null);
  const [autoTradingStatus, setAutoTradingStatus] = useState<AutoTradingStatus>('idle');
  const [autoTradingTradeCount, setAutoTradingTradeCount] = useState(0);
  const [autoTradingProfit, setAutoTradingProfit] = useState(0);
  const [autoTradingMarket, setAutoTradingMarket] = useState<string | null>(null);
  const [autoTradingEstimatedWinRate, setAutoTradingEstimatedWinRate] = useState<number | null>(null);
  const autoSessionRef = useRef<{ stopRequested: boolean } | null>(null);
  const selectSymbolRef = useRef(selectSymbol);

  useEffect(() => {
    selectSymbolRef.current = selectSymbol;
  }, [selectSymbol]);

  const setMartingaleValue = useCallback((mode: MartingaleMode, value: string) => {
    setMartingaleValues((current) => ({ ...current, [mode]: value }));
  }, []);

  const clearThresholdResult = useCallback(() => {
    setThresholdResult(null);
  }, []);

  const stopAutoTrading = useCallback(() => {
    if (!autoSessionRef.current) return;
    autoSessionRef.current.stopRequested = true;
    setAutoTradingStatus('stopping');
  }, []);

  // Reset contract mode to the first option of the selected trade type
  const setTradeType = useCallback((type: TradeType) => {
    setTradeTypeRaw(type);
    switch (type) {
      case 'matches-differs':
        setContractMode('DIGITDIFF');
        break;
      case 'over-under':
        setContractMode('DIGITOVER');
        break;
      case 'even-odd':
        setContractMode('DIGITEVEN');
        break;
    }
  }, []);

  const digitStats: DigitStats = useMemo(
    () => computeDigitStats(prices, pipSize),
    [prices, pipSize]
  );

  const lastDigit = useMemo(() => {
    if (currentTick) {
      return getLastDigit(currentTick.quote, pipSize);
    }
    if (prices.length > 0) {
      return getLastDigit(prices[prices.length - 1], pipSize);
    }
    return null;
  }, [currentTick, prices, pipSize]);

  const {
    buyContract: buyWithProposal,
    isBuying,
    buyResult,
    buyError,
    clearBuyResult,
  } = useBuy(tradingWs, tradingIsConnected);

  // Null out params while a buy is in-flight — forces useProposal to unsubscribe
  // the consumed proposal ID. When isBuying flips back to false, the memo returns
  // real params and useProposal re-subscribes to get a fresh proposal.
  const proposalParams: ProposalParams | null = useMemo(() => {
    if (isBuying || !activeSymbol) return null;
    const stakeNum = parseFloat(stake);
    if (!stakeNum || stakeNum <= 0) return null;

    const barrier = getContractBarrier(contractMode, selectedDigit);

    return {
      contractType: contractMode,
      symbol: activeSymbol.underlying_symbol,
      amount: stakeNum,
      duration,
      durationUnit: 't',
      basis: 'stake' as const,
      currency: 'USD',
      ...(barrier !== undefined ? { barrier } : {}),
    };
  }, [activeSymbol, contractMode, stake, duration, selectedDigit, isBuying]);

  const { proposal } = useProposal(tradingWs, tradingIsConnected, proposalParams);

  const buyContract = useCallback(async () => {
    if (autoSessionRef.current) {
      stopAutoTrading();
      return;
    }

    const parseTarget = (value: string, label: string): number | null => {
      if (value.trim() === '') return null;
      const parsed = Number(value);
      if (!Number.isFinite(parsed) || parsed <= 0) {
        throw new Error(localize('{{label}} must be greater than zero.', { label }));
      }
      return parsed;
    };

    let takeProfitTarget: number | null;
    let stopLossTarget: number | null;
    const baseStake = Number(stake);
    const multiplier = Number(martingaleValues[martingaleMode]);
    try {
      takeProfitTarget = parseTarget(takeProfit, localize('Take profit'));
      stopLossTarget = parseTarget(stopLoss, localize('Stop loss'));
      if (takeProfitTarget === null && stopLossTarget === null) {
        throw new Error(localize('Set a take-profit or stop-loss target before starting the market scanner.'));
      }
      if (!Number.isFinite(baseStake) || baseStake <= 0) {
        throw new Error(localize('Stake must be greater than zero.'));
      }
      if (!Number.isFinite(multiplier) || multiplier < 1) {
        throw new Error(localize('Martingale multiplier must be at least 1.'));
      }
      if (!tradingWs?.isConnected || !tradingIsConnected || !isAuthenticated) {
        throw new Error(localize('Log in and connect before starting an automatic trading session.'));
      }
      if (symbols.length === 0) throw new Error(localize('No markets are available to scan.'));
      if (contractMode === 'DIGITMATCH') {
        throw new Error(localize('Matches contracts are not available in the market scanner.'));
      }
    } catch (error) {
      toast.error(localize('Risk settings are invalid'), {
        description: error instanceof Error ? error.message : localize('Check your risk settings and try again.'),
      });
      return;
    }

    const session = { stopRequested: false };
    autoSessionRef.current = session;
    setThresholdResult(null);
    setAutoTradingStatus('scanning');
    setAutoTradingTradeCount(0);
    setAutoTradingProfit(0);
    setAutoTradingMarket(null);
    setAutoTradingEstimatedWinRate(null);

    let sessionProfit = 0;
    let tradeCount = 0;
    let nextStake = baseStake;
    let martingaleProgress = { ...initialMartingaleProgress };
    let stopReason = '';
    let reachedThreshold: AutoTradingThresholdResult | null = null;
    const currentMarketRef: { current: ActiveSymbol | null } = { current: null };
    let currentBarrier = selectedDigit;

    const scanForMarket = async (): Promise<MarketScanCandidate | null> => {
      setAutoTradingStatus('scanning');
      setAutoTradingMarket(null);
      setAutoTradingEstimatedWinRate(null);

      while (!session.stopRequested) {
        const connected = await waitForConnection(
          tradingWs,
          Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS,
          () => session.stopRequested
        );
        if (!connected) return null;

        const candidate = await scanMarkets(
          tradingWs,
          symbols,
          contractMode,
          () => session.stopRequested
        );
        if (candidate) return candidate;
        await waitBeforeRescan(() => session.stopRequested);
      }
      return null;
    };

    const useScannedMarket = (candidate: MarketScanCandidate) => {
      currentMarketRef.current = candidate.symbol;
      if (candidate.barrier !== null) {
        currentBarrier = candidate.barrier;
        setSelectedDigit(candidate.barrier);
      }
      selectSymbolRef.current(candidate.symbol.underlying_symbol);
      setAutoTradingMarket(
        candidate.symbol.underlying_symbol_name || candidate.symbol.underlying_symbol
      );
      setAutoTradingEstimatedWinRate(candidate.estimatedWinRate);
      setAutoTradingStatus('running');
    };

    try {
      const firstMarket = await scanForMarket();
      if (!firstMarket) {
        stopReason = localize('Market scan stopped before a qualifying market was found.');
      } else {
        useScannedMarket(firstMarket);
      }

      while (!session.stopRequested) {
        const market = currentMarketRef.current;
        if (!market) {
          throw new Error(localize('The market scanner did not select a market.'));
        }
        const connected = await waitForConnection(
          tradingWs,
          Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS,
          () => session.stopRequested
        );
        if (!connected) break;

        const barrier = getContractBarrier(contractMode, currentBarrier);
        const proposalParams = {
          proposal: 1,
          amount: nextStake,
          basis: 'stake',
          contract_type: contractMode,
          currency: 'USD',
          underlying_symbol: market.underlying_symbol,
          duration,
          duration_unit: 't',
          ...(barrier !== undefined ? { barrier } : {}),
        };
        let proposalResponse: ProposalResponse;
        let connectionDropped = false;
        const removeConnectionListener = tradingWs.onConnectionStateChange((isConnected) => {
          if (!isConnected) connectionDropped = true;
        });
        try {
          proposalResponse = await tradingWs.send<ProposalResponse>(proposalParams);
        } catch (error) {
          if (!connectionDropped && tradingWs.isConnected) throw error;
          if (session.stopRequested) break;
          const reconnected = await waitForConnection(
            tradingWs,
            Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS,
            () => session.stopRequested
          );
          if (!reconnected) break;
          continue;
        } finally {
          removeConnectionListener();
        }
        if (session.stopRequested) break;
        const quote = proposalResponse.proposal;
        if (!quote?.id || !Number.isFinite(quote.ask_price) || quote.ask_price <= 0) {
          throw new Error(localize('Could not get a valid proposal for the next trade.'));
        }

        if (!tradingWs.isConnected) {
          const reconnected = await waitForConnection(
            tradingWs,
            Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS,
            () => session.stopRequested
          );
          if (!reconnected) break;
          continue;
        }

        let connectionDroppedDuringPurchase = false;
        const removePurchaseConnectionListener = tradingWs.onConnectionStateChange((isConnected) => {
          if (!isConnected) connectionDroppedDuringPurchase = true;
        });
        let purchase: Awaited<ReturnType<typeof buyWithProposal>>;
        try {
          purchase = await buyWithProposal({
            id: quote.id,
            askPrice: quote.ask_price,
            payout: quote.payout,
            longcode: quote.longcode,
            minStake: Number(quote.validation_params?.stake?.min ?? 0),
            maxPayout: Number(quote.validation_params?.payout?.max ?? 0),
          });
        } finally {
          removePurchaseConnectionListener();
        }
        if (!purchase) {
          if (connectionDroppedDuringPurchase || !tradingWs.isConnected) {
            throw new Error(localize(
              'The connection was interrupted while confirming a purchase. Check your transactions before starting another session.'
            ));
          }
          throw new Error(localize('Trade purchase failed. Auto-trading was stopped.'));
        }
        clearBuyResult();

        tradeCount += 1;
        setAutoTradingTradeCount(tradeCount);
        const settledProfit = await waitForContractSettlement(tradingWs, purchase.contractId);
        sessionProfit = Math.round((sessionProfit + settledProfit) * 100) / 100;
        setAutoTradingProfit(sessionProfit);

        if (takeProfitTarget !== null && sessionProfit >= takeProfitTarget) {
          stopReason = localize('Take-profit target reached.');
          reachedThreshold = {
            outcome: 'take-profit',
            profit: sessionProfit,
            market: market.underlying_symbol_name || market.underlying_symbol,
          };
          setThresholdResult(reachedThreshold);
          break;
        }
        if (stopLossTarget !== null && sessionProfit <= -stopLossTarget) {
          stopReason = localize('Stop-loss limit reached.');
          reachedThreshold = {
            outcome: 'stop-loss',
            profit: sessionProfit,
            market: market.underlying_symbol_name || market.underlying_symbol,
          };
          setThresholdResult(reachedThreshold);
          break;
        }

        const next = getNextMartingaleStake(
          baseStake,
          multiplier,
          martingaleMode,
          settledProfit,
          martingaleProgress
        );
        nextStake = next.stake;
        if (!Number.isFinite(nextStake) || nextStake <= 0) {
          throw new Error(localize('Martingale stake exceeded the supported numeric range. Auto-trading was stopped.'));
        }
        martingaleProgress = next.progress;

        if (!session.stopRequested) {
          const recentPrices = await fetchTickHistory(
            tradingWs,
            market.underlying_symbol,
            9,
            () => session.stopRequested
          );
          if (session.stopRequested) break;

          if (recentPrices && hasPriceReversalRisk(recentPrices)) {
            const nextMarket = await scanForMarket();
            if (!nextMarket) break;
            useScannedMarket(nextMarket);
          }
        }
      }

      if (session.stopRequested) {
        stopReason = localize('Auto-trading stopped after the current contract settled.');
      } else if (!stopReason && tradeCount === 0) {
        stopReason = localize('Auto-trading stopped before the first trade.');
      }
      if (!reachedThreshold) {
        toast.success(localize('Trading session ended'), {
          description: localize('{{reason}} Final session P/L: {{profit}} USD across {{count}} trades.', {
            reason: stopReason,
            profit: sessionProfit.toFixed(2),
            count: tradeCount,
          }),
        });
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : localize('Auto-trading stopped unexpectedly.');
      toast.error(localize('Auto-trading stopped'), { description: message });
    } finally {
      autoSessionRef.current = null;
      setAutoTradingStatus('idle');
    }
  }, [
    buyWithProposal,
    clearBuyResult,
    contractMode,
    duration,
    isAuthenticated,
    localize,
    martingaleMode,
    martingaleValues,
    selectedDigit,
    symbols,
    stake,
    stopAutoTrading,
    stopLoss,
    takeProfit,
    tradingIsConnected,
    tradingWs,
  ]);

  return {
    isConnected,
    isLoading,
    error,
    symbols,
    activeSymbol,
    selectSymbol,
    currentTick,
    lastDigit,
    digitStats,
    tradeType,
    setTradeType,
    contractMode,
    setContractMode,
    selectedDigit,
    contractsAvailable,
    pipSize,
    stake,
    setStake,
    duration,
    setDuration,
    durationLimits,
    defaultStake,
    proposal,
    isProposalLoading: isConnected && proposalParams !== null && proposal === null,
    buyContract,
    isBuying,
    buyResult,
    buyError,
    clearBuyResult,
    openPositions,
    closedPositions,
    sellContract,
    sellingId,
    sellError,
    clearSellError,
    takeProfit,
    setTakeProfit,
    stopLoss,
    setStopLoss,
    martingaleMode,
    setMartingaleMode,
    martingaleValues,
    setMartingaleValue,
    thresholdResult,
    clearThresholdResult,
    autoTradingStatus,
    autoTradingTradeCount,
    autoTradingProfit,
    autoTradingMarket,
    autoTradingEstimatedWinRate,
    stopAutoTrading,
  };
}
