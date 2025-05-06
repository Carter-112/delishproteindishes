import { SauceTheme } from './types';
import { baseTheme } from './base';

export const quickLunchThemes: Record<string, SauceTheme> = {
  base: {
    ...baseTheme,
    text: 'text-blue-400',
    mainGradient: 'from-blue-900 to-indigo-900',
    pulseGradient: 'from-blue-500/20 via-indigo-500/20 to-violet-500/20',
    gradient: 'from-blue-600/20 via-indigo-600/20 to-violet-600/20',
    border: 'border-blue-500/20',
    shadow: 'shadow-blue-500/20',
    buttonHover: 'hover:bg-blue-900/40'
  },
  0: {
    ...baseTheme,
    text: 'text-sky-400',
    mainGradient: 'from-sky-900 to-blue-900',
    pulseGradient: 'from-sky-500/20 via-blue-500/20 to-indigo-500/20'
  },
  1: {
    ...baseTheme,
    text: 'text-cyan-400',
    mainGradient: 'from-cyan-900 to-sky-900',
    pulseGradient: 'from-cyan-500/20 via-sky-500/20 to-blue-500/20'
  }
};