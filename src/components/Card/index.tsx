import { useState } from "react";
import { ActivityIndicator } from "react-native";
import {
  BorderlessButton,
  RectButtonProps,
} from "react-native-gesture-handler";
import useSWR from "swr";
import { theme } from "../../global/theme";
import { fetcher } from "../../services/api";
import {
  Button,
  FavoriteIcon,
  PokePhoto,
  PokePhotoContainer,
  Section,
  Title,
} from "./styles";

type Props = RectButtonProps & {
  result: Result;
  isFavorite: boolean;
  onFavoritePress: () => void;
};

export function Card({ result, isFavorite, onFavoritePress, ...props }: Props) {
  const { data } = useSWR<Pokemon>("pokemon/" + result.name, fetcher);

  const iconName = isFavorite ? "favorite" : "favorite-border";

  return (
    <Button {...props}>
      <Section>
        {data?.sprites.front_default && (
          <PokePhotoContainer>
            <PokePhoto
              source={{ uri: data.sprites.front_default }}
              resizeMode="contain"
            />
          </PokePhotoContainer>
        )}
        {!data && <ActivityIndicator size={10} color={theme.colors.primary} />}

        <Title>{result.name}</Title>
      </Section>
      <BorderlessButton
        onPress={() => onFavoritePress()}
        style={{ marginRight: 10 }}
      >
        <FavoriteIcon name={iconName} />
      </BorderlessButton>
    </Button>
  );
}
