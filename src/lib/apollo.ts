import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  // @ts-ignore
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export default client;
