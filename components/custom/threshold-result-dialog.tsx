'use client';

import { CircleAlert, Flag, TrendingDown, TrendingUp, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useAppTranslations } from '@/components/custom/i18n-provider';
import { formatSignedAmount } from '@/lib/locale-format';
import type { AutoTradingThresholdResult } from '@/hooks/use-digits-trading';

interface ThresholdResultDialogProps {
  result: AutoTradingThresholdResult | null;
  onClose: () => void;
}

export function ThresholdResultDialog({ result, onClose }: ThresholdResultDialogProps) {
  const { localize, locale } = useAppTranslations();
  const isTakeProfit = result?.outcome === 'take-profit';
  const OutcomeIcon = isTakeProfit ? Trophy : CircleAlert;
  const ProfitIcon = isTakeProfit ? TrendingUp : TrendingDown;

  return (
    <Dialog
      open={result !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="threshold-result-shell w-[calc(100%-2rem)] max-w-md overflow-visible rounded-2xl border-primary/45 bg-card p-0 text-foreground sm:rounded-2xl">
        {result && (
          <div className="relative px-5 pb-5 pt-12 sm:px-7 sm:pb-7">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <div
                className={`threshold-result-badge flex h-20 w-20 items-center justify-center rounded-full border-4 bg-card shadow-xl ${
                  isTakeProfit
                    ? 'border-emerald-400/80 text-emerald-400'
                    : 'border-rose-400/80 text-rose-400'
                }`}
              >
                <OutcomeIcon className="h-10 w-10" strokeWidth={2.5} />
              </div>
            </div>

            <DialogHeader className="space-y-2 text-center">
              <DialogTitle className="text-xl font-extrabold tracking-tight sm:text-2xl">
                <span className={isTakeProfit ? 'text-emerald-400' : 'text-rose-400'}>
                  {isTakeProfit ? localize('Take Profit') : localize('Stop Loss')}
                </span>{' '}
                {localize('Reached!')}
              </DialogTitle>
              <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                {isTakeProfit
                  ? localize('Your trading session ended after reaching its profit target.')
                  : localize('Your trading session ended after reaching its loss limit.')}
              </DialogDescription>
            </DialogHeader>

            <div className="my-5 flex items-center justify-center gap-2 text-xs font-semibold text-primary">
              {isTakeProfit ? (
                <Trophy className="h-4 w-4" />
              ) : (
                <Flag className="h-4 w-4" />
              )}
              <span>
                {isTakeProfit
                  ? localize('Well done! Your session is complete.')
                  : localize('Review your risk settings before trading again.')}
              </span>
            </div>

            {isTakeProfit && (
              <div aria-hidden="true" className="take-profit-celebration">
                {['💲', '💵', '💸', '💱', '🎉', '🎉', '🍾', '🎊', '🎊'].map(
                  (emoji, index) => (
                    <span className="take-profit-emoji" key={`${emoji}-${index}`}>
                      {emoji}
                    </span>
                  )
                )}
              </div>
            )}

            <div
              className={`grid grid-cols-[auto_1px_minmax(0,1fr)_1px_minmax(0,1fr)] items-center gap-2 rounded-xl border p-3 ${
                isTakeProfit
                  ? 'border-emerald-400/30 bg-emerald-500/5'
                  : 'border-rose-400/30 bg-rose-500/5'
              }`}
            >
              <ProfitIcon
                className={`h-7 w-7 ${isTakeProfit ? 'text-emerald-400' : 'text-rose-400'}`}
              />
              <div className="h-10 w-px bg-border" />
              <div className="min-w-0 text-center">
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  {localize('Session P/L')}
                </p>
                <p
                  className={`truncate text-base font-extrabold tabular-nums sm:text-lg ${
                    isTakeProfit ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {formatSignedAmount(result.profit, locale)} USD
                </p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="min-w-0 text-center">
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  {localize('Market')}
                </p>
                <p className="truncate text-sm font-bold text-foreground" title={result.market}>
                  {result.market}
                </p>
              </div>
            </div>

            <Button
              className="mt-5 h-11 w-full rounded-xl bg-primary font-bold text-primary-foreground shadow-lg shadow-primary/20 transition hover:brightness-110"
              onClick={onClose}
            >
              {localize('OK')}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
