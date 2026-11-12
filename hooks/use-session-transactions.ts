'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { ActiveSymbol } from '@deriv/core';
import type { OpenPosition } from '@/hooks/use-open-positions';
import { getLastDigit, pipSizeFromPip } from '@/lib/digit-stats';
import { openPositionProfit } from '@/lib/position-amounts';

export interface SessionTransaction {
  contractId: number;
  contractType: string;
  symbol: string;
  stake: number | string;
  value: number | string;
  profit: number;
  currency: string;
  timestamp: number;
  status: 'open' | 'closed';
  lastDigit: number | null;
}

function isOpenPosition(position: OpenPosition): boolean {
  return !position.is_sold && !position.is_expired && position.status === 'open';
}

function getPositionLastDigit(
  position: OpenPosition,
  pipSize: number,
  isClosed: boolean
): number | null {
  if (
    isClosed &&
    typeof position.exit_spot === 'number' &&
    Number.isFinite(position.exit_spot)
  ) {
    return getLastDigit(position.exit_spot, pipSize);
  }

  const lastTick = position.tick_stream?.[position.tick_stream.length - 1];
  if (lastTick) {
    const displayedDigit = /(\d)\D*$/.exec(lastTick.tick_display_value)?.[1];
    if (displayedDigit !== undefined) return Number(displayedDigit);
    if (Number.isFinite(lastTick.tick)) return getLastDigit(lastTick.tick, pipSize);
  }

  if (typeof position.exit_spot === 'number' && Number.isFinite(position.exit_spot)) {
    return getLastDigit(position.exit_spot, pipSize);
  }

  return null;
}

export function useSessionTransactions(
  openPositions: OpenPosition[],
  symbols: ActiveSymbol[],
  activeAccountId: string | null,
  currentPipSize: number
) {
  const [transactions, setTransactions] = useState<SessionTransaction[]>([]);
  const sessionStartedAt = useRef(Math.floor(Date.now() / 1000));
  const ignoredContractIds = useRef(new Set<number>());
  const previousAccountId = useRef(activeAccountId);

  useEffect(() => {
    if (previousAccountId.current === activeAccountId) return;

    previousAccountId.current = activeAccountId;
    sessionStartedAt.current = Math.floor(Date.now() / 1000);
    ignoredContractIds.current.clear();
    setTransactions([]);
  }, [activeAccountId]);

  useEffect(() => {
    setTransactions((current) => {
      const byId = new Map(current.map((transaction) => [transaction.contractId, transaction]));

      for (const position of openPositions) {
        if (
          position.date_start < sessionStartedAt.current ||
          ignoredContractIds.current.has(position.contract_id)
        ) {
          continue;
        }

        const symbol = symbols.find(
          (item) => item.underlying_symbol === position.underlying_symbol
        );
        const positionPipSize = symbol
          ? pipSizeFromPip(symbol.pip_size)
          : currentPipSize;
        const isOpen = isOpenPosition(position);

        byId.set(position.contract_id, {
          contractId: position.contract_id,
          contractType: position.contract_type,
          symbol: position.underlying_symbol,
          stake: position.buy_price,
          value: position.bid_price,
          profit: openPositionProfit(position),
          currency: position.currency,
          timestamp: isOpen
            ? position.date_start
            : position.exit_spot_time ?? position.date_expiry ?? position.date_start,
          status: isOpen ? 'open' : 'closed',
          lastDigit: getPositionLastDigit(position, positionPipSize, !isOpen),
        });
      }

      return Array.from(byId.values()).sort((left, right) => right.timestamp - left.timestamp);
    });
  }, [openPositions, symbols, currentPipSize]);

  const resetTransactions = useCallback(() => {
    for (const transaction of transactions) {
      ignoredContractIds.current.add(transaction.contractId);
    }
    for (const position of openPositions) {
      ignoredContractIds.current.add(position.contract_id);
    }
    setTransactions([]);
  }, [openPositions, transactions]);

  return { transactions, resetTransactions };
}
