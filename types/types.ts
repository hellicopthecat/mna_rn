import {TPaymentSwitch} from "@/libs/__generated__/graphql";

export interface ILoginProps {
  username?: string;
  email?: string;
  password: string;
}
export interface ICreateUserProps {
  username: string;
  email: string;
  password: string;
  passwordCheck?: string;
  phone: string;
  firstName?: string;
  lastName?: string;
}

export interface IEditUserProps {
  userId: string;
  phone: string;
  avatar: string;
  lastName: string;
  firstName: string;
  password: string;
}

export interface ICreateAssetProps {
  inNoutId: string;
  enLId: string;
  enLName: string;
  enLType: string;
  current: boolean;
  assests: boolean;
  value: number;
  enLDesc?: string;
}

export interface IEditAssetProps {
  editEnLId?: number;
  enLId: string;
  enLName?: string;
  enLType?: string;
  enLDesc?: string;
  current?: boolean;
  assests?: boolean;
  value?: number;
}
export interface ICreateInExProps {
  inNoutId: number;
  incomeTrue: boolean;
  infoSubtitle: string;
  money: number;
  businessDate: string;
  paymentType: string;
  accountCode: string;
  businessDesc: string;
  paymentsDone: TPaymentSwitch;
  enLName: string;
  enLType: string;
  enLDesc: string;
  current: boolean;
  assests: boolean;
}

export interface ICreateProductProps {
  inNoutId?: string;
  createProductId?: number;
  itemProductId: string;
  itemName: string;
  itemModelName?: string;
  itemPhoto?: string;
  itemType?: string;
  itemPrice?: number;
  itemCount?: number;
  itemDesc?: string;
  incomeTrue?: boolean;
  paymentType?: string;
  accountCode?: string;
  businessDesc?: string;
  paymentsDone?: TPaymentSwitch;
}

export interface IRegistWorker {
  username: string;
  childCount: number;
  familyCount: number;
  preTaxMonthlySalary: number;
}
export interface ICreateVacation {
  userId?: number;
  companyId?: number;
  other: number;
  joinCompanyDate?: string;
}
export interface IEditVacation {
  vacationId?: number;
  other?: number;
  joinCompanyDate?: string;
}

export interface ICreateSalary {
  userId?: number;
  preTaxMonthlySalary: number;
  familyCount: number;
  childCount: number;
}
export interface IEditSalary {
  salaryId?: number;
  userId?: number;
  preTaxMonthlySalary: number;
  familyCount: number;
  childCount: number;
}
