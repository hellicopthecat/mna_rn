import RowCont from "@/components/shared/RowCont";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import {Salary, User, Vacation} from "@/libs/__generated__/graphql";
import {useModalState} from "@/store/modalState";
import {Modal, SafeAreaView, ScrollView, View} from "react-native";
import {
  WorkerInfoCont,
  WorkerInfoDesc,
  WorkerTitleCont,
} from "./detailWorker.style";
import Avatar from "@/components/shared/Avatar";
import VacationInfo from "./vacationInfo/vacationInfo";
import SalaryInfo from "./salaryInfo/salaryInfo";
import {useGlobalSearchParams} from "expo-router";
import {IRouterParams} from "@/types/routerParamsType";
import CreateSalary from "./createSalary/createSalary";
import CreateVacation from "./createVacation/createVacation";

export default function DetailWorker({item}: {item: User}) {
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const {
    workerModal,
    setWorkerModal,
    createSalaryModal,
    setCreateSalaryModal,
    createVacationModal,
    setCreateVacationModal,
  } = useModalState();

  return (
    <Modal visible={workerModal === Number(item.id)} animationType="slide">
      <SharedLayoutCont>
        <SafeAreaView style={{flex: 1}}>
          <SharedTxt
            text={item.username}
            align="center"
            size="17px"
            bold={700}
            style={{paddingVertical: 10}}
          />
          <ScrollView
            contentContainerStyle={{gap: 20}}
            style={{marginBottom: 10}}
          >
            <View style={{flex: 1, gap: 10, paddingVertical: 10}}>
              <WorkerInfoCont>
                <WorkerTitleCont>
                  <Avatar width="10px" height="10px" />
                  <SharedTxt text="사원정보" size="25px" bold={700} />
                </WorkerTitleCont>
                <WorkerInfoDesc>
                  <RowCont gap="10px">
                    <SharedTxt
                      text="이메일"
                      size="17px"
                      color="black"
                      bold={600}
                    />
                    <SharedTxt
                      text={item.email || "미기입"}
                      color="black"
                      size="14px"
                    />
                  </RowCont>
                  <RowCont gap="10px">
                    <SharedTxt
                      text="전화번호"
                      size="17px"
                      color="black"
                      bold={600}
                    />
                    <SharedTxt
                      text={item.phone || "미기입"}
                      color="black"
                      size="14px"
                    />
                  </RowCont>
                  <RowCont gap="10px">
                    <SharedTxt
                      text="이름(성)"
                      size="17px"
                      color="black"
                      bold={600}
                    />
                    <SharedTxt
                      text={item.firstName || "미기입"}
                      color="black"
                      size="14px"
                    />
                  </RowCont>
                  <RowCont gap="10px">
                    <SharedTxt
                      text="이름"
                      size="17px"
                      color="black"
                      bold={600}
                    />
                    <SharedTxt
                      text={item.lastName || "미기입"}
                      color="black"
                      size="14px"
                    />
                  </RowCont>
                </WorkerInfoDesc>
              </WorkerInfoCont>
              {item.vacation?.map(
                (vacation) =>
                  vacation?.user.id === item.id &&
                  vacation.companyId === Number(companyId) && (
                    <VacationInfo
                      key={vacation?.id}
                      vacation={vacation as Vacation}
                    />
                  )
              )}
              {item.salary?.map(
                (salary) =>
                  salary?.user.id === item.id &&
                  salary.companyId === Number(companyId) && (
                    <SalaryInfo key={salary?.id} salary={salary as Salary} />
                  )
              )}
            </View>
          </ScrollView>
          <View style={{gap: 10}}>
            {(item.vacation?.length === 0 ||
              item.vacation?.find(
                (vacation) =>
                  vacation?.user.id === item.id &&
                  vacation.companyId === Number(companyId)
              ) === undefined) && (
              <SharedBtn
                text={"연차생성"}
                onSubmit={() => setCreateVacationModal()}
              />
            )}
            {(item.salary?.length === 0 ||
              item.salary?.find(
                (salary) =>
                  salary?.user.id === item.id &&
                  salary.companyId === Number(companyId)
              ) === undefined) && (
              <SharedBtn
                text={"급여생성"}
                onSubmit={() => setCreateSalaryModal()}
              />
            )}
            <SharedBtn text="닫기" onSubmit={() => setWorkerModal(null)} />
          </View>
        </SafeAreaView>
        {createSalaryModal && <CreateSalary userId={item.id} />}
        {createVacationModal && <CreateVacation userId={item.id} />}
      </SharedLayoutCont>
    </Modal>
  );
}
