/**
 * Weather API wrapper using Fetch API
 * Integrates with OpenWeatherMap API for real-time weather data
 */

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || 'demo-key';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

/**
 * Fetch weather data for a given location
 * @param {number} lat - Latitude
 * @param {number} lon - Longitude
 * @returns {Promise<Object>} Weather data object
 */
export const fetchWeatherByCoords = async (lat, lon) => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Weather API Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Weather fetch error:', error);
    throw error;
  }
};

/**
 * Fetch weather data by city name
 * @param {string} city - City name
 * @returns {Promise<Object>} Weather data object
 */
export const fetchWeatherByCity = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Weather API Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Weather fetch error:', error);
    throw error;
  }
};

/**
 * Get user's geolocation
 * @returns {Promise<{lat: number, lon: number}>} Coordinates
 */
export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation not supported'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
};
