import React from 'react';
import Layout from '../components/common/Layout';
import MoodTracker from '../components/mood/MoodTracker';

const MoodPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Mood Tracker</h1>
          <p className="text-gray-600">Monitor your emotional wellbeing and identify patterns over time.</p>
        </div>
        
        <MoodTracker />
      </div>
    </Layout>
  );
};

export default MoodPage;