import { SauceTheme } from '../types';

export const proteinSnackVariations: Record<string, Partial<SauceTheme>> = {
  '0': {
    text: 'text-sky-400',
    border: 'border-sky-500/20',
    mainGradient: 'from-sky-900 via-cyan-900 to-blue-900',
    pulseGradient: 'from-sky-500/20 via-cyan-500/20 to-blue-500/20'
  },
  '1': {
    text: 'text-blue-400',
    border: 'border-blue-500/20',
    mainGradient: 'from-blue-900 via-sky-900 to-cyan-900',
    pulseGradient: 'from-blue-500/20 via-sky-500/20 to-cyan-500/20'
  },
  '2': {
    text: 'text-cyan-300',
    border: 'border-cyan-400/20',
    mainGradient: 'from-cyan-800 via-sky-900 to-blue-900',
    pulseGradient: 'from-cyan-400/20 via-sky-500/20 to-blue-500/20'
  },
  '3': {
    text: 'text-sky-300',
    border: 'border-sky-400/20',
    mainGradient: 'from-sky-800 via-cyan-900 to-blue-900',
    pulseGradient: 'from-sky-400/20 via-cyan-500/20 to-blue-500/20'
  },
  '4': {
    text: 'text-blue-300',
    border: 'border-blue-400/20',
    mainGradient: 'from-blue-800 via-sky-900 to-cyan-900',
    pulseGradient: 'from-blue-400/20 via-sky-500/20 to-cyan-500/20'
  }
};