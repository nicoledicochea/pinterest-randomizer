import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="text-5xl font-bold mb-4">
            MuseGrid
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8" style={{ maxWidth: '30rem' }}>
            Find inspiration from any Pinterest user's boards without the endless scrolling
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-black rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FEF2F2' }}>
                <div className="w-8 h-8 bg-red-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Enter Username</h3>
              <p className="text-gray-600">Search any Pinterest username to explore their boards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FEE2E2' }}>
                <div className="w-8 h-8 bg-red-600 rounded-lg"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Choose a Board</h3>
              <p className="text-gray-600">Browse and select from their available boards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FEF2F2' }}>
                <div className="w-8 h-8 bg-red-600 transform rotate-45 rounded-lg"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Get Random Inspiration</h3>
              <p className="text-gray-600">We'll pick a random image for you to draw from</p>
            </div>
          </div>
        </div>

        {/* Get Started Section  */}
        <div className="p-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 mt-8">Ready to Get Inspired?</h2>
          {/* Get Started Button */}
          <button
            onClick={() => window.location.href = '/username'}
            className="inline-block bg-red-600 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-red-600 mx-auto mb-24 cursor-pointer"
            style={{
              '--tw-text-opacity': '1',
              '--tw-border-opacity': '1',
              padding: '16px 48px'
            } as React.CSSProperties}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = '#E60023';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#E60023';
              e.currentTarget.style.color = 'white';
            }}
          >
            Get Started
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-600">
            <div className="inline-flex items-center">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Your privacy is important to us. We never store your personal data. •
              <a href="/privacy" className="text-gray-800 hover:text-gray-900 underline ml-1">
                Privacy Policy
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
