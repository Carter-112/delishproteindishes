import { SharedBase } from '../types';

export const dessertBase: SharedBase = {
  ingredients: [
    { id: 'mixingBowls', name: 'Mixing bowls', amount: '1', unit: 'set' },
    { id: 'measuringCups', name: 'Measuring cups and spoons', amount: '1', unit: 'set' },
    { id: 'siliconeSpatula', name: 'Silicone spatula', amount: '1', unit: 'item' },
    { id: 'foodScale', name: 'Food scale (recommended)', amount: '1', unit: 'item' },
    { id: 'storageContainers', name: 'Storage containers', amount: '1', unit: 'set' },
    { id: 'parchmentPaper', name: 'Parchment paper', amount: '1', unit: 'item' },
    { id: 'bakingSheet', name: 'Baking sheet (if needed)', amount: '1', unit: 'item' },
    { id: 'handMixer', name: 'Hand mixer or whisk', amount: '1', unit: 'item' },
    { id: 'refrigeratorSpace', name: 'Refrigerator space', amount: '1', unit: 'item' }
  ],
  nutritionalInfo: {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0
  }
};