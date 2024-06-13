import {dark, light} from "@/constants/Colors";
import useUser from "@/hooks/useUser";
import {Tabs} from "expo-router";
import {useColorScheme} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export default function AfterLoginLayout() {
  const theme = useColorScheme() === "dark";
  const {data} = useUser();
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: theme ? dark.bgColor : light.bgColor,
        },
        headerTitleStyle: {color: theme ? dark.txtColor : light.txtColor},
        tabBarStyle: {
          backgroundColor: theme ? dark.bgColor : light.bgColor,
        },
      }}
    >
      <Tabs.Screen
        name="myCompany"
        options={{
          headerTitle: data?.seeMyprofile.username,
          tabBarLabel: "나의 회사",
          tabBarIcon({color, focused, size}) {
            return focused ? (
              <Ionicons name="home" size={size} color={color} />
            ) : (
              <Ionicons name="home-outline" size={size} color={color} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="mypage"
        options={{
          headerTitle: data?.seeMyprofile.username,
          tabBarLabel: "마이페이지",
          tabBarIcon({color, focused, size}) {
            return focused ? (
              <Ionicons name="person" size={size} color={color} />
            ) : (
              <Ionicons name="person-outline" size={size} color={color} />
            );
          },
        }}
      />
    </Tabs>
  );
}
