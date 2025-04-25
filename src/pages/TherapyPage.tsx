import React from 'react';
import Layout from '../components/common/Layout';
import AIAssistant from '../components/therapy/AIAssistant';
import { therapySessions } from '../data/mockData';
import { Calendar } from 'lucide-react';

const TherapyPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Therapy & Support</h1>
          <p className="text-gray-600">Professional support and AI assistance for your mental wellness journey.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Professional Sessions</h2>
              <p className="text-gray-700 mb-6">
                Weekly sessions with licensed therapists to help you navigate life's challenges.
              </p>
              
              {therapySessions.length > 0 ? (
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Upcoming Sessions</h3>
                  {therapySessions
                    .filter(session => session.status === 'scheduled')
                    .map(session => (
                      <div key={session.id} className="border border-gray-200 rounded-lg p-4 mb-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{session.therapistName}</p>
                            <p className="text-sm text-gray-600">{session.date} at {session.time}</p>
                          </div>
                          <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                            Scheduled
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="text-center py-6 mb-6">
                  <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-gray-600">No upcoming sessions</p>
                </div>
              )}
              
              <button className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Schedule New Session
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Self-Help Resources</h2>
              <ul className="space-y-4">
                <li className="border-b border-gray-100 pb-3">
                  <a href="#" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                    <h3 className="font-medium text-gray-900">Understanding Anxiety</h3>
                    <p className="text-sm text-gray-600">Learn about the causes and symptoms of anxiety.</p>
                  </a>
                </li>
                <li className="border-b border-gray-100 pb-3">
                  <a href="#" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                    <h3 className="font-medium text-gray-900">Mindfulness Practices</h3>
                    <p className="text-sm text-gray-600">Simple techniques to stay present and reduce stress.</p>
                  </a>
                </li>
                <li className="border-b border-gray-100 pb-3">
                  <a href="#" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                    <h3 className="font-medium text-gray-900">Building Healthy Habits</h3>
                    <p className="text-sm text-gray-600">Create routines that support mental wellness.</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                    <h3 className="font-medium text-gray-900">Social Connection</h3>
                    <p className="text-sm text-gray-600">Tips for reducing isolation and building relationships.</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <AIAssistant />
        </div>
      </div>
    </Layout>
  );
};

export default TherapyPage;