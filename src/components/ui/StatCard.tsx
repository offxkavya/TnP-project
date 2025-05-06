import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  color?: string;
  trend?: 'up' | 'down' | 'neutral';
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  description, 
  icon, 
  color = 'bg-blue-50',
  trend
}) => {
  return (
    <div className={`p-6 rounded-xl shadow-sm ${color} card-hover-effect`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
          <p className="text-sm text-slate-600">{description}</p>
        </div>
        <div className="p-2 rounded-lg bg-white bg-opacity-60 backdrop-blur-sm">
          {icon}
        </div>
      </div>
      <div className="mt-2">
        <div className="flex items-baseline">
          <span className="text-2xl font-bold text-slate-800">{value}</span>
          {trend && (
            <span 
              className={`ml-2 text-sm font-medium ${
                trend === 'up' ? 'text-red-500' : 
                trend === 'down' ? 'text-green-500' : 'text-slate-500'
              }`}
            >
              {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} 
              {trend === 'up' ? 'Increasing' : trend === 'down' ? 'Decreasing' : 'Stable'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;