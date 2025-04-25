import React from 'react';
import { games } from '../../data/mockData';

const GameRecommendations: React.FC = () => {
  // Get the top 3 recommended games
  const recommendedGames = games.slice(0, 3);
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Recommended Games</h2>
        <a href="#" className="text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors">
          View all →
        </a>
      </div>
      <div className="space-y-4">
        {recommendedGames.map((game) => (
          <div key={game.id} className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <img 
              src={game.imageUrl} 
              alt={game.title} 
              className="w-16 h-16 rounded-md object-cover"
            />
            <div className="ml-4">
              <h3 className="font-medium text-gray-900">{game.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-1">{game.description}</p>
              <span className="inline-block px-2 py-1 mt-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
                {game.category.replace('-', ' ')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameRecommendations;