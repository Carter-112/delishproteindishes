import { LayoutDashboard } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function AdPlaceholder() {
  const { theme } = useTheme();
  
  return (
    <div className="w-full py-2 px-4 bg-slate-900/50 backdrop-blur-md">
      <div className="max-w-4xl mx-auto">
        <div className={`bg-slate-800/30 backdrop-blur-sm border ${theme.border} 
          rounded-xl p-2 text-center transition-all duration-700`}>
          <div className="flex items-center justify-center gap-2">
            <LayoutDashboard className={`w-4 h-4 ${theme.text}`} />
            <p className={`${theme.text} text-sm font-medium`}>Advertisement</p>
          </div>
          <div className={`w-full h-[45px] ${theme.highlight} rounded-lg 
            flex items-center justify-center border ${theme.border}`}>
            <p className="text-gray-400 text-sm">Ad Space (728x45)</p>
          </div>
        </div>
      </div>
    </div>
  );
}