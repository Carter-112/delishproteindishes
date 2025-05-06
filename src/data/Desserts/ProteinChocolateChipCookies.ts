import { Recipe } from '../../types';

export const ProteinChocolateChipCookies: Recipe = {
  id: 'proteinChocolateChipCookies',
  name: 'Protein Chocolate Chip Cookies',
  category: 'Dessert',
  image: '/images/protein-chocolate-chip-cookies.jpg',
  ingredients: [
    { id: 'proteinPowderVanilla', name: 'Vanilla Protein Powder', amount: '2', unit: 'scoops' },
    { id: 'almondFlour', name: 'Almond Flour', amount: '1.5', unit: 'cups' },
    { id: 'bakingSoda', name: 'Baking Soda', amount: '0.5', unit: 'tsp' },
    { id: 'salt', name: 'Salt', amount: '0.25', unit: 'tsp' },
    { id: 'coconutOil', name: 'Coconut Oil (melted)', amount: '0.25', unit: 'cup' },
    { id: 'mapleSyrup', name: 'Maple Syrup', amount: '0.25', unit: 'cup' },
    { id: 'egg', name: 'Egg', amount: '1', unit: 'whole' },
    { id: 'vanillaExtract', name: 'Vanilla Extract', amount: '1', unit: 'tsp' },
    { id: 'darkChocolateChips', name: 'Dark Chocolate Chips', amount: '0.5', unit: 'cup' },
  ],
  nutritionalInfo: {
    calories: 200,
    protein: 10,
    carbs: 15,
    fat: 12,
  },
  instructions: [
    'Preheat oven to 350°F (175°C) and line a baking sheet with parchment paper.',
    'In a bowl, mix almond flour, protein powder, baking soda, and salt.',
    'In another bowl, whisk melted coconut oil, maple syrup, egg, and vanilla extract.',
    'Combine wet and dry ingredients, then fold in chocolate chips.',
    'Scoop dough onto the baking sheet, spacing cookies 2 inches apart.',
    'Bake for 10-12 minutes or until edges are golden.',
    'Let cool on the baking sheet for 5 minutes before transferring to a wire rack.',
  ],
  prepTime: '10 min',
  cookTime: '12 min',
  totalTime: '22 min',
  servings: 12,
  tips: [
    'Use a cookie scoop for uniform size and shape.',
    'Store in an airtight container to keep them soft.',
  ],
  usedIn: ['desserts'],
};
