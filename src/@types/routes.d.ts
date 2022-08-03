import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamsList = {
  ListPokemons: undefined;
  PokemonDetails: { pokemon: Pokemon };
  Favorites: undefined;
};

export type NavigationScreenProps = NativeStackScreenProps<RootStackParamsList>;

export type PokemonDetailsProps = NativeStackScreenProps<
  RootStackParamsList,
  "PokemonDetails"
>;
