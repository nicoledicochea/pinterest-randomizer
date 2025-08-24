import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>MuseGrid</strong><br />
          Effective Date: {new Date().toLocaleDateString()}
        </p>

        <p className="text-gray-700 mb-6">
          This Privacy Policy describes how MuseGrid ("we," "our," or "the App") handles your information.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
        <p className="text-gray-700 mb-6">
          The App connects to your Pinterest account using the Pinterest API to access your boards and the pins (images) within them. 
          We do not collect or store any of your personal information on our servers, including your name, email, or Pinterest account details. 
          Your Pinterest access token is used only for the duration of your session to make API calls to Pinterest and is not stored after you close the application.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Information</h2>
        <p className="text-gray-700 mb-6">
          All data accessed from the Pinterest API (boards and pins) is used on a temporary basis to provide the core functionality of the App—randomly selecting images for your personal use. 
          The App does not share your data with any third parties.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Your Control Over Your Information</h2>
        <p className="text-gray-700 mb-6">
          Because we do not store any of your personal information, you have full control of your data through your Pinterest account settings. 
          You can revoke the App's access at any time in your Pinterest account settings.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Changes to This Privacy Policy</h2>
        <p className="text-gray-700 mb-6">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Contact Us</h2>
        <p className="text-gray-700 mb-6">
          If you have any questions about this Privacy Policy, you can contact us at: nicoledicochea.dev@gmail.com
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
