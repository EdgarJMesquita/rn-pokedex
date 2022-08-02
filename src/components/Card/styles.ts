import { Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { theme } from "../../global/theme";
import { MaterialIcons } from "@expo/vector-icons";

export const Button = styled(RectButton)`
  width: 100%;
  height: 70px;
  background-color: ${theme.colors.white};
  border-radius: 15px;

  margin-bottom: 10px;

  flex-direction: row;
  align-items: center;

  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${theme.colors.title};
  text-transform: capitalize;
  font-weight: 600;
  margin-left: 10px;
`;

export const PokePhotoContainer = styled.View`
  width: 50px;
  height: 50px;
`;

export const PokePhoto = styled(Image)`
  width: 50px;
  height: 50px;
`;

export const FavoriteIcon = styled(MaterialIcons).attrs({ size: 30 })`
  color: ${theme.colors.primary};
`;

export const Section = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
