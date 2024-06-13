import {TOKEN} from "@/constants/constansts";
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {onError} from "@apollo/client/link/error";
import AsyncStorage from "@react-native-async-storage/async-storage";

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: "https://8a6f-58-227-141-22.ngrok-free.app/graphql",
});
const authLink = setContext(async (_, {headers}) => {
  const token = await AsyncStorage.getItem(TOKEN);
  return {
    headers: {
      ...headers,
      token: !token ? null : token + "",
    },
  };
});

const onErrorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    console.log("GraphQL Err : ", graphQLErrors);
  } else {
    console.log("Network Err : ", networkError);
  }
});

const client = new ApolloClient({
  link: ApolloLink.from([authLink, onErrorLink, httpLink]),
  cache,
  connectToDevTools: true,
});
export default client;
