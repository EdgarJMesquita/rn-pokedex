import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Favorites } from "../screens/Favorites";
import { ListPokemons } from "../screens/ListPokemons";
import { PokemonDetails } from "../screens/PokemonDetails";
import { AppDrawer } from "./drawer.routes";

const { Screen, Navigator } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="drawer" component={AppDrawer} />
      <Screen name="PokemonDetails" component={PokemonDetails} />
    </Navigator>
  );
}
