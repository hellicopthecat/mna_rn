import {IncomeExpend} from "@/libs/__generated__/graphql";
import {INECard} from "./incomeExpendCard.style";
import SharedTxt from "@/components/shared/SharedTxt";
import RowCont from "@/components/shared/RowCont";
import SharedBtn from "@/components/shared/SharedBtn";

export default function IncomeExpendCard({item}: {item: IncomeExpend}) {
  return (
    <INECard>
      <RowCont content="space-between">
        <SharedTxt
          text={item.infoSubtitle}
          color="black"
          size="20px"
          bold={600}
        />
        <SharedTxt text={item.incomeTrue ? "수입" : "지출"} color="black" />
      </RowCont>
      <RowCont gap="10px" content="flex-end">
        <RowCont gap="5px">
          <SharedTxt text="생성일" color="gray" size="13px" />
          <SharedTxt
            text={new Date(Number(item.createdAt)).toLocaleDateString() + ""}
            color="gray"
            size="13px"
          />
        </RowCont>
        <RowCont gap="5px">
          <SharedTxt text="수정일" color="gray" size="13px" />
          <SharedTxt
            text={new Date(Number(item.updateAt)).toLocaleDateString() + ""}
            color="gray"
            size="13px"
          />
        </RowCont>
      </RowCont>
      <RowCont gap="10px">
        <SharedTxt text="가격" color="black" />
        <SharedTxt text={`${item.money.toLocaleString()} 원`} color="black" />
      </RowCont>
      <RowCont gap="10px">
        <SharedTxt text="거래일" color="black" />
        <SharedTxt
          text={!item.businessDate ? "미작성" : item.businessDate + ""}
          color="black"
        />
      </RowCont>
      <RowCont gap="10px">
        <SharedTxt text="거래타입" color="black" />
        <SharedTxt
          text={!item.paymentType ? "미작성" : item.paymentType + ""}
          color="black"
        />
      </RowCont>
      <RowCont gap="10px">
        <SharedTxt text="계정과목" color="black" />
        <SharedTxt
          text={!item.accountCode ? "미작성" : item.accountCode + ""}
          color="black"
        />
      </RowCont>
      <RowCont gap="10px">
        <SharedTxt text="결제" color="black" />
        <SharedTxt
          text={
            item.paymentsDone === "PAID"
              ? "지불함"
              : item.paymentsDone === "NONPAID"
              ? "비지불"
              : "대기중"
          }
          color="black"
        />
      </RowCont>
      <RowCont gap="10px">
        <SharedTxt text="거래내용" color="black" />
        <SharedTxt
          text={!item.businessDesc ? "미작성" : item.businessDesc + ""}
          color="black"
        />
      </RowCont>
      <SharedBtn text="자세히 보기" />
    </INECard>
  );
}
