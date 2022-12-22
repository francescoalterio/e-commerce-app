import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { useGetShoppingCart } from "../hooks/useGetShoppingCart";
import { ProductCard } from "../components/ProductCard";
import { COLORS } from "../../settings/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import { ShoppingCartStackNavigationProps } from "../Navigation";
import { getTotalPrice } from "../utils/getTotalPrice";
import { LinearGradient } from "expo-linear-gradient";

export function ShoppingCart({ navigation }: ShoppingCartStackNavigationProps) {
  const { products, getNewProducts } = useGetShoppingCart();
  const totalPrice = getTotalPrice(products);
  return (
    <View style={[styles.container]}>
      <LinearGradient
        colors={[COLORS.primaryGradient, COLORS.secondaryGradient]}
        style={styles.topBar}
      >
        <TouchableOpacity
          style={styles.goBack}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name={"left"} size={25} color={COLORS.backgroundWhite} />
        </TouchableOpacity>
        <Text style={styles.title}>Shopping Cart</Text>
        <Text style={styles.totalPrice}>
          Total:{" "}
          <Text style={[styles.totalPrice, { fontWeight: "bold" }]}>
            $ {totalPrice}
          </Text>
        </Text>
        <TouchableOpacity style={styles.btnBuy}>
          <Text style={{ color: COLORS.primary, fontWeight: "bold" }}>
            Proceed to payment
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      <ScrollView style={[styles.container]}>
        <View style={{ paddingHorizontal: 25, paddingVertical: 25 }}>
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
              key={item.id}
              createdAt={item.createdAt}
              type="cart"
              cartAmount={item.amount}
              getNewProducts={getNewProducts}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundWhite,
  },
  goBack: {
    position: "absolute",
    top: Constants.statusBarHeight + 20,
    left: 20,
  },
  topBar: {
    width: "100%",
    paddingHorizontal: 25,
    paddingTop: Constants.statusBarHeight + 20,
    paddingBottom: 20,
    backgroundColor: COLORS.primary,
    alignItems: "center",
  },
  title: {
    color: COLORS.backgroundWhite,
    fontWeight: "bold",
    fontSize: 20,
  },
  totalPrice: {
    width: "100%",
    textAlign: "left",
    marginTop: 15,
    fontSize: 20,
    color: COLORS.backgroundWhite,
  },
  btnBuy: {
    width: "100%",
    alignItems: "center",
    backgroundColor: COLORS.backgroundWhite,
    borderRadius: 5,
    paddingVertical: 7,
    marginTop: 15,
  },
});
