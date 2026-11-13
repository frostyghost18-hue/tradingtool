'use client';

import { useEffect } from 'react';
import { ThemeProvider, useTheme } from 'next-themes';
import { APPEARANCE_THEME_NAMES, type AppearanceThemeName } from '@/lib/appearance-themes';

const LEGACY_THEME_MAP: Record<string, AppearanceThemeName> = {
  light: 'aurora-dream',
  dark: 'midnight-eclipse',
  aurora: 'aurora-dream',
  ocean: 'ice-phantom',
  sunset: 'crimson-storm',
  forest: 'cyber-matrix',
  amethyst: 'royal-galaxy',
};

const LEGACY_THEME_NAMES = Object.keys(LEGACY_THEME_MAP);

function MigrateThemePreference() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (!theme) return;
    const migratedTheme = LEGACY_THEME_MAP[theme];
    if (migratedTheme) {
      setTheme(migratedTheme);
    } else if (!APPEARANCE_THEME_NAMES.some((name) => name === theme)) {
      document.documentElement.classList.remove(theme);
      setTheme('aurora-dream');
    }
  }, [setTheme, theme]);

  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="aurora-dream"
      themes={[...APPEARANCE_THEME_NAMES, ...LEGACY_THEME_NAMES]}
      enableSystem={false}
      disableTransitionOnChange
    >
      <MigrateThemePreference />
      {children}
    </ThemeProvider>
  );
}
