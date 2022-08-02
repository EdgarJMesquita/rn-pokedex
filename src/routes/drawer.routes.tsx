import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native";
import { theme } from "../global/theme";
import { Favorites } from "../screens/Favorites";
import { ListPokemons } from "../screens/ListPokemons";

const { Navigator, Screen } = createDrawerNavigator();

export function AppDrawer() {
  return (
    <Navigator
      screenOptions={{
        drawerContentStyle: { backgroundColor: theme.colors.primary },
        headerTitle: "Pokedex",
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: "#FFFFFF",
        headerTitleAlign: "center",
      }}
    >
      <Screen name="ListPokemons" component={ListPokemons} />
      <Screen name="Favorites" component={Favorites} />
    </Navigator>
  );
}
