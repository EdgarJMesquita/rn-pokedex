import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Pokemons = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 20,
  },
})`
  flex: 1;
  width: 100%;
`;

export const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    width: "100%",
  },
  contentContainerStyle: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
