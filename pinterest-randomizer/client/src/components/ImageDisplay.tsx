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
       id: '4b',
       title: '',
       description: '',
       imageUrl: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=600&h=800&fit=crop',
       originalUrl: 'https://pinterest.com/pin/example4b',
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
     {
       id: '6b',
       title: 'Abstract Composition',
       description: '',
       imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=800&fit=crop',
       originalUrl: 'https://pinterest.com/pin/example6b',
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8 pt-20">
                 {/* Header */}
         <div className="text-center mb-12">
           <h1 className="text-4xl font-bold text-gray-900 mb-4">
             {currentImage?.boardName || 'Random Inspiration'}
           </h1>
           <p className="text-xl text-gray-600 mb-6">
             from <span className="font-semibold text-[#E60023]">@{username}</span>
           </p>
         </div>

                 {/* Main Content */}
         <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          {isLoading ? (
            // Loading State
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E60023] mx-auto mb-4"></div>
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
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg ml-2" style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(4px)'
                }}>
                  🎨 Inspiration #{imageHistory.length}
                </div>
              </div>

                             {/* Image Details */}
               <div className="p-6">
                 {currentImage.title && (
                   <h2 className="text-2xl font-bold text-gray-900 mb-4">
                     {currentImage.title}
                   </h2>
                 )}
                 {currentImage.description && (
                   <p className="text-gray-700 mb-6 leading-relaxed">
                     {currentImage.description}
                   </p>
                 )}

                                 <div className="flex flex-wrap gap-4 mb-8 justify-center mt-2">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                    {currentImage.boardName}
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    @{currentImage.creator}
                  </span>
                  <button onClick={handleViewOnPinterest} className="bg-white text-[#E60023] px-3 py-1 rounded-full text-sm font-medium cursor-pointer border-2 border-[#E60023] transition-all duration-200 flex items-center gap-2" onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#E60023';
                    e.currentTarget.style.color = 'white';
                  }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'white';
                      e.currentTarget.style.color = '#E60023';
                    }}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                    </svg>
                    View on Pinterest
                  </button>
                </div>

                                 {/* Action Buttons */}
                 <div className="space-y-6">
                  {/* Primary Randomization Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={getRandomImageFromSameBoard}
                      disabled={isLoading}
                      className="flex-1 bg-[#E60023] text-white px-6 py-3 rounded-lg font-medium border-2 border-[#E60023] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'white';
                        e.currentTarget.style.color = '#E60023';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#E60023';
                        e.currentTarget.style.color = 'white';
                      }}
                    >
                      {isLoading ? 'Loading...' : 'Same Board'}
                    </button>

                    <button
                      onClick={getRandomImageFromAnyBoard}
                      disabled={isLoading}
                      className="flex-1 bg-[#E60023] text-white border-2 border-[#E60023] px-6 py-3 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'white';
                        e.currentTarget.style.color = '#E60023';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#E60023';
                        e.currentTarget.style.color = 'white';
                      }}
                    >
                      {isLoading ? 'Loading...' : 'Any Board'}
                    </button>
                  </div>
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
                  className="bg-[#E60023] text-white px-6 py-2 rounded-lg hover:bg-white hover:text-[#E60023] border-2 border-[#E60023] transition-all duration-200"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}
        </div>

                 {/* Navigation */}
         <div className="text-center mt-8">
          <span>← </span>
          <span
            onClick={handleBackToBoards}
            className="text-sm font-medium hover:underline decoration-1 underline-offset-4 transition-colors cursor-pointer"
          >
            Back to Boards
          </span>
        </div>

                 {/* History Counter */}
         {imageHistory.length > 0 && (
           <div className="text-center mt-10">
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
