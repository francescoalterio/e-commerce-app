import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { tabOptionsProps } from "../Navigation";
import { COLORS } from "../../settings/colors";
import { useTextInput } from "../hooks/useTextInput";
import { SearchInput } from "../components/SearchInput";
import { PrimaryButton } from "../components/PrimaryButton";
import { CategoryList } from "../components/CategoryList";
import { categoriesSimulation } from "../Firebase/Simulations/categoriesSimulation";

export function Search({ route, navigation }: tabOptionsProps) {
  const [searchInputText, onChageSearchInput] = useTextInput();
  //const { categories } = useGetCategories();
  return (
    <View style={styles.back}>
      <View style={styles.colorBlock} />
      <View style={styles.container}>
        <SearchInput
          onChangeText={onChageSearchInput as (text: string) => void}
          defaultValue={route.params?.searchText}
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
        <CategoryList
          data={categoriesSimulation}
          categoryColor={COLORS.lightGray}
          imageSize={40}
          textColor={COLORS.black}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    paddingTop: Constants.statusBarHeight,
  },
  colorBlock: {
    width: "100%",
    height: 250,
    backgroundColor: COLORS.primary,
    position: "absolute",
  },
  container: {
    paddingTop: 50,
    paddingHorizontal: 25,
  },
});
