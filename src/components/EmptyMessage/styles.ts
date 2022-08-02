import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.View`
  flex: 1;
  width: 100%;

  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: ${theme.colors.title};
  text-align: center;
`;
