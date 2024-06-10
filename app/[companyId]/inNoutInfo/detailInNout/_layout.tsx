import {dark, light} from "@/constants/Colors";
import {Tabs} from "expo-router";
import {useColorScheme} from "react-native";

export default function DetailInNoutLayout() {
  const theme = useColorScheme() === "dark";
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: theme ? dark.bgColor : light.bgColor},
      }}
    >
      <Tabs.Screen name="index" options={{tabBarLabel: "총자산"}} />
      <Tabs.Screen name="assets" options={{tabBarLabel: "자산"}} />
      <Tabs.Screen name="liability" options={{tabBarLabel: "부채"}} />
      <Tabs.Screen name="incomeModel" options={{tabBarLabel: "수익"}} />
      <Tabs.Screen name="expendModel" options={{tabBarLabel: "지출"}} />
    </Tabs>
  );
}
