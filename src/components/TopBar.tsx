import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialComunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../settings/colors";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackOptionsProps } from "../Navigation";

export function TopBar() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name={"left"} size={25} color={COLORS.backgroundWhite} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ShoppingCart")}>
        <MaterialComunityIcons
          name={"cart"}
          size={25}
          color={COLORS.backgroundWhite}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});
