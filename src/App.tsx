import React, { useState, useEffect } from 'react';
import { BarChart3Icon } from 'lucide-react';
import StockList from './components/StockList';
import StockChart from './components/StockChart';
import ModelMetricsCard from './components/ModelMetricsCard';
import TechnicalIndicators from './components/TechnicalIndicators';
import NextDayPrediction from './components/NextDayPrediction';
import ModelDescription from './components/ModelDescription';
import DeploymentGuide from './components/DeploymentGuide';
import { popularIndianStocks } from './data/mockStocks';
import { 
  generateHistoricalData, 
  generatePredictions, 
  generateModelMetrics,
  generateTechnicalIndicators
} from './data/mockHistorical';
import { StockData } from './types';

function App() {
  const [selectedStock, setSelectedStock] = useState<StockData | null>(null);
  const [historicalData, setHistoricalData] = useState<any[]>([]);
  const [predictions, setPredictions] = useState<any[]>([]);
  const [metrics, setMetrics] = useState<any>(null);
  const [indicators, setIndicators] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'about' | 'deployment'>('dashboard');

  // Initialize with the first stock
  useEffect(() => {
    if (popularIndianStocks.length > 0) {
      handleSelectStock(popularIndianStocks[0]);
    }
  }, []);

  const handleSelectStock = (stock: StockData) => {
    setSelectedStock(stock);
    
    // Generate mock data for the selected stock
    const historical = generateHistoricalData(stock.symbol);
    setHistoricalData(historical);
    
    const stockPredictions = generatePredictions(historical);
    setPredictions(stockPredictions);
    
    setMetrics(generateModelMetrics());
    setIndicators(generateTechnicalIndicators());
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <BarChart3Icon className="h-8 w-8 mr-2" />
              <h1 className="text-2xl font-bold">Indian Stock Prediction</h1>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <button 
                    className={`px-3 py-2 rounded-md ${activeTab === 'dashboard' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
                    onClick={() => setActiveTab('dashboard')}
                  >
                    Dashboard
                  </button>
                </li>
                <li>
                  <button 
                    className={`px-3 py-2 rounded-md ${activeTab === 'about' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
                    onClick={() => setActiveTab('about')}
                  >
                    About Model
                  </button>
                </li>
                <li>
                  <button 
                    className={`px-3 py-2 rounded-md ${activeTab === 'deployment' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
                    onClick={() => setActiveTab('deployment')}
                  >
                    Deployment Guide
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {activeTab === 'dashboard' && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Stock List - Left Sidebar */}
              <div className="lg:col-span-1">
                <StockList 
                  stocks={popularIndianStocks} 
                  onSelectStock={handleSelectStock} 
                />
              </div>
              
              {/* Main Content Area */}
              <div className="lg:col-span-3 space-y-6">
                {selectedStock && (
                  <>
                    {/* Stock Chart */}
                    <StockChart 
                      historicalData={historicalData} 
                      predictions={predictions}
                      stockSymbol={selectedStock.symbol}
                    />
                    
                    {/* Next Day Prediction */}
                    {predictions.length > 0 && (
                      <NextDayPrediction 
                        prediction={predictions[predictions.length - 1]} 
                        stockSymbol={selectedStock.symbol}
                        currentPrice={selectedStock.lastPrice}
                      />
                    )}
                    
                    {/* Model Metrics and Technical Indicators */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {metrics && <ModelMetricsCard metrics={metrics} />}
                      {indicators.length > 0 && <TechnicalIndicators indicators={indicators} />}
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        )}
        
        {activeTab === 'about' && <ModelDescription />}
        
        {activeTab === 'deployment' && <DeploymentGuide />}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© 2025 Indian Stock Prediction. All rights reserved.</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                Disclaimer: This application is for educational purposes only. 
                The predictions are based on mock data and should not be used for actual investment decisions.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;