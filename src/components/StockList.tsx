import React, { useState } from 'react';
import { StockData } from '../types';
import { ArrowUpIcon, ArrowDownIcon, SearchIcon } from 'lucide-react';

interface StockListProps {
  stocks: StockData[];
  onSelectStock: (stock: StockData) => void;
}

const StockList: React.FC<StockListProps> = ({ stocks, onSelectStock }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredStocks = stocks.filter(stock => 
    stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) || 
    stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="mb-4 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search stocks..."
          className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exchange</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredStocks.map((stock) => (
              <tr 
                key={stock.symbol} 
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => onSelectStock(stock)}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{stock.symbol}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{stock.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stock.exchange}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{stock.lastPrice.toFixed(2)}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  <div className="flex items-center">
                    {stock.change >= 0 ? 
                      <ArrowUpIcon className="h-4 w-4 mr-1" /> : 
                      <ArrowDownIcon className="h-4 w-4 mr-1" />
                    }
                    {stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockList;