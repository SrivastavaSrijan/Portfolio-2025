import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isElementInViewport = (bottom: number) => {
  const { innerHeight } = window;
  const { top } = document.documentElement.getBoundingClientRect();
  return bottom <= innerHeight + top;
};
