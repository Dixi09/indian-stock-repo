import React from 'react';
import { ModelMetrics } from '../types';

interface ModelMetricsCardProps {
  metrics: ModelMetrics;
}

const ModelMetricsCard: React.FC<ModelMetricsCardProps> = ({ metrics }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Model Performance Metrics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-500">RMSE</h3>
          <p className="text-2xl font-bold text-blue-700">{metrics.rmse.toFixed(2)}</p>
          <p className="text-xs text-gray-500 mt-1">Root Mean Square Error</p>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-500">MAE</h3>
          <p className="text-2xl font-bold text-blue-700">{metrics.mae.toFixed(2)}</p>
          <p className="text-xs text-gray-500 mt-1">Mean Absolute Error</p>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-500">Accuracy</h3>
          <p className="text-2xl font-bold text-blue-700">{(metrics.accuracy * 100).toFixed(2)}%</p>
          <p className="text-xs text-gray-500 mt-1">Direction Prediction Accuracy</p>
        </div>
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p className="mb-2"><strong>Interpretation:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>RMSE: Lower values indicate better fit. Current value suggests {metrics.rmse < 15 ? 'good' : 'moderate'} prediction accuracy.</li>
          <li>MAE: Represents average absolute error. Current value indicates predictions are off by ₹{metrics.mae.toFixed(2)} on average.</li>
          <li>Accuracy: Percentage of correct direction predictions (up/down). Current model predicts market direction correctly {(metrics.accuracy * 100).toFixed(2)}% of the time.</li>
        </ul>
      </div>
      
      <div className="mt-4 bg-yellow-50 p-3 rounded-md">
        <p className="text-sm text-yellow-800">
          <strong>Disclaimer:</strong> These metrics are based on historical data and past performance. Future predictions may vary. Always conduct your own research before making investment decisions.
        </p>
      </div>
    </div>
  );
};

export default ModelMetricsCard;