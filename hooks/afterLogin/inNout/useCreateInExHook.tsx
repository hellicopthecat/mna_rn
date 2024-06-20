import {Mutation, TPaymentSwitch} from "@/libs/__generated__/graphql";
import {useModalState} from "@/store/modalState";
import {IRouterParams} from "@/types/routerParamsType";
import {ICreateInExProps} from "@/types/types";
import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {useGlobalSearchParams} from "expo-router";
import {Alert} from "react-native";

const CREATE_INE_MUTATE = gql`
  mutation createInEx(
    $createInExId: Int!
    $incomeTrue: Boolean!
    $infoSubtitle: String!
    $money: Int!
    $businessDate: String!
    $paymentType: String
    $accountCode: String
    $businessDesc: String
    $paymentsDone: TPaymentSwitch
    $enLName: String!
    $enLType: String!
    $enLDesc: String
    $current: Boolean
    $assests: Boolean
  ) {
    createInEx(
      id: $createInExId
      incomeTrue: $incomeTrue
      infoSubtitle: $infoSubtitle
      money: $money
      businessDate: $businessDate
      paymentType: $paymentType
      accountCode: $accountCode
      businessDesc: $businessDesc
      paymentsDone: $paymentsDone
      enLName: $enLName
      enLType: $enLType
      enLDesc: $enLDesc
      current: $current
      assests: $assests
    ) {
      ok
      id
      subId
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
export default function useCreateInExHook() {
  const {setINEModal} = useModalState();
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const [createInEx, {loading, error}] = useMutation(CREATE_INE_MUTATE);
  const handleCreateInEx = async ({
    inNoutId,
    incomeTrue,
    infoSubtitle,
    money,
    businessDate,
    paymentType,
    accountCode,
    businessDesc,
    paymentsDone,
    enLName,
    enLType,
    enLDesc,
    current,
    assests,
  }: ICreateInExProps) => {
    await createInEx({
      variables: {
        createInExId: Number(companyId),
        incomeTrue,
        infoSubtitle,
        money: Number(money),
        businessDate,
        paymentType,
        accountCode,
        businessDesc,
        paymentsDone,
        enLName,
        enLType,
        enLDesc,
        current,
        assests,
      },
      onCompleted(data) {
        if (!data.createInEx.ok) {
          Alert.alert("수입지출모델생성실패", data.createInEx.errorMsg + "");
        } else {
          setINEModal();
        }
      },
      update(cache, {data}) {
        if (data?.createInEx.ok) {
          const newEquityLiabilities = {
            __typename: "EquityLiabilities",
            id: data.createInEx.subId,
            createdAt: Date.now(),
            updateAt: Date.now(),
            value: Number(money),
            assests,
            current,
            enLDesc,
            enLId: infoSubtitle,
            enLName,
            enLType,
          };
          const newIncomeExpend = {
            __typename: "IncomeExpend",
            id: data.createInEx.id,
            createdAt: Date.now(),
            updateAt: Date.now(),
            incomeTrue,
            infoSubtitle,
            money: Number(money),
            businessDate,
            paymentType,
            accountCode,
            businessDesc,
            paymentsDone,
          };
          cache.modify({
            id: `InNout:${inNoutId}`,
            fields: {
              currentAssetsDesc(prev, {toReference}) {
                const newCache = toReference(newEquityLiabilities, true);
                return current && assests ? [newCache, ...prev] : prev;
              },
              nonCurrentAssetsDesc(prev, {toReference}) {
                const newCache = toReference(newEquityLiabilities, true);
                return !current && assests ? [newCache, ...prev] : prev;
              },
              currentLiabilitiesDesc(prev, {toReference}) {
                const newCache = toReference(newEquityLiabilities, true);
                return current && !assests ? [newCache, ...prev] : prev;
              },
              nonCurrentLiabilitiesDesc(prev, {toReference}) {
                const newCache = toReference(newEquityLiabilities, true);
                return !current && !assests ? [newCache, ...prev] : prev;
              },
              totalAssetsDesc(prev, {toReference}) {
                const newCache = toReference(newEquityLiabilities, true);
                return [newCache, ...prev];
              },
              incomeMoney(prev) {
                return incomeTrue && paymentsDone === TPaymentSwitch.Paid
                  ? prev + Number(money)
                  : prev;
              },
              waitIncomeMoney(prev) {
                return incomeTrue && paymentsDone === TPaymentSwitch.Wait
                  ? prev + Number(money)
                  : prev;
              },
              expendMoney(prev) {
                return !incomeTrue && paymentsDone === TPaymentSwitch.Paid
                  ? prev + Number(money)
                  : prev;
              },
              waitExpendMoney(prev) {
                return !incomeTrue && paymentsDone === TPaymentSwitch.Wait
                  ? prev + Number(money)
                  : prev;
              },
              incomeModel(prev, {toReference}) {
                const newCache = toReference(newIncomeExpend, true);
                return incomeTrue &&
                  (paymentsDone === TPaymentSwitch.Paid ||
                    paymentsDone === TPaymentSwitch.Nonpaid)
                  ? [newCache, ...prev]
                  : prev;
              },
              waitIncomeModel(prev, {toReference}) {
                const newCache = toReference(newIncomeExpend, true);
                return incomeTrue && paymentsDone === TPaymentSwitch.Wait
                  ? [newCache, ...prev]
                  : prev;
              },
              expendModel(prev, {toReference}) {
                const newCache = toReference(newIncomeExpend, true);
                return !incomeTrue &&
                  (paymentsDone === TPaymentSwitch.Paid ||
                    paymentsDone === TPaymentSwitch.Nonpaid)
                  ? [newCache, ...prev]
                  : prev;
              },
              waitExpendModel(prev, {toReference}) {
                const newCache = toReference(newIncomeExpend, true);
                return !incomeTrue && paymentsDone === TPaymentSwitch.Wait
                  ? [newCache, ...prev]
                  : prev;
              },
            },
          });
        }
      },
    });
  };

  return {handleCreateInEx, loading, error};
}
