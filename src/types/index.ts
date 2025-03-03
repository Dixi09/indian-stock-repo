export interface StockData {
  symbol: string;
  name: string;
  exchange: 'NSE' | 'BSE';
  sector: string;
  lastPrice: number;
  change: number;
  changePercent: number;
}

export interface HistoricalData {
  date: string;
  close: number;
  volume: number;
  high: number;
  low: number;
  open: number;
}

export interface PredictionResult {
  date: string;
  actual?: number;
  predicted: number;
  lower: number;
  upper: number;
}

export interface ModelMetrics {
  rmse: number;
  mae: number;
  accuracy: number;
}

export interface TechnicalIndicator {
  name: string;
  value: number;
  interpretation: 'bullish' | 'bearish' | 'neutral';
}