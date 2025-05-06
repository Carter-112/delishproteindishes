import { RecipeGroup } from '../types';
import { sauces } from './sauces';
import { KungPaoChicken, GeneralTsoChicken } from './ChineseProteinDishes';
import { ProteinChocolateChipCookies, ProteinBrownies } from './Desserts';
import { ClassicPowerBowl, MediterraneanPowerBowl } from './ProteinPowerBowls';
import { ProteinEnergyBalls } from './ProteinRichSnacks';
import { BerryBlastSmoothieBowl } from './SmoothieBowls';
import { TurkeyAvocadoWrap } from './QuickLunches';
import { SpinachMushroomOmelette, HamCheeseOmelette } from './ChickenEggOmelettes';

export const recipeGroups: RecipeGroup[] = [
  {
    id: 'chinese-dishes',
    name: 'Chinese Protein Dishes',
    description: '10 Healthy Favorites',
    cookingTime: '20-30 mins',
    recipes: [KungPaoChicken, GeneralTsoChicken],
    themeKey: 'chinese'
  },
  {
    id: 'quick-lunches',
    name: '3-Minute Protein Lunches',
    description: '10 Quick & Easy Meals',
    cookingTime: '3-5 mins',
    recipes: [TurkeyAvocadoWrap],
    themeKey: 'quickLunch'
  },
  {
    id: 'chicken-omelettes',
    name: 'Chicken Egg Omelettes',
    description: '7 Delicious Variations',
    cookingTime: '10-20 mins',
    recipes: [SpinachMushroomOmelette, HamCheeseOmelette],
    themeKey: 'chicken'
  },
  {
    id: 'protein-bowls',
    name: 'Protein Power Bowls',
    description: '3 Global Flavors',
    cookingTime: '25-35 mins',
    recipes: [ClassicPowerBowl, MediterraneanPowerBowl],
    themeKey: 'proteinBowl'
  },
  {
    id: 'protein-snacks',
    name: 'Protein-Rich Snacks',
    description: '5 Healthy Options',
    cookingTime: '10-15 mins',
    recipes: [ProteinEnergyBalls],
    themeKey: 'proteinSnack'
  },
  {
    id: 'smoothie-bowls',
    name: 'Smoothie Bowls',
    description: '5 Energizing Variations',
    cookingTime: '10-15 mins',
    recipes: [BerryBlastSmoothieBowl],
    themeKey: 'smoothie'
  },
  {
    id: 'desserts',
    name: 'Simple Delicious Desserts',
    description: '10 Quick & Easy Treats',
    cookingTime: '5-15 mins',
    recipes: [ProteinChocolateChipCookies, ProteinBrownies],
    themeKey: 'dessert'
  }
];