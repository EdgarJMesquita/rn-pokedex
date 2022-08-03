import React from "react";
import { FlatList } from "react-native";
import { NavigationScreenProps } from "../../@types/routes";
import { Card } from "../../components/Card";
import { DiglettLoading } from "../../components/DiglettLoading";
import { EmptyMessage } from "../../components/EmptyMessage";
import { ListFootComponent } from "../../components/ListFootComponent";
import { PageTitle } from "../../components/PageTitle";
import { useFavorites } from "../../context/FavoriteContext";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { Container, styles } from "./styles";

export function ListPokemons({ navigation }: NavigationScreenProps) {
  const { favorites, handleFavoritePress } = useFavorites();
  const {
    data: pokemons,
    nextPage,
    isLoading,
  } = useInfiniteScroll<Result>("pokemon");

  return (
    <Container>
      <PageTitle>Pokemons</PageTitle>
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
              navigation={navigation}
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
