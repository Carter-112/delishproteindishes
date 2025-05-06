import { Recipe } from '../../types';

export const ProteinBrownies: Recipe = {
  id: 'proteinBrownies',
  name: 'Protein Brownies',
  category: 'Dessert',
  image: '/images/protein-brownies.jpg',
  ingredients: [
    { id: 'proteinPowderChocolate', name: 'Chocolate Protein Powder', amount: '2', unit: 'scoops' },
    { id: 'cocoaPowder', name: 'Unsweetened Cocoa Powder', amount: '0.5', unit: 'cup' },
    { id: 'almondFlour', name: 'Almond Flour', amount: '1', unit: 'cup' },
    { id: 'bakingPowder', name: 'Baking Powder', amount: '1', unit: 'tsp' },
    { id: 'salt', name: 'Salt', amount: '0.25', unit: 'tsp' },
    { id: 'coconutOil', name: 'Coconut Oil (melted)', amount: '0.25', unit: 'cup' },
    { id: 'honey', name: 'Honey', amount: '0.25', unit: 'cup' },
    { id: 'eggs', name: 'Eggs', amount: '2', unit: 'whole' },
    { id: 'vanillaExtract', name: 'Vanilla Extract', amount: '1', unit: 'tsp' },
    { id: 'darkChocolateChips', name: 'Dark Chocolate Chips', amount: '0.25', unit: 'cup' },
  ],
  nutritionalInfo: {
    calories: 220,
    protein: 12,
    carbs: 18,
    fat: 14,
  },
  instructions: [
    'Preheat oven to 350°F (175°C) and grease an 8x8 inch baking pan or line with parchment paper.',
    'In a bowl, mix almond flour, protein powder, cocoa powder, baking powder, and salt.',
    'In another bowl, whisk melted coconut oil, honey, eggs, and vanilla extract.',
    'Combine wet and dry ingredients, then fold in chocolate chips.',
    'Pour batter into the prepared pan and spread evenly.',
    'Bake for 20-25 minutes or until a toothpick inserted in the center comes out clean.',
    'Let cool in the pan for 10 minutes before cutting into squares.',
  ],
  prepTime: '10 min',
  cookTime: '25 min',
  totalTime: '35 min',
  servings: 9,
  tips: [
    'Don’t overbake to keep the brownies fudgy.',
    'Store in an airtight container to maintain freshness.',
  ],
  usedIn: ['desserts'],
};
