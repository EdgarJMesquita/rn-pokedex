import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../global/theme";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Header = styled.View`
  width: 100%;
  height: 90px;
  padding-top: ${StatusBar.currentHeight}px;
  background-color: ${theme.colors.secondary};

  flex-direction: row;

  align-items: center;

  padding-left: 15px;
`;

export const HeaderTitle = styled.Text`
  color: ${theme.colors.white};
  font-size: 20px;
  margin-left: 15px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const ArrowLeft = styled(AntDesign).attrs({
  name: "arrowleft",
  size: 30,
})`
  color: ${theme.colors.white};
`;

export const PokemonImage = styled.Image.attrs({
  resizeMode: "cover",
  resizeMethod: "resize",
})`
  width: 320px;
  height: 320px;
`;

export const PokemonName = styled.Text`
  font-size: 35px;
  color: ${theme.colors.title};
  font-weight: 600;
  text-transform: capitalize;

  margin-bottom: 20px;
`;

export const PokemonType = styled.Text`
  font-size: 18px;
  color: ${theme.colors.white};
  font-weight: 600;
  text-transform: capitalize;
  padding: 5px 10px;
  border-radius: 15px;
  background-color: ${theme.colors.primary};
  margin: 10px 2px;
`;

export const PokemonTypesSection = styled.View`
  flex-direction: row;
`;

export const MovementsTitle = styled.Text`
  font-size: 25px;
  color: ${theme.colors.title};
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 15px;
  margin-top: 30px;
`;

export const Movement = styled.Text`
  width: 100%;
  text-align: center;
  background-color: ${theme.colors.white};
  font-size: 18px;
  text-transform: capitalize;
  color: ${theme.colors.text};
  padding: 5px;

  border-radius: 15px;
  height: 40px;
  margin-bottom: 10px;
`;

export const PhysicalSection = styled.View`
  flex-direction: row;
  margin: 15px 0;
`;

export const PokemonHeight = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
  color: ${theme.colors.text};
  padding: 0 10px;
`;

export const PokemonWeight = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
  color: ${theme.colors.text};
  padding: 0 10px;
`;

export const StatusTitle = styled.Text`
  font-size: 25px;
  color: ${theme.colors.title};
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 15px;
`;
