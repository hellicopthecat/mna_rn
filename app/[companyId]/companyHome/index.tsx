import {
  CompanyAdressBtn,
  CompanyAdressCont,
  CompanyAdressDesc,
  CompanyAdressHeader,
} from "@/components/afterLogin/companyHome/companyHome.style";
import Avatar from "@/components/shared/Avatar";
import RowCont from "@/components/shared/RowCont";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import {Query} from "@/libs/__generated__/graphql";
import {IRouterParams} from "@/types/routerParamsType";
import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {useGlobalSearchParams} from "expo-router";
import {View} from "react-native";
const SEE_COMPANY_ADRESS = gql`
  query seeCompanyAdress($searchCompanyId: Int!) {
    searchCompany(id: $searchCompanyId) {
      id
      companyName
      companyAdress {
        id
        createdAt
        updateAt
        country
        city
        streetAdress
        restAdress
        adressNum
      }
    }
  }
` as DocumentNode | TypedDocumentNode<Query>;
export default function Page() {
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const {data, loading, error} = useQuery(SEE_COMPANY_ADRESS, {
    variables: {searchCompanyId: Number(companyId)},
  });
  const company = data?.searchCompany;
  return (
    <SharedLayoutCont loading={loading}>
      <CompanyAdressCont>
        <CompanyAdressHeader>
          <Avatar width="100px" height="100px" />
          <SharedTxt
            text={company?.companyName + ""}
            size="30px"
            bold={700}
            align="center"
          />
        </CompanyAdressHeader>
        <CompanyAdressDesc>
          <RowCont gap="10px">
            <SharedTxt text="국가" size="20px" bold={700} align="center" />
            <SharedTxt
              text={
                company?.companyAdress?.country === ""
                  ? "미작성"
                  : company?.companyAdress?.country + ""
              }
              size="20px"
              bold={700}
              align="center"
            />
          </RowCont>
          <RowCont gap="10px">
            <SharedTxt text="우편번호" size="20px" bold={700} align="center" />
            <SharedTxt
              text={
                company?.companyAdress?.adressNum === ""
                  ? "미작성"
                  : company?.companyAdress?.adressNum + ""
              }
              size="20px"
              bold={700}
              align="center"
            />
          </RowCont>
          <RowCont gap="10px">
            <SharedTxt text="시" size="20px" bold={700} align="center" />
            <SharedTxt
              text={
                company?.companyAdress?.city === ""
                  ? "미작성"
                  : company?.companyAdress?.city + ""
              }
              size="20px"
              bold={700}
              align="center"
            />
          </RowCont>
          <RowCont gap="10px">
            <SharedTxt
              text="도로명 주소"
              size="20px"
              bold={700}
              align="center"
            />
            <SharedTxt
              text={
                company?.companyAdress?.streetAdress === ""
                  ? "미작성"
                  : company?.companyAdress?.streetAdress + ""
              }
              size="20px"
              bold={700}
              align="center"
            />
          </RowCont>
          <RowCont gap="10px">
            <SharedTxt
              text="나머지주소"
              size="20px"
              bold={700}
              align="center"
            />
            <SharedTxt
              text={
                company?.companyAdress?.restAdress === ""
                  ? "미작성"
                  : company?.companyAdress?.restAdress + ""
              }
              size="20px"
              bold={700}
              align="center"
            />
          </RowCont>
        </CompanyAdressDesc>
        <CompanyAdressBtn>
          <SharedBtn text="주소수정" />
        </CompanyAdressBtn>
      </CompanyAdressCont>
    </SharedLayoutCont>
  );
}
