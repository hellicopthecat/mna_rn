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
import {ActivityIndicator, FlatList} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

const CURRENT_ASSETS_INNOUT = gql`
  query currentAssets($searchCompanyId: Int!) {
    searchCompany(id: $searchCompanyId) {
      companyInNout {
        currentAssets
        currentAssetsDesc {
          ...EquityLiabilitiesFrag
        }
        nonCurrentAssets
        nonCurrentAssetsDesc {
          ...EquityLiabilitiesFrag
        }
      }
    }
  }
  ${EQUITY_LIABILITIES_FRAG}
` as DocumentNode | TypedDocumentNode<Query>;
export default function Page() {
  const [current, setCurrent] = useState(true);
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const {data, loading} = useQuery(CURRENT_ASSETS_INNOUT, {
    variables: {searchCompanyId: Number(companyId)},
  });

  const inNout = data?.searchCompany?.companyInNout;
  const currentAsset = data?.searchCompany?.companyInNout.currentAssetsDesc;
  const nonCurrentAsset =
    data?.searchCompany?.companyInNout.nonCurrentAssetsDesc;
  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <SharedLayoutCont>
      <AssetCardCont>
        <RowCont content="space-around">
          <TouchableOpacity
            style={{paddingVertical: 10}}
            onPress={() => setCurrent(true)}
          >
            <SharedTxt text="유동자산" size="25px" bold={700} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{paddingVertical: 10}}
            onPress={() => setCurrent(false)}
          >
            <SharedTxt text="부동자산" size="25px" bold={700} />
          </TouchableOpacity>
        </RowCont>
        {current && (
          <>
            <RowCont gap="10px" content="space-between">
              <SharedTxt text="유동자산" size="20px" bold={700} />
              <SharedTxt
                text={`${inNout?.currentAssets?.toLocaleString()} 원`}
                size="20px"
                bold={700}
              />
            </RowCont>
            <FlatList
              data={currentAsset as EquityLiabilities[]}
              keyExtractor={(item) => item?.id + ""}
              renderItem={({item}: {item: EquityLiabilities}) => (
                <AssetCard item={item} />
              )}
              ItemSeparatorComponent={() => <FlatSeparator />}
            />
          </>
        )}
        {!current && (
          <>
            <RowCont gap="10px" content="space-between">
              <SharedTxt text="부동자산" size="20px" bold={700} />
              <SharedTxt
                text={`${inNout?.nonCurrentAssets?.toLocaleString()} 원`}
                size="20px"
                bold={700}
              />
            </RowCont>
            <FlatList
              data={nonCurrentAsset as EquityLiabilities[]}
              keyExtractor={(item) => item?.id + ""}
              renderItem={({item}: {item: EquityLiabilities}) => (
                <AssetCard item={item} />
              )}
              ItemSeparatorComponent={() => <FlatSeparator />}
            />
          </>
        )}
      </AssetCardCont>
    </SharedLayoutCont>
  );
}
