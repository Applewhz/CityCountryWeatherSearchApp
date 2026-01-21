import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useEffect } from "react";
import DisplayCurrentWeather from "../../components/displayWeather/DisplayCurrentWeather";
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

   useEffect(() => {
      if (status === "failed") {
         error !== " HTTP error 404"
            ? toast.error("Country/City not found. Please try again.")
            : toast.error(
                 "An unexpected error occurred. Please try again later.",
              );
      }
   }, [status, error]);

   return (
      <div className="WeatherPage">
         <SearchBar />
         {/* Status messages */}
         {status === "loading" && (
            <p className="WeatherStatus">Loading weather...</p>
         )}
         <DisplayCurrentWeather weather={weather} />
      </div>
   );
};

export default WeatherPage;
