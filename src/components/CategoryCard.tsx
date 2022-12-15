import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

interface Props {
  id: string;
  name: string;
  imgURL: string;
  backgroundColor: string;
  textColor: string;
  imageSize: number;
}

export function CategoryCard({
  id,
  name,
  imgURL,
  backgroundColor,
  textColor,
  imageSize,
}: Props) {
  return (
    <TouchableOpacity style={[styles.container]}>
      <Image
        style={[
          styles.image,
          {
            width: imageSize,
            height: imageSize,
            backgroundColor,
            borderRadius: 15,
          },
        ]}
        source={{
          uri: imgURL,
        }}
      />
      <Text
        style={[
          { color: textColor, textAlign: "center", fontSize: 10, marginTop: 5 },
        ]}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    marginHorizontal: 15,
    alignItems: "center",
  },
  image: {},
});
