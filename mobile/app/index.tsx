import { View, StyleSheet, ImageBackground } from "react-native";
import { useColorScheme } from "@/hooks/use-color-scheme";
import SearchBar from "@/components/SearchBar";
import MainWeatherInformationCard from "@/components/MainWeatherInformationCard";
import { getCurrentWeather } from "../../shared/api/weather";
import { useEffect, useState } from "react";
import { formatWeatherResponse } from "../../shared/util/formatWeatherResponse";
import { FormattedWeather } from "@/types/weather";

const HomeScreen = () => {
   const colorScheme = useColorScheme();
   const bg =
      colorScheme === "dark"
         ? require("../assets/bg-dark.png")
         : require("../assets/bg-light.png");

   const [weather, setWeather] = useState<FormattedWeather | null | undefined>(
      null,
   );
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      getCurrentWeather("Singapore")
         .then((res) => setWeather(formatWeatherResponse(res)))
         .catch(setError)
         .finally(() => setLoading(false));
   }, []);

   const fetchWeather = async (query: string) => {
      try {
         setLoading(true);
         setError(null);

         const data = await getCurrentWeather(query);
         setWeather(formatWeatherResponse(data));
      } catch (e) {
         setError("Country / City not found");
      } finally {
         setLoading(false);
      }
   };
   return (
      <ImageBackground source={bg} style={styles.container}>
         <View style={styles.content}>
            <SearchBar onSearch={fetchWeather} />
            <MainWeatherInformationCard
               weather={weather}
               loading={loading}
               error={error}
            />
            {/* SearchHistory (next) */}
         </View>
      </ImageBackground>
   );
};

export default HomeScreen;
const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   content: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 60,
   },
});
