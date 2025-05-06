import { List, ChefHat, Flame, ChevronLeft } from 'lucide-react';
import { Recipe } from '../types';
import { SauceTheme } from '../utils/themes/types';
import { getCategoryTitle } from '../utils/getCategoryTitle';

interface RecipeProps {
  recipe: Recipe;
  onBack: () => void;
  theme: SauceTheme;
}

export default function Recipe({ recipe, onBack, theme }: RecipeProps) {
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 animate-fadeIn">
      <button 
        onClick={onBack} 
        className={`flex items-center gap-2 mb-6 px-4 py-2 rounded-lg ${theme.bg} ${theme.text} ${theme.buttonHover} transition-colors`}
      >
        <ChevronLeft className="w-5 h-5" /> Back to Recipes
      </button>
      
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className={`text-2xl sm:text-3xl font-bold ${theme.text} mb-2`}>{recipe.name}</h1>
          <p className="text-gray-300 text-lg">{getCategoryTitle(recipe.category)}</p>
        </div>
        
        {/* Image */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden rounded-xl shadow-xl">
          <img 
            src={recipe.image} 
            alt={recipe.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70`} />
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto -mt-12 z-10 relative">
          <div className={`flex items-center justify-center gap-2 bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 border ${theme.border}`}>
            <ChefHat className={`w-5 h-5 ${theme.text}`} />
            <div>
              <p className={`text-sm ${theme.text}`}>Prep</p>
              <p className="text-white font-medium">{recipe.prepTime}</p>
            </div>
          </div>
          <div className={`flex items-center justify-center gap-2 bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 border ${theme.border}`}>
            <Flame className={`w-5 h-5 ${theme.text}`} />
            <div>
              <p className={`text-sm ${theme.text}`}>Cook</p>
              <p className="text-white font-medium">{recipe.cookTime}</p>
            </div>
          </div>
          <div className={`flex items-center justify-center gap-2 bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 border ${theme.border}`}>
            <span className={`text-xl font-bold ${theme.text}`}>P</span>
            <div>
              <p className={`text-sm ${theme.text}`}>Protein</p>
              <p className="text-white font-medium">{recipe.nutritionalInfo.protein}g</p>
            </div>
          </div>
          <div className={`flex items-center justify-center gap-2 bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 border ${theme.border}`}>
            <span className={`text-xl font-bold ${theme.text}`}>C</span>
            <div>
              <p className={`text-sm ${theme.text}`}>Calories</p>
              <p className="text-white font-medium">{recipe.nutritionalInfo.calories}</p>
            </div>
          </div>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Ingredients */}
          <div className="md:col-span-1">
            <div className={`flex items-center gap-2 mb-4`}>
              <List className={`w-5 h-5 ${theme.text}`} />
              <h2 className={`text-xl font-semibold ${theme.text}`}>Ingredients</h2>
            </div>
            <div className={`space-y-3 bg-slate-800/50 backdrop-blur-sm border ${theme.border} rounded-lg p-4`}>
              {recipe.ingredients.map((ingredient, index) => (
                <p key={index} className="text-white">
                  <span className={theme.text}>{ingredient.amount} {ingredient.unit}</span> {ingredient.name}
                </p>
              ))}
              {recipe.sharedBase && recipe.sharedBase.ingredients.map((ingredient, index) => (
                <p key={index} className="text-white">
                  <span className={theme.text}>{ingredient.amount} {ingredient.unit}</span> {ingredient.name} <span className="text-gray-400 text-sm">(base)</span>
                </p>
              ))}
            </div>
          </div>
          
          {/* Instructions */}
          <div className="md:col-span-2">
            <h2 className={`text-xl font-semibold ${theme.text} mb-4`}>Instructions</h2>
            <div className={`space-y-3 bg-slate-800/50 backdrop-blur-sm border ${theme.border} rounded-lg p-4`}>
              {recipe.instructions.map((step, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <span className={`font-bold w-6 h-6 flex items-center justify-center rounded-full ${theme.bg} ${theme.text}`}>{index + 1}</span>
                  <p className="text-white flex-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
