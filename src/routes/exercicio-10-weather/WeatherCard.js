import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

// const mockData = {
//   name: "São Paulo",
//   descricao: "chuva leve",
//   icon: "http://openweathermap.org/img/wn/10d@4x.png",
//   iconName: "Clouds",
//   tempMax: 20,
//   tempMin: 18,
//   aqi: 4,
// };

const fetchAirPollutionData = async (lat, lon) => {
  const airApiUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  const response = await fetch(airApiUrl);
  const newAirPollutionData = await response.json();
  return newAirPollutionData.list[0].main.aqi;
};

const formatWeatherData = async (data) => {
  const airQualityIndex = await fetchAirPollutionData(
    data.coord.lat,
    data.coord.lon
  );
  const newData = {
    name: data.name,
    descricao: data.weather[0].description,
    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
    iconName: data.weather[0].main,
    temp: Math.round(data.main.temp),
    tempMax: Math.round(data.main.temp_max),
    tempMin: Math.round(data.main.temp_min),
    aqi: airQualityIndex,
  };
  return newData;
};

const WeatherCard = ({ city }) => {
  //
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await fetch(apiUrl);
      let newWeatherData = await response.json();
      // console.log(newWeatherData);
      newWeatherData = await formatWeatherData(newWeatherData);
      setWeatherData(newWeatherData);
      console.log(newWeatherData);
    };
    fetchWeatherData();
  }, [apiUrl]);

  const [highlight, setHighlight] = useState(false);

  return (
    <li
      className={`card ${highlight ? "highlight" : "regular"}`}
      onClick={() => setHighlight(!highlight)}
    >
      {weatherData && (
        <>
          <div className="card-title">
            <h2>{weatherData.name}</h2>
          </div>
          <div className="card-info">
            <div className="numbers">
              <p className="main-temp">
                {weatherData.temp}
                <span>°C</span>
              </p>
              <div className="max-min">
                <div>
                  <FontAwesomeIcon icon={faArrowUp} className="icon" />
                  {weatherData.tempMax}
                </div>
                <div>
                  <FontAwesomeIcon icon={faArrowDown} className="icon" />
                  {weatherData.tempMin}
                </div>
              </div>
            </div>
            <img
              src={weatherData.icon}
              alt={weatherData.iconName}
              className="card-icon"
            />
          </div>
          {weatherData.aqi === 3 && (
            <p className="aqi aqi-3">Qualidade do ar ruim 😕</p>
          )}
          {weatherData.aqi === 4 && (
            <p className="aqi aqi-4">Qualidade do ar bem ruim 😰</p>
          )}
          {weatherData.aqi === 5 && (
            <p className="aqi aqi-5">Qualidade do ar péssima 💀</p>
          )}
        </>
      )}
    </li>
  );
};

/*

data.weather[0].main -> icone name
data.weather[0].icon -> icon
data.weather[0].description -> descricao
data.main.temp_max
data.main.temp_min
data.name -> nome

&lang=pt
&units=metric

*/

export default WeatherCard;
