import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

import { Home } from "./screens/Home";
import { ShoppingCart } from "./screens/ShoppingCart";
import { Search } from "./screens/Search";

type ParamList = {
  Home: undefined;
  Search: { searchText: string; category?: string };
  ShoppingCart: undefined;
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
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type StackOptionsProps = NativeStackScreenProps<
  ParamList,
  "Search" | "Home" | "ShoppingCart"
>;
