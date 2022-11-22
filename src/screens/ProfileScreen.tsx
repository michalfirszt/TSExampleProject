import React from "react";
import { Text, View } from "react-native";

import { MainTabsScreenProps } from "../navigation/types";

type Props = MainTabsScreenProps<"Profile">;

export const ProfileScreen = ({ route }: Props): JSX.Element => {
  return (
    <View>
      <Text>{route.name}</Text>
    </View>
  );
};
