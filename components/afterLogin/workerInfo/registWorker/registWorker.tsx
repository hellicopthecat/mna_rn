import SharedBtn from "@/components/shared/SharedBtn";
import SharedInput from "@/components/shared/SharedInput";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import useRegistWorker from "@/hooks/afterLogin/worker/useRegistWorker";
import {useModalState} from "@/store/modalState";
import {IRegistWorker} from "@/types/types";
import {Controller, useForm} from "react-hook-form";
import {Modal, SafeAreaView, View} from "react-native";
interface IRegistWorkModalProp {
  visible: boolean;
}
export default function RegistWorker({visible}: IRegistWorkModalProp) {
  const {setRegistWorker} = useModalState();
  const {control, handleSubmit, getValues} = useForm<IRegistWorker>();
  const {handleRegistWorker} = useRegistWorker();
  const onSubmit = () => {
    const {username, childCount, familyCount, preTaxMonthlySalary} =
      getValues();
    handleRegistWorker({
      username,
      childCount: Number(childCount),
      familyCount: Number(familyCount),
      preTaxMonthlySalary: Number(preTaxMonthlySalary),
    });
  };
  return (
    <Modal visible={visible} animationType="slide">
      <SharedLayoutCont>
        <SafeAreaView style={{justifyContent: "center", flex: 1}}>
          <View style={{paddingBottom: 50, gap: 25}}>
            <Controller
              name="username"
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <View style={{gap: 5}}>
                  <SharedTxt
                    text="사원등록"
                    style={{paddingBottom: 5}}
                    color="gray"
                  />
                  <SharedInput
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="등록하실 사원의 ID를 입력하세요."
                  />
                </View>
              )}
            />
            <Controller
              name="familyCount"
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <View style={{gap: 5}}>
                  <SharedTxt
                    text="부양가족수"
                    style={{paddingBottom: 5}}
                    color="gray"
                  />
                  <SharedInput
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="부양가족수"
                  />
                </View>
              )}
            />
            <Controller
              name="childCount"
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <View style={{gap: 5}}>
                  <SharedTxt
                    text="8세~20세 이하 자녀"
                    style={{paddingBottom: 5}}
                    color="gray"
                  />
                  <SharedInput
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="8세~20세 이하 자녀"
                  />
                </View>
              )}
            />
            <Controller
              name="preTaxMonthlySalary"
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <View style={{gap: 5}}>
                  <SharedTxt
                    text="월급여"
                    style={{paddingBottom: 5}}
                    color="gray"
                  />
                  <SharedInput
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="월급여"
                    onSubmit={handleSubmit(onSubmit)}
                  />
                </View>
              )}
            />
          </View>
          <View style={{gap: 10}}>
            <SharedBtn text="열기" onSubmit={handleSubmit(onSubmit)} />
            <SharedBtn text="닫기" onSubmit={() => setRegistWorker()} />
          </View>
        </SafeAreaView>
      </SharedLayoutCont>
    </Modal>
  );
}
