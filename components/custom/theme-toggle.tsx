'use client';

import { Palette } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useAppTranslations } from '@/components/custom/i18n-provider';
import { APPEARANCE_THEME_NAMES } from '@/lib/appearance-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { localize } = useAppTranslations();
  const currentThemeIndex = APPEARANCE_THEME_NAMES.findIndex((value) => value === theme);
  const nextTheme = APPEARANCE_THEME_NAMES[(currentThemeIndex + 1) % APPEARANCE_THEME_NAMES.length]
    ?? APPEARANCE_THEME_NAMES[0];

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={localize('Change appearance theme')}
      onClick={() => setTheme(nextTheme)}
    >
      <Palette className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
}
