import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Pressable,
  Modal,
  SafeAreaView,
} from "react-native";

const CreatePageScreen = () => {
  const [collectionTitle, setCollectionTitle] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
    setTimeout(() => {
      router.push({
        pathname: "/(tabs)",
      });
    }, 2000);
  };

  return (
    <SafeAreaView className="flex-1 mx-5 space-y-2 justify-center">
      <Text className="font-semibold">Collection Title</Text>
      <TextInput
        value={collectionTitle}
        onChangeText={(e) => setCollectionTitle(e)}
        className="rounded-md px-4 py-2 bg-gray-300"
      ></TextInput>

      <Pressable
        onPress={handleClick}
        className="rounded-md bg-white border-gray-300 border flex justify-center items-center p-3"
      >
        <Text className="text-red-500 font-semibold uppercase">Create</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View className="flex-1 justify-center items-center">
          <View className="w-60 h-32 bg-blue-300 rounded-md shadow-md justify-center items-center">
            <Text className="text-center mb-2">Collection Created!</Text>
            <Pressable onPress={() => setShowModal(false)}>
              <Text className="text-red-500 font-semibold uppercase">
                Close
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* TODO: bgopacity */}
      {showModal && <View className="absolute inset-0 bg-black opacity-50" />}
    </SafeAreaView>
  );
};

export default CreatePageScreen;
