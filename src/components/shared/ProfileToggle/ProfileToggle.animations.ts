import {
  type Variants,
  useMotionValue,
  useSpring,
  animate,
  type AnimationPlaybackControls,
} from 'motion/react';
import { useEffect } from 'react';

export const toggleContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    backgroundColor: 'var(--color-orange-300)',
  },
  visible: {
    opacity: 1,
    y: 0,
    backgroundColor: 'var(--color-orange-300)',
    transition: { duration: 0.5 },
  },
  toggled: {
    opacity: 1,
    backgroundColor: 'var(--color-orange-500)',
    transition: { duration: 0.3 },
  },
  untoggled: {
    backgroundColor: 'var(--color-orange-300)',
    transition: { duration: 0.3 },
  },
};

export const useToggleKnobAnimation = (
  isToggled: boolean,
  endPosition: number,
  initialAnimComplete: boolean
) => {
  const x = useMotionValue(0);
  const scale = useSpring(1, { stiffness: 300, damping: 20 });
  const opacity = useMotionValue(1);

  // Handle toggle position changes
  useEffect(() => {
    if (endPosition === 0) return; // Skip before container is measured

    // Animate x position with physics
    animate(x, isToggled ? endPosition : 0, {
      type: 'spring',
      stiffness: 300,
      damping: 25,
    });

    // Animate scale for toggled state
    animate(scale, isToggled ? 1.1 : 1, {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    });
  }, [isToggled, endPosition, x, scale]);

  // Add pulse animation
  useEffect(() => {
    if (!initialAnimComplete || isToggled) return;

    let pulseAnimation: AnimationPlaybackControls;

    const startPulse = () => {
      pulseAnimation = animate(scale, [1, 1.05, 1], {
        duration: 2,
        ease: 'easeInOut',
        repeat: Number.POSITIVE_INFINITY,
        repeatType: 'reverse',
      });
    };

    startPulse();

    return () => {
      pulseAnimation?.stop();
    };
  }, [initialAnimComplete, isToggled, scale]);

  return { x, scale, opacity };
};

// Custom hook for toggle container background animation
export const useToggleContainerAnimation = (isToggled: boolean) => {
  const backgroundColor = useMotionValue('var(--color-orange-300)');

  useEffect(() => {
    animate(backgroundColor, isToggled ? 'var(--color-orange-500)' : 'var(--color-orange-300)', {
      duration: 0.3,
    });
  }, [isToggled, backgroundColor]);

  return { backgroundColor };
};
