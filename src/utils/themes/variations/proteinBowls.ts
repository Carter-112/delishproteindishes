import { SauceTheme } from '../types';

export const proteinBowlVariations: Record<string, Partial<SauceTheme>> = {
  '0': { 
    text: 'text-teal-400', 
    border: 'border-teal-500/20' 
  },
  '1': { 
    text: 'text-green-400', 
    border: 'border-green-500/20' 
  },
  '2': { 
    text: 'text-lime-400', 
    border: 'border-lime-500/20' 
  }
};