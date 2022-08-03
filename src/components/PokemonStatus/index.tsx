import { Card, Label, LabelContainer, Value, ValueContainer } from "./styles";

type Props = {
  label: string;
  value: string | number;
};

export function PokemonStatus({ label, value }: Props) {
  return (
    <Card>
      <LabelContainer>
        <Label>{label.split("-").join(" ")}</Label>
      </LabelContainer>
      <ValueContainer>
        <Value>{value}</Value>
      </ValueContainer>
    </Card>
  );
}
