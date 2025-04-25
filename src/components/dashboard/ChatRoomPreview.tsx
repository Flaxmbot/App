import React from 'react';
import { chatRooms } from '../../data/mockData';
import { MessageCircle, Mic } from 'lucide-react';

const ChatRoomPreview: React.FC = () => {
  // Get top 2 chat rooms with most participants
  const topRooms = [...chatRooms]
    .sort((a, b) => b.participants - a.participants)
    .slice(0, 2);
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Active Chat Rooms</h2>
        <a href="#" className="text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors">
          View all →
        </a>
      </div>
      <div className="space-y-4">
        {topRooms.map((room) => (
          <div key={room.id} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-purple-100">
                {room.isVoice ? (
                  <Mic className="h-5 w-5 text-purple-600" />
                ) : (
                  <MessageCircle className="h-5 w-5 text-purple-600" />
                )}
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-gray-900">{room.name}</h3>
                <p className="text-sm text-gray-600">{room.participants} people active</p>
              </div>
              <button className="ml-auto px-3 py-1 bg-purple-600 text-white text-sm rounded-full hover:bg-purple-700 transition-colors">
                Join
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-600">{room.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatRoomPreview;