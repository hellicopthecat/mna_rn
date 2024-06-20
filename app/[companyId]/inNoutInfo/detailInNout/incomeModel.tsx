import CreateInExModal from "@/components/afterLogin/inNoutInfo/detailInNout/createInExModal";
import CreateProductModal from "@/components/afterLogin/inNoutInfo/detailInNout/createProductModal/createProductModal";
import IncomeExpendCard from "@/components/afterLogin/inNoutInfo/detailInNout/incomeExpendCard";
import {INECont} from "@/components/afterLogin/inNoutInfo/detailInNout/incomeExpendCard.style";
import FlatSeparator from "@/components/shared/FlatSeparator";
import RowCont from "@/components/shared/RowCont";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import {IncomeExpend, Query} from "@/libs/__generated__/graphql";
import {INCOME_EXPEND_FRAG} from "@/libs/fragments/incomeExpendFrag";
import {useModalState} from "@/store/modalState";
import {IRouterParams} from "@/types/routerParamsType";
import {gql, useQuery} from "@apollo/client";
import {TypedDocumentNode} from "@graphql-typed-document-node/core";
import {useGlobalSearchParams} from "expo-router";
import {DocumentNode} from "graphql";
import {useState} from "react";
import {ActivityIndicator, FlatList, TouchableOpacity} from "react-native";
const INCOME_MODEL = gql`
  query incomeModels($searchCompanyId: Int!) {
    searchCompany(id: $searchCompanyId) {
      inNout {
        id
        incomeMoney
        incomeModel {
          ...IncomeExpendFrag
        }
        waitIncomeMoney
        waitIncomeModel {
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
  const {data, loading, refetch} = useQuery(INCOME_MODEL, {
    variables: {searchCompanyId: Number(companyId)},
  });
  const inNout = data?.searchCompany?.inNout;
  const paidIncome = data?.searchCompany?.inNout.incomeModel;
  const waitIncome = data?.searchCompany?.inNout.waitIncomeModel;

  //fn
  const reFreshSubmit = async () => {
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
        <RowCont content="space-around">
          <TouchableOpacity onPress={() => setPay(true)}>
            <SharedTxt
              text="지불된 수입"
              size="20px"
              bold={700}
              style={{paddingVertical: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setPay(false)}>
            <SharedTxt
              text="대기중인 수입"
              size="20px"
              bold={700}
              style={{paddingVertical: 10}}
            />
          </TouchableOpacity>
        </RowCont>
        <RowCont content="space-around">
          <SharedBtn
            text="수입지출상품작성"
            onSubmit={() => setCreateProductModal()}
            width="45%"
          />
          <SharedBtn
            text="수입지출모델작성"
            onSubmit={() => setINEModal()}
            width="45%"
          />
        </RowCont>
        {pay && (
          <>
            <RowCont content="space-between">
              <SharedTxt text="지불된 수입" size="20px" />
              <SharedTxt
                text={`${inNout?.incomeMoney?.toLocaleString()} 원`}
                size="20px"
              />
            </RowCont>
            <FlatList
              data={paidIncome as IncomeExpend[]}
              keyExtractor={(item, index) => item?.id + "" ?? index}
              renderItem={({item}: {item: IncomeExpend}) => (
                <IncomeExpendCard item={item} />
              )}
              ItemSeparatorComponent={() => <FlatSeparator />}
              refreshing={refresh}
              onRefresh={reFreshSubmit}
            />
          </>
        )}
        {!pay && (
          <>
            <RowCont content="space-between">
              <SharedTxt text="대기중인 수입" size="20px" />
              <SharedTxt
                text={`${inNout?.waitIncomeMoney?.toLocaleString()} 원`}
                size="20px"
              />
            </RowCont>
            <FlatList
              data={waitIncome as IncomeExpend[]}
              keyExtractor={(item, index) => item?.id + "" ?? index}
              renderItem={({item}: {item: IncomeExpend}) => (
                <IncomeExpendCard item={item} />
              )}
              ItemSeparatorComponent={() => <FlatSeparator />}
              refreshing={refresh}
              onRefresh={reFreshSubmit}
            />
          </>
        )}
      </INECont>
      {createProductModal && (
        <CreateProductModal
          modal={createProductModal}
          inNoutId={inNout?.id + ""}
        />
      )}
      {iNeModal && <CreateInExModal modal={iNeModal} inNoutId={inNout?.id!} />}
    </SharedLayoutCont>
  );
}
