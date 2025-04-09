'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { containerVariants, itemVariants, paragraphVariants } from '@/lib/animations';
import { ProfileToggle, AnimatedTagline } from '@/components/fragments';
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
  const { buttons = [], description = [], name, title } = data?.Hero ?? {};

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="hero-section"
        className="flex h-full flex-grow flex-col gap-7 px-5 py-5 md:gap-15 md:px-20 md:py-10"
        initial="hidden"
        animate={controls}
        exit="exit"
        variants={containerVariants}
      >
        <div className="flex flex-wrap items-end gap-1 md:gap-10">
          <motion.h1
            className="text-brand text-display-3 md:text-display-1"
            variants={itemVariants}
          >
            {name}
          </motion.h1>
          <span className="md:basis flex basis-full md:hidden" />
          <ProfileToggle initialAnimComplete={isAnimationComplete} />
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <motion.h2
            className="font-medium text-3xl text-brand md:font-normal md:text-display-2"
            variants={itemVariants}
          >
            {title}
          </motion.h2>
          <AnimatedTagline isClient={isClient} initialAnimComplete={isAnimationComplete} />
        </div>
        <motion.div
          className="gap-2 md:gap-5"
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

        <motion.div
          className="mt-3 flex flex-row flex-wrap justify-between gap-3 md:mt-32 md:gap-0"
          variants={containerVariants}
        >
          <ContactForm>
            <Button variant="link" color="brand">
              Get In Touch
            </Button>
          </ContactForm>
          <span className="md:basis flex basis-full md:hidden" />
          <div className="flex w-full justify-between md:w-fit md:justify-end md:gap-5">
            {buttons.map((button) => (
              <Button
                variant="outlined"
                color="ghost"
                key={button.text}
                onClick={() => {
                  if (button.url) {
                    window.open(button.url, '_blank');
                  }
                }}
              >
                {button.text}
              </Button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
