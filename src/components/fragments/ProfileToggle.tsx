'use client';
import { AssetsMap } from '@/lib/assets';
import { motion } from 'framer-motion';
import { useState, useCallback } from 'react';
import { toggleContainerVariants, toggleKnobVariants } from '@/lib/animations/Hero.animations';

interface ProfileToggleProps {
  initialAnimComplete: boolean;
}

export const ProfileToggle = ({ initialAnimComplete }: ProfileToggleProps) => {
  const [isToggled, setIsToggled] = useState(false);
  const [endPosition, setEndPosition] = useState(0);

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

  // Handle toggle interaction
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <motion.div
      ref={containerRef}
      className="rounded-r-full rounded-l-full md:w-72 w-60 md:h-30 h-20
                relative cursor-pointer shadow-md overflow-hidden"
      variants={toggleContainerVariants}
      animate={isToggled ? 'toggled' : 'visible'}
      initial="hidden"
      onClick={handleToggle}
      role="switch"
      aria-checked={isToggled}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleToggle();
          e.preventDefault();
        }
      }}
    >
      {/* Image as toggle knob */}
      <motion.div
        className="h-full aspect-square flex items-center justify-center 
                  overflow-hidden shadow-lg z-10"
        style={{
          position: 'absolute',
          top: 0,
          x: isToggled ? endPosition : 0,
        }}
        variants={toggleKnobVariants}
        initial="hidden"
        animate={initialAnimComplete && !isToggled ? 'pulse' : 'visible'}
        transition={
          isToggled
            ? {
                x: { type: 'spring', stiffness: 300, damping: 20 },
              }
            : {
                x: { type: 'spring', stiffness: 300, damping: 20 },
              }
        }
      >
        <img src={AssetsMap.Images.Face} alt="Face" className="object-cover h-full w-full" />
      </motion.div>
    </motion.div>
  );
};
