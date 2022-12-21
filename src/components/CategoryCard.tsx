import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS } from "../../settings/colors";
import { toCapitalize } from "../utils/toCapitalize";
import { useNavigation } from "@react-navigation/native";

interface Props {
  id: string;
  name: string;
  imgURL: string;
  backgroundColor: string;
  textColor: string;
  imageSize: number;
  shadow?: boolean;
  searchText: string;
  categorySelected?: string;
}

export function CategoryCard({
  id,
  name,
  imgURL,
  backgroundColor,
  textColor,
  imageSize,
  shadow,
  searchText,
  categorySelected,
}: Props) {
  const navigation = useNavigation<any>();

  const needShadow = shadow && { shadowColor: "#000000", elevation: 5 };
  const capitalizeName = toCapitalize(name);

  const searchWithCategory = () => {
    if (categorySelected === name) {
      navigation.navigate("Search", {
        searchText: searchText,
        category: "",
      });
    } else {
      navigation.navigate("Search", {
        searchText: searchText,
        category: name,
      });
    }
  };

  console.log(categorySelected, name);

  const sizeIsSelected =
    categorySelected === name ? { backgroundColor: COLORS.primaryLight } : {};

  return (
    <TouchableOpacity onPress={searchWithCategory} style={[styles.container]}>
      <View style={[styles.imageContainer, needShadow, sizeIsSelected]}>
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
        {capitalizeName}
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
