import React from 'react';
import { moodEntries } from '../../data/mockData';
import { Smile, Frown, Meh, ThumbsUp } from 'lucide-react';

const MoodSummary: React.FC = () => {
  const latestMood = moodEntries[0];
  
  const getMoodIcon = (mood: string) => {
    switch (mood) {
      case 'happy':
        return <Smile className="w-12 h-12 text-green-500" />;
      case 'sad':
        return <Frown className="w-12 h-12 text-blue-500" />;
      case 'anxious':
        return <Frown className="w-12 h-12 text-orange-500" />;
      case 'angry':
        return <Frown className="w-12 h-12 text-red-500" />;
      case 'calm':
        return <ThumbsUp className="w-12 h-12 text-teal-500" />;
      default:
        return <Meh className="w-12 h-12 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Today's Mood</h2>
      <div className="flex items-center space-x-4">
        {getMoodIcon(latestMood.mood)}
        <div>
          <p className="text-lg font-medium capitalize">{latestMood.mood}</p>
          <p className="text-gray-600 text-sm">{latestMood.notes}</p>
        </div>
      </div>
      <div className="mt-4">
        <a href="#" className="text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors">
          Update today's mood →
        </a>
      </div>
    </div>
  );
};

export default MoodSummary;