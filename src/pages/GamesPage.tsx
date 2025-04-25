import React from 'react';
import Layout from '../components/common/Layout';
import GamesList from '../components/games/GamesList';

const GamesPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Mental Wellness Games</h1>
          <p className="text-gray-600">Games designed to help you manage stress, improve focus, and boost your mood.</p>
        </div>
        
        <GamesList />
      </div>
    </Layout>
  );
};

export default GamesPage;