import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { ProductStackNavigationProps } from "../Navigation";

export function Product({ route }: ProductStackNavigationProps) {
  return (
    <View style={styles.container}>
      <Text>{route.params?.product.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});
