import React from 'react';
import { Product } from '../types';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      className="group relative bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-lg hover:shadow-2xl hover:border-blue-600/50 transition-all duration-300 flex flex-col"
    >
      {product.isNew && (
        <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-full">
          New
        </span>
      )}
      
      <div className="relative aspect-square overflow-hidden bg-zinc-800/50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60"></div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{product.name}</h3>
          <p className="text-sm text-gray-400 line-clamp-1">{product.tagline}</p>
        </div>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-2xl font-light text-white">${product.price}</span>
          <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
            <Plus size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;