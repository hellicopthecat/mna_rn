import {
  ChartCont,
  ChartHeader,
  ChartScroll,
  ChartView,
  ChartViewCont,
} from "@/components/afterLogin/inNoutInfo/inNoutInfo.style";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import {dark, light} from "@/constants/Colors";
import {InNout, Query} from "@/libs/__generated__/graphql";
import {COMPANY_INNOUT_FRAG} from "@/libs/fragments/inNoutFrag";
import {IRouterParams} from "@/types/routerParamsType";
import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {router, useGlobalSearchParams} from "expo-router";
import {SafeAreaView, TouchableOpacity, useColorScheme} from "react-native";
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
      companyInNout {
        ...CompanyInNoutFrag
      }
    }
  }
  ${COMPANY_INNOUT_FRAG}
` as DocumentNode | TypedDocumentNode<Query>;

export default function Page() {
  //hooks
  const theme = useColorScheme() === "dark";
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  //gql query
  const {data, loading} = useQuery(SEE_COMPANY_INNOUT, {
    variables: {searchCompanyId: Number(companyId)},
  });
  const inNoutData = data?.searchCompany;
  // chart Data
  const pieData = [
    {
      value: inNoutData?.companyInNout.capital,
      color: theme ? dark.secondary : light.secondary,
      text: `${inNoutData?.companyInNout.capital.toLocaleString()}`,
    },
    {
      value: inNoutData?.companyInNout.liabilities,
      color: theme ? dark.primary : light.primary,
      text: `${inNoutData?.companyInNout.liabilities.toLocaleString()}`,
    },
  ];
  const barData = [
    {
      value: !inNoutData?.companyInNout.debtRatio
        ? 0
        : Number(inNoutData?.companyInNout.debtRatio.toFixed(1)),
      label: "부채비율",
      frontColor: "#f200ff",
    },
    {
      value: !inNoutData?.companyInNout.profitMargin
        ? 0
        : Number(inNoutData?.companyInNout.profitMargin.toFixed(1)),
      label: "이익률",
      frontColor: "#e1ff00",
    },
    {
      value: !inNoutData?.companyInNout.equityRatio
        ? 0
        : Number(inNoutData?.companyInNout.equityRatio.toFixed(1)),
      label: "자기자본비율",
      frontColor: "#00ffb3",
    },
    {
      value: !inNoutData?.companyInNout.roe
        ? 0
        : Number(inNoutData?.companyInNout.roe.toFixed(1)),
      label: "자기자본회수기간",
      frontColor: "#2a00fe",
    },
  ];
  const horizontalData = [
    {
      value: inNoutData?.companyInNout.totalRevenue,
      label: "총수익",
      frontColor: "#fa0000",
    },
    {
      value: inNoutData?.companyInNout.netAssets,
      label: "순자산",
      frontColor: "#e5ff00",
    },
    {
      value: inNoutData?.companyInNout.netIncome,
      label: "순이익",
      frontColor: "#0011ff",
    },
    {
      value: inNoutData?.companyInNout.totalExpenses,
      label: "총비용",
      frontColor: "#ff00f2",
    },
    {
      value: inNoutData?.companyInNout.budget,
      label: "예산",
      frontColor: "#00ff0d",
    },
  ];

  return (
    <SharedLayoutCont loading={loading}>
      <SafeAreaView>
        <ChartCont>
          <ChartHeader style={{borderBottomWidth: 2}}>
            <TouchableOpacity
              onPress={() =>
                router.push(`/${companyId}/inNoutInfo/detailInNout`)
              }
            >
              <SharedTxt text="자산" size="40px" bold={700} />
            </TouchableOpacity>
            <SharedBtn text="자산보기" width="20%" height="25%" />
          </ChartHeader>
          <ChartScroll
            contentContainerStyle={{
              alignItems: "center",
              gap: 20,
            }}
            contentInset={{bottom: 250}}
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
                  innerRadius={50}
                  textColor={"black"}
                  textSize={15}
                  fontWeight="700"
                  strokeColor={theme ? dark.bgColor : light.bgColor}
                  strokeWidth={5}
                  radius={100}
                  shadowColor="lightgray"
                  innerCircleColor={theme ? dark.bgColor : light.bgColor}
                  innerCircleBorderColor={theme ? dark.bgColor : light.bgColor}
                  centerLabelComponent={() => {
                    return (
                      <>
                        <SharedTxt bold={700} text={`총 자산`} align="center" />
                        <SharedTxt
                          bold={700}
                          text={`${inNoutData?.companyInNout.totalAssets}`}
                        />
                      </>
                    );
                  }}
                  data={pieData as pieDataItem[]}
                />
              </ChartView>
            </ChartViewCont>
            <ChartViewCont>
              <SharedTxt text="재산" size="25px" bold={700} color="black" />
              <ChartView>
                <BarChart
                  showValuesAsTopLabel
                  showYAxisIndices
                  barWidth={35}
                  noOfSections={4}
                  barBorderRadius={10}
                  data={barData as barDataItem[]}
                />
              </ChartView>
            </ChartViewCont>
            <ChartViewCont>
              <SharedTxt text="재산" size="25px" bold={700} color="black" />
              <ChartView>
                <BarChart
                  showYAxisIndices
                  barWidth={20}
                  barBorderRadius={10}
                  noOfSections={4}
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
