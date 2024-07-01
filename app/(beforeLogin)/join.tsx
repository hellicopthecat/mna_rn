import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedInput from "@/components/shared/SharedInput";
import {router} from "expo-router";
import {Controller, useForm} from "react-hook-form";
import styled from "styled-components/native";
import {RefObject, useEffect, useRef} from "react";
import {Alert, TextInput, View} from "react-native";
import {ICreateUserProps} from "@/types/types";
import SharedTxt from "@/components/shared/SharedTxt";
import useJoinHook from "@/hooks/beforeLogin/useJoinHook";

const JoinPageCont = styled.View`
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 2;
`;
const JoinPageBtn = styled.View`
  flex: 1;
  gap: 20px;
`;

export default function Page() {
  //Refs
  const emailNext = useRef(null);
  const passwordNext = useRef(null);
  const passwordCheck = useRef(null);
  const phoneNext = useRef(null);
  const firstNameNext = useRef(null);
  const lastNameNext = useRef(null);
  //Constants
  const emailRegexp = RegExp(
    /^[a-zA-Z0-9]([-_]?[a-zA-Z0-9])*@[a-zA-Z0-9]*\.([a-zA-Z]{2,3})|\.([a-zA-Z]{2,3})?$/g
  );
  //hooks
  const {handleCreateUser, loading, error} = useJoinHook();
  const {
    control,
    handleSubmit,
    getValues,
    watch,
    formState: {errors},
    setError,
  } = useForm<ICreateUserProps>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordCheck: "",
      phone: "",
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = () => {
    const {
      username,
      email,
      password,
      passwordCheck,
      phone,
      firstName,
      lastName,
    } = getValues();
    if (password !== passwordCheck) {
      Alert.alert("비밀번호오류", "2차비밀번호와 일치하지 않습니다.");
    } else {
      handleCreateUser({
        username,
        email,
        password,
        phone,
        firstName,
        lastName,
      });
    }
  };
  //fn
  const nextRef = (ref: RefObject<TextInput>) => {
    ref.current?.focus();
  };
  useEffect(() => {
    const {password, passwordCheck} = watch();
    if (password !== passwordCheck) {
      setError("password", {message: "2차비밀번호와 일치하지 않습니다."});
      setError("passwordCheck", {message: "비밀번호와 일치하지 않습니다."});
    }
  }, [watch, setError]);
  return (
    <SharedLayoutCont>
      <JoinPageCont>
        <Controller
          control={control}
          name="username"
          rules={{required: true}}
          render={({field: {onBlur, onChange, value}}) => (
            <SharedInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="아이디"
              onSubmit={() => nextRef(emailNext)}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          rules={{required: true, pattern: emailRegexp}}
          render={({field: {onBlur, onChange, value}}) => (
            <SharedInput
              refName={emailNext}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="이메일"
              keyboardType="email-address"
              onSubmit={() => nextRef(passwordNext)}
            />
          )}
        />
        {errors.email && (
          <View style={{width: "90%", alignItems: "flex-start"}}>
            <SharedTxt text={errors.email.message + ""} color="tomato" />
          </View>
        )}
        <Controller
          control={control}
          name="password"
          rules={{required: true}}
          render={({field: {onBlur, onChange, value}}) => (
            <SharedInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="비밀번호"
              secure
              onSubmit={() => nextRef(passwordCheck)}
            />
          )}
        />
        {errors.password && (
          <View style={{width: "90%", alignItems: "flex-start"}}>
            <SharedTxt text={errors.password.message + ""} color="tomato" />
          </View>
        )}

        <Controller
          control={control}
          name="passwordCheck"
          rules={{required: true}}
          render={({field: {onBlur, onChange, value}}) => (
            <SharedInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="비밀번호확인"
              onSubmit={() => nextRef(phoneNext)}
            />
          )}
        />
        {errors.passwordCheck && (
          <View style={{width: "90%", alignItems: "flex-start"}}>
            <SharedTxt
              text={errors.passwordCheck.message + ""}
              color="tomato"
            />
          </View>
        )}
        <Controller
          control={control}
          name="phone"
          rules={{required: true}}
          render={({field: {onBlur, onChange, value}}) => (
            <SharedInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="전화번호"
              onSubmit={() => nextRef(firstNameNext)}
            />
          )}
        />
        <Controller
          control={control}
          name="firstName"
          rules={{required: true}}
          render={({field: {onBlur, onChange, value}}) => (
            <SharedInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="이름(성)"
              onSubmit={() => nextRef(lastNameNext)}
            />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          rules={{required: true}}
          render={({field: {onBlur, onChange, value}}) => (
            <SharedInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="이름"
              onSubmit={handleSubmit(onSubmit)}
            />
          )}
        />
      </JoinPageCont>
      <JoinPageBtn>
        <SharedBtn text="회원가입" onSubmit={handleSubmit(onSubmit)} />
        <SharedBtn text="로그인하러가기" onSubmit={() => router.replace("/")} />
      </JoinPageBtn>
    </SharedLayoutCont>
  );
}
