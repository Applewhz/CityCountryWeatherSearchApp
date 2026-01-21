const BASE_URL = "https://api.openweathermap.org/data/2.5";
// Please create a .env file in web folder and add in your API key (e.g. VITE_OPENWEATHER_API_KEY=<your_key_here> )
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY; // To be kept in .env file ( Never here for security )

export const requestBaseURL = async (url) => {
   const response = await fetch(
      `${BASE_URL}${url}&appid=${API_KEY}&units=metric`,
   );

   if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
   }

   return response.json();
};
