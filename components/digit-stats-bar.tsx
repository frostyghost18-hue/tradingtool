'use client';

import { Localize } from '@deriv-com/translations';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { formatPercent } from '@/lib/locale-format';
import { useAppTranslations } from '@/components/custom/i18n-provider';
import { getDigitPercentageRanks } from '@/lib/digit-stats';
import type { ReactNode } from 'react';
import type { DigitStats } from '../lib/types';

interface DigitStatsBarProps {
  digitStats: DigitStats;
  selectedDigit: number | null;
  lastDigit?: number | null;
  headerRight?: ReactNode;
  onDigitSelect?: (digit: number) => void;
  disabled?: boolean;
}

export function DigitStatsBar({
  digitStats,
  selectedDigit,
  lastDigit = null,
  headerRight,
  onDigitSelect,
  disabled = false,
}: DigitStatsBarProps) {
  const { locale } = useAppTranslations();
  const ranks = getDigitPercentageRanks(digitStats.percentages);

  return (
    <div className="h-full flex flex-col min-h-0">
      <div className="mb-2 flex min-w-0 items-center justify-between gap-2 sm:mb-3">
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-xs">
          <Localize i18n_default_text="Last digit prediction" />
        </span>
        {headerRight}
      </div>
      <div className="flex-1 flex items-center min-h-0">
        <div className="grid w-full grid-cols-5 place-items-center gap-2 sm:gap-3">
        {digitStats.percentages.map((pct, digit) => {
          const isSelected = digit === selectedDigit;
          const rank = digitStats.totalTicks > 0 ? ranks[digit] : null;
          const isLiveDigit = digit === lastDigit;

          return (
            <div key={digit} className="relative flex w-full flex-col items-center gap-1.5 pt-1.5 sm:gap-2 sm:pt-2">
              {isLiveDigit && (
                <span
                  aria-label={`Latest tick digit ${digit}`}
                  className="live-digit-pointer absolute left-1/2 top-[-0.45rem] z-10 -translate-x-1/2"
                >
                  <span aria-hidden="true">▼</span>
                </span>
              )}
              <Button
                variant={isSelected ? 'default' : 'outline'}
                disabled={disabled || !onDigitSelect}
                onClick={() => onDigitSelect?.(digit)}
                data-digit={digit}
                data-selected={isSelected}
                data-rank={rank ?? 'none'}
                data-live-digit={isLiveDigit}
                className={cn(
                  'digit-tile h-12 w-full rounded-lg p-0 text-base font-bold shadow-sm disabled:opacity-100 sm:h-[4.5rem] sm:rounded-xl sm:text-2xl',
                )}
              >
                {digit}
              </Button>
              <span
                className={cn(
                  'text-xs font-mono',
                  rank === 'highest' && 'font-bold text-emerald-300',
                  rank === 'second-highest' && 'font-semibold text-blue-300',
                  rank === 'lowest' && 'font-bold text-red-400',
                  rank === 'second-lowest' && 'font-semibold text-amber-300',
                  !rank && 'text-muted-foreground'
                )}
              >
                {formatPercent(pct, 1, locale)}
              </span>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}
