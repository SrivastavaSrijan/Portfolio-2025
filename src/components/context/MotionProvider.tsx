'use client';

import { LazyMotion } from 'motion/react';
import type { ReactNode } from 'react';

const loadFeatures = () => import('@/lib/config/motion').then((res) => res.default);

type Props = {
  children: ReactNode;
};

export function MotionProvider({ children }: Props) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
}
