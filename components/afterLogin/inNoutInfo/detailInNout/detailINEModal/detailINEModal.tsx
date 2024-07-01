import RowCont from "@/components/shared/RowCont";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import {dark, light} from "@/constants/Colors";
import useDeleteInExHook from "@/hooks/afterLogin/inNout/useDeleteInExHook";
import {IncomeExpend, TPaymentSwitch} from "@/libs/__generated__/graphql";
import {useModalState} from "@/store/modalState";
import {Modal, SafeAreaView, View} from "react-native";
interface IDetailINEModal {
  iNe: IncomeExpend;
}
export default function DetailINEModal({iNe}: IDetailINEModal) {
  const {detailIneModal, setDetailINEModal} = useModalState();
  const {handleDeleteInEx} = useDeleteInExHook();
  const onSubmit = () => {
    handleDeleteInEx({
      iNeId: iNe.id,
      income: iNe.incomeTrue,
      paymentDone: iNe.paymentsDone,
      cost: Number(iNe.money),
      inNoutId: Number(iNe.inNoutId),
    });
  };

  return (
    <Modal visible={detailIneModal === iNe.id} animationType="slide">
      <SharedLayoutCont>
        <SafeAreaView style={{flex: 1}}>
          <View style={{flex: 1, gap: 20}}>
            <View style={{gap: 5}}>
              <RowCont content="space-between">
                <SharedTxt text={iNe.infoSubtitle} size="40px" bold={700} />
                <View
                  style={{
                    backgroundColor: iNe.incomeTrue
                      ? dark.secondary
                      : light.primary,
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  <SharedTxt text={iNe.incomeTrue ? "수입" : "지출"} />
                </View>
              </RowCont>
              <View>
                <RowCont gap="10px" content="flex-end">
                  <RowCont gap="5px">
                    <SharedTxt text="생성일" size="13px" color="gray" />
                    <SharedTxt text={iNe.createdAt} size="13px" color="gray" />
                  </RowCont>
                  <RowCont gap="5px">
                    <SharedTxt text="수정일" size="13px" color="gray" />
                    <SharedTxt text={iNe.updateAt} size="13px" color="gray" />
                  </RowCont>
                </RowCont>
              </View>
            </View>
            <View style={{gap: 30}}>
              <RowCont content="space-between">
                <SharedTxt text="자산가치" />
                <SharedTxt
                  text={`${iNe.money.toLocaleString()} 원` || "미작성"}
                />
              </RowCont>
              <RowCont content="space-between">
                <SharedTxt text="거래일" />
                <SharedTxt text={iNe.businessDate || "미작성"} />
              </RowCont>
              <RowCont content="space-between">
                <SharedTxt text="결제방법" />
                <SharedTxt text={iNe.paymentType || "미작성"} />
              </RowCont>
              <RowCont content="space-between">
                <SharedTxt text="비고" />
                <SharedTxt text={iNe.businessDesc || "미작성"} />
              </RowCont>
              <RowCont content="space-between">
                <SharedTxt text="계정과목" />
                <SharedTxt text={iNe.accountCode || "미작성"} />
              </RowCont>
              <RowCont content="space-between">
                <SharedTxt text="결제진행" />
                <SharedTxt
                  text={
                    iNe.paymentsDone === TPaymentSwitch.Paid
                      ? "지불"
                      : iNe.paymentsDone === TPaymentSwitch.Nonpaid
                      ? "비지불"
                      : "대기중"
                  }
                />
              </RowCont>
            </View>
          </View>

          <View style={{gap: 10}}>
            <SharedBtn text="삭제" onSubmit={onSubmit} />
            <SharedBtn text="닫기" onSubmit={() => setDetailINEModal(null)} />
          </View>
        </SafeAreaView>
      </SharedLayoutCont>
    </Modal>
  );
}
