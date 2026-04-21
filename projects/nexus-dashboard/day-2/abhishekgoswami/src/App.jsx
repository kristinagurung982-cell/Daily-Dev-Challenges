import React from 'react';
import { WeatherProvider } from './context/WeatherContext';
import WeatherWidget from './components/widgets/WeatherWidget';
import './App.css';

/**
 * Main App component for Nexus Day 2 Weather Dashboard
 * Wraps the weather widget with context provider
 */
function App() {
  return (
    <WeatherProvider>
      <div className="app">
        <header className="app-header">
          <h1>🌤️ Real-time Weather Dashboard</h1>
          <p>Powered by OpenWeatherMap API</p>
        </header>

        <main className="app-main">
          <WeatherWidget />
        </main>

        <footer className="app-footer">
          <p>Weather data updates automatically based on your location</p>
          <p className="api-credit">
            Data provided by{' '}
            <a href="https://openweathermap.org" target="_blank" rel="noopener noreferrer">
              OpenWeatherMap
            </a>
          </p>
        </footer>
      </div>
    </WeatherProvider>
  );
}

export default App;
