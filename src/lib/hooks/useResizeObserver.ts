'use client';
import { useState, useEffect, useCallback } from 'react';

interface ResizeObserverEntry {
  contentRect: DOMRectReadOnly;
  target: Element;
}

/**
 * A hook that observes size changes of an element using ResizeObserver.
 *
 * @returns An object containing ref callback, element dimensions, and the element itself
 */
export function useResizeObserver<T extends HTMLElement>() {
  const [element, setElement] = useState<T | null>(null);
  const [rect, setRect] = useState<DOMRectReadOnly | null>(null);

  const ref = useCallback((node: T | null) => {
    if (node !== null) {
      setElement(node);
    }
  }, []);

  useEffect(() => {
    if (!element) return;

    const resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      if (!entries?.length) return;

      const entry = entries[0];
      setRect(entry.contentRect);
    });

    resizeObserver.observe(element);

    return () => {
      if (element) resizeObserver.unobserve(element);
      resizeObserver.disconnect();
    };
  }, [element]);

  return { ref, rect, element };
}
