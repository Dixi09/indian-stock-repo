import React from 'react';
import { BookOpenIcon, CodeIcon, DatabaseIcon, BarChartIcon as ChartBarIcon } from 'lucide-react';

const ModelDescription: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">About the Prediction Model</h2>
      
      <div className="space-y-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <DatabaseIcon className="h-6 w-6 text-blue-500" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Data Sources</h3>
            <p className="mt-1 text-sm text-gray-500">
              The model uses 5 years of historical data from NSE/BSE, including daily closing prices, 
              trading volumes, high/low prices, and various technical indicators. Market sentiment data 
              is collected from financial news sources and social media analysis.
            </p>
          </div>
        </div>
        
        <div className="flex">
          <div className="flex-shrink-0">
            <CodeIcon className="h-6 w-6 text-blue-500" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Model Architecture</h3>
            <p className="mt-1 text-sm text-gray-500">
              We employ a hybrid approach combining Long Short-Term Memory (LSTM) neural networks for capturing 
              temporal dependencies with traditional time series models like ARIMA for trend and seasonality. 
              The model is trained on 70% of the data, with 15% used for validation and 15% for testing.
            </p>
          </div>
        </div>
        
        <div className="flex">
          <div className="flex-shrink-0">
            <ChartBarIcon className="h-6 w-6 text-blue-500" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Feature Engineering</h3>
            <p className="mt-1 text-sm text-gray-500">
              Key features include technical indicators (RSI, MACD, Bollinger Bands), market sentiment scores, 
              macroeconomic indicators, and sector-specific metrics. Feature importance is determined using 
              SHAP (SHapley Additive exPlanations) values to ensure model interpretability.
            </p>
          </div>
        </div>
        
        <div className="flex">
          <div className="flex-shrink-0">
            <BookOpenIcon className="h-6 w-6 text-blue-500" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Limitations</h3>
            <p className="mt-1 text-sm text-gray-500">
              The model has several limitations: it cannot predict black swan events or sudden market shocks, 
              may not fully capture the impact of policy changes or geopolitical events, and performs best in 
              stable market conditions. Predictions become less reliable as the forecast horizon extends.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 border-t border-gray-200 pt-4">
        <h3 className="text-lg font-medium text-gray-900">Implementation Details</h3>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-3 rounded-md">
            <h4 className="text-sm font-medium text-gray-700">Data Preprocessing</h4>
            <ul className="mt-2 text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Missing value imputation using forward fill</li>
              <li>Outlier detection with IQR method</li>
              <li>Feature scaling with MinMaxScaler</li>
              <li>Time series decomposition</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-md">
            <h4 className="text-sm font-medium text-gray-700">Model Training</h4>
            <ul className="mt-2 text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Hyperparameter tuning with Bayesian optimization</li>
              <li>K-fold cross-validation for time series</li>
              <li>Early stopping to prevent overfitting</li>
              <li>Ensemble methods for improved robustness</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDescription;