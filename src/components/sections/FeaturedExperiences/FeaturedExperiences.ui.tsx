'use client';
import Link from 'next/link';
import { motion, type Variants } from 'motion/react';
import { Button, Picture } from '@/components/ui';
import { Routes } from '@/lib/config/routes';
import type { FeaturedExperiencesUIProps } from './FeaturedExperiences.utils';
import { ArrowUpRight } from 'lucide-react';

// Simplified animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      delay: index * 0.1,
    },
  }),
};

export function FeaturedExperiencesUI({
  experiences,
  subtitle,
  title,
  description,
}: FeaturedExperiencesUIProps) {
  return (
    <section className="bg-white p-4 lg:p-20">
      <div className="flex flex-col gap-5 rounded-2xl border-1 border-black-500 bg-blue-black-50 px-6 py-8 shadow-sm lg:flex-row lg:items-center lg:gap-15 lg:px-12 lg:py-12">
        <motion.div
          className="flex flex-1/3 flex-col gap-2 border-black-500 border-b-1 pr-5 pb-4 lg:border-r-1 lg:border-b-0 lg:pr-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-left font-semibold text-accent text-base">{title}</h3>
          <h2 className="text-left font-semibold text-2xl text-accent lg:text-4xl">{subtitle}</h2>
          <p className="mt-2 text-left text-sm text-white/90 lg:mt-3 lg:text-base">{description}</p>
        </motion.div>

        <motion.div
          className="flex h-full flex-2/3 flex-col gap-5 pt-3 lg:flex-row lg:gap-15 lg:pt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((experience, index) => {
            const { id, title: experienceTitle, slug, thumbnailImage } = experience;

            return (
              <Link
                key={id}
                href={slug ? Routes.ExperiencesBySlug(slug) : ''}
                className="contents"
                passHref
              >
                <motion.div
                  className="flex w-full cursor-pointer flex-row items-center justify-between rounded-lg transition-colors hover:bg-white/5"
                  variants={itemVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 'some' }}
                >
                  <Picture
                    media={thumbnailImage}
                    imageSize="thumbnail"
                    alt={experienceTitle}
                    fill
                    className="object-contain brightness-90 grayscale-[80%] transition-all duration-300 group-hover:brightness-100 group-hover:grayscale-0"
                    wrapperProps={{
                      className:
                        'group relative flex h-[60px] w-[128px] items-start overflow-hidden rounded-md bg-white/10 transition-transform hover:scale-[1.03] lg:w-[156px]',
                    }}
                  />

                  <Button variant="link" color="accent" className="lg:hidden">
                    Read More
                    <ArrowUpRight />
                  </Button>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
