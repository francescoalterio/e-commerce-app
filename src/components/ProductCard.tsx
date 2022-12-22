import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import MaterialComunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { PrimaryButton } from "./PrimaryButton";
import { COLORS } from "../../settings/colors";
import { CartProduct, Product } from "../types/Product";
import { setLocalStorageData } from "../utils/setLocalStorageData";
import { isInShoppingCart } from "../utils/isInShoppingCart";
import { setProductAmountInCart } from "../utils/setProductAmountInCart";
import { useNavigation } from "@react-navigation/native";

interface Props {
  id: string;
  name: string;
  imgURL: string;
  category: string;
  description: string;
  price: number;
  discountPrice: number;
  pieces: number;
  backgroundColor?: string;
  textColor?: string;
  createdAt: Date;
  type: "normal" | "cart";
  cartAmount?: number;
  getNewProducts?: () => void;
}

export function ProductCard({
  id,
  name,
  imgURL,
  category,
  description,
  price,
  discountPrice,
  pieces,
  backgroundColor,
  createdAt,
  type,
  cartAmount,
  getNewProducts,
}: Props) {
  const navigation = useNavigation<any>();

  const addProductToShoppingCart = async () => {
    const isInCart = await isInShoppingCart(id);
    if (isInCart) {
      await setProductAmountInCart(id, "increment");
      return;
    }

    const product: CartProduct = {
      id,
      name,
      imgURL,
      category,
      description,
      price,
      discountPrice,
      pieces,
      createdAt,
      amount: 1,
    };

    setLocalStorageData("ShoppingCart", product);
  };

  const removeProductToShoppingCart = async () => {
    await setProductAmountInCart(id, "decrement");
    if (getNewProducts) getNewProducts();
  };

  const goToProductScreen = () => {
    const product: Product = {
      id,
      name,
      imgURL,
      category,
      description,
      price,
      discountPrice,
      pieces,
      createdAt,
    };

    navigation.navigate("Product", { product });
  };

  return (
    <TouchableOpacity
      onPress={goToProductScreen}
      style={[styles.container, { backgroundColor }]}
    >
      <Image
        style={[styles.image]}
        source={{
          uri: imgURL,
        }}
      />
      <View style={[styles.textContainer]}>
        <Text style={styles.productName}>{name}</Text>
      </View>
      <View
        style={[styles.textContainer, { marginTop: 10, alignItems: "center" }]}
      >
        <Text style={styles.productPrice}>$ {discountPrice || price}</Text>
        <Text style={styles.productPieces}> // {pieces} pack</Text>
      </View>
      <View style={[styles.textContainer, { marginTop: 5 }]}>
        {discountPrice !== 0 && <View style={styles.discountLine} />}
        {discountPrice !== 0 ? (
          <Text style={styles.productDiscount}>$ {price}</Text>
        ) : (
          <Text> </Text>
        )}
      </View>
      <View style={[styles.textContainer, { height: 35, marginTop: 5 }]}>
        <Text style={{ color: "gray" }}>{description}</Text>
      </View>
      <View style={[styles.textContainer, { marginTop: 10 }]}>
        {type === "normal" ? (
          <>
            <PrimaryButton
              content="Buy Now"
              rounded="corners"
              flex
              size="large"
              onPress={() => {}}
            />
            <TouchableOpacity
              onPress={addProductToShoppingCart}
              style={styles.addToCart}
            >
              <MaterialComunityIcons
                name={"plus"}
                size={27}
                color={COLORS.black}
              />
            </TouchableOpacity>
          </>
        ) : (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ fontSize: 20 }}>
                Amount: <Text style={{ fontWeight: "bold" }}>{cartAmount}</Text>
              </Text>
            </View>
            <TouchableOpacity
              onPress={removeProductToShoppingCart}
              style={[styles.addToCart, { backgroundColor: COLORS.danger }]}
            >
              <MaterialComunityIcons
                name={"minus"}
                size={27}
                color={COLORS.backgroundWhite}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: "2%",
    borderRadius: 15,
    width: "96%",
    alignItems: "center",
    shadowColor: "#000000",
    elevation: 10,
    marginVertical: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  textContainer: {
    width: "100%",
    flexDirection: "row",
  },
  productName: {
    fontSize: 18,
    marginTop: 15,
    fontWeight: "bold",
  },
  productPrice: {
    fontWeight: "bold",
    fontSize: 25,
  },
  productPieces: {
    color: "gray",
  },
  productDiscount: {
    color: "gray",
    marginLeft: 10,
  },
  discountLine: {
    backgroundColor: "gray",
    height: 1,
    width: 60,
    position: "absolute",
    top: 10,
  },
  addToCart: {
    padding: 5,
    shadowColor: "#171717",
    elevation: 2,
    backgroundColor: COLORS.backgroundWhite,
    marginLeft: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
