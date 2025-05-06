import { Sauce } from '../types';
import { sharedBase } from './sharedBase';

export const sauces: Sauce[] = [
  {
    id: 'originalCreamySauce',
    name: 'Original Creamy Sauce',
    category: 'Sauce',
    image: '/images/original-creamy-sauce.jpg',
    ingredients: [
      { id: 'greekYogurt', name: 'Plain Nonfat Greek Yogurt', amount: '5.3', unit: 'oz' },
      { id: 'creamCheese', name: 'Reduced-Fat Cream Cheese', amount: '2', unit: 'oz' },
      { id: 'ranchSeasoning', name: 'Ranch Seasoning', amount: '1', unit: 'small scoop' },
      { id: 'chickenBoneBroth', name: 'Chicken Bone Broth', amount: '1', unit: 'cup' },
      { id: 'wheyProtein', name: 'Unflavored Whey Protein', amount: '2', unit: 'scoops' }
    ],
    nutritionalInfo: {
      calories: 529,
      protein: 45,
      carbs: 10,
      fat: 15,
    },
    totalCalories: 2115,
    perServingCalories: 529,
    totalProtein: 180,
    instructions: [
      'Blend base ingredients with chicken bone broth until smooth.',
      'Pour mixture into pan and cook on medium heat.',
      'Add yogurt, cream cheese, ranch seasoning, and whey protein.',
      'Cook for 10-15 minutes, stirring occasionally.',
      'When nearly set, flip with plate to cook other side.',
      'Add mozzarella on top and cover until melted.'
    ],
    prepTime: '5 min',
    cookTime: '15 min',
    totalTime: '20 min',
    servings: 4,
    tips: [
      'Adjust the thickness by adding more broth if needed.',
      'Use a non-stick pan to prevent sticking.'
    ],
    usedIn: ['chickenOmelettes']
  },
  {
    id: 'marinaraStyle',
    name: 'Marinara Style',
    category: 'Sauce',
    image: '/images/marinara-style-sauce.jpg',
    ingredients: [
      { id: 'marinaraSauce', name: 'Sugar-Free Marinara Sauce', amount: '1', unit: 'cup' },
      { id: 'italianSeasoning', name: 'Italian Seasoning', amount: '2', unit: 'tbsp' },
      { id: 'chickenBoneBroth', name: 'Chicken Bone Broth', amount: '0.5', unit: 'cup' },
      { id: 'mincedGarlic', name: 'Minced Garlic', amount: '2', unit: 'cloves' },
      { id: 'wheyProtein', name: 'Unflavored Whey Protein', amount: '2', unit: 'scoops' }
    ],
    nutritionalInfo: {
      calories: 512,
      protein: 44,
      carbs: 12,
      fat: 14,
    },
    totalCalories: 2050,
    perServingCalories: 512,
    totalProtein: 175,
    instructions: [
      'Blend base ingredients with chicken bone broth until smooth.',
      'Pour mixture into pan and cook on medium heat.',
      'Add marinara sauce, garlic, Italian seasoning, and whey protein.',
      'Cook for 10-15 minutes, stirring occasionally.',
      'When nearly set, flip with plate to cook other side.',
      'Add mozzarella on top and cover until melted.'
    ],
    prepTime: '5 min',
    cookTime: '15 min',
    totalTime: '20 min',
    servings: 4,
    tips: [
      'Use fresh garlic for a more robust flavor.',
      'Adjust seasoning to taste.'
    ],
    usedIn: ['chickenOmelettes']
  },
  {
    id: 'lightAlfredo',
    name: 'Light Alfredo',
    category: 'Sauce',
    image: '/images/light-alfredo-sauce.jpg',
    ingredients: [
      { id: 'alfredoSauce', name: 'Cauliflower Alfredo Sauce', amount: '1', unit: 'cup' },
      { id: 'almondMilk', name: 'Unsweetened Almond Milk', amount: '0.25', unit: 'cup' },
      { id: 'nutritionalYeast', name: 'Nutritional Yeast', amount: '2', unit: 'tbsp' },
      { id: 'garlicPowder', name: 'Garlic Powder', amount: '1', unit: 'tsp' },
      { id: 'wheyProtein', name: 'Unflavored Whey Protein', amount: '2', unit: 'scoops' }
    ],
    nutritionalInfo: {
      calories: 520,
      protein: 45,
      carbs: 10,
      fat: 16,
    },
    totalCalories: 2080,
    perServingCalories: 520,
    totalProtein: 178,
    instructions: [
      'Blend base ingredients with almond milk until smooth.',
      'Pour mixture into pan and cook on medium heat.',
      'Add alfredo sauce, nutritional yeast, garlic powder, and whey protein.',
      'Cook for 10-15 minutes, stirring occasionally.',
      'When nearly set, flip with plate to cook other side.',
      'Add mozzarella on top and cover until melted.'
    ],
    prepTime: '5 min',
    cookTime: '15 min',
    totalTime: '20 min',
    servings: 4,
    tips: [
      'Cauliflower alfredo sauce can be homemade for a healthier option.',
      'Adjust the consistency with more almond milk if needed.'
    ],
    usedIn: ['chickenOmelettes']
  },
  {
    id: 'freshHerb',
    name: 'Fresh Herb',
    category: 'Sauce',
    image: '/images/fresh-herb-sauce.jpg',
    ingredients: [
      { id: 'basil', name: 'Fresh Basil', amount: '1', unit: 'cup' },
      { id: 'parsley', name: 'Fresh Parsley', amount: '0.5', unit: 'cup' },
      { id: 'oliveOil', name: 'Olive Oil', amount: '0.25', unit: 'cup' },
      { id: 'garlic', name: 'Garlic', amount: '2', unit: 'cloves' },
      { id: 'wheyProtein', name: 'Unflavored Whey Protein', amount: '2', unit: 'scoops' },
      { id: 'lemonJuice', name: 'Lemon Juice', amount: 'to taste', unit: '' }
    ],
    nutritionalInfo: {
      calories: 550,
      protein: 46,
      carbs: 8,
      fat: 20,
    },
    totalCalories: 2200,
    perServingCalories: 550,
    totalProtein: 182,
    instructions: [
      'Blend base ingredients with olive oil until smooth.',
      'Pour mixture into pan and cook on medium heat.',
      'Add blended herbs, garlic, lemon juice, and whey protein.',
      'Cook for 10-15 minutes, stirring occasionally.',
      'When nearly set, flip with plate to cook other side.',
      'Add mozzarella on top and cover until melted.'
    ],
    prepTime: '5 min',
    cookTime: '15 min',
    totalTime: '20 min',
    servings: 4,
    tips: [
      'Use fresh herbs for the best flavor.',
      'Add lemon juice gradually to achieve desired tanginess.'
    ],
    usedIn: ['chickenOmelettes']
  },
  {
    id: 'bbqStyle',
    name: 'BBQ Style',
    category: 'Sauce',
    image: '/images/bbq-style-sauce.jpg',
    ingredients: [
      { id: 'bbqSauce', name: 'Sugar-Free BBQ Sauce', amount: '0.5', unit: 'cup' },
      { id: 'appleCiderVinegar', name: 'Apple Cider Vinegar', amount: '0.25', unit: 'cup' },
      { id: 'smokedPaprika', name: 'Smoked Paprika', amount: '1', unit: 'tbsp' },
      { id: 'chipotlePowder', name: 'Chipotle Powder', amount: '1', unit: 'tsp' },
      { id: 'wheyProtein', name: 'Unflavored Whey Protein', amount: '2', unit: 'scoops' }
    ],
    nutritionalInfo: {
      calories: 537,
      protein: 44,
      carbs: 12,
      fat: 15,
    },
    totalCalories: 2150,
    perServingCalories: 537,
    totalProtein: 176,
    instructions: [
      'Blend base ingredients with apple cider vinegar until smooth.',
      'Pour mixture into pan and cook on medium heat.',
      'Add BBQ sauce, spices, and whey protein, mixing well.',
      'Cook for 10-15 minutes, stirring occasionally.',
      'When nearly set, flip with plate to cook other side.',
      'Add mozzarella on top and cover until melted.'
    ],
    prepTime: '5 min',
    cookTime: '15 min',
    totalTime: '20 min',
    servings: 4,
    tips: [
      'Choose a high-quality sugar-free BBQ sauce for best results.',
      'Adjust spice levels to your preference.'
    ],
    usedIn: ['chickenOmelettes']
  },
  {
    id: 'sharpCheddar',
    name: 'Sharp Cheddar',
    category: 'Sauce',
    image: '/images/sharp-cheddar-sauce.jpg',
    ingredients: [
      { id: 'sharpCheddar', name: 'Reduced-Fat Sharp Cheddar', amount: '4', unit: 'oz' },
      { id: 'greekYogurt', name: 'Greek Yogurt', amount: '0.25', unit: 'cup' },
      { id: 'mustardPowder', name: 'Mustard Powder', amount: '1', unit: 'tsp' },
      { id: 'chickenBoneBroth', name: 'Chicken Bone Broth', amount: '0.5', unit: 'cup' },
      { id: 'wheyProtein', name: 'Unflavored Whey Protein', amount: '2', unit: 'scoops' }
    ],
    nutritionalInfo: {
      calories: 545,
      protein: 46,
      carbs: 9,
      fat: 18,
    },
    totalCalories: 2180,
    perServingCalories: 545,
    totalProtein: 185,
    instructions: [
      'Blend base ingredients with chicken bone broth until smooth.',
      'Pour mixture into pan and cook on medium heat.',
      'Add cheddar, yogurt, mustard powder, and whey protein.',
      'Cook for 10-15 minutes, stirring occasionally.',
      'When nearly set, flip with plate to cook other side.',
      'Add remaining cheddar on top and cover until melted.'
    ],
    prepTime: '5 min',
    cookTime: '15 min',
    totalTime: '20 min',
    servings: 4,
    tips: [
      'Use sharp cheddar for a more pronounced flavor.',
      'Stir continuously to prevent the cheese from burning.'
    ],
    usedIn: ['chickenOmelettes']
  },
  {
    id: 'pestoBasil',
    name: 'Pesto Basil',
    category: 'Sauce',
    image: '/images/pesto-basil-sauce.jpg',
    ingredients: [
      { id: 'basilPesto', name: 'Fresh Basil Pesto', amount: '0.5', unit: 'cup' },
      { id: 'greekYogurt', name: 'Greek Yogurt', amount: '0.25', unit: 'cup' },
      { id: 'pineNuts', name: 'Pine Nuts', amount: '2', unit: 'tbsp' },
      { id: 'wheyProtein', name: 'Unflavored Whey Protein', amount: '2', unit: 'scoops' },
      { id: 'lemonZest', name: 'Lemon Zest', amount: 'to taste', unit: '' }
    ],
    nutritionalInfo: {
      calories: 562,
      protein: 45,
      carbs: 10,
      fat: 22,
    },
    totalCalories: 2250,
    perServingCalories: 562,
    totalProtein: 180,
    instructions: [
      'Blend base ingredients with yogurt until smooth.',
      'Pour mixture into pan and cook on medium heat.',
      'Add pesto, pine nuts, and whey protein.',
      'Cook for 10-15 minutes, stirring occasionally.',
      'When nearly set, flip with plate to cook other side.',
      'Add mozzarella and remaining pine nuts on top.'
    ],
    prepTime: '5 min',
    cookTime: '15 min',
    totalTime: '20 min',
    servings: 4,
    tips: [
      'Toast pine nuts lightly for added flavor.',
      'Fresh basil pesto will give the best results.'
    ],
    usedIn: ['chickenOmelettes']
  }
];