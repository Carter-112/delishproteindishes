import { Recipe } from '../../types';
import { proteinBowlBase } from '../proteinBowlBase';

export const MediterraneanPowerBowl: Recipe = {
  id: 'mediterraneanPowerBowl',
  name: 'Mediterranean Power Bowl',
  category: 'Protein Bowl',
  image: '/images/mediterranean-power-bowl.jpg',
  ingredients: [
    { id: 'tzatzikiSauce', name: 'Tzatziki Sauce', amount: '0.5', unit: 'cup' },
    { id: 'fetaCheese', name: 'Feta Cheese (crumbled)', amount: '0.25', unit: 'cup' },
    { id: 'olives', name: 'Kalamata Olives', amount: '0.25', unit: 'cup' },
    { id: 'cucumber', name: 'Cucumber (sliced)', amount: '1', unit: 'whole' },
    { id: 'tomatoes', name: 'Cherry Tomatoes (halved)', amount: '1', unit: 'cup' },
    { id: 'redOnion', name: 'Red Onion (sliced)', amount: '0.25', unit: 'cup' },
    { id: 'lemon', name: 'Lemon (juiced)', amount: '1', unit: 'whole' },
    { id: 'oregano', name: 'Oregano', amount: '1', unit: 'tsp' },
  ],
  nutritionalInfo: {
    calories: 550,
    protein: 42,
    carbs: 30,
    fat: 25,
  },
  instructions: [
    'Cook quinoa according to package instructions with bone broth.',
    'Grill chicken with preferred seasoning, adding oregano for Mediterranean flavor.',
    'Prepare tzatziki sauce if not store-bought.',
    'Layer quinoa, chicken, cucumber, cherry tomatoes, red onion, and olives in bowls.',
    'Top with crumbled feta cheese and a dollop of tzatziki sauce.',
    'Drizzle with lemon juice for added freshness.',
  ],
  prepTime: '15 min',
  cookTime: '20 min',
  totalTime: '35 min',
  servings: 4,
  tips: [
    'Add a sprinkle of fresh mint for an extra burst of flavor.',
    'Prepare ingredients ahead of time for quicker assembly.',
  ],
  usedIn: ['proteinBowls'],
  sharedBase: proteinBowlBase,
};
