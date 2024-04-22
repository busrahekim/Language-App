import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { Audio } from "expo-av";
import ChatBubble from "@/components/ChatBubble";
import { useCategory } from "@/hooks/useCategory";
import { collection, onSnapshot } from "firebase/firestore";
import { FIRESTORE_DB } from "@/firebaseConfig";

const languageWords = [
  {
    word: "accomplished",
    translation: "başarılı",
    sentence:
      "- She felt accomplished after completing her first marathon, a feat she had been training for tirelessly.",
    audio: require("@/assets/audio/accomplished.mp3"),
  },
];

const CategoryPage = () => {
  const { id, title } = useLocalSearchParams<{ id: string; title: string }>();
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);
  const [sound, setSound] = useState<Audio.Sound | undefined>(undefined);
  const items = useCategory(title);

  // const [data, setData] = useState<any[]>([]);
  // useEffect(() => {
  //   const itemRef = collection(FIRESTORE_DB, "Categories", id, "Words");
  //   console.log(itemRef);
  //   const subscriber = onSnapshot(itemRef, {
  //     next: (snapshot) => {
  //       const wordsData: any = [];
  //       snapshot.docs.forEach((doc) => {
  //         wordsData.push({
  //           id: doc.id,
  //           ...doc.data(),
  //         });
  //       });
  //       setData(wordsData);
  //     },
  //     error: (error) => {
  //       console.error("Error fetching words:", error);
  //     },
  //   });

  //   return () => subscriber();
  // }, [id]);

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
    <View className="flex  px-3 py-3 flex-1">
      <Text
        className="font-semibold text-xl mb-2 uppercase"
        style={{ fontFamily: "SpaceMono" }}
      >
        {title}
      </Text>

      {title === "Prepositions" ? (
        <ScrollView>
          {items.map((item) => (
            <View
              key={item.id}
              className="bg-white flex flex-row rounded mb-2 shadow-sm shadow-black h-fit"
            >
              <View className="justify-center items-center flex flex-row">
                <Text
                  style={{ transform: [{ rotate: "-90deg" }] }}
                  className="font-semibold text-xl uppercase mx-2"
                >
                  {item.eng}
                </Text>
                <View className="w-[1px] h-full mx-1 bg-gray-800" />
              </View>
              <View className="mx-5 mt-2">
                {item.condition.map((c: any) => (
                  <Text>• {c}</Text>
                ))}
                {item.usage.map((i: any) => (
                  <View className="flex flex-row mt-1 mb-1">
                    <Text>
                      <Text className="font-semibold">{item.eng}</Text> {i}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      ) : (
        <ScrollView>
          {items.map((item) => (
            // <Text>{item.eng}</Text>
            <>
              <ChatBubble item={item} key={item} />
              {item.sentence && (
                <Text
                  className="font-semibold text-sm my-2"
                  style={{ fontFamily: "SpaceMono" }}
                >
                  {item.sentence}
                </Text>
              )}
              <View className="my-2 border border-b-2 border-b-gray-200 border-x-white"></View>
            </>
          ))}
        </ScrollView>
      )}

      <View className="flex-1"></View>
    </View>
  );
};

export default CategoryPage;

{
  /* {languageWords.map((word, index) => (
        <View
          className={`${openedIndex === index ? "mb-6" : "mb-1"}`}
          key={index}
        >
          <TouchableOpacity
            className="flex flex-row items-center justify-between shadow-md px-2 rounded-md border-b-2 border-r-2 h-12 bg-white mb-2"
            onPress={() => toggleAccordion(index)}
          >
            <View className="flex flex-row items-center">
              <MaterialIcons name="spatial-audio-off" size={22} color="black" />
              <Text className="text-xl text-slate-700 px-2">{word.word}</Text>
            </View>
            <FontAwesome
              name={openedIndex === index ? "eye" : "eye-slash"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
          {openedIndex === index && (
            <Animated.View className="px-4 py-2 mx-auto relative top-[-10px] border-t-2 bg-white ease-in-out duration-500 transition rounded-b-md">
              <Text className="font-bold mb-1 text-lg">{word.translation}</Text>
              <Text style={{ display: "flex", flexWrap: "wrap" }}>
                {word.sentence.split(word.word).map((part, index) => (
                  <React.Fragment key={index}>
                    <Text className="mb-1">{part}</Text>
                    {index < word.sentence.split(word.word).length - 1 && (
                      <Text className="font-bold mb-1">{word.word}</Text>
                    )}
                  </React.Fragment>
                ))}
              </Text>
            </Animated.View>
          )}
        </View>
      ))} */
}
