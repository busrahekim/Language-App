import { SafeAreaView, Text, ActivityIndicator } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <SafeAreaView className="flex flex-1 bg-transparent justify-center items-center pt-28">
      <ActivityIndicator size="large" color="#0078fe" />
      <Text>Loading...</Text>
    </SafeAreaView>
  );
};

export default Loading;
