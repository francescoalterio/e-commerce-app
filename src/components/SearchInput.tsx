import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { COLORS } from "../../settings/colors";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Props {
  children: React.ReactNode;
}

export function SearchInput({ children }: Props) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name={"search"} size={20} color={"gray"} />
        <TextInput
          style={styles.input}
          placeholder="Search for everything here"
        />
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: COLORS.white,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  input: {
    marginLeft: 5,
    color: "gray",
  },
});
