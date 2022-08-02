import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alert } from "react-native";
import { loadFavoritesFromStorage } from "../utils/loadFavoritesFromStorage";
import { saveFavoritesToStorage } from "../utils/saveFavoritesToStorage";

type FavoriteContextProps = {
  handleFavoritePress: (result: Result) => void;
  favorites: Result[];
};

type FavoriteProviderProps = {
  children: ReactNode;
};

export const FavoriteContext = createContext({} as FavoriteContextProps);

export function FavoriteProvider({ children }: FavoriteProviderProps) {
  const [favorites, setFavorites] = useState<Result[]>([]);

  function addFavorite(favorite: Result) {
    const updatedFavorites = [...favorites, favorite];
    setFavorites(updatedFavorites);
  }

  function removeFavorite(favorite: Result) {
    const _favorites = [...favorites];
    const updatedFavorites = _favorites.filter(
      (item) => item.name !== favorite.name,
    );
    setFavorites(updatedFavorites);
  }

  function handleFavoritePress(favorite: Result) {
    const alreadyFavorite = !!favorites.find(
      (item) => item.name === favorite.name,
    );
    if (alreadyFavorite) {
      removeFavorite(favorite);
    } else {
      addFavorite(favorite);
    }
  }

  async function handleLoadFavorites() {
    try {
      const savedFavorites = await loadFavoritesFromStorage();
      setFavorites(savedFavorites);
    } catch (error) {
      Alert.alert("Não foi possível carregar seus favoritos");
    }
  }

  useEffect(() => {
    handleLoadFavorites();
  }, []);

  useEffect(() => {
    saveFavoritesToStorage(favorites);
  }, [favorites]);

  return (
    <FavoriteContext.Provider value={{ favorites, handleFavoritePress }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoriteContext);
}
