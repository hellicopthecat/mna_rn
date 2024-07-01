import {dark, light} from "@/constants/Colors";
import {FontAwesome} from "@expo/vector-icons";
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
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "총 자산",
          tabBarIcon({color}) {
            return <FontAwesome color={color} name="won" size={20} />;
          },
        }}
      />
      <Tabs.Screen
        name="assets"
        options={{
          tabBarLabel: "자산",
          tabBarIcon({color, focused}) {
            return (
              <FontAwesome
                color={color}
                name={focused ? "plus-square" : "plus-square-o"}
                size={20}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="liability"
        options={{
          tabBarLabel: "부채",
          tabBarIcon({color, focused}) {
            return (
              <FontAwesome
                color={color}
                name={focused ? "minus-square" : "minus-square-o"}
                size={20}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="incomeModel"
        options={{
          tabBarLabel: "수익",
          tabBarIcon({color, focused}) {
            return (
              <FontAwesome
                color={color}
                name={focused ? "arrow-circle-down" : "arrow-circle-o-down"}
                size={20}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="expendModel"
        options={{
          tabBarLabel: "지출",
          tabBarIcon({color, focused}) {
            return (
              <FontAwesome
                color={color}
                name={focused ? "arrow-circle-up" : "arrow-circle-o-up"}
                size={20}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="chart"
        options={{
          tabBarLabel: "차트",
          tabBarIcon({color}) {
            return <FontAwesome color={color} name="pie-chart" size={20} />;
          },
        }}
      />
    </Tabs>
  );
}
