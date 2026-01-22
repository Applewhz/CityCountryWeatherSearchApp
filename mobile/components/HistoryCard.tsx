import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
   id: string;
   city: string;
   country: string;
   date: string;
   time: string;
   onSearch: (query: string) => void;
   onDelete: (id: string) => void;
};

const HistoryCard = ({
   id,
   city,
   country,
   date,
   time,
   onSearch,
   onDelete,
}: Props) => {
   return (
      <View style={styles.card}>
         <View style={styles.left}>
            <Text style={styles.location}>
               {city}, {country}
            </Text>
            <View style={styles.leftBottom}>
               <Text style={styles.meta}>{date}</Text>
               <Text style={styles.meta}>{time}</Text>
            </View>
         </View>

         <View style={styles.right}>
            <TouchableOpacity
               onPress={() => onSearch(`${city}`)}
               style={styles.iconBtn}
            >
               <Ionicons name="search" size={18} color="#333" />
            </TouchableOpacity>

            <TouchableOpacity
               onPress={() => onDelete(id)}
               style={styles.iconBtn}
            >
               <Ionicons name="trash" size={18} color="#cc3333" />
            </TouchableOpacity>
         </View>
      </View>
   );
};

export default HistoryCard;

const styles = StyleSheet.create({
   card: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "rgba(255,255,255,0.6)",
      borderRadius: 16,
      paddingHorizontal: 16,
      paddingVertical: 12,
      marginBottom: 10,
   },
   location: {
      fontSize: 14,
      fontWeight: "500",
   },
   left: {
      flexDirection: "column",
      alignItems: "flex-start",
   },
   leftBottom: {
      flexDirection: "row",
      marginTop: 6,
   },
   right: {
      flexDirection: "row",
      alignItems: "center",
   },
   meta: {
      fontSize: 12,
      marginRight: 5,
      color: "#555",
   },
   iconBtn: {
      marginLeft: 8,
   },
});
