import React from 'react';
import { HistoricalData, PredictionResult } from '../types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, ComposedChart } from 'recharts';

interface StockChartProps {
  historicalData: HistoricalData[];
  predictions: PredictionResult[];
  stockSymbol: string;
}

const StockChart: React.FC<StockChartProps> = ({ historicalData, predictions, stockSymbol }) => {
  // Combine historical and prediction data for display
  const chartData = [...historicalData.slice(-60)]; // Last 60 days of historical data
  
  // Format data for the chart
  const formattedData = chartData.map(item => ({
    date: item.date,
    price: item.close,
  }));
  
  // Format prediction data
  const predictionData = predictions.map(item => ({
    date: item.date,
    actual: item.actual,
    predicted: item.predicted,
    lower: item.lower,
    upper: item.upper
  }));
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">{stockSymbol} - Historical Price Data</h2>
      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={formattedData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => {
                const date = new Date(value);
                return `${date.getDate()}/${date.getMonth() + 1}`;
              }}
            />
            <YAxis 
              domain={['auto', 'auto']}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `₹${value}`}
            />
            <Tooltip 
              formatter={(value: number) => [`₹${value.toFixed(2)}`, 'Price']}
              labelFormatter={(label) => `Date: ${label}`}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="price" 
              stroke="#2563eb" 
              strokeWidth={2}
              dot={false}
              name="Historical Price"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <h2 className="text-xl font-semibold mt-8 mb-4">{stockSymbol} - Price Predictions</h2>
      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={predictionData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => {
                const date = new Date(value);
                return `${date.getDate()}/${date.getMonth() + 1}`;
              }}
            />
            <YAxis 
              domain={['auto', 'auto']}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `₹${value}`}
            />
            <Tooltip 
              formatter={(value: number) => [`₹${value.toFixed(2)}`, '']}
              labelFormatter={(label) => `Date: ${label}`}
            />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="upper" 
              fill="#e5f5ff" 
              stroke="none"
              name="Upper Bound"
            />
            <Area 
              type="monotone" 
              dataKey="lower" 
              fill="#e5f5ff" 
              stroke="none"
              name="Lower Bound"
            />
            <Line 
              type="monotone" 
              dataKey="actual" 
              stroke="#2563eb" 
              strokeWidth={2}
              dot={false}
              name="Actual Price"
            />
            <Line 
              type="monotone" 
              dataKey="predicted" 
              stroke="#f59e0b" 
              strokeWidth={2}
              dot={false}
              name="Predicted Price"
              strokeDasharray="5 5"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StockChart;