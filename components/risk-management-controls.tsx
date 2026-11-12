'use client';

import { useState } from 'react';
import { Localize } from '@deriv-com/translations';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { MartingaleMode } from '@/lib/martingale';

const MARTINGALE_MODES: {
  value: MartingaleMode;
  label: string;
  valueLabel: string;
  description: string;
}[] = [
  {
    value: 'classic',
    label: 'Classic',
    valueLabel: 'Classic multiplier',
    description: 'After a loss, multiply the original stake by this value. After a win, return to the original stake.',
  },
  {
    value: 'dynamic',
    label: 'Dynamic',
    valueLabel: 'Dynamic level',
    description: 'Keep the original stake after a loss. After a win, use the multiplied stake for one trade, then return to the original stake.',
  },
  {
    value: 'super-hybrid',
    label: 'Super hybrid',
    valueLabel: 'Hybrid multiplier',
    description: 'After a loss, multiply the stake and keep that level until the losses are recovered, then return to the original stake.',
  },
];

interface RiskManagementControlsProps {
  takeProfit: string;
  onTakeProfitChange: (value: string) => void;
  stopLoss: string;
  onStopLossChange: (value: string) => void;
  martingaleMode: MartingaleMode;
  onMartingaleModeChange: (value: MartingaleMode) => void;
  martingaleValues: Record<MartingaleMode, string>;
  onMartingaleValueChange: (mode: MartingaleMode, value: string) => void;
  maxSessionTrades: string;
  onMaxSessionTradesChange: (value: string) => void;
  autoTradingStatus: 'idle' | 'running' | 'stopping';
  autoTradingTradeCount: number;
  autoTradingProfit: number;
  onStopAutoTrading: () => void;
  disabled?: boolean;
}

export function RiskManagementControls({
  takeProfit,
  onTakeProfitChange,
  stopLoss,
  onStopLossChange,
  martingaleMode,
  onMartingaleModeChange,
  martingaleValues,
  onMartingaleValueChange,
  maxSessionTrades,
  onMaxSessionTradesChange,
  autoTradingStatus,
  autoTradingTradeCount,
  autoTradingProfit,
  onStopAutoTrading,
  disabled = false,
}: RiskManagementControlsProps) {
  const selectedMode = MARTINGALE_MODES.find((mode) => mode.value === martingaleMode) ?? MARTINGALE_MODES[0];
  const isAutoTrading = autoTradingStatus !== 'idle';

  return (
    <div className="space-y-3 border-t border-border pt-4">
      <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
        <Localize i18n_default_text="Risk management" />
      </h3>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label htmlFor="take-profit" className="text-xs text-muted-foreground">
            <Localize i18n_default_text="Take profit" />
          </Label>
          <Input
            id="take-profit"
            type="number"
            min={0}
            step="0.01"
            value={takeProfit}
            onChange={(event) => onTakeProfitChange(event.target.value)}
            labelRight="USD"
            disabled={disabled}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="stop-loss" className="text-xs text-muted-foreground">
            <Localize i18n_default_text="Stop loss" />
          </Label>
          <Input
            id="stop-loss"
            type="number"
            min={0}
            step="0.01"
            value={stopLoss}
            onChange={(event) => onStopLossChange(event.target.value)}
            labelRight="USD"
            disabled={disabled}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="martingale-level" className="text-xs text-muted-foreground">
          <Localize i18n_default_text="Martingale level" />
        </Label>
        <Select
          value={martingaleMode}
          onValueChange={(value) => {
            const selectedMode = MARTINGALE_MODES.find((mode) => mode.value === value);
            if (selectedMode) onMartingaleModeChange(selectedMode.value);
          }}
          disabled={disabled}
        >
          <SelectTrigger id="martingale-level" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {MARTINGALE_MODES.map((mode) => (
              <SelectItem key={mode.value} value={mode.value}>
                <Localize i18n_default_text={mode.label} />
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="martingale-value" className="text-xs text-muted-foreground">
          <Localize i18n_default_text={selectedMode.valueLabel} />
        </Label>
        <Input
          id="martingale-value"
          type="number"
          min={1}
          max={10}
          step="0.1"
          value={martingaleValues[martingaleMode]}
          onChange={(event) => {
            onMartingaleValueChange(martingaleMode, event.target.value);
          }}
          disabled={disabled}
        />
        <p className="text-[11px] leading-relaxed text-muted-foreground">
          <Localize i18n_default_text={selectedMode.description} />
        </p>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="max-session-trades" className="text-xs text-muted-foreground">
          <Localize i18n_default_text="Maximum trades per session" />
        </Label>
        <Input
          id="max-session-trades"
          type="number"
          min={1}
          max={100}
          step={1}
          value={maxSessionTrades}
          onChange={(event) => onMaxSessionTradesChange(event.target.value)}
          disabled={disabled}
        />
      </div>

      {isAutoTrading && (
        <div className="rounded-md border border-primary/30 bg-primary/5 p-2 text-xs">
          <p className="font-semibold text-foreground">
            <Localize
              i18n_default_text="{{status}} · {{count}}/{{limit}} trades · Session P/L: {{profit}} USD"
              values={{
                status: autoTradingStatus === 'stopping' ? 'Stopping after current trade' : 'Auto-trading',
                count: autoTradingTradeCount,
                limit: maxSessionTrades,
                profit: autoTradingProfit.toFixed(2),
              }}
            />
          </p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2 h-8 w-full border-destructive/50 text-destructive hover:bg-destructive/10"
            onClick={onStopAutoTrading}
            disabled={autoTradingStatus === 'stopping'}
          >
            <Localize
              i18n_default_text={autoTradingStatus === 'stopping'
                ? 'Stopping after current contract...'
                : 'Stop auto-trading after current contract'}
            />
          </Button>
        </div>
      )}

      <p className="text-[11px] leading-relaxed text-muted-foreground">
        <Localize i18n_default_text="Set at least one profit or loss target. Buy then starts a session that stops at a target, a trade limit, or when you stop it. Limits are checked after each contract settles." />
      </p>
    </div>
  );
}
