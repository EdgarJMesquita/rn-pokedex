import styled from "styled-components/native";
import { theme } from "../../global/theme";

import PikachuIcon from "../../assets/pokemon.png";

export const Container = styled.View`
  flex: 1;
  width: 100%;

  background-color: ${theme.colors.primary};
`;

export const Section = styled.View`
  height: 30%;
  width: 100%;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Pikachu = styled.Image.attrs({ source: PikachuIcon })`
  width: 100px;
  height: 100px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: ${theme.colors.yellow};
  font-weight: bold;
`;
