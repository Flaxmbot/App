import React from 'react';
import { therapySessions } from '../../data/mockData';
import { Calendar } from 'lucide-react';

const UpcomingSessions: React.FC = () => {
  // Filter for only scheduled sessions
  const upcoming = therapySessions.filter(session => session.status === 'scheduled');
  
  if (upcoming.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Sessions</h2>
        <div className="text-center py-6">
          <Calendar className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-gray-600">No upcoming sessions</p>
          <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Schedule Session
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Upcoming Sessions</h2>
        <a href="#" className="text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors">
          View all →
        </a>
      </div>
      <div className="space-y-4">
        {upcoming.map(session => (
          <div key={session.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{session.therapistName}</h3>
                <p className="text-sm text-gray-600">{session.date} at {session.time}</p>
              </div>
              <div>
                <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                  Confirmed
                </span>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="flex-1 px-3 py-2 bg-purple-600 text-white text-sm rounded hover:bg-purple-700 transition-colors">
                Join Session
              </button>
              <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 transition-colors">
                Reschedule
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSessions;