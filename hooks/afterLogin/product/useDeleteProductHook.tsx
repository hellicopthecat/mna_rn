import {
  Mutation,
  MutationDeleteProductArgs,
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
const DELETE_PRODUCT_MUTATE = gql`
  mutation deleteProduct($companyId: Int!, $productId: Int!) {
    deleteProduct(companyId: $companyId, productId: $productId) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation, MutationDeleteProductArgs>;
export default function useDeleteProductHook() {
  const {setEditProductModal, setEditMode} = useModalState();
  const [deleteProduct, {loading, error}] = useMutation(DELETE_PRODUCT_MUTATE);
  const handleDeleteProduct = async ({
    companyId,
    productId,
    iNeId,
  }: MutationDeleteProductArgs & {iNeId: number}) => {
    await deleteProduct({
      variables: {
        companyId,
        productId,
      },
      onCompleted(data) {
        if (!data.deleteProduct.ok) {
          Alert.alert("상품삭제실패", data.deleteProduct.errorMsg + "");
        } else {
          setEditProductModal(null);
          setEditMode(false);
        }
      },
      update(cache, {data}) {
        if (data?.deleteProduct.ok) {
          cache.evict({id: `Product:${productId}`});
          cache.evict({id: `IncomeExpend:${iNeId}`});
          cache.gc();
        }
      },
    });
  };
  return {handleDeleteProduct, loading, error};
}
