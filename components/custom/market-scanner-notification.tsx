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
  const progressPercent = progress.totalMarkets > 0
    ? Math.min(100, (progress.scannedMarkets / progress.totalMarkets) * 100)
    : 0;
  const statusText = isSelected
    ? localize('MARKET SELECTED')
    : localize('SCANNING LIVE');
  const description = isSelected
    ? localize('Starting the first trade now.')
    : progress.countdownSeconds === 0 && progress.scannedMarkets < progress.totalMarkets
      ? localize('Finishing market checks before selecting.')
      : progress.countdownSeconds === 0
        ? localize('Selecting the highest-qualified market.')
        : progress.scannedMarkets === progress.totalMarkets
          ? localize('Markets checked. Waiting for the scan timer.')
          : localize('Checking recent tick history across open markets.');

  return (
    <div className="pointer-events-none fixed bottom-24 right-3 z-[80] w-[min(24rem,calc(100vw-1.5rem))] sm:bottom-6 sm:right-6">
      <section
        aria-label={localize('Market scanner progress')}
        className="market-scanner-card pointer-events-auto overflow-hidden rounded-2xl border border-primary/45 bg-card p-4 text-foreground sm:p-5"
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

        {isSelected && progress.selectedMarket && progress.estimatedWinRate !== null && (
          <div className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-primary/25 bg-primary/5 px-3 py-2">
            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                {localize('Selected market')}
              </p>
              <p className="truncate text-sm font-bold" title={progress.selectedMarket}>
                {progress.selectedMarket}
              </p>
            </div>
            <p className="shrink-0 font-mono text-sm font-bold text-primary">
              {(progress.estimatedWinRate * 100).toFixed(1)}%
            </p>
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
