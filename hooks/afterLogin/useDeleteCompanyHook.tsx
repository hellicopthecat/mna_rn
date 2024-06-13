import {Company, Mutation} from "@/libs/__generated__/graphql";
import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {Alert} from "react-native";
import useUser from "../useUser";

const DELETE_COMPANY_MUTATE = gql`
  mutation deleteCompany($deleteCompanyId: Int) {
    deleteCompany(id: $deleteCompanyId) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
export default function useDeleteCompanyHook() {
  const {data: userData} = useUser();
  const [deleteCompany, {loading, error}] = useMutation(DELETE_COMPANY_MUTATE);
  const handleDeleteCompany = ({id: companyId}: {id: number}) => {
    Alert.alert("삭제", "삭제하시겠습니까?", [
      {
        text: "삭제",
        style: "destructive",
        onPress: () => {
          deleteCompany({
            variables: {
              deleteCompanyId: companyId,
            },
            onCompleted(data) {
              if (!data.deleteCompany.ok) {
                Alert.alert("회사삭제실패", data.deleteCompany.errorMsg + "");
              }
            },
            update(cache, {data}) {
              if (data?.deleteCompany.ok) {
                const id = `User:${userData?.seeMyprofile.id}`;
                cache.evict({id: `Company:${companyId}`});
                cache.gc();
                cache.modify({
                  id,
                  fields: {
                    hasCompanyCount(prev) {
                      return prev - 1;
                    },
                  },
                });
              }
            },
          });
        },
      },
      {text: "취소", style: "default", onPress: () => false},
    ]);
  };
  return {handleDeleteCompany, loading, error};
}
