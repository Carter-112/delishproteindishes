import { Recipe } from '../../types';

export const HamCheeseOmelette: Recipe = {
  id: 'hamCheeseOmelette',
  name: 'Ham & Cheese Chicken Omelette',
  category: 'Chicken Egg Omelette',
  image: '/images/ham-cheese-omelette.jpg',
  ingredients: [
    { id: 'eggs', name: 'Eggs', amount: '3', unit: 'whole' },
    { id: 'chicken', name: 'Chicken (cooked, shredded)', amount: '0.5', unit: 'cup' },
    { id: 'ham', name: 'Ham (diced)', amount: '0.5', unit: 'cup' },
    { id: 'cheddarCheese', name: 'Cheddar Cheese (shredded)', amount: '0.5', unit: 'cup' },
    { id: 'salt', name: 'Salt', amount: 'to taste', unit: '' },
    { id: 'pepper', name: 'Pepper', amount: 'to taste', unit: '' },
    { id: 'butter', name: 'Butter', amount: '1', unit: 'tbsp' },
  ],
  nutritionalInfo: {
    calories: 400,
    protein: 30,
    carbs: 3,
    fat: 28,
  },
  instructions: [
    'Whisk eggs in a bowl with salt and pepper.',
    'Heat butter in a non-stick skillet over medium heat.',
    'Pour in the eggs and cook until edges start to lift from the pan.',
    'Add shredded chicken, diced ham, and shredded cheddar cheese to one half of the omelette.',
    'Fold the other half over the filling and cook for another 1-2 minutes until the cheese melts.',
    'Serve hot.',
  ],
  prepTime: '5 min',
  cookTime: '5 min',
  totalTime: '10 min',
  servings: 1,
  tips: [
    'Use a good quality ham for better flavor.',
    'Ensure the skillet is not too hot to prevent burning the eggs.',
  ],
  usedIn: ['chickenOmelettes'],
};
