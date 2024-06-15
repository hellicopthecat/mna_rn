import {Mutation} from "@/libs/__generated__/graphql";
import {useModalState} from "@/store/modalState";
import {IEditAssetProps} from "@/types/types";
import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {Alert} from "react-native";
const EDIT_ASSET_MUTATE = gql`
  mutation editEnL(
    $editEnLId: Int!
    $enLId: String!
    $enLName: String
    $enLType: String
    $enLDesc: String
    $current: Boolean
    $assests: Boolean
    $value: Int
  ) {
    editEnL(
      id: $editEnLId
      enLId: $enLId
      enLName: $enLName
      enLType: $enLType
      enLDesc: $enLDesc
      current: $current
      assests: $assests
      value: $value
    ) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
export default function useEditAssetHook() {
  const {setEditAssetsModal} = useModalState();
  const [editEnL, {loading, error}] = useMutation(EDIT_ASSET_MUTATE);
  const handleEditEnl = async ({
    editEnLId,
    enLId,
    enLName,
    enLType,
    enLDesc,
    current,
    assests,
    value,
  }: IEditAssetProps) => {
    await editEnL({
      variables: {
        editEnLId,
        enLId,
        enLName,
        enLType,
        enLDesc,
        current,
        assests,
        value,
      },
      onCompleted(data, clientOptions) {
        if (!data.editEnL.ok) {
          Alert.alert("수정실패", data.editEnL.errorMsg + "");
        } else {
          setEditAssetsModal(null);
        }
      },
      update() {},
    });
  };
  return {handleEditEnl, loading, error};
}
