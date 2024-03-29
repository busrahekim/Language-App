import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCQDO0nFpi610mooJS52IxwoSxWz4v2_w8",
  authDomain: "languageapp-86a62.firebaseapp.com",
  projectId: "languageapp-86a62",
  storageBucket: "languageapp-86a62.appspot.com",
  messagingSenderId: "550758220374",
  appId: "1:550758220374:web:6f4ee8d9bfbaf2174431f7",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
