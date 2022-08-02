import { PokeBallLoading } from "../PokeBallLoading";
import { Button, Container, Title } from "./styles";

type Props = {
  isLoading: boolean;
  onPress: () => void;
};

export function ListFootComponent({ isLoading, onPress }: Props) {
  if (!isLoading)
    return (
      <Button onPress={onPress}>
        <Title>Mais</Title>
      </Button>
    );

  return (
    <Container>
      <PokeBallLoading />
    </Container>
  );
}
