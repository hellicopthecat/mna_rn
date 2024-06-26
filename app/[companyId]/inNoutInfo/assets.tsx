import AssetCard from "@/components/afterLogin/inNoutInfo/detailInNout/AssetCard";
import {AssetCardCont} from "@/components/afterLogin/inNoutInfo/detailInNout/AssetCardCont.style";
import CreateAssetModal from "@/components/afterLogin/inNoutInfo/detailInNout/createAssetModal/createAssetModal";
import FlatSeparator from "@/components/shared/FlatSeparator";
import RowCont from "@/components/shared/RowCont";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import useUser from "@/hooks/useUser";
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
      companyManager {
        id
      }
      inNout {
        id
        currentAssets
        currentAssetsDesc {
          ...EquityLiabilitiesFrag
        }
        nonCurrentAssets
        nonCurrentAssetsDesc {
          ...EquityLiabilitiesFrag
        }
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
  const [modal, setModal] = useState(false);
  const [current, setCurrent] = useState(true);
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const {data: userData} = useUser();
  const {data, loading, refetch} = useQuery(CURRENT_ASSETS_INNOUT, {
    variables: {searchCompanyId: Number(companyId)},
  });

  const inNout = data?.searchCompany?.inNout;
  const currentAsset = data?.searchCompany?.inNout.currentAssetsDesc;
  const nonCurrentAsset = data?.searchCompany?.inNout.nonCurrentAssetsDesc;
  //fn
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
        {data?.searchCompany?.companyManager.find(
          (manager) => manager?.id === userData?.seeMyprofile.id
        ) && (
          <SharedBtn
            text="자산생성"
            onSubmit={() => setModal((prev) => !prev)}
          />
        )}
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
              refreshing={refresh}
              onRefresh={handleRefresh}
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
              refreshing={refresh}
              onRefresh={handleRefresh}
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
