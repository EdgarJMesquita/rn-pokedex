import {
  DrawerItemList,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { Image } from "react-native";
import { Container, Pikachu, Section, Title } from "./styles";

export function CustomDrawer({ ...props }: DrawerContentComponentProps) {
  return (
    <Container>
      <Section>
        <Pikachu />
        {/* <Title>Pokémons</Title> */}
      </Section>
      <DrawerItemList {...props} />
    </Container>
  );
}
