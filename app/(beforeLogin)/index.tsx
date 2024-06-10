import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import InputErrorMsg from "@/components/shared/InputErrorMsg";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedInput from "@/components/shared/SharedInput";
import {router} from "expo-router";
import {Controller, useForm} from "react-hook-form";
import styled from "styled-components/native";
import {ILoginProps} from "@/types/types";
import useLoginHook from "@/hooks/beforeLogin/useLoginHook";
import {RefObject, useRef} from "react";
import {TextInput, View} from "react-native";

const LoginPageCont = styled.View`
  width: 90%;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex: 4;
`;
const LoginPageBtn = styled.View`
  flex: 1;
  gap: 20px;
`;
export default function Page() {
  //Ref
  const passwordRef = useRef(null);
  //hooks
  const {handleLogin} = useLoginHook();
  const {
    control,
    handleSubmit,
    getValues,
    formState: {errors},
  } = useForm<ILoginProps>({
    defaultValues: {username: "", email: "", password: ""},
  });
  //fn
  const nextPress = (ref: RefObject<TextInput>) => {
    ref.current?.focus();
  };
  const onSubmit = () => {
    const {username, password} = getValues();
    handleLogin({username, password});
  };

  return (
    <SharedLayoutCont>
      <View style={{flex: 3, alignItems: "center"}}>
        <LoginPageCont>
          <Controller
            name="username"
            control={control}
            rules={{required: {value: true, message: "입력하세요"}}}
            render={({field: {onBlur, onChange, value}}) => (
              <SharedInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="아이디"
                onSubmit={() => nextPress(passwordRef)}
              />
            )}
          />
          {errors.username?.message && (
            <InputErrorMsg text={errors.username?.message} />
          )}
          <Controller
            name="password"
            control={control}
            rules={{required: {value: true, message: "입력하세요"}}}
            render={({field: {onBlur, onChange, value}}) => (
              <SharedInput
                refName={passwordRef}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="비밀번호"
                returnkey="next"
                onSubmit={handleSubmit(onSubmit)}
              />
            )}
          />
          {errors.password?.message && (
            <InputErrorMsg text={errors.password?.message} />
          )}
        </LoginPageCont>
      </View>
      <LoginPageBtn>
        <SharedBtn text="로그인" onSubmit={handleSubmit(onSubmit)} />
        <SharedBtn text="회원가입" onSubmit={() => router.push("/join")} />
      </LoginPageBtn>
    </SharedLayoutCont>
  );
}
