import { NavigationContainer } from "@react-navigation/native";
import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import MaterialComunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Home } from "./screens/Home";
import { Favorites } from "./screens/Favorites";
import { ShoppingCart } from "./screens/ShoppingCart";

import { COLORS } from "../settings/colors";

type RootBottomTabParamList = {
  Home: undefined;
  Favorites: undefined;
  ShoppingCart: undefined;
};

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={tabOptions}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="ShoppingCart" component={ShoppingCart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

type tabOptionsProps = BottomTabScreenProps<RootBottomTabParamList>;

const tabOptions = ({ route }: tabOptionsProps) => ({
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: COLORS.primary,
    height: 70,
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
  tabBarActiveTintColor: COLORS.white,
  tabBarInactiveTintColor: COLORS.white,
});
