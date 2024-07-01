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
import {router} from "expo-router";

export default function DetailCompanyLayout() {
  const theme = useColorScheme() === "dark";

  const {data: user, client} = useUser();

  const {removeToken} = userToken();
  const logout = async () => {
    await client.clearStore();
    removeToken();
    router.replace("/");
  };
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
            height: "100%",
            justifyContent: "space-between",
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
              onPress={() => router.replace(`/mypage`)}
            />
            <DrawerItem
              label={() => (
                <View style={{alignItems: "center", width: "100%"}}>
                  <SharedBtn
                    text="보유회사 보러가기"
                    onSubmit={() => router.replace(`/myCompany`)}
                  />
                </View>
              )}
              onPress={() => router.replace(`/myCompany`)}
              style={{
                width: "100%",
              }}
            />
            <DrawerItemList {...props} />
            <DrawerItem
              label={() => <SharedBtn text="로그아웃" onSubmit={logout} />}
              onPress={logout}
              style={{
                width: "100%",
                justifyContent: "flex-end",
              }}
            />
          </DrawerContentScrollView>
        )}
      >
        <Drawer.Screen
          name="companyHome"
          options={{headerTitle: "회사정보", drawerLabel: "회사정보"}}
        />
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
