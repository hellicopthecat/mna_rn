import {User} from "@/libs/__generated__/graphql";
import {
  WorkerCardCont,
  WorkerCardLeft,
  WorkerCardRight,
} from "./workerInfoCard.style";
import SharedTxt from "@/components/shared/SharedTxt";
import RowCont from "@/components/shared/RowCont";
import Avatar from "@/components/shared/Avatar";
import {useModalState} from "@/store/modalState";
import DetailWorker from "./detailWorker/detailWorker";

export default function WorkderInfoCard({item}: {item: User}) {
  const {workerModal, setWorkerModal} = useModalState();
  return (
    <WorkerCardCont onPress={() => setWorkerModal(Number(item.id))}>
      <WorkerCardLeft>
        <Avatar radius="0" width="100%" height="100%" />
      </WorkerCardLeft>
      <WorkerCardRight>
        <SharedTxt text={item.username} color="black" size="25px" bold={600} />
        <RowCont gap="10px">
          <SharedTxt text="이름" color="black" />
          <SharedTxt
            text={
              item.firstName && item.lastName
                ? `${item.firstName} ${item.lastName}`
                : "미작성"
            }
            color="black"
          />
        </RowCont>
        <RowCont gap="10px">
          <SharedTxt text="휴가/업무" color="black" />
          <SharedTxt
            text={item.isOnVacation ? "휴가중" : "업무중"}
            color="black"
          />
        </RowCont>
        {item.salary?.map((item) => (
          <RowCont gap="10px" key={item?.id}>
            <SharedTxt text="연봉" color="black" />
            <SharedTxt
              text={`${item?.annualSalary?.toLocaleString()} 원`}
              color="black"
            />
          </RowCont>
        ))}
        {item.vacation?.map((item) => (
          <RowCont gap="10px" key={item?.id}>
            <SharedTxt text="총 연차" color="black" />
            <SharedTxt text={`${item?.annual} 일`} color="black" />
          </RowCont>
        ))}
      </WorkerCardRight>
      {workerModal === Number(item.id) && <DetailWorker item={item} />}
    </WorkerCardCont>
  );
}
