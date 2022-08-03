import { ReactNode } from "react";
import { Title } from "./styles";

type Props = {
  children: ReactNode;
};

export function PageTitle({ children }: Props) {
  return <Title>{children}</Title>;
}
