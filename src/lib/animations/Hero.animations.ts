import type { Variants } from 'motion/react';
import { useMotionValue, useSpring, animate, type AnimationPlaybackControls } from 'motion/react';
import { useEffect } from 'react';

// Page section animation variants
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Text element animation variants with subtle physics
export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
};

// Paragraph animation variants
export const paragraphVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20,
      mass: 1,
      delay: 0.1,
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
      mass: 1,
      duration: 0.6,
    },
  },
};

// Profile toggle animation variants
export const toggleKnobVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  pulse: {
    scale: [1, 1.05, 1],
    opacity: 1, // Explicitly set opacity to ensure visibility
    transition: {
      scale: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Number.POSITIVE_INFINITY,
        repeatType: 'reverse',
      },
    },
  },
  toggled: {
    scale: 1.1,
    opacity: 1, // Explicitly set opacity to ensure visibility
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
};

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

// Tagline animation variants
export const phraseVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: [0.22, 1, 0.36, 1],
      duration: 0.8,
    },
  },
};

// Outline animation for "good" text
export const emphasisVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 70,
      damping: 14,
      delay: 0.1,
      mass: 1,
    },
  },
  outlineAnim: {
    opacity: 1,
    y: 0,
    scale: 1,
    strokeDasharray: ['100 0', '90 10', '80 20', '0 100', '20 80', '40 60', '100 0'],
    strokeWidth: [1, 1.2, 1.5, 1.2, 1],
    transition: {
      strokeDasharray: {
        duration: 8,
        ease: 'easeInOut',
        repeat: Number.POSITIVE_INFINITY,
        repeatType: 'loop',
      },
      strokeWidth: {
        duration: 8,
        ease: 'easeInOut',
        repeat: Number.POSITIVE_INFINITY,
        repeatType: 'loop',
      },
      opacity: { duration: 0 },
      scale: { duration: 0 },
      y: { duration: 0 },
    },
  },
};

// Fill animation for "good" text
export const textFillVariants: Variants = {
  hidden: {
    opacity: 0,
    fillOpacity: 0,
  },
  initialFill: {
    opacity: 1,
    fillOpacity: 0.7,
    transition: {
      opacity: { duration: 0.1, ease: 'easeIn' },
      fillOpacity: { duration: 0.8, ease: 'easeIn', delay: 1.2 },
    },
  },
  fillAnim: {
    opacity: 1,
    fillOpacity: [0.6, 0.8, 0.6],
    transition: {
      fillOpacity: {
        duration: 4,
        times: [0, 0.5, 1],
        ease: 'easeInOut',
        repeat: Number.POSITIVE_INFINITY,
        repeatType: 'loop',
      },
      opacity: { duration: 0 },
    },
  },
};

// Underline path animation
export const underlinePathVariants: Variants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 1.2,
      duration: 1.0,
      ease: 'easeOut',
    },
  },
};

// ---- CUSTOM ANIMATION HOOKS ----

// Custom hook for toggle knob animations
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

// Custom hook for tagline text animations
export const useTaglineAnimation = (shouldAnimate: boolean, initialAnimComplete: boolean) => {
  const fillOpacity = useMotionValue(0);
  const strokeDasharray = useMotionValue('0 100');
  const strokeWidth = useMotionValue(1);
  const pathLength = useMotionValue(0);

  // Animation sequence with improved timing
  useEffect(() => {
    if (!shouldAnimate) return;

    let animationControls: AnimationPlaybackControls[] = [];

    const runAnimation = async () => {
      // Clear any existing animations
      animationControls.forEach((control) => control.stop());
      animationControls = [];

      // Always start with visible elements
      fillOpacity.set(0); // Start with no fill
      strokeWidth.set(1);

      if (!initialAnimComplete) {
        // -- Initial animation sequence --

        // Show outline immediately
        strokeDasharray.set('0 100');

        // 1. Draw the outline
        const outlineAnim = animate(strokeDasharray, '100 0', {
          duration: 0.8,
          ease: 'easeInOut',
          delay: 0.2,
        });
        animationControls.push(outlineAnim);

        // 2. Animate the underline synchronized with fill
        const pathAnim = animate(pathLength, [0, 1], {
          duration: 0.5,
          delay: 0.7, // Start slightly sooner
          ease: 'easeOut',
        });
        animationControls.push(pathAnim);

        // 3. Fill text as underline completes
        const fillAnim = animate(fillOpacity, 0.7, {
          duration: 0.8,
          delay: 0.8, // Synchronize with underline
          ease: 'easeInOut',
        });
        animationControls.push(fillAnim);
      } else {
        // -- Ongoing animations after initial sequence --

        // Ensure elements are visible before starting animations
        strokeDasharray.set('100 0');
        pathLength.set(1);
        fillOpacity.set(0.7);

        // 1. Animate stroke pattern
        const strokeAnim = animate(
          strokeDasharray,
          ['100 0', '90 10', '80 20', '0 100', '20 80', '40 60', '100 0'],
          {
            duration: 8,
            ease: 'easeInOut',
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'loop',
          }
        );
        animationControls.push(strokeAnim);

        // 2. Animate stroke width for emphasis
        const widthAnim = animate(strokeWidth, [1, 1.2, 1.5, 1.2, 1], {
          duration: 8,
          ease: 'easeInOut',
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'loop',
        });
        animationControls.push(widthAnim);

        // 3. Animate fill opacity for subtle effect
        const opacityAnim = animate(fillOpacity, [0.6, 0.8, 0.6], {
          duration: 4,
          ease: 'easeInOut',
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'loop',
        });
        animationControls.push(opacityAnim);
      }
    };

    // Run the animation sequence
    runAnimation();

    // Clean up animations on unmount or deps change
    return () => {
      animationControls.forEach((control) => control.stop());
    };
  }, [shouldAnimate, initialAnimComplete, fillOpacity, strokeDasharray, strokeWidth, pathLength]);

  return { fillOpacity, strokeDasharray, strokeWidth, pathLength };
};
