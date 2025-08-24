import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface UsernameInputProps {
  onUsernameSubmit: (username: string) => void;
}

const UsernameInput: React.FC<UsernameInputProps> = ({ onUsernameSubmit }) => {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim()) {
      setError('Please enter a Pinterest username');
      return;
    }

    // Remove @ symbol if user includes it
    const cleanUsername = username.trim().replace('@', '');
    
    if (cleanUsername.length < 3) {
      setError('Username must be at least 3 characters');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate API call delay (we'll replace this with real API call later)
    setTimeout(() => {
      setIsLoading(false);
      onUsernameSubmit(cleanUsername);
      // Navigate to board selection page
      navigate(`/boards/${cleanUsername}`);
    }, 1000);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (error) setError(''); // Clear error when user types
  };

  return (
    <div className="min-h-screen flex items-start justify-center px-4 bg-gray-50 pt-36">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            MuseGrid
          </h1>
          <p className="text-lg text-gray-700">
            Find inspiration from any Pinterest user
          </p>
        </div>

        {/* Username Input Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Enter Pinterest Username
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Pinterest Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 text-lg">@</span>
                </div>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder="username"
                  className={`block w-full pl-8 pr-4 py-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#E60023] focus:border-transparent transition-all duration-200 ${
                    error ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                  }`}
                  disabled={isLoading}
                />
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading || !username.trim()}
              className={`w-full py-3 px-4 rounded-lg font-medium border-2 transition-shadow duration-200 ${
                isLoading || !username.trim()
                  ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-default'
                  : 'bg-[#E60023] text-white border-[#E60023] cursor-pointer'
              }`}
              onMouseEnter={(e) => {
                if (!isLoading && username.trim()) {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#E60023';
                } 
              }}
              onMouseLeave={(e) => {
                // Always clear inline styles to let CSS classes take over
                e.currentTarget.style.backgroundColor = '';
                e.currentTarget.style.color = '';
              }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center text-gray-400">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-400 mr-2"></div>
                  Finding Boards...
                </div>
              ) : (
                'Find Boards'
              )}
            </button>
          </form>

          {/* Help Text */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Enter any public Pinterest username to explore their boards
            </p>
            <p className="text-xs text-gray-500 mt-2">
              No account connection required • Public boards only
            </p>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-6">
        <span>← </span>
          <a 
            href="/" 
            className="text-sm font-medium hover:underline decoration-1 underline-offset-4 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default UsernameInput;
