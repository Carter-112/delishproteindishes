import { SauceTheme } from './types';
import { baseTheme } from './base';

export const proteinThemes: Record<string, SauceTheme> = {
  base: {
    ...baseTheme,
    text: 'text-emerald-400',
    mainGradient: 'from-emerald-900 to-green-900',
    pulseGradient: 'from-emerald-500/20 via-green-500/20 to-teal-500/20'
  },
  0: { // Classic Power Bowl
    ...baseTheme,
    text: 'text-teal-400',
    mainGradient: 'from-teal-900 to-emerald-900',
    pulseGradient: 'from-teal-500/20 via-emerald-500/20 to-green-500/20'
  }
  // ... Add remaining variants
};