import AssetCard from "@/components/afterLogin/inNoutInfo/detailInNout/AssetCard";
import {AssetCardCont} from "@/components/afterLogin/inNoutInfo/detailInNout/AssetCardCont.style";
import CreateAssetModal from "@/components/afterLogin/inNoutInfo/detailInNout/createAssetModal/createAssetModal";
import FlatSeparator from "@/components/shared/FlatSeparator";
import RowCont from "@/components/shared/RowCont";
import SharedBtn from "@/components/shared/SharedBtn";
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
      inNout {
        id
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
  const [modal, setModal] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const {data, loading, refetch, fetchMore} = useQuery(TOTAL_ASSETS_INNOUT, {
    variables: {searchCompanyId: Number(companyId)},
  });
  const companyInNout = data?.searchCompany?.inNout;
  const handleRefresh = async () => {
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
      <AssetCardCont>
        <RowCont gap="10px" content="space-between">
          <SharedTxt text="총 자산액" size="20px" bold={700} />
          <SharedTxt
            text={`${companyInNout?.totalAssets.toLocaleString()} 원`}
          />
        </RowCont>
        <SharedBtn text="자산생성" onSubmit={() => setModal((prev) => !prev)} />
        <FlatList
          data={companyInNout?.totalAssetsDesc as EquityLiabilities[]}
          keyExtractor={(item: EquityLiabilities) => item.id.toString()}
          renderItem={({item}) => <AssetCard item={item} />}
          ItemSeparatorComponent={() => <FlatSeparator />}
          refreshing={refresh}
          onRefresh={handleRefresh}
        />
      </AssetCardCont>
      {modal && (
        <CreateAssetModal
          visible={modal}
          close={setModal}
          inNoutId={data?.searchCompany?.inNout.id + ""}
        />
      )}
    </SharedLayoutCont>
  );
}
