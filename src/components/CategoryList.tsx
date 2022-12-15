import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { CategoryCard } from "./CategoryCard";
import { Category } from "../types/Category";

interface Props {
  data: Category[];
  categoryColor: string;
  imageSize: number;
  textColor: string;
}

export function CategoryList({
  data,
  categoryColor,
  imageSize,
  textColor,
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
    height: 90,
    marginHorizontal: -15,
  },
});
