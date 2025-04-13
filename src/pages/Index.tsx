
import React from 'react';
import Hero from '@/components/Hero';
import ServicesCarousel from '@/components/ServicesCarousel';
import GoogleReviews from '@/components/GoogleReviews';
import AIChatbot from '@/components/AIChatbot';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Services Carousel */}
      <ServicesCarousel />
      
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
