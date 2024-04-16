import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";

const HomeHeader = () => {
  const [userStreak, setUserStreak] = useState("216");
  const showFriendsList = () => {
    router.navigate("/friends");
  };
  return (
    <View className="flex justify-between flex-row mx-3 p-2">
      {/* <FontAwesome6 name="language" size={24} color="black" /> */}
      <Image
        source={require("@/assets/images/flag-icons/united-states.png")}
        className="w-10 h-10"
      />
      <View className="flex flex-row items-center gap-1">
        <TouchableOpacity className="mr-2" onPress={showFriendsList}>
          <FontAwesome5 name="users" size={24} color="rgb(59,130,246)" />
        </TouchableOpacity>
        <FontAwesome5 name="fire-alt" size={24} color="orange" />
        <Text className="font-bold text-orange-500">{userStreak}</Text>
      </View>
    </View>
  );
};

export default HomeHeader;
