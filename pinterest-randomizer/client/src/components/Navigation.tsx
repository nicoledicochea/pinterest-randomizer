import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-900 hover:text-purple-600 transition-colors">
              MuseGrid
            </a>
          </div>

          {/* Navigation Links - Right aligned */}
          <div className="flex items-center space-x-8 ml-auto">
            <a
              href="/"
              className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-50"
            >
              Home
            </a>
            <a
              href="/privacy"
              className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-50"
            >
              Privacy Policy
            </a>
            <a
              href="https://github.com/nicoledicochea/pinterest-randomizer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-50"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
