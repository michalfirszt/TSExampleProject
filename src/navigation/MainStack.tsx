import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { RootStackParamList, MainTabsParamList } from "./types";
import {
  LoginScreen,
  ProfileScreen,
  RegisterScreen,
  SettingsScreen,
} from "../screens";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tabs = createBottomTabNavigator<MainTabsParamList>();

const MainTabs = (): JSX.Element => (
  <Tabs.Navigator>
    <Tabs.Screen name="Profile" component={ProfileScreen} />
    <Tabs.Screen name="Settings" component={SettingsScreen} />
  </Tabs.Navigator>
);

export const MainStack = (): JSX.Element => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="MainTabs" component={MainTabs} />
  </Stack.Navigator>
);
