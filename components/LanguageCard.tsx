import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import LanguageItem from "@/constants/Languages";
import { router } from "expo-router";

interface LanguageCardProps {
  width: number;
  height: number;
  item: LanguageItem;
}

const LanguageCard: React.FC<LanguageCardProps> = ({
  width,
  height,
  item,
  ...props
}) => {
  return (
    <View style={{ borderRadius: 16, overflow: "hidden" }}>
      <TouchableOpacity
        className="flex-1"
        onPress={() =>
          router.push({
            pathname: "/categoryItem/[id]",
            params: { id: item.id },
          })
        }
      >
        <Image
          source={item.image}
          style={{ width: width, height: height }}
          {...props}
          className="object-cover"
        />
      </TouchableOpacity>
    </View>
  );
};

export default LanguageCard;
