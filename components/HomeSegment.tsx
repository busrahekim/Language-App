import { View, Text, Pressable, Image, Animated } from "react-native";
import React from "react";
import StudyCategory from "./StudyCategory";
import { Feather } from "@expo/vector-icons";

const HomeSegment = () => {
  return (
    <View>
      <StudyCategory />
      <View className="px-4 mt-2">
        <View className="flex flex-row justify-between">
          <Text className="font-bold text-xl text-gray-800 mb-2">
            Daily Quests
          </Text>
          <Pressable
            onPress={() => console.log("clicked")}
            className="flex flex-row gap-1 items-center"
          >
            <Feather name="clock" size={18} color="orange" />
            <Text className="font-bold text-orange-400">2 hours</Text>
          </Pressable>
        </View>

        <View className="flex-col border-gray-300 border justify-between rounded-md mb-2">
          <View className="border-b-2 border-gray-300 bg-neutral-50">
            <View className="flex flex-row py-2 items-center">
              <Image
                source={require("@/assets/images/ach3.png")}
                className="w-20 h-20"
              />
              <View className="w-[65%]">
                <Text className="text-lg font-semibold text-gray-700 mb-[-10px]">
                  Earn 10 XP
                </Text>
                <View className="flex flex-row items-center">
                  <View className="h-2 rounded-md w-full mt-2 bg-[#ccc]">
                    <Animated.View className="h-2 bg-[#e9c46a] rounded-md w-52" />
                  </View>

                  <Image
                    source={require("@/assets/images/chest.png")}
                    className="w-12 h-12 ml-[-10px]"
                  />
                </View>
              </View>
            </View>
          </View>
          <View className="border-b-2 border-gray-300 bg-neutral-50">
            <View className="flex flex-row py-2 items-center">
              <Image
                source={require("@/assets/images/duo.png")}
                className="w-20 h-20"
              />
              <View className="w-[65%]">
                <Text className="text-lg font-semibold text-gray-700 mb-[-10px]">
                  Complete 3 lessons
                </Text>
                <View className="flex flex-row items-center">
                  <View className="h-2 rounded-md w-full mt-2 bg-[#ccc]">
                    <Animated.View className="h-2 bg-[#e9c46a] rounded-md w-24" />
                  </View>
                  <Image
                    source={require("@/assets/images/chest.png")}
                    className="w-12 h-12 ml-[-10px]"
                  />
                </View>
              </View>
            </View>
          </View>
          <View className="bg-neutral-50">
            <View className="flex flex-row py-2 items-center">
              <Image
                source={require("@/assets/images/vikram.png")}
                className="w-20 h-20"
              />
              <View className="w-[65%]">
                <Text className="text-lg font-semibold text-gray-700 mb-[-10px]">
                  Find Vikram in lessons!
                </Text>
                <View className="flex flex-row items-center">
                  <View className="h-2 rounded-md w-full mt-2 bg-[#ccc]">
                    <Animated.View className="h-2 bg-[#e9c46a] rounded-md w-44" />
                  </View>
                  <Image
                    source={require("@/assets/images/chest.png")}
                    className="w-12 h-12 ml-[-10px]"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeSegment;
