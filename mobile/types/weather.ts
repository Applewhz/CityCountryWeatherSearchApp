export type FormattedWeather = {
   city: string;
   country: string;
   date: string;
   time: string;
   humidity: number;
   weatherType: string;
   mainTemp: number;
   tempMin: number;
   tempMax: number;
};

export type WeatherHistoryItem = {
   id: string;
   city: string;
   country: string;
   date: string;
   time: string;
};
