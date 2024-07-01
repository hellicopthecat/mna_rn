import {
  IncomeExpend,
  Mutation,
  Product,
  TPaymentSwitch,
} from "@/libs/__generated__/graphql";
import {useModalState} from "@/store/modalState";
import {IRouterParams} from "@/types/routerParamsType";
import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {useGlobalSearchParams} from "expo-router";
import {Alert} from "react-native";
interface IDeleteInExProps {
  iNeId: number;
  income: boolean;
  paymentDone: TPaymentSwitch;
  cost: number;
  inNoutId: number;
}
const DELETE_INEX_MUTATE = gql`
  mutation deleteInEx($companyId: Int!, $iNeId: Int!) {
    deleteInEx(companyId: $companyId, iNeId: $iNeId) {
      ok
      id
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
export default function useDeleteInExHook() {
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const {setDetailINEModal} = useModalState();

  const [deleteInEx, {loading, error}] = useMutation(DELETE_INEX_MUTATE);
  const handleDeleteInEx = async ({
    iNeId,
    income,
    paymentDone,
    inNoutId,
    cost,
  }: IDeleteInExProps) => {
    await deleteInEx({
      variables: {
        companyId: Number(companyId),
        iNeId: Number(iNeId),
      },
      onCompleted(data) {
        if (!data.deleteInEx.ok) {
          Alert.alert("자삭삭제실패", data.deleteInEx.errorMsg + "");
        } else {
          setDetailINEModal(null);
        }
      },
      update(cache, {data}) {
        if (data?.deleteInEx.ok) {
          cache.modify({
            id: `InNout:${inNoutId}`,
            fields: {
              incomeMoney(prev) {
                return income &&
                  (paymentDone === TPaymentSwitch.Paid ||
                    paymentDone === TPaymentSwitch.Nonpaid)
                  ? prev - cost
                  : prev;
              },
              waitIncomeMoney(prev) {
                return income && paymentDone === TPaymentSwitch.Wait
                  ? prev - cost
                  : prev;
              },
              expendMoney(prev) {
                return !income &&
                  (paymentDone === TPaymentSwitch.Paid ||
                    paymentDone === TPaymentSwitch.Nonpaid)
                  ? prev - cost
                  : prev;
              },
              waitExpendMoney(prev) {
                return !income && paymentDone === TPaymentSwitch.Wait
                  ? prev - cost
                  : prev;
              },
              incomeModel(prev) {
                const filtered = prev.filter(
                  (model: IncomeExpend) => model.id === iNeId
                );
                return filtered;
              },
              waitIncomeModel(prev) {
                const filtered = prev.filter(
                  (model: IncomeExpend) => model.id === iNeId
                );
                return filtered;
              },
              expendModel(prev) {
                const filtered = prev.filter(
                  (model: IncomeExpend) => model.id === iNeId
                );
                return filtered;
              },
              waitExpendModel(prev) {
                const filtered = prev.filter(
                  (model: IncomeExpend) => model.id === iNeId
                );
                return filtered;
              },
            },
          });

          cache.evict({id: `Product:${data.deleteInEx.id}`});
          cache.evict({id: `IncomeExpend:${iNeId}`});
          cache.gc();
        }
      },
    });
  };
  console.log("dle", error);
  return {handleDeleteInEx, loading, error};
}
