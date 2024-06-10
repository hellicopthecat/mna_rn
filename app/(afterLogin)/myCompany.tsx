import {
  CardInfo,
  CardInfoCont,
  CardLeft,
  CardRight,
  CompanyCard,
  CompanyCardCont,
} from "@/components/afterLogin/myCompany/myCompany.style";
import Avatar from "@/components/shared/Avatar";
import FlatSeparator from "@/components/shared/FlatSeparator";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import {Company, Query} from "@/libs/__generated__/graphql";
import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {router} from "expo-router";
import {FlatList, View} from "react-native";

const MY_COMPANY_QUERY = gql`
  query myCompany {
    seeMyprofile {
      ownCompany {
        id
        companyName
        isOwned
        isManager
        companyInNout {
          totalAssets
        }
        companyWorker {
          id
        }
      }
    }
  }
` as DocumentNode | TypedDocumentNode<Query>;

export default function Page() {
  //gql query
  const {data, loading} = useQuery(MY_COMPANY_QUERY);
  // Render Item
  const myCompany = ({item}: {item: Company}) => {
    return (
      <View
        style={{
          borderRadius: 20,
          overflow: "hidden",
          shadowColor: "black",
          shadowOffset: {width: 100, height: 200},
          shadowOpacity: 0.1,
          shadowRadius: 100,
          elevation: 5,
        }}
      >
        <CompanyCard onPress={() => router.push(`/${item.id}`)}>
          <CardRight>
            <Avatar radius="0" width="100%" height="100%" />
          </CardRight>
          <CardLeft>
            <SharedTxt
              text={item.companyName}
              size="50px"
              bold={700}
              color="black"
            />
            <CardInfoCont>
              <CardInfo>
                <SharedTxt text={"자산"} size="18px" color="black" />
                <SharedTxt
                  text={
                    !item.companyInNout.totalAssets
                      ? "0 원"
                      : `${item.companyInNout.totalAssets.toLocaleString()} 원`
                  }
                  color="black"
                  align="right"
                />
              </CardInfo>
              <CardInfo>
                <SharedTxt text={"사원"} size="18px" color="black" />
                <SharedTxt
                  text={
                    item.companyWorker?.length === 0
                      ? "0 명"
                      : `${item.companyWorker?.length} 명`
                  }
                  color="black"
                  align="right"
                />
              </CardInfo>
            </CardInfoCont>
          </CardLeft>
        </CompanyCard>
      </View>
    );
  };
  return (
    <SharedLayoutCont loading={loading}>
      <CompanyCardCont>
        <SharedTxt text="보유 회사" size="25px" bold={700} />
        <FlatList
          data={data?.seeMyprofile.ownCompany as Company[]}
          keyExtractor={(item) => item?.id}
          renderItem={myCompany}
          ItemSeparatorComponent={() => <FlatSeparator />}
        />
      </CompanyCardCont>
    </SharedLayoutCont>
  );
}
