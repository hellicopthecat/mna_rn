import Avatar from "@/components/shared/Avatar";
import RowCont from "@/components/shared/RowCont";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedTxt from "@/components/shared/SharedTxt";
import useConnectCompany from "@/hooks/afterLogin/connectCompany/useConnectCompany";
import useDisconnectCompany from "@/hooks/afterLogin/connectCompany/useDisconnectCompany";
import {Company} from "@/libs/__generated__/graphql";
import {IRouterParams} from "@/types/routerParamsType";
import {useGlobalSearchParams} from "expo-router";
import {ActivityIndicator} from "react-native";
import styled from "styled-components/native";

interface IConnectCompany {
  item: Company;
  loading: boolean;
}
const ConnectCompanyCard = styled.View`
  background-color: white;
  border-radius: 10px;
`;

export default function ConnectCompany({item, loading}: IConnectCompany) {
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  //connect
  const {handleConnectCompany} = useConnectCompany();
  const connectCompany = () => {
    handleConnectCompany({
      companyId: Number(companyId),
      targetCompanyId: Number(item.id),
    });
  };
  //disconnect
  const {handleDisconnect} = useDisconnectCompany();
  const disconnectCompany = () => {
    handleDisconnect({
      companyId: Number(companyId),
      targetCompanyId: Number(item.id),
    });
  };
  return loading ? (
    <ActivityIndicator />
  ) : (
    <ConnectCompanyCard>
      <RowCont content="space-between">
        <RowCont gap="20px" style={{padding: 10}}>
          <Avatar />
          <SharedTxt
            text={item.companyName}
            color="black"
            size="20px"
            bold={700}
          />
        </RowCont>
        {item.connectedCompany?.find(
          (company) => company?.id !== companyId
        ) && (
          <SharedBtn
            text="연결해제"
            width="30%"
            height="100%"
            onSubmit={disconnectCompany}
          />
        )}
      </RowCont>
    </ConnectCompanyCard>
  );
}
