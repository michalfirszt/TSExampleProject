import React from "react";
import { Text, View } from "react-native";

import { MainTabsScreenProps } from "../navigation/types";

type Props = MainTabsScreenProps<"Settings">;

export const SettingsScreen = ({ route }: Props): JSX.Element => {
  return (
    <View>
      <Text>{route.name}</Text>
    </View>
  );
};
