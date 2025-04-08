'use client';
import { motion } from 'framer-motion';
import {
  phraseVariants,
  emphasisVariants,
  underlinePathVariants,
  textFillVariants,
} from '@/lib/animations/Hero.animations';

interface AnimatedTaglineProps {
  isClient: boolean;
  initialAnimComplete: boolean;
}

export const AnimatedTagline = ({ isClient, initialAnimComplete }: AnimatedTaglineProps) => {
  return (
    <div className="md:text-display-5 text-xl md:font-normal font-semibold text-brand flex flex-wrap items-end gap-2 md:gap-3 relative">
      {isClient ? (
        <>
          <motion.span
            className="inline-block"
            variants={phraseVariants}
            initial="hidden"
            animate="visible"
          >
            I make things look
          </motion.span>

          <div className="inline-block relative">
            <svg
              className="inline-block w-[70px] md:w-[100px] lg:w-[120px] xl:w-[140px] h-[40px] md:h-[55px] lg:h-[65px]"
              viewBox="0 0 100 50"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Good</title>
              {/* Outline text */}
              <motion.text
                x="10"
                y="35"
                fontSize="32"
                fontWeight="bold"
                fill="none"
                stroke="var(--color-orange-300)"
                strokeWidth="1"
                variants={emphasisVariants}
                initial="hidden"
                animate={initialAnimComplete ? 'outlineAnim' : 'visible'}
                className="font-bold"
              >
                good
              </motion.text>

              {/* Fill text */}
              <motion.text
                x="10"
                y="35"
                fontSize="32"
                fontWeight="bold"
                fill="var(--color-orange-300)"
                variants={textFillVariants}
                initial="hidden"
                animate={initialAnimComplete ? 'fillAnim' : 'initialFill'}
                className="font-bold"
              >
                good
              </motion.text>
            </svg>

            {/* Underline */}
            <svg
              className="absolute -bottom-1 left-0 w-full"
              height="6"
              viewBox="0 0 100 6"
              preserveAspectRatio="none"
            >
              <title>Underline</title>
              <motion.path
                d="M0,3 Q25,6 50,3 T100,3"
                stroke="var(--color-orange-400)"
                strokeWidth="2"
                fill="none"
                variants={underlinePathVariants}
                initial="hidden"
                animate="visible"
              />
            </svg>
          </div>
        </>
      ) : (
        <span className="inline-block">I make things look good</span>
      )}
    </div>
  );
};
