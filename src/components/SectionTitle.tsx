import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../settings/colors";

interface Props {
  content: string;
  children?: React.ReactNode;
}

export const SectionTitle = ({ content, children }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{content}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: COLORS.black,
  },
});
