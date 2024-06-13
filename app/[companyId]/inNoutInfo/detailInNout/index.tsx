import AssetCard from "@/components/afterLogin/inNoutInfo/detailInNout/AssetCard";
import {AssetCardCont} from "@/components/afterLogin/inNoutInfo/detailInNout/AssetCardCont.style";
import FlatSeparator from "@/components/shared/FlatSeparator";
import RowCont from "@/components/shared/RowCont";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import {EquityLiabilities, Query} from "@/libs/__generated__/graphql";
import {EQUITY_LIABILITIES_FRAG} from "@/libs/fragments/equityLiabilitiesFrag";
import {IRouterParams} from "@/types/routerParamsType";
import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {useGlobalSearchParams} from "expo-router";
import {useState} from "react";
import {FlatList} from "react-native";
const TOTAL_ASSETS_INNOUT = gql`
  query totalAssets($searchCompanyId: Int!) {
    searchCompany(id: $searchCompanyId) {
      companyInNout {
        totalAssets
        totalAssetsDesc {
          ...EquityLiabilitiesFrag
        }
      }
    }
  }
  ${EQUITY_LIABILITIES_FRAG}
` as DocumentNode | TypedDocumentNode<Query>;
export default function Page() {
  const [refresh, setRefresh] = useState(false);
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const {data, loading, refetch, fetchMore} = useQuery(TOTAL_ASSETS_INNOUT, {
    variables: {searchCompanyId: Number(companyId)},
  });
  const companyInNout = data?.searchCompany?.companyInNout;

  return (
    <SharedLayoutCont loading={loading}>
      <AssetCardCont>
        <RowCont gap="10px" content="space-between">
          <SharedTxt text="총 자산액" size="20px" bold={700} />
          <SharedTxt
            text={`${companyInNout?.totalAssets.toLocaleString()} 원`}
          />
        </RowCont>
        <FlatList
          data={companyInNout?.totalAssetsDesc as EquityLiabilities[]}
          keyExtractor={(item: EquityLiabilities) => item.id.toString()}
          renderItem={({item}: {item: EquityLiabilities}) => (
            <AssetCard item={item} />
          )}
          ItemSeparatorComponent={() => <FlatSeparator />}
        />
      </AssetCardCont>
    </SharedLayoutCont>
  );
}
