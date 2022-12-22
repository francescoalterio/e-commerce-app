import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

import { Home } from "./screens/Home";
import { ShoppingCart } from "./screens/ShoppingCart";
import { Search } from "./screens/Search";
import { Product as ProductScreen } from "./screens/Product";
import { Product } from "./types/Product";

export type ParamList = {
  Home: undefined;
  Search: { searchText: string; category?: string };
  ShoppingCart: undefined;
  Product: { product: Product };
};

const Stack = createNativeStackNavigator<ParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type SearchStackNavigationProps = NativeStackScreenProps<
  ParamList,
  "Search"
>;

export type HomeStackNavigationProps = NativeStackScreenProps<
  ParamList,
  "Home"
>;

export type ShoppingCartStackNavigationProps = NativeStackScreenProps<
  ParamList,
  "ShoppingCart"
>;

export type ProductStackNavigationProps = NativeStackScreenProps<
  ParamList,
  "Product"
>;
