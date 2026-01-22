import React from 'react';

interface ChartProps {
  type: 'heart-rate' | 'points' | 'performance';
  value?: number;
  color?: string;
  label?: string;
}

export const Chart: React.FC<ChartProps> = ({ 
  type, 
  value = 0, 
  color = 'red',
  label 
}) => {
  const getChartContent = () => {
    switch (type) {
      case 'heart-rate':
        return (
          <div className="p-4 bg-red-50 rounded-lg border-2 border-red-200">
            <div className="text-sm text-red-600 font-semibold mb-2">
              {label || 'Пульс'}
            </div>
            <div className="text-3xl font-bold text-red-700">
              {value} bpm
            </div>
          </div>
        );
      case 'points':
        return (
          <div className="p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
            <div className="text-sm text-orange-600 font-semibold mb-2">
              {label || 'Очки за игру'}
            </div>
            <div className="text-3xl font-bold text-orange-700">
              {value}
            </div>
          </div>
        );
      case 'performance':
        return (
          <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
            <div className="text-sm text-blue-600 font-semibold mb-2">
              {label || 'Производительность'}
            </div>
            <div className="text-3xl font-bold text-blue-700">
              {value}%
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="my-4">{getChartContent()}</div>;
};
