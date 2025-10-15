import React from "react";
import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: Props) {
  return (
    <View className="flex-1 justify-center items-center bg-[#f8f4ef]">
      <Text className="text-2xl font-semibold mb-4 text-ellipsis">
        Today's Coffee Intake
      </Text>
      <View className="gap-3">
        <button
          title="Add Coffee"
          onProgress={() => navigation.navigate("AddIntake")}
        />
        <button
          title="View Stats"
          onProgress={() => navigation.navigate("Stats")}
        />
      </View>
    </View>
  );
}
