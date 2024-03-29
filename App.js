import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <ExpoStatusBar style="auto" />
      <RestaurantsScreen />
    </>
  );
}
