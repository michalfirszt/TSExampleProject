import React from "react";
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

import { ScreenRouteProps } from "../navigation/types";

type RegisterScreenRouteProp = ScreenRouteProps<"Register">;

export const RegisterScreen = (): JSX.Element => {
  const route = useRoute<RegisterScreenRouteProp>();

  return (
    <View>
      <Text>{route.name}</Text>
    </View>
  );
};
