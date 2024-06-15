import {Mutation} from "@/libs/__generated__/graphql";
import {IRouterParams} from "@/types/routerParamsType";
import {ICreateAssetProps} from "@/types/types";
import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {useGlobalSearchParams} from "expo-router";
import {Alert} from "react-native";
const CREATE_ASSET_MUTATE = gql`
  mutation createAssets(
    $createEnLId: Int!
    $enLId: String!
    $enLName: String!
    $enLType: String!
    $current: Boolean!
    $assests: Boolean!
    $value: Int!
    $enLDesc: String
  ) {
    createEnL(
      id: $createEnLId
      enLId: $enLId
      enLName: $enLName
      enLType: $enLType
      current: $current
      assests: $assests
      value: $value
      enLDesc: $enLDesc
    ) {
      ok
      id
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
export default function useCreateAssetHook() {
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const [createAsset, {loading, error}] = useMutation(CREATE_ASSET_MUTATE);
  const handleCreateAsset = async ({
    inNoutId,
    enLId,
    enLName,
    enLType,
    current,
    assests,
    value,
    enLDesc,
  }: ICreateAssetProps) => {
    await createAsset({
      variables: {
        createEnLId: Number(companyId),
        enLId,
        enLName,
        enLType,
        current,
        assests,
        value: Number(value),
        enLDesc,
      },
      onCompleted(data) {
        if (!data.createEnL.ok) {
          Alert.alert("자산생성실패", data.createEnL.errorMsg + "");
        }
      },
      update(cache, {data}) {
        if (data?.createEnL.ok) {
          cache.modify({
            id: `InNout:${inNoutId}`,
            fields: {
              totalAssetsDesc(prev, {toReference}) {
                const newData = {
                  __typename: "EquityLiabilities",
                  id: data.createEnL.id,
                  enLId,
                  enLName,
                  enLType,
                  current,
                  assests,
                  value: Number(value),
                  enLDesc,
                };
                const newTotalAssets = toReference(newData, true);
                return [newTotalAssets, ...prev];
              },
            },
          });
        }
      },
    });
  };
  return {handleCreateAsset, loading, error};
}
