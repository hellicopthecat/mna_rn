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
import useUser from "@/hooks/useUser";
import {Company, Query} from "@/libs/__generated__/graphql";
import {COMPANY_FRAG} from "@/libs/fragments/companyFrag";
import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {router} from "expo-router";
import {Controller, useForm} from "react-hook-form";
import {ActivityIndicator, FlatList, Text, View} from "react-native";

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
    }
  }
` as DocumentNode | TypedDocumentNode<Query>;

export default function Page() {
  const {data: userData} = useUser();
  const {control, watch} = useForm();
  const {data, loading} = useQuery(SEARCH_COMPANY, {
    variables: {
      companyName: watch("companyName") === "" ? "" : watch("companyName"),
    },
  });
  //  onPress={() => router.replace(`/${item.id}`)
  const SearchResultCard = ({item}: {item: Company}) => {
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
            {!item.connectedCompany?.find(
              (connect) => connect?.id === item.id
            ) ? (
              <RowCont content="flex-end" style={{height: "100%"}}>
                <SharedBtn text="연결하기" width="50%" height="100%" />
              </RowCont>
            ) : (
              <RowCont content="flex-end" style={{height: "100%"}}>
                <SharedBtn text="연결해제" width="50%" height="100%" />
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
