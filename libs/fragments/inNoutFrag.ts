import {gql} from "@apollo/client";

export const COMPANY_INNOUT_FRAG = gql`
  fragment CompanyInNoutFrag on InNout {
    id
    budget
    totalAssets
    capital
    liabilities
    netAssets
    netIncome
    totalRevenue
    totalExpenses
    profitMargin
    equityRatio
    debtRatio
    roe
  }
`;
