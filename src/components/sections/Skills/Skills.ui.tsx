'use client';
import { motion } from 'motion/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui';
import { RichText } from '@/components/shared/RichText';
import type { SkillsUIProps } from './Skills.utils';
import { containerVariants, itemVariants } from './Skills.animations';

const MotionAccordionItem = motion.create(AccordionItem, { forwardMotionProps: true });
export function SkillsUI({ title, subtitle, skills }: SkillsUIProps) {
  return (
    <motion.section
      className="bg-primary"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 'some' }}
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-5 lg:gap-8 lg:px-96 lg:py-20">
        <motion.div
          className="flex flex-col items-start gap-1 lg:mx-auto lg:gap-2 "
          variants={itemVariants}
        >
          <h3 className="text-accent text-xs lg:text-lg">{subtitle}</h3>
          <h2 className="w-full font-medium text-4xl text-accent lg:text-center lg:text-display-6">
            {title}
          </h2>
        </motion.div>
        <Accordion
          type="multiple"
          className="flex w-full flex-col gap-2 text-accent *:border-accent lg:gap-2"
        >
          {skills.map(({ name, description }, index) => (
            <MotionAccordionItem
              key={name}
              variants={itemVariants}
              value={name || index?.toString()}
            >
              <AccordionTrigger className="[&>svg]:text-accent [&>svg]:hover:text-accent">
                <div className="flex flex-col gap-1 font-medium text-sm lg:gap-2 lg:text-2xl">
                  <h4>{name}</h4>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-xs lg:text-base">
                  {description && <RichText data={description} />}
                </div>
              </AccordionContent>
            </MotionAccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}
