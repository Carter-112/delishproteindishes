import { SauceTheme, sauceThemes } from './themeColors';
import { defaultTheme } from './themeDefaults';

export function getRecipeTheme(groupId: string, recipeId?: number): SauceTheme {
  const baseTheme = { ...defaultTheme };
  const groupTheme = sauceThemes[groupId];
  
  if (groupTheme) {
    Object.assign(baseTheme, groupTheme);
  }
  
  if (typeof recipeId === 'number') {
    const variantKey = `${groupId}_${recipeId}`;
    const variantTheme = sauceThemes[variantKey];
    if (variantTheme) {
      Object.assign(baseTheme, variantTheme);
    }
  }
  
  return baseTheme;
}

export function getGroupTheme(groupId: string): SauceTheme {
  return {
    ...defaultTheme,
    ...sauceThemes[groupId]
  };
}