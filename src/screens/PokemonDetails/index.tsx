import { ScrollView } from "react-native";
import { PokemonDetailsProps } from "../../@types/routes";
import {
  ArrowLeft,
  Container,
  Header,
  HeaderTitle,
  Movement,
  MovementsTitle,
  PhysicalSection,
  PokemonHeight,
  PokemonImage,
  PokemonName,
  PokemonType,
  PokemonTypesSection,
  PokemonWeight,
  StatusTitle,
} from "./styles";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { theme } from "../../global/theme";
import { PokemonStatus } from "../../components/PokemonStatus";

export function PokemonDetails({ navigation, route }: PokemonDetailsProps) {
  const { pokemon } = route.params;

  return (
    <Container>
      <Header>
        <ArrowLeft onPress={() => navigation.goBack()} />
        <HeaderTitle>{`#${pokemon.order} ${pokemon.name}`}</HeaderTitle>
      </Header>
      <ScrollView
        style={{ flex: 1, width: "100%" }}
        contentContainerStyle={{ padding: 30, alignItems: "center" }}
      >
        <PokemonImage source={{ uri: pokemon.sprites.front_default }} />
        <PokemonName>{pokemon.name}</PokemonName>

        <PokemonTypesSection>
          {pokemon.types.map((type, index) => (
            <PokemonType key={index}>{type.type.name}</PokemonType>
          ))}
        </PokemonTypesSection>

        <PhysicalSection>
          <PhysicalSection>
            <FontAwesome5 name="weight" size={20} color={theme.colors.text} />
            <PokemonHeight>{pokemon.weight}</PokemonHeight>
          </PhysicalSection>
          <PhysicalSection>
            <MaterialIcons name="height" size={24} color={theme.colors.text} />
            <PokemonWeight>{pokemon.height}</PokemonWeight>
          </PhysicalSection>
        </PhysicalSection>

        <StatusTitle>Status</StatusTitle>
        {pokemon.stats.map((stat, index) => (
          <PokemonStatus
            key={index}
            label={stat.stat.name}
            value={stat.base_stat}
          />
        ))}

        <MovementsTitle>Movimentos</MovementsTitle>
        {pokemon.moves.map((type, index) => (
          <Movement key={index}>{type.move.name.split("-").join(" ")}</Movement>
        ))}
      </ScrollView>
    </Container>
  );
}
