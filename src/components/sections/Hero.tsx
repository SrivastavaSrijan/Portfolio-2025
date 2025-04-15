'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { containerVariants, itemVariants, paragraphVariants } from '@/lib/animations';
import { ProfileToggle, AnimatedTagline, WorkButtons } from '@/components/fragments';
import { Button } from '../ui';
import { useClientSide, useAnimationSequence } from '@/lib/hooks';
import { ContactForm } from '../fragments/ContactForm';
import { useGetHeroSuspenseQuery } from '@/lib/graphql/__generated__/hooks';
import { RichText } from '../fragments/RichText';

export const Hero = () => {
  const isClient = useClientSide();
  const { controls, isAnimationComplete } = useAnimationSequence({
    shouldAnimate: isClient,
  });
  const { data = {} } = useGetHeroSuspenseQuery();
  const { description = [], name, title } = data?.Hero ?? {};

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="hero-section"
        className="mx-auto flex h-full min-h-[calc(100vh-52px)] max-w-[1440px] flex-grow flex-col gap-7 px-5 py-5 md:min-h-[calc(100vh-94px)] md:gap-8 md:px-20 md:py-10"
        initial="hidden"
        animate={controls}
        exit="exit"
        variants={containerVariants}
      >
        <div className="flex flex-wrap items-end gap-2 md:gap-10">
          <motion.h1
            className="text-brand text-display-6 md:text-display-1"
            variants={itemVariants}
          >
            {name}
          </motion.h1>
          <span className="md:basis flex basis-full md:hidden" />
          <ProfileToggle initialAnimComplete={isAnimationComplete} />
        </div>
        <div className="flex flex-col gap-2 md:gap-2">
          <motion.h2
            className="font-medium text-brand text-xl md:font-normal md:text-display-5"
            variants={itemVariants}
          >
            {title}
          </motion.h2>
          <AnimatedTagline isClient={isClient} initialAnimComplete={isAnimationComplete} />
        </div>
        <span className="flex-1" />
        <motion.div
          className="gap-2 md:gap-10"
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <RichText
            data={description}
            className="flex flex-col gap-1 font-medium text-brand text-sm md:gap-2 md:font-normal md:text-3xl"
          />
        </motion.div>
        <span className="flex-1" />
        <motion.div
          className="flex flex-row flex-wrap justify-between gap-3 md:gap-0"
          variants={containerVariants}
        >
          <ContactForm>
            <Button variant="link" color="brand">
              Get In Touch
            </Button>
          </ContactForm>
          <span className="md:basis flex basis-full md:hidden" />
          <WorkButtons />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
