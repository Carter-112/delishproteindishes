import { ChefHat, UtensilsCrossed, IceCream, Apple } from 'lucide-react';
import { SauceTheme } from '../utils/themeColors';
import { defaultTheme } from '../utils/themeDefaults';

interface GroupIconProps {
  groupId: string;
  theme: SauceTheme;
}

export default function GroupIcon({ groupId, theme }: GroupIconProps) {
  const iconClass = `w-6 h-6 ${theme?.text || defaultTheme.text}`;

  switch (groupId) {
    case 'chicken-omelettes':
      return <ChefHat className={iconClass} />;
    case 'desserts':
      return <IceCream className={iconClass} />;
    case 'protein-snacks':
      return <Apple className={iconClass} />;
    default:
      return <UtensilsCrossed className={iconClass} />;
  }
}