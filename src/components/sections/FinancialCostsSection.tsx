import React from 'react';
import { DollarSign, TruckIcon, BarChart4, ShieldAlert } from 'lucide-react';
import StatCard from '../ui/StatCard';
import LineChart from '../charts/LineChart';
import BarChart from '../charts/BarChart';
import { useData } from '../../contexts/DataContext';

const FinancialCostsSection: React.FC = () => {
  const { realTimeData, isLoading } = useData();
  
  const reverseLogisticsData = {
    labels: ['2021', '2022', '2023', '2024', '2033'],
    datasets: [
      {
        label: 'Indian Reverse Logistics Market (USD Billion)',
        data: [20.5, 24.8, 28.7, 33.2, 57.5],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      }
    ]
  };

  const processingCostsData = {
    labels: ['Pickup/Transport', 'Warehousing', 'Quality Checks', 'Repackaging', 'Markdowns', 'Administrative'],
    datasets: [
      {
        label: 'Processing Cost Breakdown (%)',
        data: [35, 20, 15, 12, 10, 8],
        backgroundColor: [
          '#3b82f6', '#8b5cf6', '#ec4899', 
          '#f97316', '#10b981', '#14b8a6'
        ],
      }
    ]
  };

  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Financial & Logistical Costs</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard 
          title="Revenue Loss" 
          value={isLoading ? "Loading..." : `₹${(realTimeData?.financialImpactToday/10000000).toFixed(2)}Cr`}
          description="Today's financial impact" 
          icon={<DollarSign className="h-6 w-6 text-red-500" />}
          color="bg-red-50"
        />
        <StatCard 
          title="Expected Loss by 2025" 
          value="$20-30B" 
          description="Due to returns in India" 
          icon={<BarChart4 className="h-6 w-6 text-purple-500" />}
          color="bg-purple-50"
        />
        <StatCard 
          title="Reverse Logistics" 
          value="$33.2B" 
          description="Current market size" 
          icon={<TruckIcon className="h-6 w-6 text-blue-500" />}
          color="bg-blue-50"
          trend="up"
        />
        <StatCard 
          title="Return Fraud" 
          value="13.7%" 
          description="Of returns are fraudulent" 
          icon={<ShieldAlert className="h-6 w-6 text-amber-500" />} 
          color="bg-amber-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Reverse Logistics Market Growth</h3>
          <div className="h-80">
            <LineChart data={reverseLogisticsData} />
          </div>
          <p className="text-sm text-slate-600 mt-4">
            India's reverse logistics market is growing significantly, from ₹2.75 lakh crore ($33.2 billion) in 2024 to a projected $57.5 billion by 2033. This growth reflects the increasing volume of returns and the specialized infrastructure needed to handle them.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Cost Breakdown</h3>
          <div className="h-80">
            <BarChart data={processingCostsData} />
          </div>
          <p className="text-sm text-slate-600 mt-4">
            Return processing involves multiple cost components, with transportation and warehousing being the most significant contributors. Each returned item incurs expenses across the entire reverse supply chain.
          </p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-6 mb-10 transition-all hover:shadow-md">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Return-to-Origin (RTO) Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-4 bg-blue-50 rounded-lg text-center">
            <h4 className="font-medium text-blue-800 mb-2">RTO Percentage</h4>
            <p className="text-3xl font-bold text-blue-700">10-15%</p>
            <p className="text-sm text-blue-600 mt-2">of e-commerce deliveries in India are returned to origin</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg text-center">
            <h4 className="font-medium text-purple-800 mb-2">Additional Fuel Cost</h4>
            <p className="text-3xl font-bold text-purple-700">+35%</p>
            <p className="text-sm text-purple-600 mt-2">increased fuel consumption due to return logistics</p>
          </div>
          <div className="p-4 bg-amber-50 rounded-lg text-center">
            <h4 className="font-medium text-amber-800 mb-2">Labor Impact</h4>
            <p className="text-3xl font-bold text-amber-700">+42%</p>
            <p className="text-sm text-amber-600 mt-2">additional workforce needed to handle returns</p>
          </div>
        </div>
        <p className="text-sm text-slate-600 mt-6">
          Return-to-origin deliveries significantly increase operational costs, requiring additional transportation, labor, and processing resources. For Indian e-commerce companies, RTO rates of 10-15% represent a substantial inefficiency in the delivery system.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Global Return Costs</h3>
          <div className="space-y-4 mt-6">
            <div className="flex justify-between items-center">
              <span className="text-slate-700">Global returns value (2023)</span>
              <span className="font-semibold text-slate-900">$743 billion</span>
            </div>
            <div className="w-full h-1 bg-slate-100 rounded-full">
              <div className="h-1 bg-blue-500 rounded-full" style={{ width: '74.3%' }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-slate-700">Percentage of total sales</span>
              <span className="font-semibold text-slate-900">14.5%</span>
            </div>
            <div className="w-full h-1 bg-slate-100 rounded-full">
              <div className="h-1 bg-blue-500 rounded-full" style={{ width: '14.5%' }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-slate-700">Return fraud cost</span>
              <span className="font-semibold text-slate-900">$101 billion</span>
            </div>
            <div className="w-full h-1 bg-slate-100 rounded-full">
              <div className="h-1 bg-red-500 rounded-full" style={{ width: '13.7%' }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-slate-700">Loss per $1B in sales</span>
              <span className="font-semibold text-slate-900">$145 million</span>
            </div>
            <div className="w-full h-1 bg-slate-100 rounded-full">
              <div className="h-1 bg-blue-500 rounded-full" style={{ width: '14.5%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Return Processing Expenses</h3>
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-slate-50 rounded-lg">
              <h4 className="font-medium text-slate-800">Transportation</h4>
              <p className="text-sm text-slate-600 mt-1">Two-way shipping costs, last-mile delivery expenses, and fuel surcharges. For high-value items, premium shipping methods may be required.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <h4 className="font-medium text-slate-800">Quality Control</h4>
              <p className="text-sm text-slate-600 mt-1">Manual inspection time, testing equipment, and specialized staff to verify product condition. Returned electronics often require technical validation.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <h4 className="font-medium text-slate-800">Repackaging</h4>
              <p className="text-sm text-slate-600 mt-1">New packaging materials, labor for reboxing, and potential product reconditioning. Fashion items often need pressing, cleaning, or tag replacement.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <h4 className="font-medium text-slate-800">Value Loss</h4>
              <p className="text-sm text-slate-600 mt-1">Price markdowns for reselling, seasonal depreciation, or complete write-offs for unsellable items. Fast fashion can lose 40-50% of original value after return.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">Key Financial Insights</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>Indian brands could lose $20-30 billion by 2025 due to e-commerce returns.</li>
          <li>Today's returns have already generated an estimated {isLoading ? "calculating..." : `₹${(realTimeData?.financialImpactToday/10000000).toFixed(2)} crore`} in financial impact.</li>
          <li>India's reverse logistics market is valued at approximately ₹2.75 lakh crore ($33.2 billion) and projected to reach $57.5 billion by 2033.</li>
          <li>For every $1 billion in sales, retailers lose about $145 million to returns globally.</li>
          <li>Return-to-origin (RTO) deliveries represent 10-15% of all e-commerce shipments in India.</li>
          <li>Approximately 13.7% of all returns involve some form of fraud, such as "wardrobing" (wearing and returning) or false damage claims.</li>
        </ul>
      </div>
    </div>
  );
};

export default FinancialCostsSection;