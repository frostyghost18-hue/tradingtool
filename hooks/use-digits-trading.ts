'use client';

import { useState, useMemo, useCallback, useRef } from 'react';
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
} from '@deriv/core';
import { toast } from 'sonner';
import { useBaseTrading } from '@/hooks/use-base-trading';
import type { UseBaseTradingParams } from '@/hooks/use-base-trading';
import { computeDigitStats, getLastDigit } from '../lib/digit-stats';
import { getNextMartingaleStake, initialMartingaleProgress } from '../lib/martingale';
import type { MartingaleMode } from '../lib/martingale';
import { useAppTranslations } from '@/components/custom/i18n-provider';
import type { ContractMode, TradeType, DigitStats, OpenPosition, ClosedPosition } from '../lib/types';

const CONTRACT_TYPES = ['DIGITMATCH', 'DIGITDIFF', 'DIGITOVER', 'DIGITUNDER', 'DIGITEVEN', 'DIGITODD'];

type AutoTradingStatus = 'idle' | 'running' | 'stopping';

async function waitForContractSettlement(ws: NonNullable<UseBaseTradingParams['ws']>, contractId: number): Promise<number> {
  let unsubscribe: () => Promise<void> = async () => {};
  let hasSubscription = false;
  let finished = false;
  let disconnectTimer: ReturnType<typeof setInterval> | null = null;
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

  const interrupted = new Promise<never>((_, reject) => {
    disconnectTimer = setInterval(() => {
      if (!ws.isConnected) reject(new Error('Connection lost while waiting for the contract to settle.'));
    }, 500);
    timeout = setTimeout(
      () => reject(new Error('Timed out waiting for the contract to settle. Auto-trading was stopped.')),
      15 * 60 * 1000
    );
  });

  try {
    return await Promise.race([settlement, interrupted]);
  } finally {
    finished = true;
    if (disconnectTimer) clearInterval(disconnectTimer);
    if (timeout) clearTimeout(timeout);
    if (hasSubscription) await unsubscribe();
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
  setSelectedDigit: (digit: number) => void;
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
  autoTradingStatus: AutoTradingStatus;
  autoTradingTradeCount: number;
  autoTradingProfit: number;
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
  const [contractMode, setContractMode] = useState<ContractMode>('DIGITMATCH');
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
  const [autoTradingStatus, setAutoTradingStatus] = useState<AutoTradingStatus>('idle');
  const [autoTradingTradeCount, setAutoTradingTradeCount] = useState(0);
  const [autoTradingProfit, setAutoTradingProfit] = useState(0);
  const autoSessionRef = useRef<{ stopRequested: boolean } | null>(null);

  const setMartingaleValue = useCallback((mode: MartingaleMode, value: string) => {
    setMartingaleValues((current) => ({ ...current, [mode]: value }));
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
        setContractMode('DIGITMATCH');
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

    const needsBarrier = contractMode !== 'DIGITEVEN' && contractMode !== 'DIGITODD';

    return {
      contractType: contractMode,
      symbol: activeSymbol.underlying_symbol,
      amount: stakeNum,
      duration,
      durationUnit: 't',
      basis: 'stake' as const,
      currency: 'USD',
      ...(needsBarrier ? { barrier: selectedDigit } : {}),
    };
  }, [activeSymbol, contractMode, stake, duration, selectedDigit, isBuying]);

  const { proposal } = useProposal(tradingWs, tradingIsConnected, proposalParams);

  const buyContract = useCallback(async () => {
    if (autoSessionRef.current) {
      stopAutoTrading();
      return;
    }

    const hasRiskTarget = takeProfit.trim() !== '' || stopLoss.trim() !== '';
    if (!hasRiskTarget) {
      if (proposal) await buyWithProposal(proposal);
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
        throw new Error(localize('Set a take-profit or stop-loss target to start an automatic session.'));
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
      if (!activeSymbol) throw new Error(localize('Select a market before starting a trading session.'));
    } catch (error) {
      toast.error(localize('Risk settings are invalid'), {
        description: error instanceof Error ? error.message : localize('Check your risk settings and try again.'),
      });
      return;
    }

    const session = { stopRequested: false };
    autoSessionRef.current = session;
    setAutoTradingStatus('running');
    setAutoTradingTradeCount(0);
    setAutoTradingProfit(0);

    let sessionProfit = 0;
    let tradeCount = 0;
    let nextStake = baseStake;
    let martingaleProgress = { ...initialMartingaleProgress };
    let stopReason = '';

    try {
      while (!session.stopRequested) {
        if (!tradingWs.isConnected) throw new Error(localize('Connection lost. Auto-trading was stopped.'));

        const proposalParams = {
          proposal: 1,
          amount: nextStake,
          basis: 'stake',
          contract_type: contractMode,
          currency: 'USD',
          underlying_symbol: activeSymbol.underlying_symbol,
          duration,
          duration_unit: 't',
          ...(contractMode !== 'DIGITEVEN' && contractMode !== 'DIGITODD'
            ? { barrier: selectedDigit }
            : {}),
        };
        const proposalResponse = await tradingWs.send<ProposalResponse>(proposalParams);
        if (session.stopRequested) break;
        const quote = proposalResponse.proposal;
        if (!quote?.id || !Number.isFinite(quote.ask_price) || quote.ask_price <= 0) {
          throw new Error(localize('Could not get a valid proposal for the next trade.'));
        }

        const purchase = await buyWithProposal({
          id: quote.id,
          askPrice: quote.ask_price,
          payout: quote.payout,
          longcode: quote.longcode,
          minStake: Number(quote.validation_params?.stake?.min ?? 0),
          maxPayout: Number(quote.validation_params?.payout?.max ?? 0),
        });
        if (!purchase) throw new Error(localize('Trade purchase failed. Auto-trading was stopped.'));

        tradeCount += 1;
        setAutoTradingTradeCount(tradeCount);
        const settledProfit = await waitForContractSettlement(tradingWs, purchase.contractId);
        sessionProfit = Math.round((sessionProfit + settledProfit) * 100) / 100;
        setAutoTradingProfit(sessionProfit);

        if (takeProfitTarget !== null && sessionProfit >= takeProfitTarget) {
          stopReason = localize('Take-profit target reached.');
          break;
        }
        if (stopLossTarget !== null && sessionProfit <= -stopLossTarget) {
          stopReason = localize('Stop-loss limit reached.');
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
      }

      if (session.stopRequested) {
        stopReason = localize('Auto-trading stopped after the current contract settled.');
      } else if (!stopReason && tradeCount === 0) {
        stopReason = localize('Auto-trading stopped before the first trade.');
      }
      toast.success(localize('Trading session ended'), {
        description: localize('{{reason}} Final session P/L: {{profit}} USD across {{count}} trades.', {
          reason: stopReason,
          profit: sessionProfit.toFixed(2),
          count: tradeCount,
        }),
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : localize('Auto-trading stopped unexpectedly.');
      toast.error(localize('Auto-trading stopped'), { description: message });
    } finally {
      autoSessionRef.current = null;
      setAutoTradingStatus('idle');
    }
  }, [
    activeSymbol,
    buyWithProposal,
    contractMode,
    duration,
    isAuthenticated,
    localize,
    martingaleMode,
    martingaleValues,
    proposal,
    selectedDigit,
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
    setSelectedDigit,
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
    autoTradingStatus,
    autoTradingTradeCount,
    autoTradingProfit,
    stopAutoTrading,
  };
}
