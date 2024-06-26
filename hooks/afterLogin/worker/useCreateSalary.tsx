import {Mutation} from "@/libs/__generated__/graphql";
import {useModalState} from "@/store/modalState";
import {IRouterParams} from "@/types/routerParamsType";
import {ICreateSalary} from "@/types/types";
import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {useGlobalSearchParams} from "expo-router";
import {Alert} from "react-native";
const CREATE_SALARY_MUTATE = gql`
  mutation createSalary(
    $userId: Int!
    $companyId: Int!
    $preTaxMonthlySalary: Int
    $familyCount: Int
    $childCount: Int
  ) {
    createSalary(
      userId: $userId
      companyId: $companyId
      preTaxMonthlySalary: $preTaxMonthlySalary
      familyCount: $familyCount
      childCount: $childCount
    ) {
      ok
      errorMsg
      id
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;

export default function useCreateSalary() {
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const {setCreateSalaryModal} = useModalState();
  const [createSalary, {loading, error}] = useMutation(CREATE_SALARY_MUTATE);
  const handleCreateSalary = async ({
    userId,
    preTaxMonthlySalary,
    familyCount,
    childCount,
  }: ICreateSalary) => {
    await createSalary({
      variables: {
        userId,
        companyId: Number(companyId),
        preTaxMonthlySalary: Number(preTaxMonthlySalary),
        familyCount: Number(familyCount),
        childCount: Number(childCount),
      },
      onCompleted(data) {
        if (!data.createSalary.ok) {
          Alert.alert("급여생성실패", data.createSalary.errorMsg + "");
        } else {
          setCreateSalaryModal();
        }
      },
      update(cache, {data}) {
        if (data?.createSalary.ok) {
          const newSalary = {
            __typename: "User",
            id: userId + "",
            preTaxMonthlySalary,
            familyCount,
            childCount,
            annualSalary: preTaxMonthlySalary * 12,
          };
          cache.modify({
            id: `User:${userId}`,
            fields: {
              salary(prev, {toReference}) {
                const newCache = toReference(newSalary, true);
                return [...prev, newCache];
              },
            },
          });
        }
      },
    });
  };
  return {handleCreateSalary, loading, error};
}
