import { SharedBase } from '../types';

export const smoothieBowlBase: SharedBase = {
  ingredients: [
    { id: 'greekYogurt', name: 'Greek Yogurt (0% fat)', amount: '3', unit: 'cups' },
    { id: 'wheyProtein', name: 'Whey Protein Isolate', amount: '4', unit: 'scoops' },
    { id: 'cottageCheese', name: 'Cottage Cheese', amount: '2', unit: 'cups' },
    { id: 'hempSeeds', name: 'Hemp Seeds', amount: '0.5', unit: 'cup' },
    { id: 'chiaSeeds', name: 'Chia Seeds', amount: '0.25', unit: 'cup' },
    { id: 'flaxSeeds', name: 'Flax Seeds', amount: '0.25', unit: 'cup' },
    { id: 'almondMilk', name: 'Unsweetened Almond Milk', amount: '1', unit: 'cup' },
    { id: 'granola', name: 'Sugar-Free Granola', amount: '0.5', unit: 'cup' }
  ],
  nutritionalInfo: {
    calories: 300, // per serving
    protein: 30,   // per serving
    carbs: 0,      // placeholder
    fat: 0         // placeholder
  }
};