import AnimatedLottieView from "lottie-react-native";
import { View } from "react-native";

import DiglettAnimation from "../../assets/diglett.json";
import { Container } from "./styles";

export function DiglettLoading() {
  return (
    <Container>
      <AnimatedLottieView
        source={DiglettAnimation}
        autoPlay
        loop
        style={{ height: 100, width: 100 }}
        speed={1.5}
      />
    </Container>
  );
}
