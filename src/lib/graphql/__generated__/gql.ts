/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "fragment MediaFragment on Media {\n  id\n  alt\n  caption\n  blurDataURL\n  focalX\n  focalY\n  url\n  width\n  height\n  sizes {\n    icon {\n      url\n      width\n      height\n    }\n    thumbnail {\n      url\n      width\n      height\n    }\n    card {\n      url\n      width\n      height\n    }\n    feature {\n      url\n      width\n      height\n    }\n    hero {\n      url\n      width\n      height\n    }\n  }\n}": typeof types.MediaFragmentFragmentDoc,
    "mutation CreateContactForm($name: String!, $email: String!, $subject: String!, $message: String!) {\n  createContactForm(\n    data: {name: $name, email: $email, subject: $subject, message: $message}\n  ) {\n    id\n    name\n    email\n    subject\n    message\n    status\n  }\n}": typeof types.CreateContactFormDocument,
    "query GetAllTags {\n  CaseStudies {\n    docs {\n      tags {\n        name\n        slug\n        id\n      }\n      updatedAt\n    }\n  }\n}": typeof types.GetAllTagsDocument,
    "query GetCaseStudiesByParams($tagIds: [JSON], $experience: [JSON]) {\n  CaseStudies(where: {tags: {in: $tagIds}, experience: {in: $experience}}) {\n    offset\n    totalDocs\n    docs {\n      id\n      slug\n      title\n      summary\n      tags {\n        name\n        id\n      }\n      updatedAt\n      illustration {\n        ...MediaFragment\n      }\n      experience {\n        role\n        title\n        slug\n      }\n    }\n    pagingCounter\n  }\n  Journal {\n    title\n    subtitle\n    description\n  }\n}": typeof types.GetCaseStudiesByParamsDocument,
    "query GetCaseStudyBySlug($slug: String!) {\n  CaseStudies(where: {slug: {equals: $slug}}) {\n    docs {\n      title\n      experience {\n        title\n        role\n        startDate\n        endDate\n        id\n      }\n      tags {\n        name\n      }\n      content\n      illustration {\n        ...MediaFragment\n      }\n      updatedAt\n    }\n  }\n}": typeof types.GetCaseStudyBySlugDocument,
    "query GetContactForms {\n  ContactForms(limit: 100) {\n    docs {\n      id\n      name\n      email\n      subject\n      message\n      status\n      createdAt\n    }\n    totalDocs\n    page\n    totalPages\n  }\n}": typeof types.GetContactFormsDocument,
    "query GetExperienceBySlug($slug: String!) {\n  Experiences(where: {slug: {equals: $slug}}) {\n    docs {\n      id\n      role\n      slug\n      startDate\n      summary\n      title\n      endDate\n      coverImage {\n        ...MediaFragment\n      }\n      tags {\n        id\n        name\n      }\n    }\n  }\n}": typeof types.GetExperienceBySlugDocument,
    "query GetFeaturedCaseStudies {\n  FeaturedCaseStudy {\n    title\n    subtitle\n    description\n    caseStudies {\n      title\n      slug\n      illustration {\n        ...MediaFragment\n      }\n      summary\n      tags {\n        name\n        id\n      }\n    }\n  }\n}": typeof types.GetFeaturedCaseStudiesDocument,
    "query GetFeaturedExperiences {\n  FeaturedExperience {\n    experiences {\n      id\n      title\n      slug\n      endDate\n      startDate\n      thumbnailImage {\n        ...MediaFragment\n      }\n      role\n    }\n    description\n    title\n    subtitle\n  }\n}": typeof types.GetFeaturedExperiencesDocument,
    "query GetFooter {\n  Footer {\n    title1\n    title2\n    description\n    buttonText\n    bottomText\n  }\n}": typeof types.GetFooterDocument,
    "query GetHero {\n  Hero {\n    name\n    title\n    taglines {\n      text\n    }\n    description\n  }\n}": typeof types.GetHeroDocument,
    "query GetSkills {\n  Skill {\n    title\n    subtitle\n    skills {\n      name\n      description\n    }\n  }\n}": typeof types.GetSkillsDocument,
    "query GetWorkButtons {\n  WorkButton {\n    buttons {\n      text\n      url\n    }\n  }\n}": typeof types.GetWorkButtonsDocument,
    "query GetAllCaseStudiesSlugs {\n  CaseStudies {\n    docs {\n      slug\n      updatedAt\n    }\n  }\n}": typeof types.GetAllCaseStudiesSlugsDocument,
    "query GetAllExperiencesSlugs {\n  Experiences {\n    docs {\n      slug\n      updatedAt\n    }\n  }\n}": typeof types.GetAllExperiencesSlugsDocument,
    "query GetCaseStudyBySlugMeta($slug: String!) {\n  CaseStudies(where: {slug: {equals: $slug}}) {\n    docs {\n      meta {\n        title\n        description\n        image {\n          url\n        }\n      }\n    }\n  }\n}": typeof types.GetCaseStudyBySlugMetaDocument,
    "query GetExperienceBySlugMeta($slug: String!) {\n  Experiences(where: {slug: {equals: $slug}}) {\n    docs {\n      meta {\n        title\n        description\n        image {\n          url\n        }\n      }\n    }\n  }\n}": typeof types.GetExperienceBySlugMetaDocument,
    "query GetHeroMeta {\n  Hero {\n    meta {\n      title\n      description\n      image {\n        url\n      }\n    }\n  }\n}": typeof types.GetHeroMetaDocument,
    "query GetJournalMeta {\n  Journal {\n    meta {\n      title\n      description\n      image {\n        alt\n        url\n      }\n    }\n  }\n}": typeof types.GetJournalMetaDocument,
};
const documents: Documents = {
    "fragment MediaFragment on Media {\n  id\n  alt\n  caption\n  blurDataURL\n  focalX\n  focalY\n  url\n  width\n  height\n  sizes {\n    icon {\n      url\n      width\n      height\n    }\n    thumbnail {\n      url\n      width\n      height\n    }\n    card {\n      url\n      width\n      height\n    }\n    feature {\n      url\n      width\n      height\n    }\n    hero {\n      url\n      width\n      height\n    }\n  }\n}": types.MediaFragmentFragmentDoc,
    "mutation CreateContactForm($name: String!, $email: String!, $subject: String!, $message: String!) {\n  createContactForm(\n    data: {name: $name, email: $email, subject: $subject, message: $message}\n  ) {\n    id\n    name\n    email\n    subject\n    message\n    status\n  }\n}": types.CreateContactFormDocument,
    "query GetAllTags {\n  CaseStudies {\n    docs {\n      tags {\n        name\n        slug\n        id\n      }\n      updatedAt\n    }\n  }\n}": types.GetAllTagsDocument,
    "query GetCaseStudiesByParams($tagIds: [JSON], $experience: [JSON]) {\n  CaseStudies(where: {tags: {in: $tagIds}, experience: {in: $experience}}) {\n    offset\n    totalDocs\n    docs {\n      id\n      slug\n      title\n      summary\n      tags {\n        name\n        id\n      }\n      updatedAt\n      illustration {\n        ...MediaFragment\n      }\n      experience {\n        role\n        title\n        slug\n      }\n    }\n    pagingCounter\n  }\n  Journal {\n    title\n    subtitle\n    description\n  }\n}": types.GetCaseStudiesByParamsDocument,
    "query GetCaseStudyBySlug($slug: String!) {\n  CaseStudies(where: {slug: {equals: $slug}}) {\n    docs {\n      title\n      experience {\n        title\n        role\n        startDate\n        endDate\n        id\n      }\n      tags {\n        name\n      }\n      content\n      illustration {\n        ...MediaFragment\n      }\n      updatedAt\n    }\n  }\n}": types.GetCaseStudyBySlugDocument,
    "query GetContactForms {\n  ContactForms(limit: 100) {\n    docs {\n      id\n      name\n      email\n      subject\n      message\n      status\n      createdAt\n    }\n    totalDocs\n    page\n    totalPages\n  }\n}": types.GetContactFormsDocument,
    "query GetExperienceBySlug($slug: String!) {\n  Experiences(where: {slug: {equals: $slug}}) {\n    docs {\n      id\n      role\n      slug\n      startDate\n      summary\n      title\n      endDate\n      coverImage {\n        ...MediaFragment\n      }\n      tags {\n        id\n        name\n      }\n    }\n  }\n}": types.GetExperienceBySlugDocument,
    "query GetFeaturedCaseStudies {\n  FeaturedCaseStudy {\n    title\n    subtitle\n    description\n    caseStudies {\n      title\n      slug\n      illustration {\n        ...MediaFragment\n      }\n      summary\n      tags {\n        name\n        id\n      }\n    }\n  }\n}": types.GetFeaturedCaseStudiesDocument,
    "query GetFeaturedExperiences {\n  FeaturedExperience {\n    experiences {\n      id\n      title\n      slug\n      endDate\n      startDate\n      thumbnailImage {\n        ...MediaFragment\n      }\n      role\n    }\n    description\n    title\n    subtitle\n  }\n}": types.GetFeaturedExperiencesDocument,
    "query GetFooter {\n  Footer {\n    title1\n    title2\n    description\n    buttonText\n    bottomText\n  }\n}": types.GetFooterDocument,
    "query GetHero {\n  Hero {\n    name\n    title\n    taglines {\n      text\n    }\n    description\n  }\n}": types.GetHeroDocument,
    "query GetSkills {\n  Skill {\n    title\n    subtitle\n    skills {\n      name\n      description\n    }\n  }\n}": types.GetSkillsDocument,
    "query GetWorkButtons {\n  WorkButton {\n    buttons {\n      text\n      url\n    }\n  }\n}": types.GetWorkButtonsDocument,
    "query GetAllCaseStudiesSlugs {\n  CaseStudies {\n    docs {\n      slug\n      updatedAt\n    }\n  }\n}": types.GetAllCaseStudiesSlugsDocument,
    "query GetAllExperiencesSlugs {\n  Experiences {\n    docs {\n      slug\n      updatedAt\n    }\n  }\n}": types.GetAllExperiencesSlugsDocument,
    "query GetCaseStudyBySlugMeta($slug: String!) {\n  CaseStudies(where: {slug: {equals: $slug}}) {\n    docs {\n      meta {\n        title\n        description\n        image {\n          url\n        }\n      }\n    }\n  }\n}": types.GetCaseStudyBySlugMetaDocument,
    "query GetExperienceBySlugMeta($slug: String!) {\n  Experiences(where: {slug: {equals: $slug}}) {\n    docs {\n      meta {\n        title\n        description\n        image {\n          url\n        }\n      }\n    }\n  }\n}": types.GetExperienceBySlugMetaDocument,
    "query GetHeroMeta {\n  Hero {\n    meta {\n      title\n      description\n      image {\n        url\n      }\n    }\n  }\n}": types.GetHeroMetaDocument,
    "query GetJournalMeta {\n  Journal {\n    meta {\n      title\n      description\n      image {\n        alt\n        url\n      }\n    }\n  }\n}": types.GetJournalMetaDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment MediaFragment on Media {\n  id\n  alt\n  caption\n  blurDataURL\n  focalX\n  focalY\n  url\n  width\n  height\n  sizes {\n    icon {\n      url\n      width\n      height\n    }\n    thumbnail {\n      url\n      width\n      height\n    }\n    card {\n      url\n      width\n      height\n    }\n    feature {\n      url\n      width\n      height\n    }\n    hero {\n      url\n      width\n      height\n    }\n  }\n}"): (typeof documents)["fragment MediaFragment on Media {\n  id\n  alt\n  caption\n  blurDataURL\n  focalX\n  focalY\n  url\n  width\n  height\n  sizes {\n    icon {\n      url\n      width\n      height\n    }\n    thumbnail {\n      url\n      width\n      height\n    }\n    card {\n      url\n      width\n      height\n    }\n    feature {\n      url\n      width\n      height\n    }\n    hero {\n      url\n      width\n      height\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation CreateContactForm($name: String!, $email: String!, $subject: String!, $message: String!) {\n  createContactForm(\n    data: {name: $name, email: $email, subject: $subject, message: $message}\n  ) {\n    id\n    name\n    email\n    subject\n    message\n    status\n  }\n}"): (typeof documents)["mutation CreateContactForm($name: String!, $email: String!, $subject: String!, $message: String!) {\n  createContactForm(\n    data: {name: $name, email: $email, subject: $subject, message: $message}\n  ) {\n    id\n    name\n    email\n    subject\n    message\n    status\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetAllTags {\n  CaseStudies {\n    docs {\n      tags {\n        name\n        slug\n        id\n      }\n      updatedAt\n    }\n  }\n}"): (typeof documents)["query GetAllTags {\n  CaseStudies {\n    docs {\n      tags {\n        name\n        slug\n        id\n      }\n      updatedAt\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetCaseStudiesByParams($tagIds: [JSON], $experience: [JSON]) {\n  CaseStudies(where: {tags: {in: $tagIds}, experience: {in: $experience}}) {\n    offset\n    totalDocs\n    docs {\n      id\n      slug\n      title\n      summary\n      tags {\n        name\n        id\n      }\n      updatedAt\n      illustration {\n        ...MediaFragment\n      }\n      experience {\n        role\n        title\n        slug\n      }\n    }\n    pagingCounter\n  }\n  Journal {\n    title\n    subtitle\n    description\n  }\n}"): (typeof documents)["query GetCaseStudiesByParams($tagIds: [JSON], $experience: [JSON]) {\n  CaseStudies(where: {tags: {in: $tagIds}, experience: {in: $experience}}) {\n    offset\n    totalDocs\n    docs {\n      id\n      slug\n      title\n      summary\n      tags {\n        name\n        id\n      }\n      updatedAt\n      illustration {\n        ...MediaFragment\n      }\n      experience {\n        role\n        title\n        slug\n      }\n    }\n    pagingCounter\n  }\n  Journal {\n    title\n    subtitle\n    description\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetCaseStudyBySlug($slug: String!) {\n  CaseStudies(where: {slug: {equals: $slug}}) {\n    docs {\n      title\n      experience {\n        title\n        role\n        startDate\n        endDate\n        id\n      }\n      tags {\n        name\n      }\n      content\n      illustration {\n        ...MediaFragment\n      }\n      updatedAt\n    }\n  }\n}"): (typeof documents)["query GetCaseStudyBySlug($slug: String!) {\n  CaseStudies(where: {slug: {equals: $slug}}) {\n    docs {\n      title\n      experience {\n        title\n        role\n        startDate\n        endDate\n        id\n      }\n      tags {\n        name\n      }\n      content\n      illustration {\n        ...MediaFragment\n      }\n      updatedAt\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetContactForms {\n  ContactForms(limit: 100) {\n    docs {\n      id\n      name\n      email\n      subject\n      message\n      status\n      createdAt\n    }\n    totalDocs\n    page\n    totalPages\n  }\n}"): (typeof documents)["query GetContactForms {\n  ContactForms(limit: 100) {\n    docs {\n      id\n      name\n      email\n      subject\n      message\n      status\n      createdAt\n    }\n    totalDocs\n    page\n    totalPages\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetExperienceBySlug($slug: String!) {\n  Experiences(where: {slug: {equals: $slug}}) {\n    docs {\n      id\n      role\n      slug\n      startDate\n      summary\n      title\n      endDate\n      coverImage {\n        ...MediaFragment\n      }\n      tags {\n        id\n        name\n      }\n    }\n  }\n}"): (typeof documents)["query GetExperienceBySlug($slug: String!) {\n  Experiences(where: {slug: {equals: $slug}}) {\n    docs {\n      id\n      role\n      slug\n      startDate\n      summary\n      title\n      endDate\n      coverImage {\n        ...MediaFragment\n      }\n      tags {\n        id\n        name\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetFeaturedCaseStudies {\n  FeaturedCaseStudy {\n    title\n    subtitle\n    description\n    caseStudies {\n      title\n      slug\n      illustration {\n        ...MediaFragment\n      }\n      summary\n      tags {\n        name\n        id\n      }\n    }\n  }\n}"): (typeof documents)["query GetFeaturedCaseStudies {\n  FeaturedCaseStudy {\n    title\n    subtitle\n    description\n    caseStudies {\n      title\n      slug\n      illustration {\n        ...MediaFragment\n      }\n      summary\n      tags {\n        name\n        id\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetFeaturedExperiences {\n  FeaturedExperience {\n    experiences {\n      id\n      title\n      slug\n      endDate\n      startDate\n      thumbnailImage {\n        ...MediaFragment\n      }\n      role\n    }\n    description\n    title\n    subtitle\n  }\n}"): (typeof documents)["query GetFeaturedExperiences {\n  FeaturedExperience {\n    experiences {\n      id\n      title\n      slug\n      endDate\n      startDate\n      thumbnailImage {\n        ...MediaFragment\n      }\n      role\n    }\n    description\n    title\n    subtitle\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetFooter {\n  Footer {\n    title1\n    title2\n    description\n    buttonText\n    bottomText\n  }\n}"): (typeof documents)["query GetFooter {\n  Footer {\n    title1\n    title2\n    description\n    buttonText\n    bottomText\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetHero {\n  Hero {\n    name\n    title\n    taglines {\n      text\n    }\n    description\n  }\n}"): (typeof documents)["query GetHero {\n  Hero {\n    name\n    title\n    taglines {\n      text\n    }\n    description\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetSkills {\n  Skill {\n    title\n    subtitle\n    skills {\n      name\n      description\n    }\n  }\n}"): (typeof documents)["query GetSkills {\n  Skill {\n    title\n    subtitle\n    skills {\n      name\n      description\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetWorkButtons {\n  WorkButton {\n    buttons {\n      text\n      url\n    }\n  }\n}"): (typeof documents)["query GetWorkButtons {\n  WorkButton {\n    buttons {\n      text\n      url\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetAllCaseStudiesSlugs {\n  CaseStudies {\n    docs {\n      slug\n      updatedAt\n    }\n  }\n}"): (typeof documents)["query GetAllCaseStudiesSlugs {\n  CaseStudies {\n    docs {\n      slug\n      updatedAt\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetAllExperiencesSlugs {\n  Experiences {\n    docs {\n      slug\n      updatedAt\n    }\n  }\n}"): (typeof documents)["query GetAllExperiencesSlugs {\n  Experiences {\n    docs {\n      slug\n      updatedAt\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetCaseStudyBySlugMeta($slug: String!) {\n  CaseStudies(where: {slug: {equals: $slug}}) {\n    docs {\n      meta {\n        title\n        description\n        image {\n          url\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetCaseStudyBySlugMeta($slug: String!) {\n  CaseStudies(where: {slug: {equals: $slug}}) {\n    docs {\n      meta {\n        title\n        description\n        image {\n          url\n        }\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetExperienceBySlugMeta($slug: String!) {\n  Experiences(where: {slug: {equals: $slug}}) {\n    docs {\n      meta {\n        title\n        description\n        image {\n          url\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetExperienceBySlugMeta($slug: String!) {\n  Experiences(where: {slug: {equals: $slug}}) {\n    docs {\n      meta {\n        title\n        description\n        image {\n          url\n        }\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetHeroMeta {\n  Hero {\n    meta {\n      title\n      description\n      image {\n        url\n      }\n    }\n  }\n}"): (typeof documents)["query GetHeroMeta {\n  Hero {\n    meta {\n      title\n      description\n      image {\n        url\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetJournalMeta {\n  Journal {\n    meta {\n      title\n      description\n      image {\n        alt\n        url\n      }\n    }\n  }\n}"): (typeof documents)["query GetJournalMeta {\n  Journal {\n    meta {\n      title\n      description\n      image {\n        alt\n        url\n      }\n    }\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;