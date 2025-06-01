import { useRouter, useSearchParams } from 'next/navigation';
import { Routes } from '../../config/config/routes';
import {
  useGetCaseStudiesByParamsSuspenseQuery,
  useGetAllTagsSuspenseQuery,
} from '../../graphql/__generated__/hooks';
import { chunk, intersectionBy, uniqBy } from 'lodash';
import { isStringArrayParam } from '@/lib/utils';

export const useGetJournalData = () => {
  const { data: tagsData } = useGetAllTagsSuspenseQuery();
  const { docs = [] } = tagsData?.CaseStudies ?? {};
  const allTags = uniqBy(docs.flatMap((doc) => doc.tags).filter(Boolean), 'id');

  const router = useRouter();
  const searchParams = useSearchParams();
  const tags = searchParams.get('tags');
  const tagNames = isStringArrayParam(tags) ? tags : [tags];

  // Convert tag names to objects for intersectionBy
  const tagNamesAsObjects = tagNames.map((name) => ({ name }));

  // Use intersectionBy to find matching tags by 'name' property
  const matchingTags = intersectionBy(allTags, tagNamesAsObjects, 'name');
  const tagIds = matchingTags.map(({ id }) => id);

  const { data } = useGetCaseStudiesByParamsSuspenseQuery({
    ...(!!tagIds.length && {
      variables: {
        tagIds,
      },
    }),
  });

  const handleTagClick = (selectedTag: string) => {
    if (selectedTag === tags) {
      // If the selected tag is already active, remove it from the URL
      router.push(Routes.CaseStudies);
      return;
    }
    // If a tag is selected, update the URL with the new tag
    router.push(`${Routes.CaseStudies}?tags=${selectedTag}`);
  };

  const caseStudies = data?.CaseStudies?.docs ?? [];
  const { title, description, subtitle } = data?.Journal ?? {};

  return {
    title,
    subtitle,
    description,
    caseStudies,
    handleTagClick,
    paginatedTags: chunk(
      allTags.map(({ name }) => name),
      3
    ),
    selectedTag: tags,
  };
};
