import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

type Props = {
   onSearch: (query: string) => void;
};

const SearchBar = ({ onSearch }: Props) => {
   const [value, setValue] = useState("");
   const triggerSearch = () => {
      const trimmed = value.trim();
      if (!trimmed) return;

      onSearch(trimmed);
      setValue("");
   };

   return (
      <View style={styles.container}>
         <TextInput
            placeholder="Enter Country / City ..."
            placeholderTextColor="#888"
            style={styles.input}
            value={value}
            onChangeText={setValue}
            returnKeyType="search"
            onSubmitEditing={triggerSearch}
         />
         <TouchableOpacity style={styles.button} onPress={triggerSearch}>
            <Ionicons name="search" size={20} color="white" />
         </TouchableOpacity>
      </View>
   );
};

export default SearchBar;
const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
   },
   input: {
      flex: 1,
      backgroundColor: "rgba(255,255,255,0.7)",
      borderRadius: 24,
      paddingHorizontal: 16,
      paddingVertical: 12,
      marginRight: 10,
   },
   button: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: "#6c4ed9",
      alignItems: "center",
      justifyContent: "center",
   },
});
