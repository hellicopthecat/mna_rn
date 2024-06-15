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
import {router, useGlobalSearchParams} from "expo-router";
import {IRouterParams} from "@/types/routerParamsType";

export default function DetailCompanyLayout() {
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
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
                  <TouchableOpacity onPress={() => router.replace(`/mypage`)}>
                    <Avatar />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => router.replace(`/mypage`)}>
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
              label={() => <SharedBtn text="로그아웃" />}
              onPress={() => removeToken()}
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
          options={{
            headerTitle: "자산",
            drawerLabel({color}) {
              return (
                <TouchableOpacity
                  onPress={() => router.replace(`/${companyId}/inNoutInfo`)}
                >
                  <Text style={{color}}>자산</Text>
                </TouchableOpacity>
              );
            },
          }}
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
