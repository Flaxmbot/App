import React from 'react';
import { chatRooms } from '../../data/mockData';
import { MessageCircle, Mic, Users } from 'lucide-react';

const ChatRoomList: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Connect with Others</h2>
        <p className="text-gray-600">Join anonymous chat rooms to share experiences and find support</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {chatRooms.map((room) => (
          <div key={room.id} className="border border-gray-200 rounded-lg p-5 hover:border-purple-300 transition-colors">
            <div className="flex items-center mb-3">
              <div className="p-3 rounded-full bg-purple-100">
                {room.isVoice ? (
                  <Mic className="h-6 w-6 text-purple-600" />
                ) : (
                  <MessageCircle className="h-6 w-6 text-purple-600" />
                )}
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-lg text-gray-900">{room.name}</h3>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{room.participants} participants</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700">{room.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                #{room.topic}
              </span>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                {room.isVoice ? 'Join Voice' : 'Join Chat'}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-6 bg-purple-50 rounded-lg border border-purple-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Your Own Room</h3>
        <p className="text-gray-700 mb-4">
          Create a safe space to discuss topics that matter to you. All rooms are moderated to ensure a supportive environment.
        </p>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          Create Room
        </button>
      </div>
    </div>
  );
};

export default ChatRoomList;