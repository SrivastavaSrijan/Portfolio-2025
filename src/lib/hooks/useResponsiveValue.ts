'use client';
import { useState, useEffect } from 'react';

type BreakpointKey = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type BreakpointMap = Record<BreakpointKey, number>;

const breakpoints: BreakpointMap = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

type ResponsiveObject<T> = {
  base: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
};

/**
 * Returns a value based on the current screen size.
 *
 * @param responsiveValue An object with keys for different breakpoints
 * @param customBreakpoints Optional custom breakpoints
 */
export function useResponsiveValue<T>(responsiveValue: ResponsiveObject<T>): T {
  const [value, setValue] = useState<T>(responsiveValue.base);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= breakpoints['2xl'] && responsiveValue['2xl'] !== undefined) {
        setValue(responsiveValue['2xl']);
      } else if (width >= breakpoints.xl && responsiveValue.xl !== undefined) {
        setValue(responsiveValue.xl);
      } else if (width >= breakpoints.lg && responsiveValue.lg !== undefined) {
        setValue(responsiveValue.lg);
      } else if (width >= breakpoints.md && responsiveValue.md !== undefined) {
        setValue(responsiveValue.md);
      } else if (width >= breakpoints.sm && responsiveValue.sm !== undefined) {
        setValue(responsiveValue.sm);
      } else {
        setValue(responsiveValue.base);
      }
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [responsiveValue]);

  return value;
}
