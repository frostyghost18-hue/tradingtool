export const APPEARANCE_THEME_NAMES = [
  'quantum-neon',
  'royal-gold',
  'midnight-eclipse',
  'crimson-storm',
  'aurora-dream',
  'neon-samurai',
  'ice-phantom',
  'royal-galaxy',
  'cyber-matrix',
] as const;

export type AppearanceThemeName = (typeof APPEARANCE_THEME_NAMES)[number];
