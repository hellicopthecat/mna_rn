import {create} from "zustand";
interface IModalState {
  editUserModal: boolean;
  createCompanyModal: boolean;
  editAssets: number | null;
  iNeModal: boolean;
  createProductModal: boolean;
  registWorker: boolean;
  workerModal: number | null;
  setEditUserModal: () => void;
  setCreateCompany: () => void;
  setEditAssetsModal: (id: number | null) => void;
  setINEModal: () => void;
  setCreateProductModal: () => void;
  setRegistWorker: () => void;
  setWorkerModal: (id: number | null) => void;
}
export const useModalState = create<IModalState>((set) => ({
  editUserModal: false,
  createCompanyModal: false,
  editAssets: null,
  iNeModal: false,
  createProductModal: false,
  registWorker: false,
  workerModal: null,
  setEditUserModal: () =>
    set((state) => ({editUserModal: !state.editUserModal})),
  setCreateCompany: () =>
    set((state) => ({createCompanyModal: !state.createCompanyModal})),
  setEditAssetsModal: (id) => set(() => ({editAssets: id})),
  setINEModal: () => set((state) => ({iNeModal: !state.iNeModal})),
  setCreateProductModal: () =>
    set((state) => ({createProductModal: !state.createProductModal})),
  setRegistWorker: () => set((state) => ({registWorker: !state.registWorker})),
  setWorkerModal: (id) => set((state) => ({workerModal: id})),
}));
