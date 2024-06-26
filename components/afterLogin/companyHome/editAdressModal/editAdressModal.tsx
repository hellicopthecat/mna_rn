import SharedLayoutCont from "@/components/shared/SharedLayoutCont";
import SharedTxt from "@/components/shared/SharedTxt";
import {useModalState} from "@/store/modalState";
import {Modal, SafeAreaView} from "react-native";

export default function EditAdressModal() {
  const {editAdressModal, setEditAdressModal} = useModalState();
  return (
    <Modal visible={editAdressModal} animationType="slide">
      <SharedLayoutCont>
        <SafeAreaView>
          <SharedTxt text="hoho" />
        </SafeAreaView>
      </SharedLayoutCont>
    </Modal>
  );
}
