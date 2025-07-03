import { createHttpLink, type NormalizedCacheObject } from '@apollo/client';
import { InMemoryCache, ApolloClient } from '@apollo/client-integration-nextjs';
import { useMemo } from 'react';

// URI fallback for both client and server side
const API_URL = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'http://localhost:3002/api/graphql';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createApolloClient() {
  return new ApolloClient({
    link: createHttpLink({
      uri: API_URL,
      credentials: 'same-origin', // Include credentials for authentication if needed
    }),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState: NormalizedCacheObject | null = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState: NormalizedCacheObject | null) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
