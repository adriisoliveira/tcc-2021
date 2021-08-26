import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { theme } from "../global/styles/theme";

import { Home } from "../screens/Home";
import { Login } from "../screens/Login";


const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary
        }
      }}
    >
      <Screen
        name="Login"
        component={Login}
      />

      <Screen
        name="Home"
        component={Home}
      />

    </Navigator>
  )
}

