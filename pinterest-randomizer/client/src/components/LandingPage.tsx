import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            MuseGrid
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8" style={{ maxWidth: '30rem' }}>
            Find drawing inspiration from any Pinterest user's boards without the endless scrolling
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-black rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Enter Username</h3>
              <p className="text-gray-600">Search any Pinterest username to explore their boards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Choose a Board</h3>
              <p className="text-gray-600">Browse and select from their available boards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎲</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Get Random Inspiration</h3>
              <p className="text-gray-600">We'll pick a random image for you to draw from</p>
            </div>
          </div>
        </div>

        {/* Get Started Section */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 mt-8">Ready to Get Inspired?</h2>
          <div className="mb-6 pt-2">
            <button 
              onClick={() => window.location.href = '/username'}
              className="inline-block bg-white px-16 py-4  font-bold text-lg border-1 border-gray-900 shadow-xl hover:bg-gray-50 hover:border-gray-700 transform hover:scale-105 transition-all duration-200 cursor-pointer rounded-lg"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-600">
            🔒 Your privacy is important to us. We never store your personal data. • 
            <a href="/privacy" className="text-gray-800 hover:text-gray-900 underline ml-1">
              Privacy Policy
            </a>
            {' • '}
            <a href="https://github.com/nicoledicochea/pinterest-randomizer" className="text-gray-800 hover:text-gray-900 underline">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
