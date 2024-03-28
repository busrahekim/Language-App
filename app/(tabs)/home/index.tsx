import {
  Dimensions,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import Carousel from "react-native-snap-carousel";
import LanguageCard from "@/components/LanguageCard";

const home = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <View className="my-2 flex-1">
      <Carousel
        loop
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: "flex", alignItems: "center" }}
        data={[...new Array(6).keys()]}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        renderItem={({ item }) => (
          <View className="rounded-3xl overflow-hidden">
            <LanguageCard width={width} height={height} item={item} />
          </View>
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

export default home;
