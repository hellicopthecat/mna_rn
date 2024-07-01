import CreateInExModal from "@/components/afterLogin/inNoutInfo/detailInNout/createInExModal";
import CreateProductModal from "@/components/afterLogin/inNoutInfo/detailInNout/createProductModal/createProductModal";
import IncomeExpendCard from "@/components/afterLogin/inNoutInfo/detailInNout/incomeExpendCard";
import {INECont} from "@/components/afterLogin/inNoutInfo/detailInNout/incomeExpendCard.style";
import FlatSeparator from "@/components/shared/FlatSeparator";
import RowCont from "@/components/shared/RowCont";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import useUser from "@/hooks/useUser";
import {IncomeExpend, Query} from "@/libs/__generated__/graphql";
import {INCOME_EXPEND_FRAG} from "@/libs/fragments/incomeExpendFrag";
import {useModalState} from "@/store/modalState";
import {IRouterParams} from "@/types/routerParamsType";
import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {useGlobalSearchParams} from "expo-router";
import {useState} from "react";
import {FlatList, TouchableOpacity} from "react-native";

const EXPEND_MODEL = gql`
  query expendModel($searchCompanyId: Int!) {
    searchCompany(id: $searchCompanyId) {
      companyManager {
        id
      }
      inNout {
        id
        expendMoney
        expendModel {
          ...IncomeExpendFrag
        }
        waitExpendMoney
        waitExpendModel {
          ...IncomeExpendFrag
        }
      }
    }
  }
  ${INCOME_EXPEND_FRAG}
` as DocumentNode | TypedDocumentNode<Query>;
export default function Page() {
  const [refresh, setRefresh] = useState(false);
  const [pay, setPay] = useState(true);
  const {iNeModal, setINEModal, createProductModal, setCreateProductModal} =
    useModalState();
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const {data: userData} = useUser();
  const {data, loading, refetch} = useQuery(EXPEND_MODEL, {
    variables: {searchCompanyId: Number(companyId)},
  });
  const inNout = data?.searchCompany?.inNout;
  const paidExpend = data?.searchCompany?.inNout.expendModel;
  const waitExpend = data?.searchCompany?.inNout.waitExpendModel;
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
      <INECont>
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
              backgroundColor: pay ? "cornflowerblue" : "transparent",
              padding: 10,
              alignItems: "center",
            }}
            onPress={() => setPay(true)}
          >
            <SharedTxt text="지불된 지출" size="20px" bold={700} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: !pay ? "cornflowerblue" : "transparent",
              padding: 10,
              alignItems: "center",
            }}
            onPress={() => setPay(false)}
          >
            <SharedTxt text="대기중인 지출" size="20px" bold={700} />
          </TouchableOpacity>
        </RowCont>
        {data?.searchCompany?.companyManager.find(
          (manager) => manager?.id === userData?.seeMyprofile.id
        ) && (
          <RowCont content="space-between">
            <SharedBtn
              text="수입지출상품작성"
              width="45%"
              onSubmit={() => setCreateProductModal()}
            />
            <SharedBtn
              text="수입지출모델작성"
              width="45%"
              onSubmit={() => setINEModal()}
            />
          </RowCont>
        )}
        {pay && (
          <>
            <RowCont content="space-between">
              <SharedTxt text="지불된 지출" size="20px" />
              <SharedTxt
                text={`${inNout?.expendMoney?.toLocaleString()} 원`}
                size="20px"
              />
            </RowCont>
            <FlatList
              data={paidExpend as IncomeExpend[]}
              keyExtractor={(item) => item?.id + ""}
              renderItem={({item}: {item: IncomeExpend}) => (
                <IncomeExpendCard item={item} />
              )}
              ItemSeparatorComponent={() => <FlatSeparator />}
              refreshing={refresh}
              onRefresh={refreshSubmit}
            />
          </>
        )}
        {!pay && (
          <>
            <RowCont content="space-between">
              <SharedTxt text="대기중인 지출" size="20px" />
              <SharedTxt
                text={`${inNout?.waitExpendMoney?.toLocaleString()} 원`}
                size="20px"
              />
            </RowCont>
            <FlatList
              data={waitExpend as IncomeExpend[]}
              keyExtractor={(item) => item?.id + ""}
              renderItem={({item}: {item: IncomeExpend}) => (
                <IncomeExpendCard item={item} />
              )}
              ItemSeparatorComponent={() => <FlatSeparator />}
              refreshing={refresh}
              onRefresh={refreshSubmit}
            />
          </>
        )}
      </INECont>
      {createProductModal && <CreateProductModal inNoutId={inNout?.id + ""} />}
      {iNeModal && <CreateInExModal modal={iNeModal} inNoutId={inNout?.id!} />}
    </SharedLayoutCont>
  );
}
