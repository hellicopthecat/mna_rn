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
      subId
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
export default function useCreateProductHook() {
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const {setCreateProductModal} = useModalState();
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
          setCreateProductModal();
        }
      },
      update(cache, {data}) {
        const money =
          itemCount === 0
            ? 1 * Number(itemPrice)
            : Number(itemCount) * Number(itemPrice);
        if (data?.createProduct.ok) {
          const newIncomeExpend = {
            __typename: "IncomeExpend",
            id: Number(data?.createProduct.subId),
            createdAt: Date.now().toString(),
            updateAt: Date.now().toString(),
            incomeTrue,
            infoSubtitle: itemProductId,
            money,
            businessDate: null,
            paymentType,
            accountCode,
            businessDesc,
            paymentsDone,
            inNoutId,
          };
          const newProduct = {
            __typename: "Product",
            id: Number(data?.createProduct.id),
            createdAt: Date.now().toString(),
            updateAt: Date.now().toString(),
            itemProductId,
            itemName,
            itemModelName,
            itemPhoto,
            itemType,
            itemCount,
            itemPrice,
            itemDesc,
            incomeExpendTypeId: Number(data?.createProduct.id),
            incomeExpend: newIncomeExpend,
            incomeExpendId: Number(data?.createProduct.id),
          };
          cache.modify({
            id: `InNout:${inNoutId}`,
            fields: {
              incomeMoney(prev: number) {
                return incomeTrue && paymentsDone === TPaymentSwitch.Paid
                  ? prev + money
                  : prev;
              },
              waitIncomeMoney(prev: number) {
                return incomeTrue && paymentsDone === TPaymentSwitch.Wait
                  ? prev + money
                  : prev;
              },
              expendMoney(prev: number) {
                return !incomeTrue &&
                  (paymentsDone === TPaymentSwitch.Paid ||
                    paymentsDone === TPaymentSwitch.Nonpaid)
                  ? prev + money
                  : prev;
              },
              waitExpendMoney(prev: number) {
                return !incomeTrue && paymentsDone === TPaymentSwitch.Wait
                  ? prev + money
                  : prev;
              },
              incomeModel(prev, {toReference}) {
                return incomeTrue &&
                  (paymentsDone === TPaymentSwitch.Paid ||
                    paymentsDone === TPaymentSwitch.Nonpaid)
                  ? [toReference(newIncomeExpend, true), ...prev]
                  : prev;
              },
              waitIncomeModel(prev, {toReference}) {
                return incomeTrue && paymentsDone === TPaymentSwitch.Wait
                  ? [toReference(newIncomeExpend, true), ...prev]
                  : prev;
              },
              expendModel(prev, {toReference}) {
                return !incomeTrue &&
                  (paymentsDone === TPaymentSwitch.Paid ||
                    paymentsDone === TPaymentSwitch.Nonpaid)
                  ? [toReference(newIncomeExpend, true), ...prev]
                  : prev;
              },
              waitExpendModel(prev, {toReference}) {
                return !incomeTrue && paymentsDone === TPaymentSwitch.Wait
                  ? [toReference(newIncomeExpend, true), ...prev]
                  : prev;
              },
            },
          });
          cache.modify({
            id: `Prodcut:${data.createProduct.id}`,
            fields: {
              __typename() {
                return "Product";
              },
              id() {
                return Number(data?.createProduct.id);
              },
              createdAt() {
                return Date.now().toString();
              },
              updateAt() {
                return Date.now().toString();
              },
              itemProductId() {
                return itemProductId;
              },
              itemName() {
                return itemName;
              },
              itemModelName() {
                return itemModelName;
              },
              itemPhoto() {
                return itemPhoto;
              },
              itemType() {
                return itemPhoto;
              },
              itemCount() {
                return itemCount;
              },
              itemPrice() {
                return itemPrice;
              },
              itemDesc() {
                return itemDesc;
              },
              incomeExpendTypeId() {
                return Number(data?.createProduct.id);
              },
              incomeExpend() {
                return newIncomeExpend;
              },
              incomeExpendId() {
                return Number(data?.createProduct.id);
              },
            },
          });
          cache.modify({
            id: `ROOT_QUERY`,
            fields: {
              companyProduct(prev, {toReference}) {
                return [...prev, toReference(newProduct, true)];
              },
            },
          });
        }
      },
    });
  };

  return {handleCreateProduct, loading, error};
}
