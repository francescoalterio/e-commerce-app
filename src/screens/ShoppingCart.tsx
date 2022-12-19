import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useGetShoppingCart } from "../hooks/useGetShoppingCart";
import { ProductCard } from "../components/ProductCard";
import { COLORS } from "../../settings/colors";

export function ShoppingCart() {
  const { products } = useGetShoppingCart();
  return (
    <View style={styles.container}>
      <Text>ERWEEE</Text>
      {products.map((item) => (
        <ProductCard
          id={item.id}
          name={item.name}
          imgURL={item.imgURL}
          category={item.category}
          description={item.description}
          price={item.price}
          discountPrice={item.discountPrice}
          pieces={item.pieces}
          backgroundColor={COLORS.backgroundWhite}
          textColor={COLORS.black}
          key={item.id}
          createdAt={item.createdAt}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
