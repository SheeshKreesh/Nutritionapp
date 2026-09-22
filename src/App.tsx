import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import CameraScreen from "./screens/CameraScreen";
import PetScreen from "./screens/PetScreen";
import QuestsScreen from "./screens/QuestsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Camera" component={CameraScreen} />
        <Tab.Screen name="Pet" component={PetScreen} />
        <Tab.Screen name="Quests" component={QuestsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
