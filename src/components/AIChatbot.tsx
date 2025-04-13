
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const AIChatbot = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* Floating chat bubble */}
      <div 
        className="ai-chatbot-bubble z-50"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </div>

      {/* Expanded chat bubble */}
      {expanded && (
        <div className="fixed bottom-28 right-8 w-80 bg-white rounded-lg shadow-xl z-40 overflow-hidden transition-all duration-300 animate-fade-in">
          <div className="bg-gradient-to-r from-uae-red to-uae-green p-4 text-white">
            <h3 className="font-bold">AI Chatbot</h3>
          </div>
          <div className="p-6 flex flex-col items-center justify-center h-64">
            <div className="mb-4 text-center">
              <h4 className="text-lg font-semibold mb-2">Coming Soon!</h4>
              <p className="text-gray-600">Our AI assistant will be here soon to help with your inquiries.</p>
            </div>
            <div className="animate-pulse mt-4">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-uae-red rounded-full"></div>
                <div className="w-2 h-2 bg-uae-green rounded-full"></div>
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
