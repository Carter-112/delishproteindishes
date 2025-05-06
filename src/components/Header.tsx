import { Utensils, Sparkles } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function Header() {
  const { theme } = useTheme();

  return (
    <header className="relative overflow-hidden py-8 sm:py-16 px-4">
      <div className={`absolute inset-0 bg-gradient-to-r ${theme?.gradient || 'from-blue-600/20 via-indigo-600/20 to-purple-600/20'} 
        opacity-30 animate-pulse transition-all duration-700`} />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-4 sm:mb-6 space-x-3">
          <Utensils className={`w-8 h-8 sm:w-12 sm:h-12 ${theme?.text || 'text-blue-400'}`} />
          <Sparkles className={`w-6 h-6 sm:w-8 sm:h-8 ${theme?.text || 'text-blue-400'} animate-pulse`} />
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight px-2">
          High-Protein Recipe Collection
        </h1>
        
        <p className={`text-lg sm:text-xl ${theme?.text || 'text-blue-400'} max-w-2xl mx-auto leading-relaxed px-4`}>
          Discover protein-packed recipes for your fitness goals!
        </p>
      </div>
    </header>
  );
}