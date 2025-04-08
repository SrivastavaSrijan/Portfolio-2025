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
        className="dark flex flex-col md:px-20 md:py-10 md:gap-15 py-5 px-5 gap-7 flex-grow h-full"
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
            {name}
          </motion.h1>
          <span className="md:basis basis-full md:hidden flex" />
          <ProfileToggle initialAnimComplete={isAnimationComplete} />
        </div>
        <div className="flex flex-col md:gap-2 gap-1">
          <motion.h2
            className="md:text-display-2 text-3xl md:font-normal font-medium text-brand"
            variants={itemVariants}
          >
            {title}
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
          <RichText
            data={description}
            className="md:text-3xl  md:font-normal font-medium  text-xs text-brand flex md:gap-2 gap-1 flex-col"
          />
        </motion.div>

        <motion.div
          className="flex flex-row md:mt-32 mt-10 justify-between flex-wrap md:gap-0 gap-3"
          variants={containerVariants}
        >
          <ContactForm>
            <Button variant="link" color="brand" size="lg">
              Get In Touch
            </Button>
          </ContactForm>
          <span className="md:basis basis-full md:hidden flex" />
          {buttons.map((button) => (
            <Button
              size="default"
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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
