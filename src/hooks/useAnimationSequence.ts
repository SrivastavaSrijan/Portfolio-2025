import { useState, useEffect } from 'react';
import { useAnimation } from 'framer-motion';

interface AnimationSequenceOptions {
  /**
   * Whether to run the animation (useful for conditional animations)
   */
  shouldAnimate: boolean;

  /**
   * Delay in ms before marking the animation as complete
   */
  completionDelay?: number;
}

/**
 * A hook to handle a sequence of animations with completion state
 */
export function useAnimationSequence({
  shouldAnimate,
  completionDelay = 200,
}: AnimationSequenceOptions) {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      if (shouldAnimate) {
        // Start main animation
        await controls.start('visible');

        // Mark animation as complete after delay
        setTimeout(() => {
          setIsAnimationComplete(true);
        }, completionDelay);
      }
    };

    sequence();
  }, [shouldAnimate, controls, completionDelay]);

  return {
    controls,
    isAnimationComplete,
  };
}
