import AsyncStorage from "@react-native-async-storage/async-storage";
import { CartProduct } from "../types/Product";

export async function isInShoppingCart(id: string): Promise<boolean> {
  const data = await AsyncStorage.getItem("ShoppingCart");
  if (data === null) {
    await AsyncStorage.setItem("ShoppingCart", JSON.stringify([]));
    return false;
  }
  const dataParsed: CartProduct[] = JSON.parse(data);

  return dataParsed.some((x) => x.id === id);
}
