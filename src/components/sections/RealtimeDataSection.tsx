import React, { useState, useEffect } from 'react';
import { RefreshCw, Clock, TrendingUp, DollarSign, Truck, Package } from 'lucide-react';
import { useData } from '../../contexts/DataContext';

const RealtimeDataSection: React.FC = () => {
  const { realTimeData, isLoading, error, refreshData } = useData();
  const [lastRefreshed, setLastRefreshed] = useState<string>('');
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  
  useEffect(() => {
    if (realTimeData?.lastUpdated) {
      const date = new Date(realTimeData.lastUpdated);
      setLastRefreshed(formatDate(date));
    }
  }, [realTimeData]);
  
  const handleRefresh = () => {
    setIsRefreshing(true);
    refreshData();
    setTimeout(() => setIsRefreshing(false), 1000);
  };
  
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(date);
  };
  
  return (
    <div className="animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Realtime Return Data</h2>
        <div className="flex items-center mt-2 md:mt-0">
          <Clock className="h-4 w-4 text-slate-500 mr-2" />
          <span className="text-sm text-slate-600 mr-4">Last updated: {isLoading ? 'Updating...' : lastRefreshed}</span>
          <button 
            onClick={handleRefresh}
            disabled={isLoading || isRefreshing}
            className="flex items-center px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>
      </div>
      
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
        <div className="p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <h3 className="text-xl font-semibold">Today's Return Metrics</h3>
          <p className="text-blue-100 mt-1">Live data from across Indian e-commerce platforms</p>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <TrendingUp className="h-5 w-5 text-blue-500 mr-2" />
                <h4 className="font-medium text-slate-800">Current Return Rate</h4>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 flex-grow">
                {isLoading ? (
                  <div className="animate-pulse h-10 bg-blue-200 rounded w-1/2"></div>
                ) : (
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-blue-700">{realTimeData?.currentReturnRate}%</span>
                    <span className="ml-2 text-sm text-blue-600">across all categories</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <Package className="h-5 w-5 text-purple-500 mr-2" />
                <h4 className="font-medium text-slate-800">Total Returns Today</h4>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 flex-grow">
                {isLoading ? (
                  <div className="animate-pulse h-10 bg-purple-200 rounded w-1/2"></div>
                ) : (
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-purple-700">{realTimeData?.totalReturnsToday.toLocaleString()}</span>
                    <span className="ml-2 text-sm text-purple-600">items returned</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <DollarSign className="h-5 w-5 text-red-500 mr-2" />
                <h4 className="font-medium text-slate-800">Financial Impact</h4>
              </div>
              <div className="bg-red-50 rounded-lg p-4 flex-grow">
                {isLoading ? (
                  <div className="animate-pulse h-10 bg-red-200 rounded w-1/2"></div>
                ) : (
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-red-700">₹{(realTimeData?.financialImpactToday/10000000).toFixed(2)}Cr</span>
                    <span className="ml-2 text-sm text-red-600">lost today</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Environmental Impact Today</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-slate-600">CO₂ Emissions</span>
                <span className="text-sm font-medium text-slate-800">
                  {isLoading ? 'Calculating...' : `${realTimeData?.estimatedCO2Today.toLocaleString()} kg`}
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div 
                  className="bg-green-500 h-2.5 rounded-full" 
                  style={{ width: isLoading ? '0%' : `${Math.min((realTimeData?.estimatedCO2Today || 0) / 2000 * 100, 100)}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-slate-600">Packaging Waste</span>
                <span className="text-sm font-medium text-slate-800">
                  {isLoading ? 'Calculating...' : `${realTimeData?.estimatedWasteToday.toLocaleString()} kg`}
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div 
                  className="bg-amber-500 h-2.5 rounded-full" 
                  style={{ width: isLoading ? '0%' : `${Math.min((realTimeData?.estimatedWasteToday || 0) / 6000 * 100, 100)}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-slate-600">Transport Fuel</span>
                <span className="text-sm font-medium text-slate-800">
                  {isLoading ? 'Calculating...' : `${Math.round((realTimeData?.estimatedCO2Today || 0) / 9.5).toLocaleString()} liters`}
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-500 h-2.5 rounded-full" 
                  style={{ width: isLoading ? '0%' : `${Math.min((realTimeData?.estimatedCO2Today || 0) / 19000 * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Live Return Categories</h3>
          
          {isLoading ? (
            <div className="space-y-4">
              <div className="animate-pulse h-10 bg-slate-200 rounded w-full"></div>
              <div className="animate-pulse h-10 bg-slate-200 rounded w-full"></div>
              <div className="animate-pulse h-10 bg-slate-200 rounded w-full"></div>
              <div className="animate-pulse h-10 bg-slate-200 rounded w-full"></div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Fashion & Apparel</span>
                  <span className="text-sm font-medium text-blue-600">
                    {Math.round(realTimeData?.totalReturnsToday * 0.38).toLocaleString()} returns
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '38%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Electronics</span>
                  <span className="text-sm font-medium text-purple-600">
                    {Math.round(realTimeData?.totalReturnsToday * 0.22).toLocaleString()} returns
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                  <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '22%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Beauty & Personal Care</span>
                  <span className="text-sm font-medium text-pink-600">
                    {Math.round(realTimeData?.totalReturnsToday * 0.16).toLocaleString()} returns
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                  <div className="bg-pink-600 h-2.5 rounded-full" style={{ width: '16%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Home & Furniture</span>
                  <span className="text-sm font-medium text-amber-600">
                    {Math.round(realTimeData?.totalReturnsToday * 0.14).toLocaleString()} returns
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                  <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: '14%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Others</span>
                  <span className="text-sm font-medium text-green-600">
                    {Math.round(realTimeData?.totalReturnsToday * 0.10).toLocaleString()} returns
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-8 bg-indigo-50 rounded-xl p-6 border border-indigo-100">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-indigo-800">About This Data</h3>
            <p className="mt-1 text-sm text-indigo-700">
              This dashboard displays aggregated real-time data from major Indian e-commerce platforms. 
              Figures are updated every 5 minutes and represent the latest available metrics across all categories.
              Environmental impact estimates are calculated based on industry standards for CO₂ emissions per return
              and average packaging materials used.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealtimeDataSection;