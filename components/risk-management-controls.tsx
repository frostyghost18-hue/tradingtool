'use client';

import { useState } from 'react';
import { Localize } from '@deriv-com/translations';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type MartingaleMode = 'classic' | 'dynamic' | 'super-hybrid';

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

export function RiskManagementControls() {
  const [takeProfit, setTakeProfit] = useState('');
  const [stopLoss, setStopLoss] = useState('');
  const [martingaleMode, setMartingaleMode] = useState<MartingaleMode>('classic');
  const [martingaleValues, setMartingaleValues] = useState<Record<MartingaleMode, string>>({
    classic: '2',
    dynamic: '2',
    'super-hybrid': '2',
  });
  const selectedMode = MARTINGALE_MODES.find((mode) => mode.value === martingaleMode) ?? MARTINGALE_MODES[0];

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
            onChange={(event) => setTakeProfit(event.target.value)}
            labelRight="USD"
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
            onChange={(event) => setStopLoss(event.target.value)}
            labelRight="USD"
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
            if (selectedMode) setMartingaleMode(selectedMode.value);
          }}
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
          step="0.1"
          value={martingaleValues[martingaleMode]}
          onChange={(event) => {
            const value = event.target.value;
            setMartingaleValues((current) => ({ ...current, [martingaleMode]: value }));
          }}
        />
        <p className="text-[11px] leading-relaxed text-muted-foreground">
          <Localize i18n_default_text={selectedMode.description} />
        </p>
      </div>

      <p className="text-[11px] leading-relaxed text-muted-foreground">
        <Localize i18n_default_text="These settings are not applied to trades yet." />
      </p>
    </div>
  );
}
