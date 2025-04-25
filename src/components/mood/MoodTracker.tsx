import React, { useState } from 'react';
import { moodEntries } from '../../data/mockData';
import { Smile, Meh, Frown, Heart, ThumbsUp, AlertCircle } from 'lucide-react';
import { Mood } from '../../types';

const MoodTracker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [notes, setNotes] = useState('');
  
  const moodIcons = [
    { mood: 'happy', icon: <Smile className="h-8 w-8" />, color: 'text-green-500', bgColor: 'bg-green-100' },
    { mood: 'calm', icon: <ThumbsUp className="h-8 w-8" />, color: 'text-teal-500', bgColor: 'bg-teal-100' },
    { mood: 'neutral', icon: <Meh className="h-8 w-8" />, color: 'text-gray-500', bgColor: 'bg-gray-100' },
    { mood: 'sad', icon: <Frown className="h-8 w-8" />, color: 'text-blue-500', bgColor: 'bg-blue-100' },
    { mood: 'anxious', icon: <AlertCircle className="h-8 w-8" />, color: 'text-orange-500', bgColor: 'bg-orange-100' },
    { mood: 'angry', icon: <Frown className="h-8 w-8" />, color: 'text-red-500', bgColor: 'bg-red-100' },
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMood) return;
    
    // Here we would normally save the mood entry
    alert(`Mood logged: ${selectedMood} - ${notes}`);
    
    // Reset form
    setSelectedMood(null);
    setNotes('');
  };
  
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="text-center mb-6">
        <Heart className="mx-auto h-12 w-12 text-purple-600" />
        <h2 className="mt-2 text-2xl font-bold text-gray-900">How are you feeling today?</h2>
        <p className="text-gray-600">Track your mood to gain insights into your emotional patterns</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {moodIcons.map(({ mood, icon, color, bgColor }) => (
            <button
              key={mood}
              type="button"
              onClick={() => setSelectedMood(mood as Mood)}
              className={`flex flex-col items-center p-4 rounded-lg transition-all ${
                selectedMood === mood 
                  ? `${bgColor} border-2 border-purple-500` 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div className={color}>{icon}</div>
              <span className="mt-2 capitalize font-medium">{mood}</span>
            </button>
          ))}
        </div>
        
        <div className="mb-6">
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
            How would you describe your feelings in more detail? (optional)
          </label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Write a few thoughts about your day..."
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={!selectedMood}
          className={`w-full py-3 px-4 rounded-lg text-white font-medium ${
            selectedMood 
              ? 'bg-purple-600 hover:bg-purple-700' 
              : 'bg-gray-400 cursor-not-allowed'
          } transition-colors`}
        >
          Log My Mood
        </button>
      </form>
      
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Mood History</h3>
        <div className="space-y-3">
          {moodEntries.slice(0, 5).map((entry) => {
            const moodData = moodIcons.find(m => m.mood === entry.mood);
            
            return (
              <div key={entry.id} className="flex items-center p-3 border-b border-gray-100">
                <div className={`p-2 rounded-full ${moodData?.bgColor}`}>
                  <span className={moodData?.color}>{moodData?.icon}</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium capitalize">{entry.mood}</p>
                  <p className="text-sm text-gray-600">{entry.date}</p>
                </div>
                <p className="ml-auto text-sm text-gray-500 max-w-xs truncate">{entry.notes}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;