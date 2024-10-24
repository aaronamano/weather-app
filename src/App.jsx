import React, { useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherDisplay from './WeatherDisplay';
import "./index.css"

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  // Fetch weather data from Weatherstack
  const fetchWeather = async (city) => {
    const API_KEY = import.meta.env.VITE_WEATHERSTACK_API_KEY;
    const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error.info); // Handle errors from the API
      }
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherForm fetchWeather={fetchWeather} />
      {error && <p>{error}</p>}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
};

export default App;
