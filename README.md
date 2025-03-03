# Indian Stock Price Prediction

A machine learning application for predicting stock prices of major Indian companies listed on the National Stock Exchange (NSE) and Bombay Stock Exchange (BSE).

## Features

- Historical data analysis for Indian stocks
- Time-series prediction using LSTM, Prophet, and ARIMA models
- Technical indicator visualization and analysis
- Next-day price predictions with confidence intervals
- Model performance metrics and evaluation

## Project Structure

The project is divided into two main components:

1. **Frontend**: React application for visualization and user interaction
2. **Backend**: Python-based machine learning pipeline (implementation details in the Deployment Guide)

## Frontend (Current Repository)

This repository contains the frontend application built with:

- React
- TypeScript
- Tailwind CSS
- Recharts for data visualization

## Machine Learning Implementation

The machine learning pipeline includes:

- Data collection from NSE/BSE sources
- Data preprocessing and cleaning
- Feature engineering (technical indicators, sentiment analysis)
- Model training (LSTM, ARIMA, Prophet)
- Model evaluation and performance metrics
- Prediction generation

## Getting Started

### Prerequisites

- Node.js and npm
- Python 3.8+ (for backend implementation)
- VS Code or preferred IDE

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## Deployment Guide

See the Deployment Guide section in the application for detailed instructions on:

- Setting up the Python environment
- Installing required libraries
- Data collection and preprocessing
- Model training and evaluation
- API deployment
- Frontend deployment

## Disclaimer

This application is for educational purposes only. The predictions are based on historical data and should not be considered as financial advice. Always conduct your own research before making investment decisions.

## License

MIT