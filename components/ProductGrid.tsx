import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const ProductGrid: React.FC = () => {
  return (
    <section className="py-24 bg-black" id="products">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Curated Collection</h2>
            <p className="text-gray-400 max-w-md">Explore our selection of premium smart home devices designed to upgrade every aspect of your daily life.</p>
          </div>
          <button className="hidden md:block text-blue-500 hover:text-white transition-colors mt-4 md:mt-0 font-medium">
            View All Collection &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="text-blue-500 hover:text-white transition-colors font-medium">
            View All Collection &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;