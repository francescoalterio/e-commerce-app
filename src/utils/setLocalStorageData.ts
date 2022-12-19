import AsyncStorage from "@react-native-async-storage/async-storage";
import { Product } from "../types/Product";

export async function setLocalStorageData(key: string, value: Product) {
  const data = await AsyncStorage.getItem(key);
  if (data === null) {
    await AsyncStorage.setItem(key, JSON.stringify([]));
  }
  const getNewData = await AsyncStorage.getItem(key);
  const dataParsed = JSON.parse(getNewData as string);
  await AsyncStorage.setItem(key, JSON.stringify([...dataParsed, value]));
}
