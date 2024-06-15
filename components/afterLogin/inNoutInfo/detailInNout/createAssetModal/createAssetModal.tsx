import RowCont from "@/components/shared/RowCont";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedInput from "@/components/shared/SharedInput";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import useCreateAssetHook from "@/hooks/afterLogin/inNout/useCreateAssetHook";
import {ICreateAssetProps} from "@/types/types";
import {FontAwesome} from "@expo/vector-icons";
import {Dispatch, SetStateAction, useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {Modal, Pressable, SafeAreaView, View} from "react-native";
import styled from "styled-components/native";
interface ICreateAssetModalProp {
  visible: boolean;
  inNoutId: string;
  close: Dispatch<SetStateAction<boolean>>;
}
const CreateAssetBtn = styled.View`
  gap: 10px;
`;
export default function CreateAssetModal({
  visible,
  close,
  inNoutId,
}: ICreateAssetModalProp) {
  const [current, setCurrent] = useState(true);
  const [asset, setAsset] = useState(true);
  const {handleCreateAsset} = useCreateAssetHook();
  const {control, handleSubmit, getValues} = useForm<ICreateAssetProps>({
    defaultValues: {
      enLId: "",
      enLName: "",
      enLType: "",
      current,
      assests: asset,
      value: 0,
      enLDesc: "",
    },
  });
  const onSubmit = async () => {
    const {enLId, enLName, enLType, value, enLDesc} = getValues();
    await handleCreateAsset({
      inNoutId,
      enLId,
      enLName,
      enLType,
      current,
      assests: asset,
      value,
      enLDesc,
    });
    close((prev) => !prev);
  };
  return (
    <Modal animationType="slide" visible={visible}>
      <SharedLayoutCont>
        <SafeAreaView>
          <View style={{gap: 50}}>
            <SharedTxt
              text="자산생성"
              size="20px"
              bold={700}
              align="center"
              style={{paddingVertical: 20}}
            />
            <RowCont content="space-around">
              <Pressable
                style={{flexDirection: "row", alignItems: "center", gap: 10}}
                onPress={() => setCurrent((prev) => !prev)}
              >
                <FontAwesome
                  name={current ? "check-circle" : "check-circle-o"}
                  size={25}
                  color={current ? "cornflowerblue" : "gray"}
                />
                <SharedTxt text={current ? "유동" : "부동"} size="20px" />
              </Pressable>

              <Pressable
                style={{flexDirection: "row", alignItems: "center", gap: 10}}
                onPress={() => setAsset((prev) => !prev)}
              >
                <FontAwesome
                  name={asset ? "check-circle" : "check-circle-o"}
                  size={25}
                  color={asset ? "cornflowerblue" : "gray"}
                />
                <SharedTxt text={asset ? "자산" : "부채"} size="20px" />
              </Pressable>
            </RowCont>
            <View style={{gap: 30}}>
              <Controller
                control={control}
                name="enLId"
                render={({field: {onBlur, onChange, value}}) => (
                  <SharedInput
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="자산ID"
                  />
                )}
              />
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
                name="value"
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
            <CreateAssetBtn>
              <SharedBtn text="자산생성" onSubmit={handleSubmit(onSubmit)} />
              <SharedBtn text="취소" onSubmit={() => close((prev) => !prev)} />
            </CreateAssetBtn>
          </View>
        </SafeAreaView>
      </SharedLayoutCont>
    </Modal>
  );
}
