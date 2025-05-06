import React from 'react';
import { Users, ShoppingCart, Truck, FileHeart } from 'lucide-react';
import StatCard from '../ui/StatCard';
import PieChart from '../charts/PieChart';
import BarChart from '../charts/BarChart';

const ConsumerBehaviorSection: React.FC = () => {
  const returnReasonsData = {
    labels: ['Size/Fit Issues', 'Quality Issues', 'Different from Description', 'Damaged/Defective', 'Wrong Item', 'Changed Mind'],
    datasets: [
      {
        data: [40, 20, 15, 12, 8, 5],
        backgroundColor: [
          '#3b82f6', '#8b5cf6', '#ec4899', 
          '#f97316', '#10b981', '#14b8a6'
        ],
      }
    ]
  };
  
  const returnBehaviorData = {
    labels: ['COD Orders', 'Prepaid Orders'],
    datasets: [
      {
        data: [24, 10],
        backgroundColor: ['#ef4444', '#10b981'],
        borderColor: ['#ef4444', '#10b981'],
      }
    ]
  };
  
  const festivalSalesData = {
    labels: ['Normal Period', 'Festival Period'],
    datasets: [
      {
        label: 'Return Rate (%)',
        data: [17.6, 32.5],
        backgroundColor: ['#3b82f6', '#f97316'],
      }
    ]
  };

  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Consumer Behavior Behind Returns</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard 
          title="COD Preference" 
          value="24%" 
          description="Return rate for COD orders" 
          icon={<Truck className="h-6 w-6 text-amber-500" />}
          color="bg-amber-50"
        />
        <StatCard 
          title="Free Return Policies" 
          value="92%" 
          description="Shop due to free returns" 
          icon={<FileHeart className="h-6 w-6 text-red-500" />}
          color="bg-red-50"
        />
        <StatCard 
          title="Bracket Buying" 
          value="40%" 
          description="Order multiple sizes/styles" 
          icon={<ShoppingCart className="h-6 w-6 text-purple-500" />}
          color="bg-purple-50"
        />
        <StatCard 
          title="Festival Returns" 
          value="25-40%" 
          description="Return spike during festivals" 
          icon={<Users className="h-6 w-6 text-blue-500" />} 
          color="bg-blue-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Top Reasons for Returns</h3>
          <div className="h-80">
            <BarChart data={returnReasonsData} />
          </div>
          <p className="text-sm text-slate-600 mt-4">
            Size and fit issues dominate return reasons, especially in fashion and footwear categories. This highlights the challenge of accurately conveying product dimensions and fit in an online setting.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">COD vs Prepaid Return Behavior</h3>
          <div className="h-64 flex justify-center">
            <PieChart data={returnBehaviorData} />
          </div>
          <p className="text-sm text-slate-600 mt-4">
            Cash on Delivery (COD) orders are more than twice as likely to be returned compared to prepaid orders, indicating how payment commitment influences purchasing decisions.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Festival vs Normal Return Rates</h3>
          <div className="h-64">
            <BarChart data={festivalSalesData} />
          </div>
          <p className="text-sm text-slate-600 mt-4">
            During festival seasons and sale events, return rates spike significantly, often reaching 25-40% as consumers make more impulsive purchases that they later reconsider.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Bracket Buying Behavior</h3>
          <div className="relative h-64 flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="relative mb-8">
                <div className="absolute -left-2 -top-2 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-lg font-bold">1</div>
                <div className="ml-16 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-slate-800">Order Multiple Sizes</h4>
                  <p className="text-sm text-slate-600 mt-1">Customer orders the same item in multiple sizes (S, M, L)</p>
                </div>
              </div>
              
              <div className="relative mb-8">
                <div className="absolute -left-2 -top-2 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-lg font-bold">2</div>
                <div className="ml-16 p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-slate-800">Try All Options</h4>
                  <p className="text-sm text-slate-600 mt-1">Customer tries on all sizes at home</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-2 -top-2 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-lg font-bold">3</div>
                <div className="ml-16 p-4 bg-red-50 rounded-lg">
                  <h4 className="font-medium text-slate-800">Return Most Items</h4>
                  <p className="text-sm text-slate-600 mt-1">Keep 1 item, return 2-3 others (60-80% return rate)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-6 mb-10 transition-all hover:shadow-md">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Psychology of Returns</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-5 bg-blue-50 rounded-lg hover:shadow-md transition-all">
            <h4 className="font-medium text-blue-800 mb-3">Zero-Risk Bias</h4>
            <p className="text-sm text-blue-700">
              Free return policies create a "no-risk" shopping mindset, encouraging impulsive purchases with the safety net of easy returns.
            </p>
          </div>
          
          <div className="p-5 bg-purple-50 rounded-lg hover:shadow-md transition-all">
            <h4 className="font-medium text-purple-800 mb-3">Choice Paralysis</h4>
            <p className="text-sm text-purple-700">
              Unable to decide between options, customers order multiple variants with the intention of returning most items.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-lg hover:shadow-md transition-all">
            <h4 className="font-medium text-amber-800 mb-3">Social Shopping</h4>
            <p className="text-sm text-amber-700">
              Purchasing decisions influenced by social media create unrealistic expectations, leading to returns when reality doesn't match.
            </p>
          </div>
          
          <div className="p-5 bg-green-50 rounded-lg hover:shadow-md transition-all">
            <h4 className="font-medium text-green-800 mb-3">Digital Disconnect</h4>
            <p className="text-sm text-green-700">
              Inability to physically evaluate products online leads to perception gaps between expectation and reality.
            </p>
          </div>
          
          <div className="p-5 bg-red-50 rounded-lg hover:shadow-md transition-all">
            <h4 className="font-medium text-red-800 mb-3">Commitment Aversion</h4>
            <p className="text-sm text-red-700">
              COD options allow customers to delay payment commitment, making it psychologically easier to reject items upon delivery.
            </p>
          </div>
          
          <div className="p-5 bg-indigo-50 rounded-lg hover:shadow-md transition-all">
            <h4 className="font-medium text-indigo-800 mb-3">Deal-Hunting Behavior</h4>
            <p className="text-sm text-indigo-700">
              Customers frequently return products after finding better prices elsewhere, especially during staggered sale events.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">Key Consumer Behavior Insights</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>Cash on Delivery (COD) orders have significantly higher return rates (24%) compared to prepaid orders (10%).</li>
          <li>92% of consumers report shopping online specifically because of free and easy return policies.</li>
          <li>Nearly 40% of returns in fashion and footwear are due to size and fit issues.</li>
          <li>"Bracket buying" (ordering multiple sizes/variants and returning most) is especially common in apparel.</li>
          <li>Return rates spike to 25-40% during festival seasons and sales events due to impulse purchasing.</li>
          <li>Many consumers return items after finding the same product at a lower price on another platform.</li>
          <li>Free return policies, while driving initial sales, significantly increase return behavior and associated costs.</li>
        </ul>
      </div>
    </div>
  );
};

export default ConsumerBehaviorSection;