import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Quote from './components/Quote';
import ProductGrid from './components/ProductGrid';
import ParallaxBanner from './components/ParallaxBanner';
import BestSellers from './components/BestSellers';
import FlashSale from './components/FlashSale';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Quote />
        <ProductGrid />
        <ParallaxBanner />
        <BestSellers />
        <FlashSale />
      </main>
      <Footer />
    </div>
  );
}

export default App;