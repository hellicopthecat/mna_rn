import RowCont from "@/components/shared/RowCont";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedInput from "@/components/shared/SharedInput";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import useCreateInExHook from "@/hooks/afterLogin/inNout/useCreateInExHook";
import {TPaymentSwitch} from "@/libs/__generated__/graphql";
import {useModalState} from "@/store/modalState";
import {ICreateInExProps} from "@/types/types";
import {Ionicons} from "@expo/vector-icons";
import {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {Modal, Pressable, SafeAreaView, View} from "react-native";
interface ICreateInExModalProps {
  modal: boolean;
  inNoutId: number;
}
export default function CreateInExModal({
  modal,
  inNoutId,
}: ICreateInExModalProps) {
  const {setINEModal} = useModalState();
  const [assetState, setAsset] = useState(true);
  const [currentState, setCurrent] = useState(true);
  const [income, setIncome] = useState(true);
  const [payment, setPayment] = useState(TPaymentSwitch.Paid);
  const {control, handleSubmit, getValues} = useForm<ICreateInExProps>({
    defaultValues: {
      inNoutId,
      incomeTrue: income,
      infoSubtitle: "",
      money: 0,
      businessDate: "",
      paymentType: "",
      accountCode: "",
      businessDesc: "",
      paymentsDone: payment,
      enLName: "",
      enLType: "",
      enLDesc: "",
      current: currentState,
      assests: assetState,
    },
  });
  //fn
  const {handleCreateInEx} = useCreateInExHook();
  const createInEx = () => {
    const {
      inNoutId,
      infoSubtitle,
      money,
      businessDate,
      paymentType,
      accountCode,
      businessDesc,
      enLName,
      enLType,
      enLDesc,
    } = getValues();
    handleCreateInEx({
      inNoutId,
      incomeTrue: income,
      infoSubtitle,
      money,
      businessDate,
      paymentType,
      accountCode,
      businessDesc,
      paymentsDone: payment,
      enLName,
      enLType,
      enLDesc,
      current: currentState,
      assests: assetState,
    });
  };
  return (
    <Modal visible={modal} animationType="slide">
      <SharedLayoutCont>
        <SafeAreaView style={{flex: 1, justifyContent: "space-between"}}>
          <SharedTxt
            text="수입지출모델생성"
            align="center"
            size="20px"
            bold={700}
            style={{paddingVertical: 20}}
          />
          <View style={{gap: 5}}>
            <RowCont gap="10px">
              <RowCont gap="10px">
                <Pressable onPress={() => setAsset((prev) => !prev)}>
                  <Ionicons
                    name={
                      assetState
                        ? "checkmark-circle"
                        : "checkmark-circle-outline"
                    }
                    color={assetState ? "cornflowerblue" : "gray"}
                    size={25}
                  />
                </Pressable>
                <Pressable onPress={() => setAsset((prev) => !prev)}>
                  <SharedTxt text="자산" />
                </Pressable>
              </RowCont>
              <RowCont gap="10px">
                <Pressable onPress={() => setAsset((prev) => !prev)}>
                  <Ionicons
                    name={
                      !assetState
                        ? "checkmark-circle"
                        : "checkmark-circle-outline"
                    }
                    color={!assetState ? "cornflowerblue" : "gray"}
                    size={25}
                  />
                </Pressable>
                <Pressable onPress={() => setAsset((prev) => !prev)}>
                  <SharedTxt text="부채" />
                </Pressable>
              </RowCont>
            </RowCont>

            <RowCont gap="10px">
              <RowCont gap="10px">
                <Pressable onPress={() => setCurrent((prev) => !prev)}>
                  <Ionicons
                    name={
                      currentState
                        ? "checkmark-circle"
                        : "checkmark-circle-outline"
                    }
                    color={currentState ? "cornflowerblue" : "gray"}
                    size={25}
                  />
                </Pressable>
                <Pressable onPress={() => setCurrent((prev) => !prev)}>
                  <SharedTxt text="유동" />
                </Pressable>
              </RowCont>
              <RowCont gap="10px">
                <Pressable onPress={() => setCurrent((prev) => !prev)}>
                  <Ionicons
                    name={
                      !currentState
                        ? "checkmark-circle"
                        : "checkmark-circle-outline"
                    }
                    color={!currentState ? "cornflowerblue" : "gray"}
                    size={25}
                  />
                </Pressable>
                <Pressable onPress={() => setCurrent((prev) => !prev)}>
                  <SharedTxt text="부동" />
                </Pressable>
              </RowCont>
            </RowCont>

            <RowCont gap="10px">
              <RowCont gap="10px">
                <Pressable onPress={() => setIncome((prev) => !prev)}>
                  <Ionicons
                    name={
                      income ? "checkmark-circle" : "checkmark-circle-outline"
                    }
                    color={income ? "cornflowerblue" : "gray"}
                    size={25}
                  />
                </Pressable>
                <Pressable onPress={() => setIncome((prev) => !prev)}>
                  <SharedTxt text="수입" />
                </Pressable>
              </RowCont>
              <RowCont gap="10px">
                <Pressable onPress={() => setIncome((prev) => !prev)}>
                  <Ionicons
                    name={
                      !income ? "checkmark-circle" : "checkmark-circle-outline"
                    }
                    color={!income ? "cornflowerblue" : "gray"}
                    size={25}
                  />
                </Pressable>
                <Pressable onPress={() => setIncome((prev) => !prev)}>
                  <SharedTxt text="지출" />
                </Pressable>
              </RowCont>
            </RowCont>

            <RowCont gap="10px">
              <RowCont gap="10px">
                <Pressable onPress={() => setPayment(TPaymentSwitch.Wait)}>
                  <Ionicons
                    name={
                      payment === TPaymentSwitch.Wait
                        ? "checkmark-circle"
                        : "checkmark-circle-outline"
                    }
                    color={
                      payment === TPaymentSwitch.Wait
                        ? "cornflowerblue"
                        : "gray"
                    }
                    size={25}
                  />
                </Pressable>
                <Pressable onPress={() => setPayment(TPaymentSwitch.Wait)}>
                  <SharedTxt text="대기" />
                </Pressable>
              </RowCont>
              <RowCont gap="10px">
                <Pressable onPress={() => setPayment(TPaymentSwitch.Paid)}>
                  <Ionicons
                    name={
                      payment === TPaymentSwitch.Paid
                        ? "checkmark-circle"
                        : "checkmark-circle-outline"
                    }
                    color={
                      payment === TPaymentSwitch.Paid
                        ? "cornflowerblue"
                        : "gray"
                    }
                    size={25}
                  />
                </Pressable>
                <Pressable onPress={() => setPayment(TPaymentSwitch.Paid)}>
                  <SharedTxt text="지불" />
                </Pressable>
              </RowCont>
              <RowCont gap="10px">
                <Pressable onPress={() => setPayment(TPaymentSwitch.Nonpaid)}>
                  <Ionicons
                    name={
                      payment === TPaymentSwitch.Nonpaid
                        ? "checkmark-circle"
                        : "checkmark-circle-outline"
                    }
                    color={
                      payment === TPaymentSwitch.Nonpaid
                        ? "cornflowerblue"
                        : "gray"
                    }
                    size={25}
                  />
                </Pressable>
                <Pressable onPress={() => setPayment(TPaymentSwitch.Nonpaid)}>
                  <SharedTxt text="비지불" />
                </Pressable>
              </RowCont>
            </RowCont>
          </View>

          <View style={{gap: 20}}>
            <Controller
              control={control}
              name="enLName"
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="자산이름"
                />
              )}
            />
            <Controller
              control={control}
              name="infoSubtitle"
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="수입지출제목"
                />
              )}
            />
            <Controller
              control={control}
              name="money"
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="금액"
                />
              )}
            />
            <Controller
              control={control}
              name="businessDate"
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="거래일"
                />
              )}
            />
            <Controller
              control={control}
              name="paymentType"
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="지출타입"
                />
              )}
            />
            <Controller
              control={control}
              name="accountCode"
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="계정과목"
                />
              )}
            />
            <Controller
              control={control}
              name="businessDesc"
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="거래설명"
                />
              )}
            />

            <Controller
              control={control}
              name="enLType"
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="자산타입"
                />
              )}
            />
            <Controller
              control={control}
              name="enLDesc"
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="자산설명"
                />
              )}
            />
          </View>
          <View style={{gap: 10}}>
            <SharedBtn text="생성" onSubmit={handleSubmit(createInEx)} />
            <SharedBtn text="닫기" onSubmit={() => setINEModal()} />
          </View>
        </SafeAreaView>
      </SharedLayoutCont>
    </Modal>
  );
}
