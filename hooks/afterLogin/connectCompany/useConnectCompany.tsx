import {
  Mutation,
  MutationConnectCompanyArgs,
} from "@/libs/__generated__/graphql";
import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {Alert} from "react-native";

const CONNECT_COMPANY_MUTATE = gql`
  mutation connectCompany($companyId: Int!, $targetCompanyId: Int!) {
    connectCompany(companyId: $companyId, targetCompanyId: $targetCompanyId) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation, MutationConnectCompanyArgs>;
export default function useConnectCompany() {
  const [connectCompany, {loading, error}] = useMutation(
    CONNECT_COMPANY_MUTATE
  );
  const handleConnectCompany = async ({
    companyId,
    targetCompanyId,
  }: MutationConnectCompanyArgs) => {
    await connectCompany({
      variables: {companyId, targetCompanyId},
      onCompleted(data) {
        if (!data.connectCompany.ok) {
          Alert.alert("팔로우실패", data.connectCompany.errorMsg + "");
        }
      },
      update(cache, {data}) {
        if (data?.connectCompany.ok) {
          const newConnectCompany = {
            __typename: "Company",
            id: targetCompanyId,
          };
          cache.modify({
            id: `Company:${companyId}`,
            fields: {
              connectedCompany(prev, {toReference}) {
                return [...prev, toReference(newConnectCompany, true)];
              },
            },
          });
          cache.modify({
            id: `Company:${targetCompanyId}`,
            fields: {
              connectingCompany(prev, {toReference}) {
                return [...prev, toReference(newConnectCompany, true)];
              },
            },
          });
        }
      },
    });
  };
  return {handleConnectCompany, loading, error};
}
