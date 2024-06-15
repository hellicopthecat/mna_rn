import {Mutation} from "@/libs/__generated__/graphql";
import {ICreateUserProps} from "@/types/types";
import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {router} from "expo-router";
import {Alert} from "react-native";

const CREATE_USER_MUTATE = gql`
  mutation createUser(
    $username: String!
    $email: String!
    $password: String!
    $firstName: String
    $lastName: String
    $phone: String
  ) {
    createUser(
      username: $username
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      phone: $phone
    ) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
export default function useJoinHook() {
  const [createUser, {loading, error}] = useMutation(CREATE_USER_MUTATE);
  const handleCreateUser = async ({
    username,
    email,
    password,
    phone,
    firstName,
    lastName,
  }: ICreateUserProps) => {
    await createUser({
      variables: {
        username,
        email,
        password,
        phone,
        firstName,
        lastName,
      },
      onCompleted(data) {
        if (!data.createUser.ok) {
          Alert.alert("회원가입실패", data.createUser.errorMsg + "");
        } else {
          router.replace("/");
        }
      },
    });
  };
  return {handleCreateUser, loading, error};
}
