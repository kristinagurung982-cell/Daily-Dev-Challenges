import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchWeatherByCoords, getUserLocation } from '../api/weather';

/**
 * Weather Context for managing global weather state
 */
const WeatherContext = createContext();

/**
 * WeatherProvider component that manages weather data and loading states
 */
export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');

  /**
   * Fetch weather data based on user's geolocation
   */
  useEffect(() => {
    const loadWeather = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get user's location
        const location = await getUserLocation();

        // Fetch weather for that location
        const weatherData = await fetchWeatherByCoords(location.lat, location.lon);
        setWeather(weatherData);
        setCity(weatherData.name);
      } catch (err) {
        setError(err.message || 'Failed to fetch weather data');
        console.error('Weather context error:', err);
      } finally {
        setLoading(false);
      }
    };

    loadWeather();
  }, []);

  const value = {
    weather,
    loading,
    error,
    city,
    setWeather,
    setLoading,
    setError,
    setCity,
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};

/**
 * Custom hook to use weather context
 */
export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within WeatherProvider');
  }
  return context;
};
