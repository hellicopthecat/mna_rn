import {Mutation} from "@/libs/__generated__/graphql";
import {useModalState} from "@/store/modalState";
import {IRouterParams} from "@/types/routerParamsType";
import {ICreateVacation} from "@/types/types";
import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {useGlobalSearchParams} from "expo-router";
import {Alert} from "react-native";
const CREATE_VACATION_MUTATE = gql`
  mutation createVacation(
    $userId: Int!
    $companyId: Int!
    $other: Int
    $joinCompanyDate: String
  ) {
    createVacation(
      userId: $userId
      companyId: $companyId
      other: $other
      joinCompanyDate: $joinCompanyDate
    ) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
export default function useCreateVacation() {
  const {setCreateVacationModal} = useModalState();
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const [createVacation, {loading, error}] = useMutation(
    CREATE_VACATION_MUTATE
  );
  const handelCreateVacation = async ({
    userId,
    other,
    joinCompanyDate,
  }: ICreateVacation) => {
    await createVacation({
      variables: {
        userId,
        companyId: Number(companyId),
        other,
        joinCompanyDate,
      },
      onCompleted(data, clientOptions) {
        if (!data.createVacation.ok) {
          Alert.alert("연차생성실패", data.createVacation.errorMsg + "");
        } else {
          setCreateVacationModal();
        }
      },
      update(cache, {data}) {
        if (data?.createVacation.ok) {
          const newVacation = {
            __typename: "User",
            id: userId + "",
            other,
            joinCompanyDate,
          };
          cache.modify({
            id: `User:${userId}`,
            fields: {
              vacation(prev, {toReference}) {
                const newCache = toReference(newVacation, true);
                return [...prev, newCache];
              },
            },
          });
        }
      },
    });
  };
  return {handelCreateVacation, error, loading};
}
