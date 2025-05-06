import { useState } from 'react';
import { ChefHat, Shuffle, Sparkles } from 'lucide-react';
import { Sauce } from '../types';

interface SauceControlsProps {
  sauces: Sauce[];
  onSauceSelect: (sauceId: number) => void;
  currentTheme: string;
}

export default function SauceControls({ sauces, onSauceSelect, currentTheme }: SauceControlsProps) {
  const [selectedSauce, setSelectedSauce] = useState<string>('');

  const handleRandomSauce = () => {
    const randomIndex = Math.floor(Math.random() * sauces.length);
    setSelectedSauce(randomIndex.toString());
    onSauceSelect(randomIndex);
  };

  const handleSauceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedSauce(value);
    onSauceSelect(parseInt(value, 10));
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-12">
      <button
        onClick={handleRandomSauce}
        className={`group relative flex items-center gap-3 ${currentTheme} px-8 py-4 rounded-xl 
          text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg 
          hover:shadow-blue-500/25`}
      >
        <Shuffle className="w-5 h-5" />
        Pick a Random Sauce
        <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-blue-300 animate-pulse" />
      </button>
      
      <div className="flex items-center gap-3">
        <ChefHat className="w-6 h-6 text-blue-400" />
        <select
          value={selectedSauce}
          onChange={handleSauceChange}
          className="bg-slate-800 text-white border border-blue-500/30 rounded-xl 
            px-6 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-all duration-300 hover:border-blue-400"
        >
          <option value="" disabled>-- Select a Sauce --</option>
          {sauces.map((sauce) => (
            <option key={sauce.id} value={sauce.id}>
              {sauce.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}