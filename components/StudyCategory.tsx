import { View, Text, ScrollView } from "react-native";
import React from "react";
import StudyCategoryCard from "./StudyCategoryCard";

const items = [
  {
    id: 1,
    title: "Mistakes",
    img: require("@/assets/images/Zari_video_games.gif"),
  },
  { id: 2, title: "Words", img: require("@/assets/images/Zari_lollipop.gif") },
  {
    id: 3,
    title: "New Learnings",
    img: require("@/assets/images/Zari_karate.gif"),
  },
];

const StudyCategory = () => {
  return (
    <View className="flex my-3 ml-4">
      <Text className="my-3 font-semibold text-gray-800 text-lg">
        My Collection
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex flex-row gap-2"
      >
        {items.map((item, index) => (
          <StudyCategoryCard item={item} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default StudyCategory;
