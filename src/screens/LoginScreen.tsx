import React from "react";
import { Button, Text, View } from "react-native";

import { RootStackScreenProps } from "../navigation/types";

type Props = RootStackScreenProps<"Login">;

export const LoginScreen = ({ navigation, route }: Props): JSX.Element => {
  return (
    <View>
      <Text>{route.name}</Text>
      <View>
        <Button
          title="Login"
          onPress={() => navigation.navigate("MainTabs", { screen: "Profile" })}
        />
        <Button
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
};
