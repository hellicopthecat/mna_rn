import {Mutation, MutationEditProductArgs} from "@/libs/__generated__/graphql";
import {useModalState} from "@/store/modalState";
import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {Alert} from "react-native";
const EDIT_PRODUCT_MUTATE = gql`
  mutation editProduct(
    $editProductId: Int!
    $itemProductId: String!
    $itemModelName: String
    $itemName: String
    $itemPhoto: String
    $itemType: String
    $itemCount: Int
    $itemPrice: Int
    $itemDesc: String
    $incomeTrue: Boolean
    $paymentType: String
    $accountCode: String
    $businessDesc: String
    $paymentsDone: TPaymentSwitch
  ) {
    editProduct(
      id: $editProductId
      itemProductId: $itemProductId
      itemModelName: $itemModelName
      itemName: $itemName
      itemPhoto: $itemPhoto
      itemType: $itemType
      itemCount: $itemCount
      itemPrice: $itemPrice
      itemDesc: $itemDesc
      incomeTrue: $incomeTrue
      paymentType: $paymentType
      accountCode: $accountCode
      businessDesc: $businessDesc
      paymentsDone: $paymentsDone
    ) {
      ok
      errorMsg
      id
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
export default function useEditProductHook() {
  const {setEditProductModal, setEditMode} = useModalState();
  const [editProduct, {loading, error}] = useMutation(EDIT_PRODUCT_MUTATE);
  const handleEditProduct = async ({
    id,
    itemProductId,
    itemModelName,
    itemName,
    itemPhoto,
    itemType,
    itemCount,
    itemPrice,
    itemDesc,
    incomeTrue,
    paymentType,
    accountCode,
    businessDesc,
    paymentsDone,
  }: MutationEditProductArgs) => {
    await editProduct({
      variables: {
        editProductId: id,
        itemProductId: itemProductId,
        itemModelName: itemModelName,
        itemName: itemName,
        itemPhoto: itemPhoto,
        itemType: itemType,
        itemCount: Number(itemCount),
        itemPrice: Number(itemPrice),
        itemDesc: itemDesc,
        incomeTrue: incomeTrue,
        paymentType: paymentType,
        accountCode: accountCode,
        businessDesc: businessDesc,
        paymentsDone: paymentsDone,
      },
      onCompleted(data) {
        if (!data.editProduct.ok) {
          Alert.alert("", data.editProduct.errorMsg + "");
        } else {
          setEditMode(false);
        }
      },
      update(cache, {data}) {
        if (data?.editProduct.ok) {
          const newIncomeExpendCache = {
            __typename: "IncomeExpend",
            id: data.editProduct.id,
            money:
              itemCount === 0
                ? 1 * Number(itemPrice)
                : Number(itemCount) * Number(itemPrice),
            incomeTrue,
            paymentType,
            accountCode,
            businessDesc,
            paymentsDone,
          };
          cache.modify({
            id: `Product:${id}`,
            fields: {
              itemProductId() {
                return itemProductId;
              },
              itemModelName() {
                return itemModelName;
              },
              itemName() {
                return itemName;
              },
              itemPhoto() {
                return itemPhoto;
              },
              itemType() {
                return itemType;
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
              incomeExpend() {
                return newIncomeExpendCache;
              },
            },
          });
        }
      },
    });
  };

  return {handleEditProduct, loading, error};
}
