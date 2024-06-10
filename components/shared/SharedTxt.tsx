import {StyleProp, TextStyle} from "react-native";
import styled from "styled-components/native";

interface ISharedTxtProp {
  text: string;
  size?: string;
  bold?: number;
  align?: "center" | "right" | "left";
  color?: string;
  style?: StyleProp<TextStyle>;
}
interface ISharedTxtStyle {
  $size: string;
  $bold: number;
  $align: ISharedTxtProp["align"];
  $color: string;
}
const Txt = styled.Text<ISharedTxtStyle>`
  color: ${(props) => (!props.$color ? props.theme.txtColor : props.$color)};
  font-size: ${(props) => props.$size};
  font-weight: ${(props) => props.$bold};
  text-align: ${(props) => props.$align};
`;

export default function SharedTxt({
  text,
  size = "15px",
  bold = 500,
  align = "left",
  color = "",
  style,
}: ISharedTxtProp) {
  return (
    <Txt $size={size} $bold={bold} $align={align} $color={color} style={style}>
      {text}
    </Txt>
  );
}
