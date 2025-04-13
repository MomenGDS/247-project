
import React from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="hero-gradient min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <div className={cn("max-w-4xl mx-auto animate-fade-in")}>
        <div className="mb-8 transform transition-all">
          {/* Center logo */}
          <img 
            src="/center-logo.png" 
            alt="24 Seven Government Transactions Center" 
            className="w-48 h-auto mx-auto mb-8"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = 'https://via.placeholder.com/150?text=24+Seven';
            }}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-uae-red via-uae-black to-uae-green bg-clip-text text-transparent">
            Welcome to 24 Seven Government Transactions Center
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-6">
            Your one-stop solution for Amer, Tasheel, and Tawjeeh services in the UAE.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
