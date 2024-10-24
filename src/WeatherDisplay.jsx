import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  const { location, current } = weatherData;

  return (
    <div>
      <h2>Weather in {location.name}, {location.country}</h2>
      <p>Temperature: {current.temperature}°C</p>
      <p>Weather Condition: {current.weather_descriptions[0]}</p>
      <img src={current.weather_icons[0]} alt="Weather Icon" />
    </div>
  );
};

export default WeatherDisplay;
