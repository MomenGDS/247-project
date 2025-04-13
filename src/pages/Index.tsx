
import React from 'react';
import Hero from '@/components/Hero';
import ServicesCarousel from '@/components/ServicesCarousel';
import GoogleReviews from '@/components/GoogleReviews';
import AIChatbot from '@/components/AIChatbot';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <Hero />
      
      {/* Services Carousel */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-uae-red/5 to-uae-green/5 pointer-events-none"></div>
        <ServicesCarousel />
      </div>
      
      {/* Google Reviews */}
      <GoogleReviews />
      
      {/* AI Chatbot */}
      <AIChatbot />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
