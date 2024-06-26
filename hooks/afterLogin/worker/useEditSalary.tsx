import {
  childTax,
  earnIncomeDedution,
  earnIncomeTaxCredit,
  familyDedution,
  pensionInsuranceDedution,
  simplifiedTax,
  specialIncomeDedution,
  taxBase,
  taxCalculate,
} from "@/constants/salaryCalculator";
import {Mutation} from "@/libs/__generated__/graphql";
import {useModalState} from "@/store/modalState";
import {IRouterParams} from "@/types/routerParamsType";
import {IEditSalary} from "@/types/types";
import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {useGlobalSearchParams} from "expo-router";
import {Alert} from "react-native";
const EDIT_SALARY_MUTATE = gql`
  mutation editSalary(
    $userId: Int!
    $companyId: Int!
    $preTaxMonthlySalary: Int
    $familyCount: Int
    $childCount: Int
  ) {
    editSalary(
      userId: $userId
      companyId: $companyId
      preTaxMonthlySalary: $preTaxMonthlySalary
      familyCount: $familyCount
      childCount: $childCount
    ) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
export default function useEditSalary() {
  const {setSalaryModal} = useModalState();
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const [editSalary, {loading, error}] = useMutation(EDIT_SALARY_MUTATE);
  const handleEditSalary = async ({
    salaryId,
    userId,
    preTaxMonthlySalary,
    familyCount,
    childCount,
  }: IEditSalary) => {
    await editSalary({
      variables: {
        userId,
        companyId: Number(companyId),
        preTaxMonthlySalary,
        familyCount,
        childCount,
      },
      onCompleted(data) {
        if (!data.editSalary.ok) {
          Alert.alert("급여수정실패", data.editSalary.errorMsg + "");
        } else {
          setSalaryModal();
        }
      },
      update(cache, {data}) {
        if (data?.editSalary.ok) {
          const annual_salary = preTaxMonthlySalary * 12;
          const family_dedution = familyDedution(familyCount);
          const pension_insurance_dedution =
            pensionInsuranceDedution(preTaxMonthlySalary);
          const special_income_dedution = specialIncomeDedution(
            preTaxMonthlySalary * 12,
            familyCount
          );
          const earn_income_dedution = earnIncomeDedution(annual_salary);
          const earn_income_amount =
            annual_salary - Number(earn_income_dedution);
          const tax_base = taxBase(
            earn_income_amount,
            family_dedution,
            pension_insurance_dedution,
            special_income_dedution as number
          );
          const tax_calculate = taxCalculate(tax_base);
          const child_tax = childTax(childCount);
          const earn_income_taxcredit =
            Math.floor(
              earnIncomeTaxCredit(annual_salary, Number(tax_calculate))! / 100
            ) * 100;
          const tax_determined =
            Math.floor((Number(tax_calculate) - earn_income_taxcredit) / 100) *
            100;
          const simplified_tax = simplifiedTax(tax_determined);
          cache.modify({
            id: `Salary:${salaryId}`,
            fields: {
              updateAt() {
                return Date.now().toString();
              },
              preTaxMonthlySalary() {
                return preTaxMonthlySalary;
              },
              familyCount() {
                return familyCount;
              },
              childCount() {
                return childCount;
              },
              annualSalary() {
                return annual_salary;
              },
              earnIncomeDedution() {
                return earn_income_dedution as number;
              },
              earnIncomeAmount() {
                return earn_income_amount;
              },
              familyDedution() {
                return family_dedution;
              },
              pensionInsuranceDedution() {
                return pension_insurance_dedution;
              },
              specialIncomeDedution() {
                return special_income_dedution as number;
              },
              taxBase() {
                return tax_base;
              },
              taxCalculate() {
                return tax_calculate as number;
              },
              earnIncomeTaxCredit() {
                return earn_income_taxcredit;
              },
              taxDetermined() {
                return tax_determined;
              },
              simplifiedTax() {
                return simplified_tax;
              },
              childTax() {
                return child_tax;
              },
            },
          });
        }
      },
    });
  };
  return {handleEditSalary, loading, error};
}
