import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Card = styled.View`
  height: 40px;
  width: 100%;
  flex-direction: row;
  align-items: center;

  border-radius: 15px;

  overflow: hidden;

  background-color: ${theme.colors.white};

  margin-bottom: 10px;
`;

export const LabelContainer = styled.View`
  width: 50%;
  height: 40px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.primary};
`;

export const Label = styled.Text`
  color: ${theme.colors.white};
  font-weight: 600;
  text-transform: uppercase;
`;

export const ValueContainer = styled.View`
  width: 50%;
  height: 40px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.white};
`;

export const Value = styled.Text`
  font-size: 16px;
  color: ${theme.colors.text};
  font-weight: 600;
  margin: 0 15px;
`;
