import ConnectCompany from "@/components/afterLogin/connectCompany/connectCompany";
import {ConnectCompanyCont} from "@/components/afterLogin/connectCompany/connectCompany.style";
import FlatSeparator from "@/components/shared/FlatSeparator";
import RowCont from "@/components/shared/RowCont";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import {Company, Query} from "@/libs/__generated__/graphql";
import {COMPANY_FRAG} from "@/libs/fragments/companyFrag";
import {IRouterParams} from "@/types/routerParamsType";
import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {useGlobalSearchParams} from "expo-router";
import {ActivityIndicator, FlatList, Text, View} from "react-native";
const CONNECTED_COMPANY = gql`
  query connectedCompany($searchCompanyId: Int!) {
    searchCompany(id: $searchCompanyId) {
      connectedCompanyCount
      connectedCompany {
        ...CompanyFrag
      }
    }
  }
  ${COMPANY_FRAG}
` as DocumentNode | TypedDocumentNode<Query>;
export default function Page() {
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const {data, loading} = useQuery(CONNECTED_COMPANY, {
    variables: {searchCompanyId: Number(companyId)},
  });
  const connectedCompanyCount = data?.searchCompany?.connectedCompanyCount;
  const connectedCompany = data?.searchCompany?.connectedCompany;
  return (
    <SharedLayoutCont>
      <ConnectCompanyCont>
        <RowCont content="space-between">
          <SharedTxt text="발주처" size="20px" bold={700} />
          <SharedTxt text={connectedCompanyCount + ""} />
        </RowCont>
        <FlatList
          data={connectedCompany as Company[]}
          keyExtractor={(item) => item.id + ""}
          renderItem={({item}) => (
            <ConnectCompany item={item} loading={loading} />
          )}
          ItemSeparatorComponent={() => <FlatSeparator />}
        />
      </ConnectCompanyCont>
    </SharedLayoutCont>
  );
}
