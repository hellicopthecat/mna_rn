import {Query} from "@/libs/__generated__/graphql";
import userToken from "@/store/userToken";
import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {router} from "expo-router";
import {useEffect} from "react";

const EXISTS_USER_QUERY = gql`
  query seeMyProfile {
    seeMyprofile {
      id
      email
      phone
      username
      firstName
      lastName
    }
  }
` as DocumentNode | TypedDocumentNode<Query>;

export default function useUser() {
  const {token, removeToken} = userToken();

  const {data, loading, error} = useQuery(EXISTS_USER_QUERY, {
    skip: !token,
  });
  useEffect(() => {
    if (!data && !token && error !== undefined) {
      removeToken();
      router.replace("/");
    }
  }, [data, token]);

  return {data, loading};
}
