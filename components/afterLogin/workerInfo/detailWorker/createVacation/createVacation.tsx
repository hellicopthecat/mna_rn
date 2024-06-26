import SharedBtn from "@/components/shared/SharedBtn";
import SharedInput from "@/components/shared/SharedInput";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import useCreateVacation from "@/hooks/afterLogin/worker/useCreateVacation";
import {useModalState} from "@/store/modalState";
import {ICreateVacation} from "@/types/types";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {Modal, SafeAreaView, View} from "react-native";

export default function CreateVacation({userId}: {userId: string}) {
  const [dated, setDate] = useState("");
  const {createVacationModal, setCreateVacationModal} = useModalState();
  const {handelCreateVacation} = useCreateVacation();
  const {control, getValues, handleSubmit} = useForm<ICreateVacation>({
    defaultValues: {other: 0},
  });
  //fn
  const newEditDate = (event: DateTimePickerEvent) => {
    const {
      nativeEvent: {timestamp},
    } = event;
    setDate(timestamp.toString());
  };
  const onSubmit = () => {
    const {other} = getValues();
    handelCreateVacation({
      userId: Number(userId),
      other: Number(other),
      joinCompanyDate: dated,
    });
  };

  return (
    <Modal visible={createVacationModal} animationType="slide">
      <SharedLayoutCont>
        <SafeAreaView style={{flex: 1, justifyContent: "space-between"}}>
          <View style={{flex: 1, gap: 10, justifyContent: "center"}}>
            <RNDateTimePicker
              display="spinner"
              value={new Date()}
              onChange={(event) => newEditDate(event)}
            />
            <Controller
              name="other"
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="기타연차"
                />
              )}
            />
          </View>
          <View style={{gap: 10}}>
            <SharedBtn text="연차생성" onSubmit={handleSubmit(onSubmit)} />
            <SharedBtn text="닫기" onSubmit={() => setCreateVacationModal()} />
          </View>
        </SafeAreaView>
      </SharedLayoutCont>
    </Modal>
  );
}
