/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query myCompany {\n    seeMyprofile {\n      id\n      hasCompanyCount\n      ownCompany {\n        id\n        companyName\n        isOwned\n        isManager\n        inNout {\n          totalAssets\n        }\n        companyWorker {\n          id\n        }\n      }\n    }\n  }\n": types.MyCompanyDocument,
    "\n  query connectingCompany($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      connectingCompanyCount\n      connectingCompany {\n        ...CompanyFrag\n      }\n    }\n  }\n  \n": types.ConnectingCompanyDocument,
    "\n  query connectedCompany($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      connectedCompanyCount\n      connectedCompany {\n        ...CompanyFrag\n      }\n    }\n  }\n  \n": types.ConnectedCompanyDocument,
    "\n  query currentAssets($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      inNout {\n        id\n        currentAssets\n        currentAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        nonCurrentAssets\n        nonCurrentAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        totalAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n      }\n    }\n  }\n  \n": types.CurrentAssetsDocument,
    "\n  query expendModel($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      inNout {\n        id\n        expendMoney\n        expendModel {\n          ...IncomeExpendFrag\n        }\n        waitExpendMoney\n        waitExpendModel {\n          ...IncomeExpendFrag\n        }\n      }\n    }\n  }\n  \n": types.ExpendModelDocument,
    "\n  query incomeModels($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      inNout {\n        id\n        incomeMoney\n        incomeModel {\n          ...IncomeExpendFrag\n        }\n        waitIncomeMoney\n        waitIncomeModel {\n          ...IncomeExpendFrag\n        }\n      }\n    }\n  }\n\n  \n": types.IncomeModelsDocument,
    "\n  query totalAssets($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      inNout {\n        id\n        totalAssets\n        totalAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        currentAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        nonCurrentAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        currentLiabilitiesDesc {\n          ...EquityLiabilitiesFrag\n        }\n        nonCurrentLiabilitiesDesc {\n          ...EquityLiabilitiesFrag\n        }\n        incomeMoney\n        incomeModel {\n          ...IncomeExpendFrag\n        }\n        waitIncomeMoney\n        waitIncomeModel {\n          ...IncomeExpendFrag\n        }\n        expendMoney\n        expendModel {\n          ...IncomeExpendFrag\n        }\n        waitExpendMoney\n        waitExpendModel {\n          ...IncomeExpendFrag\n        }\n      }\n    }\n  }\n  \n  \n": types.TotalAssetsDocument,
    "\n  query currentLiability($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      inNout {\n        id\n        currentLiabilities\n        currentLiabilitiesDesc {\n          ...EquityLiabilitiesFrag\n        }\n        nonCurrentLiabilities\n        nonCurrentLiabilitiesDesc {\n          ...EquityLiabilitiesFrag\n        }\n        totalAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n      }\n    }\n  }\n\n  \n": types.CurrentLiabilityDocument,
    "\n  query seeCompanyInNout($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      id\n      companyName\n      inNout {\n        ...CompanyInNoutFrag\n      }\n    }\n  }\n  \n": types.SeeCompanyInNoutDocument,
    "\n  query companyProducts($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      companyProduct {\n        ...ProductFrag\n        incomeExpend {\n          ...IncomeExpendFrag\n        }\n      }\n    }\n  }\n  \n  \n": types.CompanyProductsDocument,
    "\n  query searchByCompanyName($companyName: String!) {\n    searchByCompanyName(companyName: $companyName) {\n      id\n      companyName\n      companyOwner {\n        id\n        username\n      }\n    }\n  }\n": types.SearchByCompanyNameDocument,
    "\n  query companyWorkers($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      companyWorker {\n        id\n        username\n        firstName\n        lastName\n        phone\n        salary {\n          ...SalaryFrag\n        }\n        vacation {\n          ...VacationFrag\n        }\n      }\n    }\n  }\n  \n  \n": types.CompanyWorkersDocument,
    "\n  mutation createAssets(\n    $createEnLId: Int!\n    $enLId: String!\n    $enLName: String!\n    $enLType: String!\n    $current: Boolean!\n    $assests: Boolean!\n    $value: Int!\n    $enLDesc: String\n  ) {\n    createEnL(\n      id: $createEnLId\n      enLId: $enLId\n      enLName: $enLName\n      enLType: $enLType\n      current: $current\n      assests: $assests\n      value: $value\n      enLDesc: $enLDesc\n    ) {\n      ok\n      id\n      errorMsg\n    }\n  }\n": types.CreateAssetsDocument,
    "\n  mutation createInEx(\n    $createInExId: Int!\n    $incomeTrue: Boolean!\n    $infoSubtitle: String!\n    $money: Int!\n    $businessDate: String!\n    $paymentType: String\n    $accountCode: String\n    $businessDesc: String\n    $paymentsDone: TPaymentSwitch\n    $enLName: String!\n    $enLType: String!\n    $enLDesc: String\n    $current: Boolean\n    $assests: Boolean\n  ) {\n    createInEx(\n      id: $createInExId\n      incomeTrue: $incomeTrue\n      infoSubtitle: $infoSubtitle\n      money: $money\n      businessDate: $businessDate\n      paymentType: $paymentType\n      accountCode: $accountCode\n      businessDesc: $businessDesc\n      paymentsDone: $paymentsDone\n      enLName: $enLName\n      enLType: $enLType\n      enLDesc: $enLDesc\n      current: $current\n      assests: $assests\n    ) {\n      ok\n      id\n      subId\n      errorMsg\n    }\n  }\n": types.CreateInExDocument,
    "\n  mutation createProduct(\n    $createProductId: Int!\n    $itemProductId: String!\n    $itemName: String!\n    $itemModelName: String\n    $itemPhoto: String\n    $itemType: String\n    $itemPrice: Int\n    $itemCount: Int\n    $itemDesc: String\n    $incomeTrue: Boolean\n    $paymentType: String\n    $accountCode: String\n    $businessDesc: String\n    $paymentsDone: TPaymentSwitch\n  ) {\n    createProduct(\n      id: $createProductId\n      itemProductId: $itemProductId\n      itemName: $itemName\n      itemModelName: $itemModelName\n      itemPhoto: $itemPhoto\n      itemType: $itemType\n      itemPrice: $itemPrice\n      itemCount: $itemCount\n      itemDesc: $itemDesc\n      incomeTrue: $incomeTrue\n      paymentType: $paymentType\n      accountCode: $accountCode\n      businessDesc: $businessDesc\n      paymentsDone: $paymentsDone\n    ) {\n      id\n      ok\n      errorMsg\n    }\n  }\n": types.CreateProductDocument,
    "\n  mutation deleteEnL($enLId: String!) {\n    deleteEnL(enLId: $enLId) {\n      ok\n      errorMsg\n    }\n  }\n": types.DeleteEnLDocument,
    "\n  mutation editEnL(\n    $editEnLId: Int!\n    $enLId: String!\n    $enLName: String\n    $enLType: String\n    $enLDesc: String\n    $current: Boolean\n    $assests: Boolean\n    $value: Int\n  ) {\n    editEnL(\n      id: $editEnLId\n      enLId: $enLId\n      enLName: $enLName\n      enLType: $enLType\n      enLDesc: $enLDesc\n      current: $current\n      assests: $assests\n      value: $value\n    ) {\n      ok\n      errorMsg\n    }\n  }\n": types.EditEnLDocument,
    "\n  mutation createCompany($companyName: String!) {\n    createCompany(companyName: $companyName) {\n      ok\n      id\n      errorMsg\n    }\n  }\n": types.CreateCompanyDocument,
    "\n  mutation deleteCompany($deleteCompanyId: Int) {\n    deleteCompany(id: $deleteCompanyId) {\n      ok\n      errorMsg\n    }\n  }\n": types.DeleteCompanyDocument,
    "\n  mutation EditUser(\n    $phone: String\n    $avatar: String\n    $lastName: String\n    $firstName: String\n    $password: String\n  ) {\n    editUser(\n      phone: $phone\n      avatar: $avatar\n      lastName: $lastName\n      firstName: $firstName\n      password: $password\n    ) {\n      ok\n      errorMsg\n    }\n  }\n": types.EditUserDocument,
    "\n  mutation registWorker(\n    $registWorkerId: Int!\n    $username: String!\n    $childCount: Int!\n    $familyCount: Int!\n    $preTaxMonthlySalary: Int!\n  ) {\n    registWorker(\n      id: $registWorkerId\n      username: $username\n      childCount: $childCount\n      familyCount: $familyCount\n      preTaxMonthlySalary: $preTaxMonthlySalary\n    ) {\n      ok\n      errorMsg\n      id\n      subId\n    }\n  }\n": types.RegistWorkerDocument,
    "\n  mutation createUser(\n    $username: String!\n    $email: String!\n    $password: String!\n    $firstName: String\n    $lastName: String\n    $phone: String\n  ) {\n    createUser(\n      username: $username\n      email: $email\n      password: $password\n      firstName: $firstName\n      lastName: $lastName\n      phone: $phone\n    ) {\n      ok\n      errorMsg\n    }\n  }\n": types.CreateUserDocument,
    "\n  mutation loginUser($password: String!, $email: String, $username: String) {\n    loginUser(password: $password, email: $email, username: $username) {\n      ok\n      token\n      errorMsg\n    }\n  }\n": types.LoginUserDocument,
    "\n  query seeMyProfile {\n    seeMyprofile {\n      id\n      email\n      phone\n      username\n      firstName\n      lastName\n      avatar\n    }\n  }\n": types.SeeMyProfileDocument,
    "\n  fragment CompanyAdressFrag on CompanyAdress {\n    id\n    country\n    city\n    streetAdress\n    restAdress\n    adressNum\n  }\n": types.CompanyAdressFragFragmentDoc,
    "\n  fragment CompanyFrag on Company {\n    id\n    createdAt\n    updateAt\n    companyLogo\n    companyName\n    isManager\n    isOwned\n  }\n": types.CompanyFragFragmentDoc,
    "\n  fragment EquityLiabilitiesFrag on EquityLiabilities {\n    id\n    createdAt\n    updateAt\n    value\n    assests\n    current\n    enLDesc\n    enLId\n    enLName\n    enLType\n    inNoutId\n  }\n": types.EquityLiabilitiesFragFragmentDoc,
    "\n  fragment CompanyInNoutFrag on InNout {\n    id\n    budget\n    totalAssets\n    capital\n    liabilities\n    netAssets\n    netIncome\n    totalRevenue\n    totalExpenses\n    profitMargin\n    equityRatio\n    debtRatio\n    roe\n  }\n": types.CompanyInNoutFragFragmentDoc,
    "\n  fragment IncomeExpendFrag on IncomeExpend {\n    id\n    createdAt\n    updateAt\n    incomeTrue\n    infoSubtitle\n    money\n    businessDate\n    paymentType\n    accountCode\n    businessDesc\n    paymentsDone\n  }\n": types.IncomeExpendFragFragmentDoc,
    "\n  fragment ProductFrag on Product {\n    id\n    createdAt\n    updateAt\n    itemPhoto\n    itemName\n    itemCount\n    itemProductId\n    itemPrice\n    itemModelName\n    itemDesc\n    incomeExpendTypeId\n    itemType\n  }\n": types.ProductFragFragmentDoc,
    "\n  fragment SalaryFrag on Salary {\n    id\n    createdAt\n    updateAt\n    preTaxMonthlySalary\n    childCount\n    annualSalary\n    earnIncomeDedution\n    earnIncomeAmount\n    familyDedution\n    pensionInsuranceDedution\n    specialIncomeDedution\n    taxBase\n    taxCalculate\n    taxDetermined\n    earnIncomeTaxCredit\n    simplifiedTax\n    childTax\n  }\n": types.SalaryFragFragmentDoc,
    "\n  fragment UserFrag on User {\n    id\n    username\n    firstName\n    lastName\n    email\n    phone\n    avatar\n    isOnVacation\n  }\n": types.UserFragFragmentDoc,
    "\n  fragment VacationFrag on Vacation {\n    id\n    createdAt\n    updateAt\n    joinCompanyDate\n    appearence\n    annual\n    other\n    restAnnualVacation\n    restOtherVacation\n    totalVacation\n  }\n": types.VacationFragFragmentDoc,
    "\n  fragment VacationDescFrag on VacationDesc {\n    id\n    createdAt\n    updateAt\n    vacationType\n    day\n    description\n  }\n": types.VacationDescFragFragmentDoc,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query myCompany {\n    seeMyprofile {\n      id\n      hasCompanyCount\n      ownCompany {\n        id\n        companyName\n        isOwned\n        isManager\n        inNout {\n          totalAssets\n        }\n        companyWorker {\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query myCompany {\n    seeMyprofile {\n      id\n      hasCompanyCount\n      ownCompany {\n        id\n        companyName\n        isOwned\n        isManager\n        inNout {\n          totalAssets\n        }\n        companyWorker {\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query connectingCompany($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      connectingCompanyCount\n      connectingCompany {\n        ...CompanyFrag\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query connectingCompany($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      connectingCompanyCount\n      connectingCompany {\n        ...CompanyFrag\n      }\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query connectedCompany($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      connectedCompanyCount\n      connectedCompany {\n        ...CompanyFrag\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query connectedCompany($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      connectedCompanyCount\n      connectedCompany {\n        ...CompanyFrag\n      }\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query currentAssets($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      inNout {\n        id\n        currentAssets\n        currentAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        nonCurrentAssets\n        nonCurrentAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        totalAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query currentAssets($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      inNout {\n        id\n        currentAssets\n        currentAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        nonCurrentAssets\n        nonCurrentAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        totalAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n      }\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query expendModel($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      inNout {\n        id\n        expendMoney\n        expendModel {\n          ...IncomeExpendFrag\n        }\n        waitExpendMoney\n        waitExpendModel {\n          ...IncomeExpendFrag\n        }\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query expendModel($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      inNout {\n        id\n        expendMoney\n        expendModel {\n          ...IncomeExpendFrag\n        }\n        waitExpendMoney\n        waitExpendModel {\n          ...IncomeExpendFrag\n        }\n      }\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query incomeModels($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      inNout {\n        id\n        incomeMoney\n        incomeModel {\n          ...IncomeExpendFrag\n        }\n        waitIncomeMoney\n        waitIncomeModel {\n          ...IncomeExpendFrag\n        }\n      }\n    }\n  }\n\n  \n"): (typeof documents)["\n  query incomeModels($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      inNout {\n        id\n        incomeMoney\n        incomeModel {\n          ...IncomeExpendFrag\n        }\n        waitIncomeMoney\n        waitIncomeModel {\n          ...IncomeExpendFrag\n        }\n      }\n    }\n  }\n\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query totalAssets($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      inNout {\n        id\n        totalAssets\n        totalAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        currentAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        nonCurrentAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        currentLiabilitiesDesc {\n          ...EquityLiabilitiesFrag\n        }\n        nonCurrentLiabilitiesDesc {\n          ...EquityLiabilitiesFrag\n        }\n        incomeMoney\n        incomeModel {\n          ...IncomeExpendFrag\n        }\n        waitIncomeMoney\n        waitIncomeModel {\n          ...IncomeExpendFrag\n        }\n        expendMoney\n        expendModel {\n          ...IncomeExpendFrag\n        }\n        waitExpendMoney\n        waitExpendModel {\n          ...IncomeExpendFrag\n        }\n      }\n    }\n  }\n  \n  \n"): (typeof documents)["\n  query totalAssets($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      inNout {\n        id\n        totalAssets\n        totalAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        currentAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        nonCurrentAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        currentLiabilitiesDesc {\n          ...EquityLiabilitiesFrag\n        }\n        nonCurrentLiabilitiesDesc {\n          ...EquityLiabilitiesFrag\n        }\n        incomeMoney\n        incomeModel {\n          ...IncomeExpendFrag\n        }\n        waitIncomeMoney\n        waitIncomeModel {\n          ...IncomeExpendFrag\n        }\n        expendMoney\n        expendModel {\n          ...IncomeExpendFrag\n        }\n        waitExpendMoney\n        waitExpendModel {\n          ...IncomeExpendFrag\n        }\n      }\n    }\n  }\n  \n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query currentLiability($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      inNout {\n        id\n        currentLiabilities\n        currentLiabilitiesDesc {\n          ...EquityLiabilitiesFrag\n        }\n        nonCurrentLiabilities\n        nonCurrentLiabilitiesDesc {\n          ...EquityLiabilitiesFrag\n        }\n        totalAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n      }\n    }\n  }\n\n  \n"): (typeof documents)["\n  query currentLiability($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      inNout {\n        id\n        currentLiabilities\n        currentLiabilitiesDesc {\n          ...EquityLiabilitiesFrag\n        }\n        nonCurrentLiabilities\n        nonCurrentLiabilitiesDesc {\n          ...EquityLiabilitiesFrag\n        }\n        totalAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n      }\n    }\n  }\n\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query seeCompanyInNout($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      id\n      companyName\n      inNout {\n        ...CompanyInNoutFrag\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query seeCompanyInNout($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      id\n      companyName\n      inNout {\n        ...CompanyInNoutFrag\n      }\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query companyProducts($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      companyProduct {\n        ...ProductFrag\n        incomeExpend {\n          ...IncomeExpendFrag\n        }\n      }\n    }\n  }\n  \n  \n"): (typeof documents)["\n  query companyProducts($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      companyProduct {\n        ...ProductFrag\n        incomeExpend {\n          ...IncomeExpendFrag\n        }\n      }\n    }\n  }\n  \n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query searchByCompanyName($companyName: String!) {\n    searchByCompanyName(companyName: $companyName) {\n      id\n      companyName\n      companyOwner {\n        id\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  query searchByCompanyName($companyName: String!) {\n    searchByCompanyName(companyName: $companyName) {\n      id\n      companyName\n      companyOwner {\n        id\n        username\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query companyWorkers($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      companyWorker {\n        id\n        username\n        firstName\n        lastName\n        phone\n        salary {\n          ...SalaryFrag\n        }\n        vacation {\n          ...VacationFrag\n        }\n      }\n    }\n  }\n  \n  \n"): (typeof documents)["\n  query companyWorkers($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      companyWorker {\n        id\n        username\n        firstName\n        lastName\n        phone\n        salary {\n          ...SalaryFrag\n        }\n        vacation {\n          ...VacationFrag\n        }\n      }\n    }\n  }\n  \n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createAssets(\n    $createEnLId: Int!\n    $enLId: String!\n    $enLName: String!\n    $enLType: String!\n    $current: Boolean!\n    $assests: Boolean!\n    $value: Int!\n    $enLDesc: String\n  ) {\n    createEnL(\n      id: $createEnLId\n      enLId: $enLId\n      enLName: $enLName\n      enLType: $enLType\n      current: $current\n      assests: $assests\n      value: $value\n      enLDesc: $enLDesc\n    ) {\n      ok\n      id\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation createAssets(\n    $createEnLId: Int!\n    $enLId: String!\n    $enLName: String!\n    $enLType: String!\n    $current: Boolean!\n    $assests: Boolean!\n    $value: Int!\n    $enLDesc: String\n  ) {\n    createEnL(\n      id: $createEnLId\n      enLId: $enLId\n      enLName: $enLName\n      enLType: $enLType\n      current: $current\n      assests: $assests\n      value: $value\n      enLDesc: $enLDesc\n    ) {\n      ok\n      id\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createInEx(\n    $createInExId: Int!\n    $incomeTrue: Boolean!\n    $infoSubtitle: String!\n    $money: Int!\n    $businessDate: String!\n    $paymentType: String\n    $accountCode: String\n    $businessDesc: String\n    $paymentsDone: TPaymentSwitch\n    $enLName: String!\n    $enLType: String!\n    $enLDesc: String\n    $current: Boolean\n    $assests: Boolean\n  ) {\n    createInEx(\n      id: $createInExId\n      incomeTrue: $incomeTrue\n      infoSubtitle: $infoSubtitle\n      money: $money\n      businessDate: $businessDate\n      paymentType: $paymentType\n      accountCode: $accountCode\n      businessDesc: $businessDesc\n      paymentsDone: $paymentsDone\n      enLName: $enLName\n      enLType: $enLType\n      enLDesc: $enLDesc\n      current: $current\n      assests: $assests\n    ) {\n      ok\n      id\n      subId\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation createInEx(\n    $createInExId: Int!\n    $incomeTrue: Boolean!\n    $infoSubtitle: String!\n    $money: Int!\n    $businessDate: String!\n    $paymentType: String\n    $accountCode: String\n    $businessDesc: String\n    $paymentsDone: TPaymentSwitch\n    $enLName: String!\n    $enLType: String!\n    $enLDesc: String\n    $current: Boolean\n    $assests: Boolean\n  ) {\n    createInEx(\n      id: $createInExId\n      incomeTrue: $incomeTrue\n      infoSubtitle: $infoSubtitle\n      money: $money\n      businessDate: $businessDate\n      paymentType: $paymentType\n      accountCode: $accountCode\n      businessDesc: $businessDesc\n      paymentsDone: $paymentsDone\n      enLName: $enLName\n      enLType: $enLType\n      enLDesc: $enLDesc\n      current: $current\n      assests: $assests\n    ) {\n      ok\n      id\n      subId\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createProduct(\n    $createProductId: Int!\n    $itemProductId: String!\n    $itemName: String!\n    $itemModelName: String\n    $itemPhoto: String\n    $itemType: String\n    $itemPrice: Int\n    $itemCount: Int\n    $itemDesc: String\n    $incomeTrue: Boolean\n    $paymentType: String\n    $accountCode: String\n    $businessDesc: String\n    $paymentsDone: TPaymentSwitch\n  ) {\n    createProduct(\n      id: $createProductId\n      itemProductId: $itemProductId\n      itemName: $itemName\n      itemModelName: $itemModelName\n      itemPhoto: $itemPhoto\n      itemType: $itemType\n      itemPrice: $itemPrice\n      itemCount: $itemCount\n      itemDesc: $itemDesc\n      incomeTrue: $incomeTrue\n      paymentType: $paymentType\n      accountCode: $accountCode\n      businessDesc: $businessDesc\n      paymentsDone: $paymentsDone\n    ) {\n      id\n      ok\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation createProduct(\n    $createProductId: Int!\n    $itemProductId: String!\n    $itemName: String!\n    $itemModelName: String\n    $itemPhoto: String\n    $itemType: String\n    $itemPrice: Int\n    $itemCount: Int\n    $itemDesc: String\n    $incomeTrue: Boolean\n    $paymentType: String\n    $accountCode: String\n    $businessDesc: String\n    $paymentsDone: TPaymentSwitch\n  ) {\n    createProduct(\n      id: $createProductId\n      itemProductId: $itemProductId\n      itemName: $itemName\n      itemModelName: $itemModelName\n      itemPhoto: $itemPhoto\n      itemType: $itemType\n      itemPrice: $itemPrice\n      itemCount: $itemCount\n      itemDesc: $itemDesc\n      incomeTrue: $incomeTrue\n      paymentType: $paymentType\n      accountCode: $accountCode\n      businessDesc: $businessDesc\n      paymentsDone: $paymentsDone\n    ) {\n      id\n      ok\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deleteEnL($enLId: String!) {\n    deleteEnL(enLId: $enLId) {\n      ok\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation deleteEnL($enLId: String!) {\n    deleteEnL(enLId: $enLId) {\n      ok\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation editEnL(\n    $editEnLId: Int!\n    $enLId: String!\n    $enLName: String\n    $enLType: String\n    $enLDesc: String\n    $current: Boolean\n    $assests: Boolean\n    $value: Int\n  ) {\n    editEnL(\n      id: $editEnLId\n      enLId: $enLId\n      enLName: $enLName\n      enLType: $enLType\n      enLDesc: $enLDesc\n      current: $current\n      assests: $assests\n      value: $value\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation editEnL(\n    $editEnLId: Int!\n    $enLId: String!\n    $enLName: String\n    $enLType: String\n    $enLDesc: String\n    $current: Boolean\n    $assests: Boolean\n    $value: Int\n  ) {\n    editEnL(\n      id: $editEnLId\n      enLId: $enLId\n      enLName: $enLName\n      enLType: $enLType\n      enLDesc: $enLDesc\n      current: $current\n      assests: $assests\n      value: $value\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createCompany($companyName: String!) {\n    createCompany(companyName: $companyName) {\n      ok\n      id\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation createCompany($companyName: String!) {\n    createCompany(companyName: $companyName) {\n      ok\n      id\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deleteCompany($deleteCompanyId: Int) {\n    deleteCompany(id: $deleteCompanyId) {\n      ok\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation deleteCompany($deleteCompanyId: Int) {\n    deleteCompany(id: $deleteCompanyId) {\n      ok\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EditUser(\n    $phone: String\n    $avatar: String\n    $lastName: String\n    $firstName: String\n    $password: String\n  ) {\n    editUser(\n      phone: $phone\n      avatar: $avatar\n      lastName: $lastName\n      firstName: $firstName\n      password: $password\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation EditUser(\n    $phone: String\n    $avatar: String\n    $lastName: String\n    $firstName: String\n    $password: String\n  ) {\n    editUser(\n      phone: $phone\n      avatar: $avatar\n      lastName: $lastName\n      firstName: $firstName\n      password: $password\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation registWorker(\n    $registWorkerId: Int!\n    $username: String!\n    $childCount: Int!\n    $familyCount: Int!\n    $preTaxMonthlySalary: Int!\n  ) {\n    registWorker(\n      id: $registWorkerId\n      username: $username\n      childCount: $childCount\n      familyCount: $familyCount\n      preTaxMonthlySalary: $preTaxMonthlySalary\n    ) {\n      ok\n      errorMsg\n      id\n      subId\n    }\n  }\n"): (typeof documents)["\n  mutation registWorker(\n    $registWorkerId: Int!\n    $username: String!\n    $childCount: Int!\n    $familyCount: Int!\n    $preTaxMonthlySalary: Int!\n  ) {\n    registWorker(\n      id: $registWorkerId\n      username: $username\n      childCount: $childCount\n      familyCount: $familyCount\n      preTaxMonthlySalary: $preTaxMonthlySalary\n    ) {\n      ok\n      errorMsg\n      id\n      subId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createUser(\n    $username: String!\n    $email: String!\n    $password: String!\n    $firstName: String\n    $lastName: String\n    $phone: String\n  ) {\n    createUser(\n      username: $username\n      email: $email\n      password: $password\n      firstName: $firstName\n      lastName: $lastName\n      phone: $phone\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation createUser(\n    $username: String!\n    $email: String!\n    $password: String!\n    $firstName: String\n    $lastName: String\n    $phone: String\n  ) {\n    createUser(\n      username: $username\n      email: $email\n      password: $password\n      firstName: $firstName\n      lastName: $lastName\n      phone: $phone\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation loginUser($password: String!, $email: String, $username: String) {\n    loginUser(password: $password, email: $email, username: $username) {\n      ok\n      token\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation loginUser($password: String!, $email: String, $username: String) {\n    loginUser(password: $password, email: $email, username: $username) {\n      ok\n      token\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query seeMyProfile {\n    seeMyprofile {\n      id\n      email\n      phone\n      username\n      firstName\n      lastName\n      avatar\n    }\n  }\n"): (typeof documents)["\n  query seeMyProfile {\n    seeMyprofile {\n      id\n      email\n      phone\n      username\n      firstName\n      lastName\n      avatar\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment CompanyAdressFrag on CompanyAdress {\n    id\n    country\n    city\n    streetAdress\n    restAdress\n    adressNum\n  }\n"): (typeof documents)["\n  fragment CompanyAdressFrag on CompanyAdress {\n    id\n    country\n    city\n    streetAdress\n    restAdress\n    adressNum\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment CompanyFrag on Company {\n    id\n    createdAt\n    updateAt\n    companyLogo\n    companyName\n    isManager\n    isOwned\n  }\n"): (typeof documents)["\n  fragment CompanyFrag on Company {\n    id\n    createdAt\n    updateAt\n    companyLogo\n    companyName\n    isManager\n    isOwned\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment EquityLiabilitiesFrag on EquityLiabilities {\n    id\n    createdAt\n    updateAt\n    value\n    assests\n    current\n    enLDesc\n    enLId\n    enLName\n    enLType\n    inNoutId\n  }\n"): (typeof documents)["\n  fragment EquityLiabilitiesFrag on EquityLiabilities {\n    id\n    createdAt\n    updateAt\n    value\n    assests\n    current\n    enLDesc\n    enLId\n    enLName\n    enLType\n    inNoutId\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment CompanyInNoutFrag on InNout {\n    id\n    budget\n    totalAssets\n    capital\n    liabilities\n    netAssets\n    netIncome\n    totalRevenue\n    totalExpenses\n    profitMargin\n    equityRatio\n    debtRatio\n    roe\n  }\n"): (typeof documents)["\n  fragment CompanyInNoutFrag on InNout {\n    id\n    budget\n    totalAssets\n    capital\n    liabilities\n    netAssets\n    netIncome\n    totalRevenue\n    totalExpenses\n    profitMargin\n    equityRatio\n    debtRatio\n    roe\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment IncomeExpendFrag on IncomeExpend {\n    id\n    createdAt\n    updateAt\n    incomeTrue\n    infoSubtitle\n    money\n    businessDate\n    paymentType\n    accountCode\n    businessDesc\n    paymentsDone\n  }\n"): (typeof documents)["\n  fragment IncomeExpendFrag on IncomeExpend {\n    id\n    createdAt\n    updateAt\n    incomeTrue\n    infoSubtitle\n    money\n    businessDate\n    paymentType\n    accountCode\n    businessDesc\n    paymentsDone\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment ProductFrag on Product {\n    id\n    createdAt\n    updateAt\n    itemPhoto\n    itemName\n    itemCount\n    itemProductId\n    itemPrice\n    itemModelName\n    itemDesc\n    incomeExpendTypeId\n    itemType\n  }\n"): (typeof documents)["\n  fragment ProductFrag on Product {\n    id\n    createdAt\n    updateAt\n    itemPhoto\n    itemName\n    itemCount\n    itemProductId\n    itemPrice\n    itemModelName\n    itemDesc\n    incomeExpendTypeId\n    itemType\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment SalaryFrag on Salary {\n    id\n    createdAt\n    updateAt\n    preTaxMonthlySalary\n    childCount\n    annualSalary\n    earnIncomeDedution\n    earnIncomeAmount\n    familyDedution\n    pensionInsuranceDedution\n    specialIncomeDedution\n    taxBase\n    taxCalculate\n    taxDetermined\n    earnIncomeTaxCredit\n    simplifiedTax\n    childTax\n  }\n"): (typeof documents)["\n  fragment SalaryFrag on Salary {\n    id\n    createdAt\n    updateAt\n    preTaxMonthlySalary\n    childCount\n    annualSalary\n    earnIncomeDedution\n    earnIncomeAmount\n    familyDedution\n    pensionInsuranceDedution\n    specialIncomeDedution\n    taxBase\n    taxCalculate\n    taxDetermined\n    earnIncomeTaxCredit\n    simplifiedTax\n    childTax\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment UserFrag on User {\n    id\n    username\n    firstName\n    lastName\n    email\n    phone\n    avatar\n    isOnVacation\n  }\n"): (typeof documents)["\n  fragment UserFrag on User {\n    id\n    username\n    firstName\n    lastName\n    email\n    phone\n    avatar\n    isOnVacation\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment VacationFrag on Vacation {\n    id\n    createdAt\n    updateAt\n    joinCompanyDate\n    appearence\n    annual\n    other\n    restAnnualVacation\n    restOtherVacation\n    totalVacation\n  }\n"): (typeof documents)["\n  fragment VacationFrag on Vacation {\n    id\n    createdAt\n    updateAt\n    joinCompanyDate\n    appearence\n    annual\n    other\n    restAnnualVacation\n    restOtherVacation\n    totalVacation\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment VacationDescFrag on VacationDesc {\n    id\n    createdAt\n    updateAt\n    vacationType\n    day\n    description\n  }\n"): (typeof documents)["\n  fragment VacationDescFrag on VacationDesc {\n    id\n    createdAt\n    updateAt\n    vacationType\n    day\n    description\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;