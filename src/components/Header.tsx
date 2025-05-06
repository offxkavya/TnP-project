import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart3 } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2">
            <BarChart3 className="h-7 w-7 text-blue-600" />
            <span className="font-bold text-xl text-slate-800">ReturnMetrics</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#return-rates" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Return Rates
            </a>
            <a href="#environmental-impact" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Environmental Impact
            </a>
            <a href="#financial-costs" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Financial Costs
            </a>
            <a href="#consumer-behavior" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Consumer Behavior
            </a>
            <a href="#platform-policies" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Platform Policies
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-700 p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fadeIn">
          <nav className="flex flex-col py-4 px-6 space-y-4">
            <a 
              href="#return-rates"
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors"
            >
              Return Rates
            </a>
            <a 
              href="#environmental-impact"
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors"
            >
              Environmental Impact
            </a>
            <a 
              href="#financial-costs"
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors"
            >
              Financial Costs
            </a>
            <a 
              href="#consumer-behavior"
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors"
            >
              Consumer Behavior
            </a>
            <a 
              href="#platform-policies"
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors"
            >
              Platform Policies
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;