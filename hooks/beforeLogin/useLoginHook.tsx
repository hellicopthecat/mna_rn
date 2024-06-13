import {Mutation} from "@/libs/__generated__/graphql";
import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {ILoginProps} from "@/types/types";
import {router} from "expo-router";
import {Alert} from "react-native";
import userToken from "@/store/userToken";

const LOGIN_MUTATE = gql`
  mutation loginUser($password: String!, $email: String, $username: String) {
    loginUser(password: $password, email: $email, username: $username) {
      ok
      token
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;

export default function useLoginHook() {
  const {setToken} = userToken();
  const [loginUser, {loading, error}] = useMutation(LOGIN_MUTATE);
  const handleLogin = async ({username, email, password}: ILoginProps) => {
    await loginUser({
      variables: {
        username,
        email,
        password,
      },
      async onCompleted(data) {
        if (!data.loginUser.ok) {
          Alert.alert("로그인 실패", data.loginUser.errorMsg + "");
        } else {
          setToken(data.loginUser.token + "");
          router.replace("/myCompany");
        }
      },
    });
  };
  return {handleLogin, loading, error};
}
