import SharedBtn from "@/components/shared/SharedBtn";
import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import {useModalState} from "@/store/modalState";
import {IProductProps} from "@/types/types";
import {useState} from "react";
import {Modal, SafeAreaView, View} from "react-native";
import BeforeEditProduct from "./beforeEditProduct";
import AfterEditProduct from "./afterEditProduct";

export default function EditProductModal({item}: IProductProps) {
  const {editMode, editProductModal, setEditProductModal} = useModalState();
  return (
    <Modal visible={editProductModal === item.id} animationType="slide">
      <SharedLayoutCont>
        <SafeAreaView style={{flex: 1, justifyContent: "space-between"}}>
          <SharedTxt
            text="상품정보"
            size="20px"
            bold={700}
            align="center"
            style={{paddingVertical: 20}}
          />
          {!editMode && <BeforeEditProduct item={item} />}
          {editMode && <AfterEditProduct item={item} />}
        </SafeAreaView>
      </SharedLayoutCont>
    </Modal>
  );
}
