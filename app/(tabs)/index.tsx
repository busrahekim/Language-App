import { Dimensions, TouchableOpacity, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import Carousel from "react-native-snap-carousel";
import LanguageCard from "@/components/LanguageCard";
import LanguageItem from "@/constants/Languages";
import { useNavigation } from "@react-navigation/native";

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

const Home = () => {
  const { width } = Dimensions.get("screen");
  const navigation = useNavigation();

  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <View className="my-2 flex-1">
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
  // return (
  //   <View>
  //     <Link href="/home/settings">Push settings</Link>
  //     <Link href="/home/movie/id">movie 1</Link>
  //   </View>
  // );
};

export default Home;
