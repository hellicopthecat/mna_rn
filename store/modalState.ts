import {create} from "zustand";
interface IModalState {
  editMode: boolean;
  editAdressModal: boolean;
  editUserModal: boolean;
  createCompanyModal: boolean;
  editAssets: number | null;
  iNeModal: boolean;
  detailIneModal: number | null;
  createProductModal: boolean;
  registWorker: boolean;
  workerModal: number | null;
  salaryModal: boolean;
  vacationModal: boolean;
  createSalaryModal: boolean;
  createVacationModal: boolean;
  editProductModal: number | null;
  setEditMode: (bool: boolean) => void;
  setEditAdressModal: () => void;
  setEditUserModal: () => void;
  setCreateCompany: () => void;
  setEditAssetsModal: (id: number | null) => void;
  setINEModal: () => void;
  setDetailINEModal: (id: number | null) => void;
  setCreateProductModal: () => void;
  setRegistWorker: () => void;
  setWorkerModal: (id: number | null) => void;
  setSalaryModal: () => void;
  setVacationModal: () => void;
  setCreateSalaryModal: () => void;
  setCreateVacationModal: () => void;
  setEditProductModal: (id: number | null) => void;
}
export const useModalState = create<IModalState>((set) => ({
  editMode: false,
  editAdressModal: false,
  editUserModal: false,
  createCompanyModal: false,
  editAssets: null,
  iNeModal: false,
  createProductModal: false,
  registWorker: false,
  workerModal: null,
  salaryModal: false,
  vacationModal: false,
  createSalaryModal: false,
  createVacationModal: false,
  detailIneModal: null,
  editProductModal: null,
  setEditMode: (bool) => set((state) => ({editMode: bool})),
  setEditAdressModal: () =>
    set((state) => ({editAdressModal: !state.editAdressModal})),
  setEditUserModal: () =>
    set((state) => ({editUserModal: !state.editUserModal})),
  setCreateCompany: () =>
    set((state) => ({createCompanyModal: !state.createCompanyModal})),
  setEditAssetsModal: (id) => set(() => ({editAssets: id})),
  setINEModal: () => set((state) => ({iNeModal: !state.iNeModal})),
  setDetailINEModal: (id) => set(() => ({detailIneModal: id})),
  setCreateProductModal: () =>
    set((state) => ({createProductModal: !state.createProductModal})),
  setRegistWorker: () => set((state) => ({registWorker: !state.registWorker})),
  setWorkerModal: (id) => set((state) => ({workerModal: id})),
  setSalaryModal: () => set((state) => ({salaryModal: !state.salaryModal})),
  setVacationModal: () =>
    set((state) => ({vacationModal: !state.vacationModal})),
  setCreateSalaryModal: () =>
    set((state) => ({createSalaryModal: !state.createSalaryModal})),
  setCreateVacationModal: () =>
    set((state) => ({createVacationModal: !state.createVacationModal})),
  setEditProductModal: (id) => set((state) => ({editProductModal: id})),
}));
