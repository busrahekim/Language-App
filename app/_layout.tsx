import { AuthProvider } from "@/context/AuthProvider";
import { FIREBASE_AUTH } from "@/firebaseConfig";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  Theme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export { ErrorBoundary } from "expo-router";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import auth from "@react-native-firebase/auth";

// #161a1d

const MyTheme: Theme = {
  dark: false,
  colors: {
    background: "#ebebf0",
    primary: "rgb(10, 132, 255)",
    card: "rgb(18, 18, 18)",
    text: "rgb(229, 229, 231)",
    border: "#414833",
    notification: "rgb(255, 69, 58)",
  },
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // const [user, setUser] = useState<User | null>(null);
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
  //     console.log("Auth state changed:", user);
  //     setUser(user);
  //   });

  //   // Clean up subscription
  //   return () => unsubscribe();
  // }, []);

  // console.log("Current user:", user);

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const onAuthStateChanged = (user: FirebaseAuthTypes.User) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(() => onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  if (!user) {
    router.navigate("/login");
  }

  return (
    <ThemeProvider value={MyTheme}>
      {/* <AuthProvider> */}
      {user && (
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        </Stack>
      )}

      {/* </AuthProvider> */}
    </ThemeProvider>
  );
}
