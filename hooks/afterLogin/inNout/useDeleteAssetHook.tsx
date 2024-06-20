import {Mutation} from "@/libs/__generated__/graphql";
import {useModalState} from "@/store/modalState";
import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {Alert} from "react-native";
interface IDeleteAssetProps {
  id: string;
  enLId: string;
  inNoutId: string;
  itemValue: string;
  current?: boolean;
  assets?: boolean;
}
const DELETE_ASSET_MUTATE = gql`
  mutation deleteEnL($enLId: String!) {
    deleteEnL(enLId: $enLId) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
export default function useDeleteAssetHook() {
  const {setEditAssetsModal} = useModalState();
  const [deleteEnL, {loading, error}] = useMutation(DELETE_ASSET_MUTATE);
  const handleDeleteEnl = ({
    id,
    enLId,
    inNoutId,
    itemValue,
    current,
    assets,
  }: IDeleteAssetProps) => {
    Alert.alert("자산 삭제", "자산을 삭제하시겠습니까?", [
      {
        text: "삭제",
        style: "destructive",
        onPress(value) {
          deleteEnL({
            variables: {enLId},
            onCompleted(data) {
              if (!data.deleteEnL.ok) {
                Alert.alert("자산 삭제 오류", data.deleteEnL.errorMsg + "");
              } else {
                setEditAssetsModal(null);
              }
            },
            update(cache, {data}) {
              if (data?.deleteEnL.ok) {
                cache.modify({
                  id: `InNout:${inNoutId}`,
                  fields: {
                    currentAssets(prev) {
                      return current && assets
                        ? (prev - Number(itemValue)).toLocaleString()
                        : prev;
                    },
                    nonCurrentAssets(prev) {
                      return !current && assets
                        ? (prev - Number(itemValue)).toLocaleString()
                        : prev;
                    },
                    currentLiabilities(prev) {
                      return current && !assets
                        ? (prev - Number(itemValue)).toLocaleString()
                        : prev;
                    },
                    nonCurrentLiabilities(prev) {
                      return !current && !assets
                        ? (prev - Number(itemValue)).toLocaleString()
                        : prev;
                    },
                    totalAssets(prev) {
                      return (prev - Number(itemValue)).toLocaleString();
                    },
                  },
                });
                cache.evict({id: `EquityLiabilities:${id}`});
                cache.evict({id: `IncomeExpend${data.deleteEnL.subId}`});
                cache.gc();
              }
            },
          });
        },
      },
      {
        text: "취소",
        onPress(value) {
          return false;
        },
      },
    ]);
  };
  return {handleDeleteEnl, loading, error};
}
