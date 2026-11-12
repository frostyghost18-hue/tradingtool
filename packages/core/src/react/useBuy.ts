'use client';

import { useState, useCallback } from 'react';
import type { DerivWS } from '../ws';
import type { ProposalInfo, BuyResponse, BuyResult } from '../types';

interface UseBuyReturn {
  buyContract: (proposal: ProposalInfo) => Promise<BuyResult | null>;
  isBuying: boolean;
  buyResult: BuyResult | null;
  buyError: string | null;
  clearBuyResult: () => void;
}

export function useBuy(
  ws: DerivWS | null,
  isConnected: boolean
): UseBuyReturn {
  const [isBuying, setIsBuying] = useState(false);
  const [buyResult, setBuyResult] = useState<BuyResult | null>(null);
  const [buyError, setBuyError] = useState<string | null>(null);

  const clearBuyResult = useCallback(() => {
    setBuyResult(null);
    setBuyError(null);
  }, []);

  const buyContract = useCallback(async (proposal: ProposalInfo): Promise<BuyResult | null> => {
    if (!ws || !isConnected) return null;

    setIsBuying(true);
    setBuyError(null);
    setBuyResult(null);

    try {
      const response = await ws.send<BuyResponse>({
        buy: proposal.id,
        price: String(proposal.askPrice),
      });

      if (response.buy) {
        const result = {
          contractId: response.buy.contract_id,
          buyPrice: response.buy.buy_price,
          payout: response.buy.payout,
          longcode: response.buy.longcode,
          balanceAfter: response.buy.balance_after,
        };
        setBuyResult(result);
        return result;
      }
      return null;
    } catch (err) {
      setBuyError(err instanceof Error ? err.message : 'Purchase failed');
      return null;
    } finally {
      setIsBuying(false);
    }
  }, [ws, isConnected]);

  return { buyContract, isBuying, buyResult, buyError, clearBuyResult };
}
