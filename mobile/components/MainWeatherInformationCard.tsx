import { View, Text, StyleSheet, Image } from "react-native";
import SearchHistory from "./SearchHistory";

type Props = {
   weather: any;
   history: any[];
   onSearch: (query: string) => void;
   onDelete: (id: string) => void;
};

const MainWeatherInformationCard = ({
   weather,
   history,
   onSearch,
   onDelete,
}: Props) => {
   const icon =
      weather && weather?.weatherType === "Clouds"
         ? require("../assets/cloud.png")
         : require("../assets/sun.png");

   return (
      <View style={styles.container}>
         <View style={styles.weatherRow}>
            <View style={styles.left}>
               <Text style={styles.title}>Today’s Weather</Text>
               {weather && (
                  <>
                     <Text style={styles.temp}>
                        {Math.round(weather.mainTemp)}°
                     </Text>
                     <Text style={styles.sub}>
                        H: {Math.round(weather.tempMax)}° · L:{" "}
                        {Math.round(weather.tempMin)}°
                     </Text>
                     <Text style={styles.location}>
                        {weather.city}, {weather.country}
                     </Text>
                  </>
               )}
            </View>

            <View style={styles.right}>
               {weather && (
                  <>
                     <Text style={styles.meta}>{weather.weatherType}</Text>
                     <Text style={styles.meta}>
                        Humidity: {weather.humidity}%
                     </Text>
                     <Text style={styles.datetime}>
                        {weather.date} {weather.time}
                     </Text>
                  </>
               )}
            </View>
         </View>

         <Image source={icon} style={styles.icon} />
         <View style={styles.historyPanel}>
            <Text style={styles.sectionTitle}>Search History</Text>
            <SearchHistory
               history={history}
               onSearch={onSearch}
               onDelete={onDelete}
            />
         </View>
      </View>
   );
};

export default MainWeatherInformationCard;

const styles = StyleSheet.create({
   container: {
      backgroundColor: "rgba(255,255,255,0.32)",
      borderRadius: 32,
      padding: 22,
      marginBottom: 28,
      marginTop: 80,
   },

   weatherRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 26,
   },

   left: {
      maxWidth: "60%",
   },

   right: {
      alignItems: "flex-end",
      paddingTop: 12,
   },

   title: {
      fontSize: 16,
      fontWeight: "bold",
      opacity: 0.75,
   },

   temp: {
      fontSize: 62,
      fontWeight: "800",
      color: "#5b4ae3",
   },

   sub: {
      fontSize: 14,
      opacity: 0.75,
      marginBottom: 4,
   },

   location: {
      fontSize: 16,
      fontWeight: "700",
   },

   meta: {
      fontSize: 13,
      opacity: 0.7,
      lineHeight: 18,
   },

   datetime: {
      fontSize: 12,
      opacity: 0.6,
      marginTop: 4,
   },

   icon: {
      position: "absolute",
      right: -12,
      top: -80,
      width: 220,
      height: 200,
      opacity: 0.8,
   },

   historyPanel: {
      backgroundColor: "rgba(255,255,255,0.28)",
      borderRadius: 24,
      padding: 16,
   },

   sectionTitle: {
      fontSize: 16,
      fontWeight: "700",
      marginBottom: 14,
   },
});
