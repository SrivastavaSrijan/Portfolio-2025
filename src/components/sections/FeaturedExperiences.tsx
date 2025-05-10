'use client';
import { useGetFeaturedExperiencesSuspenseQuery } from '@/lib/graphql/__generated__/hooks';
import Image from 'next/image';
import dayjs from 'dayjs';
import { Routes } from '@/lib/config/config/routes';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const FeaturedExperiences = () => {
  const { data } = useGetFeaturedExperiencesSuspenseQuery();
  const { experiences, subtitle, title, description } = data?.FeaturedExperience ?? {};

  return (
    <div className="bg-white p-4 md:p-20">
      <div className="flex flex-col gap-5 rounded-r-2xl rounded-l-2xl border-1 border-black-500 bg-blue-black-50 px-6 py-12 md:flex-row md:gap-15 md:px-16 md:py-16">
        <div className="flex flex-1/3 flex-col gap-1 border-black-500 border-b-1 pr-5 pb-2 md:border-r-1 md:border-b-0 md:pr-10">
          <h3 className="text-left text-accent text-lg">{title}</h3>
          <h2 className="text-left font-semibold text-2xl text-accent md:text-4xl">{subtitle}</h2>
          <p className="mt-2 text-center text-sm text-white md:mt-3 md:text-base">{description}</p>
        </div>

        <div className="flex flex-2/3 flex-col gap-4 md:gap-6">
          {experiences?.map((experience) => {
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

            return (
              <div key={id} className="flex w-full flex-row gap-20">
                <motion.div
                  className="relative flex h-[64px] w-[256px] items-start overflow-hidden rounded-md"
                  whileHover={{
                    transition: { type: 'spring' },
                    filter: 'brightness(0.8) grayscale(0)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, filter: 'brightness(0.8) grayscale(1)' }}
                  exit={{ opacity: 0 }}
                  layoutId={id?.toString()}
                  layout
                  transition={{ duration: 0.2 }}
                >
                  <Link href={`${Routes.Experiences}/${slug}`}>
                    <Image
                      alt={experienceTitle}
                      fill
                      className="object-contain"
                      src={thumbnailImage?.url ?? ''}
                    />
                  </Link>
                </motion.div>
                <div className="flex flex-1 flex-col gap-1">
                  <h3 className="font-medium text-accent text-xl">{role}</h3>
                  <h4 className="text-accent text-lg">{title}</h4>
                  <p className=" text-black/80 text-sm">{getDateRange()}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
