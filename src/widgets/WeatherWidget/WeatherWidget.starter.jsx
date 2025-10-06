import { useState, useEffect } from 'react';
import { mockWeatherApi } from '../../utils/mockApi';

/**
 * Weather Widget - STARTER VERSION
 *
 * Learning Objectives:
 * - Fetch data from an API with async/await
 * - Handle loading states
 * - Handle errors in async operations
 * - Use useEffect for initial data fetch
 * - Work with user input to trigger API calls
 *
 * TODO: Complete the missing parts marked with comments
 */
function WeatherWidget() {
  // TODO: Initialize state for weather data (starts null)


  // TODO: Initialize state for loading (starts false)


  // TODO: Initialize state for city (starts with 'San Francisco')


  const fetchWeather = async () => {
    // TODO: Set loading to true


    try {
      // TODO: Call mockWeatherApi.getCurrentWeather(city) and store result


      // TODO: Set weather state with the fetched data

    } catch (error) {
      console.error('Error fetching weather:', error);
      // TODO: Optionally handle error (set error state, show message, etc.)

    } finally {
      // TODO: Set loading to false

    }
  };

  // TODO: Use useEffect to fetch weather on component mount
  useEffect(() => {


  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-md">
      <h3 className="text-2xl font-bold text-gray-800">Weather Widget</h3>

      <div className="flex gap-2 w-full">
        {/* TODO: Connect input to city state */}
        <input
          type="text"
          value=""
          onChange={(e) => {}}
          className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg"
          placeholder="Enter city"
        />
        {/* TODO: Call fetchWeather on click, disable when loading */}
        <button
          onClick={() => {}}
          disabled={false}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white rounded-lg"
        >
          Get Weather
        </button>
      </div>

      {/* TODO: Only render weather card if weather data exists */}
      {false && (
        <div className="w-full p-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg text-white">
          <h4 className="text-3xl font-bold">{weather.city}</h4>
          <div className="text-6xl font-bold my-4">{weather.temperature}°C</div>
          <div className="text-xl">{weather.condition}</div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>Humidity: {weather.humidity}%</div>
            <div>Wind: {weather.windSpeed} km/h</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherWidget;
