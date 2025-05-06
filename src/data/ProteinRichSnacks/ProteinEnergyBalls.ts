import { Recipe } from '../../types';

export const ProteinEnergyBalls: Recipe = {
  id: 'proteinEnergyBalls',
  name: 'Protein Energy Balls',
  category: 'Snack',
  image: '/images/protein-energy-balls.jpg',
  ingredients: [
    { id: 'proteinPowderChocolate', name: 'Chocolate Protein Powder', amount: '2', unit: 'scoops' },
    { id: 'rolledOats', name: 'Rolled Oats', amount: '1', unit: 'cup' },
    { id: 'peanutButter', name: 'Peanut Butter', amount: '0.5', unit: 'cup' },
    { id: 'honey', name: 'Honey', amount: '0.25', unit: 'cup' },
    { id: 'chiaSeeds', name: 'Chia Seeds', amount: '2', unit: 'tbsp' },
    { id: 'darkChocolateChips', name: 'Dark Chocolate Chips (mini)', amount: '0.25', unit: 'cup' },
  ],
  nutritionalInfo: {
    calories: 150,
    protein: 8,
    carbs: 15,
    fat: 7,
  },
  instructions: [
    'In a large bowl, mix protein powder, rolled oats, and chia seeds.',
    'Add peanut butter and honey, stirring until well combined.',
    'Fold in mini chocolate chips.',
    'Roll mixture into 1-inch balls and place on a baking sheet lined with parchment paper.',
    'Refrigerate for at least 30 minutes to set.',
    'Store in an airtight container in the fridge.',
  ],
  prepTime: '15 min',
  cookTime: '0 min',
  totalTime: '15 min',
  servings: 12,
  tips: [
    'Swap peanut butter with almond butter for a different flavor.',
    'Add a pinch of salt if using unsalted peanut butter.',
  ],
  usedIn: ['proteinSnacks'],
};
