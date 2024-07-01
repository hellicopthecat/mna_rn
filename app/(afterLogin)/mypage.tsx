import Avatar from "@/components/shared/Avatar";
import RowCont from "@/components/shared/RowCont";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedInput from "@/components/shared/SharedInput";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import {dark, light} from "@/constants/Colors";
import useEditUserHook from "@/hooks/afterLogin/useEditUserHook";
import useUser from "@/hooks/useUser";
import {useModalState} from "@/store/modalState";
import userToken from "@/store/userToken";
import {IEditUserProps} from "@/types/types";
import {router} from "expo-router";
import {Controller, useForm} from "react-hook-form";
import {Modal, SafeAreaView, View, useColorScheme} from "react-native";
import styled from "styled-components/native";

const MyPageUp = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
const MyPageDown = styled.View`
  flex: 2;
  justify-content: space-between;
`;
const MyPageDownFirst = styled.View`
  gap: 10px;
`;

export default function Page() {
  const theme = useColorScheme() === "dark";
  const {editUserModal, setEditUserModal} = useModalState();
  const {data, loading, client} = useUser();
  const {removeToken} = userToken();
  const {control, handleSubmit, getValues} = useForm<IEditUserProps>();
  const {handleEditUser} = useEditUserHook();
  const onPressSubmit = () => {
    const {firstName, lastName, password, phone, avatar} = getValues();
    handleEditUser({
      userId: data?.seeMyprofile.id + "",
      firstName,
      lastName,
      password,
      phone,
      avatar,
    });
  };
  const logout = async () => {
    await client.clearStore();
    removeToken();
    router.replace(`/`);
  };
  return (
    <SharedLayoutCont loading={loading}>
      <SharedTxt text={"내 프로필"} size="25px" bold={700} />
      <MyPageUp>
        <Avatar width="100px" height="100px" />
        <SharedTxt
          text={data?.seeMyprofile.username + ""}
          align="center"
          size="18px"
          bold={600}
        />
      </MyPageUp>
      <MyPageDown>
        <MyPageDownFirst>
          <SharedTxt text={"이메일"} size="25px" bold={700} />
          <SharedTxt
            text={data?.seeMyprofile.email + ""}
            align="right"
            size="18px"
            bold={600}
          />
          <SharedTxt text={"전화번호"} size="25px" bold={700} />
          <SharedTxt
            text={data?.seeMyprofile.phone + ""}
            align="right"
            size="18px"
            bold={600}
          />
          <SharedTxt text={"이름(성)"} size="25px" bold={700} />
          <SharedTxt
            text={
              !data?.seeMyprofile.firstName
                ? "미기입"
                : data?.seeMyprofile.firstName + ""
            }
            align="right"
            size="18px"
            bold={600}
          />
          <SharedTxt text={"이름"} size="25px" bold={700} />
          <SharedTxt
            text={
              !data?.seeMyprofile.lastName
                ? "미기입"
                : data?.seeMyprofile.lastName + ""
            }
            align="right"
            size="18px"
            bold={600}
          />
        </MyPageDownFirst>
        <SharedBtn
          text="회원정보수정"
          height="10%"
          onSubmit={() => setEditUserModal()}
        />
        <SharedBtn text="로그아웃" height="10%" onSubmit={logout} />
      </MyPageDown>
      {editUserModal && (
        <Modal animationType="slide" visible={editUserModal}>
          <SafeAreaView
            style={{backgroundColor: theme ? dark.bgColor : light.bgColor}}
          >
            <View
              style={{
                height: "100%",
                padding: 10,
                backgroundColor: theme ? dark.bgColor : light.bgColor,
                gap: 10,
                justifyContent: "space-between",
              }}
            >
              <SharedTxt
                text="회원정보수정"
                align="center"
                size="20px"
                bold={700}
              />
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 20,
                  paddingHorizontal: 10,
                }}
              >
                <RowCont gap="20px">
                  <SharedTxt text="비밀번호" />
                  <Controller
                    name="password"
                    control={control}
                    render={({field: {onBlur, onChange, value}}) => (
                      <SharedInput
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="비밀번호"
                      />
                    )}
                  />
                </RowCont>
                <RowCont gap="20px">
                  <SharedTxt text="이름(성)" />
                  <Controller
                    name="firstName"
                    control={control}
                    render={({field: {onBlur, onChange, value}}) => (
                      <SharedInput
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={data?.seeMyprofile.firstName}
                        placeholder={"이름(성)"}
                      />
                    )}
                  />
                </RowCont>
                <RowCont gap="20px">
                  <SharedTxt text="이름" />
                  <Controller
                    name="lastName"
                    control={control}
                    render={({field: {onBlur, onChange, value}}) => (
                      <SharedInput
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={data?.seeMyprofile.lastName}
                        placeholder={"이름"}
                      />
                    )}
                  />
                </RowCont>
                <RowCont gap="20px">
                  <SharedTxt text="전화번호" />
                  <Controller
                    name="phone"
                    control={control}
                    render={({field: {onBlur, onChange, value}}) => (
                      <SharedInput
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={data?.seeMyprofile.phone}
                        placeholder="전화번호"
                      />
                    )}
                  />
                </RowCont>
                <RowCont gap="20px">
                  <SharedTxt text="아바타" />
                  <Controller
                    name="avatar"
                    control={control}
                    render={({field: {onBlur, onChange, value}}) => (
                      <SharedInput
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={data?.seeMyprofile.avatar}
                        placeholder="아바타"
                      />
                    )}
                  />
                </RowCont>
              </View>
              <View style={{gap: 10}}>
                <SharedBtn
                  text="회원정보수정"
                  onSubmit={handleSubmit(onPressSubmit)}
                />
                <SharedBtn text="취소" onSubmit={() => setEditUserModal()} />
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      )}
    </SharedLayoutCont>
  );
}
