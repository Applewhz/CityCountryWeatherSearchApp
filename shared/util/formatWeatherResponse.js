// Future Implementation: Install dateTime library for better date/time formatting ( Moment / dayjs)
// ** Did not implement to avoid extra complexity and maintain simplicity **
export const formatWeatherResponse = (weather) => {
   const now = new Date();

   const padZero = (value) => String(value).padStart(2, "0");

   const formatDate = (date) => {
      const day = padZero(date.getDate());
      const month = padZero(date.getMonth() + 1);
      const year = date.getFullYear();

      return `${day}-${month}-${year}`;
   };

   const formatTime = (date) => {
      let hours = date.getHours();
      const minutes = padZero(date.getMinutes());
      const period = hours >= 12 ? "PM" : "AM";

      hours = hours % 12 || 12;

      return `${padZero(hours)}:${minutes}${period}`;
   };
   return {
      city: weather.name,
      country: weather.sys.country,
      date: formatDate(now),
      time: formatTime(now),
      humidity: weather.main.humidity,
      weatherType: weather.weather[0].main,
      mainTemp: weather.main.temp,
      tempMin: weather.main.temp_min,
      tempMax: weather.main.temp_max,
   };
};
