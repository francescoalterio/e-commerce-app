import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
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

import { categoriesSimulation } from "../Firebase/categoriesSimulation";
import { productsSimulation } from "../Firebase/productsSimulation";
import { ProductCard } from "../components/ProductCard";

export function Home() {
  const { width } = useWindowDimensions();
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
        <SearchInput>
          <PrimaryButton content="Search" rounded="semiCircle" />
        </SearchInput>
        <View style={styles.announcement}></View>
        <SectionTitle content="Categories" />
        <CategoryList
          data={categoriesSimulation}
          categoryColor={COLORS.lightGray}
          imageSize={40}
          textColor={COLORS.black}
        />
        <Separator />
        <SectionTitle content="Last Products">
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
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
        <View style={{ marginHorizontal: -10, height: 300, marginBottom: 10 }}>
          <FlatList
            data={productsSimulation}
            renderItem={({ item }) => (
              <ProductCard
                id={item.id}
                name={item.name}
                imgURL={item.imgURL}
                category={item.category}
                price={item.price}
                discountPrice={item.discountPrice}
                pieces={item.pieces}
                backgroundColor={COLORS.backgroundWhite}
                textColor={COLORS.black}
              />
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
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
    height: "35%",
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
