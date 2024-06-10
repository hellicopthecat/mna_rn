import {gql} from "@apollo/client";

export const COMPANY_FRAG = gql`
  fragment CompanyFrag on Company {
    id
    createdAt
    updateAt
    companyLogo
    companyName
    isManager
    isOwned
  }
`;
