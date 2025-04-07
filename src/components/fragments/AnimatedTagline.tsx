'use client';
import { motion } from 'framer-motion';
import {
  phraseVariants,
  emphasisVariants,
  underlinePathVariants,
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
          <motion.span className="inline-block" variants={phraseVariants}>
            I make things look
          </motion.span>

          <div className="inline-block relative">
            <motion.span
              className="inline-block font-bold relative text-orange-300"
              style={{ fontSize: '108%' }}
              variants={emphasisVariants}
              animate={initialAnimComplete ? 'glow' : 'visible'}
            >
              good
            </motion.span>

            {/* SVG underline for the "good" part */}
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
        <span className="inline-block">
          I make things look{' '}
          <span className="font-bold text-orange-300" style={{ fontSize: '108%' }}>
            good
          </span>
        </span>
      )}
    </div>
  );
};
