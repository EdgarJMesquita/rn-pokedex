import { Container, Title } from "./styles";

type Props = {
  title: string;
};

export function EmptyMessage({ title }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}
