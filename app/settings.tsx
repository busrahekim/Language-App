import { View, Text, TextInput, Pressable, Image } from "react-native";
import { FIREBASE_AUTH } from "@/firebaseConfig";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Settings() {
  const [name, setName] = useState("Bush");
  const [username, setUsername] = useState("Bush149479");
  const [password, setPassword] = useState("123456");
  const [email, setEmail] = useState("bush@admin.com");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const auth = FIREBASE_AUTH;

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <View className="flex-1 mx-5 space-y-2">
      <View className="flex items-center justify-center mt-5">
        <View className="bg-slate-300 w-24 h-24 rounded-full overflow-hidden">
          <Image
            source={require("@/assets/images/profile2.jpg")}
            className="object-cover w-24 h-24 "
          />
        </View>
        <Text className="font-semibold text-base text-rose-950">
          Change Avatar
        </Text>
      </View>
      <Text className="font-semibold">Name</Text>
      <TextInput
        value={name}
        onChangeText={(e) => setName(e)}
        className="rounded-md px-4 py-2 bg-gray-300"
      ></TextInput>
      <Text className="font-semibold">Username</Text>
      <TextInput
        value={username}
        onChangeText={(e) => setUsername(e)}
        className="rounded-md px-4 py-2 bg-gray-300"
      ></TextInput>
      <Text className="font-semibold">Password</Text>
      <View className=" relative w-100">
        <TextInput
          value={password}
          onChangeText={(e) => setPassword(e)}
          className="rounded-md px-4 py-2 bg-gray-300 w-full"
          secureTextEntry={!showPassword}
        />
        <MaterialCommunityIcons
          name={showPassword ? "eye-off" : "eye"}
          size={24}
          color="#aaa"
          onPress={() => setShowPassword(!showPassword)}
          style={{
            position: "absolute",
            right: 12,
            top: "50%",
            transform: [{ translateY: -12 }],
          }}
        />
      </View>
      <Text className="font-semibold">Email</Text>
      <TextInput
        value={email}
        onChangeText={(e) => setEmail(e)}
        className="rounded-md px-4 py-2 bg-gray-300"
      ></TextInput>
      <Text className="font-semibold">Phone Number</Text>
      <TextInput
        value={phoneNumber}
        onChangeText={(e) => setPhoneNumber(e)}
        className="rounded-md px-4 py-2 bg-gray-300 mb-5"
        placeholder="Add a phone number"
      ></TextInput>
      <Pressable
        onPress={handleSignOut}
        className="rounded-md border-gray-300 border flex justify-center items-center p-3"
      >
        <Text className="text-red-500 font-semibold">SIGN OUT</Text>
      </Pressable>
    </View>
  );
}
