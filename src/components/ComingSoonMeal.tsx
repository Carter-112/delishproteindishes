import { ChefHat, Sparkles } from 'lucide-react';

export default function ComingSoonMeal() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-800/30 backdrop-blur-sm border border-blue-500/20 
          rounded-xl p-8 relative overflow-hidden text-center">
          <div className="absolute top-4 right-4">
            <Sparkles className="w-6 h-6 text-blue-400 animate-pulse" />
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <ChefHat className="w-8 h-8 text-blue-400" />
            <h2 className="text-2xl font-bold text-white">More Recipes Coming Soon!</h2>
          </div>

          <p className="text-blue-200/80 max-w-lg mx-auto">
            Stay tuned for new healthy and delicious recipes. We're cooking up something special!
          </p>
        </div>
      </div>
    </div>
  );
}