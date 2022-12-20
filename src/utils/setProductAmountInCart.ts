import AsyncStorage from "@react-native-async-storage/async-storage";
import { CartProduct } from "../types/Product";

type Action = "increment" | "decrement";

export async function setProductAmountInCart(id: string, action: Action) {
  const data = await AsyncStorage.getItem("ShoppingCart");
  if (data === null) {
    await AsyncStorage.setItem("ShoppingCart", JSON.stringify([]));
    return false;
  }
  const dataParsed: CartProduct[] = JSON.parse(data);
  const dataIncrementOrDecrement = dataParsed.map((x) =>
    x.id === id
      ? { ...x, amount: action === "increment" ? x.amount + 1 : x.amount - 1 }
      : x
  );
  await AsyncStorage.setItem(
    "ShoppingCart",
    JSON.stringify(dataIncrementOrDecrement)
  );
}
