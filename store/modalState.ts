import {create} from "zustand";
interface IModalState {
  editUserModal: boolean;
  createCompanyModal: boolean;
  setEditUserModal: () => void;
  setCreateCompany: () => void;
}
export const useModalState = create<IModalState>((set) => ({
  editUserModal: false,
  createCompanyModal: false,
  setEditUserModal: () =>
    set((state) => ({editUserModal: !state.editUserModal})),
  setCreateCompany: () =>
    set((state) => ({createCompanyModal: !state.createCompanyModal})),
}));
