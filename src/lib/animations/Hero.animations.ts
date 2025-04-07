import type { Variants } from 'framer-motion';

// Container variants with more subtle staggering
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

// Item variants with more subtle, natural physics
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

// Enhanced variant for the profile image with subtle physics
export const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -15,
    filter: 'blur(3px)',
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 16,
      mass: 1,
    },
  },
  hover: {
    scale: 1.05,
    rotate: 2,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 10,
      mass: 1.2,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    x: -50,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  pulse: {
    scale: [1, 1.03, 1],
    opacity: [1, 0.8, 1],
    rotate: [0, 1, 0],
    transition: {
      duration: 2.5,
      ease: 'easeInOut',
      times: [0, 0.5, 1],
      repeat: Number.POSITIVE_INFINITY,
      repeatDelay: 3,
    },
  },
  // Subtle, continuous fluid motion inspired by macOS dock
  subtle: {
    opacity: 1,
    filter: 'blur(0px)',
    y: [0, -2, 0],
    x: [0, 2, 0],
    transition: {
      y: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'easeInOut',
        repeatType: 'reverse',
      },
    },
  },
};

// Toggle container animation variants - removed, using direct controls instead
export const toggleContainerVariants: Variants = {
  // We're now handling this with useAnimation directly in the component
};

// Knob/image animation variants - removed, using direct controls instead
export const toggleKnobVariants: Variants = {
  // We're now handling this with useAnimation directly in the component
};

// Subtle phrase variant for tagline
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
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

// Refined emphasis variant for "good" with sophisticated highlight
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
  // Subtle background glow effect
  glow: {
    textShadow: [
      '0px 0px 0px rgba(253, 126, 20, 0.0)',
      '0px 0px 3px rgba(253, 126, 20, 0.4)',
      '0px 0px 0px rgba(253, 126, 20, 0.0)',
    ],
    transition: {
      duration: 2.8,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 1.2,
    y: -30,
    transition: {
      duration: 0.6,
      ease: 'backIn',
    },
  },
};

// SVG path animation for underline effect
export const underlinePathVariants: Variants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 1.6,
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};
