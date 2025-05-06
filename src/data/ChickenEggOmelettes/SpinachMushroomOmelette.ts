import { Recipe } from '../../types';

export const SpinachMushroomOmelette: Recipe = {
  id: 'spinachMushroomOmelette',
  name: 'Spinach & Mushroom Chicken Omelette',
  category: 'Chicken Egg Omelette',
  image: '/images/spinach-mushroom-omelette.jpg',
  ingredients: [
    { id: 'eggs', name: 'Eggs', amount: '3', unit: 'whole' },
    { id: 'chicken', name: 'Chicken (cooked, shredded)', amount: '0.5', unit: 'cup' },
    { id: 'spinach', name: 'Fresh Spinach', amount: '1', unit: 'cup' },
    { id: 'mushrooms', name: 'Mushrooms (sliced)', amount: '0.5', unit: 'cup' },
    { id: 'cheese', name: 'Cheese (shredded)', amount: '0.25', unit: 'cup' },
    { id: 'salt', name: 'Salt', amount: 'to taste', unit: '' },
    { id: 'pepper', name: 'Pepper', amount: 'to taste', unit: '' },
    { id: 'butter', name: 'Butter', amount: '1', unit: 'tbsp' },
  ],
  nutritionalInfo: {
    calories: 350,
    protein: 28,
    carbs: 5,
    fat: 22,
  },
  instructions: [
    'Whisk eggs in a bowl with salt and pepper.',
    'Heat butter in a non-stick skillet over medium heat.',
    'Add sliced mushrooms and sauté for 3-4 minutes until softened.',
    'Add spinach and cook for another 1-2 minutes until wilted.',
    'Pour in the eggs and cook until edges start to lift from the pan.',
    'Add shredded chicken and cheese to one half of the omelette.',
    'Fold the other half over the filling and cook for another 1-2 minutes.',
    'Serve hot.',
  ],
  prepTime: '10 min',
  cookTime: '10 min',
  totalTime: '20 min',
  servings: 1,
  tips: [
    'Use fresh spinach for the best flavor.',
    'You can substitute butter with olive oil for a lighter option.',
  ],
  usedIn: ['chickenOmelettes'],
};
