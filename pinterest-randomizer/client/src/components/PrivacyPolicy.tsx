import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Last updated: December 24, 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 mb-6">
              MuseGrid ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our application.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-700 mb-6">
              <strong>No Personal Data Collection:</strong> MuseGrid does not collect, store, or transmit any personal information about you. We do not require you to create an account or provide any personal details.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-gray-700 mb-6">
              MuseGrid is a tool that helps you find drawing inspiration by randomly selecting images from public Pinterest boards. When you enter a Pinterest username, we only access publicly available information that anyone can see on Pinterest.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Storage
            </h2>
            <p className="text-gray-700 mb-6">
              <strong>Local Storage Only:</strong> Any data (like recently viewed usernames or boards) is stored only on your device using your browser's local storage. We never send this information to our servers.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-700 mb-6">
              MuseGrid integrates with Pinterest's public API to access publicly available board and pin information. We do not have access to private Pinterest data or user accounts.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Cookies and Tracking
            </h2>
            <p className="text-gray-700 mb-6">
              We do not use cookies, tracking pixels, or any other tracking technologies. Your browsing activity remains private.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-700 mb-6">
              MuseGrid is not intended for children under 13. We do not knowingly collect any personal information from children under 13.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
              <li>GitHub: <a href="https://github.com/nicoledicochea/pinterest-randomizer" className="text-purple-600 hover:text-purple-700 underline">github.com/nicoledicochea/pinterest-randomizer</a></li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-700 mb-6">
              Since we don't collect personal data, there's no personal information to access, modify, or delete. You can clear any locally stored data by clearing your browser's local storage.
            </p>
          </div>

          <div className="text-center mt-8">
            <a
              href="/"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
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
