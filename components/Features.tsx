import React from 'react';
import { ShieldCheck, Truck, MessageCircle, Banknote } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <ShieldCheck size={32} />,
    title: "Premium Quality",
    description: "Certified excellence in every component."
  },
  {
    icon: <Truck size={32} />,
    title: "Fast Delivery",
    description: "24-48h shipping across the globe."
  },
  {
    icon: <MessageCircle size={32} />,
    title: "WhatsApp Support",
    description: "Instant expert assistance 24/7."
  },
  {
    icon: <Banknote size={32} />,
    title: "Cash on Delivery",
    description: "Pay securely when it arrives."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/30 transition-colors group text-center md:text-left"
            >
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-600/10 text-blue-500 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;