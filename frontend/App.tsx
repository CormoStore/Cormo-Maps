import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import SpotDetailsScreen from "./src/screens/SpotDetailsScreen";
import { StatusBar } from "expo-status-bar";

export type RootStackParamList = {
  Home: undefined;
  SpotDetails: { spotId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SpotDetails" component={SpotDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}