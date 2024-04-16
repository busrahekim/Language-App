import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";

interface IProps {
  item: any;
}

const StudyCategoryCard = ({ item }: IProps) => {
  const handleCategoryClick = () => {
    router.push({
      pathname: "/categoryItem/[id]",
      params: { id: item.id },
    });
  };
  return (
    <>
      <View className="rounded-md bg-white h-24 w-36 p-2 relative ml-2">
        <Text className="mt-1 text-lg">{item.title}</Text>
        {/* <View className="h-4 w-4 bg-slate-100 rounded-md absolute bottom-0 right-0 m-3">
          <Entypo name="check" size={17} color="black" />
        </View> */}
        <View className="h-4 w-4 absolute bottom-12 right-10">
          <Image
            source={item.img}
            className="bg-transparent w-12 h-16"
            style={{ resizeMode: "contain" }}
          />
        </View>
      
      </View>
    </>
  );
};

export default StudyCategoryCard;
