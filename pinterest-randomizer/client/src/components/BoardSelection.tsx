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
    // Navigate directly to image display page when board is clicked
    navigate(`/image/${username}/${board.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8 pt-20">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Public Boards
          </h1>
          <div className="inline-block mb-8">
            <span className="text-2xl font-semibold text-gray-700 text-[#E60023]">@{username}</span>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            <button
              onClick={() => navigate(`/image/${username}/random`)}
              className="bg-white text-[#E60023] border-2 border-[#E60023] px-6 py-2 rounded-lg font-medium transition-all duration-200 text-sm align-middle mx-2"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#E60023';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#E60023';
                e.currentTarget.style.color = 'white';
              }}
            >
              Randomize from All Boards
            </button>
          </p>
        </div>

        {/* Board Grid */}
        <div className="text-center mb-6">
          <p className="text-lg text-gray-700">
            Or, choose from a specific board:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mockBoards.map((board) => (
            <div
              key={board.id}
              onClick={() => handleBoardClick(board)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-200 border-2 border-transparent hover:shadow-xl hover:border-gray-200"
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

        {/* Try Another Username Button */}
        <div className="text-center">
          <span>← </span>
          <a 
            href="/username" 
            className="text-sm font-medium hover:underline decoration-1 underline-offset-4 transition-colors"
          >
            Try Another Username
          </a>
        </div>
      </div>
    </div>
  );
};

export default BoardSelection;
