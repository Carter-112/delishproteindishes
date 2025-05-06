import { SauceTheme } from '../types';

export const dessertVariations: Record<string, Partial<SauceTheme>> = {
  '0': { 
    text: 'text-rose-400',
    border: 'border-rose-500/20',
    mainGradient: 'from-rose-900 via-pink-900 to-red-900',
    pulseGradient: 'from-rose-500/20 via-pink-500/20 to-red-500/20'
  },
  '1': { 
    text: 'text-fuchsia-400',
    border: 'border-fuchsia-500/20',
    mainGradient: 'from-fuchsia-900 via-purple-900 to-pink-900',
    pulseGradient: 'from-fuchsia-500/20 via-purple-500/20 to-pink-500/20'
  },
  '2': { 
    text: 'text-pink-400',
    border: 'border-pink-500/20',
    mainGradient: 'from-pink-900 via-rose-900 to-fuchsia-900',
    pulseGradient: 'from-pink-500/20 via-rose-500/20 to-fuchsia-500/20'
  },
  '3': { 
    text: 'text-red-400',
    border: 'border-red-500/20',
    mainGradient: 'from-red-900 via-rose-900 to-pink-900',
    pulseGradient: 'from-red-500/20 via-rose-500/20 to-pink-500/20'
  },
  '4': { 
    text: 'text-purple-400',
    border: 'border-purple-500/20',
    mainGradient: 'from-purple-900 via-fuchsia-900 to-pink-900',
    pulseGradient: 'from-purple-500/20 via-fuchsia-500/20 to-pink-500/20'
  },
  '5': { 
    text: 'text-violet-400',
    border: 'border-violet-500/20',
    mainGradient: 'from-violet-900 via-purple-900 to-fuchsia-900',
    pulseGradient: 'from-violet-500/20 via-purple-500/20 to-fuchsia-500/20'
  },
  '6': { 
    text: 'text-rose-300',
    border: 'border-rose-400/20',
    mainGradient: 'from-rose-800 via-pink-900 to-red-900',
    pulseGradient: 'from-rose-400/20 via-pink-500/20 to-red-500/20'
  },
  '7': { 
    text: 'text-fuchsia-300',
    border: 'border-fuchsia-400/20',
    mainGradient: 'from-fuchsia-800 via-purple-900 to-pink-900',
    pulseGradient: 'from-fuchsia-400/20 via-purple-500/20 to-pink-500/20'
  },
  '8': { 
    text: 'text-pink-300',
    border: 'border-pink-400/20',
    mainGradient: 'from-pink-800 via-rose-900 to-fuchsia-900',
    pulseGradient: 'from-pink-400/20 via-rose-500/20 to-fuchsia-500/20'
  },
  '9': { 
    text: 'text-red-300',
    border: 'border-red-400/20',
    mainGradient: 'from-red-800 via-rose-900 to-pink-900',
    pulseGradient: 'from-red-400/20 via-rose-500/20 to-pink-500/20'
  }
};