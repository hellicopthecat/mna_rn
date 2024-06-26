import SharedBtn from "@/components/shared/SharedBtn";
import SharedInput from "@/components/shared/SharedInput";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import useCreateSalary from "@/hooks/afterLogin/worker/useCreateSalary";
import {useModalState} from "@/store/modalState";
import {ICreateSalary} from "@/types/types";
import {Controller, useForm} from "react-hook-form";
import {Modal, SafeAreaView, View} from "react-native";
import {CreateSalaryCont} from "./createSalary.style";

export default function CreateSalary({userId}: {userId: string}) {
  const {createSalaryModal, setCreateSalaryModal} = useModalState();
  const {control, handleSubmit, getValues} = useForm<ICreateSalary>({
    defaultValues: {
      preTaxMonthlySalary: 0,
      familyCount: 1,
      childCount: 0,
    },
  });
  const {handleCreateSalary} = useCreateSalary();
  const onSubmit = () => {
    const {preTaxMonthlySalary, familyCount, childCount} = getValues();
    handleCreateSalary({
      userId: Number(userId),
      preTaxMonthlySalary,
      familyCount,
      childCount,
    });
  };
  return (
    <Modal visible={createSalaryModal} animationType="slide">
      <SharedLayoutCont>
        <SafeAreaView style={{flex: 1, justifyContent: "space-between"}}>
          <CreateSalaryCont>
            <Controller
              name="preTaxMonthlySalary"
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="월 급여"
                />
              )}
            />
            <Controller
              name="familyCount"
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="부양가족"
                />
              )}
            />
            <Controller
              name="childCount"
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="8세이상 20세 이하의 자녀 수"
                />
              )}
            />
          </CreateSalaryCont>
          <View style={{gap: 10}}>
            <SharedBtn text="급여생성" onSubmit={handleSubmit(onSubmit)} />
            <SharedBtn text="닫기" onSubmit={() => setCreateSalaryModal()} />
          </View>
        </SafeAreaView>
      </SharedLayoutCont>
    </Modal>
  );
}
