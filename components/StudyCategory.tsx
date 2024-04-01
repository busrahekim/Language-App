import { View, Text, ScrollView } from "react-native";
import React from "react";
import StudyCategoryCard from "./StudyCategoryCard";

const items = ["Daily Talk", "Find Location", "Greeting"];

const StudyCategory = () => {
  return (
    <View className="flex my-3 ml-4">
      <Text className="my-3 font-semibold text-slate-500 text-lg">Category Header</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex flex-row gap-2">
        {items.map((item, index) => (
          <StudyCategoryCard item={item} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default StudyCategory;
