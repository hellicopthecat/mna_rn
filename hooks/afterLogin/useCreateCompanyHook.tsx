import {Mutation} from "@/libs/__generated__/graphql";
import {useModalState} from "@/store/modalState";
import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {Alert} from "react-native";
import useUser from "../useUser";

const CREATE_COMPANY_MUTATE = gql`
  mutation createCompany($companyName: String!) {
    createCompany(companyName: $companyName) {
      ok
      id
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
export default function useCreateCompanyHook() {
  const {data: userData} = useUser();
  const {setCreateCompany} = useModalState();
  const [createCompany, {loading, error}] = useMutation(CREATE_COMPANY_MUTATE);
  const handleCreateCompany = ({companyName}: {companyName: string}) => {
    createCompany({
      variables: {companyName},
      onCompleted(data) {
        if (!data.createCompany.ok) {
          Alert.alert("회사생성실패", data.createCompany.errorMsg + "");
        } else {
          setCreateCompany();
        }
      },
      update(cache, {data}) {
        if (data?.createCompany.ok) {
          cache.modify({
            id: cache.identify({
              __typename: "User",
              id: userData?.seeMyprofile.id,
            }),
            fields: {
              hasCompanyCount(prev) {
                return prev + 1;
              },
              ownCompany(prev, {toReference}) {
                const newData = {
                  __typename: "Company",
                  id: data?.createCompany.id + "",
                  companyName,
                  isOwned: true,
                  isMananger: true,
                  companyInNout: {
                    __typename: "InNout",
                    totalAssets: 0,
                  },
                  companyWorker: [{id: userData?.seeMyprofile.id}],
                };
                const newCompany = toReference(newData, true);
                return [...prev, newCompany];
              },
            },
          });
        }
      },
    });
  };
  return {handleCreateCompany, loading, error};
}
