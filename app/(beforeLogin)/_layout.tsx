import {dark, light} from "@/constants/Colors";
import {Stack} from "expo-router";
import {useColorScheme} from "react-native";

export default function BeforeLoginLayout() {
  const theme = useColorScheme() === "dark";
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen
        name="join"
        options={{
          headerStyle: {
            backgroundColor: theme ? dark.bgColor : light.bgColor,
          },
          headerTitleStyle: {color: theme ? dark.txtColor : light.txtColor},
          headerTitle: "회원가입",
          headerBackTitle: "로그인",
        }}
      />
    </Stack>
  );
}
