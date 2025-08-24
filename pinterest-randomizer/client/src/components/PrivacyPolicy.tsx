import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <div className="bg-white p-10">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-lg">
              Last updated: August 23, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-left">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              MuseGrid ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our application.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              <strong>No Personal Data Collection:</strong> MuseGrid does not collect, store, or transmit any personal information about you. We do not require you to create an account or provide any personal details.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              MuseGrid is a tool that helps you find drawing inspiration by randomly selecting images from public Pinterest boards. When you enter a Pinterest username, we only access publicly available information that anyone can see on Pinterest.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Storage
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              <strong>Local Storage Only:</strong> Any data (like recently viewed usernames or boards) is stored only on your device using your browser's local storage. We never send this information to our servers.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              MuseGrid integrates with Pinterest's public API to access publicly available board and pin information. We do not have access to private Pinterest data or user accounts.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Cookies and Tracking
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We do not use cookies, tracking pixels, or any other tracking technologies. Your browsing activity remains private.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              MuseGrid is not intended for children under 13. We do not knowingly collect any personal information from children under 13.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">GitHub</p>
                  <a 
                    href="https://github.com/nicoledicochea" 
                    className="text-red-600 hover:text-red-700 underline decoration-2 underline-offset-4 hover:decoration-red-400 transition-all duration-300 text-lg"
                  >
                    nicoledicochea
                  </a>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Since we don't collect personal data, there's no personal information to access, modify, or delete. You can clear any locally stored data by clearing your browser's local storage.
            </p>
          </div>

          <div className="text-center mt-10">
            <a
              href="/"
              className="text-red-600 hover:text-red-700 underline decoration-2 underline-offset-4 hover:decoration-red-400 transition-all duration-300 text-lg"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
