import { ChefHat, Clock, UtensilsCrossed } from 'lucide-react';
import Recipe from './Recipe';
import SauceSelector from './SauceSelector';
import ComingSoonMeal from './ComingSoonMeal';
import RecipeGroupCard from './RecipeGroupCard';
import { Recipe as RecipeType, Sauce } from '../types';
import { SauceTheme } from '../utils/themes/types';

interface RecipeSectionProps {
  recipes: (RecipeType | Sauce)[];
  selectedRecipeId: number | null;
  onRecipeSelect: (id: number) => void;
  showSelector: boolean;
  onBack: () => void;
  theme: SauceTheme;
  groupId: string;
}

export default function RecipeSection({ 
  recipes, 
  selectedRecipeId, 
  onRecipeSelect, 
  showSelector,
  onBack,
  theme,
  groupId
}: RecipeSectionProps) {
  const selectedRecipe = selectedRecipeId !== null ? recipes[selectedRecipeId] : null;

  if (selectedRecipe) {
    return (
      <Recipe 
        recipe={'sharedBase' in selectedRecipe ? selectedRecipe : { ...selectedRecipe, sharedBase: undefined }}
        theme={theme}
        onBack={onBack}
        groupId={groupId}
      />
    );
  }

  if (showSelector) {
    return (
      <SauceSelector 
        sauces={recipes}
        onSelect={onRecipeSelect}
        onBack={onBack}
        theme={theme}
        groupId={groupId}
      />
    );
  }

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {recipes.map((recipe, index) => (
          <RecipeGroupCard
            key={index}
            title={recipe.name}
            description={recipe.category}
            cookingTime={recipe.totalTime}
            icon={<UtensilsCrossed className={`w-6 h-6 ${theme.text}`} />}
            onClick={() => onRecipeSelect(index)}
            theme={theme}
          />
        ))}
      </div>
      <ComingSoonMeal />
    </div>
  );
}