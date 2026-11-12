'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useAppTranslations } from '@/components/custom/i18n-provider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { localize } = useAppTranslations();
  const isLight = theme === 'light';

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={localize(isLight ? 'Switch to dark theme' : 'Switch to light theme')}
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
    >
      <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${isLight ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
      <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${isLight ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
    </Button>
  );
}
