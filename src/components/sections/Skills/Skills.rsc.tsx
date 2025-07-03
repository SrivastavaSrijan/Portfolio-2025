import { Suspense } from 'react';
import { api, PayloadEntity } from '@/lib/graphql/server';

import { SkillsUI } from './Skills.ui';
import { SkillsSkeleton } from './Skills.skeleton';
import type { SkillsWrapperProps } from './Skills.utils';

/**
 * Skills Server Component - Clean and simple
 */
async function SkillsServer(_props: SkillsWrapperProps) {
  const data = await api.get(PayloadEntity.Skills);
  if (!data) {
    throw new Error('Internal Server Error', { cause: [PayloadEntity.Skills] });
  }
  return <SkillsUI {...data} />;
}

/**
 * Skills component with Suspense boundary
 */
export default function Skills(props: SkillsWrapperProps) {
  return (
    <Suspense fallback={<SkillsSkeleton />}>
      <SkillsServer {...props} />
    </Suspense>
  );
}
