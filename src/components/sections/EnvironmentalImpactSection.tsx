import React from 'react';
import { Leaf, Truck, Package, BarChart3 } from 'lucide-react';
import StatCard from '../ui/StatCard';
import BarChart from '../charts/BarChart';
import { useData } from '../../contexts/DataContext';

const EnvironmentalImpactSection: React.FC = () => {
  const { realTimeData, isLoading } = useData();
  
  const emissionsData = {
    labels: ['Fashion Returns', 'Electronics Returns', 'Furniture Returns', 'Beauty Returns', 'Books Returns'],
    datasets: [
      {
        label: 'CO₂ Emissions (Million Metric Tons)',
        data: [9.2, 6.8, 4.5, 2.1, 1.4],
        backgroundColor: [
          '#3b82f6', '#8b5cf6', '#ec4899', '#f97316', '#10b981'
        ],
      }
    ]
  };

  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Environmental Impact of Returns</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard 
          title="CO₂ Emissions" 
          value={isLoading ? "Loading..." : `${realTimeData?.estimatedCO2Today.toLocaleString()} kg`}
          description="Today's emissions from returns" 
          icon={<Leaf className="h-6 w-6 text-green-500" />}
          color="bg-green-50"
        />
        <StatCard 
          title="Annual Emissions" 
          value="24M tons" 
          description="Yearly CO₂ from e-commerce returns" 
          icon={<Truck className="h-6 w-6 text-blue-500" />}
          color="bg-blue-50"
        />
        <StatCard 
          title="Packaging Waste" 
          value={isLoading ? "Loading..." : `${realTimeData?.estimatedWasteToday.toLocaleString()} kg`}
          description="Today's packaging waste" 
          icon={<Package className="h-6 w-6 text-amber-500" />}
          color="bg-amber-50"
        />
        <StatCard 
          title="Landfill Waste" 
          value="25%" 
          description="Returns going directly to landfill" 
          icon={<BarChart3 className="h-6 w-6 text-red-500" />} 
          color="bg-red-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">CO₂ Emissions by Return Category</h3>
          <div className="h-80">
            <BarChart data={emissionsData} />
          </div>
          <p className="text-sm text-slate-600 mt-4">
            Fashion returns contribute the highest carbon footprint due to their volume and processing requirements. Fast fashion returns alone generate emissions equivalent to 3 million cars annually.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Environmental Facts</h3>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-800">Packaging Impact</h4>
              <p className="text-sm text-green-700 mt-1">Online returns generate 4.8× more packaging waste than in-store shopping.</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-800">Transport Emissions</h4>
              <p className="text-sm text-blue-700 mt-1">Return shipping can double or triple a product's carbon footprint.</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg">
              <h4 className="font-medium text-amber-800">Waste Generation</h4>
              <p className="text-sm text-amber-700 mt-1">In 2022, U.S. retailers sent 9.5 billion pounds of returns directly to landfill.</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-medium text-red-800">Disposal Rate</h4>
              <p className="text-sm text-red-700 mt-1">Approximately 25% of returned items are thrown away rather than resold.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-8 mb-10 transition-all hover:shadow-md">
        <h3 className="text-lg font-semibold text-slate-800 mb-6">Return Journey Environmental Impact</h3>
        <div className="relative">
          {/* Journey visualization */}
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            {/* Connection line */}
            <div className="hidden md:block absolute h-1 bg-slate-200 top-1/2 left-[15%] right-[15%] -translate-y-1/2 z-0"></div>
            
            {/* Stages */}
            <div className="journey-stage bg-blue-50 p-4 rounded-xl text-center w-full md:w-1/4 mb-4 md:mb-0 z-10">
              <div className="bg-blue-100 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-2">
                <Package className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-medium text-slate-800 mb-1">Return Initiated</h4>
              <p className="text-xs text-slate-600">Packaging waste from reboxing and new materials</p>
            </div>
            
            <div className="journey-stage bg-amber-50 p-4 rounded-xl text-center w-full md:w-1/4 mb-4 md:mb-0 z-10">
              <div className="bg-amber-100 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-2">
                <Truck className="h-6 w-6 text-amber-600" />
              </div>
              <h4 className="font-medium text-slate-800 mb-1">Transport</h4>
              <p className="text-xs text-slate-600">Fuel consumption and carbon emissions from shipping</p>
            </div>
            
            <div className="journey-stage bg-green-50 p-4 rounded-xl text-center w-full md:w-1/4 mb-4 md:mb-0 z-10">
              <div className="bg-green-100 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-2">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-medium text-slate-800 mb-1">Processing</h4>
              <p className="text-xs text-slate-600">Energy consumption from sorting, cleaning, and reprocessing</p>
            </div>
            
            <div className="journey-stage bg-red-50 p-4 rounded-xl text-center w-full md:w-1/4 z-10">
              <div className="bg-red-100 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-2">
                <Leaf className="h-6 w-6 text-red-600" />
              </div>
              <h4 className="font-medium text-slate-800 mb-1">Fate of Product</h4>
              <p className="text-xs text-slate-600">Landfill waste, recycling, or reselling impact</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">Key Environmental Insights</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>E-commerce returns contribute approximately 24 million metric tons of CO₂ annually to global carbon emissions.</li>
          <li>The environmental impact of fashion returns is particularly severe, equivalent to the emissions of 3 million cars per year.</li>
          <li>Return shipping can double or triple a product's carbon footprint due to additional transportation.</li>
          <li>About 25% of returns go directly to landfill, creating significant waste management challenges.</li>
          <li>Online returns generate nearly 5 times more packaging waste than in-store shopping experiences.</li>
          <li>Today's returns have generated an estimated {isLoading ? "calculating..." : `${realTimeData?.estimatedCO2Today.toLocaleString()} kg of CO₂ and ${realTimeData?.estimatedWasteToday.toLocaleString()} kg of packaging waste`}.</li>
        </ul>
      </div>
    </div>
  );
};

export default EnvironmentalImpactSection;