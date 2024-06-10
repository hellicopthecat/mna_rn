import styled from "styled-components/native";

export const ProductCont = styled.View`
  gap: 20px;
  flex: 1;
`;
export const ProductCardCont = styled.View`
  flex: 1;
  background-color: white;
  border-radius: 10px;
  gap: 5px;
  overflow: hidden;
  flex-direction: row;
`;
export const ProductCardLeft = styled.View`
  flex: 1;
`;
export const ProductCardMiddle = styled.View`
  flex: 3;
  padding: 10px;
  gap: 5px;
`;
export const ProductCardRight = styled.View<{$color: string}>`
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 5px;
  background-color: ${(props) =>
    props.$color === "WAIT"
      ? "#fbc531"
      : props.$color === "PAID"
      ? "#4cd137"
      : "#e84118"};
`;
