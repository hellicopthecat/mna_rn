import CreateProductModal from "@/components/afterLogin/inNoutInfo/detailInNout/createProductModal/createProductModal";
import ProductCard from "@/components/afterLogin/productInfo/ProductCard";
import {ProductCont} from "@/components/afterLogin/productInfo/productInfo.style";
import FlatSeparator from "@/components/shared/FlatSeparator";
import RowCont from "@/components/shared/RowCont";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import useUser from "@/hooks/useUser";
import {Product, Query} from "@/libs/__generated__/graphql";
import {INCOME_EXPEND_FRAG} from "@/libs/fragments/incomeExpendFrag";
import {PRODUCT_FRAG} from "@/libs/fragments/productFrag";
import {useModalState} from "@/store/modalState";
import {IRouterParams} from "@/types/routerParamsType";
import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {useGlobalSearchParams} from "expo-router";
import {useState} from "react";
import {FlatList} from "react-native";
const COMPANY_PRODUCT = gql`
  query companyProducts($searchCompanyId: Int!) {
    searchCompany(id: $searchCompanyId) {
      companyManager {
        id
      }
      inNout {
        id
      }
      companyProduct {
        ...ProductFrag
        incomeExpend {
          ...IncomeExpendFrag
        }
      }
    }
  }
  ${PRODUCT_FRAG}
  ${INCOME_EXPEND_FRAG}
` as DocumentNode | TypedDocumentNode<Query>;
export default function Page() {
  const {createProductModal, setCreateProductModal} = useModalState();
  const {data: user} = useUser();
  const [refresh, setRefresh] = useState(false);
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const {data, loading, refetch} = useQuery(COMPANY_PRODUCT, {
    variables: {searchCompanyId: Number(companyId)},
  });
  const product = data?.searchCompany?.companyProduct;
  //fn

  const refreshSubmit = async () => {
    setRefresh(true);
    try {
      await refetch();
    } catch (err) {
      console.log(err);
    }
    setRefresh(false);
  };
  return (
    <SharedLayoutCont loading={loading}>
      <ProductCont>
        {data?.searchCompany?.companyManager.find(
          (manager) => manager?.id === user?.seeMyprofile.id
        ) && (
          <RowCont content="space-between">
            <SharedTxt text="생산품" size="20px" bold={700} />
            <SharedBtn
              text="상품생성"
              width="20%"
              onSubmit={() => setCreateProductModal()}
            />
          </RowCont>
        )}
        <FlatList
          data={product as Product[]}
          keyExtractor={(item) => item.id + ""}
          renderItem={({item}) => <ProductCard item={item} />}
          ItemSeparatorComponent={() => <FlatSeparator />}
          refreshing={refresh}
          onRefresh={refreshSubmit}
        />
      </ProductCont>
      {createProductModal && (
        <CreateProductModal inNoutId={data?.searchCompany?.inNout.id + ""} />
      )}
    </SharedLayoutCont>
  );
}
