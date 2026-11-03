import React from 'react';
import { bestSellers } from '../data/products';
import ProductCard from './ProductCard';
import { Star } from 'lucide-react';

const BestSellers: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 bg-yellow-500/10 border border-yellow-500/20 px-3 py-1 rounded-full text-yellow-500 text-xs font-bold uppercase tracking-wider mb-4">
            <Star size={12} fill="currentColor" /> Top Rated Collection
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Best Sellers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellers.map((product) => (
            <div key={product.id} className="relative">
              {/* Special Badge wrapper */}
              <div className="absolute -top-3 -right-3 z-20 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-yellow-500/20">
                ⭐⭐⭐⭐⭐
              </div>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;