// Mock data for the API call
// In a real application, this would call an actual API endpoint

interface RealTimeDataResponse {
  currentReturnRate: number;
  totalReturnsToday: number;
  estimatedCO2Today: number;
  estimatedWasteToday: number;
  financialImpactToday: number;
  lastUpdated: string;
}

export const fetchRealtimeData = async (): Promise<RealTimeDataResponse> => {
  // Simulate API call with delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // Generate slightly randomized data for demonstration
      const currentDate = new Date();
      
      // Base values
      const baseReturnRate = 17.6;
      const baseTotalReturns = 150000;
      const baseCO2 = 1200;
      const baseWaste = 4500;
      const baseFinancial = 3200000;
      
      // Add some randomness (±5%)
      const randomFactor = () => 0.95 + Math.random() * 0.1;
      
      resolve({
        currentReturnRate: +(baseReturnRate * randomFactor()).toFixed(1),
        totalReturnsToday: Math.round(baseTotalReturns * randomFactor()),
        estimatedCO2Today: Math.round(baseCO2 * randomFactor()),
        estimatedWasteToday: Math.round(baseWaste * randomFactor()),
        financialImpactToday: Math.round(baseFinancial * randomFactor()),
        lastUpdated: currentDate.toISOString()
      });
    }, 800); // Simulate network delay
  });
};

// In a real application, you would replace the mock implementation with actual API calls:
/*
export const fetchRealtimeData = async (): Promise<RealTimeDataResponse> => {
  const response = await fetch('https://api.example.com/ecommerce-returns/realtime');
  
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  
  return response.json();
};
*/