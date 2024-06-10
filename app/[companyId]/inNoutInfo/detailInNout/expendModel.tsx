import IncomeExpendCard from "@/components/afterLogin/inNoutInfo/detailInNout/incomeExpendCard";
import {INECont} from "@/components/afterLogin/inNoutInfo/detailInNout/incomeExpendCard.style";
import FlatSeparator from "@/components/shared/FlatSeparator";
import RowCont from "@/components/shared/RowCont";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import {IncomeExpend, Query} from "@/libs/__generated__/graphql";
import {INCOME_EXPEND_FRAG} from "@/libs/fragments/incomeExpendFrag";
import {IRouterParams} from "@/types/routerParamsType";
import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {useGlobalSearchParams} from "expo-router";
import {useState} from "react";
import {ActivityIndicator} from "react-native";
import {FlatList, TouchableOpacity} from "react-native-gesture-handler";
const EXPEND_MODEL = gql`
  query expendModel($searchCompanyId: Int!) {
    searchCompany(id: $searchCompanyId) {
      companyInNout {
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
  const [pay, setPay] = useState(true);
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const {data, loading} = useQuery(EXPEND_MODEL, {
    variables: {searchCompanyId: Number(companyId)},
  });
  const inNout = data?.searchCompany?.companyInNout;
  const paidIncome = data?.searchCompany?.companyInNout.expendModel;
  const waitIncome = data?.searchCompany?.companyInNout.waitExpendModel;
  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <SharedLayoutCont>
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
        {pay && (
          <>
            <RowCont content="space-between">
              <SharedTxt text="지불된 수입" size="20px" />
              <SharedTxt
                text={`${inNout?.expendMoney?.toLocaleString()} 원`}
                size="20px"
              />
            </RowCont>

            <FlatList
              data={paidIncome as IncomeExpend[]}
              keyExtractor={(item) => item?.id + ""}
              renderItem={({item}: {item: IncomeExpend}) => (
                <IncomeExpendCard item={item} />
              )}
              ItemSeparatorComponent={() => <FlatSeparator />}
            />
          </>
        )}
        {!pay && (
          <>
            <RowCont content="space-between">
              <SharedTxt text="대기중인 수입" size="20px" />
              <SharedTxt
                text={`${inNout?.waitExpendMoney?.toLocaleString()} 원`}
                size="20px"
              />
            </RowCont>

            <FlatList
              data={waitIncome as IncomeExpend[]}
              keyExtractor={(item) => item?.id + ""}
              renderItem={({item}: {item: IncomeExpend}) => (
                <IncomeExpendCard item={item} />
              )}
              ItemSeparatorComponent={() => <FlatSeparator />}
            />
          </>
        )}
      </INECont>
    </SharedLayoutCont>
  );
}
