import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Constants from "expo-constants";
import { StackOptionsProps } from "../Navigation";
import { COLORS } from "../../settings/colors";
import { useTextInput } from "../hooks/useTextInput";
import { SearchInput } from "../components/SearchInput";
import { PrimaryButton } from "../components/PrimaryButton";
import { CategoryList } from "../components/CategoryList";
import { useGetProductsByText } from "../hooks/useGetProductsByText";
import { ProductCard } from "../components/ProductCard";
import { useGetCategories } from "../hooks/useGetCategories";
import { TopBar } from "../components/TopBar";

export function Search({ route, navigation }: StackOptionsProps) {
  const [searchInputText, onChageSearchInput] = useTextInput();
  const { categories } = useGetCategories();
  const { products, isLoading, getProductsByText } = useGetProductsByText(
    route.params?.searchText as string
  );
  return (
    <ScrollView>
      <View style={styles.colorBlock}>
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
        />
      </View>

      <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
        {isLoading ? (
          <View style={{ marginTop: 20 }}>
            <ActivityIndicator size="large" color={COLORS.primary} />
          </View>
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
    paddingHorizontal: 15,
  },
});
