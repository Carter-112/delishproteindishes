import { Clock } from 'lucide-react';
import { SauceTheme } from '../utils/themes/types';
import { sauceThemes } from '../utils/themes';

interface RecipeGroupCardProps {
  title: string;
  description: string;
  cookingTime: string;
  icon: React.ReactNode;
  onClick: () => void;
  theme?: SauceTheme;
}

export default function RecipeGroupCard({
  title,
  description,
  cookingTime,
  icon,
  onClick,
  theme = sauceThemes.default
}: RecipeGroupCardProps) {
  return (
    <button 
      onClick={onClick}
      className={`w-full group relative bg-slate-800/50 backdrop-blur-sm border 
        ${theme.border} rounded-xl p-4 sm:p-6 ${theme.buttonHover} 
        transition-all duration-700 cursor-pointer text-left hover:scale-[1.02]`}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className={theme.text}>
          {icon}
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-white">{title}</h2>
      </div>
      <p className={`${theme.text} text-sm mb-4 line-clamp-2`}>{description}</p>
      <div className="flex items-center gap-2 text-sm">
        <Clock className={`w-4 h-4 ${theme.text}`} />
        <span className={theme.text}>{cookingTime}</span>
      </div>
    </button>
  );
}