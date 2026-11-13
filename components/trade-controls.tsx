'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Localize } from '@deriv-com/translations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useAppTranslations } from '@/components/custom/i18n-provider';
import { formatAmount } from '@/lib/locale-format';
import { getContractBarrier } from '@/lib/market-scanner';
import type {
  ContractMode,
  TradeType,
  DurationLimits,
  ProposalInfo,
  BuyResult,
} from '../lib/types';

interface TradeControlsProps {
  contractMode: ContractMode;
  selectedDigit: number;
  isConnected: boolean;
  stake: string;
  onStakeChange: (value: string) => void;
  duration: number;
  onDurationChange: (value: number) => void;
  durationLimits: DurationLimits;
  proposal: ProposalInfo | null;
  isProposalLoading: boolean;
  onBuy: () => void;
  isBuying: boolean;
  buyResult: BuyResult | null;
  buyError: string | null;
  onClearBuyResult: () => void;
  autoTradingStatus?: 'idle' | 'scanning' | 'running' | 'stopping';
  /**
   * Pins the Buy button above the footer (fixed) instead of inline. Driven by
   * the same useIsMobile state that picks the view's layout branch — a CSS
   * breakpoint here could disagree with the mounted branch during the
   * first-paint window, where useIsMobile is still false on every viewport.
   */
  isMobile?: boolean;
}

function getContractModeOptions(
  localize: (text: string) => string
): Record<TradeType, { value: ContractMode; label: string }[]> {
  return {
    'matches-differs': [{ value: 'DIGITDIFF', label: localize('Differs') }],
    'over-under': [
      { value: 'DIGITOVER', label: localize('Over 1') },
      { value: 'DIGITUNDER', label: localize('Under 8') },
    ],
    'even-odd': [
      { value: 'DIGITEVEN', label: localize('Even') },
      { value: 'DIGITODD', label: localize('Odd') },
    ],
  };
}

function getPredictionText(
  contractMode: ContractMode,
  localize: (text: string) => string
): string {
  switch (contractMode) {
    case 'DIGITMATCH':
      return localize('match');
    case 'DIGITDIFF':
      return localize('differ from');
    case 'DIGITOVER':
      return localize('be over');
    case 'DIGITUNDER':
      return localize('be under');
    case 'DIGITEVEN':
      return localize('be even');
    case 'DIGITODD':
      return localize('be odd');
  }
}

function showDigitInPrediction(contractMode: ContractMode): boolean {
  return contractMode !== 'DIGITEVEN' && contractMode !== 'DIGITODD';
}

export function ContractModeSelector({
  tradeType,
  contractMode,
  onContractModeChange,
  disabled = false,
}: {
  tradeType: TradeType;
  contractMode: ContractMode;
  onContractModeChange: (mode: ContractMode) => void;
  disabled?: boolean;
}) {
  const { localize } = useAppTranslations();
  const modeOptions = getContractModeOptions(localize)[tradeType];

  return (
    <ToggleGroup
      type="single"
      value={contractMode}
      disabled={disabled}
      onValueChange={(value) => {
        if (value) onContractModeChange(value as ContractMode);
      }}
      className="w-full gap-0 rounded-lg border border-border bg-muted/80 p-1"
    >
      {modeOptions.map((option) => (
        <ToggleGroupItem
          key={option.value}
          value={option.value}
          className="flex-1 rounded-md text-sm font-medium text-muted-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:font-bold data-[state=on]:shadow-sm hover:text-foreground"
        >
          {option.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}

export function TradeControls({
  contractMode,
  selectedDigit,
  isConnected,
  stake,
  onStakeChange,
  duration,
  onDurationChange,
  durationLimits,
  proposal,
  isProposalLoading,
  onBuy,
  isBuying,
  buyResult,
  buyError,
  onClearBuyResult,
  autoTradingStatus = 'idle',
  isMobile,
}: TradeControlsProps) {
  const { localize, locale } = useAppTranslations();
  const [durationDraft, setDurationDraft] = useState(String(duration));

  useEffect(() => {
    setDurationDraft(String(duration));
  }, [duration]);

  useEffect(() => {
    if (buyError) {
      toast.error(localize('Purchase Failed'), { description: buyError });
      onClearBuyResult();
    }
  }, [buyError, onClearBuyResult, localize]);

  useEffect(() => {
    if (buyResult) {
      if (autoTradingStatus === 'idle') {
        toast.success(localize('Contract Purchased'), {
          description: localize(
            'Buy price: {{buyPrice}} USD | Payout: {{payout}} USD | Balance: {{balance}} USD',
            {
              buyPrice: formatAmount(buyResult.buyPrice, locale),
              payout: formatAmount(buyResult.payout, locale),
              balance: formatAmount(buyResult.balanceAfter, locale),
            }
          ),
        });
      }
      onClearBuyResult();
    }
  }, [buyResult, autoTradingStatus, onClearBuyResult, localize, locale]);

  const isAutoTrading = autoTradingStatus !== 'idle';
  const buyButtonLabel = autoTradingStatus === 'stopping'
    ? localize('Stopping...')
    : autoTradingStatus === 'scanning'
      ? localize('Stop scanning')
      : autoTradingStatus === 'running'
        ? localize('Stop auto-trading')
        : isBuying
          ? localize('Purchasing...')
          : localize('Scan & trade');

  return (
    <div className="space-y-2 sm:space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label htmlFor="stake" className="text-xs text-muted-foreground">
            <Localize i18n_default_text="Stake" />
          </Label>
          <Input
            id="stake"
            type="number"
            value={stake}
            onChange={e => onStakeChange(e.target.value)}
            onKeyDown={e => {
              if (['e', 'E', '+', '-'].includes(e.key)) e.preventDefault();
            }}
            min={0}
            step="0.01"
            labelRight="USD"
            disabled={isAutoTrading}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="duration" className="text-xs text-muted-foreground">
            <Localize i18n_default_text="Duration" />
          </Label>
          <Input
            id="duration"
            type="number"
            value={durationDraft}
            onChange={e => {
              const value = e.target.value;
              setDurationDraft(value);
              const parsed = Number(value);
              if (value !== '' && Number.isInteger(parsed) &&
                parsed >= durationLimits.min && parsed <= durationLimits.max) {
                onDurationChange(parsed);
              }
            }}
            onBlur={() => {
              const parsed = Number(durationDraft);
              const value = durationDraft.trim() !== '' && Number.isInteger(parsed)
                ? Math.min(durationLimits.max, Math.max(durationLimits.min, parsed))
                : duration;
              setDurationDraft(String(value));
              onDurationChange(value);
            }}
            onKeyDown={e => {
              if (['e', 'E', '+', '-'].includes(e.key)) e.preventDefault();
            }}
            min={durationLimits.min}
            max={durationLimits.max}
            step={1}
            labelRight={localize('Ticks')}
            disabled={isAutoTrading}
          />
        </div>
      </div>

      <div className="rounded-lg border border-border p-2 sm:p-3 bg-muted/20 space-y-1.5 sm:space-y-2">
        <p className="text-[11px] sm:text-xs text-muted-foreground mb-0 sm:mb-1">
          <Localize i18n_default_text="Prediction" />
        </p>
        <p className="text-xs sm:text-sm font-medium">
          <Localize i18n_default_text="Last digit of the price will" />{' '}
          <span className="text-primary font-bold">
            {getPredictionText(contractMode, localize)}
          </span>
          {showDigitInPrediction(contractMode) && (
            <>
              {' '}
              <span className="inline-flex w-5 h-5 rounded-full bg-primary text-primary-foreground items-center justify-center text-xs font-bold">
                {getContractBarrier(contractMode, selectedDigit)}
              </span>
            </>
          )}
        </p>
        {(proposal || isProposalLoading) && (
          <div className="flex items-center justify-between pt-1 border-t border-border">
            <span className="text-xs text-muted-foreground">
              <Localize i18n_default_text="Payout" />
            </span>
            {isProposalLoading ? (
              <Skeleton className="h-4 w-24" />
            ) : (
              <span className="text-sm font-bold text-foreground">
                {formatAmount(proposal!.payout, locale)} USD
              </span>
            )}
          </div>
        )}
      </div>

      {/* Buy button — fixed above footer on mobile, inline on desktop */}
      <div
        className={
          isMobile
            ? 'fixed bottom-[calc(env(safe-area-inset-bottom)+2.5rem)] left-3 right-3'
            : undefined
        }
      >
        <Button
          className="h-11 w-full rounded-lg bg-[rgb(var(--buy-background))] px-6 font-bold text-[rgb(var(--buy-foreground))] shadow-[0_0_22px_rgb(0_195_144/0.18)] hover:brightness-110 sm:h-12 sm:px-8"
          disabled={isAutoTrading ? autoTradingStatus === 'stopping' : !isConnected || isBuying}
          onClick={onBuy}
        >
          {buyButtonLabel}
        </Button>
      </div>

    </div>
  );
}
