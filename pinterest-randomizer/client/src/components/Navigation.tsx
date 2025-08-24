import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-pink-600 hover:text-pink-700">
              MuseGrid
            </a>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="/" 
              className="text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a 
              href="/username" 
              className="text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Get Started
            </a>
            <a 
              href="/privacy" 
              className="text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
