import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DisplayCurrentWeather from "../../components/displayWeather/DisplayCurrentWeather";
import { fetchWeather } from "../../store/weatherSlice";
import {
   selectWeatherData,
   selectWeatherStatus,
   selectWeatherError,
} from "../../store/weatherSlice";
import "./WeatherPage.css";

const WeatherPage = () => {
   const dispatch = useDispatch();

   const weather = useSelector(selectWeatherData);
   const status = useSelector(selectWeatherStatus);
   const error = useSelector(selectWeatherError);

   useEffect(() => {
      dispatch(fetchWeather({ cityCountryName: "Singapore" }));
   }, [dispatch]);

   if (status === "loading") return <p>Loading weather...</p>;
   if (status === "failed")
      return (
         <p style={{ color: "maroon" }}>
            {error || "Country/City entered is not found! Please try again!"}
         </p>
      );

   return (
      <div className="WeatherPage">
         <DisplayCurrentWeather weather={weather} />
      </div>
   );
};

export default WeatherPage;
