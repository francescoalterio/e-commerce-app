import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Constants from "expo-constants";
import { COLORS } from "../../settings/colors";
import MaterialComunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useWindowDimensions } from "react-native";

import { SearchInput } from "../components/SearchInput";
import { PrimaryButton } from "../components/PrimaryButton";
import { SectionTitle } from "../components/SectionTitle";
import { CategoryList } from "../components/CategoryList";
import { Separator } from "../components/Separator";

import { ProductCard } from "../components/ProductCard";
import { useGetCategories } from "../hooks/useGetCategories";

import { StackOptionsProps } from "../Navigation";
import { useTextInput } from "../hooks/useTextInput";
import { useGetLastProducts } from "../hooks/useGetLastProducts";

//import AsyncStorage from "@react-native-async-storage/async-storage";

export function Home({ navigation }: StackOptionsProps) {
  //AsyncStorage.setItem("ShoppingCart", JSON.stringify([]));
  const { width } = useWindowDimensions();
  const { categories } = useGetCategories();
  const { products } = useGetLastProducts(5);
  const [searchInputText, onChageSearchInput] = useTextInput();

  return (
    <ScrollView style={styles.back}>
      <View
        style={[
          styles.semiCircle,
          { width: width * 2, left: -((width * 2) / 4) },
        ]}
      />
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome</Text>
        <SearchInput
          onChangeText={onChageSearchInput as (text: string) => void}
        >
          <PrimaryButton
            content="Search"
            rounded="semiCircle"
            size="small"
            onPress={() =>
              navigation.navigate("Search", {
                searchText: searchInputText as string,
              })
            }
          />
        </SearchInput>
        <View style={styles.announcement}>
          <Image
            source={{
              uri: "https://cdn4.vectorstock.com/i/1000x1000/38/43/christmas-sale-web-banner-e-commerce-online-shop-vector-27793843.jpg",
            }}
            style={{ width: "100%", height: "100%", borderRadius: 20 }}
          />
        </View>
        <SectionTitle content="Categories" />
        <CategoryList
          data={categories}
          categoryColor={COLORS.lightGray}
          imageSize={40}
          textColor={COLORS.black}
          shadow
        />
        <Separator />
        <SectionTitle content="Last Products">
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() =>
              navigation.navigate("Search", {
                searchText: "",
              })
            }
          >
            <Text style={{ color: COLORS.black, fontWeight: "bold" }}>
              See more{" "}
            </Text>
            <MaterialComunityIcons
              name={"chevron-right"}
              size={25}
              color={COLORS.black}
            />
          </TouchableOpacity>
        </SectionTitle>
        <View style={{ marginBottom: 10, width: "100%" }}>
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: COLORS.backgroundWhite,
  },
  semiCircle: {
    height: 325,
    position: "absolute",
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 400,
    borderBottomRightRadius: 400,
  },
  container: {
    width: "100%",
    paddingTop: Constants.statusBarHeight + 10,
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 25,
  },
  welcome: {
    color: COLORS.backgroundWhite,
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  announcement: {
    width: "100%",
    backgroundColor: "green",
    height: 220,
    borderRadius: 20,
    marginTop: 20,
  },
});
