import { NavLink } from 'react-router-dom';
import { Info, Mail, Home } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function Navigation() {
  const { theme } = useTheme();

  const linkClass = ({ isActive }: { isActive: boolean }) => 
    `flex items-center gap-2 transition-colors ${
      isActive ? (theme?.text || 'text-blue-400') : `${theme?.text || 'text-blue-400'}/70 hover:${theme?.text || 'text-blue-400'}`
    }`;

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-blue-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-end h-16 gap-4 sm:gap-6">
          <NavLink to="/" className={linkClass}>
            <Home className="w-4 h-4" />
            <span className="text-sm sm:text-base">Home</span>
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            <Info className="w-4 h-4" />
            <span className="text-sm sm:text-base">About</span>
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            <Mail className="w-4 h-4" />
            <span className="text-sm sm:text-base">Contact</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}