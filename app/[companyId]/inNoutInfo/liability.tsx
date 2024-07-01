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
import {gql, useQuery} from "@apollo/client";
import {TypedDocumentNode} from "@graphql-typed-document-node/core";
import {useGlobalSearchParams} from "expo-router";
import {DocumentNode} from "graphql";
import {useState} from "react";
import {TouchableOpacity, FlatList} from "react-native";

const CURRENT_LIABILITY_INNOUT = gql`
  query currentLiability($searchCompanyId: Int!) {
    searchCompany(id: $searchCompanyId) {
      companyManager {
        id
      }
      inNout {
        id
        currentLiabilities
        currentLiabilitiesDesc {
          ...EquityLiabilitiesFrag
        }
        nonCurrentLiabilities
        nonCurrentLiabilitiesDesc {
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
  const {data, loading, refetch} = useQuery(CURRENT_LIABILITY_INNOUT, {
    variables: {searchCompanyId: Number(companyId)},
  });
  const inNout = data?.searchCompany?.inNout;
  const currentLiability = data?.searchCompany?.inNout.currentLiabilitiesDesc;
  const nonCurrentLiability =
    data?.searchCompany?.inNout.nonCurrentLiabilitiesDesc;
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
      <AssetCardCont>
        <RowCont
          style={{
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "cornflowerblue",
            borderRadius: 5,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 10,
              alignItems: "center",
              backgroundColor: current ? "cornflowerblue" : "transparent",
            }}
            onPress={() => setCurrent(true)}
          >
            <SharedTxt text="유동부채" size="25px" bold={700} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 10,
              alignItems: "center",
              backgroundColor: !current ? "cornflowerblue" : "transparent",
            }}
            onPress={() => setCurrent(false)}
          >
            <SharedTxt text="부동부채" size="25px" bold={700} />
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
              refreshing={refresh}
              onRefresh={refreshSubmit}
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
              refreshing={refresh}
              onRefresh={refreshSubmit}
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
