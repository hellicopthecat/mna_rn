# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

```
mna_rn
├─ README.md
├─ app
│  ├─ (afterLogin)
│  │  ├─ _layout.tsx
│  │  ├─ myCompany.tsx
│  │  └─ mypage.tsx
│  ├─ (beforeLogin)
│  │  ├─ _layout.tsx
│  │  ├─ index.tsx
│  │  └─ join.tsx
│  ├─ +html.tsx
│  ├─ +not-found.tsx
│  ├─ [companyId]
│  │  ├─ _layout.tsx
│  │  ├─ companyHome
│  │  │  ├─ _layout.tsx
│  │  │  └─ index.tsx
│  │  ├─ connectCompany
│  │  │  ├─ _layout.tsx
│  │  │  ├─ connectingCompany.tsx
│  │  │  └─ index.tsx
│  │  ├─ inNoutInfo
│  │  │  ├─ _layout.tsx
│  │  │  ├─ assets.tsx
│  │  │  ├─ chart.tsx
│  │  │  ├─ expendModel.tsx
│  │  │  ├─ incomeModel.tsx
│  │  │  ├─ index.tsx
│  │  │  └─ liability.tsx
│  │  ├─ products
│  │  │  ├─ _layout.tsx
│  │  │  └─ index.tsx
│  │  ├─ searchCompany
│  │  │  ├─ _layout.tsx
│  │  │  └─ index.tsx
│  │  └─ workers
│  │     ├─ _layout.tsx
│  │     └─ index.tsx
│  └─ _layout.tsx
├─ app.json
├─ assets
│  ├─ fonts
│  │  └─ SpaceMono-Regular.ttf
│  └─ images
│     ├─ adaptive-icon.png
│     ├─ favicon.png
│     ├─ icon.png
│     ├─ partial-react-logo.png
│     ├─ react-logo.png
│     ├─ react-logo@2x.png
│     ├─ react-logo@3x.png
│     └─ splash.png
├─ babel.config.js
├─ codegen.ts
├─ components
│  ├─ afterLogin
│  │  ├─ companyHome
│  │  │  ├─ companyHome.style.ts
│  │  │  └─ editAdressModal
│  │  │     └─ editAdressModal.tsx
│  │  ├─ connectCompany
│  │  │  ├─ connectCompany.style.ts
│  │  │  └─ connectCompany.tsx
│  │  ├─ inNoutInfo
│  │  │  ├─ detailInNout
│  │  │  │  ├─ AssetCard.tsx
│  │  │  │  ├─ AssetCardCont.style.ts
│  │  │  │  ├─ AssetCardModal.tsx
│  │  │  │  ├─ createAssetModal
│  │  │  │  │  └─ createAssetModal.tsx
│  │  │  │  ├─ createInExModal.tsx
│  │  │  │  ├─ createProductModal
│  │  │  │  │  └─ createProductModal.tsx
│  │  │  │  ├─ detailINEModal
│  │  │  │  │  └─ detailINEModal.tsx
│  │  │  │  ├─ incomeExpendCard.style.ts
│  │  │  │  └─ incomeExpendCard.tsx
│  │  │  └─ inNoutInfo.style.ts
│  │  ├─ myCompany
│  │  │  └─ myCompany.style.ts
│  │  ├─ productInfo
│  │  │  ├─ ProductCard.tsx
│  │  │  ├─ editProductModal
│  │  │  │  ├─ afterEditProduct.tsx
│  │  │  │  ├─ beforeEditProduct.tsx
│  │  │  │  └─ editProductModal.tsx
│  │  │  └─ productInfo.style.ts
│  │  ├─ searchCompany
│  │  │  └─ searchCompany.styled.ts
│  │  └─ workerInfo
│  │     ├─ detailWorker
│  │     │  ├─ createSalary
│  │     │  │  ├─ createSalary.style.ts
│  │     │  │  └─ createSalary.tsx
│  │     │  ├─ createVacation
│  │     │  │  └─ createVacation.tsx
│  │     │  ├─ detailWorker.style.ts
│  │     │  ├─ detailWorker.tsx
│  │     │  ├─ salaryInfo
│  │     │  │  ├─ salaryInfo.tsx
│  │     │  │  └─ salaryModal
│  │     │  │     └─ salaryModal.tsx
│  │     │  └─ vacationInfo
│  │     │     ├─ vacationInfo.tsx
│  │     │     └─ vacationModal
│  │     │        └─ vacationModal.tsx
│  │     ├─ registWorker
│  │     │  └─ registWorker.tsx
│  │     ├─ workerInfoCard.style.ts
│  │     └─ workerInforCard.tsx
│  └─ shared
│     ├─ Avatar.tsx
│     ├─ FlatSeparator.tsx
│     ├─ InputErrorMsg.tsx
│     ├─ RowCont.tsx
│     ├─ SharedBtn.tsx
│     ├─ SharedInput.tsx
│     ├─ SharedLayoutCont.tsx
│     └─ SharedTxt.tsx
├─ constants
│  ├─ Colors.ts
│  ├─ constansts.ts
│  └─ salaryCalculator.ts
├─ hooks
│  ├─ afterLogin
│  │  ├─ companyAdress
│  │  │  └─ useEditCompanyAdressHook.tsx
│  │  ├─ connectCompany
│  │  │  ├─ useConnectCompany.tsx
│  │  │  └─ useDisconnectCompany.tsx
│  │  ├─ inNout
│  │  │  ├─ useCreateAssetHook.tsx
│  │  │  ├─ useCreateInExHook.tsx
│  │  │  ├─ useCreateProductHook.tsx
│  │  │  ├─ useDeleteAssetHook.tsx
│  │  │  ├─ useDeleteInExHook.tsx
│  │  │  └─ useEditAssetHook.tsx
│  │  ├─ product
│  │  │  ├─ useDeleteProductHook.tsx
│  │  │  └─ useEditProductHook.tsx
│  │  ├─ useCreateCompanyHook.tsx
│  │  ├─ useDeleteCompanyHook.tsx
│  │  ├─ useEditUserHook.tsx
│  │  └─ worker
│  │     ├─ useCreateSalary.tsx
│  │     ├─ useCreateVacation.tsx
│  │     ├─ useEditSalary.tsx
│  │     ├─ useEditVacation.tsx
│  │     └─ useRegistWorker.tsx
│  ├─ beforeLogin
│  │  ├─ useJoinHook.tsx
│  │  └─ useLoginHook.tsx
│  └─ useUser.tsx
├─ libs
│  ├─ __generated__
│  │  ├─ fragment-masking.ts
│  │  ├─ gql.ts
│  │  ├─ graphql.ts
│  │  └─ index.ts
│  ├─ apolloClient.ts
│  └─ fragments
│     ├─ companyAdressFrag.ts
│     ├─ companyFrag.ts
│     ├─ equityLiabilitiesFrag.ts
│     ├─ inNoutFrag.ts
│     ├─ incomeExpendFrag.ts
│     ├─ productFrag.ts
│     ├─ salaryFrag.ts
│     ├─ userFrag.ts
│     └─ vacationFrag.ts
├─ package-lock.json
├─ package.json
├─ scripts
│  └─ reset-project.js
├─ store
│  ├─ modalState.ts
│  └─ userToken.ts
├─ styled.d.ts
├─ tsconfig.json
└─ types
   ├─ routerParamsType.ts
   └─ types.ts

```