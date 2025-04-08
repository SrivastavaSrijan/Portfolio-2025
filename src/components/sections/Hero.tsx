'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { containerVariants, itemVariants, paragraphVariants } from '@/lib/animations';
import { ProfileToggle, AnimatedTagline } from '@/components/fragments';
import { Button } from '../ui';
import { useClientSide, useAnimationSequence } from '@/hooks';
import { ContactForm } from '../fragments/ContactForm';

export const Hero = () => {
  const isClient = useClientSide();
  const { controls, isAnimationComplete } = useAnimationSequence({
    shouldAnimate: isClient,
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="hero-section"
        className="flex flex-col md:px-20 md:py-10 md:gap-15 py-5 px-5 gap-7 flex-grow h-full"
        initial="hidden"
        animate={controls}
        exit="exit"
        variants={containerVariants}
      >
        <div className="flex flex-wrap items-end md:gap-10 gap-1 md:mb-0 mb-6">
          <motion.h1
            className="md:text-display-1 text-display-3 text-brand"
            variants={itemVariants}
          >
            Srijan.
          </motion.h1>
          <span className="md:basis basis-full md:hidden flex" />

          <ProfileToggle initialAnimComplete={isAnimationComplete} />
        </div>
        <div className="flex flex-col md:gap-2 gap-1">
          <motion.h2
            className="md:text-display-2 text-3xl md:font-normal font-medium text-brand"
            variants={itemVariants}
          >
            frontend / fullstack
          </motion.h2>

          <AnimatedTagline isClient={isClient} initialAnimComplete={isAnimationComplete} />
        </div>
        <motion.div
          className="md:gap-5 gap-2"
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <p className="md:text-3xl text-sm text-brand">
            {[
              'passionate about technology since 32-bit computing was mainstream.',
              "innately curious person who takes Occam's Razor as gospel.",
              'a technology stack is irrelevant—the main focus is the user.',
              'the only way to design is to design with accessibility in mind.',
            ].join(' ')}
          </p>
        </motion.div>
        <div className="flex flex-row md:mt-32 mt-10">
          <ContactForm>
            <Button variant="link">Get in touch</Button>
          </ContactForm>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
