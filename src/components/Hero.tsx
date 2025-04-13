
import React from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="hero-gradient min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 relative overflow-hidden">
      {/* Blurred circles for decorative background */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-uae-red/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-uae-green/20 rounded-full blur-3xl"></div>
      
      <div className={cn("max-w-4xl mx-auto animate-fade-in relative z-10")}>
        <div className="mb-8 transform transition-all">
          {/* Center logo with fallback */}
          <img 
            src="/lovable-uploads/0d0f4aff-13fc-4e73-8ef4-bc7b1f7bdc38.png" 
            alt="24 Seven Government Transactions Center" 
            className="w-48 h-auto mx-auto mb-8 drop-shadow-xl"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = './images/center-logo.svg';
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
