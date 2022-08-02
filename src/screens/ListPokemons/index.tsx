import React, { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import useSWR from "swr";
import { Card } from "../../components/Card";
import { DiglettLoading } from "../../components/DiglettLoading";
import { PokeBallLoading } from "../../components/PokeBallLoading";
import { useFavorites } from "../../context/FavoriteContext";
import { fetcher } from "../../services/api";
import { loadFavoritesFromStorage } from "../../utils/loadFavoritesFromStorage";
import { saveFavoritesToStorage } from "../../utils/saveFavoritesToStorage";
import { Container, styles } from "./styles";

export function ListPokemons() {
  const { favorites, handleFavoritePress } = useFavorites();
  const { data } = useSWR<ListPagination>("pokemon", fetcher);

  return (
    <Container>
      {!!data && (
        <FlatList
          data={data?.results}
          style={styles.flatList}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={({ name }) => name}
          renderItem={({ item }) => (
            <Card
              result={item}
              isFavorite={
                !!favorites.find((result) => result.name === item.name)
              }
              onFavoritePress={() => handleFavoritePress(item)}
            />
          )}
        />
      )}
      {!data && <DiglettLoading />}
    </Container>
  );
}
