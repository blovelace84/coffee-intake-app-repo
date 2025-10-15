import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login";
import Home from "../pages/Home";
import AddIntake from "../pages/AddIntake";
import Stats from "../pages/Stats";
import { RootStackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: "#4b2e05" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "My Coffee Log" }}
        />
        <Stack.Screen
          name="AddIntake"
          component={AddIntake}
          options={{ title: "Add Coffee" }}
        />
        <Stack.Screen
          name="Stats"
          component={Stats}
          options={{ title: "My Stats" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
