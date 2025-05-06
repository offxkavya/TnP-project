import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { fetchRealtimeData } from '../services/api';

// Define types for our data
interface RealTimeData {
  currentReturnRate: number;
  totalReturnsToday: number;
  estimatedCO2Today: number;
  estimatedWasteToday: number;
  financialImpactToday: number;
  lastUpdated: string;
}

interface DataContextType {
  realTimeData: RealTimeData | null;
  isLoading: boolean;
  error: string | null;
  refreshData: () => void;
}

// Create the context
const DataContext = createContext<DataContextType | undefined>(undefined);

// Provider component
export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [realTimeData, setRealTimeData] = useState<RealTimeData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch data
  const loadData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await fetchRealtimeData();
      setRealTimeData(data);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to load real-time data. Please try again later.');
      
      // Fallback to mock data if API fails
      setRealTimeData({
        currentReturnRate: 17.6,
        totalReturnsToday: 156234,
        estimatedCO2Today: 1243,
        estimatedWasteToday: 4567,
        financialImpactToday: 3245670,
        lastUpdated: new Date().toISOString()
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Load data on mount
  useEffect(() => {
    loadData();
    
    // Refresh data every 5 minutes
    const intervalId = setInterval(loadData, 5 * 60 * 1000);
    
    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  // Function to manually refresh data
  const refreshData = () => {
    loadData();
  };

  // Context value
  const value = {
    realTimeData,
    isLoading,
    error,
    refreshData
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

// Custom hook to use the data context
export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};