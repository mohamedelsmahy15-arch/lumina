import React from 'react';
import { motion } from 'framer-motion';

const Quote: React.FC = () => {
  return (
    <section className="py-32 bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-3xl md:text-4xl lg:text-5xl font-light text-zinc-900 leading-tight mb-6 font-serif italic">
            "We don’t just sell gadgets… we deliver a smarter life experience."
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Quote;