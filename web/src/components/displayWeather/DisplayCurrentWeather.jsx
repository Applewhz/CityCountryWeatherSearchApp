import "./DisplayCurrentWeather.css";
import { useEffect, useState } from "react";
import cloudImage from "../../assets/cloud.png";
import sunImage from "../../assets/sun.png";

const DisplayCurrentWeather = ({ weather }) => {
   if (!weather) return null;

   return (
      <div className="DisplayCurrentWeather">
         <div className="HeaderWeatherInfomation">
            <div style={{ marginBottom: "10px" }}>
               <h3 style={{ marginBottom: "18px" }}>Today's Weather</h3>
               <h1>{weather.main.temp.toFixed(1)}°</h1>
               <p style={{ fontWeight: "bold" }}>
                  H: {weather.main.temp_max.toFixed(1)} L:{" "}
                  {weather.main.temp_min.toFixed(1)}
               </p>
            </div>

            <img
               className="WeatherIcon"
               src={
                  weather.weather[0].main === "Clouds" ? cloudImage : sunImage
               }
               alt=""
            />
         </div>

         <div className="localCountryInformationBar">
            <p>
               {weather.name}, {weather.sys.country}
            </p>
            <p>{weather.main.humidity}%</p>
            <p>{weather.weather[0].main}</p>
         </div>

         {/* SearchHistoryTable will come later */}
         {/* <SearchHistoryTable /> */}
      </div>
   );
};

export default DisplayCurrentWeather;
