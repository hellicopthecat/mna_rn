import {ReactNode} from "react";
import {StyleProp, ViewStyle} from "react-native";

import styled, {CSSProperties} from "styled-components/native";

interface IRowCont {
  children: ReactNode;
  gap?: string;
  content?: string;
  style?: StyleProp<ViewStyle>;
}

interface IRowStyleProps {
  $gap: string;
  $content: CSSProperties["justifyContent"];
}

const Row = styled.View<IRowStyleProps>`
  flex-direction: row;
  justify-content: ${(props) => props.$content};
  align-items: center;
  gap: ${(props) => props.$gap};
`;
export default function RowCont({
  children,
  gap = "0px",
  content = "start",
  style,
}: IRowCont) {
  return (
    <Row $gap={gap} $content={content} style={style}>
      {children}
    </Row>
  );
}
