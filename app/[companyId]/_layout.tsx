import {dark, light} from "@/constants/Colors";
import {
  Dimensions,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Drawer} from "expo-router/drawer";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import Avatar from "@/components/shared/Avatar";
import RowCont from "@/components/shared/RowCont";
import SharedTxt from "@/components/shared/SharedTxt";
import useUser from "@/hooks/useUser";
import SharedBtn from "@/components/shared/SharedBtn";
import userToken from "@/store/userToken";

export default function DetailCompanyLayout() {
  const theme = useColorScheme() === "dark";
  const {data: user} = useUser();
  const {removeToken} = userToken();
  return (
    <GestureHandlerRootView>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: theme ? dark.bgColor : light.bgColor,
          },
          headerTitleStyle: {color: theme ? dark.txtColor : light.txtColor},
          drawerStyle: {
            backgroundColor: theme ? dark.bgColor : light.bgColor,
          },
          drawerActiveTintColor: "skyblue",
          drawerInactiveTintColor: theme ? dark.txtColor : light.txtColor,
        }}
        drawerContent={(props) => (
          <DrawerContentScrollView {...props}>
            <DrawerItem
              label={() => (
                <RowCont gap="20px">
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate(`mypage`)}
                  >
                    <Avatar />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate(`mypage`)}
                  >
                    <SharedTxt text={user?.seeMyprofile.username + ""} />
                  </TouchableOpacity>
                </RowCont>
              )}
              onPress={() => {
                props.navigation.navigate(`mypage`);
              }}
              labelStyle={{color: "red"}}
            />
            <DrawerItemList {...props} />
            <DrawerItem
              label={() => (
                <SharedBtn text="로그아웃" onSubmit={() => removeToken()} />
              )}
              onPress={() => {
                console.log("hohdo");
              }}
              style={{
                width: "100%",
                height: "110%",
                justifyContent: "flex-end",
              }}
            />
          </DrawerContentScrollView>
        )}
      >
        <Drawer.Screen
          name="inNoutInfo"
          options={{headerTitle: "자산", drawerLabel: "자산"}}
        />
        <Drawer.Screen
          name="workers"
          options={{headerTitle: "인사관리", drawerLabel: "인사관리"}}
        />
        <Drawer.Screen
          name="products"
          options={{headerTitle: "재고관리", drawerLabel: "재고관리"}}
        />
        <Drawer.Screen
          name="searchCompany"
          options={{headerTitle: "회사검색", drawerLabel: "회사검색"}}
        />
        <Drawer.Screen
          name="connectCompany"
          options={{headerTitle: "거래처", drawerLabel: "거래처"}}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
