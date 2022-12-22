import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Constants from "expo-constants";
import { SearchStackNavigationProps } from "../Navigation";
import { COLORS } from "../../settings/colors";
import { useTextInput } from "../hooks/useTextInput";
import { SearchInput } from "../components/SearchInput";
import { PrimaryButton } from "../components/PrimaryButton";
import { CategoryList } from "../components/CategoryList";
import { useGetProductsByText } from "../hooks/useGetProductsByText";
import { ProductCard } from "../components/ProductCard";
import { useGetCategories } from "../hooks/useGetCategories";
import { TopBar } from "../components/TopBar";
import { LinearGradient } from "expo-linear-gradient";
import { Product } from "../types/Product";

export function Search({ route, navigation }: SearchStackNavigationProps) {
  const [searchInputText, onChageSearchInput] = useTextInput();
  const { categories } = useGetCategories();
  const { products, isLoading, getProductsByText } = useGetProductsByText(
    route.params?.searchText as string
  );

  const productsByCategory =
    route.params?.category &&
    products.filter((x) => x.category === route.params?.category);

  console.log(route.params?.category, route.params?.searchText);

  return (
    <ScrollView>
      <LinearGradient
        colors={[COLORS.primaryGradient, COLORS.secondaryGradient]}
        style={styles.colorBlock}
      >
        <TopBar />
        <View style={{ paddingHorizontal: 30 }}>
          <SearchInput
            onChangeText={onChageSearchInput as (text: string) => void}
            defaultValue={route.params?.searchText}
          >
            <PrimaryButton
              content="Search"
              rounded="semiCircle"
              size="small"
              onPress={() => getProductsByText(searchInputText as string)}
            />
          </SearchInput>
        </View>
        <View style={{ marginVertical: 10 }} />
        <CategoryList
          data={categories}
          categoryColor={COLORS.lightGray}
          imageSize={40}
          textColor={COLORS.backgroundWhite}
          searchText={searchInputText as string}
          categorySelected={route.params?.category}
        />
      </LinearGradient>

      <View style={{ paddingHorizontal: 25, paddingVertical: 25 }}>
        {isLoading ? (
          <View style={{ marginTop: 20 }}>
            <ActivityIndicator size="large" color={COLORS.primary} />
          </View>
        ) : productsByCategory ? (
          productsByCategory.map((item) => (
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
              type="normal"
            />
          ))
        ) : (
          products.map((item) => (
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
              type="normal"
            />
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  colorBlock: {
    paddingTop: Constants.statusBarHeight,
    width: "100%",
    paddingBottom: 10,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 25,
  },
});
