import React from 'react';
import { TechnicalIndicator } from '../types';
import { TrendingUpIcon, TrendingDownIcon, MinusIcon } from 'lucide-react';

interface TechnicalIndicatorsProps {
  indicators: TechnicalIndicator[];
}

const TechnicalIndicators: React.FC<TechnicalIndicatorsProps> = ({ indicators }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Technical Indicators</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Indicator</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Signal</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {indicators.map((indicator, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{indicator.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{indicator.value}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    indicator.interpretation === 'bullish' 
                      ? 'bg-green-100 text-green-800' 
                      : indicator.interpretation === 'bearish'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-gray-100 text-gray-800'
                  }`}>
                    {indicator.interpretation === 'bullish' ? (
                      <TrendingUpIcon className="h-3 w-3 mr-1" />
                    ) : indicator.interpretation === 'bearish' ? (
                      <TrendingDownIcon className="h-3 w-3 mr-1" />
                    ) : (
                      <MinusIcon className="h-3 w-3 mr-1" />
                    )}
                    {indicator.interpretation.charAt(0).toUpperCase() + indicator.interpretation.slice(1)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p><strong>Indicator Explanations:</strong></p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>RSI (Relative Strength Index):</strong> Measures momentum. Values above 70 may indicate overbought conditions, while values below 30 may indicate oversold conditions.</li>
          <li><strong>MACD (Moving Average Convergence Divergence):</strong> Trend-following momentum indicator showing the relationship between two moving averages.</li>
          <li><strong>Moving Averages:</strong> Show the average price over specified time periods, helping to identify trends.</li>
          <li><strong>Bollinger Bands:</strong> Volatility indicator that creates a range around the price based on standard deviations.</li>
        </ul>
      </div>
    </div>
  );
};

export default TechnicalIndicators;