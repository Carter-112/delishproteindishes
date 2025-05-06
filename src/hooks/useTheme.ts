import { create } from 'zustand';
import { SauceTheme } from '../utils/themes/types';
import { sauceThemes } from '../utils/themes';

interface ThemeStore {
  theme: SauceTheme;
  setTheme: (groupId: string) => void;
}

// Red-orange theme as default
const defaultTheme: SauceTheme = {
  text: 'text-amber-400',
  accent: 'bg-amber-500',
  border: 'border-amber-500/20',
  highlight: 'bg-amber-900/20',
  gradient: 'from-amber-600/20 via-orange-600/20 to-red-600/20',
  buttonHover: 'hover:bg-amber-900/40',
  shadow: 'shadow-amber-500/20',
  mainGradient: 'from-amber-900 to-orange-900',
  pulseGradient: 'from-amber-500/20 via-orange-500/20 to-red-500/20'
};

export const useTheme = create<ThemeStore>((set) => ({
  theme: defaultTheme,
  setTheme: (groupId: string) => {
    const newTheme = sauceThemes[groupId] || defaultTheme;
    set({ theme: newTheme });
  },
}));