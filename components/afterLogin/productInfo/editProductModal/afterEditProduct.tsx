import RowCont from "@/components/shared/RowCont";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedInput from "@/components/shared/SharedInput";
import SharedTxt from "@/components/shared/SharedTxt";
import useDeleteProductHook from "@/hooks/afterLogin/product/useDeleteProductHook";
import useEditProductHook from "@/hooks/afterLogin/product/useEditProductHook";
import {
  MutationEditProductArgs,
  TPaymentSwitch,
} from "@/libs/__generated__/graphql";
import {useModalState} from "@/store/modalState";
import {IRouterParams} from "@/types/routerParamsType";
import {IProductProps} from "@/types/types";
import {FontAwesome} from "@expo/vector-icons";
import {useGlobalSearchParams} from "expo-router";
import {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {Pressable, ScrollView, View} from "react-native";

export default function AfterEditProduct({item}: IProductProps) {
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const {setEditMode, setEditProductModal} = useModalState();
  const [income, setIncome] = useState(item.incomeExpend?.incomeTrue);
  const [payment, setPayment] = useState(item.incomeExpend?.paymentsDone);
  const {control, getValues, handleSubmit} = useForm<MutationEditProductArgs>({
    defaultValues: {
      itemName: item.itemName,
      itemModelName: item.itemModelName,
      itemPhoto: item.itemPhoto,
      itemType: item.itemType,
      itemCount: item.itemCount,
      itemPrice: item.itemPrice,
      itemDesc: item.itemDesc,
      incomeTrue: item.incomeExpend?.incomeTrue,
      paymentType: item.incomeExpend?.paymentType,
      accountCode: item.incomeExpend?.accountCode,
      businessDesc: item.incomeExpend?.businessDesc,
      paymentsDone: item.incomeExpend?.paymentsDone,
    },
  });
  //fn
  const {handleEditProduct} = useEditProductHook();
  const onSubmit = () => {
    const {
      itemName,
      itemModelName,
      itemPhoto,
      itemType,
      itemCount,
      itemPrice,
      itemDesc,
      paymentType,
      accountCode,
      businessDesc,
    } = getValues();
    handleEditProduct({
      id: Number(item.id),
      itemProductId: item.itemProductId,
      itemName,
      itemModelName,
      itemPhoto,
      itemType,
      itemCount,
      itemPrice,
      itemDesc,
      incomeTrue: income,
      paymentType,
      accountCode,
      businessDesc,
      paymentsDone: payment,
    });
  };

  const {handleDeleteProduct} = useDeleteProductHook();
  const removeSubmit = () => {
    handleDeleteProduct({
      companyId: Number(companyId),
      productId: Number(item.id),
      iNeId: Number(item.incomeExpendId),
    });
  };
  return (
    <>
      <ScrollView style={{marginBottom: 30, paddingBottom: 20}}>
        <View style={{gap: 20}}>
          <RowCont content="space-between">
            <SharedTxt text="상품고유아이디" size="17px" />
            <SharedTxt text={item.itemProductId} size="20px" />
          </RowCont>
          <RowCont content="space-around">
            <Pressable onPress={() => setIncome(true)}>
              <RowCont gap="15px">
                <FontAwesome
                  name={income ? "check-circle" : "check-circle-o"}
                  color={income ? "cornflowerblue" : "gray"}
                  size={25}
                />
                <SharedTxt text="수입" size="20px" />
              </RowCont>
            </Pressable>
            <Pressable onPress={() => setIncome(false)}>
              <RowCont gap="15px">
                <FontAwesome
                  name={!income ? "check-circle" : "check-circle-o"}
                  color={!income ? "cornflowerblue" : "gray"}
                  size={25}
                />
                <SharedTxt text="지출" size="20px" />
              </RowCont>
            </Pressable>
          </RowCont>
          <RowCont content="space-around">
            <Pressable onPress={() => setPayment(TPaymentSwitch.Wait)}>
              <RowCont gap="15px">
                <FontAwesome
                  name={
                    payment === TPaymentSwitch.Wait
                      ? "check-circle"
                      : "check-circle-o"
                  }
                  color={
                    payment === TPaymentSwitch.Wait ? "cornflowerblue" : "gray"
                  }
                  size={25}
                />
                <SharedTxt text="대기" size="20px" />
              </RowCont>
            </Pressable>
            <Pressable onPress={() => setPayment(TPaymentSwitch.Paid)}>
              <RowCont gap="15px">
                <FontAwesome
                  name={
                    payment === TPaymentSwitch.Paid
                      ? "check-circle"
                      : "check-circle-o"
                  }
                  color={
                    payment === TPaymentSwitch.Paid ? "cornflowerblue" : "gray"
                  }
                  size={25}
                />
                <SharedTxt text="지불" size="20px" />
              </RowCont>
            </Pressable>
            <Pressable onPress={() => setPayment(TPaymentSwitch.Nonpaid)}>
              <RowCont gap="15px">
                <FontAwesome
                  name={
                    payment === TPaymentSwitch.Nonpaid
                      ? "check-circle"
                      : "check-circle-o"
                  }
                  color={
                    payment === TPaymentSwitch.Nonpaid
                      ? "cornflowerblue"
                      : "gray"
                  }
                  size={25}
                />
                <SharedTxt text="비지불" size="20px" />
              </RowCont>
            </Pressable>
          </RowCont>
          <Controller
            name="itemName"
            control={control}
            render={({field: {onBlur, onChange, value}}) => (
              <View style={{gap: 10}}>
                <SharedTxt text="상품명" />
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="상품명"
                />
              </View>
            )}
          />
          <Controller
            name="itemModelName"
            control={control}
            render={({field: {onBlur, onChange, value}}) => (
              <View style={{gap: 10}}>
                <SharedTxt text="상품모델명" />
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="상품모델명"
                />
              </View>
            )}
          />
          <Controller
            name="itemPhoto"
            control={control}
            render={({field: {onBlur, onChange, value}}) => (
              <View style={{gap: 10}}>
                <SharedTxt text="상품사진" />
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="상품사진"
                />
              </View>
            )}
          />
          <Controller
            name="itemType"
            control={control}
            render={({field: {onBlur, onChange, value}}) => (
              <View style={{gap: 10}}>
                <SharedTxt text="상품타입" />
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="상품타입"
                />
              </View>
            )}
          />
          <Controller
            name="itemCount"
            control={control}
            render={({field: {onBlur, onChange, value}}) => (
              <View style={{gap: 10}}>
                <SharedTxt text="상품수" />
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value + ""}
                  placeholder="상품수"
                />
              </View>
            )}
          />
          <Controller
            name="itemPrice"
            control={control}
            render={({field: {onBlur, onChange, value}}) => (
              <View style={{gap: 10}}>
                <SharedTxt text="상품가격" />
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value + ""}
                  placeholder="상품가격"
                />
              </View>
            )}
          />
          <Controller
            name="itemDesc"
            control={control}
            render={({field: {onBlur, onChange, value}}) => (
              <View style={{gap: 10}}>
                <SharedTxt text="상품설명" />
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="상품설명"
                />
              </View>
            )}
          />
          <Controller
            name="paymentType"
            control={control}
            render={({field: {onBlur, onChange, value}}) => (
              <View style={{gap: 10}}>
                <SharedTxt text="결제유형" />
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="결제유형"
                />
              </View>
            )}
          />
          <Controller
            name="accountCode"
            control={control}
            render={({field: {onBlur, onChange, value}}) => (
              <View style={{gap: 10}}>
                <SharedTxt text="계정과목" />
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="계정과목"
                />
              </View>
            )}
          />
          <Controller
            name="businessDesc"
            control={control}
            render={({field: {onBlur, onChange, value}}) => (
              <View style={{gap: 10}}>
                <SharedTxt text="거래설명" />
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="거래설명"
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
      <View style={{gap: 10}}>
        <SharedBtn text="수정완료" onSubmit={handleSubmit(onSubmit)} />
        <SharedBtn text="삭제" onSubmit={handleSubmit(removeSubmit)} />
        <SharedBtn text="취소" onSubmit={() => setEditMode(false)} />
      </View>
    </>
  );
}
