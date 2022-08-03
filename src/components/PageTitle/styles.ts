import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Title = styled.Text`
  font-size: 25px;
  color: ${theme.colors.title};
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;
  margin-top: 20px;
`;
