import RowCont from "@/components/shared/RowCont";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedInput from "@/components/shared/SharedInput";
import SharedTxt from "@/components/shared/SharedTxt";
import {dark, light} from "@/constants/Colors";
import useDeleteAssetHook from "@/hooks/afterLogin/inNout/useDeleteAssetHook";
import useEditAssetHook from "@/hooks/afterLogin/inNout/useEditAssetHook";
import {EquityLiabilities} from "@/libs/__generated__/graphql";
import {useModalState} from "@/store/modalState";
import {IRouterParams} from "@/types/routerParamsType";
import {IEditAssetProps} from "@/types/types";
import {FontAwesome} from "@expo/vector-icons";
import {useGlobalSearchParams} from "expo-router";
import {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {
  Modal,
  Pressable,
  SafeAreaView,
  View,
  useColorScheme,
} from "react-native";

export default function AssetCardModal({item}: {item: EquityLiabilities}) {
  const theme = useColorScheme() === "dark";
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  //state
  const {editAssets, setEditAssetsModal} = useModalState();
  const [editMode, setEditMode] = useState(false);
  const [current, setCurrent] = useState(item.current);
  const [asset, setAsset] = useState(item.assests);
  //form
  const {control, handleSubmit, getValues} = useForm<IEditAssetProps>({
    defaultValues: {
      enLId: item.enLId,
      enLName: item.enLName,
      enLType: item.enLType,
      enLDesc: item.enLDesc ? item.enLDesc : undefined,
      value: item.value,
    },
  });
  //hooks
  const {handleEditEnl} = useEditAssetHook();
  const {handleDeleteEnl} = useDeleteAssetHook();
  //fn
  const editSubmit = () => {
    const {enLId, enLName, enLType, enLDesc, value} = getValues();
    handleEditEnl({
      editEnLId: Number(companyId),
      enLId,
      enLName,
      enLType,
      enLDesc,
      value,
      current,
      assests: asset,
    });
  };
  const deletSubmit = () => {
    handleDeleteEnl({
      id: item.id.toString(),
      enLId: item.enLId,
      inNoutId: item.inNoutId + "",
      itemValue: item.value.toString(),
    });
  };

  return (
    <Modal animationType="slide" visible={Boolean(editAssets)}>
      <SafeAreaView
        style={{
          flex: 1,
          gap: 10,
          backgroundColor: theme ? dark.bgColor : light.bgColor,
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <SharedTxt text={item.enLId} size="25px" bold={700} />

        <View
          style={{
            gap: 5,
            width: "100%",
            alignItems: "flex-end",
            paddingHorizontal: 10,
          }}
        >
          <RowCont gap="10px">
            <SharedTxt text="생성일" size="13px" color="gray" />
            <SharedTxt
              text={new Date(Number(item.createdAt)).toLocaleString()}
              size="13px"
              color="gray"
            />
          </RowCont>
          <RowCont gap="10px">
            <SharedTxt text="수정일" size="13px" color="gray" />
            <SharedTxt
              text={new Date(Number(item.updateAt)).toLocaleString()}
              size="13px"
              color="gray"
            />
          </RowCont>
        </View>
        <View>
          {editMode ? (
            <RowCont gap="20px">
              <Pressable
                style={{
                  gap: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
                onPress={() => setCurrent((prev) => !prev)}
              >
                <FontAwesome
                  name={current ? "check-circle" : "check-circle-o"}
                  color={current ? "cornflowerblue" : "gray"}
                  size={25}
                />
                <SharedTxt text={current ? "유동" : "부동"} size="18px" />
              </Pressable>
              <Pressable
                style={{
                  gap: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
                onPress={() => setAsset((prev) => !prev)}
              >
                <FontAwesome
                  name={asset ? "check-circle" : "check-circle-o"}
                  color={asset ? "cornflowerblue" : "gray"}
                  size={25}
                />
                <SharedTxt text={asset ? "자산" : "부채"} size="18px" />
              </Pressable>
            </RowCont>
          ) : (
            <RowCont gap="10px">
              <View
                style={{
                  backgroundColor: theme ? dark.badge : light.badge,
                  paddingHorizontal: 8,
                  paddingVertical: 5,
                  borderRadius: 10,
                }}
              >
                <SharedTxt text={item.current ? "유동" : "부동"} />
              </View>
              <View
                style={{
                  backgroundColor: theme ? dark.subBadge : light.subBadge,
                  paddingHorizontal: 8,
                  paddingVertical: 5,
                  borderRadius: 10,
                }}
              >
                <SharedTxt text={item.assests ? "자산" : "부채"} />
              </View>
            </RowCont>
          )}
        </View>
        <View style={{gap: 5, width: "100%", padding: 10}}>
          <SharedTxt text="금액" size="18px" bold={700} />
          {editMode ? (
            <Controller
              name="value"
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value + ""}
                  placeholder="금액을 입력해주세요"
                />
              )}
            />
          ) : (
            <SharedTxt
              text={`${item.value.toLocaleString()} 원`}
              align="right"
            />
          )}
        </View>
        <View style={{gap: 5, width: "100%", padding: 10}}>
          <SharedTxt text="자산타입" size="18px" bold={700} />
          {editMode ? (
            <Controller
              name="enLType"
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="자산타입을 입력해주세요"
                />
              )}
            />
          ) : (
            <SharedTxt
              text={item.enLType ? item.enLType : "미작성"}
              align="right"
            />
          )}
        </View>
        <View style={{gap: 5, width: "100%", padding: 10}}>
          <SharedTxt text="자산설명" size="18px" bold={700} />
          {editMode ? (
            <Controller
              name="enLDesc"
              control={control}
              render={({field: {onBlur, onChange, value}}) => (
                <SharedInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="자산설명을 입력해주세요"
                />
              )}
            />
          ) : (
            <SharedTxt
              text={!item.enLDesc ? "미작성" : item.enLDesc + ""}
              align="right"
            />
          )}
        </View>
        <View style={{gap: 10, width: "100%", padding: 10}}>
          {editMode ? (
            <>
              <SharedBtn text="수정완료" onSubmit={handleSubmit(editSubmit)} />
              <SharedBtn text="삭제하기" onSubmit={() => deletSubmit()} />
              <SharedBtn text="취소" onSubmit={() => setEditMode(false)} />
            </>
          ) : (
            <>
              <SharedBtn text="수정하기" onSubmit={() => setEditMode(true)} />
              <SharedBtn
                text="닫기"
                onSubmit={() => setEditAssetsModal(null)}
              />
            </>
          )}
        </View>
      </SafeAreaView>
    </Modal>
  );
}
