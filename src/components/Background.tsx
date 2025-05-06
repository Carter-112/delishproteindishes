import { useTheme } from '../hooks/useTheme';

export default function Background() {
  const { theme } = useTheme();
  
  return (
    <>
      {/* Main gradient background */}
      <div className={`fixed inset-0 bg-gradient-to-br ${theme.mainGradient}
        transition-all duration-700 ease-in-out`} />
      
      {/* Animated gradient overlay */}
      <div className={`fixed inset-0 bg-gradient-to-br ${theme.pulseGradient}
        opacity-40 transition-all duration-700 animate-pulse`} />
      
      {/* Moving gradient background */}
      <div className={`fixed inset-0 bg-gradient-to-r ${theme.gradient}
        opacity-50 animate-gradientMove transition-all duration-700`} 
        style={{ backgroundSize: '200% 200%' }} />
      
      {/* Background texture */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1920')] 
        opacity-10 bg-cover bg-center mix-blend-overlay" />
    </>
  );
}