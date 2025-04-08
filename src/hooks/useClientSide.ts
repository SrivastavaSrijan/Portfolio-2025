import { useState, useEffect } from 'react';

/**
 * A hook that returns whether the code is running on the client side.
 * Useful for handling hydration mismatches.
 */
export function useClientSide() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}
