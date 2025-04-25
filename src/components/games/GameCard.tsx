import React from 'react';
import { Game } from '../../types';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="h-40 relative">
        <img 
          src={game.imageUrl} 
          alt={game.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            {game.category.replace('-', ' ')}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{game.title}</h3>
        <p className="text-gray-600 text-sm mt-1">{game.description}</p>
        <button className="mt-4 w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          Play Now
        </button>
      </div>
    </div>
  );
};

export default GameCard;