import RowCont from "@/components/shared/RowCont";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedTxt from "@/components/shared/SharedTxt";
import {TPaymentSwitch} from "@/libs/__generated__/graphql";
import {useModalState} from "@/store/modalState";
import {IProductProps} from "@/types/types";
import {ScrollView, View} from "react-native";

export default function BeforeEditProduct({item}: IProductProps) {
  const {setEditMode, setEditProductModal} = useModalState();
  return (
    <>
      <ScrollView style={{marginBottom: 10}}>
        <View style={{gap: 20}}>
          <RowCont content="space-between">
            <SharedTxt text="상품고유아이디" size="17px" />
            <SharedTxt text={item.itemProductId} size="20px" />
          </RowCont>
          <RowCont content="space-between">
            <SharedTxt text="상품이름" size="17px" />
            <SharedTxt text={item.itemName} size="20px" />
          </RowCont>
          <RowCont content="space-between">
            <SharedTxt text="상품모델명" size="17px" />
            <SharedTxt
              text={
                item.itemModelName === "" ? "미기입" : item.itemModelName + ""
              }
              size="20px"
            />
          </RowCont>
          <RowCont content="space-between">
            <SharedTxt text="상품사진" size="17px" />
            <SharedTxt
              text={item.itemPhoto === "" ? "미등록" : item.itemPhoto + ""}
              size="20px"
            />
          </RowCont>
          <RowCont content="space-between">
            <SharedTxt text="상품타입" size="17px" />
            <SharedTxt
              text={item.itemType === "" ? "미기입" : item.itemType + ""}
              size="20px"
            />
          </RowCont>
          <RowCont content="space-between">
            <SharedTxt text="상품수" size="17px" />
            <SharedTxt
              text={!item.itemCount ? "1" : item.itemCount + ""}
              size="20px"
            />
          </RowCont>
          <RowCont content="space-between">
            <SharedTxt text="상품가격" size="17px" />
            <SharedTxt
              text={!item.itemPrice ? "0" : item.itemPrice + ""}
              size="20px"
            />
          </RowCont>
          <RowCont content="space-between">
            <SharedTxt text="상품설명" size="17px" />
            <SharedTxt
              text={!item.itemDesc ? "미기입" : item.itemDesc + ""}
              size="20px"
            />
          </RowCont>
          <RowCont content="space-between">
            <SharedTxt text="수입/지출" size="17px" />
            <SharedTxt
              text={item.incomeExpend?.incomeTrue ? "수입" : "지출"}
              size="20px"
            />
          </RowCont>
          <RowCont content="space-between">
            <SharedTxt text="결제유형" size="17px" />
            <SharedTxt
              text={
                !item.incomeExpend?.paymentType
                  ? "미작성"
                  : item.incomeExpend?.paymentType + ""
              }
              size="20px"
            />
          </RowCont>
          <RowCont content="space-between">
            <SharedTxt text="계정과목" size="17px" />
            <SharedTxt
              text={
                !item.incomeExpend?.accountCode
                  ? "미기입"
                  : item.incomeExpend?.accountCode + ""
              }
              size="20px"
            />
          </RowCont>
          <RowCont content="space-between">
            <SharedTxt text="거래설명" size="17px" />
            <SharedTxt
              text={
                !item.incomeExpend?.businessDesc
                  ? "미작성"
                  : item.incomeExpend?.businessDesc + ""
              }
              size="20px"
            />
          </RowCont>

          <RowCont content="space-between">
            <SharedTxt text="결제진행" size="17px" />
            <SharedTxt
              text={
                item.incomeExpend?.paymentsDone === TPaymentSwitch.Paid
                  ? "지불됨"
                  : item.incomeExpend?.paymentsDone === TPaymentSwitch.Nonpaid
                  ? "비지불"
                  : "대기중"
              }
              size="20px"
            />
          </RowCont>
        </View>
      </ScrollView>
      <View style={{gap: 10}}>
        <SharedBtn text="수정" onSubmit={() => setEditMode(true)} />
        <SharedBtn text="닫기" onSubmit={() => setEditProductModal(null)} />
      </View>
    </>
  );
}
