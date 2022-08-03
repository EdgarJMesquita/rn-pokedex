import { createDrawerNavigator } from "@react-navigation/drawer";
import { theme } from "../global/theme";
import { Favorites } from "../screens/Favorites";
import { ListPokemons } from "../screens/ListPokemons";
import { NavigationScreenProps } from "../@types/routes";
const { Navigator, Screen } = createDrawerNavigator();
import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import PokeBallIcon from "../assets/pokeball_icon.png";
import { CustomDrawer } from "../components/CustomDrawer";

export function AppDrawer({}: NavigationScreenProps) {
  return (
    <Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerContentStyle: { backgroundColor: theme.colors.primary },
        headerTitle: "Pokedex",
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: "#FFFFFF",
        headerTitleAlign: "center",
        drawerItemStyle: {
          marginLeft: 0,
          marginRight: 0,
          padding: 10,
        },
      }}
    >
      <Screen
        name="ListPokemons"
        component={ListPokemons}
        options={{
          drawerIcon: () => (
            <Image source={PokeBallIcon} style={{ height: 30, width: 30 }} />
          ),
          drawerLabelStyle: {
            fontSize: 18,
            color: theme.colors.white,
            marginLeft: -10,
          },
          drawerLabel: "Pokemons",
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          drawerIcon: () => (
            <Fontisto
              name="favorite"
              size={24}
              color={theme.colors.white}
              style={{ marginLeft: 8 }}
            />
          ),
          drawerLabelStyle: {
            fontSize: 18,
            color: theme.colors.white,
          },
          drawerLabel: "Meus Favoritos",
        }}
      />
    </Navigator>
  );
}
