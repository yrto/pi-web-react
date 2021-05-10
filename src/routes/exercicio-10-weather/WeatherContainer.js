import React from "react";
import WeatherCard from "./WeatherCard";
import "./Weather.css";

const WeatherContainer = () => {
  //
  const cityList = [
    "sao bernardo",
    "wuhan",
    "aracariguama",
    "tokyo",
    "garca",
    "shenzhen",
  ];

  return (
    <ul className="weather-cards-list">
      {cityList.map((city) => (
        <WeatherCard key={city} city={city} />
      ))}
    </ul>
  );
};

export default WeatherContainer;
