import { OPEN_WEATHER_API_KEY } from "../config/client";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const API_KEY = OPEN_WEATHER_API_KEY; // To be kept in .env file ( Never here for security )

export const requestBaseURL = async (url) => {
   const response = await fetch(
      `${BASE_URL}${url}&appid=${API_KEY}&units=metric`,
   );

   if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
   }

   return response.json();
};
