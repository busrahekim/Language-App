import { View, Text } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

interface IProps {
  item: any;
}

const StudyCategoryCard = ({ item }: IProps) => {
  return (
    <View className="rounded-md bg-white h-24 w-36 p-2 relative ml-2">
      <Text className="mt-1 text-lg">{item}</Text>
      <View className="h-4 w-4 bg-slate-100 rounded-md absolute bottom-0 right-0 m-3">
        <Entypo name="check" size={17} color="black" />
      </View>
    </View>
  );
};

export default StudyCategoryCard;
