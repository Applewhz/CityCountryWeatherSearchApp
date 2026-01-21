import "./DisplayCurrentWeather.css";
import cloudImage from "../../assets/cloud.png";
import sunImage from "../../assets/sun.png";
import SearchHistoryTable from "../searchHistoryTable/SearchHistoryTable";

const DisplayCurrentWeather = ({ weather }) => {
   return (
      <div className="DisplayCurrentWeather">
         <div className="HeaderWeatherInfomation">
            <div style={{ marginBottom: "10px", marginTop: "46px" }}>
               <p className="MainTemperatureHeader">Today's Weather</p>
               {weather && (
                  <p className="MainTemperature">
                     {weather.mainTemp.toFixed(1)}°
                  </p>
               )}
               {weather && (
                  <p className="MaxMinTemperature">
                     H: {weather.tempMax.toFixed(1)}° L:{" "}
                     {weather.tempMin.toFixed(1)}°
                  </p>
               )}
            </div>

            <img
               className="WeatherIcon"
               src={weather?.weatherType === "Clouds" ? cloudImage : sunImage}
               alt=""
            />
         </div>

         {weather && (
            <div className="localCountryInformationBar">
               <p style={{ fontWeight: "bold" }}>
                  {weather.city}, {weather.country}
               </p>
               <p>
                  {weather.date} {weather.time}
               </p>
               <p>Humidity: {weather.humidity}%</p>
               <p>{weather.weatherType}</p>
            </div>
         )}

         <SearchHistoryTable />
      </div>
   );
};

export default DisplayCurrentWeather;
