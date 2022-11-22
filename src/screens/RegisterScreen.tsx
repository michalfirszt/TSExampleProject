import React from "react";
import { Text, View } from "react-native";

import { RootStackScreenProps } from "../navigation/types";

type Props = RootStackScreenProps<"Register">;

export const RegisterScreen = ({ route }: Props): JSX.Element => {
  return (
    <View>
      <Text>{route.name}</Text>
    </View>
  );
};
