import {dark, light} from "@/constants/Colors";
import client from "@/libs/apolloClient";
import {ApolloProvider} from "@apollo/client";
import {useFonts} from "expo-font";
import {Stack} from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {useEffect} from "react";
import {useColorScheme} from "react-native";
import "react-native-reanimated";
import {ThemeProvider} from "styled-components/native";
import {useApolloClientDevTools} from "@dev-plugins/apollo-client";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const theme = useColorScheme() === "dark";
  useApolloClientDevTools(client);

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme ? dark : light}>
        <Stack screenOptions={{headerShown: false}}>
          <Stack.Screen name="(beforeLogin)" />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </ApolloProvider>
  );
}
