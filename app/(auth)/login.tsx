import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();

  const auth = FIREBASE_AUTH;

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      // setUser({
      //   name: "John Doe",
      // });
      console.log(res);
    } catch (error: any) {
      console.log(error);
      alert("login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      const user = res.user;
      const userRef = doc(FIRESTORE_DB, "users", user.uid);
      await setDoc(userRef, {
        displayName: "TEST USER",
        email: email,
        password: password,
        uid: user.uid,
        photoURL: "imageURL",
        phoneNumber: "5552562323",
      });
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
          className="my-1 h-12 border rounded p-2 bg-white"
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          className="my-1 h-12 border rounded p-2 bg-white"
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
            <Button title="Login" onPress={handleLogin} />
            <Button title="Create account" onPress={() => router.navigate("/signup")} />
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;