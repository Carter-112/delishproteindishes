import { SharedBase } from '../types';

export const sharedBase: SharedBase = {
  ingredients: [
    { id: 'chickenBreast', name: 'Chicken Breast (cut into chunks)', amount: '24', unit: 'oz' },
    { id: 'rawEggs', name: 'Raw Eggs', amount: '10', unit: 'whole' },
    { id: 'mixedGreens', name: 'Mixed Greens Pack', amount: '1', unit: 'handful' },
    { id: 'freshSpinach', name: 'Fresh Spinach', amount: '1', unit: 'handful' },
    { id: 'cookedLentils', name: 'Cooked Lentils', amount: '1', unit: 'scoop' },
    { id: 'pumpkinSeeds', name: 'Pumpkin Seeds', amount: '1', unit: 'scoop' },
    { id: 'chiaSeeds', name: 'Chia Seeds', amount: '1', unit: 'scoop' },
    { id: 'mozzarella', name: 'Shredded Fat-Free Mozzarella', amount: '4-5', unit: 'oz' }
  ],
  nutritionalInfo: {
    calories: 461, // per serving
    protein: 41,   // per serving (approximated)
    carbs: 0,      // placeholder
    fat: 0         // placeholder
  }
};