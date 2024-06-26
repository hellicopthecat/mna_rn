import styled from "styled-components/native";
interface ISharedBtnProps {
  text: string;
  width?: string;
  height?: string;
  size?: string;
  bold?: number;
  border?: string;
  onSubmit?: () => void;
  disable?: boolean;
}

interface ITouchProps {
  $width: string;
  $height: string;
  $border: string;
}

interface ITxtProps {
  $size: string;
  $bold: number;
}

const TouchableBtn = styled.TouchableOpacity<ITouchProps>`
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.btnColor};
  width: ${(props) => (props.$width ? props.$width : "100%")};
  height: ${(props) => (props.$height ? props.$height : "20%")};
  border-radius: ${(props) => props.$border};
`;
const BtnText = styled.Text<ITxtProps>`
  color: ${(props) => props.theme.btnTxtColor};
  text-align: center;
`;

export default function SharedBtn({
  text,
  width = "100%",
  height = "30px",
  size = "15px",
  bold = 600,
  border = "5px",
  onSubmit,
  disable = false,
}: ISharedBtnProps) {
  return (
    <TouchableBtn
      onPress={onSubmit}
      $width={width}
      $height={height}
      $border={border}
    >
      <BtnText $size={size} $bold={bold} disabled={disable}>
        {text}
      </BtnText>
    </TouchableBtn>
  );
}
