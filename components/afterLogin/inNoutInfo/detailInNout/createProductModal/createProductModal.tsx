import RowCont from "@/components/shared/RowCont";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedInput from "@/components/shared/SharedInput";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import useCreateProductHook from "@/hooks/afterLogin/inNout/useCreateProductHook";
import {TPaymentSwitch} from "@/libs/__generated__/graphql";
import {useModalState} from "@/store/modalState";
import {ICreateProductProps} from "@/types/types";
import {Ionicons} from "@expo/vector-icons";
import {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {Modal, Pressable, SafeAreaView, View} from "react-native";
interface ICreateProductModal {
  inNoutId: string;
}

export default function CreateProductModal({inNoutId}: ICreateProductModal) {
  const [income, setIncome] = useState(true);
  const [payment, setPayment] = useState(TPaymentSwitch.Wait);
  const {createProductModal, setCreateProductModal} = useModalState();
  const {handleCreateProduct} = useCreateProductHook();
  const {control, handleSubmit, getValues} = useForm<ICreateProductProps>({
    defaultValues: {
      itemProductId: "",
      itemName: "",
      itemModelName: "",
      itemPhoto: "",
      itemType: "",
      itemPrice: 0,
      itemCount: 0,
      itemDesc: "",
      incomeTrue: true,
      paymentType: "",
      accountCode: "",
      businessDesc: "",
      paymentsDone: TPaymentSwitch.Wait,
    },
  });
  //fn
  const onSubmit = async () => {
    const {
      itemProductId,
      itemName,
      itemModelName,
      itemPhoto,
      itemType,
      itemPrice,
      itemCount,
      itemDesc,
      paymentType,
      accountCode,
      businessDesc,
    } = getValues();
    await handleCreateProduct({
      itemProductId,
      itemName,
      itemModelName,
      itemPhoto,
      itemType,
      itemPrice,
      itemCount,
      itemDesc,
      paymentType,
      accountCode,
      businessDesc,
      incomeTrue: income,
      paymentsDone: payment,
      inNoutId,
    });
  };

  return (
    <Modal visible={createProductModal} animationType="slide">
      <SharedLayoutCont>
        <SafeAreaView style={{gap: 20}}>
          <SharedTxt
            text="수입지출모델생성"
            align="center"
            size="20px"
            bold={700}
            style={{paddingVertical: 20}}
          />
          <View style={{gap: 10}}>
            <Controller
              name="itemProductId"
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value + ""}
                  placeholder="상품고유아이디"
                />
              )}
            />
            <Controller
              name="itemName"
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value + ""}
                  placeholder="상품명"
                />
              )}
            />
            <Controller
              name="itemModelName"
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value + ""}
                  placeholder="상품모델명"
                />
              )}
            />
            <Controller
              name="itemPhoto"
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value + ""}
                  placeholder="상품사진"
                />
              )}
            />
            <Controller
              name="itemType"
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value + ""}
                  placeholder="상품타입"
                />
              )}
            />
            <Controller
              name="itemPrice"
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="상품가격"
                />
              )}
            />
            <Controller
              name="itemCount"
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="상품수"
                />
              )}
            />
            <Controller
              name="paymentType"
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value + ""}
                  placeholder="결제타입"
                />
              )}
            />
            <Controller
              name="itemDesc"
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value + ""}
                  placeholder="상품설명"
                />
              )}
            />
            <Controller
              name="accountCode"
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value + ""}
                  placeholder="계정코드"
                />
              )}
            />
            <Controller
              name="businessDesc"
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value + ""}
                  placeholder="비고"
                />
              )}
            />
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
                <SharedTxt text={income ? "수입" : "지출"} />
              </Pressable>
            </RowCont>
            <RowCont gap="10px">
              <RowCont gap="10px">
                <Pressable onPress={() => setPayment(TPaymentSwitch.Wait)}>
                  <Ionicons
                    name={
                      TPaymentSwitch.Wait === payment
                        ? "checkmark-circle"
                        : "checkmark-circle-outline"
                    }
                    color={
                      TPaymentSwitch.Wait === payment
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
                      TPaymentSwitch.Paid === payment
                        ? "checkmark-circle"
                        : "checkmark-circle-outline"
                    }
                    color={
                      TPaymentSwitch.Paid === payment
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
                      TPaymentSwitch.Nonpaid === payment
                        ? "checkmark-circle"
                        : "checkmark-circle-outline"
                    }
                    color={
                      TPaymentSwitch.Nonpaid === payment
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
          <SharedBtn
            text="수입지출모델생성"
            onSubmit={handleSubmit(onSubmit)}
          />
          <SharedBtn text="닫기" onSubmit={() => setCreateProductModal()} />
        </SafeAreaView>
      </SharedLayoutCont>
    </Modal>
  );
}
