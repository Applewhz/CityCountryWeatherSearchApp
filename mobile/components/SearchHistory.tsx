import { View, Text, StyleSheet } from "react-native";
import HistoryCard from "./HistoryCard";

type Props = {
   history: any[];
   onSearch: (query: string) => void;
   onDelete: (id: string) => void;
};

const SearchHistory = ({ history, onSearch, onDelete }: Props) => {
   if (history.length === 0) {
      return <Text style={styles.empty}>Your Search History is Empty</Text>;
   }

   return (
      <View>
         {history.map((item) => (
            <HistoryCard
               key={item.id}
               item={item}
               onSearch={onSearch}
               onDelete={onDelete}
            />
         ))}
      </View>
   );
};

export default SearchHistory;

const styles = StyleSheet.create({
   title: {
      fontSize: 14,
      fontWeight: "600",
      marginBottom: 10,
   },
   empty: {
      textAlign: "center",
      opacity: 0.6,
      marginTop: 20,
   },
});
