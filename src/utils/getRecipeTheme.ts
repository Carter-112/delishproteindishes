import { SauceTheme, sauceThemes } from './themes';
import { Recipe } from '../types';

export function getRecipeTheme(recipe: Recipe, groupId: string): SauceTheme {
  const themeKey = `${groupId}_${recipe.id}`;
  return sauceThemes[themeKey] || sauceThemes[groupId] || sauceThemes.default;
}