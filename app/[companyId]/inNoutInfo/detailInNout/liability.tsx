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
import {gql, useQuery} from "@apollo/client";
import {TypedDocumentNode} from "@graphql-typed-document-node/core";
import {useGlobalSearchParams} from "expo-router";
import {DocumentNode} from "graphql";
import {useState} from "react";
import {ActivityIndicator, FlatList} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
const CURRENT_LIABILITY_INNOUT = gql`
  query currentLiability($searchCompanyId: Int!) {
    searchCompany(id: $searchCompanyId) {
      inNout {
        currentLiabilities
        currentLiabilitiesDesc {
          ...EquityLiabilitiesFrag
        }
        nonCurrentLiabilities
        nonCurrentLiabilitiesDesc {
          ...EquityLiabilitiesFrag
        }
      }
    }
  }

  ${EQUITY_LIABILITIES_FRAG}
` as DocumentNode | TypedDocumentNode<Query>;
export default function Page() {
  const [modal, setModal] = useState(false);
  const [current, setCurrent] = useState(true);
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const {data, loading} = useQuery(CURRENT_LIABILITY_INNOUT, {
    variables: {searchCompanyId: Number(companyId)},
  });
  const inNout = data?.searchCompany?.inNout;
  const currentLiability = data?.searchCompany?.inNout.currentLiabilitiesDesc;
  const nonCurrentLiability =
    data?.searchCompany?.inNout.nonCurrentLiabilitiesDesc;
  return (
    <SharedLayoutCont loading={loading}>
      <AssetCardCont>
        <RowCont content="space-around">
          <TouchableOpacity
            style={{paddingVertical: 10}}
            onPress={() => setCurrent(true)}
          >
            <SharedTxt text="유동부채" size="25px" bold={700} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{paddingVertical: 10}}
            onPress={() => setCurrent(false)}
          >
            <SharedTxt text="부동부채" size="25px" bold={700} />
          </TouchableOpacity>
        </RowCont>
        <SharedBtn text="자산생성" onSubmit={() => setModal((prev) => !prev)} />
        {current && (
          <>
            <RowCont gap="10px" content="space-between">
              <SharedTxt text="유동부채" size="20px" bold={700} />
              <SharedTxt
                text={`${inNout?.currentLiabilities?.toLocaleString()} 원`}
                size="20px"
                bold={700}
              />
            </RowCont>
            <FlatList
              data={currentLiability as EquityLiabilities[]}
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
              <SharedTxt text="부동부채" size="20px" bold={700} />
              <SharedTxt
                text={`${inNout?.nonCurrentLiabilities?.toLocaleString()} 원`}
                size="20px"
                bold={700}
              />
            </RowCont>
            <FlatList
              data={nonCurrentLiability as EquityLiabilities[]}
              keyExtractor={(item) => item?.id + ""}
              renderItem={({item}: {item: EquityLiabilities}) => (
                <AssetCard item={item} />
              )}
              ItemSeparatorComponent={() => <FlatSeparator />}
            />
          </>
        )}
      </AssetCardCont>
      {modal && (
        <CreateAssetModal
          visible={modal}
          close={setModal}
          inNoutId={inNout?.id + ""}
        />
      )}
    </SharedLayoutCont>
  );
}
