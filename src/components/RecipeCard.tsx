import { Clock } from 'lucide-react';
import { RecipeGroup } from '../types';
import { SauceTheme } from '../utils/themes/types';

interface RecipeCardProps {
  group: RecipeGroup;
  onClick: () => void;
  theme: SauceTheme;
  icon: React.ReactNode;
}

export default function RecipeCard({ group, onClick, theme, icon }: RecipeCardProps) {
  return (
    <div 
      onClick={onClick}
      className={`group relative bg-slate-800/50 backdrop-blur-sm border ${theme.border}
        rounded-xl p-6 ${theme.buttonHover} transition-all duration-300 cursor-pointer`}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-6 h-6 ${theme.text}`}>{icon}</div>
        <h2 className="text-xl font-semibold text-white">{group.name}</h2>
      </div>
      <p className={`${theme.text} text-sm mb-4`}>{group.description}</p>
      <div className="flex items-center gap-2 text-sm">
        <Clock className={`w-4 h-4 ${theme.text}`} />
        <span className={theme.text}>{group.cookingTime}</span>
      </div>
    </div>
  );
}