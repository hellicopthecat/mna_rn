import {annualCalculator} from "@/constants/constansts";
import {Mutation} from "@/libs/__generated__/graphql";
import {useModalState} from "@/store/modalState";
import {IRouterParams} from "@/types/routerParamsType";
import {IEditVacation} from "@/types/types";
import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {useGlobalSearchParams} from "expo-router";
import {Alert} from "react-native";

const EDIT_VACATION_MUTATE = gql`
  mutation editVacation(
    $companyId: Int!
    $vacationId: Int!
    $other: Int
    $joinCompanyDate: String
  ) {
    editVacation(
      companyId: $companyId
      vacationId: $vacationId
      other: $other
      joinCompanyDate: $joinCompanyDate
    ) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
export default function useEditVacationHook() {
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const {setVacationModal} = useModalState();
  const [editVacation, {loading, error}] = useMutation(EDIT_VACATION_MUTATE);
  const handleEditVacation = async ({
    vacationId,
    other,
    joinCompanyDate,
  }: IEditVacation) => {
    await editVacation({
      variables: {
        companyId: Number(companyId),
        vacationId,
        other: Number(other),
        joinCompanyDate,
      },
      onCompleted(data) {
        if (!data.editVacation.ok) {
          Alert.alert("연차수정실패", data.editVacation.errorMsg + "");
        } else {
          setVacationModal();
        }
      },
      update(cache, {data}) {
        if (data?.editVacation.ok) {
          cache.modify({
            id: `Vacation:${vacationId}`,
            fields: {
              annual() {
                return Number(annualCalculator(joinCompanyDate + ""));
              },
              other() {
                return Number(other);
              },
              joinCompanyDate() {
                return joinCompanyDate + "";
              },
              restAnnualVacation() {
                return Number(annualCalculator(joinCompanyDate + ""));
              },
              restOtherVacation() {
                return Number(other);
              },
              totalVacation(prev, {readField}) {
                const prevOther = readField("other");
                if (other) {
                  if (other === prevOther) {
                    return prev;
                  } else {
                    return Number(prev) - Number(prevOther) + Number(other);
                  }
                }
              },
            },
          });
        }
      },
    });
  };
  return {handleEditVacation, loading, error};
}
