import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface MockPin {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  originalUrl: string;
  boardName: string;
  creator: string;
}

interface ImageDisplayProps {
  onBackToBoards: () => void;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ onBackToBoards }) => {
  const [currentImage, setCurrentImage] = useState<MockPin | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageHistory, setImageHistory] = useState<MockPin[]>([]);
  const { username, boardId } = useParams<{ username: string; boardId: string }>();
  const navigate = useNavigate();

  // Mock pins data - we'll replace this with real API data later
  const mockPins: MockPin[] = [
    {
      id: '1',
      title: 'Ethereal Forest Concept Art',
      description: 'Beautiful fantasy forest with mystical lighting and atmospheric perspective. Perfect for landscape practice.',
      imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=800&fit=crop',
      originalUrl: 'https://pinterest.com/pin/example1',
      boardName: 'Drawing Inspiration',
      creator: username || 'demo'
    },
    {
      id: '2',
      title: 'Character Portrait Study',
      description: 'Detailed character design with interesting lighting and expression. Great for portrait practice.',
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop',
      originalUrl: 'https://pinterest.com/pin/example2',
      boardName: 'Character Design',
      creator: username || 'demo'
    },
    {
      id: '3',
      title: 'Mountain Landscape Reference',
      description: 'Stunning mountain vista with dramatic clouds and lighting. Perfect for environment art.',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop',
      originalUrl: 'https://pinterest.com/pin/example3',
      boardName: 'Landscape Ideas',
      creator: username || 'demo'
    },
    {
      id: '4',
      title: 'Color Harmony Study',
      description: 'Beautiful color palette inspiration with warm and cool tones. Great for color theory practice.',
      imageUrl: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=600&h=800&fit=crop',
      originalUrl: 'https://pinterest.com/pin/example4',
      boardName: 'Color Palettes',
      creator: username || 'demo'
    },
    {
      id: '5',
      title: 'Figure Drawing Reference',
      description: 'Dynamic pose with interesting gesture and anatomy. Perfect for figure drawing practice.',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop',
      originalUrl: 'https://pinterest.com/pin/example5',
      boardName: 'Anatomy Reference',
      creator: username || 'demo'
    },
    {
      id: '6',
      title: 'Fantasy Architecture',
      description: 'Magical castle design with intricate details and atmospheric perspective.',
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=800&fit=crop',
      originalUrl: 'https://pinterest.com/pin/example6',
      boardName: 'Fantasy Art',
      creator: username || 'demo'
    },
    // Additional pins from other boards for variety
    {
      id: '7',
      title: 'Abstract Art Inspiration',
      description: 'Bold abstract composition with vibrant colors and dynamic shapes. Great for modern art practice.',
      imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=800&fit=crop',
      originalUrl: 'https://pinterest.com/pin/example7',
      boardName: 'Modern Art',
      creator: username || 'demo'
    },
    {
      id: '8',
      title: 'Watercolor Techniques',
      description: 'Delicate watercolor painting with beautiful color blending and texture effects.',
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop',
      originalUrl: 'https://pinterest.com/pin/example8',
      boardName: 'Watercolor Art',
      creator: username || 'demo'
    }
  ];

  const getRandomImageFromSameBoard = () => {
    if (!currentImage) return;
    
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Get pins from the same board
      const sameBoardPins = mockPins.filter(pin => 
        pin.boardName === currentImage.boardName && pin.id !== currentImage.id
      );
      
      // If no more pins in same board, show message or get from any board
      if (sameBoardPins.length === 0) {
        // Could show a message: "No more pins in this board, trying any board..."
        getRandomImageFromAnyBoard();
        return;
      }
      
      const randomPin = sameBoardPins[Math.floor(Math.random() * sameBoardPins.length)];
      setCurrentImage(randomPin);
      setImageHistory(prev => [...prev, randomPin]);
      setIsLoading(false);
    }, 800);
  };

  const getRandomImageFromAnyBoard = () => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const availablePins = mockPins.filter(pin => 
        !imageHistory.some(historyPin => historyPin.id === pin.id)
      );
      
      // If we've seen all images, reset history but keep current image
      if (availablePins.length === 0 && currentImage) {
        setImageHistory([currentImage]);
        const newPin = mockPins.find(pin => pin.id !== currentImage.id) || mockPins[0];
        setCurrentImage(newPin);
        setImageHistory(prev => [...prev, newPin]);
      } else {
        const randomPin = availablePins[Math.floor(Math.random() * availablePins.length)];
        setCurrentImage(randomPin);
        setImageHistory(prev => [...prev, randomPin]);
      }
      
      setIsLoading(false);
    }, 800);
  };

  // Legacy function for backward compatibility
  const getRandomImage = getRandomImageFromAnyBoard;

  // Get initial random image on component mount
  useEffect(() => {
    getRandomImage();
  }, []);

  const handleBackToBoards = () => {
    navigate(`/boards/${username}`);
  };

  const handleViewOnPinterest = () => {
    if (currentImage) {
      window.open(currentImage.originalUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            MuseGrid
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Drawing inspiration from <span className="font-semibold text-pink-600">@{username}</span>
          </p>
          <p className="text-lg text-gray-500">
            {currentImage?.boardName && `From "${currentImage.boardName}" board`}
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          {isLoading ? (
            // Loading State
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
                <p className="text-gray-600 text-lg">Finding your inspiration...</p>
              </div>
            </div>
          ) : currentImage ? (
            <>
              {/* Image Display */}
              <div className="relative">
                <img
                  src={currentImage.imageUrl}
                  alt={currentImage.title}
                  className="w-full h-auto max-h-96 object-contain bg-gray-100"
                />
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  🎨 Inspiration #{imageHistory.length}
                </div>
              </div>

              {/* Image Details */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {currentImage.title}
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {currentImage.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                    📌 {currentImage.boardName}
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    👤 @{currentImage.creator}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  {/* Primary Randomization Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={getRandomImageFromSameBoard}
                      disabled={isLoading}
                      className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? 'Loading...' : '🎲 Same Board'}
                    </button>
                    
                    <button
                      onClick={getRandomImageFromAnyBoard}
                      disabled={isLoading}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? 'Loading...' : '🌟 Any Board'}
                    </button>
                  </div>
                  
                  {/* Pinterest Link Button */}
                  <button
                    onClick={handleViewOnPinterest}
                    className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-all duration-200 flex items-center justify-center"
                  >
                    📌 View on Pinterest
                  </button>
                </div>
              </div>
            </>
          ) : (
            // Error State
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <p className="text-gray-600 text-lg mb-4">No inspiration found</p>
                <button
                  onClick={getRandomImageFromAnyBoard}
                  className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleBackToBoards}
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
          >
            ← Back to Boards
          </button>
          
          <button
            onClick={() => navigate('/username')}
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
          >
            🔄 Try Different User
          </button>
        </div>

        {/* History Counter */}
        {imageHistory.length > 0 && (
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">
              You've viewed {imageHistory.length} inspiration{imageHistory.length !== 1 ? 's' : ''} this session
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageDisplay;
