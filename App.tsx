import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, LogBox } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FavoriteProvider } from "./src/context/FavoriteContext";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar style="light" />
      <FavoriteProvider>
        <Routes />
      </FavoriteProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});

LogBox.ignoreLogs([
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
]);
