import { SharedBase } from '../types';

export const proteinBowlBase: SharedBase = {
  ingredients: [
    { id: 'groundTurkey', name: 'Lean Ground Turkey', amount: '32', unit: 'oz' },
    { id: 'quinoa', name: 'Quinoa (dry)', amount: '2', unit: 'cups' },
    { id: 'blackBeans', name: 'Black Beans', amount: '2', unit: 'cups' },
    { id: 'chickpeas', name: 'Chickpeas', amount: '2', unit: 'cups' },
    { id: 'greekYogurt', name: 'Greek Yogurt', amount: '1', unit: 'cup' },
    { id: 'hempSeeds', name: 'Hemp Seeds', amount: '0.25', unit: 'cup' },
    { id: 'pumpkinSeeds', name: 'Pumpkin Seeds', amount: '0.25', unit: 'cup' },
    { id: 'mixedVegetables', name: 'Mixed Vegetables', amount: '2', unit: 'cups' }
  ],
  nutritionalInfo: {
    calories: 400, // per serving
    protein: 40,   // per serving
    carbs: 0,      // placeholder
    fat: 0         // placeholder
  }
};