import { SauceTheme } from './types';
import { baseTheme } from './base';
import { chickenThemes } from './chicken';
import { proteinThemes } from './protein';
import { dessertThemes } from './dessert';
import { quickLunchThemes } from './quickLunch';

const themes: Record<string, SauceTheme> = {
  default: baseTheme,
  
  // Group base themes
  'chicken': chickenThemes.base,
  'protein': proteinThemes.base,
  'dessert': dessertThemes.base,
  'quick-lunches': quickLunchThemes.base,
  
  // Recipe variants
  'chicken_0': chickenThemes[0],
  'chicken_1': chickenThemes[1],
  'protein_0': proteinThemes[0],
  'dessert_0': dessertThemes[0],
  'quick-lunches_0': quickLunchThemes[0],
  'quick-lunches_1': quickLunchThemes[1],
  // ... Add remaining mappings
};

export function getTheme(groupId: string, recipeId?: number): SauceTheme {
  if (typeof recipeId === 'number') {
    const variantKey = `${groupId}_${recipeId}`;
    return themes[variantKey] || themes[groupId] || themes.default;
  }
  return themes[groupId] || themes.default;
}

export { baseTheme };
export type { SauceTheme };