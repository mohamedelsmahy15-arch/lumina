import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="font-bold text-white text-lg">L</span>
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">LUMINA</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Pioneering the future of connected living spaces through sustainable, intelligent design.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-500 transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Order Status</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Stay Connected</h4>
            <div className="flex gap-4 mb-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
             <p className="text-xs text-gray-600">
               Subscribe to our newsletter for exclusive drops.
             </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">© 2024 Lumina Smart Living. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;