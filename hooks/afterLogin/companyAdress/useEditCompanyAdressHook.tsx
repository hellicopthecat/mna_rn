import {Mutation} from "@/libs/__generated__/graphql";
import {useModalState} from "@/store/modalState";
import {IRouterParams} from "@/types/routerParamsType";
import {IEditCompanyAdress} from "@/types/types";
import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {useGlobalSearchParams} from "expo-router";
import {Alert} from "react-native";
const EDIT_COMPANY_ADRESS_MUTATE = gql`
  mutation editCompanyAdress(
    $editCompanyAdressId: Int!
    $country: String
    $city: String
    $streetAdress: String
    $restAdress: String
    $adressNum: String
  ) {
    editCompanyAdress(
      id: $editCompanyAdressId
      country: $country
      city: $city
      streetAdress: $streetAdress
      restAdress: $restAdress
      adressNum: $adressNum
    ) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
export default function useEditCompanyAdressHook() {
  const {companyId} = useGlobalSearchParams<Partial<IRouterParams>>();
  const {setEditAdressModal} = useModalState();
  const [editAdress, {loading, error}] = useMutation(
    EDIT_COMPANY_ADRESS_MUTATE
  );
  const handleEditAdress = async ({
    id,
    country,
    city,
    streetAdress,
    restAdress,
    adressNum,
  }: IEditCompanyAdress) => {
    await editAdress({
      variables: {
        editCompanyAdressId: Number(companyId),
        country,
        city,
        streetAdress,
        restAdress,
        adressNum,
      },
      onCompleted(data) {
        if (!data.editCompanyAdress.ok) {
          Alert.alert("주소수정실패", data.editCompanyAdress.errorMsg + "");
        } else {
          setEditAdressModal();
        }
      },
      update(cache, {data}) {
        if (data?.editCompanyAdress.ok) {
          cache.modify({
            id: `CompanyAdress:${id}`,
            fields: {
              updateAt() {
                return Date.now().toString();
              },
              country() {
                return country;
              },
              city() {
                return city;
              },
              streetAdress() {
                return streetAdress;
              },
              restAdress() {
                return restAdress;
              },
              adressNum() {
                return adressNum;
              },
            },
          });
        }
      },
    });
  };
  return {handleEditAdress, loading, error};
}
