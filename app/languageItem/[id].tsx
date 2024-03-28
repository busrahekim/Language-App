import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const LanguagePage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View className="flex justify-center px-3 py-3">
      <Text className="font-semibold text-xl">Today's Words</Text>
      
    </View>
  );
};

export default LanguagePage;
