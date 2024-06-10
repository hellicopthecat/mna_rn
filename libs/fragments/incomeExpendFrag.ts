import {gql} from "@apollo/client";

export const INCOME_EXPEND_FRAG = gql`
  fragment IncomeExpendFrag on IncomeExpend {
    id
    createdAt
    updateAt
    incomeTrue
    infoSubtitle
    money
    businessDate
    paymentType
    accountCode
    businessDesc
    paymentsDone
  }
`;
