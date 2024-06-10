import styled from "styled-components/native";
interface IAvatarProps {
  width?: string;
  height?: string;
  radius?: string;
}
interface IAvatarStyleProps {
  $width: string;
  $height: string;
  $radius: string;
}
const AvatarCont = styled.View<IAvatarStyleProps>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background-color: ${(props) => props.theme.secondary};
  border-radius: ${(props) => props.$radius};
`;
export default function Avatar({
  width = "50px",
  height = "50px",
  radius = "100%",
}: IAvatarProps) {
  return <AvatarCont $width={width} $height={height} $radius={radius} />;
}
