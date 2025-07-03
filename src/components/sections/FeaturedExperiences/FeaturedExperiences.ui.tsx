'use client';
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import { motion, type Variants } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../../ui';
import { Routes } from '@/lib/config/routes';
import type { FeaturedExperiencesUIProps } from './FeaturedExperiences.utils';

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

export function FeaturedExperiencesUI({
  experiences,
  subtitle,
  title,
  description,
}: FeaturedExperiencesUIProps) {
  return (
    <div className="bg-white p-4 md:p-20">
      <div className="flex flex-col gap-5 rounded-2xl border-1 border-black-500 bg-blue-black-50 px-6 py-12 shadow-sm md:flex-row md:gap-15 md:px-16 md:py-16">
        <motion.div
          className="flex flex-1/3 flex-col gap-2 border-black-500 border-b-1 pr-5 pb-4 md:border-r-1 md:border-b-0 md:pr-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-left font-semibold text-accent text-base">{title}</h3>
          <h2 className="text-left font-semibold text-2xl text-accent md:text-4xl">{subtitle}</h2>
          <p className="mt-2 text-left text-sm text-white/90 md:mt-3 md:text-base">{description}</p>
        </motion.div>

        <motion.div
          className="flex flex-2/3 flex-col gap-2 pt-3 md:gap-7 md:pt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((experience, index) => {
            const {
              id,
              title: experienceTitle,
              endDate,
              slug,
              role,
              thumbnailImage,
              startDate,
            } = experience;
            const getDateRange = () => {
              if (!endDate) {
                return `${dayjs(startDate).format('MMM YYYY')} - Present`;
              }
              if (dayjs(startDate).isSame(dayjs(endDate), 'year')) {
                return `${dayjs(startDate).format('MMM YYYY')} - ${dayjs(endDate).format('MMM YYYY')}`;
              }
              return `${dayjs(startDate).format('MMM YYYY')} - ${dayjs(endDate).format('MMM YYYY')}`;
            };
            const itemVariants: Variants = {
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.1,
                },
              },
            };

            return (
              <motion.div
                key={id}
                className="flex w-full flex-col gap-1 rounded-lg p-3 transition-colors hover:bg-white/5 md:flex-row md:items-center md:gap-10"
                variants={itemVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="group relative flex h-[60px] w-[156px] items-start overflow-hidden rounded-md bg-white/10 transition-transform hover:scale-[1.03] md:w-[200px]">
                  <Image
                    alt={experienceTitle}
                    fill
                    className="object-contain brightness-90 grayscale-[80%] transition-all duration-300 group-hover:brightness-100 group-hover:grayscale-0"
                    src={thumbnailImage?.url ?? ''}
                  />
                </div>
                <div className="flex flex-row items-center justify-center gap-5">
                  <div className="flex flex-1 flex-col gap-1">
                    <h3 className="font-medium text-accent text-base md:text-xl">{role}</h3>
                    <p className="text-black/70 text-xs md:text-sm">{getDateRange()}</p>
                  </div>
                  <Link
                    href={`${Routes.Experiences}/${slug}`}
                    className="transition-transform hover:scale-105 active:scale-95"
                  >
                    <Button variant="link" color="accent" size="icon">
                      <ArrowUpRight />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
