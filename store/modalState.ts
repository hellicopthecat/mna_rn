import {create} from "zustand";
interface IModalState {
  editUserModal: boolean;
  createCompanyModal: boolean;
  editAssets: number | null;
  setEditUserModal: () => void;
  setCreateCompany: () => void;
  setEditAssetsModal: (id: number | null) => void;
}
export const useModalState = create<IModalState>((set) => ({
  editUserModal: false,
  createCompanyModal: false,
  editAssets: null,
  setEditUserModal: () =>
    set((state) => ({editUserModal: !state.editUserModal})),
  setCreateCompany: () =>
    set((state) => ({createCompanyModal: !state.createCompanyModal})),
  setEditAssetsModal: (id) => set(() => ({editAssets: id})),
}));
