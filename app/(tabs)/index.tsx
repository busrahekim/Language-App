import {
  Button,
  Dimensions,
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Carousel from "react-native-snap-carousel";
import LanguageCard from "@/components/LanguageCard";
import LanguageItem from "@/constants/Languages";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { FIRESTORE_DB } from "../../firebaseConfig";
import HomeHeader from "@/components/HomeHeader";
import HomeSegment from "@/components/HomeSegment";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const { width } = Dimensions.get("screen");
  const [items, setItems] = useState<any[]>([]);
  const [item, setItem] = useState("");

  useEffect(() => {
    const itemRef = collection(FIRESTORE_DB, "list");
    const subscriber = onSnapshot(itemRef, {
      next: (snapshot) => {
        const a: any[] = [];
        snapshot.docs.forEach((doc) => {
          a.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setItems(a);
      },
    });

    return () => subscriber();
  }, []);

  // const addItem = async () => {
  //   console.log("add");
  //   const doc = await addDoc(collection(FIRESTORE_DB, "list"), {
  //     title: item,
  //     done: false,
  //   });
  //   setItem("");
  // };

  const handleGoalClick = () => {
    console.log("goal");
  };

  return (
    <SafeAreaView className="flex-1">
      <HomeHeader />
      <ScrollView>
        <View className="flex justify-center mx-3 mt-3 rounded-md p-3 border-b-2 border-r-2 h-46 overflow-hidden relative bg-white">
          <Text className="text-2xl">Hello, Bush!</Text>
          <Text className="text-lg">
            You should make more exercise to reach your daily goal.
          </Text>
          <Pressable className="mt-4" onPress={handleGoalClick}>
            <Text className="text-lg text-blue-500 font-bold">
              Edit your goal
            </Text>
          </Pressable>
          <View className="absolute right-0 bottom-0 h-16 w-16">
            <View className="absolute right-[-34px] bottom-[10px] w-[170px] transform -rotate-45 bg-blue-500 py-1"></View>
          </View>
        </View>

        <HomeSegment />
      </ScrollView>

      {/* <View className="flex-1 mt-2">
        <TextInput
          placeholder="Add item"
          onChangeText={(text: string) => setItem(text)}
          value={item}
        />
        <Button onPress={() => addItem()} title="add" />
        {items.length > 0 && (
          <View>
            {items.map((item) => (
              <Text key={item.id}>{item.title}</Text>
            ))}
          </View>
        )}
      </View> */}
    </SafeAreaView>
  );
  // return (
  //   <View>
  //     <Link href="/home/settings">Push settings</Link>
  //     <Link href="/home/movie/id">movie 1</Link>
  //   </View>
  // );
};

export default Home;
