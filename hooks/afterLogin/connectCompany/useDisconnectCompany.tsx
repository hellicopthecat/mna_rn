import {
  Company,
  Mutation,
  MutationDisconnectCompanyArgs,
} from "@/libs/__generated__/graphql";
import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {Maybe} from "graphql/jsutils/Maybe";
import {Alert} from "react-native";
const DISCONNECT_COMPANY_MUTATE = gql`
  mutation disconnectCompany($companyId: Int!, $targetCompanyId: Int!) {
    disconnectCompany(
      companyId: $companyId
      targetCompanyId: $targetCompanyId
    ) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation, MutationDisconnectCompanyArgs>;
export default function useDisconnectCompany() {
  const [disconnectCompany, {loading, error}] = useMutation(
    DISCONNECT_COMPANY_MUTATE
  );
  const handleDisconnect = async ({
    companyId,
    targetCompanyId,
  }: MutationDisconnectCompanyArgs) => {
    await disconnectCompany({
      variables: {companyId, targetCompanyId},
      onCompleted(data) {
        if (!data.disconnectCompany.ok) {
          Alert.alert("연결해제실패", data.disconnectCompany.errorMsg + "");
        }
      },
      update(cache, {data}) {
        if (data?.disconnectCompany.ok) {
          cache.modify({
            id: `Company:${companyId}`,
            fields: {
              connectedCompany(prev) {
                const filtered = prev.filter(
                  (company: Maybe<Company>) =>
                    company?.id === targetCompanyId + ""
                );
                return filtered;
              },
            },
          });
          cache.modify({
            id: `Company:${targetCompanyId}`,
            fields: {
              connectingCompany(prev) {
                const filtered = prev.filter(
                  (company: Maybe<Company>) => company?.id === companyId + ""
                );
                return filtered;
              },
            },
          });
        }
      },
    });
  };
  return {handleDisconnect, loading, error};
}
