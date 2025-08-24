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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            MuseGrid
          </h1>
          <p className="text-lg text-gray-600">
            Find drawing inspiration from any Pinterest creator
          </p>
        </div>

        {/* Username Input Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
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
                  className={`block w-full pl-8 pr-4 py-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 ${
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
              className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-200 ${
                isLoading || !username.trim()
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transform hover:scale-105'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Finding Boards...
                </div>
              ) : (
                'Find Boards'
              )}
            </button>
          </form>

          {/* Help Text */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Enter any public Pinterest username to explore their boards
            </p>
            <p className="text-xs text-gray-400 mt-2">
              No account connection required • Public boards only
            </p>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-6">
          <a 
            href="/" 
            className="text-pink-600 hover:text-pink-700 text-sm font-medium hover:underline transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default UsernameInput;
