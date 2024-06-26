import SharedBtn from "@/components/shared/SharedBtn";
import SharedInput from "@/components/shared/SharedInput";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import useEditVacationHook from "@/hooks/afterLogin/worker/useEditVacation";
import {useModalState} from "@/store/modalState";
import {IEditVacation} from "@/types/types";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {Modal, SafeAreaView, View} from "react-native";
interface IVacationModal {
  joinDate: number;
  vacationId: number;
  other: number;
}
export default function VacationModal({
  joinDate,
  vacationId,
  other,
}: IVacationModal) {
  const [dated, setDate] = useState(joinDate);
  const {vacationModal, setVacationModal} = useModalState();
  const newEditDate = (event: DateTimePickerEvent) => {
    const {
      nativeEvent: {timestamp},
    } = event;
    setDate(timestamp);
  };
  const {control, handleSubmit, getValues} = useForm<IEditVacation>({
    defaultValues: {other},
  });
  const {handleEditVacation} = useEditVacationHook();
  const onSubmit = () => {
    const {other} = getValues();
    handleEditVacation({
      vacationId,
      other,
      joinCompanyDate: dated + "",
    });
  };

  return (
    <Modal visible={vacationModal} animationType="slide">
      <SharedLayoutCont>
        <SafeAreaView style={{flex: 1, justifyContent: "space-between"}}>
          <SharedTxt text="연차수정" align="center" size="20px" bold={700} />
          <View style={{gap: 10}}>
            <SharedTxt text="입사연도" size="18px" bold={600} />
            <RNDateTimePicker
              display="spinner"
              value={new Date(dated)}
              onChange={(event) => newEditDate(event)}
            />
            <SharedTxt text="기타연차" size="18px" bold={600} />
            <Controller
              control={control}
              name="other"
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={other + ""}
                  placeholder="기타연차"
                  onSubmit={handleSubmit(onSubmit)}
                />
              )}
            />
          </View>
          <View style={{gap: 10}}>
            <SharedBtn text="월급수정" onSubmit={handleSubmit(onSubmit)} />
            <SharedBtn text="닫기" onSubmit={() => setVacationModal()} />
          </View>
        </SafeAreaView>
      </SharedLayoutCont>
    </Modal>
  );
}
