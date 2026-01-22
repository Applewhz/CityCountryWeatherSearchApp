import Constants from "expo-constants";

const API_KEY = Constants?.expoConfig?.extra?.OPENWEATHER_API_KEY;

if (!API_KEY) {
   throw new Error("OPENWEATHER_API_KEY is missing in Expo config");
}

export const OPEN_WEATHER_API_KEY = API_KEY;
