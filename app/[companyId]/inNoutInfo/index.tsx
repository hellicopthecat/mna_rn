import {
  ChartCont,
  ChartHeader,
  ChartScroll,
  ChartView,
  ChartViewCont,
} from "@/components/afterLogin/inNoutInfo/inNoutInfo.style";
import Avatar from "@/components/shared/Avatar";
import RowCont from "@/components/shared/RowCont";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import {dark, light} from "@/constants/Colors";
import {Query} from "@/libs/__generated__/graphql";
import {COMPANY_INNOUT_FRAG} from "@/libs/fragments/inNoutFrag";
import {IRouterParams} from "@/types/routerParamsType";
import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {router, useGlobalSearchParams} from "expo-router";
import {useState} from "react";
import {
  RefreshControl,
  SafeAreaView,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import {
  BarChart,
  PieChart,
  barDataItem,
  pieDataItem,
} from "react-native-gifted-charts";

const SEE_COMPANY_INNOUT = gql`
  query seeCompanyInNout($searchCompanyId: Int!) {
    searchCompany(id: $searchCompanyId) {
      id
      companyName
      inNout {
        ...CompanyInNoutFrag
      }
    }
  }
  ${COMPANY_INNOUT_FRAG}
` as DocumentNode | TypedDocumentNode<Query>;

export default function Page() {
  //state
  const [refresh, setRefresh] = useState(false);
  //hooks
  const theme = useColorScheme() === "dark";
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  //gql query
  const {data, loading, refetch} = useQuery(SEE_COMPANY_INNOUT, {
    variables: {searchCompanyId: Number(companyId)},
  });
  const inNoutData = data?.searchCompany;
  //fn
  const handleRefresh = async () => {
    setRefresh(true);
    try {
      await refetch();
    } catch (err) {
      console.log(err);
    }
    setRefresh(false);
  };
  // chart Data
  const pieData = [
    {
      value: inNoutData?.inNout.capital,
      color: theme ? dark.secondary : light.secondary,
      text: `${
        inNoutData?.inNout.capital
          ? inNoutData?.inNout.capital.toLocaleString()
          : 0
      }`,
    },
    {
      value: inNoutData?.inNout.liabilities,
      color: theme ? dark.primary : light.primary,
      text: `${
        inNoutData?.inNout.liabilities
          ? inNoutData?.inNout.liabilities.toLocaleString()
          : 0
      }`,
    },
  ];
  const barData = [
    {
      value: !inNoutData?.inNout.debtRatio
        ? 0
        : Number(inNoutData?.inNout.debtRatio.toFixed(1)),
      label: "부채비율",
      frontColor: "#f200ff",
    },
    {
      value: !inNoutData?.inNout.profitMargin
        ? 0
        : Number(inNoutData?.inNout.profitMargin.toFixed(1)),
      label: "이익률",
      frontColor: "#e1ff00",
    },
    {
      value: !inNoutData?.inNout.equityRatio
        ? 0
        : Number(inNoutData?.inNout.equityRatio.toFixed(1)),
      label: "자기자본비율",
      frontColor: "#00ffb3",
    },
    {
      value: !inNoutData?.inNout.roe
        ? 0
        : Number(inNoutData?.inNout.roe.toFixed(1)),
      label: "자기자본회수기간",
      frontColor: "#2a00fe",
    },
  ];
  const horizontalData = [
    {
      value: inNoutData?.inNout.totalRevenue,
      label: "총수익",
      frontColor: "#fa0000",
    },
    {
      value: inNoutData?.inNout.netAssets,
      label: "순자산",
      frontColor: "#e5ff00",
    },
    {
      value: inNoutData?.inNout.netIncome,
      label: "순이익",
      frontColor: "#0011ff",
    },
    {
      value: inNoutData?.inNout.totalExpenses,
      label: "총비용",
      frontColor: "#ff00f2",
    },
    {
      value: inNoutData?.inNout.budget,
      label: "예산",
      frontColor: "#00ff0d",
    },
  ];

  return (
    <SharedLayoutCont loading={loading}>
      <SafeAreaView>
        <ChartCont>
          <ChartHeader>
            <TouchableOpacity
              onPress={() =>
                router.push(`/${companyId}/inNoutInfo/detailInNout`)
              }
            >
              <SharedTxt text="자산" size="40px" bold={700} />
            </TouchableOpacity>
            <SharedBtn
              text="자산보기"
              width="20%"
              onSubmit={() =>
                router.push(`/${companyId}/inNoutInfo/detailInNout`)
              }
            />
          </ChartHeader>
          <ChartScroll
            contentContainerStyle={{
              alignItems: "center",
              gap: 20,
            }}
            automaticallyAdjustContentInsets
            contentInset={{bottom: 100}}
            refreshControl={
              <RefreshControl refreshing={refresh} onRefresh={handleRefresh} />
            }
          >
            <ChartViewCont>
              <SharedTxt
                text="자본 / 부채"
                size="25px"
                bold={700}
                color="black"
              />
              <ChartView>
                <PieChart
                  donut
                  showText
                  focusOnPress
                  innerRadius={45}
                  textSize={15}
                  labelsPosition={"onBorder"}
                  fontWeight="700"
                  strokeColor={dark.bgColor}
                  strokeWidth={4}
                  radius={100}
                  shadowColor="lightgray"
                  innerCircleColor={dark.bgColor}
                  innerCircleBorderColor={dark.bgColor}
                  centerLabelComponent={() => {
                    return (
                      <>
                        <SharedTxt
                          bold={700}
                          text={`총 자산`}
                          align="center"
                          color="white"
                        />
                        <SharedTxt
                          bold={700}
                          text={`${
                            inNoutData?.inNout.totalAssets
                              ? inNoutData?.inNout.totalAssets.toLocaleString()
                              : 0
                          }`}
                          color="white"
                        />
                      </>
                    );
                  }}
                  data={pieData as pieDataItem[]}
                />
                <RowCont gap="10px">
                  <RowCont gap="5px">
                    <Avatar
                      width="15px"
                      height="15px"
                      color={theme ? dark.secondary : light.secondary}
                    />
                    <SharedTxt text="무슨 값?" color="black" />
                  </RowCont>
                  <RowCont gap="5px">
                    <Avatar
                      width="15px"
                      height="15px"
                      color={theme ? dark.primary : light.primary}
                    />
                    <SharedTxt text="무슨 값?" color="black" />
                  </RowCont>
                </RowCont>
              </ChartView>
            </ChartViewCont>
            <ChartViewCont>
              <SharedTxt text="재산" size="25px" bold={700} color="black" />
              <ChartView>
                <BarChart
                  isAnimated
                  showValuesAsTopLabel
                  showYAxisIndices
                  barWidth={35}
                  noOfSections={5}
                  maxValue={100}
                  mostNegativeValue={-100}
                  stepValue={10}
                  data={barData as barDataItem[]}
                />
              </ChartView>
            </ChartViewCont>
            <ChartViewCont>
              <SharedTxt text="재산" size="25px" bold={700} color="black" />
              <ChartView>
                <BarChart
                  isAnimated
                  showYAxisIndices
                  showValuesAsTopLabel
                  barWidth={20}
                  noOfSections={5}
                  data={horizontalData as barDataItem[]}
                />
              </ChartView>
            </ChartViewCont>
          </ChartScroll>
        </ChartCont>
      </SafeAreaView>
    </SharedLayoutCont>
  );
}
