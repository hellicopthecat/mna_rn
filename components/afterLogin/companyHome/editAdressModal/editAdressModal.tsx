import SharedBtn from "@/components/shared/SharedBtn";
import SharedInput from "@/components/shared/SharedInput";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import useEditCompanyAdressHook from "@/hooks/afterLogin/companyAdress/useEditCompanyAdressHook";
import {CompanyAdress} from "@/libs/__generated__/graphql";
import {useModalState} from "@/store/modalState";
import {IEditCompanyAdress} from "@/types/types";
import {Controller, useForm} from "react-hook-form";
import {Modal, SafeAreaView, View} from "react-native";
interface IAdressProp {
  companyAdress: CompanyAdress;
}
export default function EditAdressModal({companyAdress}: IAdressProp) {
  const {editAdressModal, setEditAdressModal} = useModalState();
  const {control, getValues, handleSubmit} = useForm<IEditCompanyAdress>({
    defaultValues: {
      country: companyAdress.country + "",
      city: companyAdress.city + "",
      adressNum: companyAdress.adressNum + "",
      streetAdress: companyAdress.streetAdress + "",
      restAdress: companyAdress.restAdress + "",
    },
  });
  const {handleEditAdress} = useEditCompanyAdressHook();
  //fn
  const onSubmit = async () => {
    const {id, country, city, adressNum, streetAdress, restAdress} =
      getValues();
    handleEditAdress({
      id: Number(companyAdress.id),
      country,
      city,
      adressNum,
      streetAdress,
      restAdress,
    });
  };
  return (
    <Modal visible={editAdressModal} animationType="slide">
      <SharedLayoutCont>
        <SafeAreaView style={{flex: 1, justifyContent: "space-between"}}>
          <View style={{flex: 1, justifyContent: "center", gap: 20}}>
            <Controller
              control={control}
              name="country"
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="국가"
                />
              )}
            />
            <Controller
              control={control}
              name="city"
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="도시"
                />
              )}
            />
            <Controller
              control={control}
              name="adressNum"
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="우편번호"
                />
              )}
            />
            <Controller
              control={control}
              name="streetAdress"
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="도로명주소"
                />
              )}
            />
            <Controller
              control={control}
              name="restAdress"
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="나머지주소"
                />
              )}
            />
          </View>
          <View style={{gap: 10}}>
            <SharedBtn text="저장" onSubmit={handleSubmit(onSubmit)} />
            <SharedBtn text="닫기" onSubmit={() => setEditAdressModal()} />
          </View>
        </SafeAreaView>
      </SharedLayoutCont>
    </Modal>
  );
}
