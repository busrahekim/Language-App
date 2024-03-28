import { TouchableWithoutFeedback, Image } from "react-native";
import React from "react";

interface LanguageCardProps {
  width: number;
  height: number;
  item: any;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ width, height, item }) => {
  return (
    <TouchableWithoutFeedback>
      <Image
        source={require("../assets/images/eng.jpg")}
        style={{ width: width * 0.6, height: height * 0.4 }}
      />
    </TouchableWithoutFeedback>
  );
};

export default LanguageCard;
