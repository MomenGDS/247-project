
import React from 'react';

const reviews = [
  { id: 1, text: "Great service! Very efficient and professional staff.", rating: 5 },
  { id: 2, text: "Saved me hours of waiting. Highly recommend for all government services.", rating: 5 },
  { id: 3, text: "Quick processing of my visa application. Thank you!", rating: 5 },
  { id: 4, text: "The staff was very helpful and knowledgeable.", rating: 4 },
  { id: 5, text: "Excellent service from start to finish.", rating: 5 },
  { id: 6, text: "Very organized center with minimal waiting times.", rating: 4 },
  { id: 7, text: "Fast and efficient visa renewal process.", rating: 5 },
  { id: 8, text: "The staff went above and beyond to assist me with my documents.", rating: 5 },
  { id: 9, text: "Convenient location and excellent service.", rating: 5 },
  { id: 10, text: "Streamlined processes made my experience hassle-free.", rating: 4 },
  { id: 11, text: "Very professional and courteous staff.", rating: 5 },
  { id: 12, text: "Best government service center I've visited in the UAE.", rating: 5 },
];

const GoogleReviews = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-2">
              <p className="text-4xl font-bold mr-4">7,900</p>
              <p className="text-2xl">Google Reviews</p>
            </div>
            <div className="flex items-center">
              <p className="text-2xl font-bold mr-4">4.8</p>
              <div className="star-rating text-2xl">★★★★☆</div>
            </div>
          </div>
        </div>

        <div className="marquee-container mb-6">
          <div className="marquee-content scroll-left flex">
            {reviews.slice(0, 6).map((review) => (
              <div key={review.id} className="min-w-[300px] mx-4 p-4 bg-gray-50 rounded-lg shadow">
                <div className="star-rating mb-2">
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </div>
                <p className="text-gray-600">"{review.text}"</p>
              </div>
            ))}
            {reviews.slice(0, 6).map((review) => (
              <div key={`dup-${review.id}`} className="min-w-[300px] mx-4 p-4 bg-gray-50 rounded-lg shadow">
                <div className="star-rating mb-2">
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </div>
                <p className="text-gray-600">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>

        <div className="marquee-container">
          <div className="marquee-content scroll-right flex">
            {reviews.slice(6, 12).map((review) => (
              <div key={review.id} className="min-w-[300px] mx-4 p-4 bg-gray-50 rounded-lg shadow">
                <div className="star-rating mb-2">
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </div>
                <p className="text-gray-600">"{review.text}"</p>
              </div>
            ))}
            {reviews.slice(6, 12).map((review) => (
              <div key={`dup-${review.id}`} className="min-w-[300px] mx-4 p-4 bg-gray-50 rounded-lg shadow">
                <div className="star-rating mb-2">
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </div>
                <p className="text-gray-600">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
