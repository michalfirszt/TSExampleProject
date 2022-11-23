import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  MainTabsScreenProps,
  ScreenNavigationProps,
} from "../navigation/types";

type Props = MainTabsScreenProps<"Settings">;

export const SettingsScreen = ({ route }: Props): JSX.Element => {
  const { navigate } = useNavigation<ScreenNavigationProps>();

  return (
    <View>
      <Text>{route.name}</Text>
      <View>
        <Button title="Go to profile" onPress={() => navigate("Profile")} />
      </View>
    </View>
  );
};
