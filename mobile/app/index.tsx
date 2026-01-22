import {
   ScrollView,
   StyleSheet,
   ImageBackground,
   View,
   Text,
} from "react-native";
import { useColorScheme } from "@/hooks/use-color-scheme";
import SearchBar from "@/components/SearchBar";
import MainWeatherInformationCard from "@/components/MainWeatherInformationCard";
import { getCurrentWeather } from "../../shared/api/weather";
import { useEffect, useState } from "react";
import { formatWeatherResponse } from "../../shared/util/formatWeatherResponse";
import { FormattedWeather, WeatherHistoryItem } from "@/types/weather";
import AsyncStorage from "@react-native-async-storage/async-storage";

const generateId = () =>
   `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

const HomeScreen = () => {
   const colorScheme = useColorScheme();
   const bg =
      colorScheme === "dark"
         ? require("../assets/bg-dark.png")
         : require("../assets/bg-light.png");

   const [weather, setWeather] = useState<FormattedWeather | null | undefined>(
      null,
   );
   const [history, setHistory] = useState<WeatherHistoryItem[]>([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      AsyncStorage.getItem("weather_history").then((value) => {
         if (value) setHistory(JSON.parse(value));
      });
   }, []);

   useEffect(() => {
      AsyncStorage.setItem("weather_history", JSON.stringify(history));
   }, [history]);

   const fetchWeather = async (query: string) => {
      try {
         setLoading(true);
         setError(null);

         const data = await getCurrentWeather(query);
         const formatted = formatWeatherResponse(data);

         setWeather(formatted);

         const historyItem = {
            id: generateId(),
            city: formatted.city,
            country: formatted.country,
            date: formatted.date,
            time: formatted.time,
         };

         setHistory((prev) => {
            const filtered = prev.filter(
               (item) =>
                  item.city !== historyItem.city ||
                  item.country !== historyItem.country,
            );
            return [historyItem, ...filtered];
         });
      } catch {
         setError("Country/City not found. Please try again.");
      } finally {
         setLoading(false);
      }
   };

   return (
      <ImageBackground source={bg} style={styles.container}>
         <ScrollView
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
         >
            <SearchBar onSearch={fetchWeather} />
            {loading && (
               <View style={styles.container}>
                  <Text style={styles.statusText}>Loading weather…</Text>
               </View>
            )}
            {!loading && error && (
               <View style={styles.container}>
                  <Text style={styles.errorText}>{error}</Text>
               </View>
            )}

            <MainWeatherInformationCard
               weather={weather}
               history={history}
               onSearch={fetchWeather}
               onDelete={(id) =>
                  setHistory((prev) => prev.filter((item) => item.id !== id))
               }
            />
         </ScrollView>
      </ImageBackground>
   );
};

export default HomeScreen;
const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   content: {
      paddingHorizontal: 20,
      paddingTop: 60,
      paddingBottom: 40,
   },
   statusText: {
      textAlign: "center",
      opacity: 0.7,
   },

   errorText: {
      textAlign: "center",
      color: "#d33",
   },
});
