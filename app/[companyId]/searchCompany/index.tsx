import {
  SearchCompanyCont,
  SearchResult,
} from "@/components/afterLogin/searchCompany/searchCompany.styled";
import FlatSeparator from "@/components/shared/FlatSeparator";
import SharedInput from "@/components/shared/SharedInput";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import {Company, Query} from "@/libs/__generated__/graphql";
import {COMPANY_FRAG} from "@/libs/fragments/companyFrag";
import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {Controller, useForm} from "react-hook-form";
import {ActivityIndicator, FlatList, Text, View} from "react-native";

const SEARCH_COMPANY = gql`
  query searchByCompanyName($companyName: String!) {
    searchByCompanyName(companyName: $companyName) {
      id
      companyName
      companyOwner {
        id
        username
      }
    }
  }
` as DocumentNode | TypedDocumentNode<Query>;

export default function Page() {
  const {control, handleSubmit, watch} = useForm();
  const {data, loading} = useQuery(SEARCH_COMPANY, {
    variables: {companyName: watch("companyName")},
  });
  const renderItem = ({item}: {item: Company}) => {
    return loading ? (
      <ActivityIndicator />
    ) : (
      <SearchResult>
        <SharedTxt
          text={item.companyName}
          color="black"
          size="25px"
          bold={700}
        />
        <SharedTxt text={item.companyOwner.username} color="black" />
      </SearchResult>
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
          renderItem={renderItem}
          ItemSeparatorComponent={() => <FlatSeparator />}
        />
      </SearchCompanyCont>
    </SharedLayoutCont>
  );
}
