import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

const FlashSale: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-blue-300">
            <Zap className="fill-current" />
            <span className="font-bold tracking-widest uppercase">Flash Sale Ends In</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">30% OFF <br />Lumina Hub X1</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-md">
            Upgrade your home's central intelligence today. Limited stock available for this exclusive offer.
          </p>
          <button className="px-10 py-4 bg-white text-blue-900 font-bold text-lg rounded-full hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform duration-200">
            Shop Now
          </button>
        </div>

        {/* Countdown Visual */}
        <div className="flex gap-4 md:gap-8">
          {[
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center mb-2 shadow-2xl">
                <span className="text-3xl md:text-4xl font-bold text-white font-mono">
                  {item.value.toString().padStart(2, '0')}
                </span>
              </div>
              <span className="text-xs uppercase tracking-widest text-blue-300">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSale;