import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { CategoryCard } from "./CategoryCard";
import { Category } from "../types/Category";

interface Props {
  data: Category[];
  categoryColor: string;
  imageSize: number;
  textColor: string;
  shadow?: boolean;
}

export function CategoryList({
  data,
  categoryColor,
  imageSize,
  textColor,
  shadow,
}: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CategoryCard
            id={item.id}
            name={item.name}
            imgURL={item.imgURL}
            backgroundColor={categoryColor}
            textColor={textColor}
            imageSize={imageSize}
            shadow={shadow}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginHorizontal: -15,
  },
});
