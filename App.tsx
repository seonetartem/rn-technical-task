import "react-native-gesture-handler";
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import { useLoadedAssets } from "./src/utils/use-loaded-resources";
import StackNavigator from "./src/components/navigation";




export default function App() {
  const isLoadingComplete = useLoadedAssets();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer>
       <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
