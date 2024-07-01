import {
  SearchCompanyCont,
  SearchResult,
} from "@/components/afterLogin/searchCompany/searchCompany.styled";
import FlatSeparator from "@/components/shared/FlatSeparator";
import RowCont from "@/components/shared/RowCont";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedInput from "@/components/shared/SharedInput";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import useConnectCompany from "@/hooks/afterLogin/connectCompany/useConnectCompany";
import useDisconnectCompany from "@/hooks/afterLogin/connectCompany/useDisconnectCompany";
import useUser from "@/hooks/useUser";
import {Company, Query} from "@/libs/__generated__/graphql";
import {IRouterParams} from "@/types/routerParamsType";
import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {router, useGlobalSearchParams} from "expo-router";
import {Controller, useForm} from "react-hook-form";
import {ActivityIndicator, FlatList, View} from "react-native";
const MY_COMPANY = gql`
  query myCompany($searchCompanyId: Int!) {
    searchCompany(id: $searchCompanyId) {
      connectingCompany {
        id
      }
      connectedCompany {
        id
      }
    }
  }
` as DocumentNode | TypedDocumentNode<Query>;
const SEARCH_COMPANY = gql`
  query searchByCompanyName($companyName: String) {
    searchByCompanyName(companyName: $companyName) {
      id
      companyName
      companyOwner {
        id
        username
      }
      connectedCompany {
        id
      }
      connectingCompany {
        id
      }
    }
  }
` as DocumentNode | TypedDocumentNode<Query>;

export default function Page() {
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const {data: userData} = useUser();
  const {control, watch} = useForm();
  const {data: myCompany} = useQuery(MY_COMPANY, {
    variables: {searchCompanyId: Number(companyId)},
  });
  const {data, loading} = useQuery(SEARCH_COMPANY, {
    variables: {
      companyName: watch("companyName") === "" ? "" : watch("companyName"),
    },
  });

  const SearchResultCard = ({item}: {item: Company}) => {
    //connect
    const {handleConnectCompany} = useConnectCompany();
    const connectSubmit = () => {
      handleConnectCompany({
        companyId: Number(companyId),
        targetCompanyId: Number(item.id),
      });
    };
    //disconnect
    const {handleDisconnect} = useDisconnectCompany();
    const disconnectSubmit = () => {
      handleDisconnect({
        companyId: Number(companyId),
        targetCompanyId: Number(item.id),
      });
    };
    return loading ? (
      <ActivityIndicator />
    ) : (
      item.companyOwner.id !== userData?.seeMyprofile.id && (
        <SearchResult onPress={() => router.replace(`/${item.id}`)}>
          <RowCont content="space-between">
            <View style={{padding: 10}}>
              <SharedTxt
                text={item.companyName}
                color="black"
                size="25px"
                bold={700}
              />
              <RowCont gap="10px">
                <SharedTxt text="창업주" color="black" />
                <SharedTxt text={item.companyOwner.username} color="black" />
              </RowCont>
            </View>
            {myCompany?.searchCompany?.connectedCompany?.find(
              (company) => company?.id === item.id
            ) === undefined ? (
              <RowCont content="flex-end" style={{height: "100%"}}>
                <SharedBtn
                  text="연결하기"
                  width="50%"
                  height="100%"
                  onSubmit={() => connectSubmit()}
                />
              </RowCont>
            ) : (
              <RowCont content="flex-end" style={{height: "100%"}}>
                <SharedBtn
                  text="연결해제"
                  width="50%"
                  height="100%"
                  onSubmit={() => disconnectSubmit()}
                />
              </RowCont>
            )}
          </RowCont>
        </SearchResult>
      )
    );
  };
  return (
    <SharedLayoutCont>
      <SearchCompanyCont>
        <SharedTxt text="회사검색" size="25px" bold={700} />
        <Controller
          name="companyName"
          control={control}
          render={({field: {onBlur, onChange, value}}) => (
            <SharedInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="검색어를 입력하세요"
            />
          )}
        />
        <FlatList
          data={data?.searchByCompanyName as Company[]}
          keyExtractor={(item) => item.id + ""}
          renderItem={({item}: {item: Company}) => (
            <SearchResultCard item={item} />
          )}
          ItemSeparatorComponent={() => <FlatSeparator />}
        />
      </SearchCompanyCont>
    </SharedLayoutCont>
  );
}
