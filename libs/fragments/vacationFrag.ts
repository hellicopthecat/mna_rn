import {gql} from "@apollo/client";

export const VACATION_FRAG = gql`
  fragment VacationFrag on Vacation {
    id
    createdAt
    updateAt
    joinCompanyDate
    appearence
    annual
    other
    restAnnualVacation
    restOtherVacation
    totalVacation
  }
`;

export const VACATION_DESC_FRAG = gql`
  fragment VacationDescFrag on VacationDesc {
    id
    createdAt
    updateAt
    vacationType
    day
    description
  }
`;
