import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center neon-glow">
            <span className="font-bold text-white text-lg">L</span>
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">LUMINA</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Products</a>
          <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Innovations</a>
          <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Support</a>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <button className="relative group">
            <ShoppingBag className="w-6 h-6 text-gray-300 group-hover:text-blue-500 transition-colors" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 text-[10px] font-bold flex items-center justify-center rounded-full">2</span>
          </button>
          
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-4">
           <a href="#" className="text-lg font-medium text-gray-300">Products</a>
           <a href="#" className="text-lg font-medium text-gray-300">Innovations</a>
           <a href="#" className="text-lg font-medium text-gray-300">About</a>
           <a href="#" className="text-lg font-medium text-gray-300">Support</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;