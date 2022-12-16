import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS } from "../../settings/colors";

interface Props {
  id: string;
  name: string;
  imgURL: string;
  backgroundColor: string;
  textColor: string;
  imageSize: number;
  shadow?: boolean;
}

export function CategoryCard({
  id,
  name,
  imgURL,
  backgroundColor,
  textColor,
  imageSize,
  shadow,
}: Props) {
  const needShadow = shadow && { shadowColor: "#000000", elevation: 5 };

  return (
    <TouchableOpacity style={[styles.container]}>
      <View style={[styles.imageContainer, needShadow]}>
        <Image
          style={[
            {
              width: imageSize,
              height: imageSize,
            },
          ]}
          source={{
            uri: imgURL,
          }}
        />
      </View>
      <Text
        style={[
          {
            color: textColor,
            textAlign: "center",
            fontSize: 10,
            marginTop: 5,
            fontWeight: "bold",
          },
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
    marginTop: 5,
  },
  imageContainer: {
    padding: 10,
    backgroundColor: COLORS.backgroundWhite,
    borderRadius: 15,

    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
});
