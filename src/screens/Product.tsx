import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { ProductStackNavigationProps } from "../Navigation";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../settings/colors";
import { TopBar } from "../components/TopBar";
import { useWindowDimensions } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";
import { addProductToShoppingCart } from "../utils/addProductToShoppingCart";
import { toCapitalize } from "../utils/toCapitalize";
import MaterialComunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export function Product({ route }: ProductStackNavigationProps) {
  const { width } = useWindowDimensions();
  const [counter, setCounter] = useState<number>(1);
  const {
    id,
    name,
    imgURL,
    category,
    description,
    price,
    discountPrice,
    pieces,
  } = route.params.product;

  const addProductToCart = async () => {
    await addProductToShoppingCart(route.params.product, counter);
  };
  return (
    <LinearGradient
      colors={[COLORS.primaryGradient, COLORS.secondaryGradient]}
      style={styles.container}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.imageContainer}>
        <TopBar />
        <View style={{ alignItems: "center" }}>
          <Image
            source={{
              uri: imgURL,
            }}
            style={[{ width: width * 0.55, height: width * 0.55 }]}
          />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.category}>{toCapitalize(category)}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>
          $ {discountPrice || price}{" "}
          <Text style={styles.pieces}>// {pieces} pieces</Text>
        </Text>
        {discountPrice ? (
          <View>
            <View style={styles.lineRealPrice} />
            <Text style={styles.realPrice}>$ {price}</Text>
          </View>
        ) : null}
        <ScrollView>
          <Text style={styles.description}>{description}</Text>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <View style={styles.counterContainer}>
            <TouchableOpacity
              style={styles.btnActionCounter}
              onPress={() => counter > 1 && setCounter(counter - 1)}
            >
              <MaterialComunityIcons
                name={"minus"}
                size={20}
                color={COLORS.black}
              />
            </TouchableOpacity>
            <Text style={styles.counter}>{counter}</Text>
            <TouchableOpacity
              style={styles.btnActionCounter}
              onPress={() => setCounter(counter + 1)}
            >
              <MaterialComunityIcons
                name={"plus"}
                size={20}
                color={COLORS.black}
              />
            </TouchableOpacity>
          </View>
          <PrimaryButton
            content="Add to Cart"
            rounded="corners"
            flex
            size="large"
            onPress={addProductToCart}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  imageContainer: {
    flex: 9,
    paddingHorizontal: 25,
  },
  infoContainer: {
    flex: 12,
    backgroundColor: COLORS.backgroundWhite,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
  },
  counterContainer: {
    flexDirection: "row",
  },
  counter: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "#ebebeb",
    textAlignVertical: "center",
    paddingHorizontal: 15,
    borderRadius: 5,
    color: COLORS.black,
  },
  btnActionCounter: {
    padding: 10,
    marginRight: 10,
  },
  category: {
    color: COLORS.gray,
    fontWeight: "bold",
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },
  price: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
  pieces: {
    color: COLORS.lightGray,
    fontSize: 15,
    marginTop: 10,
  },
  realPrice: {
    color: COLORS.lightGray,
    fontSize: 17,
    fontWeight: "bold",
  },
  lineRealPrice: {
    height: 1,
    width: 70,
    backgroundColor: COLORS.lightGray,
    position: "absolute",
    top: 12,
  },
  description: {
    color: COLORS.gray,
    fontWeight: "bold",
    flex: 1,
    marginTop: 10,
  },
});
