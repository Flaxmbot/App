import React, { useState } from 'react';
import { games } from '../../data/mockData';
import GameCard from './GameCard';
import { Search, Filter } from 'lucide-react';
import { Game } from '../../types';

const GamesList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = ['all', 'relaxation', 'focus', 'distraction', 'mood-boosting'];
  
  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         game.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === 'all' || game.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Mental Wellness Games</h2>
        <p className="text-gray-600">Explore games designed to help you relax, focus, and improve your mood.</p>
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center mb-6 gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Search games..."
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-500" />
          <span className="text-sm text-gray-700">Filter:</span>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === 'all' ? null : category)}
                className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
                  (category === 'all' && !selectedCategory) || selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Games' : category.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {filteredGames.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">No games found. Try a different search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GamesList;