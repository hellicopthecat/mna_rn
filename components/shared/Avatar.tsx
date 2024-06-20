import styled from "styled-components/native";
interface IAvatarProps {
  width?: string;
  height?: string;
  radius?: string;
  color?: string;
}
interface IAvatarStyleProps {
  $width: string;
  $height: string;
  $radius: string;
  $color: string;
}
const AvatarCont = styled.View<IAvatarStyleProps>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background-color: ${(props) =>
    !props.$color ? props.theme.secondary : props.$color};
  border-radius: ${(props) => props.$radius};
`;
export default function Avatar({
  width = "50px",
  height = "50px",
  radius = "50px",
  color = "",
}: IAvatarProps) {
  return (
    <AvatarCont
      $width={width}
      $height={height}
      $radius={radius}
      $color={color}
    />
  );
}
