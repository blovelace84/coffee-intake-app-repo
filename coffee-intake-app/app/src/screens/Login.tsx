import React from "react";
import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function Login({ navigation }: Props) {
  return (
    <View className="flex-1 justify-center items-center bg-[#f2ede4]">
      <Text className="text-3xl font-bold mb-6 text-ellipsis">
        ☕ Coffee Tracker
      </Text>
      <button title="Login" onProgress={() => navigation.navigate("Home")} />
    </View>
  );
}
