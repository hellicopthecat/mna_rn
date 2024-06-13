import {WorkerCont} from "@/components/afterLogin/workerInfo/workerInfoCard.style";
import WorkderInfoCard from "@/components/afterLogin/workerInfo/workerInforCard";
import FlatSeparator from "@/components/shared/FlatSeparator";
import RowCont from "@/components/shared/RowCont";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import {Query, User} from "@/libs/__generated__/graphql";
import {SALARY_FRAG} from "@/libs/fragments/salaryFrag";
import {VACATION_FRAG} from "@/libs/fragments/vacationFrag";
import {IRouterParams} from "@/types/routerParamsType";
import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {useGlobalSearchParams} from "expo-router";
import {ActivityIndicator, FlatList, TouchableOpacity} from "react-native";
const COMPANY_WORKER_QUERY = gql`
  query companyWorkers($searchCompanyId: Int!) {
    searchCompany(id: $searchCompanyId) {
      companyWorker {
        id
        username
        firstName
        lastName
        phone
        salary {
          ...SalaryFrag
        }
        vacation {
          ...VacationFrag
        }
      }
    }
  }
  ${SALARY_FRAG}
  ${VACATION_FRAG}
` as DocumentNode | TypedDocumentNode<Query>;
export default function Page() {
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const {data, loading} = useQuery(COMPANY_WORKER_QUERY, {
    variables: {searchCompanyId: Number(companyId)},
  });
  const worker = data?.searchCompany?.companyWorker;

  return (
    <SharedLayoutCont loading={loading}>
      <WorkerCont>
        <RowCont content="space-between">
          <TouchableOpacity>
            <SharedTxt text="인사관리" size="40px" bold={700} />
          </TouchableOpacity>
          <SharedBtn text="직원등록" width="20%" />
        </RowCont>
        <FlatList
          data={worker as User[]}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <WorkderInfoCard item={item} />}
          ItemSeparatorComponent={() => <FlatSeparator />}
          contentInset={{bottom: 50}}
        />
      </WorkerCont>
    </SharedLayoutCont>
  );
}
