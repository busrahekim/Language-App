import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH, FIRESTORE_DB } from "@/firebaseConfig";
import { Button } from "@rneui/base";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuth } from "@/context/AuthProvider";
import { doc, setDoc } from "firebase/firestore";
import { router } from "expo-router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();

  const auth = FIREBASE_AUTH;

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      const user = res.user;
      const userRef = doc(FIRESTORE_DB, "users", user.uid);
      await setDoc(userRef, {
        displayName: name,
        email: email,
        password: password,
        uid: user.uid,
        photoURL: "imageURL",
        phoneNumber: "5552562323",
      });
      router.navigate("/login");
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="mx-5 flex-1 justify-center">
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          className="my-1 h-12 rounded p-2 bg-white"
          placeholder="Name"
          autoCapitalize="none"
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          className="my-1 h-12 rounded p-2 bg-white"
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          className="my-1 h-12 rounded p-2 bg-white"
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <Pressable
              onPress={handleSignUp}
              className="mt-2 justify-center flex items-center bg-[#b1a7a6] p-2 rounded"
            >
              <Text className="text-white leading-5">Create Account</Text>
            </Pressable>
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUp;
