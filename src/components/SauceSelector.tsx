import { ChevronLeft } from 'lucide-react';
import { Recipe, Sauce } from '../types';
import { SauceTheme } from '../utils/themes/types';
import { defaultTheme } from '../utils/themeDefaults';
import { getCategoryTitle } from '../utils/getCategoryTitle';

interface SauceSelectorProps {
  sauces: (Recipe | Sauce)[];
  onSelect: (id: number) => void;
  onBack: () => void;
  theme?: SauceTheme;
  groupId: string;
}

export default function SauceSelector({ 
  sauces, 
  onSelect, 
  onBack, 
  theme = defaultTheme,
  groupId 
}: SauceSelectorProps) {
  const categoryTitle = getCategoryTitle(groupId);

  return (
    <div className="max-w-4xl mx-auto p-3 sm:p-6 animate-fadeIn">
      <div className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl ${theme.shadow} 
        overflow-hidden border ${theme.border}`}>
        <div className="bg-slate-800/80 px-4 sm:px-8 py-6">
          <button 
            onClick={onBack}
            className={`flex items-center gap-3 text-left ${theme.buttonHover} 
              transition-colors w-full group`}
          >
            <ChevronLeft className={`w-5 h-5 sm:w-6 sm:h-6 ${theme.text} flex-shrink-0 mt-1`} />
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-normal">
              {categoryTitle}
            </h2>
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 p-4 sm:p-8">
          {sauces.map((sauce) => (
            <button
              key={sauce.id}
              onClick={() => onSelect(sauce.id)}
              className={`group bg-slate-800/30 backdrop-blur-sm 
                border ${theme.border} rounded-xl p-6 text-left 
                transition-all duration-300 hover:scale-102 ${theme.shadow} 
                hover:border-opacity-40`}
            >
              <h3 className={`text-lg font-semibold ${theme.text} 
                mb-3 group-hover:text-white transition-colors leading-normal`}>
                {sauce.name}
              </h3>
              <div className="space-y-1 text-sm sm:text-base">
                <p className={theme.text}>
                  {'totalCalories' in sauce ? `${sauce.totalCalories} calories total (4 servings)` : `${sauce.nutritionalInfo.calories} calories per serving`}
                </p>
                <p className={theme.text}>
                  {'totalProtein' in sauce ? `${sauce.totalProtein}g protein total` : `${sauce.nutritionalInfo.protein}g protein per serving`}
                </p>
                <p className={theme.text}>
                  Prep: {sauce.prepTime}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}