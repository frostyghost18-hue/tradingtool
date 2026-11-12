'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Activity, ArrowUpRight } from 'lucide-react';
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
import { openPositionProfit } from '@/lib/position-amounts';
import { useAppTranslations } from '@/components/custom/i18n-provider';
import type { OpenPosition } from '@/hooks/use-open-positions';
import type { ClosedPosition } from '@/hooks/use-closed-positions';

type TransactionFilter = 'all' | 'open' | 'closed';

interface Transaction {
  contractId: number;
  contractType: string;
  symbol: string;
  stake: number | string;
  value: number | string;
  profit: number;
  currency: string;
  timestamp: number;
  status: 'open' | 'closed';
}

interface TransactionsPanelProps {
  openPositions: OpenPosition[];
  closedPositions: ClosedPosition[];
  isAuthenticated: boolean;
  currency?: string;
}

function isOpenPosition(position: OpenPosition): boolean {
  return position.is_sold !== 1 && position.is_expired !== 1 && position.status === 'open';
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
  openPositions,
  closedPositions,
  isAuthenticated,
  currency = '',
}: TransactionsPanelProps) {
  const { localize, locale } = useAppTranslations();
  const [filter, setFilter] = useState<TransactionFilter>('all');
  const [recentlyClosed, setRecentlyClosed] = useState<OpenPosition[]>([]);

  useEffect(() => {
    const closedUpdates = openPositions.filter((position) => !isOpenPosition(position));
    if (closedUpdates.length === 0) return;

    setRecentlyClosed((current) => {
      const positionsById = new Map(current.map((position) => [position.contract_id, position]));
      for (const position of closedUpdates) {
        positionsById.set(position.contract_id, position);
      }
      return Array.from(positionsById.values());
    });
  }, [openPositions]);

  const transactions = useMemo(() => {
    const closedIds = new Set(closedPositions.map((position) => position.contract_id));
    const openTransactions: Transaction[] = openPositions
      .filter((position) => isOpenPosition(position) && !closedIds.has(position.contract_id))
      .map((position) => ({
        contractId: position.contract_id,
        contractType: position.contract_type,
        symbol: position.underlying_symbol,
        stake: position.buy_price,
        value: position.bid_price,
        profit: openPositionProfit(position),
        currency: position.currency,
        timestamp: position.date_start,
        status: 'open',
      }));

    const recentClosedTransactions: Transaction[] = recentlyClosed
      .filter((position) => !closedIds.has(position.contract_id))
      .map((position) => ({
        contractId: position.contract_id,
        contractType: position.contract_type,
        symbol: position.underlying_symbol,
        stake: position.buy_price,
        value: position.bid_price,
        profit: openPositionProfit(position),
        currency: position.currency,
        timestamp: position.exit_spot_time ?? position.date_expiry ?? position.date_start,
        status: 'closed',
      }));

    const historicalClosedTransactions: Transaction[] = closedPositions.map((position) => ({
      contractId: position.contract_id,
      contractType: position.contract_type,
      symbol: position.underlying_symbol,
      stake: position.buy_price,
      value: position.sell_price,
      profit: position.sell_price - position.buy_price,
      currency,
      timestamp: position.sell_time || position.purchase_time,
      status: 'closed',
    }));

    return [...openTransactions, ...recentClosedTransactions, ...historicalClosedTransactions]
      .sort((left, right) => right.timestamp - left.timestamp);
  }, [openPositions, closedPositions, recentlyClosed, currency]);

  const visibleTransactions = transactions.filter(
    (transaction) => filter === 'all' || transaction.status === filter
  );
  const openCount = transactions.filter((transaction) => transaction.status === 'open').length;
  const closedCount = transactions.length - openCount;
  const totalProfit = transactions.reduce(
    (total, transaction) => total + (Number.isFinite(transaction.profit) ? transaction.profit : 0),
    0
  );
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
        <Select value={filter} onValueChange={(value) => setFilter(value as TransactionFilter)}>
          <SelectTrigger aria-label={localize('Filter transactions')} className="h-8 w-[104px] shrink-0 text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{localize('All')} · {transactions.length}</SelectItem>
            <SelectItem value="open">{localize('Open')} · {openCount}</SelectItem>
            <SelectItem value="closed">{localize('Closed')} · {closedCount}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between gap-3 border-b border-border/60 px-4 py-2.5">
        <div className="flex items-center gap-3 text-xs">
          <span className="text-muted-foreground">
            <Localize i18n_default_text="Open" /> <strong className="text-foreground">{openCount}</strong>
          </span>
          <span className="text-muted-foreground">
            <Localize i18n_default_text="Closed" /> <strong className="text-foreground">{closedCount}</strong>
          </span>
        </div>
        <div className="text-right">
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
                <div className="mt-2 flex items-end justify-between gap-3 border-t border-border/60 pt-2">
                  <div className="min-w-0 text-[10px] text-muted-foreground">
                    <p>
                      <Localize i18n_default_text="Stake" />: {formatAmount(transaction.stake, locale)} {transaction.currency}
                    </p>
                    <p>
                      {transaction.status === 'open'
                        ? localize('Current value')
                        : localize('Sell price')}: {formatAmount(transaction.value, locale)}
                    </p>
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
              </article>
            );
          })
        ) : (
          <p className="px-2 py-8 text-center text-xs text-muted-foreground">
            {!isAuthenticated
              ? localize('Log in to see your transactions.')
              : filter === 'all'
                ? localize('Your trades will appear here.')
                : localize('No {{status}} transactions.', { status: filter })}
          </p>
        )}
      </div>

      {isAuthenticated && (
        <Link
          href="/reports"
          className="inline-flex items-center justify-center gap-1 border-t border-border/70 px-3 py-2 text-xs font-medium text-primary hover:bg-muted/40"
        >
          <Localize i18n_default_text="View full history" />
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </section>
  );
}
