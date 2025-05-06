import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Background from './components/Background';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AdPlaceholder from './components/AdPlaceholder';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen relative flex flex-col">
        <Background />
        
        {/* Content */}
        <div className="relative flex-1 flex flex-col z-10">
          <Navigation />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <div className="sticky bottom-0 w-full">
            <AdPlaceholder />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}