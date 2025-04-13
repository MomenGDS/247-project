
import React from 'react';
import { cn } from '@/lib/utils';

// Expanded list of mock reviews for better scrolling effect
const reviews = [
  { 
    id: 1, 
    name: "Mohammed Al-Farsi",
    title: "Business Owner",
    text: "Great service! Very efficient and professional staff. Completed all my business registration needs in one visit.", 
    rating: 5 
  },
  { 
    id: 2, 
    name: "Sarah Johnson",
    title: "Expat Resident",
    text: "Saved me hours of waiting. Highly recommend for all government services, especially visa renewals.", 
    rating: 5 
  },
  { 
    id: 3, 
    name: "Ahmed Hassan",
    title: "UAE National",
    text: "Quick processing of my visa application for my household staff. Thank you!", 
    rating: 5 
  },
  { 
    id: 4, 
    name: "Lina Zhou",
    title: "New Resident",
    text: "The staff was very helpful and knowledgeable about my residency requirements.", 
    rating: 4 
  },
  { 
    id: 5, 
    name: "James Wilson",
    title: "Company Manager",
    text: "Excellent service from start to finish. Our company's PRO services are handled perfectly.", 
    rating: 5 
  },
  { 
    id: 6, 
    name: "Fatima Al-Mansoori",
    title: "Entrepreneur",
    text: "Very organized center with minimal waiting times. Perfect for busy professionals.", 
    rating: 4 
  },
  { 
    id: 7, 
    name: "Raj Patel",
    title: "Small Business Owner",
    text: "Fast and efficient visa renewal process. Will definitely use their services again.", 
    rating: 5 
  },
  { 
    id: 8, 
    name: "Aisha Mahmoud",
    title: "HR Manager",
    text: "The staff went above and beyond to assist me with complex visa documents for our employees.", 
    rating: 5 
  },
  { 
    id: 9, 
    name: "David Muller",
    title: "Corporate Client",
    text: "Convenient location and excellent service. They handle all our company's government transactions.", 
    rating: 5 
  },
  { 
    id: 10, 
    name: "Nadia Al-Hashemi",
    title: "Student",
    text: "Streamlined processes made my student visa experience hassle-free.", 
    rating: 4 
  },
  { 
    id: 11, 
    name: "Carlos Rodriguez",
    title: "Restaurant Owner",
    text: "Very professional and courteous staff. They helped with all my business licensing needs.", 
    rating: 5 
  },
  { 
    id: 12, 
    name: "Maria Santos",
    title: "Property Investor",
    text: "Best government service center I've visited in the UAE. Helped me navigate property registration perfectly.", 
    rating: 5 
  },
];

const TestimonialCard = ({ review }: { review: typeof reviews[0] }) => {
  return (
    <div className="min-w-[300px] md:min-w-[350px] mx-4 p-6 rounded-xl backdrop-blur-md bg-white/40 shadow-lg border border-white/20 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="font-bold text-lg">{review.name}</p>
          <p className="text-sm text-gray-600">{review.title}</p>
        </div>
        <div className="star-rating">
          {'★'.repeat(review.rating)}
          {'☆'.repeat(5 - review.rating)}
        </div>
      </div>
      <p className="text-gray-700 italic">&ldquo;{review.text}&rdquo;</p>
    </div>
  );
};

const GoogleReviews = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-uae-red/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-uae-green/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-2">
              <p className="text-4xl font-bold mr-4 bg-gradient-to-r from-uae-red to-uae-green bg-clip-text text-transparent">7,900</p>
              <p className="text-2xl">Google Reviews</p>
            </div>
            <div className="flex items-center">
              <p className="text-2xl font-bold mr-4">4.8</p>
              <div className="star-rating text-2xl text-yellow-500">★★★★☆</div>
            </div>
          </div>
        </div>

        {/* First row - scrolling left */}
        <div className="overflow-hidden mb-8 py-4">
          <div className="flex animate-scroll-right">
            {[...reviews.slice(0, 6), ...reviews.slice(0, 6)].map((review, index) => (
              <TestimonialCard 
                key={`row1-${review.id}-${index}`} 
                review={review} 
              />
            ))}
          </div>
        </div>

        {/* Second row - scrolling right */}
        <div className="overflow-hidden py-4">
          <div className="flex animate-scroll-left">
            {[...reviews.slice(6), ...reviews.slice(6)].map((review, index) => (
              <TestimonialCard 
                key={`row2-${review.id}-${index}`}
                review={review}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
