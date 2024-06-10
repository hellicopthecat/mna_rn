import {gql} from "@apollo/client";

export const PRODUCT_FRAG = gql`
  fragment ProductFrag on Product {
    id
    itemPhoto
    itemName
    itemCount
    itemProductId
    itemPrice
    itemModelName
    itemDesc
    incomeExpendTypeId
    itemType
  }
`;
