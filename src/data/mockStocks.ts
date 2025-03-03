import { StockData } from '../types';

// Comprehensive list of Indian stocks with current market prices
export const popularIndianStocks: StockData[] = [
  // NIFTY 50 Stocks
  {
    symbol: 'RELIANCE',
    name: 'Reliance Industries Ltd',
    exchange: 'NSE',
    sector: 'Oil & Gas',
    lastPrice: 2952.75,
    change: 42.35,
    changePercent: 1.45
  },
  {
    symbol: 'TCS',
    name: 'Tata Consultancy Services Ltd',
    exchange: 'NSE',
    sector: 'Information Technology',
    lastPrice: 3876.20,
    change: 28.45,
    changePercent: 0.74
  },
  {
    symbol: 'HDFCBANK',
    name: 'HDFC Bank Ltd',
    exchange: 'NSE',
    sector: 'Banking',
    lastPrice: 1723.55,
    change: 15.70,
    changePercent: 0.92
  },
  {
    symbol: 'INFY',
    name: 'Infosys Ltd',
    exchange: 'NSE',
    sector: 'Information Technology',
    lastPrice: 1624.85,
    change: -12.35,
    changePercent: -0.75
  },
  {
    symbol: 'ICICIBANK',
    name: 'ICICI Bank Ltd',
    exchange: 'NSE',
    sector: 'Banking',
    lastPrice: 1124.65,
    change: 18.90,
    changePercent: 1.71
  },
  {
    symbol: 'HINDUNILVR',
    name: 'Hindustan Unilever Ltd',
    exchange: 'NSE',
    sector: 'FMCG',
    lastPrice: 2487.30,
    change: -22.45,
    changePercent: -0.89
  },
  {
    symbol: 'BAJFINANCE',
    name: 'Bajaj Finance Ltd',
    exchange: 'NSE',
    sector: 'Financial Services',
    lastPrice: 7245.80,
    change: 112.65,
    changePercent: 1.58
  },
  {
    symbol: 'SBIN',
    name: 'State Bank of India',
    exchange: 'NSE',
    sector: 'Banking',
    lastPrice: 792.45,
    change: 10.25,
    changePercent: 1.31
  },
  {
    symbol: 'TATAMOTORS',
    name: 'Tata Motors Ltd',
    exchange: 'NSE',
    sector: 'Automobile',
    lastPrice: 1024.75,
    change: 22.35,
    changePercent: 2.23
  },
  {
    symbol: 'WIPRO',
    name: 'Wipro Ltd',
    exchange: 'NSE',
    sector: 'Information Technology',
    lastPrice: 492.30,
    change: -5.45,
    changePercent: -1.09
  },
  {
    symbol: 'AXISBANK',
    name: 'Axis Bank Ltd',
    exchange: 'NSE',
    sector: 'Banking',
    lastPrice: 1156.85,
    change: 22.55,
    changePercent: 1.99
  },
  {
    symbol: 'KOTAKBANK',
    name: 'Kotak Mahindra Bank Ltd',
    exchange: 'NSE',
    sector: 'Banking',
    lastPrice: 1789.25,
    change: -10.45,
    changePercent: -0.58
  },
  {
    symbol: 'MARUTI',
    name: 'Maruti Suzuki India Ltd',
    exchange: 'NSE',
    sector: 'Automobile',
    lastPrice: 10876.45,
    change: 156.75,
    changePercent: 1.46
  },
  {
    symbol: 'SUNPHARMA',
    name: 'Sun Pharmaceutical Industries Ltd',
    exchange: 'NSE',
    sector: 'Pharmaceuticals',
    lastPrice: 1324.55,
    change: -9.65,
    changePercent: -0.72
  },
  {
    symbol: 'BHARTIARTL',
    name: 'Bharti Airtel Ltd',
    exchange: 'NSE',
    sector: 'Telecommunications',
    lastPrice: 1345.80,
    change: 28.95,
    changePercent: 2.20
  },
  {
    symbol: 'ASIANPAINT',
    name: 'Asian Paints Ltd',
    exchange: 'NSE',
    sector: 'Consumer Durables',
    lastPrice: 3124.45,
    change: -24.75,
    changePercent: -0.79
  },
  {
    symbol: 'ADANIPORTS',
    name: 'Adani Ports and Special Economic Zone Ltd',
    exchange: 'NSE',
    sector: 'Infrastructure',
    lastPrice: 1245.65,
    change: 32.85,
    changePercent: 2.71
  },
  {
    symbol: 'NTPC',
    name: 'NTPC Ltd',
    exchange: 'NSE',
    sector: 'Power',
    lastPrice: 345.25,
    change: 6.85,
    changePercent: 2.02
  },
  {
    symbol: 'POWERGRID',
    name: 'Power Grid Corporation of India Ltd',
    exchange: 'NSE',
    sector: 'Power',
    lastPrice: 312.45,
    change: 4.75,
    changePercent: 1.54
  },
  {
    symbol: 'HCLTECH',
    name: 'HCL Technologies Ltd',
    exchange: 'NSE',
    sector: 'Information Technology',
    lastPrice: 1387.65,
    change: -12.45,
    changePercent: -0.89
  },
  {
    symbol: 'ULTRACEMCO',
    name: 'UltraTech Cement Ltd',
    exchange: 'NSE',
    sector: 'Cement',
    lastPrice: 10245.75,
    change: 124.85,
    changePercent: 1.23
  },
  {
    symbol: 'TITAN',
    name: 'Titan Company Ltd',
    exchange: 'NSE',
    sector: 'Consumer Durables',
    lastPrice: 3456.85,
    change: 45.65,
    changePercent: 1.34
  },
  {
    symbol: 'BAJAJFINSV',
    name: 'Bajaj Finserv Ltd',
    exchange: 'NSE',
    sector: 'Financial Services',
    lastPrice: 1745.25,
    change: 28.45,
    changePercent: 1.66
  },
  {
    symbol: 'TECHM',
    name: 'Tech Mahindra Ltd',
    exchange: 'NSE',
    sector: 'Information Technology',
    lastPrice: 1387.65,
    change: -15.45,
    changePercent: -1.10
  },
  {
    symbol: 'NESTLEIND',
    name: 'Nestle India Ltd',
    exchange: 'NSE',
    sector: 'FMCG',
    lastPrice: 24567.85,
    change: -156.45,
    changePercent: -0.63
  },
  {
    symbol: 'JSWSTEEL',
    name: 'JSW Steel Ltd',
    exchange: 'NSE',
    sector: 'Metals',
    lastPrice: 876.45,
    change: 15.75,
    changePercent: 1.83
  },
  {
    symbol: 'CIPLA',
    name: 'Cipla Ltd',
    exchange: 'NSE',
    sector: 'Pharmaceuticals',
    lastPrice: 1287.65,
    change: 22.45,
    changePercent: 1.77
  },
  {
    symbol: 'DRREDDY',
    name: 'Dr. Reddy\'s Laboratories Ltd',
    exchange: 'NSE',
    sector: 'Pharmaceuticals',
    lastPrice: 5845.75,
    change: 78.45,
    changePercent: 1.36
  },
  {
    symbol: 'DIVISLAB',
    name: 'Divi\'s Laboratories Ltd',
    exchange: 'NSE',
    sector: 'Pharmaceuticals',
    lastPrice: 3745.85,
    change: -45.65,
    changePercent: -1.20
  },
  {
    symbol: 'INDUSINDBK',
    name: 'IndusInd Bank Ltd',
    exchange: 'NSE',
    sector: 'Banking',
    lastPrice: 1487.65,
    change: 24.85,
    changePercent: 1.70
  },
  {
    symbol: 'EICHERMOT',
    name: 'Eicher Motors Ltd',
    exchange: 'NSE',
    sector: 'Automobile',
    lastPrice: 3845.75,
    change: 56.45,
    changePercent: 1.49
  },
  {
    symbol: 'M&M',
    name: 'Mahindra & Mahindra Ltd',
    exchange: 'NSE',
    sector: 'Automobile',
    lastPrice: 1745.85,
    change: 32.45,
    changePercent: 1.89
  },
  {
    symbol: 'COALINDIA',
    name: 'Coal India Ltd',
    exchange: 'NSE',
    sector: 'Mining',
    lastPrice: 467.85,
    change: 8.45,
    changePercent: 1.84
  },
  {
    symbol: 'IOC',
    name: 'Indian Oil Corporation Ltd',
    exchange: 'NSE',
    sector: 'Oil & Gas',
    lastPrice: 184.65,
    change: 3.45,
    changePercent: 1.90
  },
  {
    symbol: 'BPCL',
    name: 'Bharat Petroleum Corporation Ltd',
    exchange: 'NSE',
    sector: 'Oil & Gas',
    lastPrice: 478.45,
    change: 9.65,
    changePercent: 2.06
  },
  {
    symbol: 'GAIL',
    name: 'GAIL (India) Ltd',
    exchange: 'NSE',
    sector: 'Oil & Gas',
    lastPrice: 187.65,
    change: 3.85,
    changePercent: 2.09
  },
  {
    symbol: 'ADANIENT',
    name: 'Adani Enterprises Ltd',
    exchange: 'NSE',
    sector: 'Diversified',
    lastPrice: 3045.75,
    change: 78.45,
    changePercent: 2.64
  },
  {
    symbol: 'HINDALCO',
    name: 'Hindalco Industries Ltd',
    exchange: 'NSE',
    sector: 'Metals',
    lastPrice: 587.45,
    change: 12.65,
    changePercent: 2.20
  },
  {
    symbol: 'HEROMOTOCO',
    name: 'Hero MotoCorp Ltd',
    exchange: 'NSE',
    sector: 'Automobile',
    lastPrice: 4587.65,
    change: 67.85,
    changePercent: 1.50
  },
  {
    symbol: 'BAJAJ-AUTO',
    name: 'Bajaj Auto Ltd',
    exchange: 'NSE',
    sector: 'Automobile',
    lastPrice: 8745.85,
    change: 124.65,
    changePercent: 1.45
  },
  {
    symbol: 'APOLLOHOSP',
    name: 'Apollo Hospitals Enterprise Ltd',
    exchange: 'NSE',
    sector: 'Healthcare',
    lastPrice: 5845.75,
    change: 87.65,
    changePercent: 1.52
  },
  {
    symbol: 'BRITANNIA',
    name: 'Britannia Industries Ltd',
    exchange: 'NSE',
    sector: 'FMCG',
    lastPrice: 5124.85,
    change: -45.65,
    changePercent: -0.88
  },
  {
    symbol: 'TATASTEEL',
    name: 'Tata Steel Ltd',
    exchange: 'NSE',
    sector: 'Metals',
    lastPrice: 156.45,
    change: 4.85,
    changePercent: 3.20
  },
  
  // Adani Group Companies
  {
    symbol: 'ADANIPOWER',
    name: 'Adani Power Ltd',
    exchange: 'NSE',
    sector: 'Power',
    lastPrice: 624.85,
    change: 18.45,
    changePercent: 3.04
  },
  {
    symbol: 'ADANIGREEN',
    name: 'Adani Green Energy Ltd',
    exchange: 'NSE',
    sector: 'Renewable Energy',
    lastPrice: 1745.65,
    change: 45.85,
    changePercent: 2.70
  },
  {
    symbol: 'ADANITRANS',
    name: 'Adani Transmission Ltd',
    exchange: 'NSE',
    sector: 'Power',
    lastPrice: 1024.85,
    change: 32.45,
    changePercent: 3.27
  },
  {
    symbol: 'ADANIGAS',
    name: 'Adani Gas Ltd',
    exchange: 'NSE',
    sector: 'Oil & Gas',
    lastPrice: 824.65,
    change: 24.85,
    changePercent: 3.11
  },
  {
    symbol: 'ADANIENSOL',
    name: 'Adani Energy Solutions Ltd',
    exchange: 'NSE',
    sector: 'Power',
    lastPrice: 912.45,
    change: 28.65,
    changePercent: 3.24
  },
  {
    symbol: 'ADANICEMNT',
    name: 'Adani Cement Ltd',
    exchange: 'NSE',
    sector: 'Cement',
    lastPrice: 587.65,
    change: 15.45,
    changePercent: 2.70
  },
  {
    symbol: 'ACC',
    name: 'ACC Ltd',
    exchange: 'NSE',
    sector: 'Cement',
    lastPrice: 2487.65,
    change: 45.85,
    changePercent: 1.88
  },
  {
    symbol: 'NDTV',
    name: 'New Delhi Television Ltd',
    exchange: 'NSE',
    sector: 'Media',
    lastPrice: 245.85,
    change: 6.45,
    changePercent: 2.70
  },
  
  // New Age Tech Companies
  {
    symbol: 'ZOMATO',
    name: 'Zomato Ltd',
    exchange: 'NSE',
    sector: 'Technology',
    lastPrice: 204.85,
    change: 8.45,
    changePercent: 4.30
  },
  {
    symbol: 'PAYTM',
    name: 'One97 Communications Ltd',
    exchange: 'NSE',
    sector: 'Financial Technology',
    lastPrice: 412.45,
    change: -15.65,
    changePercent: -3.65
  },
  {
    symbol: 'NYKAA',
    name: 'FSN E-Commerce Ventures Ltd',
    exchange: 'NSE',
    sector: 'E-Commerce',
    lastPrice: 187.65,
    change: 4.85,
    changePercent: 2.65
  },
  {
    symbol: 'POLICYBZR',
    name: 'PB Fintech Ltd',
    exchange: 'NSE',
    sector: 'Financial Technology',
    lastPrice: 824.85,
    change: 24.65,
    changePercent: 3.08
  },
  {
    symbol: 'DELHIVERY',
    name: 'Delhivery Ltd',
    exchange: 'NSE',
    sector: 'Logistics',
    lastPrice: 367.85,
    change: 12.45,
    changePercent: 3.50
  },
  {
    symbol: 'CARTRADE',
    name: 'CarTrade Tech Ltd',
    exchange: 'NSE',
    sector: 'Technology',
    lastPrice: 587.65,
    change: 15.45,
    changePercent: 2.70
  },
  {
    symbol: 'EASEMYTRIP',
    name: 'Easy Trip Planners Ltd',
    exchange: 'NSE',
    sector: 'Travel & Tourism',
    lastPrice: 48.65,
    change: 1.45,
    changePercent: 3.07
  },
  {
    symbol: 'NAZARA',
    name: 'Nazara Technologies Ltd',
    exchange: 'NSE',
    sector: 'Gaming',
    lastPrice: 824.85,
    change: 24.65,
    changePercent: 3.08
  },
  {
    symbol: 'MAPMYINDIA',
    name: 'C.E. Info Systems Ltd',
    exchange: 'NSE',
    sector: 'Technology',
    lastPrice: 1524.85,
    change: 45.65,
    changePercent: 3.09
  },
  
  // Retail & Consumer
  {
    symbol: 'DMART',
    name: 'Avenue Supermarts Ltd',
    exchange: 'NSE',
    sector: 'Retail',
    lastPrice: 4745.85,
    change: -35.65,
    changePercent: -0.74
  },
  {
    symbol: 'IRCTC',
    name: 'Indian Railway Catering and Tourism Corporation Ltd',
    exchange: 'NSE',
    sector: 'Travel & Tourism',
    lastPrice: 824.85,
    change: 24.65,
    changePercent: 3.08
  },
  {
    symbol: 'ITC',
    name: 'ITC Ltd',
    exchange: 'NSE',
    sector: 'FMCG',
    lastPrice: 456.85,
    change: 9.65,
    changePercent: 2.16
  },
  {
    symbol: 'TRENT',
    name: 'Trent Ltd',
    exchange: 'NSE',
    sector: 'Retail',
    lastPrice: 3624.85,
    change: 87.65,
    changePercent: 2.48
  },
  {
    symbol: 'ABFRL',
    name: 'Aditya Birla Fashion and Retail Ltd',
    exchange: 'NSE',
    sector: 'Retail',
    lastPrice: 284.85,
    change: 8.45,
    changePercent: 3.06
  },
  {
    symbol: 'VMART',
    name: 'V-Mart Retail Ltd',
    exchange: 'NSE',
    sector: 'Retail',
    lastPrice: 2487.65,
    change: 45.85,
    changePercent: 1.88
  },
  {
    symbol: 'SHOPERSTOP',
    name: 'Shoppers Stop Ltd',
    exchange: 'NSE',
    sector: 'Retail',
    lastPrice: 824.85,
    change: 24.65,
    changePercent: 3.08
  },
  
  // Infrastructure & Construction
  {
    symbol: 'LT',
    name: 'Larsen & Toubro Ltd',
    exchange: 'NSE',
    sector: 'Construction',
    lastPrice: 3624.85,
    change: 87.65,
    changePercent: 2.48
  },
  {
    symbol: 'LTIM',
    name: 'LTIMindtree Ltd',
    exchange: 'NSE',
    sector: 'Information Technology',
    lastPrice: 5845.85,
    change: 124.65,
    changePercent: 2.18
  },
  {
    symbol: 'LICI',
    name: 'Life Insurance Corporation of India',
    exchange: 'NSE',
    sector: 'Insurance',
    lastPrice: 987.65,
    change: 24.85,
    changePercent: 2.58
  },
  {
    symbol: 'SIEMENS',
    name: 'Siemens Ltd',
    exchange: 'NSE',
    sector: 'Industrial Manufacturing',
    lastPrice: 4745.85,
    change: 87.65,
    changePercent: 1.88
  },
  {
    symbol: 'ABB',
    name: 'ABB India Ltd',
    exchange: 'NSE',
    sector: 'Industrial Manufacturing',
    lastPrice: 5845.85,
    change: 124.65,
    changePercent: 2.18
  },
  {
    symbol: 'BEL',
    name: 'Bharat Electronics Ltd',
    exchange: 'NSE',
    sector: 'Defence',
    lastPrice: 197.65,
    change: 5.85,
    changePercent: 3.05
  },
  {
    symbol: 'HAL',
    name: 'Hindustan Aeronautics Ltd',
    exchange: 'NSE',
    sector: 'Defence',
    lastPrice: 3624.85,
    change: 87.65,
    changePercent: 2.48
  },
  {
    symbol: 'BHEL',
    name: 'Bharat Heavy Electricals Ltd',
    exchange: 'NSE',
    sector: 'Industrial Manufacturing',
    lastPrice: 197.65,
    change: 5.85,
    changePercent: 3.05
  },
  
  // Tata Group Companies
  {
    symbol: 'TATAPOWER',
    name: 'Tata Power Company Ltd',
    exchange: 'NSE',
    sector: 'Power',
    lastPrice: 397.65,
    change: 12.85,
    changePercent: 3.34
  },
  {
    symbol: 'TATACHEM',
    name: 'Tata Chemicals Ltd',
    exchange: 'NSE',
    sector: 'Chemicals',
    lastPrice: 1124.85,
    change: 28.65,
    changePercent: 2.61
  },
  {
    symbol: 'TATAELXSI',
    name: 'Tata Elxsi Ltd',
    exchange: 'NSE',
    sector: 'Information Technology',
    lastPrice: 8245.85,
    change: 245.65,
    changePercent: 3.07
  },
  {
    symbol: 'TATACONSUM',
    name: 'Tata Consumer Products Ltd',
    exchange: 'NSE',
    sector: 'FMCG',
    lastPrice: 1124.85,
    change: 28.65,
    changePercent: 2.61
  },
  {
    symbol: 'TATAINVEST',
    name: 'Tata Investment Corporation Ltd',
    exchange: 'NSE',
    sector: 'Financial Services',
    lastPrice: 4745.85,
    change: 124.65,
    changePercent: 2.70
  },
  {
    symbol: 'VOLTAS',
    name: 'Voltas Ltd',
    exchange: 'NSE',
    sector: 'Consumer Durables',
    lastPrice: 1287.65,
    change: 32.85,
    changePercent: 2.62
  },
  {
    symbol: 'INDIANHOTELS',
    name: 'The Indian Hotels Company Ltd',
    exchange: 'NSE',
    sector: 'Hospitality',
    lastPrice: 587.65,
    change: 15.85,
    changePercent: 2.77
  },
  
  // Food & Beverage
  {
    symbol: 'JUBLFOOD',
    name: 'Jubilant FoodWorks Ltd',
    exchange: 'NSE',
    sector: 'Food & Beverages',
    lastPrice: 587.65,
    change: 15.85,
    changePercent: 2.77
  },
  {
    symbol: 'VARUN',
    name: 'Varun Beverages Ltd',
    exchange: 'NSE',
    sector: 'Food & Beverages',
    lastPrice: 1287.65,
    change: 32.85,
    changePercent: 2.62
  },
  {
    symbol: 'MCDOWELL-N',
    name: 'United Spirits Ltd',
    exchange: 'NSE',
    sector: 'Beverages',
    lastPrice: 1124.85,
    change: 28.65,
    changePercent: 2.61
  },
  {
    symbol: 'PGHH',
    name: 'Procter & Gamble Hygiene and Health Care Ltd',
    exchange: 'NSE',
    sector: 'FMCG',
    lastPrice: 17245.85,
    change: 345.65,
    changePercent: 2.04
  },
  {
    symbol: 'GILLETTE',
    name: 'Gillette India Ltd',
    exchange: 'NSE',
    sector: 'FMCG',
    lastPrice: 7124.85,
    change: 187.65,
    changePercent: 2.70
  },
  
  // Banking & Financial Services
  {
    symbol: 'PNB',
    name: 'Punjab National Bank',
    exchange: 'NSE',
    sector: 'Banking',
    lastPrice: 94.85,
    change: 2.85,
    changePercent: 3.10
  },
  {
    symbol: 'BANKBARODA',
    name: 'Bank of Baroda',
    exchange: 'NSE',
    sector: 'Banking',
    lastPrice: 247.65,
    change: 7.85,
    changePercent: 3.27
  },
  {
    symbol: 'CANBK',
    name: 'Canara Bank',
    exchange: 'NSE',
    sector: 'Banking',
    lastPrice: 478.65,
    change: 14.85,
    changePercent: 3.20
  },
  {
    symbol: 'UNIONBANK',
    name: 'Union Bank of India',
    exchange: 'NSE',
    sector: 'Banking',
    lastPrice: 129.85,
    change: 3.85,
    changePercent: 3.05
  },
  {
    symbol: 'FEDERALBNK',
    name: 'The Federal Bank Ltd',
    exchange: 'NSE',
    sector: 'Banking',
    lastPrice: 164.85,
    change: 4.85,
    changePercent: 3.03
  },
  {
    symbol: 'BANDHANBNK',
    name: 'Bandhan Bank Ltd',
    exchange: 'NSE',
    sector: 'Banking',
    lastPrice: 247.65,
    change: 7.85,
    changePercent: 3.27
  },
  {
    symbol: 'IDFC',
    name: 'IDFC Ltd',
    exchange: 'NSE',
    sector: 'Financial Services',
    lastPrice: 129.85,
    change: 3.85,
    changePercent: 3.05
  },
  {
    symbol: 'IDFCFIRSTB',
    name: 'IDFC First Bank Ltd',
    exchange: 'NSE',
    sector: 'Banking',
    lastPrice: 84.85,
    change: 2.85,
    changePercent: 3.47
  },
  {
    symbol: 'RBLBANK',
    name: 'RBL Bank Ltd',
    exchange: 'NSE',
    sector: 'Banking',
    lastPrice: 247.65,
    change: 7.85,
    changePercent: 3.27
  },
  {
    symbol: 'AUBANK',
    name: 'AU Small Finance Bank Ltd',
    exchange: 'NSE',
    sector: 'Banking',
    lastPrice: 712.85,
    change: 21.85,
    changePercent: 3.16
  },
  {
    symbol: 'YESBANK',
    name: 'Yes Bank Ltd',
    exchange: 'NSE',
    sector: 'Banking',
    lastPrice: 24.85,
    change: 0.85,
    changePercent: 3.54
  },
  {
    symbol: 'HDFCLIFE',
    name: 'HDFC Life Insurance Company Ltd',
    exchange: 'NSE',
    sector: 'Insurance',
    lastPrice: 712.85,
    change: 21.85,
    changePercent: 3.16
  },
  {
    symbol: 'SBILIFE',
    name: 'SBI Life Insurance Company Ltd',
    exchange: 'NSE',
    sector: 'Insurance',
    lastPrice: 1524.85,
    change: 45.85,
    changePercent: 3.10
  },
  
  // Telecom & Media
  {
    symbol: 'IDEA',
    name: 'Vodafone Idea Ltd',
    exchange: 'NSE',
    sector: 'Telecommunications',
    lastPrice: 12.85,
    change: 0.45,
    changePercent: 3.63
  },
  {
    symbol: 'TTML',
    name: 'Tata Teleservices (Maharashtra) Ltd',
    exchange: 'NSE',
    sector: 'Telecommunications',
    lastPrice: 94.85,
    change: 2.85,
    changePercent: 3.10
  },
  {
    symbol: 'ZEEL',
    name: 'Zee Entertainment Enterprises Ltd',
    exchange: 'NSE',
    sector: 'Media',
    lastPrice: 284.85,
    change: 8.85,
    changePercent: 3.20
  },
  {
    symbol: 'SUNTV',
    name: 'Sun TV Network Ltd',
    exchange: 'NSE',
    sector: 'Media',
    lastPrice: 712.85,
    change: 21.85,
    changePercent: 3.16
  },
  {
    symbol: 'PVR',
    name: 'PVR Inox Ltd',
    exchange: 'NSE',
    sector: 'Media & Entertainment',
    lastPrice: 1524.85,
    change: 45.85,
    changePercent: 3.10
  },
  
  // Energy & Power
  {
    symbol: 'SUZLON',
    name: 'Suzlon Energy Ltd',
    exchange: 'NSE',
    sector: 'Renewable Energy',
    lastPrice: 37.85,
    change: 1.45,
    changePercent: 3.98
  },
  {
    symbol: 'NHPC',
    name: 'NHPC Ltd',
    exchange: 'NSE',
    sector: 'Power',
    lastPrice: 84.85,
    change: 2.85,
    changePercent: 3.47
  },
  {
    symbol: 'RECLTD',
    name: 'REC Ltd',
    exchange: 'NSE',
    sector: 'Financial Services',
    lastPrice: 364.85,
    change: 10.85,
    changePercent: 3.06
  },
  {
    symbol: 'PFC',
    name: 'Power Finance Corporation Ltd',
    exchange: 'NSE',
    sector: 'Financial Services',
    lastPrice: 364.85,
    change: 10.85,
    changePercent: 3.06
  },
  {
    symbol: 'IRFC',
    name: 'Indian Railway Finance Corporation Ltd',
    exchange: 'NSE',
    sector: 'Financial Services',
    lastPrice: 94.85,
    change: 2.85,
    changePercent: 3.10
  },
  
  // Metals & Mining
  {
    symbol: 'NMDC',
    name: 'NMDC Ltd',
    exchange: 'NSE',
    sector: 'Mining',
    lastPrice: 187.85,
    change: 5.85,
    changePercent: 3.21
  },
  {
    symbol: 'SAIL',
    name: 'Steel Authority of India Ltd',
    exchange: 'NSE',
    sector: 'Metals',
    lastPrice: 129.85,
    change: 3.85,
    changePercent: 3.05
  },
  {
    symbol: 'NATIONALUM',
    name: 'National Aluminium Company Ltd',
    exchange: 'NSE',
    sector: 'Metals',
    lastPrice: 154.85,
    change: 4.85,
    changePercent: 3.23
  },
  {
    symbol: 'VEDL',
    name: 'Vedanta Ltd',
    exchange: 'NSE',
    sector: 'Metals',
    lastPrice: 364.85,
    change: 10.85,
    changePercent: 3.06
  },
  {
    symbol: 'HINDCOPPER',
    name: 'Hindustan Copper Ltd',
    exchange: 'NSE',
    sector: 'Metals',
    lastPrice: 187.85,
    change: 5.85,
    changePercent: 3.21
  },
  {
    symbol: 'JINDALSTEL',
    name: 'Jindal Steel & Power Ltd',
    exchange: 'NSE',
    sector: 'Metals',
    lastPrice: 712.85,
    change: 21.85,
    changePercent: 3.16
  },
  
  // Real Estate & Infrastructure
  {
    symbol: 'GMRINFRA',
    name: 'GMR Airports Infrastructure Ltd',
    exchange: 'NSE',
    sector: 'Infrastructure',
    lastPrice: 72.85,
    change: 2.45,
    changePercent: 3.48
  },
  {
    symbol: 'DLF',
    name: 'DLF Ltd',
    exchange: 'NSE',
    sector: 'Real Estate',
    lastPrice: 712.85,
    change: 21.85,
    changePercent: 3.16
  },
  {
    symbol: 'OBEROIRLTY',
    name: 'Oberoi Realty Ltd',
    exchange: 'NSE',
    sector: 'Real Estate',
    lastPrice: 1287.85,
    change: 38.85,
    changePercent: 3.11
  },
  {
    symbol: 'GODREJPROP',
    name: 'Godrej Properties Ltd',
    exchange: 'NSE',
    sector: 'Real Estate',
    lastPrice: 2487.85,
    change: 74.85,
    changePercent: 3.10
  },
  {
    symbol: 'PRESTIGE',
    name: 'Prestige Estates Projects Ltd',
    exchange: 'NSE',
    sector: 'Real Estate',
    lastPrice: 1287.85,
    change: 38.85,
    changePercent: 3.11
  },
  
  // Pharmaceuticals & Healthcare
  {
    symbol: 'BIOCON',
    name: 'Biocon Ltd',
    exchange: 'NSE',
    sector: 'Pharmaceuticals',
    lastPrice: 284.85,
    change: 8.85,
    changePercent: 3.20
  },
  {
    symbol: 'AUROPHARMA',
    name: 'Aurobindo Pharma Ltd',
    exchange: 'NSE',
    sector: 'Pharmaceuticals',
    lastPrice: 987.85,
    change: 29.85,
    changePercent: 3.12
  },
  {
    symbol: 'LUPIN',
    name: 'Lupin Ltd',
    exchange: 'NSE',
    sector: 'Pharmaceuticals',
    lastPrice: 1524.85,
    change: 45.85,
    changePercent: 3.10
  },
  {
    symbol: 'TORNTPHARM',
    name: 'Torrent Pharmaceuticals Ltd',
    exchange: 'NSE',
    sector: 'Pharmaceuticals',
    lastPrice: 2487.85,
    change: 74.85,
    changePercent: 3.10
  },
  {
    symbol: 'ALKEM',
    name: 'Alkem Laboratories Ltd',
    exchange: 'NSE',
    sector: 'Pharmaceuticals',
    lastPrice: 3624.85,
    change: 108.85,
    changePercent: 3.10
  },
  
  // IT & Technology
  {
    symbol: 'PERSISTENT',
    name: 'Persistent Systems Ltd',
    exchange: 'NSE',
    sector: 'Information Technology',
    lastPrice: 8245.85,
    change: 245.85,
    changePercent: 3.07
  },
  {
    symbol: 'COFORGE',
    name: 'Coforge Ltd',
    exchange: 'NSE',
    sector: 'Information Technology',
    lastPrice: 5845.85,
    change: 174.85,
    changePercent: 3.08
  },
  {
    symbol: 'MPHASIS',
    name: 'Mphasis Ltd',
    exchange: 'NSE',
    sector: 'Information Technology',
    lastPrice: 2487.85,
    change: 74.85,
    changePercent: 3.10
  },
  {
    symbol: 'OFSS',
    name: 'Oracle Financial Services Software Ltd',
    exchange: 'NSE',
    sector: 'Information Technology',
    lastPrice: 4745.85,
    change: 142.85,
    changePercent: 3.10
  },
  {
    symbol: 'LTTS',
    name: 'L&T Technology Services Ltd',
    exchange: 'NSE',
    sector: 'Information Technology',
    lastPrice: 4745.85,
    change: 142.85,
    changePercent: 3.10
  },
  
  // Automobile & Auto Components
  {
    symbol: 'MOTHERSON',
    name: 'Samvardhana Motherson International Ltd',
    exchange: 'NSE',
    sector: 'Auto Components',
    lastPrice: 129.85,
    change: 3.85,
    changePercent: 3.05
  },
  {
    symbol: 'BOSCHLTD',
    name: 'Bosch Ltd',
    exchange: 'NSE',
    sector: 'Auto Components',
    lastPrice: 24587.85,
    change: 734.85,
    changePercent: 3.08
  },
  {
    symbol: 'BALKRISIND',
    name: 'Balkrishna Industries Ltd',
    exchange: 'NSE',
    sector: 'Auto Components',
    lastPrice: 2487.85,
    change: 74.85,
    changePercent: 3.10
  },
  {
    symbol: 'MRF',
    name: 'MRF Ltd',
    exchange: 'NSE',
    sector: 'Auto Components',
    lastPrice: 118745.85,
    change: 3545.85,
    changePercent: 3.08
  },
  {
    symbol: 'APOLLOTYRE',
    name: 'Apollo Tyres Ltd',
    exchange: 'NSE',
    sector: 'Auto Components',
    lastPrice: 364.85,
    change: 10.85,
    changePercent: 3.06
  },
  
  // Chemicals & Fertilizers
  {
    symbol: 'UPL',
    name: 'UPL Ltd',
    exchange: 'NSE',
    sector: 'Chemicals',
    lastPrice: 587.85,
    change: 17.85,
    changePercent: 3.13
  },
  {
    symbol: 'ATUL',
    name: 'Atul Ltd',
    exchange: 'NSE',
    sector: 'Chemicals',
    lastPrice: 8245.85,
    change: 245.85,
    changePercent: 3.07
  },
  {
    symbol: 'DEEPAKNITRITE',
    name: 'Deepak Nitrite Ltd',
    exchange: 'NSE',
    sector: 'Chemicals',
    lastPrice: 2487.85,
    change: 74.85,
    changePercent: 3.10
  },
  {
    symbol: 'SRF',
    name: 'SRF Ltd',
    exchange: 'NSE',
    sector: 'Chemicals',
    lastPrice: 2487.85,
    change: 74.85,
    changePercent: 3.10
  },
  
  // Small & Mid Cap Stocks
  {
    symbol: 'RAIN',
    name: 'Rain Industries Ltd',
    exchange: 'NSE',
    sector: 'Chemicals',
    lastPrice: 187.85,
    change: 5.85,
    changePercent: 3.21
  },
  {
    symbol: 'JKCEMENT',
    name: 'JK Cement Ltd',
    exchange: 'NSE',
    sector: 'Cement',
    lastPrice: 3624.85,
    change: 108.85,
    changePercent: 3.10
  },
  {
    symbol: 'RAMCOCEM',
    name: 'The Ramco Cements Ltd',
    exchange: 'NSE',
    sector: 'Cement',
    lastPrice: 987.85,
    change: 29.85,
    changePercent: 3.12
  },
  {
    symbol: 'KAJARIACER',
    name: 'Kajaria Ceramics Ltd',
    exchange: 'NSE',
    sector: 'Building Materials',
    lastPrice: 1524.85,
    change: 45.85,
    changePercent: 3.10
  },
  {
    symbol: 'BATAINDIA',
    name: 'Bata India Ltd',
    exchange: 'NSE',
    sector: 'Consumer Durables',
    lastPrice: 1745.85,
    change: 52.85,
    changePercent: 3.12
  },
  {
    symbol: 'PAGEIND',
    name: 'Page Industries Ltd',
    exchange: 'NSE',
    sector: 'Textiles',
    lastPrice: 41245.85,
    change: 1234.85,
    changePercent: 3.09
  },
  {
    symbol: 'DIXON',
    name: 'Dixon Technologies (India) Ltd',
    exchange: 'NSE',
    sector: 'Consumer Durables',
    lastPrice: 5845.85,
    change: 174.85,
    changePercent: 3.08
  },
  {
    symbol: 'LALPATHLAB',
    name: 'Dr. Lal PathLabs Ltd',
    exchange: 'NSE',
    sector: 'Healthcare',
    lastPrice: 2487.85,
    change: 74.85,
    changePercent: 3.10
  },
  {
    symbol: 'METROPOLIS',
    name: 'Metropolis Healthcare Ltd',
    exchange: 'NSE',
    sector: 'Healthcare',
    lastPrice: 1745.85,
    change: 52.85,
    changePercent: 3.12
  },
  {
    symbol: 'EQUITASBNK',
    name: 'Equitas Small Finance Bank Ltd',
    exchange: 'NSE',
    sector: 'Banking',
    lastPrice: 94.85,
    change: 2.85,
    changePercent: 3.10
  }
];

export default popularIndianStocks;