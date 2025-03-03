import React from 'react';
import { PredictionResult } from '../types';
import { TrendingUpIcon, TrendingDownIcon, AlertTriangleIcon } from 'lucide-react';

interface NextDayPredictionProps {
  prediction: PredictionResult;
  stockSymbol: string;
  currentPrice: number;
}

const NextDayPrediction: React.FC<NextDayPredictionProps> = ({ prediction, stockSymbol, currentPrice }) => {
  const priceChange = prediction.predicted - currentPrice;
  const percentChange = (priceChange / currentPrice) * 100;
  const isPriceUp = priceChange > 0;
  
  // Calculate confidence interval width as a percentage
  const intervalWidth = ((prediction.upper - prediction.lower) / prediction.predicted) * 100;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Next Trading Day Prediction</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Stock</h3>
              <p className="text-xl font-bold text-gray-900">{stockSymbol}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Current Price</h3>
              <p className="text-xl font-bold text-gray-900">₹{currentPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>
        
        <div className={`p-4 rounded-lg ${isPriceUp ? 'bg-green-50' : 'bg-red-50'}`}>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Predicted Price</h3>
              <p className="text-xl font-bold text-gray-900">₹{prediction.predicted.toFixed(2)}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Expected Change</h3>
              <p className={`text-xl font-bold flex items-center ${isPriceUp ? 'text-green-600' : 'text-red-600'}`}>
                {isPriceUp ? <TrendingUpIcon className="h-5 w-5 mr-1" /> : <TrendingDownIcon className="h-5 w-5 mr-1" />}
                {percentChange.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 bg-blue-50 p-4 rounded-lg">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Prediction Range (95% Confidence Interval)</h3>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Lower Bound</p>
            <p className="text-lg font-semibold text-gray-800">₹{prediction.lower.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Upper Bound</p>
            <p className="text-lg font-semibold text-gray-800">₹{prediction.upper.toFixed(2)}</p>
          </div>
        </div>
        <div className="mt-2 bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '50%', marginLeft: '25%' }}></div>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Confidence interval width: {intervalWidth.toFixed(2)}% 
          {intervalWidth > 10 ? ' (High uncertainty)' : intervalWidth > 5 ? ' (Moderate uncertainty)' : ' (Low uncertainty)'}
        </p>
      </div>
      
      <div className="mt-4 bg-yellow-50 p-3 rounded-md flex items-start">
        <AlertTriangleIcon className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-yellow-800">
          <strong>Disclaimer:</strong> This prediction is based on historical data analysis and machine learning models. 
          Financial markets are inherently unpredictable and subject to various external factors. 
          This information should not be considered as financial advice. Always conduct thorough research before making investment decisions.
        </p>
      </div>
    </div>
  );
};

export default NextDayPrediction;