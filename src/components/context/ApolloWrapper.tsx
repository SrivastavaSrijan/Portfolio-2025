'use client';

import { initializeApollo } from '@/lib/apollo/client';
import { ApolloNextAppProvider } from '@apollo/client-integration-nextjs';

function makeClient() {
  return initializeApollo();
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
}
