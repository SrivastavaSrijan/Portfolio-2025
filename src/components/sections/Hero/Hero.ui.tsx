'use client';
import { motion, AnimatePresence } from 'motion/react';
import { ProfileToggle, WorkButtons } from '@/components/shared';
import { Button } from '@/components/ui';
import { ContactForm } from '@/components/shared/ContactForm';
import { RichText } from '@/components/shared/RichText';
import { containerVariants, itemVariants, paragraphVariants } from './Hero.animations';
import { useAnimationSequence } from '@/lib/hooks';
import type { HeroUIProps } from './Hero.utils';
import { AnimatedTagline } from './components/AnimatedTagline';

/**
 * Hero UI Component - Pure UI component that receives typed GraphQL data
 * This component handles all the visual rendering and animations
 * Now optimized for SSR with motion components
 */
export function HeroUI({ name, title, description, taglines, workButtons }: HeroUIProps) {
  const { controls, isAnimationComplete } = useAnimationSequence({
    shouldAnimate: true, // Always animate, motion handles SSR
  });

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key="hero-section"
        className="mx-auto flex h-full min-h-[calc(60vh-52px)] max-w-[1440px] flex-grow flex-col gap-7 px-5 py-5 lg:min-h-[calc(100vh-94px)] lg:gap-8 lg:px-20 lg:py-10"
        initial="hidden"
        animate={controls}
        exit="exit"
        variants={containerVariants}
      >
        <div className="flex flex-col items-start gap-4 lg:gap-10">
          <div className="flex flex-wrap items-end gap-2 lg:gap-10">
            <motion.h1
              className="text-brand text-display-6 lg:text-display-1"
              variants={itemVariants}
            >
              {name}
            </motion.h1>
            <span className="lg:basis flex basis-full lg:hidden" />
            <ProfileToggle initialAnimComplete={isAnimationComplete} />
          </div>

          <div className="flex flex-col gap-2.5 lg:gap-2">
            <motion.h2
              className="font-medium text-3xl text-brand lg:font-normal lg:text-display-5"
              variants={itemVariants}
            >
              {title}
            </motion.h2>
            <AnimatedTagline taglines={taglines} initialAnimComplete={isAnimationComplete} />
          </div>
        </div>
        <span className="flex-1" />

        {description && (
          <motion.div
            className="gap-2 lg:gap-10"
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <RichText
              data={description}
              className="flex flex-col gap-1 text-[15px] text-brand lg:gap-2 lg:text-2xl [&_a]:text-primary"
            />
          </motion.div>
        )}

        <span className="flex-1" />

        <motion.div
          className="flex flex-row flex-wrap justify-between gap-2 lg:gap-0"
          variants={containerVariants}
        >
          <ContactForm>
            <Button variant="link" color="brand">
              Get In Touch
            </Button>
          </ContactForm>
          <span className="lg:basis flex basis-full lg:hidden" />
          <WorkButtons buttons={workButtons} />
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
}
