import { SharedBase } from '../types';

export const proteinSnackBase: SharedBase = {
  ingredients: [
    { id: 'foodScale', name: 'Food scale', amount: '1', unit: 'item' },
    { id: 'measuringCups', name: 'Measuring cups and spoons', amount: '1', unit: 'set' },
    { id: 'mixingBowls', name: 'Mixing bowls', amount: '1', unit: 'set' },
    { id: 'storageContainers', name: 'Storage containers', amount: '1', unit: 'set' },
    { id: 'parchmentPaper', name: 'Parchment paper', amount: '1', unit: 'item' },
    { id: 'blender', name: 'Blender or food processor', amount: '1', unit: 'item' },
    { id: 'refrigeratorSpace', name: 'Refrigerator space', amount: '1', unit: 'item' }
  ],
  nutritionalInfo: {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0
  }
};