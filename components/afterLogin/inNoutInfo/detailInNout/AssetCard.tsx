import {EquityLiabilities} from "@/libs/__generated__/graphql";
import {View, useColorScheme} from "react-native";
import {AssetDescCard} from "./AssetCardCont.style";
import RowCont from "@/components/shared/RowCont";
import SharedTxt from "@/components/shared/SharedTxt";
import {dark, light} from "@/constants/Colors";
import SharedBtn from "@/components/shared/SharedBtn";
import {useModalState} from "@/store/modalState";
import AssetCardModal from "./AssetCardModal";

export default function AssetCard({item}: {item: EquityLiabilities}) {
  //state
  const {editAssets, setEditAssetsModal} = useModalState();
  //hooks
  const theme = useColorScheme() === "dark";

  return (
    <>
      <AssetDescCard>
        <RowCont gap="10px" content="flex-end">
          <View
            style={{
              backgroundColor: theme ? dark.badge : light.badge,
              paddingHorizontal: 8,
              paddingVertical: 5,
              borderRadius: 10,
            }}
          >
            <SharedTxt text={item.current ? "유동" : "부동"} />
          </View>
          <View
            style={{
              backgroundColor: theme ? dark.subBadge : light.subBadge,
              paddingHorizontal: 8,
              paddingVertical: 5,
              borderRadius: 10,
            }}
          >
            <SharedTxt text={item.assests ? "자산" : "부채"} />
          </View>
        </RowCont>
        <SharedTxt color="black" text={item.enLName} bold={700} size="20px" />
        <RowCont gap="10px" content="space-between">
          <SharedTxt color="black" text={item.enLId} />
          <SharedTxt
            color="black"
            text={`${item.value && item.value.toLocaleString()} 원`}
          />
        </RowCont>
        <SharedBtn
          text="자세히보기"
          onSubmit={() => setEditAssetsModal(item.id)}
        />
      </AssetDescCard>
      {editAssets === item.id && <AssetCardModal item={item} />}
    </>
  );
}
