import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getLocalStorageData(key: string) {
  const data = await AsyncStorage.getItem(key);
  if (data === null) {
    await AsyncStorage.setItem(key, JSON.stringify([]));
    const newData = await AsyncStorage.getItem(key);
    return JSON.parse(newData as string);
  }

  return JSON.parse(data);
}
