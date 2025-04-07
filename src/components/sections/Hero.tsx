'use client';
import { motion, AnimatePresence } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
  paragraphVariants,
} from '@/lib/animations/Hero.animations';
import { useEffect, useState } from 'react';
import { ProfileToggle } from '@/components/fragments/ProfileToggle';
import { AnimatedTagline } from '@/components/fragments/AnimatedTagline';
import { Button } from '../ui';

export const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  const [initialAnimComplete, setInitialAnimComplete] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (initialAnimComplete) {
      const timer = setTimeout(() => {
        setInitialAnimComplete(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [initialAnimComplete]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="hero-section"
        className="flex flex-col md:px-20 md:py-10 md:gap-15 py-5 px-5 gap-7 flex-grow h-full"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
        onAnimationComplete={() => setInitialAnimComplete(true)}
      >
        <div className="flex flex-wrap items-end md:gap-10 gap-1 md:mb-0 mb-6">
          <motion.h1
            className="md:text-display-1 text-display-3 text-brand"
            variants={itemVariants}
          >
            Srijan.
          </motion.h1>
          <span className="md:basis basis-full md:hidden flex" />

          <ProfileToggle initialAnimComplete={initialAnimComplete} />
        </div>
        <div className="flex flex-col md:gap-2 gap-1">
          <motion.h2
            className="md:text-display-2 text-3xl md:font-normal font-medium text-brand"
            variants={itemVariants}
          >
            Frontend Developer.
          </motion.h2>

          <AnimatedTagline isClient={isClient} initialAnimComplete={initialAnimComplete} />
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
              'innately curious person who takes Occam’s Razor as gospel.',
              'a technology stack is irrelevant—the main focus is the user.',
              'the only way to design is to design with accessibility in mind.',
            ].join(' ')}
          </p>
        </motion.div>
        <div className="flex flex-row md:mt-32 mt-10">
          <Button variant="link">Get in touch</Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
