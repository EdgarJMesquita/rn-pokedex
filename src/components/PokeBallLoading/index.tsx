import AnimatedLottieView from "lottie-react-native";

import PokeBallAnimation from "../../assets/pokeball.json";

export function PokeBallLoading() {
  return (
    <AnimatedLottieView
      source={PokeBallAnimation}
      autoPlay
      loop
      style={{ height: 30, width: 30 }}
    />
  );
}
