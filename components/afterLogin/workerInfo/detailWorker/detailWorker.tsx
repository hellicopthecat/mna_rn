import RowCont from "@/components/shared/RowCont";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import {User} from "@/libs/__generated__/graphql";
import {useModalState} from "@/store/modalState";
import {IRouterParams} from "@/types/routerParamsType";
import {useGlobalSearchParams} from "expo-router";
import {Modal, SafeAreaView, ScrollView, View} from "react-native";
import {
  WorkerInfoCont,
  WorkerInfoDesc,
  WorkerTitleCont,
} from "./detailWorker.style";
import Avatar from "@/components/shared/Avatar";

export default function DetailWorker({item}: {item: User}) {
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const {workerModal, setWorkerModal} = useModalState();
  //fn
  const dateForm = (date: number) => {
    return new Date(date).toLocaleDateString("ko-KR");
  };
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
                  <SharedTxt text="이름" size="17px" color="black" bold={600} />
                  <SharedTxt
                    text={item.lastName || "미기입"}
                    color="black"
                    size="14px"
                  />
                </RowCont>
              </WorkerInfoDesc>
            </WorkerInfoCont>
            <ScrollView contentContainerStyle={{gap: 20}}>
              {item.vacation?.map((vacation) => (
                <WorkerInfoCont key={vacation?.id}>
                  <WorkerTitleCont>
                    <Avatar width="10px" height="10px" color="#f9ae18" />
                    <SharedTxt text="연차정보" size="25px" bold={700} />
                  </WorkerTitleCont>
                  <WorkerInfoDesc>
                    <RowCont gap="10px">
                      <SharedTxt
                        color="black"
                        text="입사일"
                        size="17px"
                        bold={600}
                      />
                      <SharedTxt
                        color="black"
                        text={`${dateForm(
                          Number(vacation?.joinCompanyDate)
                        )} 일`}
                        size="14px"
                      />
                    </RowCont>
                    <RowCont gap="10px">
                      <SharedTxt
                        color="black"
                        text="출근일수"
                        size="17px"
                        bold={600}
                      />
                      <SharedTxt
                        color="black"
                        text={`${vacation?.appearence} 일`}
                        size="14px"
                      />
                    </RowCont>
                    <RowCont gap="10px">
                      <SharedTxt
                        color="black"
                        text="연차"
                        size="17px"
                        bold={600}
                      />
                      <SharedTxt
                        color="black"
                        text={`${vacation?.annual} 일`}
                        size="14px"
                      />
                    </RowCont>
                    <RowCont gap="10px">
                      <SharedTxt
                        color="black"
                        text="기타연차"
                        size="17px"
                        bold={600}
                      />
                      <SharedTxt
                        color="black"
                        text={`${vacation?.other} 일`}
                        size="14px"
                      />
                    </RowCont>
                    <RowCont gap="10px">
                      <SharedTxt
                        color="black"
                        text="남은연차"
                        size="17px"
                        bold={600}
                      />
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
                      <SharedTxt
                        color="black"
                        text="총연차"
                        size="17px"
                        bold={600}
                      />
                      <SharedTxt
                        color="black"
                        text={`${vacation?.totalVacation} 일`}
                        size="14px"
                      />
                    </RowCont>
                  </WorkerInfoDesc>
                </WorkerInfoCont>
              ))}
              {item.salary?.map((salary) => (
                <WorkerInfoCont key={salary?.id}>
                  <WorkerTitleCont>
                    <Avatar width="10px" height="10px" color="#f9ae18" />
                    <SharedTxt text="연봉정보" size="25px" bold={700} />
                  </WorkerTitleCont>
                  <WorkerInfoDesc>
                    <RowCont gap="10px">
                      <SharedTxt text="연봉" size="17px" bold={600} />
                      <SharedTxt
                        text={`${salary?.annualSalary?.toLocaleString()} 원`}
                        size="14px"
                      />
                    </RowCont>
                    <RowCont gap="10px">
                      <SharedTxt text="세전월급여" size="17px" />
                      <SharedTxt
                        text={`${salary?.preTaxMonthlySalary?.toLocaleString()} 원`}
                        size="14px"
                      />
                    </RowCont>
                    <RowCont gap="10px">
                      <SharedTxt text="8세이상 20세이하 자녀 수" size="17px" />
                      <SharedTxt
                        text={`${salary?.childCount} 명`}
                        size="14px"
                      />
                    </RowCont>
                    <RowCont gap="10px">
                      <SharedTxt text="자녀세액공제" size="17px" />
                      <SharedTxt
                        text={`${salary?.childTax?.toLocaleString()} 원`}
                        size="14px"
                      />
                    </RowCont>
                    <RowCont gap="10px">
                      <SharedTxt text="근로소득금액" size="17px" />
                      <SharedTxt
                        text={`${salary?.earnIncomeAmount?.toLocaleString()} 원`}
                        size="14px"
                      />
                    </RowCont>
                    <RowCont gap="10px">
                      <SharedTxt text="근로소득공제금액" size="17px" />
                      <SharedTxt
                        text={`${salary?.earnIncomeDedution?.toLocaleString()} 원`}
                        size="14px"
                      />
                    </RowCont>
                    <RowCont gap="10px">
                      <SharedTxt text="가족수" size="17px" />
                      <SharedTxt
                        text={`${salary?.familyCount} 명`}
                        size="14px"
                      />
                    </RowCont>
                    <RowCont gap="10px">
                      <SharedTxt text="인적공제" size="17px" />
                      <SharedTxt
                        text={`${salary?.familyDedution?.toLocaleString()} 원`}
                        size="14px"
                      />
                    </RowCont>
                    <RowCont gap="10px">
                      <SharedTxt text="연금보험료공제" size="17px" />
                      <SharedTxt
                        text={`${salary?.pensionInsuranceDedution?.toLocaleString()} 원`}
                        size="14px"
                      />
                    </RowCont>
                    <RowCont gap="10px">
                      <SharedTxt text="간이세액" size="17px" />
                      <SharedTxt
                        text={`${salary?.simplifiedTax?.toLocaleString()} 원`}
                        size="14px"
                      />
                    </RowCont>
                    <RowCont gap="10px">
                      <SharedTxt text="특별소득공제" size="17px" />
                      <SharedTxt
                        text={`${salary?.specialIncomeDedution?.toLocaleString()} 원`}
                        size="14px"
                      />
                    </RowCont>
                    <RowCont gap="10px">
                      <SharedTxt text="과세표준" size="17px" />
                      <SharedTxt
                        text={`${salary?.taxBase?.toLocaleString()} 원`}
                        size="14px"
                      />
                    </RowCont>
                    <RowCont gap="10px">
                      <SharedTxt text="산출세액" size="17px" />
                      <SharedTxt
                        text={`${salary?.taxCalculate?.toLocaleString()} 원`}
                        size="14px"
                      />
                    </RowCont>
                    <RowCont gap="10px">
                      <SharedTxt text="결정세액" size="17px" />
                      <SharedTxt
                        text={`${salary?.taxDetermined?.toLocaleString()} 원`}
                        size="14px"
                      />
                    </RowCont>
                  </WorkerInfoDesc>
                </WorkerInfoCont>
              ))}
            </ScrollView>
          </View>
          <View style={{gap: 10}}>
            {item.salary && item.salary.length < 1 && (
              <SharedBtn text="연차생성" />
            )}
            <SharedBtn text="닫기" onSubmit={() => setWorkerModal(null)} />
          </View>
        </SafeAreaView>
      </SharedLayoutCont>
    </Modal>
  );
}
