import { PayloadEntity } from '@/lib/graphql/server/enums';
import { revalidateTag } from 'next/cache';

export async function revalidateAll(): Promise<{
  success: boolean;
  revalidatedTags: number;
  timestamp: string;
}> {
  const allTags = Object.values(PayloadEntity);

  for (const tag of allTags) {
    revalidateTag(tag);
  }

  return {
    success: true,
    revalidatedTags: allTags.length,
    timestamp: new Date().toISOString(),
  };
}
