import {Mutation, TPaymentSwitch} from "@/libs/__generated__/graphql";
import {useModalState} from "@/store/modalState";
import {IRouterParams} from "@/types/routerParamsType";
import {ICreateProductProps} from "@/types/types";
import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {useGlobalSearchParams} from "expo-router";
import {Alert} from "react-native";

const CREATE_PRODUCT_MUTATE = gql`
  mutation createProduct(
    $createProductId: Int!
    $itemProductId: String!
    $itemName: String!
    $itemModelName: String
    $itemPhoto: String
    $itemType: String
    $itemPrice: Int
    $itemCount: Int
    $itemDesc: String
    $incomeTrue: Boolean
    $paymentType: String
    $accountCode: String
    $businessDesc: String
    $paymentsDone: TPaymentSwitch
  ) {
    createProduct(
      id: $createProductId
      itemProductId: $itemProductId
      itemName: $itemName
      itemModelName: $itemModelName
      itemPhoto: $itemPhoto
      itemType: $itemType
      itemPrice: $itemPrice
      itemCount: $itemCount
      itemDesc: $itemDesc
      incomeTrue: $incomeTrue
      paymentType: $paymentType
      accountCode: $accountCode
      businessDesc: $businessDesc
      paymentsDone: $paymentsDone
    ) {
      id
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
export default function useCreateProductHook() {
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const {setINEModal} = useModalState();
  const [createProduct, {loading, error}] = useMutation(CREATE_PRODUCT_MUTATE);
  const handleCreateProduct = async ({
    inNoutId,
    itemProductId,
    itemName,
    itemModelName,
    itemPhoto,
    itemType,
    itemPrice,
    itemCount,
    itemDesc,
    incomeTrue,
    paymentType,
    accountCode,
    businessDesc,
    paymentsDone,
  }: ICreateProductProps) => {
    await createProduct({
      variables: {
        createProductId: Number(companyId),
        itemProductId,
        itemName,
        itemModelName,
        itemPhoto,
        itemType,
        itemPrice: Number(itemPrice),
        itemCount: Number(itemCount),
        itemDesc,
        paymentType,
        accountCode,
        businessDesc,
        incomeTrue,
        paymentsDone,
      },
      onCompleted(data) {
        if (!data.createProduct.ok) {
          Alert.alert("상품설명실패", data.createProduct.errorMsg + "");
        } else {
          setINEModal();
        }
      },
      update(cache, {data}) {
        if (data?.createProduct.ok) {
          const money =
            itemCount === 0
              ? 1 * Number(itemPrice)
              : Number(itemCount) * Number(itemPrice);
          const newData = {
            __typename: "IncomeExpend",
            id: data.createProduct.subId,
            createdAt: Date.now().toString(),
            updateAt: Date.now().toString(),
            incomeTrue,
            infoSubtitle: itemProductId,
            money,
            paymentType,
            accountCode,
            businessDesc,
            paymentsDone,
          };

          cache.modify({
            id: `InNout:${inNoutId}`,
            fields: {
              incomeMoney(prev) {
                return incomeTrue && paymentsDone === TPaymentSwitch.Paid
                  ? prev + money
                  : prev;
              },
              waitIncomeMoney(prev) {
                return incomeTrue && paymentsDone === TPaymentSwitch.Wait
                  ? prev + money
                  : prev;
              },
              expendMoney(prev) {
                return !incomeTrue && paymentsDone === TPaymentSwitch.Paid
                  ? prev + money
                  : prev;
              },
              waitExpendMoney(prev) {
                return !incomeTrue && paymentsDone === TPaymentSwitch.Wait
                  ? prev + money
                  : prev;
              },
              incomeModel(prev, {toReference}) {
                const newModel = toReference(newData, true);
                return incomeTrue &&
                  (paymentsDone === TPaymentSwitch.Paid ||
                    paymentsDone === TPaymentSwitch.Nonpaid)
                  ? [newModel, ...prev]
                  : prev;
              },
              waitIncomeModel(prev, {toReference}) {
                const newModel = toReference(newData, true);
                return incomeTrue && paymentsDone === TPaymentSwitch.Wait
                  ? [newModel, ...prev]
                  : prev;
              },
              expendModel(prev, {toReference}) {
                const newModel = toReference(newData, true);
                return !incomeTrue &&
                  (paymentsDone === TPaymentSwitch.Paid ||
                    paymentsDone === TPaymentSwitch.Nonpaid)
                  ? [newModel, ...prev]
                  : prev;
              },
              waitExpendModel(prev, {toReference}) {
                const newModel = toReference(newData, true);
                return !incomeTrue && paymentsDone === TPaymentSwitch.Wait
                  ? [newModel, ...prev]
                  : prev;
              },
            },
          });
        }
      },
    });
  };
  return {handleCreateProduct, loading, error};
}
