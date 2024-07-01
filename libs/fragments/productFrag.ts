import {gql} from "@apollo/client";

export const PRODUCT_FRAG = gql`
  fragment ProductFrag on Product {
    id
    createdAt
    updateAt
    itemProductId
    itemName
    itemModelName
    itemPhoto
    itemType
    itemCount
    itemPrice
    itemDesc
    incomeExpendTypeId
    companyId
    incomeExpendId
  }
`;
