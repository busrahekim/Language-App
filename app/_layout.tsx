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
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export { ErrorBoundary } from "expo-router";


const MyTheme: Theme = {
  dark: false,
  colors: {
    background: '#161a1d',
    primary: 'rgb(10, 132, 255)',
    card: 'rgb(18, 18, 18)',
    text: 'rgb(229, 229, 231)',
    border: '#414833',
    notification: 'rgb(255, 69, 58)',
  },
};


export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("Auth state changed:", user);
      setUser(user);
    });

    // Clean up subscription
    return () => unsubscribe();
  }, []);

  console.log("Current user:", user);

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

  return (
    <ThemeProvider value={MyTheme}>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        </Stack>
      </AuthProvider>
    </ThemeProvider>
  );
}
