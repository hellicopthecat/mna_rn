import {Product} from "@/libs/__generated__/graphql";
import {
  ProductCardCont,
  ProductCardLeft,
  ProductCardMiddle,
  ProductCardRight,
} from "./productInfo.style";
import SharedTxt from "@/components/shared/SharedTxt";
import Avatar from "@/components/shared/Avatar";
import RowCont from "@/components/shared/RowCont";
import {View} from "react-native";

export default function ProductCard({item}: {item: Product}) {
  return (
    <ProductCardCont>
      <ProductCardLeft>
        <Avatar radius="0" width="100%" height="100%" />
      </ProductCardLeft>
      <ProductCardMiddle>
        <View style={{gap: 3}}>
          <SharedTxt text="상품아이디" color="gray" />
          <SharedTxt
            text={item.itemProductId}
            color="black"
            size="20px"
            bold={700}
          />
        </View>
        <RowCont gap="3px">
          <SharedTxt text="상품명" color="gray" />
          <SharedTxt text={item.itemName} color="black" />
        </RowCont>
        <RowCont gap="3px">
          <SharedTxt text="상품수" color="gray" />
          <SharedTxt text={item.itemCount + ""} color="black" />
        </RowCont>
        <RowCont gap="3px">
          <SharedTxt text="상품가격" color="gray" />
          <SharedTxt text={item.itemPrice + ""} color="black" />
        </RowCont>
      </ProductCardMiddle>
      <ProductCardRight $color={item.incomeExpend.paymentsDone}>
        {item.incomeExpend.paymentsDone === "WAIT" && (
          <SharedTxt text={"결제대기중"} color="black" size="13px" />
        )}
        {item.incomeExpend.paymentsDone === "PAID" && (
          <SharedTxt text={"결제됨"} color="black" size="13px" />
        )}
        {item.incomeExpend.paymentsDone === "NONPAID" && (
          <SharedTxt text={"비결제"} color="black" size="13px" />
        )}
      </ProductCardRight>
    </ProductCardCont>
  );
}
