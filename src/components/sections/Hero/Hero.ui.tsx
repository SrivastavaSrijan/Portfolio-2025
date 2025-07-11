'use client';
import * as m from 'motion/react-m';
import { ProfileToggle, WorkButtons } from '@/components/shared';
import { Button } from '@/components/ui';
import { ContactForm } from '@/components/shared/ContactForm';
import { RichText } from '@/components/shared/RichText';
import { containerVariants, itemVariants, paragraphVariants } from './Hero.animations';
import { useAnimationSequence } from '@/lib/hooks';
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
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
    <div>
      <m.section
        key="hero-section"
        className="mx-auto flex h-full min-h-[calc(50vh-52px)] max-w-[1440px] flex-grow flex-col gap-7 px-5 py-5 lg:min-h-[calc(100vh-94px)] lg:gap-8 lg:px-20 lg:py-10"
        initial="hidden"
        animate={controls}
        exit="exit"
        variants={containerVariants}
      >
        <div className="flex flex-wrap items-end gap-2 lg:gap-10">
          <m.h1 className="text-brand text-display-6 lg:text-display-1" variants={itemVariants}>
            {name}
          </m.h1>
          <span className="lg:basis flex basis-full lg:hidden" />
          <ProfileToggle initialAnimComplete={isAnimationComplete} />
        </div>

        <div className="flex flex-col gap-2 lg:gap-2">
          <m.h2
            className="font-medium text-brand text-xl lg:font-normal lg:text-display-5"
            variants={itemVariants}
          >
            {title}
          </m.h2>
          <AnimatedTagline taglines={taglines} initialAnimComplete={isAnimationComplete} />
        </div>

        <span className="flex-1" />

        {description && (
          <m.div
            className="gap-2 lg:gap-10"
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <RichText
              data={description as SerializedEditorState}
              className="flex flex-col gap-1 font-medium text-brand text-sm lg:gap-2 lg:font-normal lg:text-3xl"
            />
          </m.div>
        )}

        <span className="flex-1" />

        <m.div
          className="flex flex-row flex-wrap justify-between gap-3 lg:gap-0"
          variants={containerVariants}
        >
          <ContactForm>
            <Button variant="link" color="brand">
              Get In Touch
            </Button>
          </ContactForm>
          <span className="lg:basis flex basis-full lg:hidden" />
          <WorkButtons buttons={workButtons} />
        </m.div>
      </m.section>
    </div>
  );
}
