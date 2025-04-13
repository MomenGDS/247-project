
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Service {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
}

const services: Service[] = [
  {
    id: 1,
    name: 'Amer',
    logo: '/lovable-uploads/f9e6fefe-cf24-4223-ab43-eaf26d20d6a6.png',
    description: 'Amer offers comprehensive visa and residency services, including applications, renewals, and status inquiries for UAE residents and visitors.',
    website: 'https://www.amer.ae',
  },
  {
    id: 2,
    name: 'Tasheel',
    logo: '/lovable-uploads/f98ccb7d-4913-4d5e-9a09-698657d276ba.png',
    description: 'Tasheel provides streamlined business services, including company registration, licensing, and document processing for UAE enterprises.',
    website: 'https://www.tasheel.ae',
  },
  {
    id: 3,
    name: 'Tawjeeh',
    logo: '/lovable-uploads/706a4e06-d067-4532-b48e-adf06c63e39a.png',
    description: 'Tawjeeh delivers guidance and orientation services for UAE newcomers, including cultural orientation and local regulations assistance.',
    website: 'https://www.tawjeeh.ae',
  }
];

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
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = 'https://via.placeholder.com/150?text=' + service.name;
                        }}
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
