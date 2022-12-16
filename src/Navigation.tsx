import { NavigationContainer } from "@react-navigation/native";
import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

import MaterialComunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Home } from "./screens/Home";
import { Favorites } from "./screens/Favorites";
import { ShoppingCart } from "./screens/ShoppingCart";
import { Search } from "./screens/Search";

import { COLORS } from "../settings/colors";

type ParamList = {
  Tab: undefined;
  Search: { searchText: string };
  Home: undefined;
  Favorites: undefined;
  ShoppingCart: undefined;
};

const Stack = createNativeStackNavigator<ParamList>();

const Tab = createBottomTabNavigator<ParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tab">
          {() => (
            <Tab.Navigator screenOptions={tabOptions}>
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Favorites" component={Favorites} />
              <Tab.Screen name="ShoppingCart" component={ShoppingCart} />
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type tabOptionsProps = BottomTabScreenProps<ParamList>;

const tabOptions = ({ route }: tabOptionsProps) => ({
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: COLORS.primary,
    height: 60,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  tabBarIcon: ({ focused, color, size }: any) => {
    let iconName;

    if (route.name === "Home") {
      iconName = focused ? "home" : "home-outline";
    } else if (route.name === "Favorites") {
      iconName = focused ? "heart" : "heart-outline";
    } else if (route.name === "ShoppingCart") {
      iconName = focused ? "cart" : "cart-outline";
    }

    // You can return any component that you like here!
    return (
      <MaterialComunityIcons
        name={iconName as string}
        size={size + 5}
        color={color}
      />
    );
  },
  tabBarActiveTintColor: COLORS.backgroundWhite,
  tabBarInactiveTintColor: COLORS.backgroundWhite,
});
