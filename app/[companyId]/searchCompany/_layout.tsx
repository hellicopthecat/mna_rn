import {Stack} from "expo-router";

export default function SearchCompanyLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
