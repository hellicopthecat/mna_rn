import {Mutation} from "@/libs/__generated__/graphql";
import {useModalState} from "@/store/modalState";
import {IRouterParams} from "@/types/routerParamsType";
import {IRegistWorker} from "@/types/types";
import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {useGlobalSearchParams} from "expo-router";
import {Alert} from "react-native";

const REGISTER_WORKER_MUTATE = gql`
  mutation registWorker(
    $registWorkerId: Int!
    $username: String!
    $childCount: Int!
    $familyCount: Int!
    $preTaxMonthlySalary: Int!
  ) {
    registWorker(
      id: $registWorkerId
      username: $username
      childCount: $childCount
      familyCount: $familyCount
      preTaxMonthlySalary: $preTaxMonthlySalary
    ) {
      ok
      errorMsg
      id
      subId
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
export default function useRegistWorker() {
  const {setRegistWorker} = useModalState();
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const [registWorker, {loading, error}] = useMutation(REGISTER_WORKER_MUTATE);
  const handleRegistWorker = async ({
    username,
    childCount,
    familyCount,
    preTaxMonthlySalary,
  }: IRegistWorker) => {
    await registWorker({
      variables: {
        registWorkerId: Number(companyId),
        username,
        childCount,
        familyCount,
        preTaxMonthlySalary,
      },
      onCompleted(data, clientOptions) {
        if (!data.registWorker.ok) {
          Alert.alert("사원등록실패", data.registWorker.errorMsg + "");
        } else {
          setRegistWorker();
        }
      },
      update(cache, {data}) {
        if (data?.registWorker.ok) {
          const newWorker = {
            __typename: "User",
            id: data.registWorker.id,
            username,
            isOnVacation: false,
          };
          cache.modify({
            id: `Company:${companyId}`,
            fields: {
              companyWorker(prev, {toReference}) {
                const newCache = toReference(newWorker, true);
                return [newCache, ...prev];
              },
            },
          });
        }
      },
    });
  };
  return {handleRegistWorker, loading, error};
}
