
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">24 Seven Government Transactions Center</h3>
            <p className="text-gray-400 mb-4">Your one-stop solution for government services in the UAE.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: info@24seven.ae</p>
            <p className="text-gray-400">Phone: +971 4 123 4567</p>
            <p className="text-gray-400">Dubai, United Arab Emirates</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <p className="text-gray-400">Mon - Thu: 8:00 AM - 4:00 PM</p>
            <p className="text-gray-400">Fri: 8:00 AM - 12:00 PM</p>
            <p className="text-gray-400">Sat - Sun: Closed</p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-400">© {currentYear} 24 Seven Government Transactions Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
