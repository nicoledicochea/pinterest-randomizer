import React, { useState, useMemo } from 'react';
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
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const boardsPerPage = 12;

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
    },
    // Add more mock boards to demonstrate pagination
    {
      id: '7',
      name: 'Digital Art',
      description: 'Digital painting techniques and tools',
      pinCount: 78,
      coverImage: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=400&h=300&fit=crop',
      privacy: 'public'
    },
    {
      id: '8',
      name: 'Typography',
      description: 'Font inspiration and lettering styles',
      pinCount: 92,
      coverImage: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop',
      privacy: 'public'
    },
    {
      id: '9',
      name: 'Composition',
      description: 'Layout and design principles',
      pinCount: 134,
      coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      privacy: 'public'
    },
    {
      id: '10',
      name: 'Lighting',
      description: 'Light and shadow techniques',
      pinCount: 67,
      coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      privacy: 'public'
    },
    {
      id: '11',
      name: 'Textures',
      description: 'Surface patterns and material studies',
      pinCount: 89,
      coverImage: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=300&fit=crop',
      privacy: 'public'
    },
    {
      id: '12',
      name: 'Perspective',
      description: 'Depth and spatial relationships',
      pinCount: 112,
      coverImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      privacy: 'public'
    }
  ];

  // Filter boards based on search term
  const filteredBoards = useMemo(() => {
    if (!searchTerm.trim()) return mockBoards;
    return mockBoards.filter(board =>
      board.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      board.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredBoards.length / boardsPerPage);
  const startIndex = (currentPage - 1) * boardsPerPage;
  const endIndex = startIndex + boardsPerPage;
  const currentBoards = filteredBoards.slice(startIndex, endIndex);

  const handleBoardClick = (board: MockBoard) => {
    // Navigate directly to image display page when board is clicked
    navigate(`/image/${username}/${board.id}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
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

        {/* Optional Search Bar */}
        <div className="mb-6">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search boards (optional)..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full px-4 py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E60023] focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1 text-center">Browse boards below, or search for something specific</p>
          </div>
        </div>

        {/* Results Count */}
        {searchTerm && (
          <div className="text-center mb-4">
            <p className="text-sm text-gray-600">
              Found {filteredBoards.length} board{filteredBoards.length !== 1 ? 's' : ''} for "{searchTerm}"
            </p>
          </div>
        )}

        {currentBoards.length > 0 ? (
          <>
            <div className="mb-8" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px'
            }}>
              {currentBoards.map((board) => (
                <div
                  key={board.id}
                  onClick={() => handleBoardClick(board)}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-200 border-2 border-transparent hover:shadow-xl hover:border-gray-200 hover:scale-[1.02]"
                >
                  {/* Board Cover Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={board.coverImage}
                      alt={board.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-lg ml-2" style={{ 
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      backdropFilter: 'blur(4px)'
                    }}>
                      {board.pinCount} pins
                    </div>
                  </div>

                                     {/* Board Info */}
                   <div className="p-4">
                     <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                       {board.name}
                     </h3>
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mb-8">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-2 text-sm font-medium rounded-md ${
                      currentPage === page
                        ? 'bg-[#E60023] text-white'
                        : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No boards found</h3>
            <p className="text-gray-500">Try adjusting your search terms or browse all boards.</p>
          </div>
        )}

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
