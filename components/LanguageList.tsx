import { View, Text, Dimensions } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import LanguageItem from "@/constants/Languages";
import LanguageCard from "@/components/LanguageCard";

const languageItems: LanguageItem[] = [
  {
    id: 1,
    image: require("@/assets/images/1.jpg"),
    name: "English",
  },
  { id: 2, image: require("@/assets/images/2.jpg"), name: "German" },
  { id: 3, image: require("@/assets/images/3.jpg"), name: "Spanish" },
  { id: 4, image: require("@/assets/images/4.jpg"), name: "French" },
  { id: 5, image: require("@/assets/images/5.jpg"), name: "Turkish" },
];

const LanguageList = () => {
  const { width } = Dimensions.get("screen");

  return (
    <View>
      <Carousel
        loop
        sliderWidth={width}
        itemWidth={250}
        slideStyle={{ display: "flex", alignItems: "center" }}
        data={languageItems}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        renderItem={({ item }) => (
          <LanguageCard width={250} height={350} item={item} />
        )}
      />
    </View>
  );
};

export default LanguageList;
