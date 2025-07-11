import type { Variants } from 'motion/react';
import { useAnimate } from 'motion/react';
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

// Custom hook for tagline text animations
export const useTaglineAnimation = (shouldAnimate: boolean, initialAnimComplete: boolean) => {
  const [scope, animate] = useAnimate();

  // Animation sequence with improved timing
  useEffect(() => {
    if (!shouldAnimate) return;

    const runAnimation = async () => {
      if (!initialAnimComplete) {
        // -- Initial animation sequence --
        await animate([
          [scope.current, { opacity: 1 }],
          ['.tagline-outline-text', { strokeDasharray: '0 100', strokeWidth: 1 }, { duration: 0 }],
          ['.tagline-fill-text', { fillOpacity: 0 }, { duration: 0 }],
          ['.tagline-underline-path', { pathLength: 0 }, { duration: 0 }],
          [
            '.tagline-outline-text',
            { strokeDasharray: '100 0' },
            { duration: 0.8, ease: 'easeInOut', at: 0.2 },
          ],
          [
            '.tagline-underline-path',
            { pathLength: 1 },
            { duration: 0.5, ease: 'easeOut', at: 0.7 },
          ],
          [
            '.tagline-fill-text',
            { fillOpacity: 0.7 },
            { duration: 0.8, ease: 'easeInOut', at: 0.8 },
          ],
        ]);
      } else {
        // -- Ongoing animations after initial sequence --
        animate(
          '.tagline-outline-text',
          { strokeDasharray: '100 0', strokeWidth: 1 },
          { duration: 0 }
        );
        animate('.tagline-underline-path', { pathLength: 1 }, { duration: 0 });
        animate('.tagline-fill-text', { fillOpacity: 0.7 }, { duration: 0 });

        // 1. Animate stroke pattern
        animate(
          '.tagline-outline-text',
          { strokeDasharray: ['100 0', '90 10', '80 20', '0 100', '20 80', '40 60', '100 0'] },
          {
            duration: 8,
            ease: 'easeInOut',
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'loop',
          }
        );

        // 2. Animate stroke width for emphasis
        animate(
          '.tagline-outline-text',
          { strokeWidth: [1, 1.2, 1.5, 1.2, 1] },
          {
            duration: 8,
            ease: 'easeInOut',
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'loop',
          }
        );

        // 3. Animate fill opacity for subtle effect
        animate(
          '.tagline-fill-text',
          { fillOpacity: [0.6, 0.8, 0.6] },
          {
            duration: 4,
            ease: 'easeInOut',
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'loop',
          }
        );
      }
    };

    // Run the animation sequence
    runAnimation();
  }, [shouldAnimate, initialAnimComplete, animate, scope]);

  return { scope };
};
