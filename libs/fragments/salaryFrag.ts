import {gql} from "@apollo/client";

export const SALARY_FRAG = gql`
  fragment SalaryFrag on Salary {
    id
    createdAt
    updateAt
    preTaxMonthlySalary
    childCount
    annualSalary
    earnIncomeDedution
    earnIncomeAmount
    familyDedution
    pensionInsuranceDedution
    specialIncomeDedution
    taxBase
    taxCalculate
    taxDetermined
    earnIncomeTaxCredit
    simplifiedTax
    childTax
  }
`;
