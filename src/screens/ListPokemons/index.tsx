import React from "react";
import { FlatList, View } from "react-native";
import useSWR from "swr";
import { Card } from "../../components/Card";
import { DiglettLoading } from "../../components/DiglettLoading";
import { EmptyMessage } from "../../components/EmptyMessage";
import { ListFootComponent } from "../../components/ListFootComponent";
import { PokeBallLoading } from "../../components/PokeBallLoading";
import { useFavorites } from "../../context/FavoriteContext";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { fetcher } from "../../services/api";
import { Container, styles } from "./styles";

export function ListPokemons() {
  const { favorites, handleFavoritePress } = useFavorites();
  const {
    data: pokemons,
    nextPage,
    isLoading,
  } = useInfiniteScroll<Result>("pokemon");
  //const { data } = useSWR<ListPagination>("pokemon", fetcher);

  return (
    <Container>
      {!!pokemons && (
        <FlatList
          data={pokemons}
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
          onEndReachedThreshold={0.1}
          onEndReached={nextPage}
          fadingEdgeLength={100}
          ListFooterComponent={
            <ListFootComponent isLoading={isLoading} onPress={nextPage} />
          }
        />
      )}
      {!pokemons && <DiglettLoading />}

      {!!pokemons && pokemons.length === 0 && (
        <EmptyMessage title="Não há resultados" />
      )}
    </Container>
  );
}
