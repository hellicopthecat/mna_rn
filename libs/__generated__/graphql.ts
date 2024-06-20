/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Company = {
  __typename?: 'Company';
  companyAdress?: Maybe<CompanyAdress>;
  companyLogo?: Maybe<Scalars['String']['output']>;
  companyManager: Array<Maybe<User>>;
  companyName: Scalars['String']['output'];
  companyOwner: User;
  companyProduct?: Maybe<Array<Maybe<Product>>>;
  companyWorker?: Maybe<Array<Maybe<User>>>;
  connectedCompany?: Maybe<Array<Maybe<Company>>>;
  connectedCompanyCount: Scalars['Int']['output'];
  connectingCompany?: Maybe<Array<Maybe<Company>>>;
  connectingCompanyCount: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  inNout: InNout;
  isManager: Scalars['Boolean']['output'];
  isOwned: Scalars['Boolean']['output'];
  updateAt: Scalars['String']['output'];
  workerSalary?: Maybe<Array<Maybe<Salary>>>;
  workerVacation?: Maybe<Array<Maybe<Vacation>>>;
};

export type CompanyAdress = {
  __typename?: 'CompanyAdress';
  adressNum?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  restAdress?: Maybe<Scalars['String']['output']>;
  streetAdress?: Maybe<Scalars['String']['output']>;
  updateAt: Scalars['String']['output'];
};

export type EquityLiabilities = {
  __typename?: 'EquityLiabilities';
  assests: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  current: Scalars['Boolean']['output'];
  enLDesc?: Maybe<Scalars['String']['output']>;
  enLId: Scalars['String']['output'];
  enLName: Scalars['String']['output'];
  enLType: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  inNoutId: Scalars['Int']['output'];
  updateAt: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type InNout = {
  __typename?: 'InNout';
  accountDesc?: Maybe<Scalars['String']['output']>;
  accountName: Scalars['String']['output'];
  accountNum?: Maybe<Scalars['String']['output']>;
  budget: Scalars['Int']['output'];
  capital: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  currentAssets?: Maybe<Scalars['Int']['output']>;
  currentAssetsDesc?: Maybe<Array<Maybe<EquityLiabilities>>>;
  currentLiabilities?: Maybe<Scalars['Int']['output']>;
  currentLiabilitiesDesc?: Maybe<Array<Maybe<EquityLiabilities>>>;
  debtRatio: Scalars['Float']['output'];
  equityRatio: Scalars['Float']['output'];
  expendModel?: Maybe<Array<Maybe<IncomeExpend>>>;
  expendMoney?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  incomeModel?: Maybe<Array<Maybe<IncomeExpend>>>;
  incomeMoney?: Maybe<Scalars['Int']['output']>;
  liabilities: Scalars['Int']['output'];
  netAssets: Scalars['Int']['output'];
  netIncome: Scalars['Int']['output'];
  nonCurrentAssets?: Maybe<Scalars['Int']['output']>;
  nonCurrentAssetsDesc?: Maybe<Array<Maybe<EquityLiabilities>>>;
  nonCurrentLiabilities?: Maybe<Scalars['Int']['output']>;
  nonCurrentLiabilitiesDesc?: Maybe<Array<Maybe<EquityLiabilities>>>;
  profitMargin: Scalars['Float']['output'];
  roe: Scalars['Float']['output'];
  totalAssets: Scalars['Int']['output'];
  totalAssetsDesc?: Maybe<Array<Maybe<EquityLiabilities>>>;
  totalExpenses: Scalars['Int']['output'];
  totalRevenue: Scalars['Int']['output'];
  updateAt: Scalars['String']['output'];
  waitExpendModel?: Maybe<Array<Maybe<IncomeExpend>>>;
  waitExpendMoney?: Maybe<Scalars['Int']['output']>;
  waitIncomeModel?: Maybe<Array<Maybe<IncomeExpend>>>;
  waitIncomeMoney?: Maybe<Scalars['Int']['output']>;
};

export type IncomeExpend = {
  __typename?: 'IncomeExpend';
  accountCode?: Maybe<Scalars['String']['output']>;
  businessDate?: Maybe<Scalars['String']['output']>;
  businessDesc?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  inNout?: Maybe<InNout>;
  inNoutId?: Maybe<Scalars['Int']['output']>;
  incomeTrue: Scalars['Boolean']['output'];
  infoSubtitle: Scalars['String']['output'];
  money: Scalars['Int']['output'];
  paymentType?: Maybe<Scalars['String']['output']>;
  paymentsDone: TPaymentSwitch;
  productId?: Maybe<Scalars['Int']['output']>;
  productItem?: Maybe<Product>;
  updateAt: Scalars['String']['output'];
};

export type LoginResultResponse = {
  __typename?: 'LoginResultResponse';
  errorMsg?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  cancelRegistWorker: ResultResponse;
  connectCompany: ResultResponse;
  createCompany: ResultResponse;
  createEnL: ResultResponse;
  createInEx: ResultResponse;
  createProduct: ResultResponse;
  createSalary: ResultResponse;
  createUser: ResultResponse;
  createVacation: ResultResponse;
  createVacationDesc: ResultResponse;
  deleteCompany: ResultResponse;
  deleteEnL: ResultResponse;
  deleteManageAuth: ResultResponse;
  deleteProduct: ResultResponse;
  deleteUser: ResultResponse;
  disconnectCompany: ResultResponse;
  editCompanyAdress: ResultResponse;
  editEnL: ResultResponse;
  editInNout: ResultResponse;
  editProduct: ResultResponse;
  editSalary: ResultResponse;
  editUser: ResultResponse;
  editVacation: ResultResponse;
  loginUser: LoginResultResponse;
  managerAuth: ResultResponse;
  registWorker: ResultResponse;
  resetVacationDesc: ResultResponse;
  updateInEx: ResultResponse;
};


export type MutationCancelRegistWorkerArgs = {
  companyName: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationConnectCompanyArgs = {
  companyId: Scalars['Int']['input'];
  targetCompanyId: Scalars['Int']['input'];
};


export type MutationCreateCompanyArgs = {
  companyName: Scalars['String']['input'];
};


export type MutationCreateEnLArgs = {
  assests: Scalars['Boolean']['input'];
  current: Scalars['Boolean']['input'];
  enLDesc?: InputMaybe<Scalars['String']['input']>;
  enLId: Scalars['String']['input'];
  enLName: Scalars['String']['input'];
  enLType: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  value: Scalars['Int']['input'];
};


export type MutationCreateInExArgs = {
  accountCode?: InputMaybe<Scalars['String']['input']>;
  assests?: InputMaybe<Scalars['Boolean']['input']>;
  businessDate: Scalars['String']['input'];
  businessDesc?: InputMaybe<Scalars['String']['input']>;
  current?: InputMaybe<Scalars['Boolean']['input']>;
  enLDesc?: InputMaybe<Scalars['String']['input']>;
  enLName: Scalars['String']['input'];
  enLType: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  incomeTrue: Scalars['Boolean']['input'];
  infoSubtitle: Scalars['String']['input'];
  money: Scalars['Int']['input'];
  paymentType?: InputMaybe<Scalars['String']['input']>;
  paymentsDone?: InputMaybe<TPaymentSwitch>;
};


export type MutationCreateProductArgs = {
  accountCode?: InputMaybe<Scalars['String']['input']>;
  businessDesc?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  incomeTrue?: InputMaybe<Scalars['Boolean']['input']>;
  itemCount?: InputMaybe<Scalars['Int']['input']>;
  itemDesc?: InputMaybe<Scalars['String']['input']>;
  itemModelName?: InputMaybe<Scalars['String']['input']>;
  itemName: Scalars['String']['input'];
  itemPhoto?: InputMaybe<Scalars['String']['input']>;
  itemPrice?: InputMaybe<Scalars['Int']['input']>;
  itemProductId: Scalars['String']['input'];
  itemType?: InputMaybe<Scalars['String']['input']>;
  paymentType?: InputMaybe<Scalars['String']['input']>;
  paymentsDone?: InputMaybe<TPaymentSwitch>;
};


export type MutationCreateSalaryArgs = {
  childCount?: InputMaybe<Scalars['Int']['input']>;
  companyName: Scalars['String']['input'];
  familyCount?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  preTaxMonthlySalary?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};


export type MutationCreateVacationArgs = {
  id: Scalars['Int']['input'];
  joinCompanyDate?: InputMaybe<Scalars['String']['input']>;
  other?: InputMaybe<Scalars['Int']['input']>;
  username: Scalars['String']['input'];
};


export type MutationCreateVacationDescArgs = {
  day: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  vacationType: TVacation;
};


export type MutationDeleteCompanyArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDeleteEnLArgs = {
  enLId: Scalars['String']['input'];
};


export type MutationDeleteManageAuthArgs = {
  companyName: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationDeleteProductArgs = {
  companyId: Scalars['Int']['input'];
  productId: Scalars['Int']['input'];
};


export type MutationDeleteUserArgs = {
  password: Scalars['String']['input'];
};


export type MutationDisconnectCompanyArgs = {
  companyId: Scalars['Int']['input'];
  targetCompanyId: Scalars['Int']['input'];
};


export type MutationEditCompanyAdressArgs = {
  adressNum?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  restAdress?: InputMaybe<Scalars['String']['input']>;
  streetAdress?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditEnLArgs = {
  assests?: InputMaybe<Scalars['Boolean']['input']>;
  current?: InputMaybe<Scalars['Boolean']['input']>;
  enLDesc?: InputMaybe<Scalars['String']['input']>;
  enLId: Scalars['String']['input'];
  enLName?: InputMaybe<Scalars['String']['input']>;
  enLType?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationEditInNoutArgs = {
  accountDesc?: InputMaybe<Scalars['String']['input']>;
  accountName?: InputMaybe<Scalars['String']['input']>;
  accountNum?: InputMaybe<Scalars['String']['input']>;
  budget?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationEditProductArgs = {
  accountCode?: InputMaybe<Scalars['String']['input']>;
  businessDesc?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  incomeTrue?: InputMaybe<Scalars['Boolean']['input']>;
  itemCount?: InputMaybe<Scalars['Int']['input']>;
  itemDesc?: InputMaybe<Scalars['String']['input']>;
  itemModelName?: InputMaybe<Scalars['String']['input']>;
  itemName?: InputMaybe<Scalars['String']['input']>;
  itemPhoto?: InputMaybe<Scalars['String']['input']>;
  itemPrice?: InputMaybe<Scalars['Int']['input']>;
  itemProductId: Scalars['String']['input'];
  itemType?: InputMaybe<Scalars['String']['input']>;
  paymentType?: InputMaybe<Scalars['String']['input']>;
  paymentsDone?: InputMaybe<TPaymentSwitch>;
};


export type MutationEditSalaryArgs = {
  childCount?: InputMaybe<Scalars['Int']['input']>;
  companyName: Scalars['String']['input'];
  familyCount?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  preTaxMonthlySalary?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationEditUserArgs = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditVacationArgs = {
  companyId: Scalars['Int']['input'];
  joinCompanyDate?: InputMaybe<Scalars['String']['input']>;
  other?: InputMaybe<Scalars['Int']['input']>;
  vacationId: Scalars['Int']['input'];
};


export type MutationLoginUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};


export type MutationManagerAuthArgs = {
  companyName: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationRegistWorkerArgs = {
  childCount: Scalars['Int']['input'];
  familyCount: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
  preTaxMonthlySalary: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};


export type MutationResetVacationDescArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateInExArgs = {
  companyName: Scalars['String']['input'];
  incomeTrue?: InputMaybe<Scalars['Boolean']['input']>;
  infoSubtitle: Scalars['String']['input'];
  money?: InputMaybe<Scalars['Int']['input']>;
  paymentsDone?: InputMaybe<TPaymentSwitch>;
};

export type Product = {
  __typename?: 'Product';
  company: Company;
  companyId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  incomeExpend: IncomeExpend;
  incomeExpendTypeId: Scalars['Int']['output'];
  itemCount?: Maybe<Scalars['Int']['output']>;
  itemDesc?: Maybe<Scalars['String']['output']>;
  itemModelName?: Maybe<Scalars['String']['output']>;
  itemName: Scalars['String']['output'];
  itemPhoto?: Maybe<Scalars['String']['output']>;
  itemPrice?: Maybe<Scalars['Int']['output']>;
  itemProductId: Scalars['String']['output'];
  itemType?: Maybe<Scalars['String']['output']>;
  updateAt: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  searchAdress?: Maybe<Array<Maybe<CompanyAdress>>>;
  searchByCompanyName?: Maybe<Array<Maybe<Company>>>;
  searchCompany?: Maybe<Company>;
  searchProduct?: Maybe<Array<Maybe<Product>>>;
  searchUsers: Array<Maybe<User>>;
  seeCompanyProduct?: Maybe<Array<Maybe<Product>>>;
  seeCompanyWorker?: Maybe<Array<Maybe<User>>>;
  seeEnL: EquityLiabilities;
  seeInNout: InNout;
  seeMyprofile: User;
  seeProduct: Product;
  seeSalary: Salary;
  seeUserProfile: User;
  seeVacation: Vacation;
};


export type QuerySearchAdressArgs = {
  companyName: Scalars['String']['input'];
};


export type QuerySearchByCompanyNameArgs = {
  companyName: Scalars['String']['input'];
};


export type QuerySearchCompanyArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySearchProductArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  itemModelName?: InputMaybe<Scalars['String']['input']>;
  itemName?: InputMaybe<Scalars['String']['input']>;
  itemProductId?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearchUsersArgs = {
  username: Scalars['String']['input'];
};


export type QuerySeeCompanyProductArgs = {
  companyName: Scalars['String']['input'];
};


export type QuerySeeCompanyWorkerArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySeeEnLArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySeeInNoutArgs = {
  companyName: Scalars['String']['input'];
};


export type QuerySeeProductArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySeeSalaryArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySeeUserProfileArgs = {
  username: Scalars['String']['input'];
};


export type QuerySeeVacationArgs = {
  id: Scalars['Int']['input'];
};

export type ResultResponse = {
  __typename?: 'ResultResponse';
  errorMsg?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  subId?: Maybe<Scalars['Int']['output']>;
};

export type Salary = {
  __typename?: 'Salary';
  annualSalary?: Maybe<Scalars['Int']['output']>;
  childCount?: Maybe<Scalars['Int']['output']>;
  childTax?: Maybe<Scalars['Int']['output']>;
  company: Company;
  createdAt: Scalars['String']['output'];
  earnIncomeAmount?: Maybe<Scalars['Int']['output']>;
  earnIncomeDedution?: Maybe<Scalars['Int']['output']>;
  earnIncomeTaxCredit?: Maybe<Scalars['Int']['output']>;
  familyCount?: Maybe<Scalars['Int']['output']>;
  familyDedution?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  pensionInsuranceDedution?: Maybe<Scalars['Int']['output']>;
  preTaxMonthlySalary?: Maybe<Scalars['Int']['output']>;
  simplifiedTax?: Maybe<Scalars['Int']['output']>;
  specialIncomeDedution?: Maybe<Scalars['Int']['output']>;
  taxBase?: Maybe<Scalars['Int']['output']>;
  taxCalculate?: Maybe<Scalars['Int']['output']>;
  taxDetermined?: Maybe<Scalars['Int']['output']>;
  updateAt: Scalars['String']['output'];
  user: User;
};

export enum TPaymentSwitch {
  Nonpaid = 'NONPAID',
  Paid = 'PAID',
  Wait = 'WAIT'
}

export enum TVacation {
  Annual = 'ANNUAL',
  Half = 'HALF',
  Nonpaid = 'NONPAID',
  Other = 'OTHER',
  Othersick = 'OTHERSICK',
  Sick = 'SICK'
}

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  hasCompanyCount: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  isOnVacation?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  manageCompany?: Maybe<Array<Maybe<Company>>>;
  manageCompanyCount: Scalars['Int']['output'];
  ownCompany?: Maybe<Array<Maybe<Company>>>;
  phone?: Maybe<Scalars['String']['output']>;
  salary?: Maybe<Array<Maybe<Salary>>>;
  updateAt: Scalars['String']['output'];
  username: Scalars['String']['output'];
  vacation?: Maybe<Array<Maybe<Vacation>>>;
};

export type Vacation = {
  __typename?: 'Vacation';
  annual?: Maybe<Scalars['Float']['output']>;
  appearence?: Maybe<Scalars['Int']['output']>;
  company: Company;
  companyId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Array<Maybe<VacationDesc>>>;
  id: Scalars['Int']['output'];
  joinCompanyDate: Scalars['String']['output'];
  other?: Maybe<Scalars['Float']['output']>;
  restAnnualVacation?: Maybe<Scalars['Float']['output']>;
  restOtherVacation?: Maybe<Scalars['Float']['output']>;
  totalVacation?: Maybe<Scalars['Float']['output']>;
  updateAt: Scalars['String']['output'];
  user: User;
};

export type VacationDesc = {
  __typename?: 'VacationDesc';
  createdAt: Scalars['String']['output'];
  day: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updateAt: Scalars['String']['output'];
  vacationType: TVacation;
};

export type MyCompanyQueryVariables = Exact<{ [key: string]: never; }>;


export type MyCompanyQuery = { __typename?: 'Query', seeMyprofile: { __typename?: 'User', id: string, hasCompanyCount: number, ownCompany?: Array<{ __typename?: 'Company', id: string, companyName: string, isOwned: boolean, isManager: boolean, inNout: { __typename?: 'InNout', totalAssets: number }, companyWorker?: Array<{ __typename?: 'User', id: string } | null> | null } | null> | null } };

export type ConnectingCompanyQueryVariables = Exact<{
  searchCompanyId: Scalars['Int']['input'];
}>;


export type ConnectingCompanyQuery = { __typename?: 'Query', searchCompany?: { __typename?: 'Company', connectingCompanyCount: number, connectingCompany?: Array<(
      { __typename?: 'Company' }
      & { ' $fragmentRefs'?: { 'CompanyFragFragment': CompanyFragFragment } }
    ) | null> | null } | null };

export type ConnectedCompanyQueryVariables = Exact<{
  searchCompanyId: Scalars['Int']['input'];
}>;


export type ConnectedCompanyQuery = { __typename?: 'Query', searchCompany?: { __typename?: 'Company', connectedCompanyCount: number, connectedCompany?: Array<(
      { __typename?: 'Company' }
      & { ' $fragmentRefs'?: { 'CompanyFragFragment': CompanyFragFragment } }
    ) | null> | null } | null };

export type CurrentAssetsQueryVariables = Exact<{
  searchCompanyId: Scalars['Int']['input'];
}>;


export type CurrentAssetsQuery = { __typename?: 'Query', searchCompany?: { __typename?: 'Company', inNout: { __typename?: 'InNout', id: number, currentAssets?: number | null, nonCurrentAssets?: number | null, currentAssetsDesc?: Array<(
        { __typename?: 'EquityLiabilities' }
        & { ' $fragmentRefs'?: { 'EquityLiabilitiesFragFragment': EquityLiabilitiesFragFragment } }
      ) | null> | null, nonCurrentAssetsDesc?: Array<(
        { __typename?: 'EquityLiabilities' }
        & { ' $fragmentRefs'?: { 'EquityLiabilitiesFragFragment': EquityLiabilitiesFragFragment } }
      ) | null> | null, totalAssetsDesc?: Array<(
        { __typename?: 'EquityLiabilities' }
        & { ' $fragmentRefs'?: { 'EquityLiabilitiesFragFragment': EquityLiabilitiesFragFragment } }
      ) | null> | null } } | null };

export type ExpendModelQueryVariables = Exact<{
  searchCompanyId: Scalars['Int']['input'];
}>;


export type ExpendModelQuery = { __typename?: 'Query', searchCompany?: { __typename?: 'Company', inNout: { __typename?: 'InNout', id: number, expendMoney?: number | null, waitExpendMoney?: number | null, expendModel?: Array<(
        { __typename?: 'IncomeExpend' }
        & { ' $fragmentRefs'?: { 'IncomeExpendFragFragment': IncomeExpendFragFragment } }
      ) | null> | null, waitExpendModel?: Array<(
        { __typename?: 'IncomeExpend' }
        & { ' $fragmentRefs'?: { 'IncomeExpendFragFragment': IncomeExpendFragFragment } }
      ) | null> | null } } | null };

export type IncomeModelsQueryVariables = Exact<{
  searchCompanyId: Scalars['Int']['input'];
}>;


export type IncomeModelsQuery = { __typename?: 'Query', searchCompany?: { __typename?: 'Company', inNout: { __typename?: 'InNout', id: number, incomeMoney?: number | null, waitIncomeMoney?: number | null, incomeModel?: Array<(
        { __typename?: 'IncomeExpend' }
        & { ' $fragmentRefs'?: { 'IncomeExpendFragFragment': IncomeExpendFragFragment } }
      ) | null> | null, waitIncomeModel?: Array<(
        { __typename?: 'IncomeExpend' }
        & { ' $fragmentRefs'?: { 'IncomeExpendFragFragment': IncomeExpendFragFragment } }
      ) | null> | null } } | null };

export type TotalAssetsQueryVariables = Exact<{
  searchCompanyId: Scalars['Int']['input'];
}>;


export type TotalAssetsQuery = { __typename?: 'Query', searchCompany?: { __typename?: 'Company', inNout: { __typename?: 'InNout', id: number, totalAssets: number, incomeMoney?: number | null, waitIncomeMoney?: number | null, expendMoney?: number | null, waitExpendMoney?: number | null, totalAssetsDesc?: Array<(
        { __typename?: 'EquityLiabilities' }
        & { ' $fragmentRefs'?: { 'EquityLiabilitiesFragFragment': EquityLiabilitiesFragFragment } }
      ) | null> | null, currentAssetsDesc?: Array<(
        { __typename?: 'EquityLiabilities' }
        & { ' $fragmentRefs'?: { 'EquityLiabilitiesFragFragment': EquityLiabilitiesFragFragment } }
      ) | null> | null, nonCurrentAssetsDesc?: Array<(
        { __typename?: 'EquityLiabilities' }
        & { ' $fragmentRefs'?: { 'EquityLiabilitiesFragFragment': EquityLiabilitiesFragFragment } }
      ) | null> | null, currentLiabilitiesDesc?: Array<(
        { __typename?: 'EquityLiabilities' }
        & { ' $fragmentRefs'?: { 'EquityLiabilitiesFragFragment': EquityLiabilitiesFragFragment } }
      ) | null> | null, nonCurrentLiabilitiesDesc?: Array<(
        { __typename?: 'EquityLiabilities' }
        & { ' $fragmentRefs'?: { 'EquityLiabilitiesFragFragment': EquityLiabilitiesFragFragment } }
      ) | null> | null, incomeModel?: Array<(
        { __typename?: 'IncomeExpend' }
        & { ' $fragmentRefs'?: { 'IncomeExpendFragFragment': IncomeExpendFragFragment } }
      ) | null> | null, waitIncomeModel?: Array<(
        { __typename?: 'IncomeExpend' }
        & { ' $fragmentRefs'?: { 'IncomeExpendFragFragment': IncomeExpendFragFragment } }
      ) | null> | null, expendModel?: Array<(
        { __typename?: 'IncomeExpend' }
        & { ' $fragmentRefs'?: { 'IncomeExpendFragFragment': IncomeExpendFragFragment } }
      ) | null> | null, waitExpendModel?: Array<(
        { __typename?: 'IncomeExpend' }
        & { ' $fragmentRefs'?: { 'IncomeExpendFragFragment': IncomeExpendFragFragment } }
      ) | null> | null } } | null };

export type CurrentLiabilityQueryVariables = Exact<{
  searchCompanyId: Scalars['Int']['input'];
}>;


export type CurrentLiabilityQuery = { __typename?: 'Query', searchCompany?: { __typename?: 'Company', inNout: { __typename?: 'InNout', id: number, currentLiabilities?: number | null, nonCurrentLiabilities?: number | null, currentLiabilitiesDesc?: Array<(
        { __typename?: 'EquityLiabilities' }
        & { ' $fragmentRefs'?: { 'EquityLiabilitiesFragFragment': EquityLiabilitiesFragFragment } }
      ) | null> | null, nonCurrentLiabilitiesDesc?: Array<(
        { __typename?: 'EquityLiabilities' }
        & { ' $fragmentRefs'?: { 'EquityLiabilitiesFragFragment': EquityLiabilitiesFragFragment } }
      ) | null> | null, totalAssetsDesc?: Array<(
        { __typename?: 'EquityLiabilities' }
        & { ' $fragmentRefs'?: { 'EquityLiabilitiesFragFragment': EquityLiabilitiesFragFragment } }
      ) | null> | null } } | null };

export type SeeCompanyInNoutQueryVariables = Exact<{
  searchCompanyId: Scalars['Int']['input'];
}>;


export type SeeCompanyInNoutQuery = { __typename?: 'Query', searchCompany?: { __typename?: 'Company', id: string, companyName: string, inNout: (
      { __typename?: 'InNout' }
      & { ' $fragmentRefs'?: { 'CompanyInNoutFragFragment': CompanyInNoutFragFragment } }
    ) } | null };

export type CompanyProductsQueryVariables = Exact<{
  searchCompanyId: Scalars['Int']['input'];
}>;


export type CompanyProductsQuery = { __typename?: 'Query', searchCompany?: { __typename?: 'Company', companyProduct?: Array<(
      { __typename?: 'Product', incomeExpend: (
        { __typename?: 'IncomeExpend' }
        & { ' $fragmentRefs'?: { 'IncomeExpendFragFragment': IncomeExpendFragFragment } }
      ) }
      & { ' $fragmentRefs'?: { 'ProductFragFragment': ProductFragFragment } }
    ) | null> | null } | null };

export type SearchByCompanyNameQueryVariables = Exact<{
  companyName: Scalars['String']['input'];
}>;


export type SearchByCompanyNameQuery = { __typename?: 'Query', searchByCompanyName?: Array<{ __typename?: 'Company', id: string, companyName: string, companyOwner: { __typename?: 'User', id: string, username: string } } | null> | null };

export type CompanyWorkersQueryVariables = Exact<{
  searchCompanyId: Scalars['Int']['input'];
}>;


export type CompanyWorkersQuery = { __typename?: 'Query', searchCompany?: { __typename?: 'Company', companyWorker?: Array<{ __typename?: 'User', id: string, username: string, firstName?: string | null, lastName?: string | null, phone?: string | null, salary?: Array<(
        { __typename?: 'Salary' }
        & { ' $fragmentRefs'?: { 'SalaryFragFragment': SalaryFragFragment } }
      ) | null> | null, vacation?: Array<(
        { __typename?: 'Vacation' }
        & { ' $fragmentRefs'?: { 'VacationFragFragment': VacationFragFragment } }
      ) | null> | null } | null> | null } | null };

export type CreateAssetsMutationVariables = Exact<{
  createEnLId: Scalars['Int']['input'];
  enLId: Scalars['String']['input'];
  enLName: Scalars['String']['input'];
  enLType: Scalars['String']['input'];
  current: Scalars['Boolean']['input'];
  assests: Scalars['Boolean']['input'];
  value: Scalars['Int']['input'];
  enLDesc?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateAssetsMutation = { __typename?: 'Mutation', createEnL: { __typename?: 'ResultResponse', ok: boolean, id?: number | null, errorMsg?: string | null } };

export type CreateInExMutationVariables = Exact<{
  createInExId: Scalars['Int']['input'];
  incomeTrue: Scalars['Boolean']['input'];
  infoSubtitle: Scalars['String']['input'];
  money: Scalars['Int']['input'];
  businessDate: Scalars['String']['input'];
  paymentType?: InputMaybe<Scalars['String']['input']>;
  accountCode?: InputMaybe<Scalars['String']['input']>;
  businessDesc?: InputMaybe<Scalars['String']['input']>;
  paymentsDone?: InputMaybe<TPaymentSwitch>;
  enLName: Scalars['String']['input'];
  enLType: Scalars['String']['input'];
  enLDesc?: InputMaybe<Scalars['String']['input']>;
  current?: InputMaybe<Scalars['Boolean']['input']>;
  assests?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CreateInExMutation = { __typename?: 'Mutation', createInEx: { __typename?: 'ResultResponse', ok: boolean, id?: number | null, subId?: number | null, errorMsg?: string | null } };

export type CreateProductMutationVariables = Exact<{
  createProductId: Scalars['Int']['input'];
  itemProductId: Scalars['String']['input'];
  itemName: Scalars['String']['input'];
  itemModelName?: InputMaybe<Scalars['String']['input']>;
  itemPhoto?: InputMaybe<Scalars['String']['input']>;
  itemType?: InputMaybe<Scalars['String']['input']>;
  itemPrice?: InputMaybe<Scalars['Int']['input']>;
  itemCount?: InputMaybe<Scalars['Int']['input']>;
  itemDesc?: InputMaybe<Scalars['String']['input']>;
  incomeTrue?: InputMaybe<Scalars['Boolean']['input']>;
  paymentType?: InputMaybe<Scalars['String']['input']>;
  accountCode?: InputMaybe<Scalars['String']['input']>;
  businessDesc?: InputMaybe<Scalars['String']['input']>;
  paymentsDone?: InputMaybe<TPaymentSwitch>;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'ResultResponse', id?: number | null, ok: boolean, errorMsg?: string | null } };

export type DeleteEnLMutationVariables = Exact<{
  enLId: Scalars['String']['input'];
}>;


export type DeleteEnLMutation = { __typename?: 'Mutation', deleteEnL: { __typename?: 'ResultResponse', ok: boolean, errorMsg?: string | null } };

export type EditEnLMutationVariables = Exact<{
  editEnLId: Scalars['Int']['input'];
  enLId: Scalars['String']['input'];
  enLName?: InputMaybe<Scalars['String']['input']>;
  enLType?: InputMaybe<Scalars['String']['input']>;
  enLDesc?: InputMaybe<Scalars['String']['input']>;
  current?: InputMaybe<Scalars['Boolean']['input']>;
  assests?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
}>;


export type EditEnLMutation = { __typename?: 'Mutation', editEnL: { __typename?: 'ResultResponse', ok: boolean, errorMsg?: string | null } };

export type CreateCompanyMutationVariables = Exact<{
  companyName: Scalars['String']['input'];
}>;


export type CreateCompanyMutation = { __typename?: 'Mutation', createCompany: { __typename?: 'ResultResponse', ok: boolean, id?: number | null, errorMsg?: string | null } };

export type DeleteCompanyMutationVariables = Exact<{
  deleteCompanyId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type DeleteCompanyMutation = { __typename?: 'Mutation', deleteCompany: { __typename?: 'ResultResponse', ok: boolean, errorMsg?: string | null } };

export type EditUserMutationVariables = Exact<{
  phone?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
}>;


export type EditUserMutation = { __typename?: 'Mutation', editUser: { __typename?: 'ResultResponse', ok: boolean, errorMsg?: string | null } };

export type RegistWorkerMutationVariables = Exact<{
  registWorkerId: Scalars['Int']['input'];
  username: Scalars['String']['input'];
  childCount: Scalars['Int']['input'];
  familyCount: Scalars['Int']['input'];
  preTaxMonthlySalary: Scalars['Int']['input'];
}>;


export type RegistWorkerMutation = { __typename?: 'Mutation', registWorker: { __typename?: 'ResultResponse', ok: boolean, errorMsg?: string | null, id?: number | null, subId?: number | null } };

export type CreateUserMutationVariables = Exact<{
  username: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'ResultResponse', ok: boolean, errorMsg?: string | null } };

export type LoginUserMutationVariables = Exact<{
  password: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'LoginResultResponse', ok: boolean, token?: string | null, errorMsg?: string | null } };

export type SeeMyProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type SeeMyProfileQuery = { __typename?: 'Query', seeMyprofile: { __typename?: 'User', id: string, email: string, phone?: string | null, username: string, firstName?: string | null, lastName?: string | null, avatar?: string | null } };

export type CompanyAdressFragFragment = { __typename?: 'CompanyAdress', id: string, country?: string | null, city?: string | null, streetAdress?: string | null, restAdress?: string | null, adressNum?: string | null } & { ' $fragmentName'?: 'CompanyAdressFragFragment' };

export type CompanyFragFragment = { __typename?: 'Company', id: string, createdAt: string, updateAt: string, companyLogo?: string | null, companyName: string, isManager: boolean, isOwned: boolean } & { ' $fragmentName'?: 'CompanyFragFragment' };

export type EquityLiabilitiesFragFragment = { __typename?: 'EquityLiabilities', id: number, createdAt: string, updateAt: string, value: number, assests: boolean, current: boolean, enLDesc?: string | null, enLId: string, enLName: string, enLType: string, inNoutId: number } & { ' $fragmentName'?: 'EquityLiabilitiesFragFragment' };

export type CompanyInNoutFragFragment = { __typename?: 'InNout', id: number, budget: number, totalAssets: number, capital: number, liabilities: number, netAssets: number, netIncome: number, totalRevenue: number, totalExpenses: number, profitMargin: number, equityRatio: number, debtRatio: number, roe: number } & { ' $fragmentName'?: 'CompanyInNoutFragFragment' };

export type IncomeExpendFragFragment = { __typename?: 'IncomeExpend', id: number, createdAt: string, updateAt: string, incomeTrue: boolean, infoSubtitle: string, money: number, businessDate?: string | null, paymentType?: string | null, accountCode?: string | null, businessDesc?: string | null, paymentsDone: TPaymentSwitch } & { ' $fragmentName'?: 'IncomeExpendFragFragment' };

export type ProductFragFragment = { __typename?: 'Product', id: number, createdAt: string, updateAt: string, itemPhoto?: string | null, itemName: string, itemCount?: number | null, itemProductId: string, itemPrice?: number | null, itemModelName?: string | null, itemDesc?: string | null, incomeExpendTypeId: number, itemType?: string | null } & { ' $fragmentName'?: 'ProductFragFragment' };

export type SalaryFragFragment = { __typename?: 'Salary', id: number, createdAt: string, updateAt: string, preTaxMonthlySalary?: number | null, childCount?: number | null, annualSalary?: number | null, earnIncomeDedution?: number | null, earnIncomeAmount?: number | null, familyDedution?: number | null, pensionInsuranceDedution?: number | null, specialIncomeDedution?: number | null, taxBase?: number | null, taxCalculate?: number | null, taxDetermined?: number | null, earnIncomeTaxCredit?: number | null, simplifiedTax?: number | null, childTax?: number | null } & { ' $fragmentName'?: 'SalaryFragFragment' };

export type UserFragFragment = { __typename?: 'User', id: string, username: string, firstName?: string | null, lastName?: string | null, email: string, phone?: string | null, avatar?: string | null, isOnVacation?: boolean | null } & { ' $fragmentName'?: 'UserFragFragment' };

export type VacationFragFragment = { __typename?: 'Vacation', id: number, createdAt: string, updateAt: string, joinCompanyDate: string, appearence?: number | null, annual?: number | null, other?: number | null, restAnnualVacation?: number | null, restOtherVacation?: number | null, totalVacation?: number | null } & { ' $fragmentName'?: 'VacationFragFragment' };

export type VacationDescFragFragment = { __typename?: 'VacationDesc', id: number, createdAt: string, updateAt: string, vacationType: TVacation, day: number, description: string } & { ' $fragmentName'?: 'VacationDescFragFragment' };

export const CompanyAdressFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyAdressFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyAdress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"streetAdress"}},{"kind":"Field","name":{"kind":"Name","value":"restAdress"}},{"kind":"Field","name":{"kind":"Name","value":"adressNum"}}]}}]} as unknown as DocumentNode<CompanyAdressFragFragment, unknown>;
export const CompanyFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"companyLogo"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"isManager"}},{"kind":"Field","name":{"kind":"Name","value":"isOwned"}}]}}]} as unknown as DocumentNode<CompanyFragFragment, unknown>;
export const EquityLiabilitiesFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EquityLiabilitiesFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EquityLiabilities"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"assests"}},{"kind":"Field","name":{"kind":"Name","value":"current"}},{"kind":"Field","name":{"kind":"Name","value":"enLDesc"}},{"kind":"Field","name":{"kind":"Name","value":"enLId"}},{"kind":"Field","name":{"kind":"Name","value":"enLName"}},{"kind":"Field","name":{"kind":"Name","value":"enLType"}},{"kind":"Field","name":{"kind":"Name","value":"inNoutId"}}]}}]} as unknown as DocumentNode<EquityLiabilitiesFragFragment, unknown>;
export const CompanyInNoutFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyInNoutFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InNout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"budget"}},{"kind":"Field","name":{"kind":"Name","value":"totalAssets"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"liabilities"}},{"kind":"Field","name":{"kind":"Name","value":"netAssets"}},{"kind":"Field","name":{"kind":"Name","value":"netIncome"}},{"kind":"Field","name":{"kind":"Name","value":"totalRevenue"}},{"kind":"Field","name":{"kind":"Name","value":"totalExpenses"}},{"kind":"Field","name":{"kind":"Name","value":"profitMargin"}},{"kind":"Field","name":{"kind":"Name","value":"equityRatio"}},{"kind":"Field","name":{"kind":"Name","value":"debtRatio"}},{"kind":"Field","name":{"kind":"Name","value":"roe"}}]}}]} as unknown as DocumentNode<CompanyInNoutFragFragment, unknown>;
export const IncomeExpendFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IncomeExpendFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IncomeExpend"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"incomeTrue"}},{"kind":"Field","name":{"kind":"Name","value":"infoSubtitle"}},{"kind":"Field","name":{"kind":"Name","value":"money"}},{"kind":"Field","name":{"kind":"Name","value":"businessDate"}},{"kind":"Field","name":{"kind":"Name","value":"paymentType"}},{"kind":"Field","name":{"kind":"Name","value":"accountCode"}},{"kind":"Field","name":{"kind":"Name","value":"businessDesc"}},{"kind":"Field","name":{"kind":"Name","value":"paymentsDone"}}]}}]} as unknown as DocumentNode<IncomeExpendFragFragment, unknown>;
export const ProductFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"itemPhoto"}},{"kind":"Field","name":{"kind":"Name","value":"itemName"}},{"kind":"Field","name":{"kind":"Name","value":"itemCount"}},{"kind":"Field","name":{"kind":"Name","value":"itemProductId"}},{"kind":"Field","name":{"kind":"Name","value":"itemPrice"}},{"kind":"Field","name":{"kind":"Name","value":"itemModelName"}},{"kind":"Field","name":{"kind":"Name","value":"itemDesc"}},{"kind":"Field","name":{"kind":"Name","value":"incomeExpendTypeId"}},{"kind":"Field","name":{"kind":"Name","value":"itemType"}}]}}]} as unknown as DocumentNode<ProductFragFragment, unknown>;
export const SalaryFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SalaryFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Salary"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"preTaxMonthlySalary"}},{"kind":"Field","name":{"kind":"Name","value":"childCount"}},{"kind":"Field","name":{"kind":"Name","value":"annualSalary"}},{"kind":"Field","name":{"kind":"Name","value":"earnIncomeDedution"}},{"kind":"Field","name":{"kind":"Name","value":"earnIncomeAmount"}},{"kind":"Field","name":{"kind":"Name","value":"familyDedution"}},{"kind":"Field","name":{"kind":"Name","value":"pensionInsuranceDedution"}},{"kind":"Field","name":{"kind":"Name","value":"specialIncomeDedution"}},{"kind":"Field","name":{"kind":"Name","value":"taxBase"}},{"kind":"Field","name":{"kind":"Name","value":"taxCalculate"}},{"kind":"Field","name":{"kind":"Name","value":"taxDetermined"}},{"kind":"Field","name":{"kind":"Name","value":"earnIncomeTaxCredit"}},{"kind":"Field","name":{"kind":"Name","value":"simplifiedTax"}},{"kind":"Field","name":{"kind":"Name","value":"childTax"}}]}}]} as unknown as DocumentNode<SalaryFragFragment, unknown>;
export const UserFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"isOnVacation"}}]}}]} as unknown as DocumentNode<UserFragFragment, unknown>;
export const VacationFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VacationFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Vacation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"joinCompanyDate"}},{"kind":"Field","name":{"kind":"Name","value":"appearence"}},{"kind":"Field","name":{"kind":"Name","value":"annual"}},{"kind":"Field","name":{"kind":"Name","value":"other"}},{"kind":"Field","name":{"kind":"Name","value":"restAnnualVacation"}},{"kind":"Field","name":{"kind":"Name","value":"restOtherVacation"}},{"kind":"Field","name":{"kind":"Name","value":"totalVacation"}}]}}]} as unknown as DocumentNode<VacationFragFragment, unknown>;
export const VacationDescFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VacationDescFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VacationDesc"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"vacationType"}},{"kind":"Field","name":{"kind":"Name","value":"day"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<VacationDescFragFragment, unknown>;
export const MyCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"myCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seeMyprofile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hasCompanyCount"}},{"kind":"Field","name":{"kind":"Name","value":"ownCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"isOwned"}},{"kind":"Field","name":{"kind":"Name","value":"isManager"}},{"kind":"Field","name":{"kind":"Name","value":"inNout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalAssets"}}]}},{"kind":"Field","name":{"kind":"Name","value":"companyWorker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<MyCompanyQuery, MyCompanyQueryVariables>;
export const ConnectingCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"connectingCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchCompanyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchCompanyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"connectingCompanyCount"}},{"kind":"Field","name":{"kind":"Name","value":"connectingCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyFrag"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"companyLogo"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"isManager"}},{"kind":"Field","name":{"kind":"Name","value":"isOwned"}}]}}]} as unknown as DocumentNode<ConnectingCompanyQuery, ConnectingCompanyQueryVariables>;
export const ConnectedCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"connectedCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchCompanyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchCompanyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"connectedCompanyCount"}},{"kind":"Field","name":{"kind":"Name","value":"connectedCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyFrag"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"companyLogo"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"isManager"}},{"kind":"Field","name":{"kind":"Name","value":"isOwned"}}]}}]} as unknown as DocumentNode<ConnectedCompanyQuery, ConnectedCompanyQueryVariables>;
export const CurrentAssetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"currentAssets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchCompanyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchCompanyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inNout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"currentAssets"}},{"kind":"Field","name":{"kind":"Name","value":"currentAssetsDesc"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EquityLiabilitiesFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nonCurrentAssets"}},{"kind":"Field","name":{"kind":"Name","value":"nonCurrentAssetsDesc"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EquityLiabilitiesFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalAssetsDesc"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EquityLiabilitiesFrag"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EquityLiabilitiesFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EquityLiabilities"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"assests"}},{"kind":"Field","name":{"kind":"Name","value":"current"}},{"kind":"Field","name":{"kind":"Name","value":"enLDesc"}},{"kind":"Field","name":{"kind":"Name","value":"enLId"}},{"kind":"Field","name":{"kind":"Name","value":"enLName"}},{"kind":"Field","name":{"kind":"Name","value":"enLType"}},{"kind":"Field","name":{"kind":"Name","value":"inNoutId"}}]}}]} as unknown as DocumentNode<CurrentAssetsQuery, CurrentAssetsQueryVariables>;
export const ExpendModelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"expendModel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchCompanyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchCompanyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inNout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"expendMoney"}},{"kind":"Field","name":{"kind":"Name","value":"expendModel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IncomeExpendFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"waitExpendMoney"}},{"kind":"Field","name":{"kind":"Name","value":"waitExpendModel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IncomeExpendFrag"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IncomeExpendFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IncomeExpend"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"incomeTrue"}},{"kind":"Field","name":{"kind":"Name","value":"infoSubtitle"}},{"kind":"Field","name":{"kind":"Name","value":"money"}},{"kind":"Field","name":{"kind":"Name","value":"businessDate"}},{"kind":"Field","name":{"kind":"Name","value":"paymentType"}},{"kind":"Field","name":{"kind":"Name","value":"accountCode"}},{"kind":"Field","name":{"kind":"Name","value":"businessDesc"}},{"kind":"Field","name":{"kind":"Name","value":"paymentsDone"}}]}}]} as unknown as DocumentNode<ExpendModelQuery, ExpendModelQueryVariables>;
export const IncomeModelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"incomeModels"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchCompanyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchCompanyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inNout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"incomeMoney"}},{"kind":"Field","name":{"kind":"Name","value":"incomeModel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IncomeExpendFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"waitIncomeMoney"}},{"kind":"Field","name":{"kind":"Name","value":"waitIncomeModel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IncomeExpendFrag"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IncomeExpendFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IncomeExpend"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"incomeTrue"}},{"kind":"Field","name":{"kind":"Name","value":"infoSubtitle"}},{"kind":"Field","name":{"kind":"Name","value":"money"}},{"kind":"Field","name":{"kind":"Name","value":"businessDate"}},{"kind":"Field","name":{"kind":"Name","value":"paymentType"}},{"kind":"Field","name":{"kind":"Name","value":"accountCode"}},{"kind":"Field","name":{"kind":"Name","value":"businessDesc"}},{"kind":"Field","name":{"kind":"Name","value":"paymentsDone"}}]}}]} as unknown as DocumentNode<IncomeModelsQuery, IncomeModelsQueryVariables>;
export const TotalAssetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"totalAssets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchCompanyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchCompanyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inNout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"totalAssets"}},{"kind":"Field","name":{"kind":"Name","value":"totalAssetsDesc"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EquityLiabilitiesFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAssetsDesc"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EquityLiabilitiesFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nonCurrentAssetsDesc"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EquityLiabilitiesFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentLiabilitiesDesc"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EquityLiabilitiesFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nonCurrentLiabilitiesDesc"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EquityLiabilitiesFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"incomeMoney"}},{"kind":"Field","name":{"kind":"Name","value":"incomeModel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IncomeExpendFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"waitIncomeMoney"}},{"kind":"Field","name":{"kind":"Name","value":"waitIncomeModel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IncomeExpendFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"expendMoney"}},{"kind":"Field","name":{"kind":"Name","value":"expendModel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IncomeExpendFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"waitExpendMoney"}},{"kind":"Field","name":{"kind":"Name","value":"waitExpendModel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IncomeExpendFrag"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EquityLiabilitiesFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EquityLiabilities"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"assests"}},{"kind":"Field","name":{"kind":"Name","value":"current"}},{"kind":"Field","name":{"kind":"Name","value":"enLDesc"}},{"kind":"Field","name":{"kind":"Name","value":"enLId"}},{"kind":"Field","name":{"kind":"Name","value":"enLName"}},{"kind":"Field","name":{"kind":"Name","value":"enLType"}},{"kind":"Field","name":{"kind":"Name","value":"inNoutId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IncomeExpendFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IncomeExpend"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"incomeTrue"}},{"kind":"Field","name":{"kind":"Name","value":"infoSubtitle"}},{"kind":"Field","name":{"kind":"Name","value":"money"}},{"kind":"Field","name":{"kind":"Name","value":"businessDate"}},{"kind":"Field","name":{"kind":"Name","value":"paymentType"}},{"kind":"Field","name":{"kind":"Name","value":"accountCode"}},{"kind":"Field","name":{"kind":"Name","value":"businessDesc"}},{"kind":"Field","name":{"kind":"Name","value":"paymentsDone"}}]}}]} as unknown as DocumentNode<TotalAssetsQuery, TotalAssetsQueryVariables>;
export const CurrentLiabilityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"currentLiability"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchCompanyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchCompanyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inNout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"currentLiabilities"}},{"kind":"Field","name":{"kind":"Name","value":"currentLiabilitiesDesc"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EquityLiabilitiesFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nonCurrentLiabilities"}},{"kind":"Field","name":{"kind":"Name","value":"nonCurrentLiabilitiesDesc"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EquityLiabilitiesFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalAssetsDesc"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EquityLiabilitiesFrag"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EquityLiabilitiesFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EquityLiabilities"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"assests"}},{"kind":"Field","name":{"kind":"Name","value":"current"}},{"kind":"Field","name":{"kind":"Name","value":"enLDesc"}},{"kind":"Field","name":{"kind":"Name","value":"enLId"}},{"kind":"Field","name":{"kind":"Name","value":"enLName"}},{"kind":"Field","name":{"kind":"Name","value":"enLType"}},{"kind":"Field","name":{"kind":"Name","value":"inNoutId"}}]}}]} as unknown as DocumentNode<CurrentLiabilityQuery, CurrentLiabilityQueryVariables>;
export const SeeCompanyInNoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"seeCompanyInNout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchCompanyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchCompanyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"inNout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyInNoutFrag"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyInNoutFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InNout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"budget"}},{"kind":"Field","name":{"kind":"Name","value":"totalAssets"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"liabilities"}},{"kind":"Field","name":{"kind":"Name","value":"netAssets"}},{"kind":"Field","name":{"kind":"Name","value":"netIncome"}},{"kind":"Field","name":{"kind":"Name","value":"totalRevenue"}},{"kind":"Field","name":{"kind":"Name","value":"totalExpenses"}},{"kind":"Field","name":{"kind":"Name","value":"profitMargin"}},{"kind":"Field","name":{"kind":"Name","value":"equityRatio"}},{"kind":"Field","name":{"kind":"Name","value":"debtRatio"}},{"kind":"Field","name":{"kind":"Name","value":"roe"}}]}}]} as unknown as DocumentNode<SeeCompanyInNoutQuery, SeeCompanyInNoutQueryVariables>;
export const CompanyProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"companyProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchCompanyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchCompanyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyProduct"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductFrag"}},{"kind":"Field","name":{"kind":"Name","value":"incomeExpend"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IncomeExpendFrag"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"itemPhoto"}},{"kind":"Field","name":{"kind":"Name","value":"itemName"}},{"kind":"Field","name":{"kind":"Name","value":"itemCount"}},{"kind":"Field","name":{"kind":"Name","value":"itemProductId"}},{"kind":"Field","name":{"kind":"Name","value":"itemPrice"}},{"kind":"Field","name":{"kind":"Name","value":"itemModelName"}},{"kind":"Field","name":{"kind":"Name","value":"itemDesc"}},{"kind":"Field","name":{"kind":"Name","value":"incomeExpendTypeId"}},{"kind":"Field","name":{"kind":"Name","value":"itemType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IncomeExpendFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IncomeExpend"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"incomeTrue"}},{"kind":"Field","name":{"kind":"Name","value":"infoSubtitle"}},{"kind":"Field","name":{"kind":"Name","value":"money"}},{"kind":"Field","name":{"kind":"Name","value":"businessDate"}},{"kind":"Field","name":{"kind":"Name","value":"paymentType"}},{"kind":"Field","name":{"kind":"Name","value":"accountCode"}},{"kind":"Field","name":{"kind":"Name","value":"businessDesc"}},{"kind":"Field","name":{"kind":"Name","value":"paymentsDone"}}]}}]} as unknown as DocumentNode<CompanyProductsQuery, CompanyProductsQueryVariables>;
export const SearchByCompanyNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchByCompanyName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchByCompanyName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"companyOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<SearchByCompanyNameQuery, SearchByCompanyNameQueryVariables>;
export const CompanyWorkersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"companyWorkers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchCompanyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchCompanyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyWorker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"salary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SalaryFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"vacation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VacationFrag"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SalaryFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Salary"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"preTaxMonthlySalary"}},{"kind":"Field","name":{"kind":"Name","value":"childCount"}},{"kind":"Field","name":{"kind":"Name","value":"annualSalary"}},{"kind":"Field","name":{"kind":"Name","value":"earnIncomeDedution"}},{"kind":"Field","name":{"kind":"Name","value":"earnIncomeAmount"}},{"kind":"Field","name":{"kind":"Name","value":"familyDedution"}},{"kind":"Field","name":{"kind":"Name","value":"pensionInsuranceDedution"}},{"kind":"Field","name":{"kind":"Name","value":"specialIncomeDedution"}},{"kind":"Field","name":{"kind":"Name","value":"taxBase"}},{"kind":"Field","name":{"kind":"Name","value":"taxCalculate"}},{"kind":"Field","name":{"kind":"Name","value":"taxDetermined"}},{"kind":"Field","name":{"kind":"Name","value":"earnIncomeTaxCredit"}},{"kind":"Field","name":{"kind":"Name","value":"simplifiedTax"}},{"kind":"Field","name":{"kind":"Name","value":"childTax"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VacationFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Vacation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"joinCompanyDate"}},{"kind":"Field","name":{"kind":"Name","value":"appearence"}},{"kind":"Field","name":{"kind":"Name","value":"annual"}},{"kind":"Field","name":{"kind":"Name","value":"other"}},{"kind":"Field","name":{"kind":"Name","value":"restAnnualVacation"}},{"kind":"Field","name":{"kind":"Name","value":"restOtherVacation"}},{"kind":"Field","name":{"kind":"Name","value":"totalVacation"}}]}}]} as unknown as DocumentNode<CompanyWorkersQuery, CompanyWorkersQueryVariables>;
export const CreateAssetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createAssets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createEnLId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enLId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enLName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enLType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"current"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assests"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"value"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enLDesc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEnL"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createEnLId"}}},{"kind":"Argument","name":{"kind":"Name","value":"enLId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enLId"}}},{"kind":"Argument","name":{"kind":"Name","value":"enLName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enLName"}}},{"kind":"Argument","name":{"kind":"Name","value":"enLType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enLType"}}},{"kind":"Argument","name":{"kind":"Name","value":"current"},"value":{"kind":"Variable","name":{"kind":"Name","value":"current"}}},{"kind":"Argument","name":{"kind":"Name","value":"assests"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assests"}}},{"kind":"Argument","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}},{"kind":"Argument","name":{"kind":"Name","value":"enLDesc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enLDesc"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}}]}}]}}]} as unknown as DocumentNode<CreateAssetsMutation, CreateAssetsMutationVariables>;
export const CreateInExDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createInEx"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createInExId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"incomeTrue"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"infoSubtitle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"money"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"businessDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"businessDesc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentsDone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TPaymentSwitch"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enLName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enLType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enLDesc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"current"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assests"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createInEx"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createInExId"}}},{"kind":"Argument","name":{"kind":"Name","value":"incomeTrue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"incomeTrue"}}},{"kind":"Argument","name":{"kind":"Name","value":"infoSubtitle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"infoSubtitle"}}},{"kind":"Argument","name":{"kind":"Name","value":"money"},"value":{"kind":"Variable","name":{"kind":"Name","value":"money"}}},{"kind":"Argument","name":{"kind":"Name","value":"businessDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"businessDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"paymentType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentType"}}},{"kind":"Argument","name":{"kind":"Name","value":"accountCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"businessDesc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"businessDesc"}}},{"kind":"Argument","name":{"kind":"Name","value":"paymentsDone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentsDone"}}},{"kind":"Argument","name":{"kind":"Name","value":"enLName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enLName"}}},{"kind":"Argument","name":{"kind":"Name","value":"enLType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enLType"}}},{"kind":"Argument","name":{"kind":"Name","value":"enLDesc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enLDesc"}}},{"kind":"Argument","name":{"kind":"Name","value":"current"},"value":{"kind":"Variable","name":{"kind":"Name","value":"current"}}},{"kind":"Argument","name":{"kind":"Name","value":"assests"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assests"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subId"}},{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}}]}}]}}]} as unknown as DocumentNode<CreateInExMutation, CreateInExMutationVariables>;
export const CreateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createProductId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemProductId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemModelName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemPhoto"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemPrice"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemCount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemDesc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"incomeTrue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"businessDesc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentsDone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TPaymentSwitch"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createProductId"}}},{"kind":"Argument","name":{"kind":"Name","value":"itemProductId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemProductId"}}},{"kind":"Argument","name":{"kind":"Name","value":"itemName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemName"}}},{"kind":"Argument","name":{"kind":"Name","value":"itemModelName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemModelName"}}},{"kind":"Argument","name":{"kind":"Name","value":"itemPhoto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemPhoto"}}},{"kind":"Argument","name":{"kind":"Name","value":"itemType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemType"}}},{"kind":"Argument","name":{"kind":"Name","value":"itemPrice"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemPrice"}}},{"kind":"Argument","name":{"kind":"Name","value":"itemCount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemCount"}}},{"kind":"Argument","name":{"kind":"Name","value":"itemDesc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemDesc"}}},{"kind":"Argument","name":{"kind":"Name","value":"incomeTrue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"incomeTrue"}}},{"kind":"Argument","name":{"kind":"Name","value":"paymentType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentType"}}},{"kind":"Argument","name":{"kind":"Name","value":"accountCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"businessDesc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"businessDesc"}}},{"kind":"Argument","name":{"kind":"Name","value":"paymentsDone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentsDone"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}}]}}]}}]} as unknown as DocumentNode<CreateProductMutation, CreateProductMutationVariables>;
export const DeleteEnLDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteEnL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enLId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteEnL"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"enLId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enLId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}}]}}]}}]} as unknown as DocumentNode<DeleteEnLMutation, DeleteEnLMutationVariables>;
export const EditEnLDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editEnL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editEnLId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enLId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enLName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enLType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enLDesc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"current"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assests"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"value"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editEnL"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editEnLId"}}},{"kind":"Argument","name":{"kind":"Name","value":"enLId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enLId"}}},{"kind":"Argument","name":{"kind":"Name","value":"enLName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enLName"}}},{"kind":"Argument","name":{"kind":"Name","value":"enLType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enLType"}}},{"kind":"Argument","name":{"kind":"Name","value":"enLDesc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enLDesc"}}},{"kind":"Argument","name":{"kind":"Name","value":"current"},"value":{"kind":"Variable","name":{"kind":"Name","value":"current"}}},{"kind":"Argument","name":{"kind":"Name","value":"assests"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assests"}}},{"kind":"Argument","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}}]}}]}}]} as unknown as DocumentNode<EditEnLMutation, EditEnLMutationVariables>;
export const CreateCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}}]}}]}}]} as unknown as DocumentNode<CreateCompanyMutation, CreateCompanyMutationVariables>;
export const DeleteCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteCompanyId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteCompanyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}}]}}]}}]} as unknown as DocumentNode<DeleteCompanyMutation, DeleteCompanyMutationVariables>;
export const EditUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"avatar"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}},{"kind":"Argument","name":{"kind":"Name","value":"avatar"},"value":{"kind":"Variable","name":{"kind":"Name","value":"avatar"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}}]}}]}}]} as unknown as DocumentNode<EditUserMutation, EditUserMutationVariables>;
export const RegistWorkerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"registWorker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"registWorkerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"childCount"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"familyCount"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"preTaxMonthlySalary"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registWorker"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"registWorkerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"childCount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"childCount"}}},{"kind":"Argument","name":{"kind":"Name","value":"familyCount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"familyCount"}}},{"kind":"Argument","name":{"kind":"Name","value":"preTaxMonthlySalary"},"value":{"kind":"Variable","name":{"kind":"Name","value":"preTaxMonthlySalary"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subId"}}]}}]}}]} as unknown as DocumentNode<RegistWorkerMutation, RegistWorkerMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"Argument","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const SeeMyProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"seeMyProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seeMyprofile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]} as unknown as DocumentNode<SeeMyProfileQuery, SeeMyProfileQueryVariables>;