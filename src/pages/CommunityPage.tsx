import React from 'react';
import Layout from '../components/common/Layout';
import ChatRoomList from '../components/community/ChatRoomList';

const CommunityPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Community Connection</h1>
          <p className="text-gray-600">Connect with others in a safe, supportive environment.</p>
        </div>
        
        <ChatRoomList />
      </div>
    </Layout>
  );
};

export default CommunityPage;