import Avatar from "@/components/shared/Avatar";
import RowCont from "@/components/shared/RowCont";
import SharedTxt from "@/components/shared/SharedTxt";
import {Company} from "@/libs/__generated__/graphql";
import {ActivityIndicator, View} from "react-native";
import styled from "styled-components/native";

const ConnectCompanyCard = styled.View`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
`;

export default function ConnectCompany({
  item,
  loading,
}: {
  item: Company;
  loading: boolean;
}) {
  return !loading ? (
    <ActivityIndicator />
  ) : (
    <ConnectCompanyCard>
      <RowCont gap="20px">
        <Avatar />
        <SharedTxt
          text={item.companyName}
          color="black"
          size="20px"
          bold={700}
        />
      </RowCont>
    </ConnectCompanyCard>
  );
}
