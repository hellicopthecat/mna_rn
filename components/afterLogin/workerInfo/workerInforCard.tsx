import {User} from "@/libs/__generated__/graphql";
import {
  WorkerCardBtn,
  WorkerCardCont,
  WorkerCardLeft,
  WorkerCardRight,
} from "./workerInfoCard.style";
import SharedTxt from "@/components/shared/SharedTxt";
import RowCont from "@/components/shared/RowCont";
import Avatar from "@/components/shared/Avatar";
import {useModalState} from "@/store/modalState";
import DetailWorker from "./detailWorker/detailWorker";
import {useGlobalSearchParams} from "expo-router";
import {IRouterParams} from "@/types/routerParamsType";

export default function WorkderInfoCard({item}: {item: User}) {
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const {workerModal, setWorkerModal} = useModalState();
  return (
    <WorkerCardCont>
      <WorkerCardBtn onPress={() => setWorkerModal(Number(item.id))}>
        <WorkerCardLeft />
        <WorkerCardRight>
          <SharedTxt
            text={item.username}
            color="black"
            size="25px"
            bold={600}
          />
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
          {item.salary?.map(
            (salary) =>
              salary?.companyId === Number(companyId) && (
                <RowCont gap="10px" key={salary?.id}>
                  <SharedTxt text="연봉" color="black" />
                  <SharedTxt
                    text={`${salary?.annualSalary?.toLocaleString()} 원`}
                    color="black"
                  />
                </RowCont>
              )
          )}
          {item.vacation?.map(
            (vacation) =>
              vacation?.companyId === Number(companyId) && (
                <RowCont gap="10px" key={vacation?.id}>
                  <SharedTxt text="총 연차" color="black" />
                  <SharedTxt
                    text={`${vacation?.totalVacation} 일`}
                    color="black"
                  />
                </RowCont>
              )
          )}
        </WorkerCardRight>
      </WorkerCardBtn>
      {workerModal === Number(item.id) && <DetailWorker item={item} />}
    </WorkerCardCont>
  );
}
