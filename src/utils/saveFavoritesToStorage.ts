import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITE_KEY = "@favorites";

export async function saveFavoritesToStorage(favorites: Result[]) {
  const data = JSON.stringify(favorites);
  await AsyncStorage.setItem(FAVORITE_KEY, data);
}
