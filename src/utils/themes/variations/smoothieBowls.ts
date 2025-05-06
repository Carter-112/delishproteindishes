import { SauceTheme } from '../types';

export const smoothieBowlVariations: Record<string, Partial<SauceTheme>> = {
  '0': { 
    text: 'text-purple-400', 
    border: 'border-purple-500/20',
    mainGradient: 'from-purple-900 via-indigo-900 to-violet-900',
    pulseGradient: 'from-purple-500/20 via-indigo-500/20 to-violet-500/20'
  },
  '1': { 
    text: 'text-blue-400', 
    border: 'border-blue-500/20',
    mainGradient: 'from-blue-900 via-violet-900 to-indigo-900',
    pulseGradient: 'from-blue-500/20 via-violet-500/20 to-indigo-500/20'
  },
  '2': { 
    text: 'text-indigo-300', 
    border: 'border-indigo-400/20',
    mainGradient: 'from-indigo-900 via-purple-900 to-blue-900',
    pulseGradient: 'from-indigo-500/20 via-purple-500/20 to-blue-500/20'
  },
  '3': { 
    text: 'text-fuchsia-400', 
    border: 'border-fuchsia-500/20',
    mainGradient: 'from-fuchsia-900 via-purple-900 to-violet-900',
    pulseGradient: 'from-fuchsia-500/20 via-purple-500/20 to-violet-500/20'
  },
  '4': { 
    text: 'text-violet-300', 
    border: 'border-violet-400/20',
    mainGradient: 'from-violet-900 via-fuchsia-900 to-purple-900',
    pulseGradient: 'from-violet-500/20 via-fuchsia-500/20 to-purple-500/20'
  }
};