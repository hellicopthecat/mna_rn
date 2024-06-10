import ConnectCompany from "@/components/afterLogin/connectCompany/connectCompany";
import {ConnectCompanyCont} from "@/components/afterLogin/connectCompany/connectCompany.style";
import RowCont from "@/components/shared/RowCont";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import {Company, Query} from "@/libs/__generated__/graphql";
import {COMPANY_FRAG} from "@/libs/fragments/companyFrag";
import {IRouterParams} from "@/types/routerParamsType";
import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {useGlobalSearchParams} from "expo-router";
import {FlatList, Text, View} from "react-native";
const CONNECTING_COMPANY = gql`
  query connectingCompany($searchCompanyId: Int!) {
    searchCompany(id: $searchCompanyId) {
      connectingCompanyCount
      connectingCompany {
        ...CompanyFrag
      }
    }
  }
  ${COMPANY_FRAG}
` as DocumentNode | TypedDocumentNode<Query>;
export default function Page() {
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const {data, loading} = useQuery(CONNECTING_COMPANY, {
    variables: {searchCompanyId: Number(companyId)},
  });
  const connectingCompanyCount = data?.searchCompany?.connectingCompanyCount;
  const connectingCompany = data?.searchCompany?.connectingCompany;
  return (
    <SharedLayoutCont>
      <ConnectCompanyCont>
        <RowCont content="space-between">
          <SharedTxt text="거래처" size="20px" bold={700} />
          <SharedTxt text={connectingCompanyCount + ""} />
        </RowCont>
        <FlatList
          data={connectingCompany as Company[]}
          keyExtractor={(item) => item.id + ""}
          renderItem={({item}) => <ConnectCompany item={item} loading />}
        />
      </ConnectCompanyCont>
    </SharedLayoutCont>
  );
}
