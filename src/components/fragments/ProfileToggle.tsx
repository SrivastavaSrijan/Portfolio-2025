'use client';
import { AssetsMap } from '@/lib/assets';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';

interface ProfileToggleProps {
  initialAnimComplete: boolean;
}

export const ProfileToggle = ({ initialAnimComplete }: ProfileToggleProps) => {
  const [isToggled, setIsToggled] = useState(false);
  const [endPosition, setEndPosition] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);

  // Use animation controls for better programmatic control
  const knobControls = useAnimation();
  const containerControls = useAnimation();

  // Observe container size changes
  const containerRef = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;

      const containerWidth = entry.contentRect.width;
      const knobWidth = node.offsetHeight;
      setEndPosition(containerWidth - knobWidth);
    });

    resizeObserver.observe(node);
    return () => resizeObserver.disconnect();
  }, []);

  // Initialize animations when component mounts
  useEffect(() => {
    // Start with entry animation
    const startAnimations = async () => {
      if (!animationStarted) {
        setAnimationStarted(true);

        // Container entry animation
        await containerControls.start({
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: {
            type: 'spring',
            stiffness: 70,
            damping: 14,
            delay: 0.2,
          },
        });

        // Knob entry animation
        await knobControls.start({
          opacity: 1,
          filter: 'blur(0px)',
          scale: 1,
          transition: {
            type: 'spring',
            stiffness: 70,
            damping: 14,
            delay: 0.1,
          },
        });

        // Start subtle pulse if not toggled
        if (!isToggled && initialAnimComplete) {
          startPulseAnimation();
        }
      }
    };

    startAnimations();
  }, [animationStarted, containerControls, knobControls, isToggled, initialAnimComplete]);

  // Start pulse animation
  const startPulseAnimation = () => {
    knobControls.start({
      scale: [1, 1.06, 1],
      rotate: [1, 3, 2],
      transition: {
        duration: 3,
        ease: 'easeInOut',
        times: [0, 0.5, 1],
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 4,
      },
    });
  };

  // Handle toggle position changes
  useEffect(() => {
    if (initialAnimComplete) {
      const updatePosition = async () => {
        // Stop pulse animation
        await knobControls.stop();

        // Apply the toggled position with physics animation
        if (isToggled) {
          await knobControls.start({
            x: endPosition,
            scale: 1.2, // Slightly smaller when toggled
            opacity: 1, // Maintain full opacity
            transition: {
              type: 'spring',
              stiffness: 400,
              damping: 30,
              mass: 1,
            },
          });

          // Change container color
          containerControls.start({
            backgroundColor: 'var(--color-orange-500)',
            transition: { duration: 0.3 },
          });
        } else {
          await knobControls.start({
            x: 0,
            scale: 1, // Back to normal size
            opacity: 1, // Maintain full opacity
            transition: {
              type: 'spring',
              stiffness: 500,
              damping: 25,
              mass: 0.8,
            },
          });

          // Change container color back
          containerControls.start({
            backgroundColor: 'var(--color-orange-300)',
            transition: { duration: 0.3 },
          });

          // Restart pulse animation
          startPulseAnimation();
        }
      };

      updatePosition();
    }
  }, [isToggled, endPosition, initialAnimComplete, knobControls, containerControls]);

  // Handle toggle interaction
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <motion.div
      ref={containerRef}
      className="rounded-r-full rounded-l-full md:w-72 w-60 md:h-30 h-20
                relative cursor-pointer shadow-md overflow-hidden"
      animate={containerControls}
      initial={{
        opacity: 0,
        y: 10,
        backgroundColor: 'var(--color-orange-300)',
        filter: 'blur(3px)',
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label={isToggled ? 'Toggle button on' : 'Toggle button off'}
      role="switch"
      aria-checked={isToggled}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleToggle();
          e.preventDefault();
        }
      }}
      onClick={handleToggle}
    >
      {/* Image as toggle knob */}
      <AnimatePresence>
        <motion.div
          key="toggle-knob"
          className="h-full aspect-square flex items-center justify-center 
                    overflow-hidden shadow-lg z-10"
          style={{ position: 'absolute', top: 0 }}
          initial={{
            opacity: 0,
            scale: 0.9,
            filter: 'blur(3px)',
          }}
          animate={knobControls}
          whileHover={{
            scale: 1.05,
            transition: {
              type: 'spring',
              stiffness: 300,
              damping: 10,
            },
          }}
        >
          <motion.img
            src={AssetsMap.Images.Face}
            alt="Face"
            className="object-cover h-full w-full"
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
