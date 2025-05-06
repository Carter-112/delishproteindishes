import { Mail, MessageSquare, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "delishproteindishes@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
          <div className="flex items-center gap-4 mb-8">
            <MessageSquare className="w-12 h-12 text-blue-400" />
            <h1 className="text-4xl font-bold text-white">Contact Me</h1>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-blue-200 leading-relaxed text-center">
              Have a recipe suggestion or feedback? I'd love to hear your thoughts!
            </p>

            <div className="bg-slate-900/50 rounded-lg p-4 border border-blue-500/10">
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a 
                  href={`mailto:${email}`}
                  className="text-blue-300 hover:text-blue-100 transition-colors text-sm"
                >
                  {email}
                </a>
                <button
                  onClick={handleCopy}
                  className="p-1 rounded-md hover:bg-blue-500/10 transition-colors"
                  title="Copy email"
                >
                  {copied ? (
                    <Check className="w-3 h-3 text-green-400" />
                  ) : (
                    <Copy className="w-3 h-3 text-blue-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="relative mt-8">
              <img 
                src="https://images.unsplash.com/photo-1516824711718-9c1e683412ac?q=80&w=1920" 
                alt="Kitchen workspace" 
                className="rounded-lg w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}