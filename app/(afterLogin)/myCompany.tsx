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
import RowCont from "@/components/shared/RowCont";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedInput from "@/components/shared/SharedInput";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import {dark, light} from "@/constants/Colors";
import useCreateCompanyHook from "@/hooks/afterLogin/useCreateCompanyHook";
import useDeleteCompanyHook from "@/hooks/afterLogin/useDeleteCompanyHook";
import {Company, Query} from "@/libs/__generated__/graphql";
import {useModalState} from "@/store/modalState";
import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {router} from "expo-router";
import {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {
  FlatList,
  Modal,
  SafeAreaView,
  View,
  useColorScheme,
} from "react-native";

const MY_COMPANY_QUERY = gql`
  query myCompany {
    seeMyprofile {
      id
      hasCompanyCount
      ownCompany {
        id
        companyName
        isOwned
        isManager
        inNout {
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
  const [refresh, setRefresh] = useState(false);
  const theme = useColorScheme() === "dark";
  const {control, handleSubmit, getValues, setValue} = useForm({
    defaultValues: {companyName: ""},
  });
  //gql query
  const {data, loading, refetch} = useQuery(MY_COMPANY_QUERY);
  const {handleCreateCompany} = useCreateCompanyHook();
  const {handleDeleteCompany} = useDeleteCompanyHook();
  //store
  const {createCompanyModal, setCreateCompany} = useModalState();
  //fn
  const onRefreshing = async () => {
    setRefresh(true);
    try {
      await refetch();
    } catch (err) {
      console.log(err);
    }
    setRefresh(false);
  };
  const onSubmitCreateCompany = async () => {
    const {companyName} = getValues();
    handleCreateCompany({companyName});
    await onRefreshing();
    setValue("companyName", "");
  };

  // Render Item
  const myCompany = ({item}: {item: Company}) => {
    return (
      <CompanyCard onPress={() => router.push(`/${item.id}`)}>
        <CardRight>
          <Avatar radius="0" width="100%" height="100%" />
        </CardRight>
        <CardLeft>
          <SharedTxt
            text={item.companyName}
            size={item.companyName.length <= 6 ? "40px" : "30px"}
            bold={700}
            color="black"
          />
          <CardInfoCont>
            <CardInfo>
              <SharedTxt text={"자산"} size="18px" color="black" />
              <SharedTxt
                text={
                  !item.inNout.totalAssets
                    ? "0 원"
                    : `${item.inNout.totalAssets.toLocaleString()} 원`
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
            <SharedBtn
              text="삭제하기"
              onSubmit={() => handleDeleteCompany({id: Number(item.id)})}
            />
          </CardInfoCont>
        </CardLeft>
      </CompanyCard>
    );
  };

  return (
    <SharedLayoutCont loading={loading}>
      <CompanyCardCont>
        <RowCont content="space-between">
          <SharedTxt
            text={`보유 회사 ${data?.seeMyprofile.hasCompanyCount}`}
            size="25px"
            bold={700}
          />

          <SharedBtn
            text="회사 생성"
            width="20%"
            onSubmit={() => setCreateCompany()}
          />
        </RowCont>
        <FlatList
          data={data?.seeMyprofile.ownCompany as Company[]}
          keyExtractor={(item) => item.id.toString()}
          renderItem={myCompany}
          ItemSeparatorComponent={() => <FlatSeparator />}
          refreshing={refresh}
          onRefresh={onRefreshing}
        />
      </CompanyCardCont>
      {createCompanyModal && (
        <Modal animationType="slide" visible={createCompanyModal}>
          <SafeAreaView
            style={{backgroundColor: theme ? dark.bgColor : light.bgColor}}
          >
            <View
              style={{
                padding: 20,
                height: "100%",
                justifyContent: "space-between",
              }}
            >
              <SharedTxt
                text="회사생성"
                align="center"
                size="20px"
                bold={700}
              />
              <Controller
                name="companyName"
                control={control}
                render={({field: {onBlur, onChange, value}}) => (
                  <SharedInput
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="회사명을 입력하세요."
                    onSubmit={handleSubmit(onSubmitCreateCompany)}
                  />
                )}
              />
              <View style={{gap: 10}}>
                <SharedBtn
                  text="회사생성"
                  onSubmit={handleSubmit(onSubmitCreateCompany)}
                />
                <SharedBtn text="취소" onSubmit={() => setCreateCompany()} />
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      )}
    </SharedLayoutCont>
  );
}
