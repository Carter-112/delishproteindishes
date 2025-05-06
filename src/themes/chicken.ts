import { SauceTheme } from './types';
import { baseTheme } from './base';

export const chickenThemes: Record<string, SauceTheme> = {
  base: {
    ...baseTheme,
    text: 'text-amber-400',
    mainGradient: 'from-amber-900 to-orange-900',
    pulseGradient: 'from-amber-500/20 via-orange-500/20 to-red-500/20'
  },
  0: { // Original Creamy
    ...baseTheme,
    text: 'text-yellow-400',
    mainGradient: 'from-yellow-900 to-amber-900',
    pulseGradient: 'from-yellow-500/20 via-amber-500/20 to-orange-500/20'
  },
  1: { // Marinara
    ...baseTheme,
    text: 'text-red-400',
    mainGradient: 'from-red-900 to-rose-900',
    pulseGradient: 'from-red-500/20 via-rose-500/20 to-pink-500/20'
  }
  // ... Add remaining variants
};