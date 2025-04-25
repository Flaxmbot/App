import React from 'react';
import Layout from '../components/common/Layout';
import EmergencySupport from '../components/emergency/EmergencySupport';

const EmergencyPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Emergency Support</h1>
          <p className="text-gray-600">Immediate resources and techniques for challenging moments.</p>
        </div>
        
        <EmergencySupport />
      </div>
    </Layout>
  );
};

export default EmergencyPage;