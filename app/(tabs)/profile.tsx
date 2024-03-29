import { View, Text } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";
import { FIREBASE_AUTH } from "@/firebaseConfig";
import { signOut } from "firebase/auth";

const Profile = () => {
  const auth = FIREBASE_AUTH;

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Profile</Text>
      <Button onPress={handleSignOut} title="Sign Out" />
    </View>
  );
};

export default Profile;
