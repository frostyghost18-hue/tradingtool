'use client';

import { Localize } from '@deriv-com/translations';
import { formatTickPrice } from '@/lib/locale-format';
import { useAppTranslations } from '@/components/custom/i18n-provider';
import type { Tick } from '../lib/types';
import type { ActiveSymbol } from '../lib/types';

interface CurrentTickDisplayProps {
  tick: Tick | null;
  lastDigit: number | null;
  activeSymbol: ActiveSymbol | null;
  pipSize: number;
  compact?: boolean;
  inline?: boolean;
}

export function CurrentTickDisplay({
  tick,
  lastDigit,
  activeSymbol,
  pipSize,
  compact = false,
  inline = false,
}: CurrentTickDisplayProps) {
  const { locale } = useAppTranslations();

  if (!tick || !activeSymbol) {
    if (inline) {
      return (
        <div className="flex shrink-0 items-baseline gap-1.5 whitespace-nowrap text-right">
          <span className="text-[8px] font-semibold uppercase tracking-wide text-muted-foreground">
            <Localize i18n_default_text="Live price" />
          </span>
          <span className="font-mono text-[11px] font-bold tabular-nums text-muted-foreground sm:text-xs">
            ---
          </span>
        </div>
      );
    }

    return (
      <div className={`text-center ${compact ? 'py-2' : 'py-3 sm:py-6'}`}>
        <div className="text-xl sm:text-2xl font-mono text-muted-foreground">---</div>
      </div>
    );
  }

  const priceStr = formatTickPrice(tick.quote, pipSize, locale);
  const priceWithoutLast = priceStr.slice(0, -1);
  const lastDigitStr = priceStr.slice(-1);

  if (inline) {
    return (
      <div className="flex shrink-0 items-baseline gap-1.5 whitespace-nowrap text-right">
        <span className="text-[8px] font-semibold uppercase tracking-wide text-muted-foreground">
          <Localize i18n_default_text="Live price" />
        </span>
        <span className="font-mono text-[11px] font-bold tabular-nums text-foreground sm:text-xs">
          {priceWithoutLast}
          <span className="ml-px text-[28px] font-bold leading-none text-primary sm:text-[32px]">{lastDigitStr}</span>
        </span>
      </div>
    );
  }

  if (compact) {
    return (
      <div className="flex min-h-16 w-full items-center justify-between gap-3 rounded-lg border border-border/80 bg-background/70 p-3 text-left sm:min-h-40 sm:flex-col sm:justify-center sm:gap-0 sm:p-3 sm:text-center">
        <div className="min-w-0">
          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground sm:text-[10px]">
            <Localize i18n_default_text="Live price" />
          </span>
          <div className="mt-1 break-all font-mono text-sm font-bold tabular-nums text-foreground sm:mt-2 sm:text-lg">
            <span>{priceWithoutLast}</span>
            <span className="ml-px text-4xl font-bold leading-none text-primary sm:text-5xl">{lastDigitStr}</span>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 text-[10px] text-muted-foreground sm:mt-2">
          <Localize i18n_default_text="Last digit" />
          <span className="flex h-5 min-w-5 items-center justify-center rounded bg-primary px-1 font-bold text-primary-foreground">
            {lastDigit}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center py-2 sm:py-4">
      <div className="text-2xl sm:text-4xl lg:text-5xl font-mono font-bold tracking-wide">
        <span className="text-foreground">{priceWithoutLast}</span>
        <span className="text-primary text-3xl sm:text-5xl lg:text-6xl">{lastDigitStr}</span>
      </div>
      <div className="mt-1 sm:mt-2 inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-muted-foreground">
        <span>
          <Localize i18n_default_text="Last Digit:" />
        </span>
        <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
          {lastDigit}
        </span>
      </div>
    </div>
  );
}
