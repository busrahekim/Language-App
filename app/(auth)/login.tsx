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
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuth } from "@/context/AuthProvider";
import { doc, setDoc } from "firebase/firestore";
import { router } from "expo-router";
// import auth from "@react-native-firebase/auth";

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
      setUser(res.user);
      console.log(res);
    } catch (error: any) {
      console.log(error);
      alert("login failed");
    } finally {
      setLoading(false);
    }
  };

  // const handleLogin = async () => {
  //   setLoading(true);
  //   try {
  //     auth()
  //       .signInWithEmailAndPassword(
  //         email,
  //         password
  //       )
  //       .then(() => {
  //         console.log("User account created & signed in!");
  //       })
  //       .catch((error : any) => {
  //         if (error.code === "auth/email-already-in-use") {
  //           console.log("That email address is already in use!");
  //         }

  //         if (error.code === "auth/invalid-email") {
  //           console.log("That email address is invalid!");
  //         }

  //         console.error(error);
  //       });
  //   } catch (error: any) {
  //     console.log(error);
  //     alert("login failed");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleSignUp = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await createUserWithEmailAndPassword(auth, email, password);
  //     console.log(res);
  //     const user = res.user;
  //     const userRef = doc(FIRESTORE_DB, "users", user.uid);
  //     await setDoc(userRef, {
  //       displayName: "TEST USER",
  //       email: email,
  //       password: password,
  //       uid: user.uid,
  //       photoURL: "imageURL",
  //       phoneNumber: "5552562323",
  //     });
  //   } catch (error: any) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <View className="flex-1 justify-center">
      <Text className="mx-auto text-3xl text-white">
        <Text className="text-[#b1a7a6] font-bold text-4xl">B</Text>ushLingo
      </Text>
      <View className="mx-5 border-slate-400 border-b-2 p-5 ">
        <KeyboardAvoidingView behavior="padding">
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
            <ActivityIndicator size="large" color="#b1a7a6" />
          ) : (
            <>
              <Pressable
                onPress={handleLogin}
                className="mt-2 justify-center flex items-center bg-[#b1a7a6] p-2 rounded"
              >
                <Text className="text-white leading-5 -">Login</Text>
              </Pressable>
              <View className="flex flex-row items-center mt-4">
                <Text className="font-semibold text-white">
                  Don't you have an account ?{" "}
                </Text>
                <Pressable
                  onPress={() => router.navigate("/signup")}
                  className="justify-center flex items-center"
                >
                  <Text className="underline text-[#b1a7a6]">
                    Create account
                  </Text>
                </Pressable>
              </View>
            </>
          )}
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default Login;
