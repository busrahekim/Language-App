import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";

const HomeHeader = () => {
  const [userStreak, setUserStreak] = useState("216");
  return (
    <View className="flex justify-between flex-row mx-3 p-2">
      {/* <FontAwesome6 name="language" size={24} color="black" /> */}
      <Image source={require("@/assets/images/flag-icons/united-states.png")} className="w-10 h-10" />
      <View className="flex flex-row items-center gap-1">
        <FontAwesome5 name="fire-alt" size={24} color="orange" />
        <Text className="font-bold text-orange-500">{userStreak}</Text>
      </View>
    </View>
  );
};

export default HomeHeader;
