
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
    logo: "/lovable-uploads/f9e6fefe-cf24-4223-ab43-eaf26d20d6a6.png",
    description: 'Comprehensive visa and residency services for UAE residents and visitors.',
    website: 'https://www.amer.ae',
  },
  {
    id: 2,
    name: 'Tasheel',
    logo: "/lovable-uploads/f98ccb7d-4913-4d5e-9a09-698657d276ba.png",
    description: 'Streamlined business services for UAE enterprises.',
    website: 'https://www.tasheel.ae',
  },
  {
    id: 3,
    name: 'Tawjeeh',
    logo: "/lovable-uploads/706a4e06-d067-4532-b48e-adf06c63e39a.png",
    description: 'Guidance and orientation services for UAE newcomers.',
    website: 'https://www.tawjeeh.ae',
  }
];

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-16 px-4 md:px-6 bg-gray-50/80">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 animate-slide-in">Our Services</h2>
        
        <Carousel
          className="w-full max-w-5xl mx-auto"
          onSelect={(api) => {
            if (api) setCurrentIndex(api.selectedScrollSnap());
          }}
        >
          <CarouselContent className="-ml-4">
            {services.map((service, index) => (
              <CarouselItem key={service.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="service-card h-full flex flex-col rounded-3xl overflow-hidden bg-white">
                  {/* Image container with fixed aspect ratio */}
                  <div className="p-4 md:p-6 flex-1">
                    <AspectRatio ratio={1/1} className="bg-gray-100/50 rounded-2xl mb-6 overflow-hidden">
                      <img 
                        src={service.logo} 
                        alt={`${service.name} logo`}
                        className="w-full h-full object-contain p-6"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = 'https://via.placeholder.com/150?text=' + service.name;
                        }}
                      />
                    </AspectRatio>
                    <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                    
                    {/* Description lines */}
                    <div className="space-y-2 mb-4">
                      <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                      <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded-full w-1/2"></div>
                    </div>
                    
                    <a 
                      href={service.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="uae-button inline-block mt-4"
                      aria-label={`Visit ${service.name} website`}
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex items-center justify-center gap-2 mt-8">
            <CarouselPrevious className="relative -left-0 translate-y-0 hover:bg-gray-100 border-none" />
            <div className="flex gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    // Find the carousel api and scroll to the selected index
                    document.querySelectorAll('[data-radix-carousel-element="viewport"]')[0]
                      ?.closest('[data-radix-carousel-root]')
                      ?.dispatchEvent(
                        new CustomEvent('selectSnapshot', { detail: { index } })
                      );
                  }}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === currentIndex 
                      ? "bg-gradient-to-r from-uae-red to-uae-green w-8" 
                      : "bg-gray-300"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <CarouselNext className="relative -right-0 translate-y-0 hover:bg-gray-100 border-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ServicesCarousel;
