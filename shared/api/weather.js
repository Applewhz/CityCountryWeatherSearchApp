import { requestBaseURL } from "./client";

export const getCurrentWeather = (countryCityName) => {
   return requestBaseURL(`/weather?q=${countryCityName}`);
};
