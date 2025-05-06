import { SauceTheme } from './types';
import { baseTheme } from './base';

export const dessertThemes: Record<string, SauceTheme> = {
  base: {
    ...baseTheme,
    text: 'text-rose-400',
    mainGradient: 'from-rose-900 to-pink-900',
    pulseGradient: 'from-rose-500/20 via-pink-500/20 to-fuchsia-500/20'
  },
  0: { // Peanut Butter Bites
    ...baseTheme,
    text: 'text-amber-400',
    mainGradient: 'from-amber-900 to-yellow-900',
    pulseGradient: 'from-amber-500/20 via-yellow-500/20 to-orange-500/20'
  }
  // ... Add remaining variants
};