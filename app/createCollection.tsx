import TemplateComponent from "@/components/TemplateComponent";
import useItemReducer from "@/hooks/useItemReducer";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useReducer, useState } from "react";
import {
  View,
  TextInput,
  Text,
  Pressable,
  Modal,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const CreatePageScreen = () => {
  const [collectionTitle, setCollectionTitle] = useState("");
  const [eng, setEng] = useState("");
  const [tr, setTr] = useState("");
  const [sentence, setSentence] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [addFieldOn, setAddFieldOn] = useState(false);

  const { state, addItem } = useItemReducer();

  const handleClick = () => {
    // setShowModal(true);
    // setTimeout(() => {
    //   router.push({
    //     pathname: "/(tabs)",
    //   });
    // }, 2000);

    console.log(state);
  };

  const handleTemplateSelection = (template: any) => {
    setSelectedTemplate(template);
  };

  const handleAddCategory = () => {
    setAddFieldOn(true);
  };
  const addField = () => {
    addItem({ eng: eng, tr: tr });
    // setEng("");
    // setTr("");
    // setSentence("");
    setAddFieldOn(false);
  };

  function updateItem(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <SafeAreaView className="flex-1 mx-5 space-y-2 justify-center">
      <TextInput
        value={collectionTitle}
        onChangeText={(e) => setCollectionTitle(e)}
        className="rounded-md px-4 py-2 bg-gray-100"
        placeholder="Collection Title"
      ></TextInput>
      <Text className="text-base">Choose your template</Text>
      <TemplateComponent
        onSelectTemplate={handleTemplateSelection}
        selectedTemplate={selectedTemplate}
      />
      <TouchableOpacity
        onPress={handleAddCategory}
        disabled={addFieldOn}
        className={`${addFieldOn ? `opacity-60` : `opacity-100`} `}
      >
        <View className="flex flex-row items-center rounded-md bg-blue-400 h-10 w-[95%] px-2 my-2 mx-2">
          <View className="mt-1 mx-1">
            <AntDesign name="plus" size={20} color="rgb(255,255,255)" />
          </View>
          <Text className="mt-1 text-lg text-white">Add Field</Text>
        </View>
      </TouchableOpacity>
      {addFieldOn === true ? (
        <View className="flex p-2 bg-white rounded-md">
          <View className="flex flex-row justify-between gap-1">
            <TextInput
              value={eng}
              onChangeText={(e) => setEng(e)}
              className="rounded-md px-4 py-2 bg-gray-100 my-2 flex-1"
              placeholder="ENG"
            ></TextInput>
            <TextInput
              value={tr}
              onChangeText={(e) => setTr(e)}
              className="rounded-md px-4 py-2 bg-gray-100 my-2 flex-1"
              placeholder="TR"
            ></TextInput>
          </View>
          <TextInput
            value={sentence}
            onChangeText={(e) => setSentence(e)}
            className="rounded-md px-4 py-2 bg-gray-100 my-2"
            placeholder="Sentence"
          ></TextInput>
          <Pressable
            onPress={addField}
            className="rounded-md bg-green-500 border-none flex justify-center items-center p-3"
          >
            <Text className="text-white font-semibold uppercase">ADD</Text>
          </Pressable>
          {/* <View className="absolute inset-0 bg-black opacity-50 w-[105%] h-[110%] rounded"></View> */}
        </View>
      ) : (
        <View className="rounded-md bg-white border-gray-300 border flex flex-row justify-between p-3">
          <Text className="text-black font-semibold uppercase">{eng}</Text>
          <Pressable onPress={updateItem}>
            <FontAwesome6 name="pencil" size={20} color="black" />
          </Pressable>
        </View>
      )}

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
