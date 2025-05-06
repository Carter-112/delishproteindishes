import { SauceTheme } from '../types';

export const chineseVariations: Record<string, Partial<SauceTheme>> = {
  '0': { // Orange Chicken
    text: 'text-orange-400',
    border: 'border-orange-500/20',
    mainGradient: 'from-orange-900 to-amber-900',
    pulseGradient: 'from-orange-500/20 via-amber-500/20 to-red-500/20'
  },
  '1': { // Garlic Chicken
    text: 'text-emerald-400',
    border: 'border-emerald-500/20',
    mainGradient: 'from-emerald-900 to-green-900',
    pulseGradient: 'from-emerald-500/20 via-green-500/20 to-teal-500/20'
  },
  '2': { // Ginger Beef
    text: 'text-red-400',
    border: 'border-red-500/20',
    mainGradient: 'from-red-900 to-rose-900',
    pulseGradient: 'from-red-500/20 via-rose-500/20 to-pink-500/20'
  },
  '3': { // Mushroom Chicken
    text: 'text-amber-400',
    border: 'border-amber-500/20',
    mainGradient: 'from-amber-900 to-yellow-900',
    pulseGradient: 'from-amber-500/20 via-yellow-500/20 to-orange-500/20'
  },
  '4': { // String Bean Chicken
    text: 'text-lime-400',
    border: 'border-lime-500/20',
    mainGradient: 'from-lime-900 to-green-900',
    pulseGradient: 'from-lime-500/20 via-green-500/20 to-emerald-500/20'
  },
  '5': { // Egg Foo Young
    text: 'text-yellow-400',
    border: 'border-yellow-500/20',
    mainGradient: 'from-yellow-900 to-amber-900',
    pulseGradient: 'from-yellow-500/20 via-amber-500/20 to-orange-500/20'
  },
  '6': { // Buddha's Delight
    text: 'text-green-400',
    border: 'border-green-500/20',
    mainGradient: 'from-green-900 to-emerald-900',
    pulseGradient: 'from-green-500/20 via-emerald-500/20 to-teal-500/20'
  },
  '7': { // Mongolian Beef
    text: 'text-rose-400',
    border: 'border-rose-500/20',
    mainGradient: 'from-rose-900 to-red-900',
    pulseGradient: 'from-rose-500/20 via-red-500/20 to-pink-500/20'
  },
  '8': { // Shrimp with Lobster Sauce
    text: 'text-cyan-400',
    border: 'border-cyan-500/20',
    mainGradient: 'from-cyan-900 to-sky-900',
    pulseGradient: 'from-cyan-500/20 via-sky-500/20 to-blue-500/20'
  },
  '9': { // Kung Pao Chicken
    text: 'text-red-400',
    border: 'border-red-500/20',
    mainGradient: 'from-red-900 to-rose-900',
    pulseGradient: 'from-red-500/20 via-rose-500/20 to-pink-500/20'
  }
};