import styled from "styled-components/native";

interface IInputErrorMsgProps {
  text: string;
}
const InputErrorMsgCont = styled.View`
  width: 80%;
`;
const ErrorMsg = styled.Text`
  color: tomato;
  font-weight: 600;
`;
export default function InputErrorMsg({text}: IInputErrorMsgProps) {
  return (
    <InputErrorMsgCont>
      <ErrorMsg>{text}</ErrorMsg>
    </InputErrorMsgCont>
  );
}
