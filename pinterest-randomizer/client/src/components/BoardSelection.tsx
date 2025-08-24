import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface MockBoard {
  id: string;
  name: string;
  description: string;
  pinCount: number;
  coverImage: string;
  privacy: 'public' | 'secret';
}

interface BoardSelectionProps {
  onBoardSelect: (board: MockBoard) => void;
}

const BoardSelection: React.FC<BoardSelectionProps> = ({ onBoardSelect }) => {
  const [selectedBoard, setSelectedBoard] = useState<MockBoard | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();

  // Mock data - we'll replace this with real API data later
  const mockBoards: MockBoard[] = [
    {
      id: '1',
      name: 'Drawing Inspiration',
      description: 'My favorite art references and drawing ideas',
      pinCount: 45,
      coverImage: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop',
      privacy: 'public'
    },
    {
      id: '2',
      name: 'Character Design',
      description: 'Character concepts and design references',
      pinCount: 128,
      coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      privacy: 'public'
    },
    {
      id: '3',
      name: 'Landscape Ideas',
      description: 'Beautiful landscapes for background inspiration',
      pinCount: 67,
      coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      privacy: 'public'
    },
    {
      id: '4',
      name: 'Color Palettes',
      description: 'Color combinations and mood boards',
      pinCount: 89,
      coverImage: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=300&fit=crop',
      privacy: 'public'
    },
    {
      id: '5',
      name: 'Anatomy Reference',
      description: 'Human and animal anatomy for artists',
      pinCount: 156,
      coverImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      privacy: 'public'
    },
    {
      id: '6',
      name: 'Fantasy Art',
      description: 'Magical creatures and fantasy landscapes',
      pinCount: 203,
      coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      privacy: 'public'
    }
  ];

  const handleBoardClick = (board: MockBoard) => {
    setSelectedBoard(board);
  };

  const handleContinue = () => {
    if (!selectedBoard) return;
    
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
      onBoardSelect(selectedBoard);
      // Navigate to image display page
      navigate(`/image/${username}/${selectedBoard.id}`);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            MuseGrid
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Select a board from <span className="font-semibold text-pink-600">@{username}</span>
          </p>
          <p className="text-lg text-gray-500">
            Choose a board to get random drawing inspiration
          </p>
        </div>

        {/* Board Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mockBoards.map((board) => (
            <div
              key={board.id}
              onClick={() => handleBoardClick(board)}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-200 transform hover:scale-105 ${
                selectedBoard?.id === board.id 
                  ? 'ring-4 ring-pink-500 shadow-xl' 
                  : 'hover:shadow-xl'
              }`}
            >
              {/* Board Cover Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={board.coverImage}
                  alt={board.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                  {board.pinCount} pins
                </div>
                {selectedBoard?.id === board.id && (
                  <div className="absolute inset-0 bg-pink-500/20 flex items-center justify-center">
                    <div className="bg-pink-500 text-white rounded-full p-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Board Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {board.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {board.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {board.privacy}
                  </span>
                  <span className="text-sm text-gray-500">
                    {board.pinCount} pins
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 justify-center items-center">
          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/username')}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
            >
              ← Back to Username
            </button>
            
            <button
              onClick={handleContinue}
              disabled={!selectedBoard || isLoading}
              className={`px-8 py-3 rounded-lg font-medium text-white transition-all duration-200 ${
                !selectedBoard || isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transform hover:scale-105'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Loading...
                </div>
              ) : (
                `Get Random Image from ${selectedBoard?.name || 'Selected Board'}`
              )}
            </button>
          </div>
          
          {/* Random from Any Board Button */}
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-3">Or skip board selection and get random inspiration:</p>
            <button
              onClick={() => navigate(`/image/${username}/random`)}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200"
            >
              🌟 Random from Any Board
            </button>
          </div>
        </div>

        {/* Selection Help */}
        {!selectedBoard && (
          <div className="text-center mt-6">
            <p className="text-gray-500">
              👆 Click on a board above to select it
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoardSelection;
