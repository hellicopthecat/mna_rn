import {gql} from "@apollo/client";

export const USER_FRAG = gql`
  fragment UserFrag on User {
    id
    username
    firstName
    lastName
    email
    phone
    avatar
    isOnVacation
  }
`;
