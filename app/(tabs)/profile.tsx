import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import {
  AntDesign,
  FontAwesome5,
  Foundation,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const Profile = () => {
  return (
    <View className="flex-1 justify-center">
      <View className="flex-1 relative">
        <Image
          source={require("@/assets/images/profile2.jpg")}
          className="w-screen h-64 object-cover"
        />
        <View className="absolute right-3 top-12">
          <Link href="/settings" asChild>
            <Pressable>
              {({ pressed }) => (
                <AntDesign name="setting" size={32} color="white" />
              )}
            </Pressable>
          </Link>
        </View>

        <View className="px-4 py-2 justify-between flex-row">
          <View>
            <Text className="font-bold text-2xl">Bush</Text>
            {/* style={{ fontFamily: 'SpaceMono', fontWeight: 'bold', fontSize: 25 }} */}
            <Text className="mt-2 text-gray-500">
              @Bush149479 • Member since August 2023
            </Text>
          </View>

          <View className="mt-4">
            <Image
              source={require("@/assets/images/flag-icons/united-states.png")}
              className="w-10 h-10"
            />
          </View>
        </View>

        <View className="px-4 mt-2">
          <Text className="font-bold text-2xl text-gray-800 mb-2">
            General Stats
          </Text>
          <View className="flex-row flex-wrap gap-4">
            <View className="shadow-md shadow-slate-700 w-[45%]">
              <View className="flex flex-row gap-2 px-3 py-2">
                <FontAwesome5 name="fire-alt" size={24} color="orange" />
                <View>
                  <Text className="font-bold text-lg">220</Text>
                  <Text className=" text-slate-400 mb-2">Daily Streak</Text>
                </View>
              </View>
            </View>
            <View className="shadow-md shadow-slate-700 w-[45%]">
              <View className="flex flex-row gap-2 px-3 py-2">
                <MaterialIcons name="electric-bolt" size={24} color="#e9c46a" />
                <View>
                  <Text className="font-bold text-lg">4407</Text>
                  <Text className=" text-slate-400 mb-2">Total Points</Text>
                </View>
              </View>
            </View>
            <View className="shadow-md shadow-slate-700 w-[45%]">
              <View className="flex flex-row gap-2 px-3 py-2">
                <Foundation name="sheriff-badge" size={24} color="#457b9d" />
                <View>
                  <Text className="font-bold text-lg">Sapphire</Text>
                  <Text className=" text-slate-400 mb-2">Current League</Text>
                </View>
              </View>
            </View>
            <View className="shadow-md shadow-slate-700 w-[45%]">
              <View className="flex flex-row gap-2 px-3 py-2">
                <SimpleLineIcons name="badge" size={24} color="gray" />
                <View>
                  <Text className="font-bold text-lg">0</Text>
                  <Text className=" text-slate-400 mb-2">Daily Mission</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="px-4 mt-2">
          <View className="flex flex-row justify-between">
            <Text className="font-bold text-2xl text-gray-800 mb-2">
              Achievements
            </Text>
            <Pressable onPress={() => console.log("clicked")}>
              <Text className="font-bold text-lg text-blue-400 mb-2">
                Show All
              </Text>
            </Pressable>
          </View>

          <View className="flex-row border-gray-300 border justify-evenly rounded-md ">
            <View className="border-r-2 border-gray-300">
              <View className="flex flex-row py-2">
                <Image
                  source={require("@/assets/images/ach5.png")}
                  className="w-28 h-24"
                  style={{ resizeMode: "contain" }}
                />
              </View>
            </View>
            <View className="border-r-2 border-gray-300">
              <View className="flex flex-row py-2">
                <Image
                  source={require("@/assets/images/ach6.png")}
                  style={{ resizeMode: "contain" }}
                  className="w-24 h-24"
                />
              </View>
            </View>
            <View className=" ">
              <View className="flex flex-row py-2">
                <Image
                  source={require("@/assets/images/ach7.png")}
                  className="w-24 h-24"
                  style={{  resizeMode: 'contain' }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
