import type { GetFeaturedExperiencesQuery } from '@/lib/graphql/__generated__/hooks';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { RichText } from './RichText';
import Link from 'next/link';
import { Routes } from '@/lib/config/config/routes';
import { Button } from '../ui';

interface FeaturedExperienceProps {
  experience: NonNullable<GetFeaturedExperiencesQuery['FeaturedExperience']>['experiences'][number];
}
export const FeaturedExperience = ({
  experience: { summary, id, title, endDate, slug, role, startDate },
}: FeaturedExperienceProps) => {
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
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex h-full flex-col gap-1"
    >
      <h3 className="font-medium text-accent text-xl">{role}</h3>
      <h4 className="text-accent text-lg">{title}</h4>
      <p className=" text-black/80 text-sm">{getDateRange()}</p>

      <hr className="mt-2 w-full border-accent/30 border-t-1" />

      <div className="-mx-2 text-black text-sm">
        <RichText data={summary} />
      </div>
      <Link href={`${Routes.Experiences}/${slug}`}>
        <Button variant="link" size="sm" color="accent">
          View more
        </Button>
      </Link>
    </motion.div>
  );
};
