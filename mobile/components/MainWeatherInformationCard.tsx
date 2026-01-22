import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";

type Props = {
   weather: any;
   loading: boolean;
   error: string | null;
};
const MainWeatherInformationCard = ({ weather, loading, error }: Props) => {
   if (loading) {
      return (
         <View style={styles.card}>
            <Text>Loading weather...</Text>
         </View>
      );
   }

   if (error) {
      return (
         <View style={styles.card}>
            <Text>{error}</Text>
         </View>
      );
   }

   if (!weather) return null;
   const hasData = !!weather;

   // Choose icon (simple version for now)
   const weatherType = weather?.weather?.[0]?.main;
   const icon =
      weatherType === "Clouds"
         ? require("../assets/cloud.png")
         : require("../assets/sun.png");

   return (
      <View style={styles.card}>
         <Text style={styles.title}>Today's Weather</Text>

         <Text style={styles.temp}>{Math.round(weather.mainTemp)}°</Text>

         <Text style={styles.sub}>
            H: {Math.round(weather.tempMax)}° L: {Math.round(weather.tempMin)}°
         </Text>

         <View style={styles.row}>
            <Text style={styles.meta}>
               {weather.city}, {weather.country}
            </Text>
            <Text style={styles.meta}>Humidity: {weather.humidity}%</Text>
         </View>

         <Image source={require("../assets/cloud.png")} style={styles.icon} />
      </View>
   );
};

export default MainWeatherInformationCard;
const styles = StyleSheet.create({
   card: {
      backgroundColor: "rgba(255,255,255,0.35)",
      borderRadius: 24,
      padding: 20,
      marginBottom: 24,
   },
   title: {
      fontSize: 14,
      marginBottom: 8,
   },
   temp: {
      fontSize: 48,
      fontWeight: "700",
   },
   sub: {
      marginTop: 4,
      marginBottom: 12,
   },
   row: {
      flexDirection: "row",
      justifyContent: "space-between",
   },
   meta: {
      fontSize: 12,
   },
   icon: {
      position: "absolute",
      right: 16,
      top: 16,
      width: 80,
      height: 80,
      opacity: 0.9,
   },
});
