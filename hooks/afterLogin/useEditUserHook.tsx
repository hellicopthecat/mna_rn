import {Mutation} from "@/libs/__generated__/graphql";
import {useModalState} from "@/store/modalState";
import {IEditUserProps} from "@/types/types";
import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {Alert} from "react-native";
const EDIT_USER_MUTATE = gql`
  mutation EditUser(
    $phone: String
    $avatar: String
    $lastName: String
    $firstName: String
    $password: String
  ) {
    editUser(
      phone: $phone
      avatar: $avatar
      lastName: $lastName
      firstName: $firstName
      password: $password
    ) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
export default function useEditUserHook() {
  const {setEditUserModal} = useModalState();
  const [editUser, {loading, error}] = useMutation(EDIT_USER_MUTATE);
  const handleEditUser = async ({
    userId,
    firstName,
    lastName,
    password,
    phone,
    avatar,
  }: IEditUserProps) => {
    await editUser({
      variables: {firstName, lastName, password, phone, avatar},
      onCompleted(data) {
        if (!data.editUser.ok) {
          Alert.alert("회원정보수정실패", data.editUser.errorMsg + "");
        } else {
          setEditUserModal();
        }
      },
      update(cache, {data}) {
        if (data?.editUser.ok) {
          cache.modify({
            id: `User:${userId}`,
            fields: {
              firstName() {
                return firstName;
              },
              lastName() {
                return lastName;
              },
              password() {
                return password;
              },
              phone() {
                return phone;
              },
              avatar() {
                return avatar;
              },
            },
          });
        }
      },
    });
  };
  return {handleEditUser, loading, error};
}
