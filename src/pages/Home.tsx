import { useState } from 'react';
import Header from '../components/Header';
import RecipeSection from '../components/RecipeSection';
import ComingSoonMeal from '../components/ComingSoonMeal';
import RecipeGroupCard from '../components/RecipeGroupCard';
import GroupIcon from '../components/GroupIcon';
import { recipeGroups } from '../data/recipeGroups';
import { sauceThemes } from '../utils/themes';
import { useTheme } from '../hooks/useTheme';
import { useScrollBehavior } from '../hooks/useScrollBehavior';

export default function Home() {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);
  const [showSelector, setShowSelector] = useState(false);
  const { setTheme } = useTheme();

  useScrollBehavior(selectedGroup, selectedRecipeId, showSelector);

  const handleRecipeGroupClick = (groupId: string) => {
    setSelectedGroup(groupId);
    setShowSelector(true);
    setTheme(groupId); // Only set group theme
  };

  const handleRecipeSelect = (recipeId: number) => {
    setSelectedRecipeId(recipeId);
    setShowSelector(false);
    if (selectedGroup) {
      setTheme(selectedGroup); // Keep group theme, don't change for variations
    }
  };

  const handleBack = () => {
    if (selectedRecipeId !== null) {
      setSelectedRecipeId(null);
      setShowSelector(true);
      if (selectedGroup) {
        setTheme(selectedGroup);
      }
    } else {
      setSelectedGroup(null);
      setShowSelector(false);
      setTheme('default');
    }
  };

  const currentGroup = recipeGroups.find(g => g.id === selectedGroup);

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        {!selectedGroup && !showSelector ? (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {recipeGroups.map((group) => (
                <RecipeGroupCard
                  key={group.id}
                  title={group.name}
                  description={group.description}
                  cookingTime={group.cookingTime}
                  icon={<GroupIcon groupId={group.id} theme={sauceThemes[group.id]} />}
                  onClick={() => handleRecipeGroupClick(group.id)}
                  theme={sauceThemes[group.id]}
                />
              ))}
            </div>
            <ComingSoonMeal />
          </div>
        ) : (
          currentGroup && (
            <RecipeSection 
              recipes={currentGroup.recipes}
              selectedRecipeId={selectedRecipeId}
              onRecipeSelect={handleRecipeSelect}
              showSelector={showSelector}
              onBack={handleBack}
              theme={sauceThemes[currentGroup.id]}
              groupId={currentGroup.id}
            />
          )
        )}
      </main>
    </>
  );
}