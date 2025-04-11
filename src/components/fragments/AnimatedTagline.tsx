'use client';
import { motion, useAnimation } from 'framer-motion';
import { useTaglineAnimation } from '@/lib/animations';
import { useEffect, useState, useRef } from 'react';
import { useGetHeroSuspenseQuery } from '@/lib/graphql/__generated__/hooks';

interface AnimatedTaglineProps {
  isClient: boolean;
  initialAnimComplete: boolean;
}

export const AnimatedTagline = ({ isClient, initialAnimComplete }: AnimatedTaglineProps) => {
  // Responsive font size based on viewport width
  const [fontSize, setFontSize] = useState(32);
  const controls = useAnimation();
  const textRef = useRef<SVGTextElement>(null);

  const { data = {} } = useGetHeroSuspenseQuery();
  const { taglines = [] } = data?.Hero ?? {};
  const [leadingText, animatedText] = taglines;
  // Get animation values from custom hook
  const { fillOpacity, strokeDasharray, strokeWidth, pathLength } = useTaglineAnimation(
    isClient,
    initialAnimComplete
  );

  // Update font size based on viewport
  useEffect(() => {
    const updateFontSize = () => {
      if (window.innerWidth < 640) {
        setFontSize(28);
      } else if (window.innerWidth < 1024) {
        setFontSize(32);
      } else if (window.innerWidth < 1280) {
        setFontSize(36);
      } else {
        setFontSize(42);
      }
    };

    updateFontSize();
    window.addEventListener('resize', updateFontSize);
    return () => window.removeEventListener('resize', updateFontSize);
  }, []);

  // Start phrase animation as soon as possible
  useEffect(() => {
    if (isClient) {
      // Force immediate animation on client side
      controls.start('visible');
    }
  }, [isClient, controls]);

  return (
    <div className="-mt-4 relative flex flex-wrap items-end gap-2 font-semibold text-brand text-xl md:mt-0 md:gap-3 md:font-normal md:text-display-5">
      {isClient ? (
        <>
          {/* "I make things look" text */}
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              duration: 0.8,
              stiffness: 100,
              damping: 15,
            }}
          >
            {leadingText?.text}
          </motion.span>

          {/* "good" text with SVG effects */}
          <div className="-left-1 relative top-1.5 inline-block md:top-2 md:left-0">
            <svg
              className="inline-block h-[42px] w-[80px] md:h-[60px] md:w-[110px] lg:h-[70px] lg:w-[140px] xl:h-[80px] xl:w-[160px]"
              viewBox="0 0 100 50"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{animatedText?.text}</title>
              {/* Outline text */}
              <motion.text
                ref={textRef}
                x="5"
                y="35"
                fontSize={fontSize}
                fontWeight="bold"
                fill="none"
                stroke="var(--color-orange-300)"
                className="font-bold"
                style={{ strokeDasharray, strokeWidth }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
              >
                {animatedText?.text}
              </motion.text>

              {/* Fill text */}
              <motion.text
                x="5"
                y="35"
                fontSize={fontSize}
                fontWeight="bold"
                fill="var(--color-orange-300)"
                className="font-bold"
                style={{ fillOpacity }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
              >
                {animatedText?.text}
              </motion.text>
            </svg>

            {/* Underline - positioned based on text width */}
            <svg
              className="md:-bottom-1 -bottom-1 absolute left-0 w-full"
              height="8"
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
            >
              <title>Underline</title>
              <motion.path
                d="M0,4 Q25,8 50,4 T100,4"
                stroke="var(--color-orange-400)"
                strokeWidth="1.5"
                fill="none"
                style={{ pathLength }}
                initial={{ opacity: 1 }}
              />
            </svg>
          </div>
        </>
      ) : (
        <span className="inline-block">
          {leadingText?.text} {animatedText?.text}
        </span>
      )}
    </div>
  );
};
