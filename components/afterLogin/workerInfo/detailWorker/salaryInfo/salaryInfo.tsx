import {Salary} from "@/libs/__generated__/graphql";
import {
  WorkerInfoCont,
  WorkerInfoDesc,
  WorkerTitleCont,
} from "../detailWorker.style";
import Avatar from "@/components/shared/Avatar";
import SharedTxt from "@/components/shared/SharedTxt";
import RowCont from "@/components/shared/RowCont";
import {useModalState} from "@/store/modalState";
import SharedBtn from "@/components/shared/SharedBtn";
import {Modal} from "react-native";
import SalaryModal from "./salaryModal/salaryModal";

export default function SalaryInfo({salary}: {salary: Salary}) {
  const {salaryModal, setSalaryModal} = useModalState();
  return (
    <WorkerInfoCont key={salary?.id}>
      <WorkerTitleCont>
        <Avatar width="10px" height="10px" color="#18f9cc" />
        <SharedTxt text="연봉정보" size="25px" bold={700} />
      </WorkerTitleCont>
      <WorkerInfoDesc>
        <RowCont gap="10px">
          <SharedTxt color="black" text="연봉" size="17px" bold={600} />
          <SharedTxt
            color="black"
            text={`${salary?.annualSalary?.toLocaleString()} 원`}
            size="14px"
          />
        </RowCont>
        <RowCont gap="10px">
          <SharedTxt color="black" text="세전월급여" size="17px" />
          <SharedTxt
            color="black"
            text={`${salary?.preTaxMonthlySalary?.toLocaleString()} 원`}
            size="14px"
          />
        </RowCont>
        <RowCont gap="10px">
          <SharedTxt
            color="black"
            text="8세이상 20세이하 자녀 수"
            size="17px"
          />
          <SharedTxt
            color="black"
            text={`${salary?.childCount} 명`}
            size="14px"
          />
        </RowCont>
        <RowCont gap="10px">
          <SharedTxt color="black" text="자녀세액공제" size="17px" />
          <SharedTxt
            color="black"
            text={`${salary?.childTax?.toLocaleString()} 원`}
            size="14px"
          />
        </RowCont>
        <RowCont gap="10px">
          <SharedTxt color="black" text="근로소득금액" size="17px" />
          <SharedTxt
            color="black"
            text={`${salary?.earnIncomeAmount?.toLocaleString()} 원`}
            size="14px"
          />
        </RowCont>
        <RowCont gap="10px">
          <SharedTxt color="black" text="근로소득공제금액" size="17px" />
          <SharedTxt
            color="black"
            text={`${salary?.earnIncomeDedution?.toLocaleString()} 원`}
            size="14px"
          />
        </RowCont>
        <RowCont gap="10px">
          <SharedTxt color="black" text="가족수" size="17px" />
          <SharedTxt
            color="black"
            text={`${salary?.familyCount} 명`}
            size="14px"
          />
        </RowCont>
        <RowCont gap="10px">
          <SharedTxt color="black" text="인적공제" size="17px" />
          <SharedTxt
            color="black"
            text={`${salary?.familyDedution?.toLocaleString()} 원`}
            size="14px"
          />
        </RowCont>
        <RowCont gap="10px">
          <SharedTxt color="black" text="연금보험료공제" size="17px" />
          <SharedTxt
            color="black"
            text={`${salary?.pensionInsuranceDedution?.toLocaleString()} 원`}
            size="14px"
          />
        </RowCont>
        <RowCont gap="10px">
          <SharedTxt color="black" text="간이세액" size="17px" />
          <SharedTxt
            color="black"
            text={`${salary?.simplifiedTax?.toLocaleString()} 원`}
            size="14px"
          />
        </RowCont>
        <RowCont gap="10px">
          <SharedTxt color="black" text="특별소득공제" size="17px" />
          <SharedTxt
            color="black"
            text={`${salary?.specialIncomeDedution?.toLocaleString()} 원`}
            size="14px"
          />
        </RowCont>
        <RowCont gap="10px">
          <SharedTxt color="black" text="과세표준" size="17px" />
          <SharedTxt
            color="black"
            text={`${salary?.taxBase?.toLocaleString()} 원`}
            size="14px"
          />
        </RowCont>
        <RowCont gap="10px">
          <SharedTxt color="black" text="산출세액" size="17px" />
          <SharedTxt
            color="black"
            text={`${salary?.taxCalculate?.toLocaleString()} 원`}
            size="14px"
          />
        </RowCont>
        <RowCont gap="10px">
          <SharedTxt color="black" text="결정세액" size="17px" />
          <SharedTxt
            color="black"
            text={`${salary?.taxDetermined?.toLocaleString()} 원`}
            size="14px"
          />
        </RowCont>
      </WorkerInfoDesc>
      <SharedBtn
        text="연봉정보수정"
        border="0"
        onSubmit={() => setSalaryModal()}
      />
      {salaryModal && (
        <SalaryModal
          salaryId={Number(salary.id)}
          userId={Number(salary.user.id)}
          preTaxMonthlySalary={Number(salary.preTaxMonthlySalary)}
          familyCount={Number(salary.familyCount)}
          childCount={Number(salary.childCount)}
        />
      )}
    </WorkerInfoCont>
  );
}
