import { View, Text, TouchableOpacity, Animated } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { Audio } from "expo-av";

const languageWords = [
  {
    word: "success",
    translation: "başarı",
    sentence:
      "- After years of hard work and dedication, she finally achieved the success she had alway dreamed of.",
    audio: require("@/assets/audio/success.mp3"),
  },
  {
    word: "accomplished",
    translation: "başarılı",
    sentence:
      "- She felt accomplished after completing her first marathon, a feat she had been training for tirelessly.",
    audio: require("@/assets/audio/accomplished.mp3"),
  },
  {
    word: "unsuccessful",
    translation: "başarısız",
    sentence:
      "- Despite his best efforts, the project remained unsuccessful, leading to disappointment and frustration among the team.",
    audio: require("@/assets/audio/unsuccessful.mp3"),
  },
];

const LanguagePage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);
  const [sound, setSound] = useState<Audio.Sound | undefined>(undefined);

  const playSound = async (audio: any) => {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Audio.Sound.createAsync(audio);
    setSound(newSound);
    await newSound.playAsync();
  };

  const toggleAccordion = (index: number) => {
    if (index === openedIndex) {
      setOpenedIndex(null);
    } else {
      setOpenedIndex(index);
      playSound(languageWords[index].audio);
    }
  };

  return (
    <View className="flex justify-center px-3 py-3 flex-1">
      <Text className="font-semibold text-xl mb-2">Today's Words</Text>
      {languageWords.map((word, index) => (
        <View
          className={`${openedIndex === index ? "mb-6" : "mb-1"}`}
          key={index}
        >
          <TouchableOpacity
            className="flex flex-row items-center justify-between shadow-md px-2 rounded-md bg-[#1D3557] shadow-blue-800 h-12"
            onPress={() => toggleAccordion(index)}
          >
            <View className="flex flex-row items-center">
              <MaterialIcons name="spatial-audio-off" size={22} color="white" />
              <Text className="text-xl text-white px-2">{word.word}</Text>
            </View>
            <FontAwesome
              name={openedIndex === index ? "eye" : "eye-slash"}
              size={24}
              color="#457B9D"
            />
          </TouchableOpacity>
          {openedIndex === index && (
            <Animated.View className="px-4 py-2 w-full relative top-[-5px] bg-white ease-in-out duration-500 transition rounded-b-md">
              <Text className="font-bold mb-1 text-lg">{word.translation}</Text>
              <Text style={{ display: "flex", flexWrap: "wrap" }}>
                {word.sentence.split(word.word).map((part, index) => (
                  <React.Fragment key={index}>
                    <Text className="mb-1">{part}</Text>
                    {index < word.sentence.split(word.word).length - 1 && (
                      <Text className="font-bold mb-1">
                        {word.word}
                      </Text>
                    )}
                  </React.Fragment>
                ))}
              </Text>
            </Animated.View>
          )}
        </View>
      ))}
      <View className="flex-1"></View>
    </View>
  );
};

export default LanguagePage;
