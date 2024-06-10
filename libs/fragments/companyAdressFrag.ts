import {gql} from "@apollo/client";

export const COMPANY_ADRESS_FRAG = gql`
  fragment CompanyAdressFrag on CompanyAdress {
    id
    country
    city
    streetAdress
    restAdress
    adressNum
  }
`;
