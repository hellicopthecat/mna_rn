import SharedBtn from "@/components/shared/SharedBtn";
import SharedInput from "@/components/shared/SharedInput";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import useEditSalary from "@/hooks/afterLogin/worker/useEditSalary";
import {useModalState} from "@/store/modalState";
import {IEditSalary} from "@/types/types";
import {Controller, useForm} from "react-hook-form";
import {Modal, SafeAreaView, View} from "react-native";
interface IEditSalaryProps {
  salaryId: number;
  userId: number;
  preTaxMonthlySalary: number;
  familyCount: number;
  childCount: number;
}
export default function SalaryModal({
  salaryId,
  userId,
  preTaxMonthlySalary,
  familyCount,
  childCount,
}: IEditSalaryProps) {
  const {salaryModal, setSalaryModal} = useModalState();
  const {control, getValues, handleSubmit} = useForm<IEditSalary>({
    defaultValues: {
      preTaxMonthlySalary,
      familyCount,
      childCount,
    },
  });
  const {handleEditSalary} = useEditSalary();
  //fn
  const onSubmit = () => {
    const {preTaxMonthlySalary, familyCount, childCount} = getValues();
    handleEditSalary({
      salaryId,
      userId,
      preTaxMonthlySalary: Number(preTaxMonthlySalary),
      familyCount: Number(familyCount),
      childCount: Number(childCount),
    });
  };
  return (
    <Modal visible={salaryModal} animationType="slide">
      <SharedLayoutCont>
        <SafeAreaView style={{flex: 1, justifyContent: "space-between"}}>
          <View style={{flex: 1, justifyContent: "center", gap: 15}}>
            <Controller
              name="preTaxMonthlySalary"
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <View style={{gap: 5}}>
                  <SharedTxt text="월 급여" size="13px" />
                  <SharedInput
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value + ""}
                    placeholder=""
                  />
                </View>
              )}
            />
            <Controller
              name="familyCount"
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <View style={{gap: 5}}>
                  <SharedTxt text="부양가족수" size="13px" />
                  <SharedInput
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value + ""}
                    placeholder=""
                  />
                </View>
              )}
            />
            <Controller
              name="childCount"
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <View style={{gap: 5}}>
                  <SharedTxt text="8세이상 20세미만 자녀수" size="13px" />
                  <SharedInput
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value + ""}
                    placeholder=""
                  />
                </View>
              )}
            />
          </View>
          <View style={{gap: 10}}>
            <SharedBtn text="급여수정" onSubmit={handleSubmit(onSubmit)} />
            <SharedBtn text="닫기" onSubmit={() => setSalaryModal()} />
          </View>
        </SafeAreaView>
      </SharedLayoutCont>
    </Modal>
  );
}
