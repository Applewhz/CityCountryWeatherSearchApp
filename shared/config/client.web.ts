const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

if (!API_KEY) {
   throw new Error("VITE_OPENWEATHER_API_KEY is missing");
}

export const OPEN_WEATHER_API_KEY = API_KEY;
