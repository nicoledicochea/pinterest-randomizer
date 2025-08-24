import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            MuseGrid
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find drawing inspiration from your Pinterest boards without the endless scrolling
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Select Your Board</h3>
              <p className="text-gray-600">Choose from your Pinterest boards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎲</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Get Random Inspiration</h3>
              <p className="text-gray-600">We'll pick a random image for you</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Start Creating</h3>
              <p className="text-gray-600">Use the image as drawing inspiration</p>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Coming Soon!</h2>
          <p className="text-xl mb-6">
            We're working on connecting to Pinterest to bring you this functionality.
          </p>
          <div className="bg-white/20 rounded-lg p-4 inline-block">
            <p className="text-sm">
              🔒 Your privacy is important to us. We never store your personal data.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-500">
            <a href="/privacy" className="text-pink-600 hover:text-pink-700 underline">
              Privacy Policy
            </a>
            {' • '}
            <a href="https://github.com/nicoledicochea/pinterest-randomizer" className="text-pink-600 hover:text-pink-700 underline">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
