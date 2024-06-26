import {create} from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {TOKEN} from "@/constants/constansts";

type UserTokenType = {
  token: any;
  setToken: (payload: string) => void;
  removeToken: () => void;
};
const userToken = create<UserTokenType>((set) => ({
  token: async () => await AsyncStorage.getItem(TOKEN),
  setToken: async (payload) => {
    await AsyncStorage.setItem(TOKEN, payload);
    set({token: await AsyncStorage.getItem(TOKEN)});
  },
  removeToken: async () => {
    await AsyncStorage.removeItem(TOKEN);
    set({token: null});
  },
}));
export default userToken;
