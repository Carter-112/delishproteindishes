import { Recipe } from '../../types';
import { proteinBowlBase } from '../proteinBowlBase';

export const ClassicPowerBowl: Recipe = {
  id: 'classicPowerBowl',
  name: 'Classic Power Bowl',
  category: 'Protein Bowl',
  image: '/images/classic-power-bowl.jpg',
  ingredients: [
    { id: 'greekYogurt', name: 'Greek Yogurt', amount: '8', unit: 'oz' },
    { id: 'proteinPowderVanilla', name: 'Protein Powder (vanilla)', amount: '2', unit: 'scoops' },
    { id: 'almondButter', name: 'Almond Butter', amount: '0.25', unit: 'cup' },
    { id: 'honey', name: 'Honey', amount: '2', unit: 'tbsp' },
    { id: 'cinnamon', name: 'Cinnamon', amount: 'to taste', unit: '' }
  ],
  nutritionalInfo: {
    calories: 538,
    protein: 46,
    carbs: 0, // Placeholder, to be calculated if needed
    fat: 0   // Placeholder, to be calculated if needed
  },
  instructions: [
    'Cook quinoa according to package instructions with bone broth',
    'Grill chicken with preferred seasoning',
    'Mix Greek yogurt with protein powder until smooth',
    'Layer quinoa, chicken, and prepared toppings in bowls',
    'Top with yogurt-protein mixture',
    'Drizzle with almond butter and honey'
  ],
  prepTime: '15 min',
  cookTime: '20 min',
  totalTime: '35 min',
  servings: 4,
  tips: [
    'Customize with your favorite toppings like nuts or seeds.',
    'Prepare quinoa and chicken in advance for quicker assembly.'
  ],
  usedIn: ['proteinBowls'],
  sharedBase: proteinBowlBase
};
