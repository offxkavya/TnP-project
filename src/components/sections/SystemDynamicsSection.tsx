import React from 'react';
import { LineChart, BarChart3, GitGraph, Network } from 'lucide-react';
import StatCard from '../ui/StatCard';

const SystemDynamicsSection: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">System Dynamics Analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard 
          title="Feedback Loops" 
          value="4" 
          description="Reinforcing loops identified" 
          icon={<GitGraph className="h-6 w-6 text-blue-500" />}
          color="bg-blue-50"
        />
        <StatCard 
          title="Balancing Loops" 
          value="2" 
          description="System stabilizers" 
          icon={<LineChart className="h-6 w-6 text-green-500" />}
          color="bg-green-50"
        />
        <StatCard 
          title="Key Variables" 
          value="10" 
          description="System components" 
          icon={<Network className="h-6 w-6 text-purple-500" />}
          color="bg-purple-50"
        />
        <StatCard 
          title="Leverage Points" 
          value="3" 
          description="High impact interventions" 
          icon={<BarChart3 className="h-6 w-6 text-amber-500" />}
          color="bg-amber-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Causal Loop Diagram</h3>
          <img 
            src="/cld-diagram.png" 
            alt="Causal Loop Diagram showing system relationships"
            className="w-full h-auto rounded-lg"
          />
          <div className="mt-4 space-y-2">
            <h4 className="font-medium text-slate-800">Key Feedback Loops:</h4>
            <div className="space-y-2 text-sm text-slate-600">
              <p><span className="font-medium">R1:</span> Customer Trust-Satisfaction Loop</p>
              <p><span className="font-medium">R2:</span> Environmental Impact Loop</p>
              <p><span className="font-medium">R3:</span> Review-Trust Loop</p>
              <p><span className="font-medium">R4:</span> Policy-Return Rate Loop</p>
              <p><span className="font-medium">B1:</span> Cost-Profit Balancing Loop</p>
              <p><span className="font-medium">B2:</span> Quality-Expectation Loop</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Behavior Over Time</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-slate-800 mb-2">Return Rate Trend</h4>
              <div className="relative h-40 bg-slate-50 rounded-lg p-4">
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-200"></div>
                <div className="absolute left-0 bottom-0 h-full w-[2px] bg-slate-200"></div>
                <div className="relative h-full" style={{ 
                  backgroundImage: 'linear-gradient(180deg, transparent 0%, transparent 20%, #3b82f680 100%)',
                  clipPath: 'polygon(0 80%, 25% 60%, 50% 40%, 75% 30%, 100% 20%, 100% 100%, 0 100%)'
                }}></div>
                <div className="absolute bottom-[-20px] left-0 w-full flex justify-between text-xs text-slate-500">
                  <span>2021</span>
                  <span>2022</span>
                  <span>2023</span>
                  <span>2024</span>
                  <span>2025</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-slate-800 mb-2">Environmental Impact</h4>
              <div className="relative h-40 bg-slate-50 rounded-lg p-4">
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-200"></div>
                <div className="absolute left-0 bottom-0 h-full w-[2px] bg-slate-200"></div>
                <div className="relative h-full" style={{ 
                  backgroundImage: 'linear-gradient(180deg, transparent 0%, transparent 10%, #ef444480 100%)',
                  clipPath: 'polygon(0 90%, 25% 70%, 50% 50%, 75% 35%, 100% 30%, 100% 100%, 0 100%)'
                }}></div>
                <div className="absolute bottom-[-20px] left-0 w-full flex justify-between text-xs text-slate-500">
                  <span>2021</span>
                  <span>2022</span>
                  <span>2023</span>
                  <span>2024</span>
                  <span>2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-10 transition-all hover:shadow-md">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">System Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">Events (Surface)</h4>
            <ul className="text-sm text-blue-700 space-y-2">
              <li>High return rates in fashion (30-40%)</li>
              <li>Increasing logistics costs</li>
              <li>Customer complaints about fees</li>
            </ul>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg">
            <h4 className="font-medium text-purple-800 mb-2">Patterns (Trends)</h4>
            <ul className="text-sm text-purple-700 space-y-2">
              <li>Seasonal spikes during festivals</li>
              <li>COD orders show higher returns</li>
              <li>Declining trust in product quality</li>
            </ul>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-800 mb-2">Structure (Root Causes)</h4>
            <ul className="text-sm text-green-700 space-y-2">
              <li>Liberal return policies</li>
              <li>Misaligned incentives</li>
              <li>Lack of standardization</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">Leverage Points</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><span className="font-medium">Product Quality Standards:</span> Implementing stricter quality control reduces expectation mismatch</li>
          <li><span className="font-medium">Return Policy Design:</span> Balancing customer convenience with operational sustainability</li>
          <li><span className="font-medium">Customer Education:</span> Better product information and size guides to reduce uncertainty</li>
          <li><span className="font-medium">Technology Integration:</span> AR/VR tools for virtual try-ons and better visualization</li>
          <li><span className="font-medium">Incentive Restructuring:</span> Rewards for accurate ordering and responsible return behavior</li>
        </ul>
      </div>
    </div>
  );
};

export default SystemDynamicsSection;