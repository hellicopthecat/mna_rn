import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedInput from "@/components/shared/SharedInput";
import {router} from "expo-router";
import {Controller, useForm} from "react-hook-form";
import styled from "styled-components/native";

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
  const {control, handleSubmit} = useForm();
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
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          rules={{required: true}}
          render={({field: {onBlur, onChange, value}}) => (
            <SharedInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="이메일"
            />
          )}
        />
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
            />
          )}
        />
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
            />
          )}
        />
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
            />
          )}
        />
      </JoinPageCont>
      <JoinPageBtn>
        <SharedBtn text="회원가입" />
        <SharedBtn text="로그인하러가기" onSubmit={() => router.replace("/")} />
      </JoinPageBtn>
    </SharedLayoutCont>
  );
}
