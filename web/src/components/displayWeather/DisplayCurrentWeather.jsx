import "./DisplayCurrentWeather.css";
import { useEffect, useState } from "react";
import cloudImage from "../../assets/cloud.png";
import sunImage from "../../assets/sun.png";

const DisplayCurrentWeather = ({ weather }) => {
   if (!weather) return null;

   console.log(weather);
   return (
      <div className="DisplayCurrentWeather">
         <div className="HeaderWeatherInfomation">
            <div style={{ marginBottom: "10px" }}>
               <h3 style={{ marginBottom: "18px" }}>Today's Weather</h3>
               <h1>{weather.mainTemp.toFixed(1)}°</h1>
               <p style={{ fontWeight: "bold" }}>
                  H: {weather.tempMax.toFixed(1)} L:{" "}
                  {weather.tempMin.toFixed(1)}
               </p>
            </div>

            <img
               className="WeatherIcon"
               src={weather.weatherType === "Clouds" ? cloudImage : sunImage}
               alt=""
            />
         </div>

         <div className="localCountryInformationBar">
            <p>
               {weather.city}, {weather.country}
            </p>
            <p>
               {weather.date} {weather.time}
            </p>
            <p>Humidity: {weather.humidity}%</p>
            <p>{weather.weatherType}</p>
         </div>

         {/* SearchHistoryTable will come later */}
         {/* <SearchHistoryTable /> */}
      </div>
   );
};

export default DisplayCurrentWeather;
