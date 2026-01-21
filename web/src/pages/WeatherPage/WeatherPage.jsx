import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DisplayCurrentWeather from "../../components/displayWeather/DisplayCurrentWeather";
import { fetchWeather } from "../../store/weatherSlice";
import {
   selectWeatherData,
   selectWeatherStatus,
   selectWeatherError,
} from "../../store/weatherSlice";
import SearchBar from "../../components/searchBar/SearchBar";
import "./WeatherPage.css";

const WeatherPage = () => {
   const weather = useSelector(selectWeatherData);
   const status = useSelector(selectWeatherStatus);
   const error = useSelector(selectWeatherError);

   console.log("Weather Error:", error);

   return (
      <div className="WeatherPage">
         <SearchBar />
         {/* Status messages */}
         {status === "loading" && (
            <p className="WeatherStatus">Loading weather...</p>
         )}

         {status === "failed" && (
            <p className="WeatherError">
               {"Country/City entered is not found! Please try again!"}
            </p>
         )}

         <DisplayCurrentWeather weather={weather} />
      </div>
   );
};

export default WeatherPage;
