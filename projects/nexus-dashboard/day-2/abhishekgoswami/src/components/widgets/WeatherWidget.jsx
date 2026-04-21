import React from 'react';
import { useWeather } from '../../context/WeatherContext';
import LoadingSkeleton from '../common/LoadingSkeleton';
import { formatTemperature, formatWindSpeed } from '../../utils/formatters';
import './WeatherWidget.css';

/**
 * WeatherWidget component that displays real-time weather information
 * Shows temperature, weather condition, humidity, wind speed, etc.
 */
const WeatherWidget = () => {
  const { weather, loading, error, city } = useWeather();

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="weather-widget error-state">
        <div className="error-icon">⚠️</div>
        <h3>Unable to Load Weather</h3>
        <p>{error}</p>
        <p className="error-hint">Please check your location permissions or API key.</p>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="weather-widget no-data">
        <p>No weather data available</p>
      </div>
    );
  }

  const {
    main,
    weather: weatherInfo,
    wind,
    clouds,
    sys,
  } = weather;

  const weatherDescription = weatherInfo[0]?.main || 'Unknown';
  const weatherIcon = weatherInfo[0]?.icon || '01d';
  const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  return (
    <div className="weather-widget">
      <div className="weather-header">
        <h2>{city}</h2>
        <p className="weather-time">
          {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'short',
            day: 'numeric',
          })}
        </p>
      </div>

      <div className="weather-main">
        <div className="weather-icon-container">
          <img src={iconUrl} alt={weatherDescription} className="weather-icon" />
        </div>
        <div className="weather-temp">
          <span className="temp-value">{formatTemperature(main.temp)}</span>
          <span className="temp-unit">°C</span>
        </div>
      </div>

      <div className="weather-description">
        <p>{weatherDescription}</p>
        <p className="feels-like">
          Feels like {formatTemperature(main.feels_like)}°C
        </p>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{main.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Pressure</span>
          <span className="detail-value">{main.pressure} hPa</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">{formatWindSpeed(wind.speed)}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Cloudiness</span>
          <span className="detail-value">{clouds.all}%</span>
        </div>
      </div>

      {sys.sunrise && sys.sunset && (
        <div className="weather-sun">
          <div className="sun-item">
            <span className="sun-label">🌅 Sunrise</span>
            <span className="sun-time">
              {new Date(sys.sunrise * 1000).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
          </div>
          <div className="sun-item">
            <span className="sun-label">🌇 Sunset</span>
            <span className="sun-time">
              {new Date(sys.sunset * 1000).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
          </div>
        </div>
      )}

      <div className="weather-meta">
        <p className="last-updated">
          Last updated: {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default WeatherWidget;
