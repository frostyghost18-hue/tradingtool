'use client';

import { Activity, CheckCircle2, Radar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppTranslations } from '@/components/custom/i18n-provider';
import type { AutoTradingScanProgress } from '@/hooks/use-digits-trading';

interface MarketScannerNotificationProps {
  progress: AutoTradingScanProgress | null;
  status: 'idle' | 'scanning' | 'running' | 'stopping';
  onStop: () => void;
}

export function MarketScannerNotification({
  progress,
  status,
  onStop,
}: MarketScannerNotificationProps) {
  const { localize } = useAppTranslations();
  if (!progress) return null;

  const isSelected = progress.phase === 'selected';
  const hasSignal = progress.prediction !== null;
  const progressPercent = progress.totalMarkets > 0
    ? Math.min(100, (progress.scannedMarkets / progress.totalMarkets) * 100)
    : 0;
  const statusText = isSelected
    ? localize('MARKET SELECTED')
    : hasSignal
      ? localize('SIGNAL READY')
    : localize('SCANNING LIVE');
  const prediction = progress.prediction;
  const predictionContractLabel = (() => {
    switch (prediction?.contractMode) {
      case 'DIGITDIFF':
        return localize('Differs');
      case 'DIGITOVER':
        return localize('Over 1');
      case 'DIGITUNDER':
        return localize('Under 8');
      case 'DIGITEVEN':
        return localize('Even');
      case 'DIGITODD':
        return localize('Odd');
      default:
        return null;
    }
  })();
  const description = isSelected
    ? localize('Starting the first trade now.')
    : hasSignal
      ? localize('Showing the latest market signal while scanning continues.')
    : progress.countdownSeconds === 0 && progress.scannedMarkets < progress.totalMarkets
      ? localize('Finishing market checks before selecting.')
      : progress.countdownSeconds === 0
        ? localize('Selecting the highest-qualified market.')
        : progress.scannedMarkets === progress.totalMarkets
          ? localize('Markets checked. Waiting for the scan timer.')
          : localize('Checking recent tick history across open markets.');

  return (
    <div className="pointer-events-none fixed inset-0 z-[80] flex items-center justify-center p-4">
      <section
        aria-label={localize('Market scanner progress')}
        className="market-scanner-card pointer-events-auto max-h-[calc(100dvh-2rem)] w-full max-w-sm overflow-y-auto rounded-2xl border border-primary/45 bg-card/95 p-4 text-foreground shadow-2xl backdrop-blur-xl sm:p-5"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/35 bg-primary/10 text-primary">
              {isSelected ? (
                <CheckCircle2 className="h-6 w-6" />
              ) : (
                <Radar className="market-scan-spinner h-6 w-6" />
              )}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-extrabold tracking-wide">
                {localize('Pulse Factor Scanner')}
              </p>
              <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                {statusText}
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-full border border-primary/25 bg-primary/10 px-2 py-1 text-[10px] font-bold tabular-nums text-primary">
            {localize('Scan {{number}}', { number: progress.scanNumber })}
          </span>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <div
            role="timer"
            aria-label={localize('{{seconds}} seconds remaining', {
              seconds: progress.countdownSeconds,
            })}
            className="flex h-[4.25rem] w-[4.25rem] shrink-0 flex-col items-center justify-center rounded-full border-2 border-primary/45 bg-primary/5 shadow-[0_0_20px_rgb(var(--primary)/0.16)]"
          >
            {isSelected ? (
              <CheckCircle2 className="h-7 w-7 text-primary" />
            ) : (
              <span className="font-mono text-3xl font-black tabular-nums text-primary">
                {String(progress.countdownSeconds).padStart(2, '0')}
              </span>
            )}
            {!isSelected && (
              <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                {localize('Seconds')}
              </span>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
              {!isSelected && <Activity className="h-3.5 w-3.5 text-primary" />}
              <span aria-live="polite" aria-atomic="true">{description}</span>
            </div>
            <p className="mt-1 text-[11px] text-muted-foreground">
              {localize('{{scanned}} of {{total}} open markets checked', {
                scanned: progress.scannedMarkets,
                total: progress.totalMarkets,
              })}
            </p>
            {progress.skippedNoReturnMarkets > 0 && (
              <p className="mt-1 text-[11px] font-medium text-amber-600 dark:text-amber-400">
                {localize('{{count}} no-return setups skipped', {
                  count: progress.skippedNoReturnMarkets,
                })}
              </p>
            )}
            {progress.skippedNegativeEvSetups > 0 && (
              <p className="mt-1 text-[11px] font-medium text-amber-600 dark:text-amber-400">
                {localize('{{count}} negative expected-value setups skipped', {
                  count: progress.skippedNegativeEvSetups,
                })}
              </p>
            )}
            <div
              className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted"
              role="progressbar"
              aria-label={localize('Markets scanned')}
              aria-valuemin={0}
              aria-valuemax={Math.max(1, progress.totalMarkets)}
              aria-valuenow={progress.scannedMarkets}
            >
              <div
                className="h-full rounded-full bg-primary transition-[width] duration-300 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {prediction ? (
          <div className="mt-3 space-y-2 rounded-xl border border-primary/25 bg-primary/5 px-3 py-2.5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                  {localize('Scan {{number}} market signal', {
                    number: prediction.scanNumber,
                  })}
                </p>
                <p className="truncate text-sm font-bold" title={prediction.market}>
                  {prediction.market} · {predictionContractLabel}
                  {prediction.barrier !== null ? ` ${prediction.barrier}` : ''}
                </p>
              </div>
              <div className="shrink-0 text-right">
                <p className="font-mono text-sm font-bold text-primary">
                  {(prediction.predictedWinRate * 100).toFixed(1)}%
                </p>
                <p className="text-[9px] font-medium text-muted-foreground">
                  {localize('Blended estimate')}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-1 border-t border-border/70 pt-2">
              {([
                ['sequence', localize('Sequence')],
                ['analogy', localize('Analogs')],
                ['cluster', localize('Clusters')],
                ['dominance', localize('Dominance')],
              ] as const).map(([key, label]) => {
                const signal = prediction.predictionModels[key];
                return (
                  <div key={key} className="min-w-0 text-center">
                    <p className="text-[9px] font-bold uppercase tracking-wide text-muted-foreground">
                      {label}
                    </p>
                    <p className={`font-mono text-[11px] font-semibold ${signal?.active ? 'text-emerald-500' : 'text-foreground'}`}>
                      {signal ? `${(signal.winRate * 100).toFixed(1)}%` : '—'}
                    </p>
                    <p className="text-[8px] text-muted-foreground">
                      {signal
                        ? localize('{{count}} matches', { count: signal.matches })
                        : localize('insufficient matches')}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-[9px] text-muted-foreground">
              <span>
                {localize('{{ticks}} / 30 recent ticks · Wilson {{rate}}%', {
                  ticks: prediction.sampleCount,
                  rate: (prediction.estimatedWinRate * 100).toFixed(1),
                })}
              </span>
              <span>
                {localize('{{count}} / 4 active · {{required}} required', {
                  count: prediction.activeSignalCount,
                  required: prediction.requiredActiveSignalCount,
                })}
              </span>
              <span className={prediction.eligibleForTrading ? 'text-emerald-500' : 'text-amber-500'}>
                {prediction.eligibleForTrading
                  ? localize('Active · trade candidate')
                  : localize('Forecast only')}
              </span>
            </div>
            <p className="text-[9px] leading-relaxed text-muted-foreground">
              {localize('These experimental estimates use past ticks and do not guarantee future results. Quotes are checked before any trade.')}
            </p>
          </div>
        ) : (
          <div className="mt-3 rounded-xl border border-border bg-muted/30 px-3 py-2 text-[11px] text-muted-foreground">
            {localize('Evaluating open markets for the strongest active signal.')}
          </div>
        )}

        <Button
          type="button"
          size="sm"
          variant="outline"
          className="mt-3 h-8 w-full border-destructive/40 text-destructive hover:bg-destructive/10"
          onClick={onStop}
          disabled={status === 'stopping'}
        >
          {status === 'stopping'
            ? localize('Stopping...')
            : isSelected
              ? localize('Stop auto-trading')
              : localize('Stop scan')}
        </Button>
      </section>
    </div>
  );
}
