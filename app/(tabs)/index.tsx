import { Button, Dimensions, View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import Carousel from "react-native-snap-carousel";
import LanguageCard from "@/components/LanguageCard";
import LanguageItem from "@/constants/Languages";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { FIRESTORE_DB } from "../../firebaseConfig";

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

  const addItem = async () => {
    console.log("add");
    const doc = await addDoc(collection(FIRESTORE_DB, "list"), {
      title: item,
      done: false,
    });
    setItem("");
  };

  return (
    <View className="my-2 flex-1">
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

      <View className="bg-red-500 flex-1 mt-2">
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
      </View>
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
