import styled from "styled-components/native";

const Seperator = styled.View<{$height: string}>`
  height: ${(props) => props.$height};
`;
export default function FlatSeparator({height = "10px"}: {height?: string}) {
  return <Seperator $height={height} />;
}
