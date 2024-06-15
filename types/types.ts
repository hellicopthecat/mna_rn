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
