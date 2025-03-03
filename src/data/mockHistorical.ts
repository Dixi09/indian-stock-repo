import { HistoricalData, PredictionResult, ModelMetrics, TechnicalIndicator } from '../types';
import { addDays, format, subDays } from 'date-fns';

// Generate mock historical data for the past 30 days
export const generateHistoricalData = (symbol: string): HistoricalData[] => {
  const today = new Date();
  const data: HistoricalData[] = [];
  
  // Base price depends on the symbol to make data look different for each stock
  let basePrice = 0;
  switch(symbol) {
    // Large Cap Stocks - NIFTY 50
    case 'RELIANCE': basePrice = 2876; break;
    case 'TCS': basePrice = 3542; break;
    case 'HDFCBANK': basePrice = 1679; break;
    case 'INFY': basePrice = 1457; break;
    case 'ICICIBANK': basePrice = 946; break;
    case 'HINDUNILVR': basePrice = 2568; break;
    case 'BAJFINANCE': basePrice = 7124; break;
    case 'SBIN': basePrice = 767; break;
    case 'TATAMOTORS': basePrice = 993; break;
    case 'WIPRO': basePrice = 478; break;
    case 'AXISBANK': basePrice = 1124; break;
    case 'KOTAKBANK': basePrice = 1756; break;
    case 'MARUTI': basePrice = 10245; break;
    case 'SUNPHARMA': basePrice = 1246; break;
    case 'BHARTIARTL': basePrice = 1279; break;
    case 'ASIANPAINT': basePrice = 3246; break;
    case 'ADANIPORTS': basePrice = 1192; break;
    case 'NTPC': basePrice = 328; break;
    case 'POWERGRID': basePrice = 296; break;
    case 'HCLTECH': basePrice = 1346; break;
    case 'ULTRACEMCO': basePrice = 10756; break;
    case 'TITAN': basePrice = 3246; break;
    case 'BAJAJFINSV': basePrice = 1679; break;
    case 'TECHM': basePrice = 1346; break;
    case 'NESTLEIND': basePrice = 23457; break;
    case 'TATASTEEL': basePrice = 146; break;
    case 'JSWSTEEL': basePrice = 845; break;
    case 'CIPLA': basePrice = 1246; break;
    case 'DRREDDY': basePrice = 5679; break;
    case 'DIVISLAB': basePrice = 3678; break;
    case 'INDUSINDBK': basePrice = 1457; break;
    case 'EICHERMOT': basePrice = 3789; break;
    case 'M&M': basePrice = 1679; break;
    case 'COALINDIA': basePrice = 446; break;
    case 'ONGC': basePrice = 235; break;
    case 'IOC': basePrice = 173; break;
    case 'BPCL': basePrice = 457; break;
    case 'GAIL': basePrice = 179; break;
    case 'ADANIENT': basePrice = 2957; break;
    case 'HINDALCO': basePrice = 568; break;
    case 'HEROMOTOCO': basePrice = 4457; break;
    case 'BAJAJ-AUTO': basePrice = 8568; break;
    case 'APOLLOHOSP': basePrice = 5679; break;
    case 'BRITANNIA': basePrice = 4968; break;
    case 'DABUR': basePrice = 528; break;
    case 'GODREJCP': basePrice = 1235; break;
    case 'MARICO': basePrice = 568; break;
    case 'PIDILITIND': basePrice = 2846; break;
    case 'HAVELLS': basePrice = 1546; break;
    case 'BERGEPAINT': basePrice = 579; break;
    case 'COLPAL': basePrice = 2489; break;
    
    // Adani Group Companies
    case 'ADANIPOWER': basePrice = 590; break;
    case 'ADANIGREEN': basePrice = 1679; break;
    case 'ADANITRANS': basePrice = 979; break;
    case 'ADANIGAS': basePrice = 789; break;
    case 'ADANIENSOL': basePrice = 877; break;
    case 'ADANICEMNT': basePrice = 568; break;
    case 'ACC': basePrice = 2346; break;
    case 'NDTV': basePrice = 235; break;
    
    // New Age Tech Companies
    case 'ZOMATO': basePrice = 190; break;
    case 'PAYTM': basePrice = 390; break;
    case 'NYKAA': basePrice = 179; break;
    case 'POLICYBZR': basePrice = 789; break;
    case 'DELHIVERY': basePrice = 346; break;
    case 'CARTRADE': basePrice = 568; break;
    case 'EASEMYTRIP': basePrice = 46; break;
    case 'NAZARA': basePrice = 789; break;
    case 'MAPMYINDIA': basePrice = 1457; break;
    
    // Retail & Consumer
    case 'DMART': basePrice = 4568; break;
    case 'IRCTC': basePrice = 789; break;
    case 'ITC': basePrice = 435; break;
    case 'TRENT': basePrice = 3457; break;
    case 'ABFRL': basePrice = 268; break;
    case 'VMART': basePrice = 2346; break;
    case 'SHOPERSTOP': basePrice = 789; break;
    
    // Infrastructure & Construction
    case 'LT': basePrice = 3457; break;
    case 'LTIM': basePrice = 5679; break;
    case 'LICI': basePrice = 946; break;
    case 'SIEMENS': basePrice = 4568; break;
    case 'ABB': basePrice = 5679; break;
    case 'BEL': basePrice = 189; break;
    case 'HAL': basePrice = 3457; break;
    case 'BHEL': basePrice = 189; break;
    
    // Tata Group Companies
    case 'TATAPOWER': basePrice = 379; break;
    case 'TATACHEM': basePrice = 1089; break;
    case 'TATAELXSI': basePrice = 7890; break;
    case 'TATACONSUM': basePrice = 1057; break;
    case 'TATAINVEST': basePrice = 4568; break;
    case 'VOLTAS': basePrice = 1235; break;
    case 'INDIANHOTELS': basePrice = 568; break;
    
    // Food & Beverage
    case 'JUBLFOOD': basePrice = 568; break;
    case 'VARUN': basePrice = 1235; break;
    case 'MCDOWELL-N': basePrice = 1057; break;
    case 'PGHH': basePrice = 16790; break;
    case 'GILLETTE': basePrice = 6790; break;
    
    // Banking & Financial Services
    case 'PNB': basePrice = 89; break;
    case 'BANKBARODA': basePrice = 235; break;
    case 'CANBK': basePrice = 457; break;
    case 'UNIONBANK': basePrice = 123; break;
    case 'FEDERALBNK': basePrice = 157; break;
    case 'BANDHANBNK': basePrice = 235; break;
    case 'IDFC': basePrice = 123; break;
    case 'IDFCFIRSTB': basePrice = 79; break;
    case 'RBLBANK': basePrice = 235; break;
    case 'AUBANK': basePrice = 679; break;
    case 'YESBANK': basePrice = 23; break;
    case 'HDFCLIFE': basePrice = 679; break;
    case 'SBILIFE': basePrice = 1457; break;
    case 'ICICIPRULI': basePrice = 568; break;
    case 'ICICIGI': basePrice = 1457; break;
    case 'BAJAJHLDNG': basePrice = 7890; break;
    case 'CHOLAFIN': basePrice = 1235; break;
    case 'MUTHOOTFIN': basePrice = 1457; break;
    case 'MANAPPURAM': basePrice = 157; break;
    
    // Telecom & Media
    case 'IDEA': basePrice = 12; break;
    case 'TTML': basePrice = 89; break;
    case 'ZEEL': basePrice = 268; break;
    case 'SUNTV': basePrice = 679; break;
    case 'PVR': basePrice = 1457; break;
    
    // Energy & Power
    case 'SUZLON': basePrice = 35; break;
    case 'NHPC': basePrice = 79; break;
    case 'RECLTD': basePrice = 346; break;
    case 'PFC': basePrice = 346; break;
    case 'IRFC': basePrice = 89; break;
    case 'TORNTPOWER': basePrice = 1057; break;
    case 'CESC': basePrice = 123; break;
    case 'RELINFRA': basePrice = 235; break;
    
    // Metals & Mining
    case 'NMDC': basePrice = 179; break;
    case 'SAIL': basePrice = 123; break;
    case 'NATIONALUM': basePrice = 146; break;
    case 'VEDL': basePrice = 346; break;
    case 'HINDCOPPER': basePrice = 179; break;
    case 'JINDALSTEL': basePrice = 679; break;
    case 'WELCORP': basePrice = 457; break;
    
    // Real Estate & Infrastructure
    case 'GMRINFRA': basePrice = 68; break;
    case 'DLF': basePrice = 679; break;
    case 'OBEROIRLTY': basePrice = 1235; break;
    case 'GODREJPROP': basePrice = 2346; break;
    case 'PRESTIGE': basePrice = 1235; break;
    case 'BRIGADE': basePrice = 789; break;
    case 'SOBHA': basePrice = 1057; break;
    case 'PHOENIXLTD': basePrice = 2346; break;
    
    // Pharmaceuticals & Healthcare
    case 'BIOCON': basePrice = 268; break;
    case 'AUROPHARMA': basePrice = 946; break;
    case 'LUPIN': basePrice = 1457; break;
    case 'TORNTPHARM': basePrice = 2346; break;
    case 'ALKEM': basePrice = 3457; break;
    case 'GLAND': basePrice = 1679; break;
    case 'NATCOPHARM': basePrice = 789; break;
    case 'FORTIS': basePrice = 346; break;
    case 'MAXHEALTH': basePrice = 568; break;
    
    // IT & Technology
    case 'PERSISTENT': basePrice = 7890; break;
    case 'COFORGE': basePrice = 5679; break;
    case 'MPHASIS': basePrice = 2346; break;
    case 'OFSS': basePrice = 4568; break;
    case 'MINDTREE': basePrice = 4568; break;
    case 'CYIENT': basePrice = 1679; break;
    case 'LTTS': basePrice = 4568; break;
    
    // Automobile & Auto Components
    case 'MOTHERSON': basePrice = 123; break;
    case 'BOSCHLTD': basePrice = 23457; break;
    case 'BALKRISIND': basePrice = 2346; break;
    case 'MRF': basePrice = 112346; break;
    case 'APOLLOTYRE': basePrice = 346; break;
    case 'EXIDEIND': basePrice = 268; break;
    case 'AMARAJABAT': basePrice = 789; break;
    case 'ASHOKLEY': basePrice = 179; break;
    case 'TVSMOTOR': basePrice = 1679; break;
    
    // Chemicals & Fertilizers
    case 'UPL': basePrice = 568; break;
    case 'ATUL': basePrice = 7890; break;
    case 'DEEPAKNITRITE': basePrice = 2346; break;
    case 'SRF': basePrice = 2346; break;
    case 'COROMANDEL': basePrice = 1057; break;
    case 'CHAMBLFERT': basePrice = 346; break;
    case 'GNFC': basePrice = 568; break;
    
    // PSU Banks & Financial Institutions
    case 'INDIANB': basePrice = 346; break;
    case 'CENTRALBK': basePrice = 46; break;
    case 'BANKINDIA': basePrice = 123; break;
    case 'MAHABANK': basePrice = 46; break;
    case 'UCOBANK': basePrice = 35; break;
    case 'IIFL': basePrice = 568; break;
    case 'PNBHOUSING': basePrice = 789; break;
    case 'CANFINHOME': basePrice = 789; break;
    
    // Small & Mid Cap Stocks
    case 'RAIN': basePrice = 179; break;
    case 'JKCEMENT': basePrice = 3457; break;
    case 'RAMCOCEM': basePrice = 946; break;
    case 'JKLAKSHMI': basePrice = 789; break;
    case 'KAJARIACER': basePrice = 1457; break;
    case 'CERA': basePrice = 7890; break;
    case 'VIPIND': basePrice = 789; break;
    case 'RELAXO': basePrice = 946; break;
    case 'BATAINDIA': basePrice = 1679; break;
    case 'PAGEIND': basePrice = 39457; break;
    case 'RAYMOND': basePrice = 1679; break;
    case 'BLUEDART': basePrice = 7890; break;
    case 'MAHLOG': basePrice = 568; break;
    case 'ALLCARGO': basePrice = 346; break;
    case 'GRINDWELL': basePrice = 2346; break;
    case 'CARBORUNIV': basePrice = 1057; break;
    case 'TIMKEN': basePrice = 3457; break;
    case 'SCHAEFFLER': basePrice = 3457; break;
    case 'SKFINDIA': basePrice = 5679; break;
    case 'FINEORG': basePrice = 5679; break;
    case 'CLEAN': basePrice = 1679; break;
    case 'TATACOMM': basePrice = 1679; break;
    case 'ROUTE': basePrice = 1679; break;
    case 'TANLA': basePrice = 1057; break;
    case 'HAPPSTMNDS': basePrice = 946; break;
    case 'SONACOMS': basePrice = 568; break;
    case 'ENDURANCE': basePrice = 1679; break;
    case 'NAVINFLUOR': basePrice = 3457; break;
    case 'ALKYLAMINE': basePrice = 2346; break;
    case 'ASTRAL': basePrice = 1679; break;
    case 'SUPREMEIND': basePrice = 3457; break;
    case 'POLYCAB': basePrice = 5679; break;
    case 'DIXON': basePrice = 5679; break;
    case 'AMBER': basePrice = 3457; break;
    case 'LALPATHLAB': basePrice = 2346; break;
    case 'METROPOLIS': basePrice = 1679; break;
    case 'THYROCARE': basePrice = 789; break;
    case 'CREDITACC': basePrice = 1457; break;
    case 'UJJIVANSFB': basePrice = 46; break;
    case 'EQUITASBNK': basePrice = 89; break;
    
    default: basePrice = 1000;
  }
  
  // Generate data for the last 180 days
  for (let i = 180; i >= 1; i--) {
    const date = subDays(today, i);
    const volatility = 0.02; // 2% daily volatility
    const randomChange = basePrice * volatility * (Math.random() * 2 - 1);
    
    // Add some trend
    const trendFactor = Math.sin(i / 30) * 0.1;
    basePrice = basePrice + randomChange + (basePrice * trendFactor);
    
    const high = basePrice * (1 + Math.random() * 0.015);
    const low = basePrice * (1 - Math.random() * 0.015);
    const open = low + Math.random() * (high - low);
    
    data.push({
      date: format(date, 'yyyy-MM-dd'),
      close: parseFloat(basePrice.toFixed(2)),
      high: parseFloat(high.toFixed(2)),
      low: parseFloat(low.toFixed(2)),
      open: parseFloat(open.toFixed(2)),
      volume: Math.floor(1000000 + Math.random() * 9000000)
    });
  }
  
  return data;
};

// Generate mock prediction data
export const generatePredictions = (historicalData: HistoricalData[]): PredictionResult[] => {
  const predictions: PredictionResult[] = [];
  
  // Use the last 30 days of historical data for "actual" values
  const recentData = historicalData.slice(-30);
  
  // Generate predictions for those days (with slight variations)
  recentData.forEach(day => {
    const predictionError = day.close * (Math.random() * 0.06 - 0.03); // ±3% error
    predictions.push({
      date: day.date,
      actual: day.close,
      predicted: parseFloat((day.close + predictionError).toFixed(2)),
      lower: parseFloat((day.close + predictionError - day.close * 0.05).toFixed(2)),
      upper: parseFloat((day.close + predictionError + day.close * 0.05).toFixed(2))
    });
  });
  
  // Add 7 days of future predictions
  const lastDay = new Date(recentData[recentData.length - 1].date);
  const lastPrice = recentData[recentData.length - 1].close;
  
  for (let i = 1; i <= 7; i++) {
    const futureDate = addDays(lastDay, i);
    const randomTrend = (Math.random() * 0.04 - 0.02); // Random trend between -2% and 2%
    const predictedPrice = lastPrice * (1 + randomTrend * i);
    
    predictions.push({
      date: format(futureDate, 'yyyy-MM-dd'),
      predicted: parseFloat(predictedPrice.toFixed(2)),
      lower: parseFloat((predictedPrice * 0.95).toFixed(2)),
      upper: parseFloat((predictedPrice * 1.05).toFixed(2))
    });
  }
  
  return predictions;
};

// Generate mock model metrics
export const generateModelMetrics = (): ModelMetrics => {
  return {
    rmse: parseFloat((Math.random() * 20 + 10).toFixed(2)),
    mae: parseFloat((Math.random() * 15 + 5).toFixed(2)),
    accuracy: parseFloat((Math.random() * 0.15 + 0.75).toFixed(2)) // 75-90% accuracy
  };
};

// Generate mock technical indicators
export const generateTechnicalIndicators = (): TechnicalIndicator[] => {
  return [
    {
      name: 'RSI (14)',
      value: parseFloat((Math.random() * 60 + 20).toFixed(2)),
      interpretation: Math.random() > 0.5 ? 'bullish' : 'bearish'
    },
    {
      name: 'MACD',
      value: parseFloat((Math.random() * 10 - 5).toFixed(2)),
      interpretation: Math.random() > 0.5 ? 'bullish' : 'bearish'
    },
    {
      name: 'Moving Average (50)',
      value: parseFloat((Math.random() * 500 + 500).toFixed(2)),
      interpretation: Math.random() > 0.5 ? 'bullish' : 'neutral'
    },
    {
      name: 'Moving Average (200)',
      value: parseFloat((Math.random() * 500 + 500).toFixed(2)),
      interpretation: Math.random() > 0.5 ? 'neutral' : 'bearish'
    },
    {
      name: 'Bollinger Bands',
      value: parseFloat((Math.random() * 2).toFixed(2)),
      interpretation: Math.random() > 0.6 ? 'bullish' : Math.random() > 0.3 ? 'neutral' : 'bearish'
    },
    {
      name: 'Stochastic Oscillator',
      value: parseFloat((Math.random() * 100).toFixed(2)),
      interpretation: Math.random() > 0.5 ? 'bullish' : 'bearish'
    },
    {
      name: 'Average Directional Index (ADX)',
      value: parseFloat((Math.random() * 50 + 10).toFixed(2)),
      interpretation: Math.random() > 0.6 ? 'bullish' : Math.random() > 0.3 ? 'neutral' : 'bearish'
    },
    {
      name: 'On-Balance Volume (OBV)',
      value: parseFloat((Math.random() * 10000000).toFixed(0)),
      interpretation: Math.random() > 0.5 ? 'bullish' : 'bearish'
    },
    {
      name: 'Fibonacci Retracement',
      value: parseFloat((Math.random() * 100).toFixed(2)),
      interpretation: Math.random() > 0.5 ? 'bullish' : 'bearish'
    },
    {
      name: 'Ichimoku Cloud',
      value: parseFloat((Math.random() * 10).toFixed(2)),
      interpretation: Math.random() > 0.6 ? 'bullish' : Math.random() > 0.3 ? 'neutral' : 'bearish'
    },
    {
      name: 'Money Flow Index (MFI)',
      value: parseFloat((Math.random() * 100).toFixed(2)),
      interpretation: Math.random() > 0.5 ? 'bullish' : 'bearish'
    },
    {
      name: 'Parabolic SAR',
      value: parseFloat((Math.random() * 100).toFixed(2)),
      interpretation: Math.random() > 0.5 ? 'bullish' : 'bearish'
    },
    {
      name: 'Volume Weighted Average Price (VWAP)',
      value: parseFloat((Math.random() * 1000 + 500).toFixed(2)),
      interpretation: Math.random() > 0.5 ? 'bullish' : 'bearish'
    },
    {
      name: 'Commodity Channel Index (CCI)',
      value: parseFloat((Math.random() * 400 - 200).toFixed(2)),
      interpretation: Math.random() > 0.6 ? 'bullish' : Math.random() > 0.3 ? 'neutral' : 'bearish'
    },
    {
      name: 'Williams %R',
      value: parseFloat((Math.random() * -100).toFixed(2)),
      interpretation: Math.random() > 0.5 ? 'bullish' : 'bearish'
    },
    {
      name: 'Aroon Oscillator',
      value: parseFloat((Math.random() * 200 - 100).toFixed(2)),
      interpretation: Math.random() > 0.5 ? 'bullish' : 'bearish'
    }
  ];
};