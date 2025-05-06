import { SauceTheme } from './themes/types';
import { chineseBase } from './themes/base/chinese';
import { chineseVariations } from './themes/variations/chinese';
import { quickLunchBase, chickenOmeletteBase, proteinBowlBase, smoothieBowlBase, dessertBase, proteinSnackBase } from './themes/base';
import { quickLunchVariations, chickenOmeletteVariations, proteinBowlVariations, smoothieBowlVariations, dessertVariations, proteinSnackVariations } from './themes/variations';

export const sauceThemes: Record<string, SauceTheme> = {
  chinese: {
    ...chineseBase,
    variations: chineseVariations,
    bg: 'bg-amber-700',
    border: 'border-amber-800',
    text: 'text-amber-400',
    buttonHover: 'hover:bg-amber-800',
    active: 'bg-amber-800',
  },
  quickLunch: {
    ...quickLunchBase,
    variations: quickLunchVariations,
    bg: 'bg-green-700',
    border: 'border-green-800',
    text: 'text-green-400',
    buttonHover: 'hover:bg-green-800',
    active: 'bg-green-800',
  },
  chicken: {
    ...chickenOmeletteBase,
    variations: chickenOmeletteVariations,
    bg: 'bg-yellow-700',
    border: 'border-yellow-800',
    text: 'text-yellow-400',
    buttonHover: 'hover:bg-yellow-800',
    active: 'bg-yellow-800',
  },
  proteinBowl: {
    ...proteinBowlBase,
    variations: proteinBowlVariations,
    bg: 'bg-blue-700',
    border: 'border-blue-800',
    text: 'text-blue-400',
    buttonHover: 'hover:bg-blue-800',
    active: 'bg-blue-800',
  },
  smoothie: {
    ...smoothieBowlBase,
    variations: smoothieBowlVariations,
    bg: 'bg-purple-700',
    border: 'border-purple-800',
    text: 'text-purple-400',
    buttonHover: 'hover:bg-purple-800',
    active: 'bg-purple-800',
  },
  dessert: {
    ...dessertBase,
    variations: dessertVariations,
    bg: 'bg-pink-700',
    border: 'border-pink-800',
    text: 'text-pink-400',
    buttonHover: 'hover:bg-pink-800',
    active: 'bg-pink-800',
  },
  proteinSnack: {
    ...proteinSnackBase,
    variations: proteinSnackVariations,
    bg: 'bg-indigo-700',
    border: 'border-indigo-800',
    text: 'text-indigo-400',
    buttonHover: 'hover:bg-indigo-800',
    active: 'bg-indigo-800',
  },
};
