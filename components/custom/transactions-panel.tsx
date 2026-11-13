'use client';

import { useState } from 'react';
import { Activity, RotateCcw } from 'lucide-react';
import { Localize } from '@deriv-com/translations';
import { Badge } from '@/components/ui/badge';
import { CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getSymbolDisplayName } from '@/lib/active-symbols-display-names';
import { formatAmount, formatSignedAmount } from '@/lib/locale-format';
import { useAppTranslations } from '@/components/custom/i18n-provider';
import type { SessionTransaction } from '@/hooks/use-session-transactions';

type TransactionFilter = 'all' | 'open' | 'closed';

interface TransactionsPanelProps {
  transactions: SessionTransaction[];
  onReset: () => void;
  isAuthenticated: boolean;
}

function formatTransactionTime(timestamp: number, locale: string): string {
  const date = new Date(timestamp * 1000);
  if (!Number.isFinite(date.getTime())) return '—';
  return new Intl.DateTimeFormat(locale, {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function TransactionsPanel({
  transactions,
  onReset,
  isAuthenticated,
}: TransactionsPanelProps) {
  const { localize, locale } = useAppTranslations();
  const [filter, setFilter] = useState<TransactionFilter>('all');

  const visibleTransactions = transactions.filter(
    (transaction) => filter === 'all' || transaction.status === filter
  );
  const openCount = transactions.filter((transaction) => transaction.status === 'open').length;
  const closedCount = transactions.length - openCount;
  const winCount = transactions.filter(
    (transaction) => transaction.status === 'closed' && transaction.profit > 0
  ).length;
  const lossCount = transactions.filter(
    (transaction) => transaction.status === 'closed' && transaction.profit < 0
  ).length;
  const totalProfit = transactions.reduce(
    (total, transaction) => total + (Number.isFinite(transaction.profit) ? transaction.profit : 0),
    0
  );
  const currency = transactions[0]?.currency ?? '';
  const contractTypeLabels: Record<string, string> = {
    DIGITMATCH: localize('Digit Match'),
    DIGITDIFF: localize('Digit Differs'),
    DIGITOVER: localize('Digit Over'),
    DIGITUNDER: localize('Digit Under'),
    DIGITEVEN: localize('Digit Even'),
    DIGITODD: localize('Digit Odd'),
  };

  return (
    <section
      className="factorpulse-panel flex h-full min-h-[360px] flex-col overflow-hidden rounded-xl border border-primary/35 bg-card/95"
      data-testid="transactions-panel"
    >
      <div className="flex items-center justify-between gap-3 border-b border-border/70 px-4 py-3">
        <div className="flex min-w-0 items-center gap-2">
          <Activity className="h-4 w-4 shrink-0 text-primary" />
          <CardTitle className="truncate text-sm font-bold uppercase tracking-[0.12em]">
            <Localize i18n_default_text="Transactions" />
          </CardTitle>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          {isAuthenticated && (
            <button
              type="button"
              aria-label={localize('Reset transactions')}
              title={localize('Reset transactions')}
              disabled={transactions.length === 0}
              onClick={onReset}
              className="inline-flex h-8 items-center gap-1 rounded-md border border-border px-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>{localize('Reset')}</span>
            </button>
          )}
          <Select value={filter} onValueChange={(value) => setFilter(value as TransactionFilter)}>
            <SelectTrigger aria-label={localize('Filter transactions')} className="h-8 w-[98px] shrink-0 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{localize('All')} · {transactions.length}</SelectItem>
              <SelectItem value="open">{localize('Open')} · {openCount}</SelectItem>
              <SelectItem value="closed">{localize('Closed')} · {closedCount}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 border-b border-border/60 px-4 py-2.5 sm:grid-cols-4">
        <div>
          <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
            <Localize i18n_default_text="Wins" />
          </p>
          <p className="text-sm font-bold tabular-nums text-emerald-500">{winCount}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
            <Localize i18n_default_text="Losses" />
          </p>
          <p className="text-sm font-bold tabular-nums text-destructive">{lossCount}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
            <Localize i18n_default_text="Contracts" />
          </p>
          <p className="text-sm font-bold tabular-nums text-foreground">{transactions.length}</p>
        </div>
        <div className="text-left sm:text-right">
          <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
            <Localize i18n_default_text="Total P/L" />
          </p>
          <p className={`text-sm font-bold tabular-nums ${totalProfit > 0 ? 'text-emerald-500' : totalProfit < 0 ? 'text-destructive' : 'text-foreground'}`}>
            {formatSignedAmount(totalProfit, locale)}{currency ? ` ${currency}` : ''}
          </p>
        </div>
      </div>

      <div className="min-h-40 max-h-[520px] flex-1 space-y-2 overflow-y-auto p-3 xl:max-h-none">
        {visibleTransactions.length > 0 ? (
          visibleTransactions.map((transaction) => {
            const typeLabel = contractTypeLabels[transaction.contractType] ?? transaction.contractType;
            const profitClass = transaction.profit > 0
              ? 'text-emerald-500'
              : transaction.profit < 0
                ? 'text-destructive'
                : 'text-muted-foreground';

            return (
              <article
                key={`${transaction.status}-${transaction.contractId}`}
                className="rounded-lg border border-border/80 bg-background/60 p-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-foreground">
                      {typeLabel} · {getSymbolDisplayName(transaction.symbol)}
                    </p>
                    <p className="mt-0.5 text-[10px] text-muted-foreground">
                      #{transaction.contractId} · {formatTransactionTime(transaction.timestamp, locale)}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className={transaction.status === 'open'
                      ? 'shrink-0 border-blue-500/40 bg-blue-500/10 px-1.5 py-0 text-[10px] text-blue-400'
                      : 'shrink-0 border-border px-1.5 py-0 text-[10px] text-muted-foreground'}
                  >
                    {transaction.status === 'open'
                      ? localize('Open')
                      : localize('Closed')}
                  </Badge>
                </div>
                <div className="mt-3 grid grid-cols-[1fr_auto] items-center gap-3">
                  <div className="flex min-w-0 items-center gap-2 rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1.5">
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                        <Localize i18n_default_text="Last digit" />
                      </p>
                      <p className="truncate text-[9px] text-muted-foreground">
                        {transaction.status === 'closed'
                          ? localize('Final contract tick')
                          : localize('Latest contract tick')}
                      </p>
                    </div>
                    <span className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/15 text-xl font-black tabular-nums text-primary">
                      {transaction.lastDigit ?? '—'}
                    </span>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                      <Localize i18n_default_text="P/L" />
                    </p>
                    <p className={`text-sm font-bold tabular-nums ${profitClass}`}>
                      {formatSignedAmount(transaction.profit, locale)}{transaction.currency ? ` ${transaction.currency}` : ''}
                    </p>
                  </div>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-x-3 border-t border-border/60 pt-2 text-[10px] text-muted-foreground">
                  <p className="truncate">
                    <Localize i18n_default_text="Stake" />: {formatAmount(transaction.stake, locale)} {transaction.currency}
                  </p>
                  <p className="truncate text-right">
                    {transaction.status === 'open'
                      ? localize('Current value')
                      : localize('Sell price')}: {formatAmount(transaction.value, locale)} {transaction.currency}
                  </p>
                </div>
              </article>
            );
          })
        ) : (
          <p className="px-2 py-8 text-center text-xs text-muted-foreground">
            {!isAuthenticated
              ? localize('Log in to see your transactions.')
              : filter === 'all'
                ? localize('Your session trades will appear here.')
                : localize('No {{status}} transactions.', { status: filter })}
          </p>
        )}
      </div>

    </section>
  );
}
