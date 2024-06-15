import {ReactNode} from "react";
import {ActivityIndicator, SafeAreaView} from "react-native";
import styled from "styled-components/native";

interface ISharedLayoutProps {
  children: ReactNode;
  loading?: boolean;
}

const SharedLayout = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.bgColor};
  justify-content: center;
  align-items: center;
`;
const SharedCont = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px;
`;
const SharedLayoutCont = ({children, loading}: ISharedLayoutProps) => {
  return (
    <SharedLayout>
      <SharedCont>{loading ? <ActivityIndicator /> : children}</SharedCont>
    </SharedLayout>
  );
};
export default SharedLayoutCont;
