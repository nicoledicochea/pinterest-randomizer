import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <a 
              href="/" 
              className="text-2xl font-bold text-gray-900 transition-colors duration-200"
              style={{ '--tw-text-opacity': '1' } as React.CSSProperties}
              onMouseEnter={(e) => e.currentTarget.style.color = '#E60023'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}
            >
              MuseGrid
            </a>
          </div>

          {/* Navigation Links - Right aligned */}
          <div className="flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="/privacy"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-100"
            >
              Privacy Policy
            </a>
            <a
              href="https://github.com/nicoledicochea/pinterest-randomizer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-100"
            >
              GitHub
            </a>
            
            {/* Get Started Button */}
            <a
              href="/username"
              className="text-red-600 px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-200 border-2 shadow-md hover:shadow-lg"
              style={{ 
                backgroundColor: 'white',
                borderColor: '#E60023'
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E60023';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#E60023';
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
