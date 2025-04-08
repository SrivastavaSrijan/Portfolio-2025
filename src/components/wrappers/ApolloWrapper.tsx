'use client';

import { HttpLink } from '@apollo/client';
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from '@apollo/client-integration-nextjs';

// URI fallback for both client and server side
const API_URL = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'http://localhost:3002/api/graphql';

function makeClient() {
  const httpLink = new HttpLink({
    uri: API_URL,
    fetchOptions: {
      // For client-side queries
      cache: 'force-cache', // Default caching strategy
    },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
}
