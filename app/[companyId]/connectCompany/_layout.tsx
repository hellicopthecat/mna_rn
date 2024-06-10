import {dark, light} from "@/constants/Colors";
import {Tabs} from "expo-router";
import {useColorScheme} from "react-native";

export default function ConnectCompanyLayout() {
  const theme = useColorScheme() === "dark";
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: theme ? dark.bgColor : light.bgColor},
      }}
    >
      <Tabs.Screen name="index" options={{tabBarLabel: "발주처"}} />
      <Tabs.Screen name="connectingCompany" options={{tabBarLabel: "거래처"}} />
    </Tabs>
  );
}
