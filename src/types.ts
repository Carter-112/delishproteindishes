export interface Recipe {
  id: string;
  name: string;
  category: string;
  image: string;
  ingredients: Ingredient[];
  nutritionalInfo: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  instructions: string[];
  prepTime: string;
  cookTime: string;
  totalTime: string;
  servings: number;
  tips: string[];
  usedIn: string[];
  sharedBase?: SharedBase;
}

export interface Ingredient {
  id: string;
  name: string;
  amount: string;
  unit: string;
}

export interface SharedBase {
  ingredients: Ingredient[];
  nutritionalInfo: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

export interface Sauce {
  id: string;
  name: string;
  category: string;
  image: string;
  ingredients: Ingredient[];
  nutritionalInfo: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  instructions: string[];
  prepTime: string;
  cookTime: string;
  totalTime: string;
  servings: number;
  tips: string[];
  usedIn: string[];
  totalCalories: number;
  perServingCalories: number;
  totalProtein: number;
}

export interface RecipeGroup {
  id: string;
  name: string;
  description: string;
  cookingTime: string;
  recipes: Recipe[];
  themeKey: string;
}

export type ScrollPosition = 'top' | 'belowNav';