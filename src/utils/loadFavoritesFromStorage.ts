import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITE_KEY = "@favorites";

export async function loadFavoritesFromStorage() {
  const store = await AsyncStorage.getItem(FAVORITE_KEY);
  const favorites: Result[] = store ? JSON.parse(store) : [];
  return favorites;
}
