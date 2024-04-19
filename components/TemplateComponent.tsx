import { View, TouchableOpacity, Image } from "react-native";
import React from "react";

interface IProps {
  onSelectTemplate: ({ template }: any) => void;
  selectedTemplate: any;
}

const TemplateComponent = ({ onSelectTemplate, selectedTemplate }: IProps) => {
  const handleCategoryClick = (template: any) => {
    onSelectTemplate(template);
  };

  return (
    <View className="flex flex-row justify-around">
      <TouchableOpacity onPress={() => handleCategoryClick("bubble")}>
        <View
          className={`rounded-md h-24 w-36 p-2 relative my-2 ${
            selectedTemplate === "bubble" ? "bg-blue-400" : "bg-white"
          }`}
        >
          <Image
            source={require("@/assets/images/bubble.png")}
            className="bg-transparent w-full h-full"
            style={{ resizeMode: "contain" }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleCategoryClick("card")}>
        <View
          className={`rounded-md h-24 w-36 p-2 relative my-2 ${
            selectedTemplate === "card" ? "bg-blue-400" : "bg-white"
          }`}
        >
          <Image
            source={require("@/assets/images/card.png")}
            className="bg-transparent w-full h-full"
            style={{ resizeMode: "contain" }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TemplateComponent;
