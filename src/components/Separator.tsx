import { StyleSheet, Text, View } from "react-native";
import React from "react";

export function Separator() {
  return (
    <View style={styles.separator}>
      <Text>ERWEEEEE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    width: "150%",
    height: 1,
    backgroundColor: "#bdbdbd",
    marginVertical: 20,
  },
});
