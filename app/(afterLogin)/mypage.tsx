import Avatar from "@/components/shared/Avatar";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import useUser from "@/hooks/useUser";
import userToken from "@/store/userToken";
import {router} from "expo-router";
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
  const {data, loading} = useUser();
  const {removeToken} = userToken();
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
          onSubmit={() => router.push(`/modal`)}
        />
        <SharedBtn
          text="로그아웃"
          height="10%"
          onSubmit={() => removeToken()}
        />
      </MyPageDown>
    </SharedLayoutCont>
  );
}
