
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { services } from '@/data/services';

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? services.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === services.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Function to handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, serviceName: string, backupSrc: string) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== backupSrc) {
      target.onerror = null; // Prevent infinite error loop
      target.src = backupSrc;
    } else {
      // If backup also fails, use a text placeholder
      target.onerror = null;
      target.src = `https://via.placeholder.com/150/FFFFFF/000000?text=${serviceName}`;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-slide-in">Our Services</h2>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service) => (
                <div key={service.id} className="w-full flex-shrink-0 px-4">
                  <div className="service-card flex flex-col md:flex-row items-center gap-6 h-full">
                    <div className="w-full md:w-1/3 flex justify-center">
                      <img 
                        src={service.logo} 
                        alt={`${service.name} logo`}
                        className="w-32 h-auto object-contain"
                        onError={(e) => handleImageError(e, service.name, service.backupLogo)}
                      />
                    </div>
                    <div className="w-full md:w-2/3 text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                      <p className="mb-6 text-gray-600">{service.description}</p>
                      <a 
                        href={service.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="uae-button inline-block"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white text-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100"
            variant="outline"
            size="icon"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-white text-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100"
            variant="outline"
            size="icon"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          
          <div className="flex justify-center mt-6">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 mx-1 rounded-full transition-all duration-300",
                  index === currentIndex 
                    ? "bg-gradient-to-r from-uae-red to-uae-green scale-125" 
                    : "bg-gray-300"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
