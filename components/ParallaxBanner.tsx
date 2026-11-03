import React from 'react';
import { motion } from 'framer-motion';

const ParallaxBanner: React.FC = () => {
  return (
    <section className="relative w-full py-40 overflow-hidden flex items-center justify-center">
       {/* Background Image - Absolute & Fixed feel */}
       <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("https://picsum.photos/1920/1080?random=10&grayscale")' }}
      ></div>
      <div className="absolute inset-0 z-10 bg-blue-900/80 mix-blend-multiply"></div>
      <div className="absolute inset-0 z-10 bg-black/40"></div>

      <div className="relative z-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-widest uppercase mb-4 neon-text">
            Smart Living <span className="text-blue-500">•</span> Smart Choices
          </h2>
          <p className="text-blue-200 text-lg md:text-xl font-light tracking-wide mt-6 max-w-2xl mx-auto">
            Design the life you've always imagined with technology that anticipates your needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxBanner;