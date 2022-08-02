import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.View`
  height: 70px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  height: 70px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${theme.colors.primary};
`;
