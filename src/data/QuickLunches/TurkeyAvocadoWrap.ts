import { Recipe } from '../../types';
import { quickLunchBase } from '../quickLunchBase';

export const TurkeyAvocadoWrap: Recipe = {
  id: 'turkeyAvocadoWrap',
  name: 'Turkey & Avocado Wrap',
  category: 'Quick Lunch',
  image: '/images/turkey-avocado-wrap.jpg',
  ingredients: [
    { id: 'wholeWheatTortilla', name: 'Whole Wheat Tortilla', amount: '4', unit: 'whole' },
    { id: 'turkeyBreast', name: 'Turkey Breast (sliced)', amount: '12', unit: 'oz' },
    { id: 'avocado', name: 'Avocado', amount: '2', unit: 'whole' },
    { id: 'lettuce', name: 'Lettuce', amount: '4', unit: 'leaves' },
    { id: 'tomato', name: 'Tomato', amount: '1', unit: 'whole' },
    { id: 'mustard', name: 'Mustard', amount: '2', unit: 'tbsp' },
  ],
  nutritionalInfo: {
    calories: 400,
    protein: 30,
    carbs: 35,
    fat: 15,
  },
  instructions: [
    'Lay out tortillas on a clean surface.',
    'Spread mustard on each tortilla.',
    'Layer turkey slices, avocado slices, lettuce, and tomato slices on each tortilla.',
    'Roll up the tortillas tightly.',
    'Cut in half if desired and serve immediately.',
  ],
  prepTime: '10 min',
  cookTime: '0 min',
  totalTime: '10 min',
  servings: 4,
  tips: [
    'Add a sprinkle of black pepper or chili flakes for extra flavor.',
    'Use a toothpick to hold the wrap together if needed.',
  ],
  usedIn: ['quickLunches'],
  sharedBase: quickLunchBase,
};
