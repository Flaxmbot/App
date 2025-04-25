import React from 'react';
import Layout from '../components/common/Layout';
import MoodSummary from '../components/dashboard/MoodSummary';
import GameRecommendations from '../components/dashboard/GameRecommendations';
import UpcomingSessions from '../components/dashboard/UpcomingSessions';
import ChatRoomPreview from '../components/dashboard/ChatRoomPreview';
import { currentUser } from '../data/mockData';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, {currentUser.name}</h1>
          <p className="text-gray-600">Track your mood, play games, and connect with others.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MoodSummary />
          <GameRecommendations />
          <UpcomingSessions />
          <div className="lg:col-span-2">
            <ChatRoomPreview />
          </div>
        </div>
        
        <div className="mt-6 p-5 bg-purple-50 border border-purple-200 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Mental Wellness Progress</h2>
              <p className="text-gray-600">You've earned {currentUser.points} points this month</p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                View Progress
              </button>
            </div>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-3">
            {currentUser.badges.map((badge) => (
              <div key={badge.id} className="flex items-center px-3 py-2 bg-white rounded-full shadow-sm">
                <span className="text-xl">{badge.image}</span>
                <span className="ml-2 font-medium text-gray-800">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;