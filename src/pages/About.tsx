import { ChefHat, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
          <div className="flex items-center gap-4 mb-8">
            <ChefHat className="w-12 h-12 text-blue-400" />
            <h1 className="text-4xl font-bold text-white">About Me</h1>
          </div>
          
          <div className="space-y-6 text-blue-200">
            <p className="text-lg leading-relaxed">
              I create these healthy recipes in my free time because I'm passionate about nutritious cooking. 
              My goal is to share simple, protein-rich meals that anyone can make at home.
            </p>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1920" 
                alt="Cooking preparation" 
                className="rounded-lg w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-lg"></div>
            </div>

            <div className="flex items-center gap-2 text-blue-300">
              <Heart className="w-5 h-5" />
              <span>Sharing healthy recipes with the community</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}