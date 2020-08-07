import React, { useState, useEffect } from "react";
import axios from "axios";
const CapitalWeather = ({ capital }) => {
    const apiKey = process.env.REACT_APP_API_KEY; //replace with your own key
    const baseUrl = "http://api.weatherstack.com";

    const makeCityRequestUrl = (city) =>
        `${baseUrl}/current?access_key=${apiKey}&query=${city}`;
    const [weatherData, setWeatherData] = useState({});
    const getCurrentWeather = () => {
        const weather = axios.get(makeCityRequestUrl(capital)).then((res) =>
            setWeatherData({
                temperature: res.data.current.temperature,
                weather_icons: res.data.current.weather_icons,
                wind_speed: res.data.current.wind_speed,
                wind_dir: res.data.current.wind_dir,
            })
        );
    };
    useEffect(getCurrentWeather, []);
    return (
        <>
            <h2>{capital}</h2>
            <div>Temperature:{weatherData.temperature}</div>
            <div>
                <img src={weatherData.weather_icons} alt="weather icon" />
            </div>
            <div>
                Wind:{weatherData.wind_speed} {weatherData.wind_dir}
            </div>
        </>
    );
};
export default CapitalWeather;
