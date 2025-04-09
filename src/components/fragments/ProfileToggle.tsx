'use client';
import { AssetsMap } from '@/lib/assets';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  toggleContainerVariants,
  useToggleKnobAnimation,
  useToggleContainerAnimation,
} from '@/lib/animations';
import { useResizeObserver } from '@/lib/hooks';

interface ProfileToggleProps {
  initialAnimComplete: boolean;
}

export const ProfileToggle = ({ initialAnimComplete }: ProfileToggleProps) => {
  const [isToggled, setIsToggled] = useState(false);
  const [endPosition, setEndPosition] = useState(0);
  const { ref, rect } = useResizeObserver<HTMLDivElement>();

  // Calculate end position when container size changes
  if (rect && rect.width > 0) {
    const containerWidth = rect.width;
    const knobWidth = (containerWidth / rect.width) * rect.height; // Approximating knob width
    const calculatedEndPosition = containerWidth - knobWidth;

    if (calculatedEndPosition !== endPosition) {
      setEndPosition(calculatedEndPosition);
    }
  }

  // Use custom animation hooks
  const { x, scale, opacity } = useToggleKnobAnimation(isToggled, endPosition, initialAnimComplete);
  const { backgroundColor } = useToggleContainerAnimation(isToggled);

  // Handle toggle interaction
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <motion.div
      ref={ref}
      className="relative h-20 w-60 cursor-pointer overflow-hidden rounded-r-full rounded-l-full shadow-md md:h-30 md:w-72"
      variants={toggleContainerVariants}
      initial="hidden"
      animate="visible"
      style={{ backgroundColor }}
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
        className="absolute top-0 z-10 flex aspect-square h-full items-center justify-center overflow-hidden shadow-lg"
        style={{ x, scale, opacity }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1 }}
      >
        <img src={AssetsMap.RemoteImages.Face} alt="Face" className="h-full w-full object-cover" />
      </motion.div>
    </motion.div>
  );
};
