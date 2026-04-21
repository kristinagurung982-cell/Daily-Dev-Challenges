/**
 * Utility functions for formatting weather data
 */

/**
 * Format temperature with proper rounding
 * @param {number} temp - Temperature value
 * @returns {string} Formatted temperature
 */
export const formatTemperature = (temp) => {
  return Math.round(temp);
};

/**
 * Format wind speed to km/h (converts from m/s)
 * @param {number} speed - Wind speed in m/s
 * @returns {string} Formatted wind speed with unit
 */
export const formatWindSpeed = (speed) => {
  const kmh = (speed * 3.6).toFixed(1);
  return `${kmh} km/h`;
};

/**
 * Format pressure in hPa
 * @param {number} pressure - Pressure value in hPa
 * @returns {string} Formatted pressure
 */
export const formatPressure = (pressure) => {
  return `${pressure} hPa`;
};

/**
 * Format visibility in km (converts from meters)
 * @param {number} visibility - Visibility in meters
 * @returns {string} Formatted visibility with unit
 */
export const formatVisibility = (visibility) => {
  const km = (visibility / 1000).toFixed(1);
  return `${km} km`;
};

/**
 * Format timestamp to readable time
 * @param {number} timestamp - Unix timestamp
 * @param {string} format - 'time' or 'date'
 * @returns {string} Formatted date/time
 */
export const formatTimestamp = (timestamp, format = 'time') => {
  const date = new Date(timestamp * 1000);

  if (format === 'time') {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });
};

/**
 * Get weather icon URL from icon code
 * @param {string} iconCode - OpenWeatherMap icon code
 * @returns {string} URL to weather icon
 */
export const getWeatherIconUrl = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

/**
 * Get weather condition description with emoji
 * @param {string} condition - Weather condition
 * @returns {string} Condition with emoji
 */
export const getWeatherEmoji = (condition) => {
  const emojis = {
    'clear sky': '☀️',
    'few clouds': '🌤️',
    'scattered clouds': '☁️',
    'broken clouds': '☁️',
    'shower rain': '🌧️',
    'rain': '🌧️',
    'thunderstorm': '⛈️',
    'snow': '❄️',
    'mist': '🌫️',
  };

  const lowerCondition = condition.toLowerCase();
  return emojis[lowerCondition] || '🌡️';
};
