import IncomeExpendCard from "@/components/afterLogin/inNoutInfo/detailInNout/incomeExpendCard";
import {INECont} from "@/components/afterLogin/inNoutInfo/detailInNout/incomeExpendCard.style";
import FlatSeparator from "@/components/shared/FlatSeparator";
import RowCont from "@/components/shared/RowCont";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import {IncomeExpend, Query} from "@/libs/__generated__/graphql";
import {INCOME_EXPEND_FRAG} from "@/libs/fragments/incomeExpendFrag";
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
  const [pay, setPay] = useState(true);
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const {data, loading} = useQuery(INCOME_MODEL, {
    variables: {searchCompanyId: Number(companyId)},
  });
  const inNout = data?.searchCompany?.inNout;
  const paidIncome = data?.searchCompany?.inNout.incomeModel;
  const waitIncome = data?.searchCompany?.inNout.waitIncomeModel;

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
        <SharedBtn text="수입모델작성" />
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
                text={`${inNout?.waitIncomeMoney?.toLocaleString()} 원`}
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
