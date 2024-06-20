import styled from "styled-components/native";

export const WorkerInfoCont = styled.View`
  background-color: #ffffff;
  border-radius: 25px;
  overflow: hidden;
`;
export const WorkerTitleCont = styled.View<{$color?: string}>`
  gap: 10px;
  padding: 15px;
  background-color: ${(props) =>
    props.$color ? props.$color : props.theme.primary};
  flex-direction: row;
  align-items: center;
`;
export const WorkerInfoDesc = styled.View`
  gap: 5px;
  padding: 15px;
`;
