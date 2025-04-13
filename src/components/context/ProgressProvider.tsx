'use client';

import { ProgressProvider } from '@bprogress/next/app';

export const ProgressProviderClient = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProgressProvider
      height="4px"
      color="var(--color-orange-300)"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};
