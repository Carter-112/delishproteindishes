import { Recipe } from '../../types';

export const BerryBlastSmoothieBowl: Recipe = {
  id: 'berryBlastSmoothieBowl',
  name: 'Berry Blast Smoothie Bowl',
  category: 'Smoothie Bowl',
  image: '/images/berry-blast-smoothie-bowl.jpg',
  ingredients: [
    { id: 'frozenMixedBerries', name: 'Frozen Mixed Berries', amount: '2', unit: 'cups' },
    { id: 'banana', name: 'Banana (frozen)', amount: '1', unit: 'whole' },
    { id: 'proteinPowderVanilla', name: 'Vanilla Protein Powder', amount: '1', unit: 'scoop' },
    { id: 'almondMilk', name: 'Almond Milk', amount: '0.5', unit: 'cup' },
    { id: 'chiaSeeds', name: 'Chia Seeds', amount: '1', unit: 'tbsp' },
    { id: 'granola', name: 'Granola', amount: '0.25', unit: 'cup' },
    { id: 'freshStrawberries', name: 'Fresh Strawberries', amount: '0.25', unit: 'cup' },
    { id: 'blueberries', name: 'Blueberries', amount: '0.25', unit: 'cup' },
  ],
  nutritionalInfo: {
    calories: 350,
    protein: 25,
    carbs: 45,
    fat: 10,
  },
  instructions: [
    'In a blender, combine frozen berries, frozen banana, protein powder, and almond milk.',
    'Blend until thick and smooth, adding more almond milk if needed to achieve desired consistency.',
    'Pour the smoothie mixture into a bowl.',
    'Top with chia seeds, granola, fresh strawberries, and blueberries.',
    'Serve immediately and enjoy with a spoon.',
  ],
  prepTime: '10 min',
  cookTime: '0 min',
  totalTime: '10 min',
  servings: 1,
  tips: [
    'Use a high-powered blender for the smoothest consistency.',
    'Customize toppings based on preference or availability.',
  ],
  usedIn: ['smoothieBowls'],
};
