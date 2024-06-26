import {Vacation} from "@/libs/__generated__/graphql";
import {
  WorkerInfoCont,
  WorkerInfoDesc,
  WorkerTitleCont,
} from "../detailWorker.style";
import Avatar from "@/components/shared/Avatar";
import SharedTxt from "@/components/shared/SharedTxt";
import RowCont from "@/components/shared/RowCont";
import SharedBtn from "@/components/shared/SharedBtn";
import {useModalState} from "@/store/modalState";
import VacationModal from "./vacationModal/vacationModal";

export default function VacationInfo({vacation}: {vacation: Vacation}) {
  const {vacationModal, setVacationModal} = useModalState();
  const dateForm = (date: number) => {
    return new Date(date).toLocaleDateString("ko-KR");
  };
  return (
    <WorkerInfoCont key={vacation?.id}>
      <WorkerTitleCont>
        <Avatar width="10px" height="10px" color="#f9ae18" />
        <SharedTxt text="연차정보" size="25px" bold={700} />
      </WorkerTitleCont>
      <WorkerInfoDesc>
        <RowCont gap="10px">
          <SharedTxt color="black" text="입사일" size="17px" bold={600} />
          <SharedTxt
            color="black"
            text={`${dateForm(Number(vacation?.joinCompanyDate))} 일`}
            size="14px"
          />
        </RowCont>
        <RowCont gap="10px">
          <SharedTxt color="black" text="출근일수" size="17px" bold={600} />
          <SharedTxt
            color="black"
            text={`${vacation?.appearence} 일`}
            size="14px"
          />
        </RowCont>
        <RowCont gap="10px">
          <SharedTxt color="black" text="연차" size="17px" bold={600} />
          <SharedTxt
            color="black"
            text={`${vacation?.annual} 일`}
            size="14px"
          />
        </RowCont>
        <RowCont gap="10px">
          <SharedTxt color="black" text="기타연차" size="17px" bold={600} />
          <SharedTxt color="black" text={`${vacation?.other} 일`} size="14px" />
        </RowCont>
        <RowCont gap="10px">
          <SharedTxt color="black" text="남은연차" size="17px" bold={600} />
          <SharedTxt
            color="black"
            text={`${vacation?.restAnnualVacation} 일`}
            size="14px"
          />
        </RowCont>
        <RowCont gap="10px">
          <SharedTxt
            color="black"
            text="남은 기타연차"
            size="17px"
            bold={600}
          />
          <SharedTxt
            color="black"
            text={`${vacation?.restOtherVacation} 일`}
            size="14px"
          />
        </RowCont>
        <RowCont gap="10px">
          <SharedTxt color="black" text="총연차" size="17px" bold={600} />
          <SharedTxt
            color="black"
            text={`${vacation?.totalVacation} 일`}
            size="14px"
          />
        </RowCont>
      </WorkerInfoDesc>
      <SharedBtn
        text="연차정보수정"
        border="0"
        onSubmit={() => setVacationModal()}
      />
      {vacationModal && (
        <VacationModal
          joinDate={Number(vacation.joinCompanyDate)}
          vacationId={vacation.id}
          other={Number(vacation.other)}
        />
      )}
    </WorkerInfoCont>
  );
}
