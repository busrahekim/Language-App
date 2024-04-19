import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import StudyCategoryCard from "./StudyCategoryCard";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { collection } from "firebase/firestore";
import { FIRESTORE_DB } from "@/firebaseConfig";
import { useCategory } from "@/hooks/useCategory";

const items = [
  {
    id: 1,
    title: "Phrases",
    img: require("@/assets/images/Zari_video_games.gif"),
  },
  { id: 2, title: "Words", img: require("@/assets/images/Zari_lollipop.gif") },
  {
    id: 3,
    title: "Prepositions",
    img: require("@/assets/images/Zari_karate.gif"),
  },
];

const StudyCategory = () => {
  const categories = useCategory("Categories");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (item: {
    categoryID: string;
    categoryTitle: string;
  }) => {
    router.push({
      pathname: "/categoryItem/[id]",
      params: { id: item.categoryID, title: item.categoryTitle },
    });
  };

  const handleAddCategory = () => {
    router.push({
      pathname: "/createCollection",
    });
  };
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
        {categories.map((item, index) => (
          <TouchableOpacity
            onPress={() => handleCategoryClick(item)}
            key={index}
          >
            <StudyCategoryCard item={item} key={index} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity onPress={handleAddCategory}>
        <View className="flex flex-row items-center rounded-md bg-white h-10 w-[95%] px-2 my-2 mx-2">
          <View className="mt-1 mx-1">
            <AntDesign name="plus" size={20} color="rgb(59,130,246)" />
          </View>
          <Text className="mt-1 text-lg text-blue-400">
            Create a new collection
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default StudyCategory;
