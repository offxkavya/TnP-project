import React, { useState, useEffect } from 'react';
import { TrendingDown, TrendingUp, CreditCard, ShoppingBag } from 'lucide-react';
import StatCard from '../ui/StatCard';
import LineChart from '../charts/LineChart';
import PieChart from '../charts/PieChart';
import BarChart from '../charts/BarChart';
import { useData } from '../../contexts/DataContext';

const ReturnRatesSection: React.FC = () => {
  const { realTimeData, isLoading } = useData();
  const [returnRateData, setReturnRateData] = useState({
    labels: ['2021', '2022', '2023'],
    datasets: [
      {
        label: 'Overall Return Rate',
        data: [17.4, 15.8, 10.0],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      }
    ]
  });

  const codVsPrepaidData = {
    labels: ['COD Returns', 'Prepaid Returns'],
    datasets: [
      {
        data: [24, 10],
        backgroundColor: ['#ef4444', '#10b981'],
        borderColor: ['#ef4444', '#10b981'],
      }
    ]
  };

  const categoriesData = {
    labels: ['Fashion & Footwear', 'Electronics', 'Beauty', 'FMCG', 'Groceries', 'Pharma'],
    datasets: [
      {
        label: 'Return Rate by Category (%)',
        data: [35, 18, 15, 8, 7, 7],
        backgroundColor: [
          '#3b82f6', '#8b5cf6', '#ec4899', 
          '#f97316', '#10b981', '#14b8a6'
        ],
      }
    ]
  };

  // Update data with real-time values if available
  useEffect(() => {
    if (realTimeData) {
      // Update return rate trend data with real-time value for current year
      const updatedTrend = {...returnRateData};
      // Add current rate to 2023 (or update if exists)
      updatedTrend.datasets[0].data[2] = realTimeData.currentReturnRate;
      setReturnRateData(updatedTrend);
    }
  }, [realTimeData]);

  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Return Rates in Indian E-Commerce</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard 
          title="Average Return Rate" 
          value={isLoading ? "Loading..." : `${realTimeData?.currentReturnRate || 17.6}%`}
          description="Across all categories" 
          icon={<TrendingUp className="h-6 w-6 text-red-500" />}
          color="bg-red-50"
          trend="down"
        />
        <StatCard 
          title="Fashion & Footwear" 
          value="30-40%" 
          description="Highest return category" 
          icon={<ShoppingBag className="h-6 w-6 text-purple-500" />}
          color="bg-purple-50"
          trend="up"
        />
        <StatCard 
          title="FMCG, Groceries, Pharma" 
          value="7-8%" 
          description="Lower return categories" 
          icon={<TrendingDown className="h-6 w-6 text-green-500" />}
          color="bg-green-50"
          trend="down"
        />
        <StatCard 
          title="COD vs Prepaid" 
          value="24% vs 10%" 
          description="COD has higher returns" 
          icon={<CreditCard className="h-6 w-6 text-blue-500" />} 
          color="bg-blue-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Return Rate Trend (2021-2023)</h3>
          <div className="h-80">
            <LineChart data={returnRateData} />
          </div>
          <p className="text-sm text-slate-600 mt-4">
            Indian e-commerce has shown a steady decline in return rates, dropping from 17.4% in 2021 to approximately {realTimeData?.currentReturnRate || 10}% in 2023. This positive trend indicates improving customer satisfaction and more effective return management.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">COD vs Prepaid Returns</h3>
          <div className="h-64 flex justify-center">
            <PieChart data={codVsPrepaidData} />
          </div>
          <p className="text-sm text-slate-600 mt-4">
            Cash on Delivery (COD) orders have significantly higher return rates (24%) compared to prepaid orders (10%). This difference highlights the impact of payment methods on customer commitment and return behavior.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-10 transition-all hover:shadow-md">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Return Rates by Category</h3>
        <div className="h-96">
          <BarChart data={categoriesData} horizontal={true} />
        </div>
        <p className="text-sm text-slate-600 mt-4">
          Fashion and footwear consistently show the highest return rates (30-40%), while essential categories like FMCG, groceries, and pharmaceuticals maintain much lower rates (7-8%). Understanding these category-specific patterns is crucial for targeted return reduction strategies.
        </p>
      </div>
      
      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">Key Insights</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>The overall return rate across categories stands at approximately {realTimeData?.currentReturnRate || 17.6}%.</li>
          <li>Fashion and footwear categories experience the highest return rates (30-40%), primarily due to size, fit, and style mismatches.</li>
          <li>There's a significant difference between COD return rates (24%) and prepaid return rates (10%), suggesting payment method influences return behavior.</li>
          <li>The yearly trend shows a consistent decline in returns from 17.4% (2021) to {realTimeData?.currentReturnRate || 10}% (2023).</li>
          <li>Categories with standardized products like groceries and pharmaceuticals show significantly lower return rates (7-8%).</li>
        </ul>
      </div>
    </div>
  );
};

export default ReturnRatesSection;