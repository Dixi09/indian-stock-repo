import React from 'react';
import { CodeIcon, ServerIcon, DatabaseIcon, PlayIcon } from 'lucide-react';

const DeploymentGuide: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Deployment Guide</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <CodeIcon className="h-5 w-5 text-blue-500 mr-2" />
            Prerequisites
          </h3>
          <div className="mt-2 bg-gray-50 p-4 rounded-md">
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Python 3.8+ installed</li>
              <li>VS Code with Python extension</li>
              <li>Git for version control</li>
              <li>Anaconda or virtualenv for environment management</li>
              <li>Access to historical stock data (NSE/BSE APIs or datasets)</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <ServerIcon className="h-5 w-5 text-blue-500 mr-2" />
            Project Structure
          </h3>
          <div className="mt-2 bg-gray-50 p-4 rounded-md">
            <pre className="text-xs text-gray-700 overflow-x-auto">
{`stock_prediction_project/
├── data/
│   ├── raw/                  # Raw historical data
│   ├── processed/            # Cleaned and preprocessed data
│   └── features/             # Engineered features
├── models/
│   ├── trained/              # Saved trained models
│   └── evaluation/           # Model evaluation results
├── notebooks/
│   ├── data_exploration.ipynb
│   ├── feature_engineering.ipynb
│   └── model_training.ipynb
├── src/
│   ├── data/
│   │   ├── __init__.py
│   │   ├── data_loader.py    # Data loading utilities
│   │   └── preprocessing.py  # Data preprocessing functions
│   ├── features/
│   │   ├── __init__.py
│   │   └── build_features.py # Feature engineering
│   ├── models/
│   │   ├── __init__.py
│   │   ├── train_model.py    # Model training
│   │   ├── predict_model.py  # Prediction functions
│   │   └── evaluate_model.py # Model evaluation
│   └── visualization/
│       ├── __init__.py
│       └── visualize.py      # Visualization utilities
├── app/
│   ├── api/                  # FastAPI endpoints
│   └── frontend/             # React frontend
├── tests/                    # Unit tests
├── requirements.txt          # Project dependencies
├── setup.py                  # Package setup
└── README.md                 # Project documentation`}
            </pre>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <DatabaseIcon className="h-5 w-5 text-blue-500 mr-2" />
            Installation Steps
          </h3>
          <div className="mt-2 space-y-4">
            <div>
              <h4 className="text-md font-medium text-gray-800">1. Clone the repository and set up environment</h4>
              <div className="mt-1 bg-gray-800 text-white p-3 rounded-md overflow-x-auto">
                <pre className="text-xs">
{`# Clone repository (replace with your actual repo)
git clone https://github.com/yourusername/indian-stock-prediction.git
cd indian-stock-prediction

# Create and activate virtual environment
python -m venv venv
# On Windows
venv\\Scripts\\activate
# On macOS/Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt`}
                </pre>
              </div>
            </div>
            
            <div>
              <h4 className="text-md font-medium text-gray-800">2. Data Collection and Preprocessing</h4>
              <div className="mt-1 bg-gray-800 text-white p-3 rounded-md overflow-x-auto">
                <pre className="text-xs">
{`# Run data collection script
python src/data/data_loader.py --source nse --years 5

# Preprocess the data
python src/data/preprocessing.py --input data/raw --output data/processed`}
                </pre>
              </div>
            </div>
            
            <div>
              <h4 className="text-md font-medium text-gray-800">3. Feature Engineering</h4>
              <div className="mt-1 bg-gray-800 text-white p-3 rounded-md overflow-x-auto">
                <pre className="text-xs">
{`# Generate technical indicators and other features
python src/features/build_features.py --input data/processed --output data/features`}
                </pre>
              </div>
            </div>
            
            <div>
              <h4 className="text-md font-medium text-gray-800">4. Model Training</h4>
              <div className="mt-1 bg-gray-800 text-white p-3 rounded-md overflow-x-auto">
                <pre className="text-xs">
{`# Train the LSTM model
python src/models/train_model.py --data data/features --model-type lstm --output models/trained

# Train the ARIMA model
python src/models/train_model.py --data data/features --model-type arima --output models/trained`}
                </pre>
              </div>
            </div>
            
            <div>
              <h4 className="text-md font-medium text-gray-800">5. Model Evaluation</h4>
              <div className="mt-1 bg-gray-800 text-white p-3 rounded-md overflow-x-auto">
                <pre className="text-xs">
{`# Evaluate model performance
python src/models/evaluate_model.py --model models/trained/lstm_model.pkl --test-data data/features/test.csv --output models/evaluation`}
                </pre>
              </div>
            </div>
            
            <div>
              <h4 className="text-md font-medium text-gray-800">6. Running Predictions</h4>
              <div className="mt-1 bg-gray-800 text-white p-3 rounded-md overflow-x-auto">
                <pre className="text-xs">
{`# Generate predictions
python src/models/predict_model.py --model models/trained/lstm_model.pkl --data data/features/latest.csv --output predictions.csv`}
                </pre>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <PlayIcon className="h-5 w-5 text-blue-500 mr-2" />
            Deploying the Web Application
          </h3>
          <div className="mt-2 space-y-4">
            <div>
              <h4 className="text-md font-medium text-gray-800">1. Setting up the API</h4>
              <div className="mt-1 bg-gray-800 text-white p-3 rounded-md overflow-x-auto">
                <pre className="text-xs">
{`# Install FastAPI
pip install fastapi uvicorn

# Start the API server
cd app
uvicorn api.main:app --reload`}
                </pre>
              </div>
            </div>
            
            <div>
              <h4 className="text-md font-medium text-gray-800">2. Running the Frontend</h4>
              <div className="mt-1 bg-gray-800 text-white p-3 rounded-md overflow-x-auto">
                <pre className="text-xs">
{`# Install frontend dependencies
cd app/frontend
npm install

# Start development server
npm run dev`}
                </pre>
              </div>
            </div>
            
            <div>
              <h4 className="text-md font-medium text-gray-800">3. Production Deployment</h4>
              <div className="mt-1 bg-gray-800 text-white p-3 rounded-md overflow-x-auto">
                <pre className="text-xs">
{`# Build frontend
cd app/frontend
npm run build

# Deploy API with Gunicorn
pip install gunicorn
gunicorn -w 4 -k uvicorn.workers.UvicornWorker app.api.main:app`}
                </pre>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                For production deployment, consider using Docker containers and deploying to cloud platforms like AWS, Azure, or GCP.
                Set up CI/CD pipelines for automated testing and deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-blue-50 p-4 rounded-md">
        <h3 className="text-md font-medium text-blue-800">Additional Resources</h3>
        <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-blue-700">
          <li><a href="https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MinMaxScaler.html" className="underline">Scikit-learn documentation for data preprocessing</a></li>
          <li><a href="https://www.tensorflow.org/api_docs/python/tf/keras/layers/LSTM" className="underline">TensorFlow LSTM documentation</a></li>
          <li><a href="https://www.statsmodels.org/stable/generated/statsmodels.tsa.arima.model.ARIMA.html" className="underline">StatsModels ARIMA documentation</a></li>
          <li><a href="https://fastapi.tiangolo.com/" className="underline">FastAPI documentation</a></li>
        </ul>
      </div>
    </div>
  );
};

export default DeploymentGuide;