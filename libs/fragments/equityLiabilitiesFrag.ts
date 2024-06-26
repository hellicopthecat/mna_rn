import {gql} from "@apollo/client";

export const EQUITY_LIABILITIES_FRAG = gql`
  fragment EquityLiabilitiesFrag on EquityLiabilities {
    id
    createdAt
    updateAt
    value
    assests
    current
    enLDesc
    enLId
    enLName
    enLType
    inNoutId
  }
`;
