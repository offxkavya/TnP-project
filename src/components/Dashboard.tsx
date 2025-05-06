import React, { useState } from 'react';
import ReturnRatesSection from './sections/ReturnRatesSection';
import EnvironmentalImpactSection from './sections/EnvironmentalImpactSection';
import FinancialCostsSection from './sections/FinancialCostsSection';
import ConsumerBehaviorSection from './sections/ConsumerBehaviorSection';
import PlatformPoliciesSection from './sections/PlatformPoliciesSection';
import RealtimeDataSection from './sections/RealtimeDataSection';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('return-rates');

  const tabs = [
    { id: 'return-rates', label: 'Return Rates' },
    { id: 'environmental-impact', label: 'Environmental Impact' },
    { id: 'financial-costs', label: 'Financial & Logistical Costs' },
    { id: 'consumer-behavior', label: 'Consumer Behavior' },
    { id: 'platform-policies', label: 'Platform Policies' },
    { id: 'realtime-data', label: 'Realtime Data' },
  ];

  return (
    <div id="dashboard" className="mb-16">
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <div className="flex overflow-x-auto hide-scrollbar py-2 gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-underline whitespace-nowrap pb-3 px-1 font-medium text-sm md:text-base transition-colors ${
                activeTab === tab.id
                  ? 'text-blue-600 active'
                  : 'text-slate-600 hover:text-blue-500'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="animate-fadeIn">
        {activeTab === 'return-rates' && <ReturnRatesSection />}
        {activeTab === 'environmental-impact' && <EnvironmentalImpactSection />}
        {activeTab === 'financial-costs' && <FinancialCostsSection />}
        {activeTab === 'consumer-behavior' && <ConsumerBehaviorSection />}
        {activeTab === 'platform-policies' && <PlatformPoliciesSection />}
        {activeTab === 'realtime-data' && <RealtimeDataSection />}
        {activeTab === 'system-dynamics' && <SystemDynamicsSection />}
      </div>
    </div>
  );
};

export default Dashboard;