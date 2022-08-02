import React from "react";
import { FlatList } from "react-native";
import { Card } from "../../components/Card";
import { DiglettLoading } from "../../components/DiglettLoading";
import { EmptyMessage } from "../../components/EmptyMessage";
import { useFavorites } from "../../context/FavoriteContext";
import { Container, styles } from "./styles";

export function Favorites() {
  const { favorites, handleFavoritePress } = useFavorites();

  return (
    <Container>
      {!!favorites && favorites.length > 0 && (
        <FlatList
          data={favorites}
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
      {favorites && favorites.length === 0 && (
        <EmptyMessage title="Você ainda não favoritou nenhum pokemon" />
      )}
      {!favorites && <DiglettLoading />}
    </Container>
  );
}
