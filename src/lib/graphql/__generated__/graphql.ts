/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

export type Access = {
  __typename?: 'Access';
  canAccessAdmin: Scalars['Boolean']['output'];
  case_studies?: Maybe<Case_StudiesAccess>;
  contact_forms?: Maybe<Contact_FormsAccess>;
  experiences?: Maybe<ExperiencesAccess>;
  featured_case_studies?: Maybe<Featured_Case_StudiesAccess>;
  featured_experiences?: Maybe<Featured_ExperiencesAccess>;
  footer?: Maybe<FooterAccess>;
  hero?: Maybe<HeroAccess>;
  journal?: Maybe<JournalAccess>;
  media?: Maybe<MediaAccess>;
  payload_locked_documents?: Maybe<Payload_Locked_DocumentsAccess>;
  payload_preferences?: Maybe<Payload_PreferencesAccess>;
  skills?: Maybe<SkillsAccess>;
  tags?: Maybe<TagsAccess>;
  users?: Maybe<UsersAccess>;
  work_buttons?: Maybe<Work_ButtonsAccess>;
};

export type CaseStudies = {
  __typename?: 'CaseStudies';
  docs: Array<CaseStudy>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage: Scalars['Int']['output'];
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage: Scalars['Int']['output'];
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type CaseStudiesCreateAccess = {
  __typename?: 'CaseStudiesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudiesCreateDocAccess = {
  __typename?: 'CaseStudiesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudiesDeleteAccess = {
  __typename?: 'CaseStudiesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudiesDeleteDocAccess = {
  __typename?: 'CaseStudiesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudiesDocAccessFields = {
  __typename?: 'CaseStudiesDocAccessFields';
  content?: Maybe<CaseStudiesDocAccessFields_Content>;
  createdAt?: Maybe<CaseStudiesDocAccessFields_CreatedAt>;
  experience?: Maybe<CaseStudiesDocAccessFields_Experience>;
  featured?: Maybe<CaseStudiesDocAccessFields_Featured>;
  illustration?: Maybe<CaseStudiesDocAccessFields_Illustration>;
  meta?: Maybe<CaseStudiesDocAccessFields_Meta>;
  publishedAt?: Maybe<CaseStudiesDocAccessFields_PublishedAt>;
  slug?: Maybe<CaseStudiesDocAccessFields_Slug>;
  summary?: Maybe<CaseStudiesDocAccessFields_Summary>;
  tags?: Maybe<CaseStudiesDocAccessFields_Tags>;
  title?: Maybe<CaseStudiesDocAccessFields_Title>;
  updatedAt?: Maybe<CaseStudiesDocAccessFields_UpdatedAt>;
};

export type CaseStudiesDocAccessFields_Content = {
  __typename?: 'CaseStudiesDocAccessFields_content';
  create?: Maybe<CaseStudiesDocAccessFields_Content_Create>;
  delete?: Maybe<CaseStudiesDocAccessFields_Content_Delete>;
  read?: Maybe<CaseStudiesDocAccessFields_Content_Read>;
  update?: Maybe<CaseStudiesDocAccessFields_Content_Update>;
};

export type CaseStudiesDocAccessFields_Content_Create = {
  __typename?: 'CaseStudiesDocAccessFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Content_Delete = {
  __typename?: 'CaseStudiesDocAccessFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Content_Read = {
  __typename?: 'CaseStudiesDocAccessFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Content_Update = {
  __typename?: 'CaseStudiesDocAccessFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_CreatedAt = {
  __typename?: 'CaseStudiesDocAccessFields_createdAt';
  create?: Maybe<CaseStudiesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<CaseStudiesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<CaseStudiesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<CaseStudiesDocAccessFields_CreatedAt_Update>;
};

export type CaseStudiesDocAccessFields_CreatedAt_Create = {
  __typename?: 'CaseStudiesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'CaseStudiesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_CreatedAt_Read = {
  __typename?: 'CaseStudiesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_CreatedAt_Update = {
  __typename?: 'CaseStudiesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Experience = {
  __typename?: 'CaseStudiesDocAccessFields_experience';
  create?: Maybe<CaseStudiesDocAccessFields_Experience_Create>;
  delete?: Maybe<CaseStudiesDocAccessFields_Experience_Delete>;
  read?: Maybe<CaseStudiesDocAccessFields_Experience_Read>;
  update?: Maybe<CaseStudiesDocAccessFields_Experience_Update>;
};

export type CaseStudiesDocAccessFields_Experience_Create = {
  __typename?: 'CaseStudiesDocAccessFields_experience_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Experience_Delete = {
  __typename?: 'CaseStudiesDocAccessFields_experience_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Experience_Read = {
  __typename?: 'CaseStudiesDocAccessFields_experience_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Experience_Update = {
  __typename?: 'CaseStudiesDocAccessFields_experience_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Featured = {
  __typename?: 'CaseStudiesDocAccessFields_featured';
  create?: Maybe<CaseStudiesDocAccessFields_Featured_Create>;
  delete?: Maybe<CaseStudiesDocAccessFields_Featured_Delete>;
  read?: Maybe<CaseStudiesDocAccessFields_Featured_Read>;
  update?: Maybe<CaseStudiesDocAccessFields_Featured_Update>;
};

export type CaseStudiesDocAccessFields_Featured_Create = {
  __typename?: 'CaseStudiesDocAccessFields_featured_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Featured_Delete = {
  __typename?: 'CaseStudiesDocAccessFields_featured_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Featured_Read = {
  __typename?: 'CaseStudiesDocAccessFields_featured_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Featured_Update = {
  __typename?: 'CaseStudiesDocAccessFields_featured_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Illustration = {
  __typename?: 'CaseStudiesDocAccessFields_illustration';
  create?: Maybe<CaseStudiesDocAccessFields_Illustration_Create>;
  delete?: Maybe<CaseStudiesDocAccessFields_Illustration_Delete>;
  read?: Maybe<CaseStudiesDocAccessFields_Illustration_Read>;
  update?: Maybe<CaseStudiesDocAccessFields_Illustration_Update>;
};

export type CaseStudiesDocAccessFields_Illustration_Create = {
  __typename?: 'CaseStudiesDocAccessFields_illustration_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Illustration_Delete = {
  __typename?: 'CaseStudiesDocAccessFields_illustration_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Illustration_Read = {
  __typename?: 'CaseStudiesDocAccessFields_illustration_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Illustration_Update = {
  __typename?: 'CaseStudiesDocAccessFields_illustration_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta = {
  __typename?: 'CaseStudiesDocAccessFields_meta';
  create?: Maybe<CaseStudiesDocAccessFields_Meta_Create>;
  delete?: Maybe<CaseStudiesDocAccessFields_Meta_Delete>;
  fields?: Maybe<CaseStudiesDocAccessFields_Meta_Fields>;
  read?: Maybe<CaseStudiesDocAccessFields_Meta_Read>;
  update?: Maybe<CaseStudiesDocAccessFields_Meta_Update>;
};

export type CaseStudiesDocAccessFields_Meta_Create = {
  __typename?: 'CaseStudiesDocAccessFields_meta_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Delete = {
  __typename?: 'CaseStudiesDocAccessFields_meta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Fields = {
  __typename?: 'CaseStudiesDocAccessFields_meta_Fields';
  description?: Maybe<CaseStudiesDocAccessFields_Meta_Description>;
  image?: Maybe<CaseStudiesDocAccessFields_Meta_Image>;
  title?: Maybe<CaseStudiesDocAccessFields_Meta_Title>;
};

export type CaseStudiesDocAccessFields_Meta_Read = {
  __typename?: 'CaseStudiesDocAccessFields_meta_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Update = {
  __typename?: 'CaseStudiesDocAccessFields_meta_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Description = {
  __typename?: 'CaseStudiesDocAccessFields_meta_description';
  create?: Maybe<CaseStudiesDocAccessFields_Meta_Description_Create>;
  delete?: Maybe<CaseStudiesDocAccessFields_Meta_Description_Delete>;
  read?: Maybe<CaseStudiesDocAccessFields_Meta_Description_Read>;
  update?: Maybe<CaseStudiesDocAccessFields_Meta_Description_Update>;
};

export type CaseStudiesDocAccessFields_Meta_Description_Create = {
  __typename?: 'CaseStudiesDocAccessFields_meta_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Description_Delete = {
  __typename?: 'CaseStudiesDocAccessFields_meta_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Description_Read = {
  __typename?: 'CaseStudiesDocAccessFields_meta_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Description_Update = {
  __typename?: 'CaseStudiesDocAccessFields_meta_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Image = {
  __typename?: 'CaseStudiesDocAccessFields_meta_image';
  create?: Maybe<CaseStudiesDocAccessFields_Meta_Image_Create>;
  delete?: Maybe<CaseStudiesDocAccessFields_Meta_Image_Delete>;
  read?: Maybe<CaseStudiesDocAccessFields_Meta_Image_Read>;
  update?: Maybe<CaseStudiesDocAccessFields_Meta_Image_Update>;
};

export type CaseStudiesDocAccessFields_Meta_Image_Create = {
  __typename?: 'CaseStudiesDocAccessFields_meta_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Image_Delete = {
  __typename?: 'CaseStudiesDocAccessFields_meta_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Image_Read = {
  __typename?: 'CaseStudiesDocAccessFields_meta_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Image_Update = {
  __typename?: 'CaseStudiesDocAccessFields_meta_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Title = {
  __typename?: 'CaseStudiesDocAccessFields_meta_title';
  create?: Maybe<CaseStudiesDocAccessFields_Meta_Title_Create>;
  delete?: Maybe<CaseStudiesDocAccessFields_Meta_Title_Delete>;
  read?: Maybe<CaseStudiesDocAccessFields_Meta_Title_Read>;
  update?: Maybe<CaseStudiesDocAccessFields_Meta_Title_Update>;
};

export type CaseStudiesDocAccessFields_Meta_Title_Create = {
  __typename?: 'CaseStudiesDocAccessFields_meta_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Title_Delete = {
  __typename?: 'CaseStudiesDocAccessFields_meta_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Title_Read = {
  __typename?: 'CaseStudiesDocAccessFields_meta_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Title_Update = {
  __typename?: 'CaseStudiesDocAccessFields_meta_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_PublishedAt = {
  __typename?: 'CaseStudiesDocAccessFields_publishedAt';
  create?: Maybe<CaseStudiesDocAccessFields_PublishedAt_Create>;
  delete?: Maybe<CaseStudiesDocAccessFields_PublishedAt_Delete>;
  read?: Maybe<CaseStudiesDocAccessFields_PublishedAt_Read>;
  update?: Maybe<CaseStudiesDocAccessFields_PublishedAt_Update>;
};

export type CaseStudiesDocAccessFields_PublishedAt_Create = {
  __typename?: 'CaseStudiesDocAccessFields_publishedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_PublishedAt_Delete = {
  __typename?: 'CaseStudiesDocAccessFields_publishedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_PublishedAt_Read = {
  __typename?: 'CaseStudiesDocAccessFields_publishedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_PublishedAt_Update = {
  __typename?: 'CaseStudiesDocAccessFields_publishedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Slug = {
  __typename?: 'CaseStudiesDocAccessFields_slug';
  create?: Maybe<CaseStudiesDocAccessFields_Slug_Create>;
  delete?: Maybe<CaseStudiesDocAccessFields_Slug_Delete>;
  read?: Maybe<CaseStudiesDocAccessFields_Slug_Read>;
  update?: Maybe<CaseStudiesDocAccessFields_Slug_Update>;
};

export type CaseStudiesDocAccessFields_Slug_Create = {
  __typename?: 'CaseStudiesDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Slug_Delete = {
  __typename?: 'CaseStudiesDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Slug_Read = {
  __typename?: 'CaseStudiesDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Slug_Update = {
  __typename?: 'CaseStudiesDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Summary = {
  __typename?: 'CaseStudiesDocAccessFields_summary';
  create?: Maybe<CaseStudiesDocAccessFields_Summary_Create>;
  delete?: Maybe<CaseStudiesDocAccessFields_Summary_Delete>;
  read?: Maybe<CaseStudiesDocAccessFields_Summary_Read>;
  update?: Maybe<CaseStudiesDocAccessFields_Summary_Update>;
};

export type CaseStudiesDocAccessFields_Summary_Create = {
  __typename?: 'CaseStudiesDocAccessFields_summary_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Summary_Delete = {
  __typename?: 'CaseStudiesDocAccessFields_summary_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Summary_Read = {
  __typename?: 'CaseStudiesDocAccessFields_summary_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Summary_Update = {
  __typename?: 'CaseStudiesDocAccessFields_summary_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Tags = {
  __typename?: 'CaseStudiesDocAccessFields_tags';
  create?: Maybe<CaseStudiesDocAccessFields_Tags_Create>;
  delete?: Maybe<CaseStudiesDocAccessFields_Tags_Delete>;
  read?: Maybe<CaseStudiesDocAccessFields_Tags_Read>;
  update?: Maybe<CaseStudiesDocAccessFields_Tags_Update>;
};

export type CaseStudiesDocAccessFields_Tags_Create = {
  __typename?: 'CaseStudiesDocAccessFields_tags_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Tags_Delete = {
  __typename?: 'CaseStudiesDocAccessFields_tags_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Tags_Read = {
  __typename?: 'CaseStudiesDocAccessFields_tags_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Tags_Update = {
  __typename?: 'CaseStudiesDocAccessFields_tags_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Title = {
  __typename?: 'CaseStudiesDocAccessFields_title';
  create?: Maybe<CaseStudiesDocAccessFields_Title_Create>;
  delete?: Maybe<CaseStudiesDocAccessFields_Title_Delete>;
  read?: Maybe<CaseStudiesDocAccessFields_Title_Read>;
  update?: Maybe<CaseStudiesDocAccessFields_Title_Update>;
};

export type CaseStudiesDocAccessFields_Title_Create = {
  __typename?: 'CaseStudiesDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Title_Delete = {
  __typename?: 'CaseStudiesDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Title_Read = {
  __typename?: 'CaseStudiesDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Title_Update = {
  __typename?: 'CaseStudiesDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_UpdatedAt = {
  __typename?: 'CaseStudiesDocAccessFields_updatedAt';
  create?: Maybe<CaseStudiesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<CaseStudiesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<CaseStudiesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<CaseStudiesDocAccessFields_UpdatedAt_Update>;
};

export type CaseStudiesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'CaseStudiesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'CaseStudiesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'CaseStudiesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'CaseStudiesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields = {
  __typename?: 'CaseStudiesFields';
  content?: Maybe<CaseStudiesFields_Content>;
  createdAt?: Maybe<CaseStudiesFields_CreatedAt>;
  experience?: Maybe<CaseStudiesFields_Experience>;
  featured?: Maybe<CaseStudiesFields_Featured>;
  illustration?: Maybe<CaseStudiesFields_Illustration>;
  meta?: Maybe<CaseStudiesFields_Meta>;
  publishedAt?: Maybe<CaseStudiesFields_PublishedAt>;
  slug?: Maybe<CaseStudiesFields_Slug>;
  summary?: Maybe<CaseStudiesFields_Summary>;
  tags?: Maybe<CaseStudiesFields_Tags>;
  title?: Maybe<CaseStudiesFields_Title>;
  updatedAt?: Maybe<CaseStudiesFields_UpdatedAt>;
};

export type CaseStudiesFields_Content = {
  __typename?: 'CaseStudiesFields_content';
  create?: Maybe<CaseStudiesFields_Content_Create>;
  delete?: Maybe<CaseStudiesFields_Content_Delete>;
  read?: Maybe<CaseStudiesFields_Content_Read>;
  update?: Maybe<CaseStudiesFields_Content_Update>;
};

export type CaseStudiesFields_Content_Create = {
  __typename?: 'CaseStudiesFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Content_Delete = {
  __typename?: 'CaseStudiesFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Content_Read = {
  __typename?: 'CaseStudiesFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Content_Update = {
  __typename?: 'CaseStudiesFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_CreatedAt = {
  __typename?: 'CaseStudiesFields_createdAt';
  create?: Maybe<CaseStudiesFields_CreatedAt_Create>;
  delete?: Maybe<CaseStudiesFields_CreatedAt_Delete>;
  read?: Maybe<CaseStudiesFields_CreatedAt_Read>;
  update?: Maybe<CaseStudiesFields_CreatedAt_Update>;
};

export type CaseStudiesFields_CreatedAt_Create = {
  __typename?: 'CaseStudiesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_CreatedAt_Delete = {
  __typename?: 'CaseStudiesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_CreatedAt_Read = {
  __typename?: 'CaseStudiesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_CreatedAt_Update = {
  __typename?: 'CaseStudiesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Experience = {
  __typename?: 'CaseStudiesFields_experience';
  create?: Maybe<CaseStudiesFields_Experience_Create>;
  delete?: Maybe<CaseStudiesFields_Experience_Delete>;
  read?: Maybe<CaseStudiesFields_Experience_Read>;
  update?: Maybe<CaseStudiesFields_Experience_Update>;
};

export type CaseStudiesFields_Experience_Create = {
  __typename?: 'CaseStudiesFields_experience_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Experience_Delete = {
  __typename?: 'CaseStudiesFields_experience_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Experience_Read = {
  __typename?: 'CaseStudiesFields_experience_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Experience_Update = {
  __typename?: 'CaseStudiesFields_experience_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Featured = {
  __typename?: 'CaseStudiesFields_featured';
  create?: Maybe<CaseStudiesFields_Featured_Create>;
  delete?: Maybe<CaseStudiesFields_Featured_Delete>;
  read?: Maybe<CaseStudiesFields_Featured_Read>;
  update?: Maybe<CaseStudiesFields_Featured_Update>;
};

export type CaseStudiesFields_Featured_Create = {
  __typename?: 'CaseStudiesFields_featured_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Featured_Delete = {
  __typename?: 'CaseStudiesFields_featured_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Featured_Read = {
  __typename?: 'CaseStudiesFields_featured_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Featured_Update = {
  __typename?: 'CaseStudiesFields_featured_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Illustration = {
  __typename?: 'CaseStudiesFields_illustration';
  create?: Maybe<CaseStudiesFields_Illustration_Create>;
  delete?: Maybe<CaseStudiesFields_Illustration_Delete>;
  read?: Maybe<CaseStudiesFields_Illustration_Read>;
  update?: Maybe<CaseStudiesFields_Illustration_Update>;
};

export type CaseStudiesFields_Illustration_Create = {
  __typename?: 'CaseStudiesFields_illustration_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Illustration_Delete = {
  __typename?: 'CaseStudiesFields_illustration_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Illustration_Read = {
  __typename?: 'CaseStudiesFields_illustration_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Illustration_Update = {
  __typename?: 'CaseStudiesFields_illustration_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta = {
  __typename?: 'CaseStudiesFields_meta';
  create?: Maybe<CaseStudiesFields_Meta_Create>;
  delete?: Maybe<CaseStudiesFields_Meta_Delete>;
  fields?: Maybe<CaseStudiesFields_Meta_Fields>;
  read?: Maybe<CaseStudiesFields_Meta_Read>;
  update?: Maybe<CaseStudiesFields_Meta_Update>;
};

export type CaseStudiesFields_Meta_Create = {
  __typename?: 'CaseStudiesFields_meta_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Delete = {
  __typename?: 'CaseStudiesFields_meta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Fields = {
  __typename?: 'CaseStudiesFields_meta_Fields';
  description?: Maybe<CaseStudiesFields_Meta_Description>;
  image?: Maybe<CaseStudiesFields_Meta_Image>;
  title?: Maybe<CaseStudiesFields_Meta_Title>;
};

export type CaseStudiesFields_Meta_Read = {
  __typename?: 'CaseStudiesFields_meta_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Update = {
  __typename?: 'CaseStudiesFields_meta_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Description = {
  __typename?: 'CaseStudiesFields_meta_description';
  create?: Maybe<CaseStudiesFields_Meta_Description_Create>;
  delete?: Maybe<CaseStudiesFields_Meta_Description_Delete>;
  read?: Maybe<CaseStudiesFields_Meta_Description_Read>;
  update?: Maybe<CaseStudiesFields_Meta_Description_Update>;
};

export type CaseStudiesFields_Meta_Description_Create = {
  __typename?: 'CaseStudiesFields_meta_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Description_Delete = {
  __typename?: 'CaseStudiesFields_meta_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Description_Read = {
  __typename?: 'CaseStudiesFields_meta_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Description_Update = {
  __typename?: 'CaseStudiesFields_meta_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Image = {
  __typename?: 'CaseStudiesFields_meta_image';
  create?: Maybe<CaseStudiesFields_Meta_Image_Create>;
  delete?: Maybe<CaseStudiesFields_Meta_Image_Delete>;
  read?: Maybe<CaseStudiesFields_Meta_Image_Read>;
  update?: Maybe<CaseStudiesFields_Meta_Image_Update>;
};

export type CaseStudiesFields_Meta_Image_Create = {
  __typename?: 'CaseStudiesFields_meta_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Image_Delete = {
  __typename?: 'CaseStudiesFields_meta_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Image_Read = {
  __typename?: 'CaseStudiesFields_meta_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Image_Update = {
  __typename?: 'CaseStudiesFields_meta_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Title = {
  __typename?: 'CaseStudiesFields_meta_title';
  create?: Maybe<CaseStudiesFields_Meta_Title_Create>;
  delete?: Maybe<CaseStudiesFields_Meta_Title_Delete>;
  read?: Maybe<CaseStudiesFields_Meta_Title_Read>;
  update?: Maybe<CaseStudiesFields_Meta_Title_Update>;
};

export type CaseStudiesFields_Meta_Title_Create = {
  __typename?: 'CaseStudiesFields_meta_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Title_Delete = {
  __typename?: 'CaseStudiesFields_meta_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Title_Read = {
  __typename?: 'CaseStudiesFields_meta_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Title_Update = {
  __typename?: 'CaseStudiesFields_meta_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_PublishedAt = {
  __typename?: 'CaseStudiesFields_publishedAt';
  create?: Maybe<CaseStudiesFields_PublishedAt_Create>;
  delete?: Maybe<CaseStudiesFields_PublishedAt_Delete>;
  read?: Maybe<CaseStudiesFields_PublishedAt_Read>;
  update?: Maybe<CaseStudiesFields_PublishedAt_Update>;
};

export type CaseStudiesFields_PublishedAt_Create = {
  __typename?: 'CaseStudiesFields_publishedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_PublishedAt_Delete = {
  __typename?: 'CaseStudiesFields_publishedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_PublishedAt_Read = {
  __typename?: 'CaseStudiesFields_publishedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_PublishedAt_Update = {
  __typename?: 'CaseStudiesFields_publishedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Slug = {
  __typename?: 'CaseStudiesFields_slug';
  create?: Maybe<CaseStudiesFields_Slug_Create>;
  delete?: Maybe<CaseStudiesFields_Slug_Delete>;
  read?: Maybe<CaseStudiesFields_Slug_Read>;
  update?: Maybe<CaseStudiesFields_Slug_Update>;
};

export type CaseStudiesFields_Slug_Create = {
  __typename?: 'CaseStudiesFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Slug_Delete = {
  __typename?: 'CaseStudiesFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Slug_Read = {
  __typename?: 'CaseStudiesFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Slug_Update = {
  __typename?: 'CaseStudiesFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Summary = {
  __typename?: 'CaseStudiesFields_summary';
  create?: Maybe<CaseStudiesFields_Summary_Create>;
  delete?: Maybe<CaseStudiesFields_Summary_Delete>;
  read?: Maybe<CaseStudiesFields_Summary_Read>;
  update?: Maybe<CaseStudiesFields_Summary_Update>;
};

export type CaseStudiesFields_Summary_Create = {
  __typename?: 'CaseStudiesFields_summary_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Summary_Delete = {
  __typename?: 'CaseStudiesFields_summary_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Summary_Read = {
  __typename?: 'CaseStudiesFields_summary_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Summary_Update = {
  __typename?: 'CaseStudiesFields_summary_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Tags = {
  __typename?: 'CaseStudiesFields_tags';
  create?: Maybe<CaseStudiesFields_Tags_Create>;
  delete?: Maybe<CaseStudiesFields_Tags_Delete>;
  read?: Maybe<CaseStudiesFields_Tags_Read>;
  update?: Maybe<CaseStudiesFields_Tags_Update>;
};

export type CaseStudiesFields_Tags_Create = {
  __typename?: 'CaseStudiesFields_tags_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Tags_Delete = {
  __typename?: 'CaseStudiesFields_tags_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Tags_Read = {
  __typename?: 'CaseStudiesFields_tags_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Tags_Update = {
  __typename?: 'CaseStudiesFields_tags_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Title = {
  __typename?: 'CaseStudiesFields_title';
  create?: Maybe<CaseStudiesFields_Title_Create>;
  delete?: Maybe<CaseStudiesFields_Title_Delete>;
  read?: Maybe<CaseStudiesFields_Title_Read>;
  update?: Maybe<CaseStudiesFields_Title_Update>;
};

export type CaseStudiesFields_Title_Create = {
  __typename?: 'CaseStudiesFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Title_Delete = {
  __typename?: 'CaseStudiesFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Title_Read = {
  __typename?: 'CaseStudiesFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Title_Update = {
  __typename?: 'CaseStudiesFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_UpdatedAt = {
  __typename?: 'CaseStudiesFields_updatedAt';
  create?: Maybe<CaseStudiesFields_UpdatedAt_Create>;
  delete?: Maybe<CaseStudiesFields_UpdatedAt_Delete>;
  read?: Maybe<CaseStudiesFields_UpdatedAt_Read>;
  update?: Maybe<CaseStudiesFields_UpdatedAt_Update>;
};

export type CaseStudiesFields_UpdatedAt_Create = {
  __typename?: 'CaseStudiesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_UpdatedAt_Delete = {
  __typename?: 'CaseStudiesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_UpdatedAt_Read = {
  __typename?: 'CaseStudiesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_UpdatedAt_Update = {
  __typename?: 'CaseStudiesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CaseStudiesReadAccess = {
  __typename?: 'CaseStudiesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudiesReadDocAccess = {
  __typename?: 'CaseStudiesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudiesUpdateAccess = {
  __typename?: 'CaseStudiesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudiesUpdateDocAccess = {
  __typename?: 'CaseStudiesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudy = {
  __typename?: 'CaseStudy';
  content: Scalars['JSON']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  experience: Experience;
  featured?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Int']['output'];
  illustration?: Maybe<Media>;
  meta?: Maybe<CaseStudy_Meta>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  summary: Scalars['JSON']['output'];
  tags: Array<Tag>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CaseStudyContentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


export type CaseStudySummaryArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type CaseStudy_Meta = {
  __typename?: 'CaseStudy_Meta';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  title?: Maybe<Scalars['String']['output']>;
};

export type CaseStudy_Content_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type CaseStudy_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CaseStudy_Experience_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type CaseStudy_Featured_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CaseStudy_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type CaseStudy_Illustration_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type CaseStudy_Meta__Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type CaseStudy_Meta__Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type CaseStudy_Meta__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_PublishedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CaseStudy_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Summary_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type CaseStudy_Tags_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type CaseStudy_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CaseStudy_Where = {
  AND?: InputMaybe<Array<InputMaybe<CaseStudy_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<CaseStudy_Where_Or>>>;
  content?: InputMaybe<CaseStudy_Content_Operator>;
  createdAt?: InputMaybe<CaseStudy_CreatedAt_Operator>;
  experience?: InputMaybe<CaseStudy_Experience_Operator>;
  featured?: InputMaybe<CaseStudy_Featured_Operator>;
  id?: InputMaybe<CaseStudy_Id_Operator>;
  illustration?: InputMaybe<CaseStudy_Illustration_Operator>;
  meta__description?: InputMaybe<CaseStudy_Meta__Description_Operator>;
  meta__image?: InputMaybe<CaseStudy_Meta__Image_Operator>;
  meta__title?: InputMaybe<CaseStudy_Meta__Title_Operator>;
  publishedAt?: InputMaybe<CaseStudy_PublishedAt_Operator>;
  slug?: InputMaybe<CaseStudy_Slug_Operator>;
  summary?: InputMaybe<CaseStudy_Summary_Operator>;
  tags?: InputMaybe<CaseStudy_Tags_Operator>;
  title?: InputMaybe<CaseStudy_Title_Operator>;
  updatedAt?: InputMaybe<CaseStudy_UpdatedAt_Operator>;
};

export type CaseStudy_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<CaseStudy_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<CaseStudy_Where_Or>>>;
  content?: InputMaybe<CaseStudy_Content_Operator>;
  createdAt?: InputMaybe<CaseStudy_CreatedAt_Operator>;
  experience?: InputMaybe<CaseStudy_Experience_Operator>;
  featured?: InputMaybe<CaseStudy_Featured_Operator>;
  id?: InputMaybe<CaseStudy_Id_Operator>;
  illustration?: InputMaybe<CaseStudy_Illustration_Operator>;
  meta__description?: InputMaybe<CaseStudy_Meta__Description_Operator>;
  meta__image?: InputMaybe<CaseStudy_Meta__Image_Operator>;
  meta__title?: InputMaybe<CaseStudy_Meta__Title_Operator>;
  publishedAt?: InputMaybe<CaseStudy_PublishedAt_Operator>;
  slug?: InputMaybe<CaseStudy_Slug_Operator>;
  summary?: InputMaybe<CaseStudy_Summary_Operator>;
  tags?: InputMaybe<CaseStudy_Tags_Operator>;
  title?: InputMaybe<CaseStudy_Title_Operator>;
  updatedAt?: InputMaybe<CaseStudy_UpdatedAt_Operator>;
};

export type CaseStudy_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<CaseStudy_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<CaseStudy_Where_Or>>>;
  content?: InputMaybe<CaseStudy_Content_Operator>;
  createdAt?: InputMaybe<CaseStudy_CreatedAt_Operator>;
  experience?: InputMaybe<CaseStudy_Experience_Operator>;
  featured?: InputMaybe<CaseStudy_Featured_Operator>;
  id?: InputMaybe<CaseStudy_Id_Operator>;
  illustration?: InputMaybe<CaseStudy_Illustration_Operator>;
  meta__description?: InputMaybe<CaseStudy_Meta__Description_Operator>;
  meta__image?: InputMaybe<CaseStudy_Meta__Image_Operator>;
  meta__title?: InputMaybe<CaseStudy_Meta__Title_Operator>;
  publishedAt?: InputMaybe<CaseStudy_PublishedAt_Operator>;
  slug?: InputMaybe<CaseStudy_Slug_Operator>;
  summary?: InputMaybe<CaseStudy_Summary_Operator>;
  tags?: InputMaybe<CaseStudy_Tags_Operator>;
  title?: InputMaybe<CaseStudy_Title_Operator>;
  updatedAt?: InputMaybe<CaseStudy_UpdatedAt_Operator>;
};

export type ContactForm = {
  __typename?: 'ContactForm';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  id: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  name: Scalars['String']['output'];
  status?: Maybe<ContactForm_Status>;
  subject: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum ContactFormUpdate_Status_MutationInput {
  InProgress = 'in_progress',
  New = 'new',
  Resolved = 'resolved'
}

export type ContactForm_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ContactForm_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type ContactForm_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type ContactForm_Message_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type ContactForm_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum ContactForm_Status {
  InProgress = 'in_progress',
  New = 'new',
  Resolved = 'resolved'
}

export enum ContactForm_Status_Input {
  InProgress = 'in_progress',
  New = 'new',
  Resolved = 'resolved'
}

export enum ContactForm_Status_MutationInput {
  InProgress = 'in_progress',
  New = 'new',
  Resolved = 'resolved'
}

export type ContactForm_Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<ContactForm_Status_Input>>>;
  equals?: InputMaybe<ContactForm_Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<ContactForm_Status_Input>>>;
  not_equals?: InputMaybe<ContactForm_Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<ContactForm_Status_Input>>>;
};

export type ContactForm_Subject_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContactForm_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ContactForm_Where = {
  AND?: InputMaybe<Array<InputMaybe<ContactForm_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<ContactForm_Where_Or>>>;
  createdAt?: InputMaybe<ContactForm_CreatedAt_Operator>;
  email?: InputMaybe<ContactForm_Email_Operator>;
  id?: InputMaybe<ContactForm_Id_Operator>;
  message?: InputMaybe<ContactForm_Message_Operator>;
  name?: InputMaybe<ContactForm_Name_Operator>;
  status?: InputMaybe<ContactForm_Status_Operator>;
  subject?: InputMaybe<ContactForm_Subject_Operator>;
  updatedAt?: InputMaybe<ContactForm_UpdatedAt_Operator>;
};

export type ContactForm_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<ContactForm_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<ContactForm_Where_Or>>>;
  createdAt?: InputMaybe<ContactForm_CreatedAt_Operator>;
  email?: InputMaybe<ContactForm_Email_Operator>;
  id?: InputMaybe<ContactForm_Id_Operator>;
  message?: InputMaybe<ContactForm_Message_Operator>;
  name?: InputMaybe<ContactForm_Name_Operator>;
  status?: InputMaybe<ContactForm_Status_Operator>;
  subject?: InputMaybe<ContactForm_Subject_Operator>;
  updatedAt?: InputMaybe<ContactForm_UpdatedAt_Operator>;
};

export type ContactForm_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<ContactForm_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<ContactForm_Where_Or>>>;
  createdAt?: InputMaybe<ContactForm_CreatedAt_Operator>;
  email?: InputMaybe<ContactForm_Email_Operator>;
  id?: InputMaybe<ContactForm_Id_Operator>;
  message?: InputMaybe<ContactForm_Message_Operator>;
  name?: InputMaybe<ContactForm_Name_Operator>;
  status?: InputMaybe<ContactForm_Status_Operator>;
  subject?: InputMaybe<ContactForm_Subject_Operator>;
  updatedAt?: InputMaybe<ContactForm_UpdatedAt_Operator>;
};

export type ContactForms = {
  __typename?: 'ContactForms';
  docs: Array<ContactForm>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage: Scalars['Int']['output'];
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage: Scalars['Int']['output'];
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type ContactFormsCreateAccess = {
  __typename?: 'ContactFormsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactFormsCreateDocAccess = {
  __typename?: 'ContactFormsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactFormsDeleteAccess = {
  __typename?: 'ContactFormsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactFormsDeleteDocAccess = {
  __typename?: 'ContactFormsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactFormsDocAccessFields = {
  __typename?: 'ContactFormsDocAccessFields';
  createdAt?: Maybe<ContactFormsDocAccessFields_CreatedAt>;
  email?: Maybe<ContactFormsDocAccessFields_Email>;
  message?: Maybe<ContactFormsDocAccessFields_Message>;
  name?: Maybe<ContactFormsDocAccessFields_Name>;
  status?: Maybe<ContactFormsDocAccessFields_Status>;
  subject?: Maybe<ContactFormsDocAccessFields_Subject>;
  updatedAt?: Maybe<ContactFormsDocAccessFields_UpdatedAt>;
};

export type ContactFormsDocAccessFields_CreatedAt = {
  __typename?: 'ContactFormsDocAccessFields_createdAt';
  create?: Maybe<ContactFormsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<ContactFormsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<ContactFormsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ContactFormsDocAccessFields_CreatedAt_Update>;
};

export type ContactFormsDocAccessFields_CreatedAt_Create = {
  __typename?: 'ContactFormsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'ContactFormsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_CreatedAt_Read = {
  __typename?: 'ContactFormsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_CreatedAt_Update = {
  __typename?: 'ContactFormsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Email = {
  __typename?: 'ContactFormsDocAccessFields_email';
  create?: Maybe<ContactFormsDocAccessFields_Email_Create>;
  delete?: Maybe<ContactFormsDocAccessFields_Email_Delete>;
  read?: Maybe<ContactFormsDocAccessFields_Email_Read>;
  update?: Maybe<ContactFormsDocAccessFields_Email_Update>;
};

export type ContactFormsDocAccessFields_Email_Create = {
  __typename?: 'ContactFormsDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Email_Delete = {
  __typename?: 'ContactFormsDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Email_Read = {
  __typename?: 'ContactFormsDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Email_Update = {
  __typename?: 'ContactFormsDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Message = {
  __typename?: 'ContactFormsDocAccessFields_message';
  create?: Maybe<ContactFormsDocAccessFields_Message_Create>;
  delete?: Maybe<ContactFormsDocAccessFields_Message_Delete>;
  read?: Maybe<ContactFormsDocAccessFields_Message_Read>;
  update?: Maybe<ContactFormsDocAccessFields_Message_Update>;
};

export type ContactFormsDocAccessFields_Message_Create = {
  __typename?: 'ContactFormsDocAccessFields_message_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Message_Delete = {
  __typename?: 'ContactFormsDocAccessFields_message_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Message_Read = {
  __typename?: 'ContactFormsDocAccessFields_message_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Message_Update = {
  __typename?: 'ContactFormsDocAccessFields_message_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Name = {
  __typename?: 'ContactFormsDocAccessFields_name';
  create?: Maybe<ContactFormsDocAccessFields_Name_Create>;
  delete?: Maybe<ContactFormsDocAccessFields_Name_Delete>;
  read?: Maybe<ContactFormsDocAccessFields_Name_Read>;
  update?: Maybe<ContactFormsDocAccessFields_Name_Update>;
};

export type ContactFormsDocAccessFields_Name_Create = {
  __typename?: 'ContactFormsDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Name_Delete = {
  __typename?: 'ContactFormsDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Name_Read = {
  __typename?: 'ContactFormsDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Name_Update = {
  __typename?: 'ContactFormsDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Status = {
  __typename?: 'ContactFormsDocAccessFields_status';
  create?: Maybe<ContactFormsDocAccessFields_Status_Create>;
  delete?: Maybe<ContactFormsDocAccessFields_Status_Delete>;
  read?: Maybe<ContactFormsDocAccessFields_Status_Read>;
  update?: Maybe<ContactFormsDocAccessFields_Status_Update>;
};

export type ContactFormsDocAccessFields_Status_Create = {
  __typename?: 'ContactFormsDocAccessFields_status_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Status_Delete = {
  __typename?: 'ContactFormsDocAccessFields_status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Status_Read = {
  __typename?: 'ContactFormsDocAccessFields_status_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Status_Update = {
  __typename?: 'ContactFormsDocAccessFields_status_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Subject = {
  __typename?: 'ContactFormsDocAccessFields_subject';
  create?: Maybe<ContactFormsDocAccessFields_Subject_Create>;
  delete?: Maybe<ContactFormsDocAccessFields_Subject_Delete>;
  read?: Maybe<ContactFormsDocAccessFields_Subject_Read>;
  update?: Maybe<ContactFormsDocAccessFields_Subject_Update>;
};

export type ContactFormsDocAccessFields_Subject_Create = {
  __typename?: 'ContactFormsDocAccessFields_subject_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Subject_Delete = {
  __typename?: 'ContactFormsDocAccessFields_subject_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Subject_Read = {
  __typename?: 'ContactFormsDocAccessFields_subject_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Subject_Update = {
  __typename?: 'ContactFormsDocAccessFields_subject_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_UpdatedAt = {
  __typename?: 'ContactFormsDocAccessFields_updatedAt';
  create?: Maybe<ContactFormsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<ContactFormsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<ContactFormsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ContactFormsDocAccessFields_UpdatedAt_Update>;
};

export type ContactFormsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'ContactFormsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'ContactFormsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'ContactFormsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'ContactFormsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields = {
  __typename?: 'ContactFormsFields';
  createdAt?: Maybe<ContactFormsFields_CreatedAt>;
  email?: Maybe<ContactFormsFields_Email>;
  message?: Maybe<ContactFormsFields_Message>;
  name?: Maybe<ContactFormsFields_Name>;
  status?: Maybe<ContactFormsFields_Status>;
  subject?: Maybe<ContactFormsFields_Subject>;
  updatedAt?: Maybe<ContactFormsFields_UpdatedAt>;
};

export type ContactFormsFields_CreatedAt = {
  __typename?: 'ContactFormsFields_createdAt';
  create?: Maybe<ContactFormsFields_CreatedAt_Create>;
  delete?: Maybe<ContactFormsFields_CreatedAt_Delete>;
  read?: Maybe<ContactFormsFields_CreatedAt_Read>;
  update?: Maybe<ContactFormsFields_CreatedAt_Update>;
};

export type ContactFormsFields_CreatedAt_Create = {
  __typename?: 'ContactFormsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_CreatedAt_Delete = {
  __typename?: 'ContactFormsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_CreatedAt_Read = {
  __typename?: 'ContactFormsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_CreatedAt_Update = {
  __typename?: 'ContactFormsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Email = {
  __typename?: 'ContactFormsFields_email';
  create?: Maybe<ContactFormsFields_Email_Create>;
  delete?: Maybe<ContactFormsFields_Email_Delete>;
  read?: Maybe<ContactFormsFields_Email_Read>;
  update?: Maybe<ContactFormsFields_Email_Update>;
};

export type ContactFormsFields_Email_Create = {
  __typename?: 'ContactFormsFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Email_Delete = {
  __typename?: 'ContactFormsFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Email_Read = {
  __typename?: 'ContactFormsFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Email_Update = {
  __typename?: 'ContactFormsFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Message = {
  __typename?: 'ContactFormsFields_message';
  create?: Maybe<ContactFormsFields_Message_Create>;
  delete?: Maybe<ContactFormsFields_Message_Delete>;
  read?: Maybe<ContactFormsFields_Message_Read>;
  update?: Maybe<ContactFormsFields_Message_Update>;
};

export type ContactFormsFields_Message_Create = {
  __typename?: 'ContactFormsFields_message_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Message_Delete = {
  __typename?: 'ContactFormsFields_message_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Message_Read = {
  __typename?: 'ContactFormsFields_message_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Message_Update = {
  __typename?: 'ContactFormsFields_message_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Name = {
  __typename?: 'ContactFormsFields_name';
  create?: Maybe<ContactFormsFields_Name_Create>;
  delete?: Maybe<ContactFormsFields_Name_Delete>;
  read?: Maybe<ContactFormsFields_Name_Read>;
  update?: Maybe<ContactFormsFields_Name_Update>;
};

export type ContactFormsFields_Name_Create = {
  __typename?: 'ContactFormsFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Name_Delete = {
  __typename?: 'ContactFormsFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Name_Read = {
  __typename?: 'ContactFormsFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Name_Update = {
  __typename?: 'ContactFormsFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Status = {
  __typename?: 'ContactFormsFields_status';
  create?: Maybe<ContactFormsFields_Status_Create>;
  delete?: Maybe<ContactFormsFields_Status_Delete>;
  read?: Maybe<ContactFormsFields_Status_Read>;
  update?: Maybe<ContactFormsFields_Status_Update>;
};

export type ContactFormsFields_Status_Create = {
  __typename?: 'ContactFormsFields_status_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Status_Delete = {
  __typename?: 'ContactFormsFields_status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Status_Read = {
  __typename?: 'ContactFormsFields_status_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Status_Update = {
  __typename?: 'ContactFormsFields_status_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Subject = {
  __typename?: 'ContactFormsFields_subject';
  create?: Maybe<ContactFormsFields_Subject_Create>;
  delete?: Maybe<ContactFormsFields_Subject_Delete>;
  read?: Maybe<ContactFormsFields_Subject_Read>;
  update?: Maybe<ContactFormsFields_Subject_Update>;
};

export type ContactFormsFields_Subject_Create = {
  __typename?: 'ContactFormsFields_subject_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Subject_Delete = {
  __typename?: 'ContactFormsFields_subject_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Subject_Read = {
  __typename?: 'ContactFormsFields_subject_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Subject_Update = {
  __typename?: 'ContactFormsFields_subject_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_UpdatedAt = {
  __typename?: 'ContactFormsFields_updatedAt';
  create?: Maybe<ContactFormsFields_UpdatedAt_Create>;
  delete?: Maybe<ContactFormsFields_UpdatedAt_Delete>;
  read?: Maybe<ContactFormsFields_UpdatedAt_Read>;
  update?: Maybe<ContactFormsFields_UpdatedAt_Update>;
};

export type ContactFormsFields_UpdatedAt_Create = {
  __typename?: 'ContactFormsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_UpdatedAt_Delete = {
  __typename?: 'ContactFormsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_UpdatedAt_Read = {
  __typename?: 'ContactFormsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_UpdatedAt_Update = {
  __typename?: 'ContactFormsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFormsReadAccess = {
  __typename?: 'ContactFormsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactFormsReadDocAccess = {
  __typename?: 'ContactFormsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactFormsUpdateAccess = {
  __typename?: 'ContactFormsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactFormsUpdateDocAccess = {
  __typename?: 'ContactFormsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Experience = {
  __typename?: 'Experience';
  coverImage?: Maybe<Media>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  meta?: Maybe<Experience_Meta>;
  role?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  summary: Scalars['JSON']['output'];
  tags: Array<Tag>;
  thumbnailImage?: Maybe<Media>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ExperienceSummaryArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type Experience_Meta = {
  __typename?: 'Experience_Meta';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Experience_CoverImage_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Experience_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Experience_EndDate_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Experience_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Experience_Meta__Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Experience_Meta__Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Experience_Meta__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Experience_Role_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Experience_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Experience_StartDate_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Experience_Summary_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Experience_Tags_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Experience_ThumbnailImage_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Experience_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Experience_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Experience_Where = {
  AND?: InputMaybe<Array<InputMaybe<Experience_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Experience_Where_Or>>>;
  coverImage?: InputMaybe<Experience_CoverImage_Operator>;
  createdAt?: InputMaybe<Experience_CreatedAt_Operator>;
  endDate?: InputMaybe<Experience_EndDate_Operator>;
  id?: InputMaybe<Experience_Id_Operator>;
  meta__description?: InputMaybe<Experience_Meta__Description_Operator>;
  meta__image?: InputMaybe<Experience_Meta__Image_Operator>;
  meta__title?: InputMaybe<Experience_Meta__Title_Operator>;
  role?: InputMaybe<Experience_Role_Operator>;
  slug?: InputMaybe<Experience_Slug_Operator>;
  startDate?: InputMaybe<Experience_StartDate_Operator>;
  summary?: InputMaybe<Experience_Summary_Operator>;
  tags?: InputMaybe<Experience_Tags_Operator>;
  thumbnailImage?: InputMaybe<Experience_ThumbnailImage_Operator>;
  title?: InputMaybe<Experience_Title_Operator>;
  updatedAt?: InputMaybe<Experience_UpdatedAt_Operator>;
};

export type Experience_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Experience_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Experience_Where_Or>>>;
  coverImage?: InputMaybe<Experience_CoverImage_Operator>;
  createdAt?: InputMaybe<Experience_CreatedAt_Operator>;
  endDate?: InputMaybe<Experience_EndDate_Operator>;
  id?: InputMaybe<Experience_Id_Operator>;
  meta__description?: InputMaybe<Experience_Meta__Description_Operator>;
  meta__image?: InputMaybe<Experience_Meta__Image_Operator>;
  meta__title?: InputMaybe<Experience_Meta__Title_Operator>;
  role?: InputMaybe<Experience_Role_Operator>;
  slug?: InputMaybe<Experience_Slug_Operator>;
  startDate?: InputMaybe<Experience_StartDate_Operator>;
  summary?: InputMaybe<Experience_Summary_Operator>;
  tags?: InputMaybe<Experience_Tags_Operator>;
  thumbnailImage?: InputMaybe<Experience_ThumbnailImage_Operator>;
  title?: InputMaybe<Experience_Title_Operator>;
  updatedAt?: InputMaybe<Experience_UpdatedAt_Operator>;
};

export type Experience_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Experience_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Experience_Where_Or>>>;
  coverImage?: InputMaybe<Experience_CoverImage_Operator>;
  createdAt?: InputMaybe<Experience_CreatedAt_Operator>;
  endDate?: InputMaybe<Experience_EndDate_Operator>;
  id?: InputMaybe<Experience_Id_Operator>;
  meta__description?: InputMaybe<Experience_Meta__Description_Operator>;
  meta__image?: InputMaybe<Experience_Meta__Image_Operator>;
  meta__title?: InputMaybe<Experience_Meta__Title_Operator>;
  role?: InputMaybe<Experience_Role_Operator>;
  slug?: InputMaybe<Experience_Slug_Operator>;
  startDate?: InputMaybe<Experience_StartDate_Operator>;
  summary?: InputMaybe<Experience_Summary_Operator>;
  tags?: InputMaybe<Experience_Tags_Operator>;
  thumbnailImage?: InputMaybe<Experience_ThumbnailImage_Operator>;
  title?: InputMaybe<Experience_Title_Operator>;
  updatedAt?: InputMaybe<Experience_UpdatedAt_Operator>;
};

export type Experiences = {
  __typename?: 'Experiences';
  docs: Array<Experience>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage: Scalars['Int']['output'];
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage: Scalars['Int']['output'];
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type ExperiencesCreateAccess = {
  __typename?: 'ExperiencesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ExperiencesCreateDocAccess = {
  __typename?: 'ExperiencesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ExperiencesDeleteAccess = {
  __typename?: 'ExperiencesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ExperiencesDeleteDocAccess = {
  __typename?: 'ExperiencesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ExperiencesDocAccessFields = {
  __typename?: 'ExperiencesDocAccessFields';
  coverImage?: Maybe<ExperiencesDocAccessFields_CoverImage>;
  createdAt?: Maybe<ExperiencesDocAccessFields_CreatedAt>;
  endDate?: Maybe<ExperiencesDocAccessFields_EndDate>;
  meta?: Maybe<ExperiencesDocAccessFields_Meta>;
  role?: Maybe<ExperiencesDocAccessFields_Role>;
  slug?: Maybe<ExperiencesDocAccessFields_Slug>;
  startDate?: Maybe<ExperiencesDocAccessFields_StartDate>;
  summary?: Maybe<ExperiencesDocAccessFields_Summary>;
  tags?: Maybe<ExperiencesDocAccessFields_Tags>;
  thumbnailImage?: Maybe<ExperiencesDocAccessFields_ThumbnailImage>;
  title?: Maybe<ExperiencesDocAccessFields_Title>;
  updatedAt?: Maybe<ExperiencesDocAccessFields_UpdatedAt>;
};

export type ExperiencesDocAccessFields_CoverImage = {
  __typename?: 'ExperiencesDocAccessFields_coverImage';
  create?: Maybe<ExperiencesDocAccessFields_CoverImage_Create>;
  delete?: Maybe<ExperiencesDocAccessFields_CoverImage_Delete>;
  read?: Maybe<ExperiencesDocAccessFields_CoverImage_Read>;
  update?: Maybe<ExperiencesDocAccessFields_CoverImage_Update>;
};

export type ExperiencesDocAccessFields_CoverImage_Create = {
  __typename?: 'ExperiencesDocAccessFields_coverImage_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_CoverImage_Delete = {
  __typename?: 'ExperiencesDocAccessFields_coverImage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_CoverImage_Read = {
  __typename?: 'ExperiencesDocAccessFields_coverImage_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_CoverImage_Update = {
  __typename?: 'ExperiencesDocAccessFields_coverImage_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_CreatedAt = {
  __typename?: 'ExperiencesDocAccessFields_createdAt';
  create?: Maybe<ExperiencesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<ExperiencesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<ExperiencesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ExperiencesDocAccessFields_CreatedAt_Update>;
};

export type ExperiencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'ExperiencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'ExperiencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'ExperiencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'ExperiencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_EndDate = {
  __typename?: 'ExperiencesDocAccessFields_endDate';
  create?: Maybe<ExperiencesDocAccessFields_EndDate_Create>;
  delete?: Maybe<ExperiencesDocAccessFields_EndDate_Delete>;
  read?: Maybe<ExperiencesDocAccessFields_EndDate_Read>;
  update?: Maybe<ExperiencesDocAccessFields_EndDate_Update>;
};

export type ExperiencesDocAccessFields_EndDate_Create = {
  __typename?: 'ExperiencesDocAccessFields_endDate_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_EndDate_Delete = {
  __typename?: 'ExperiencesDocAccessFields_endDate_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_EndDate_Read = {
  __typename?: 'ExperiencesDocAccessFields_endDate_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_EndDate_Update = {
  __typename?: 'ExperiencesDocAccessFields_endDate_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta = {
  __typename?: 'ExperiencesDocAccessFields_meta';
  create?: Maybe<ExperiencesDocAccessFields_Meta_Create>;
  delete?: Maybe<ExperiencesDocAccessFields_Meta_Delete>;
  fields?: Maybe<ExperiencesDocAccessFields_Meta_Fields>;
  read?: Maybe<ExperiencesDocAccessFields_Meta_Read>;
  update?: Maybe<ExperiencesDocAccessFields_Meta_Update>;
};

export type ExperiencesDocAccessFields_Meta_Create = {
  __typename?: 'ExperiencesDocAccessFields_meta_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Delete = {
  __typename?: 'ExperiencesDocAccessFields_meta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Fields = {
  __typename?: 'ExperiencesDocAccessFields_meta_Fields';
  description?: Maybe<ExperiencesDocAccessFields_Meta_Description>;
  image?: Maybe<ExperiencesDocAccessFields_Meta_Image>;
  title?: Maybe<ExperiencesDocAccessFields_Meta_Title>;
};

export type ExperiencesDocAccessFields_Meta_Read = {
  __typename?: 'ExperiencesDocAccessFields_meta_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Update = {
  __typename?: 'ExperiencesDocAccessFields_meta_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Description = {
  __typename?: 'ExperiencesDocAccessFields_meta_description';
  create?: Maybe<ExperiencesDocAccessFields_Meta_Description_Create>;
  delete?: Maybe<ExperiencesDocAccessFields_Meta_Description_Delete>;
  read?: Maybe<ExperiencesDocAccessFields_Meta_Description_Read>;
  update?: Maybe<ExperiencesDocAccessFields_Meta_Description_Update>;
};

export type ExperiencesDocAccessFields_Meta_Description_Create = {
  __typename?: 'ExperiencesDocAccessFields_meta_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Description_Delete = {
  __typename?: 'ExperiencesDocAccessFields_meta_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Description_Read = {
  __typename?: 'ExperiencesDocAccessFields_meta_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Description_Update = {
  __typename?: 'ExperiencesDocAccessFields_meta_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Image = {
  __typename?: 'ExperiencesDocAccessFields_meta_image';
  create?: Maybe<ExperiencesDocAccessFields_Meta_Image_Create>;
  delete?: Maybe<ExperiencesDocAccessFields_Meta_Image_Delete>;
  read?: Maybe<ExperiencesDocAccessFields_Meta_Image_Read>;
  update?: Maybe<ExperiencesDocAccessFields_Meta_Image_Update>;
};

export type ExperiencesDocAccessFields_Meta_Image_Create = {
  __typename?: 'ExperiencesDocAccessFields_meta_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Image_Delete = {
  __typename?: 'ExperiencesDocAccessFields_meta_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Image_Read = {
  __typename?: 'ExperiencesDocAccessFields_meta_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Image_Update = {
  __typename?: 'ExperiencesDocAccessFields_meta_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Title = {
  __typename?: 'ExperiencesDocAccessFields_meta_title';
  create?: Maybe<ExperiencesDocAccessFields_Meta_Title_Create>;
  delete?: Maybe<ExperiencesDocAccessFields_Meta_Title_Delete>;
  read?: Maybe<ExperiencesDocAccessFields_Meta_Title_Read>;
  update?: Maybe<ExperiencesDocAccessFields_Meta_Title_Update>;
};

export type ExperiencesDocAccessFields_Meta_Title_Create = {
  __typename?: 'ExperiencesDocAccessFields_meta_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Title_Delete = {
  __typename?: 'ExperiencesDocAccessFields_meta_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Title_Read = {
  __typename?: 'ExperiencesDocAccessFields_meta_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Title_Update = {
  __typename?: 'ExperiencesDocAccessFields_meta_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Role = {
  __typename?: 'ExperiencesDocAccessFields_role';
  create?: Maybe<ExperiencesDocAccessFields_Role_Create>;
  delete?: Maybe<ExperiencesDocAccessFields_Role_Delete>;
  read?: Maybe<ExperiencesDocAccessFields_Role_Read>;
  update?: Maybe<ExperiencesDocAccessFields_Role_Update>;
};

export type ExperiencesDocAccessFields_Role_Create = {
  __typename?: 'ExperiencesDocAccessFields_role_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Role_Delete = {
  __typename?: 'ExperiencesDocAccessFields_role_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Role_Read = {
  __typename?: 'ExperiencesDocAccessFields_role_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Role_Update = {
  __typename?: 'ExperiencesDocAccessFields_role_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Slug = {
  __typename?: 'ExperiencesDocAccessFields_slug';
  create?: Maybe<ExperiencesDocAccessFields_Slug_Create>;
  delete?: Maybe<ExperiencesDocAccessFields_Slug_Delete>;
  read?: Maybe<ExperiencesDocAccessFields_Slug_Read>;
  update?: Maybe<ExperiencesDocAccessFields_Slug_Update>;
};

export type ExperiencesDocAccessFields_Slug_Create = {
  __typename?: 'ExperiencesDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Slug_Delete = {
  __typename?: 'ExperiencesDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Slug_Read = {
  __typename?: 'ExperiencesDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Slug_Update = {
  __typename?: 'ExperiencesDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_StartDate = {
  __typename?: 'ExperiencesDocAccessFields_startDate';
  create?: Maybe<ExperiencesDocAccessFields_StartDate_Create>;
  delete?: Maybe<ExperiencesDocAccessFields_StartDate_Delete>;
  read?: Maybe<ExperiencesDocAccessFields_StartDate_Read>;
  update?: Maybe<ExperiencesDocAccessFields_StartDate_Update>;
};

export type ExperiencesDocAccessFields_StartDate_Create = {
  __typename?: 'ExperiencesDocAccessFields_startDate_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_StartDate_Delete = {
  __typename?: 'ExperiencesDocAccessFields_startDate_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_StartDate_Read = {
  __typename?: 'ExperiencesDocAccessFields_startDate_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_StartDate_Update = {
  __typename?: 'ExperiencesDocAccessFields_startDate_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Summary = {
  __typename?: 'ExperiencesDocAccessFields_summary';
  create?: Maybe<ExperiencesDocAccessFields_Summary_Create>;
  delete?: Maybe<ExperiencesDocAccessFields_Summary_Delete>;
  read?: Maybe<ExperiencesDocAccessFields_Summary_Read>;
  update?: Maybe<ExperiencesDocAccessFields_Summary_Update>;
};

export type ExperiencesDocAccessFields_Summary_Create = {
  __typename?: 'ExperiencesDocAccessFields_summary_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Summary_Delete = {
  __typename?: 'ExperiencesDocAccessFields_summary_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Summary_Read = {
  __typename?: 'ExperiencesDocAccessFields_summary_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Summary_Update = {
  __typename?: 'ExperiencesDocAccessFields_summary_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Tags = {
  __typename?: 'ExperiencesDocAccessFields_tags';
  create?: Maybe<ExperiencesDocAccessFields_Tags_Create>;
  delete?: Maybe<ExperiencesDocAccessFields_Tags_Delete>;
  read?: Maybe<ExperiencesDocAccessFields_Tags_Read>;
  update?: Maybe<ExperiencesDocAccessFields_Tags_Update>;
};

export type ExperiencesDocAccessFields_Tags_Create = {
  __typename?: 'ExperiencesDocAccessFields_tags_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Tags_Delete = {
  __typename?: 'ExperiencesDocAccessFields_tags_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Tags_Read = {
  __typename?: 'ExperiencesDocAccessFields_tags_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Tags_Update = {
  __typename?: 'ExperiencesDocAccessFields_tags_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_ThumbnailImage = {
  __typename?: 'ExperiencesDocAccessFields_thumbnailImage';
  create?: Maybe<ExperiencesDocAccessFields_ThumbnailImage_Create>;
  delete?: Maybe<ExperiencesDocAccessFields_ThumbnailImage_Delete>;
  read?: Maybe<ExperiencesDocAccessFields_ThumbnailImage_Read>;
  update?: Maybe<ExperiencesDocAccessFields_ThumbnailImage_Update>;
};

export type ExperiencesDocAccessFields_ThumbnailImage_Create = {
  __typename?: 'ExperiencesDocAccessFields_thumbnailImage_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_ThumbnailImage_Delete = {
  __typename?: 'ExperiencesDocAccessFields_thumbnailImage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_ThumbnailImage_Read = {
  __typename?: 'ExperiencesDocAccessFields_thumbnailImage_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_ThumbnailImage_Update = {
  __typename?: 'ExperiencesDocAccessFields_thumbnailImage_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Title = {
  __typename?: 'ExperiencesDocAccessFields_title';
  create?: Maybe<ExperiencesDocAccessFields_Title_Create>;
  delete?: Maybe<ExperiencesDocAccessFields_Title_Delete>;
  read?: Maybe<ExperiencesDocAccessFields_Title_Read>;
  update?: Maybe<ExperiencesDocAccessFields_Title_Update>;
};

export type ExperiencesDocAccessFields_Title_Create = {
  __typename?: 'ExperiencesDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Title_Delete = {
  __typename?: 'ExperiencesDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Title_Read = {
  __typename?: 'ExperiencesDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Title_Update = {
  __typename?: 'ExperiencesDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_UpdatedAt = {
  __typename?: 'ExperiencesDocAccessFields_updatedAt';
  create?: Maybe<ExperiencesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<ExperiencesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<ExperiencesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ExperiencesDocAccessFields_UpdatedAt_Update>;
};

export type ExperiencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'ExperiencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'ExperiencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'ExperiencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'ExperiencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields = {
  __typename?: 'ExperiencesFields';
  coverImage?: Maybe<ExperiencesFields_CoverImage>;
  createdAt?: Maybe<ExperiencesFields_CreatedAt>;
  endDate?: Maybe<ExperiencesFields_EndDate>;
  meta?: Maybe<ExperiencesFields_Meta>;
  role?: Maybe<ExperiencesFields_Role>;
  slug?: Maybe<ExperiencesFields_Slug>;
  startDate?: Maybe<ExperiencesFields_StartDate>;
  summary?: Maybe<ExperiencesFields_Summary>;
  tags?: Maybe<ExperiencesFields_Tags>;
  thumbnailImage?: Maybe<ExperiencesFields_ThumbnailImage>;
  title?: Maybe<ExperiencesFields_Title>;
  updatedAt?: Maybe<ExperiencesFields_UpdatedAt>;
};

export type ExperiencesFields_CoverImage = {
  __typename?: 'ExperiencesFields_coverImage';
  create?: Maybe<ExperiencesFields_CoverImage_Create>;
  delete?: Maybe<ExperiencesFields_CoverImage_Delete>;
  read?: Maybe<ExperiencesFields_CoverImage_Read>;
  update?: Maybe<ExperiencesFields_CoverImage_Update>;
};

export type ExperiencesFields_CoverImage_Create = {
  __typename?: 'ExperiencesFields_coverImage_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_CoverImage_Delete = {
  __typename?: 'ExperiencesFields_coverImage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_CoverImage_Read = {
  __typename?: 'ExperiencesFields_coverImage_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_CoverImage_Update = {
  __typename?: 'ExperiencesFields_coverImage_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_CreatedAt = {
  __typename?: 'ExperiencesFields_createdAt';
  create?: Maybe<ExperiencesFields_CreatedAt_Create>;
  delete?: Maybe<ExperiencesFields_CreatedAt_Delete>;
  read?: Maybe<ExperiencesFields_CreatedAt_Read>;
  update?: Maybe<ExperiencesFields_CreatedAt_Update>;
};

export type ExperiencesFields_CreatedAt_Create = {
  __typename?: 'ExperiencesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_CreatedAt_Delete = {
  __typename?: 'ExperiencesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_CreatedAt_Read = {
  __typename?: 'ExperiencesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_CreatedAt_Update = {
  __typename?: 'ExperiencesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_EndDate = {
  __typename?: 'ExperiencesFields_endDate';
  create?: Maybe<ExperiencesFields_EndDate_Create>;
  delete?: Maybe<ExperiencesFields_EndDate_Delete>;
  read?: Maybe<ExperiencesFields_EndDate_Read>;
  update?: Maybe<ExperiencesFields_EndDate_Update>;
};

export type ExperiencesFields_EndDate_Create = {
  __typename?: 'ExperiencesFields_endDate_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_EndDate_Delete = {
  __typename?: 'ExperiencesFields_endDate_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_EndDate_Read = {
  __typename?: 'ExperiencesFields_endDate_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_EndDate_Update = {
  __typename?: 'ExperiencesFields_endDate_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta = {
  __typename?: 'ExperiencesFields_meta';
  create?: Maybe<ExperiencesFields_Meta_Create>;
  delete?: Maybe<ExperiencesFields_Meta_Delete>;
  fields?: Maybe<ExperiencesFields_Meta_Fields>;
  read?: Maybe<ExperiencesFields_Meta_Read>;
  update?: Maybe<ExperiencesFields_Meta_Update>;
};

export type ExperiencesFields_Meta_Create = {
  __typename?: 'ExperiencesFields_meta_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Delete = {
  __typename?: 'ExperiencesFields_meta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Fields = {
  __typename?: 'ExperiencesFields_meta_Fields';
  description?: Maybe<ExperiencesFields_Meta_Description>;
  image?: Maybe<ExperiencesFields_Meta_Image>;
  title?: Maybe<ExperiencesFields_Meta_Title>;
};

export type ExperiencesFields_Meta_Read = {
  __typename?: 'ExperiencesFields_meta_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Update = {
  __typename?: 'ExperiencesFields_meta_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Description = {
  __typename?: 'ExperiencesFields_meta_description';
  create?: Maybe<ExperiencesFields_Meta_Description_Create>;
  delete?: Maybe<ExperiencesFields_Meta_Description_Delete>;
  read?: Maybe<ExperiencesFields_Meta_Description_Read>;
  update?: Maybe<ExperiencesFields_Meta_Description_Update>;
};

export type ExperiencesFields_Meta_Description_Create = {
  __typename?: 'ExperiencesFields_meta_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Description_Delete = {
  __typename?: 'ExperiencesFields_meta_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Description_Read = {
  __typename?: 'ExperiencesFields_meta_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Description_Update = {
  __typename?: 'ExperiencesFields_meta_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Image = {
  __typename?: 'ExperiencesFields_meta_image';
  create?: Maybe<ExperiencesFields_Meta_Image_Create>;
  delete?: Maybe<ExperiencesFields_Meta_Image_Delete>;
  read?: Maybe<ExperiencesFields_Meta_Image_Read>;
  update?: Maybe<ExperiencesFields_Meta_Image_Update>;
};

export type ExperiencesFields_Meta_Image_Create = {
  __typename?: 'ExperiencesFields_meta_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Image_Delete = {
  __typename?: 'ExperiencesFields_meta_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Image_Read = {
  __typename?: 'ExperiencesFields_meta_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Image_Update = {
  __typename?: 'ExperiencesFields_meta_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Title = {
  __typename?: 'ExperiencesFields_meta_title';
  create?: Maybe<ExperiencesFields_Meta_Title_Create>;
  delete?: Maybe<ExperiencesFields_Meta_Title_Delete>;
  read?: Maybe<ExperiencesFields_Meta_Title_Read>;
  update?: Maybe<ExperiencesFields_Meta_Title_Update>;
};

export type ExperiencesFields_Meta_Title_Create = {
  __typename?: 'ExperiencesFields_meta_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Title_Delete = {
  __typename?: 'ExperiencesFields_meta_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Title_Read = {
  __typename?: 'ExperiencesFields_meta_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Title_Update = {
  __typename?: 'ExperiencesFields_meta_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Role = {
  __typename?: 'ExperiencesFields_role';
  create?: Maybe<ExperiencesFields_Role_Create>;
  delete?: Maybe<ExperiencesFields_Role_Delete>;
  read?: Maybe<ExperiencesFields_Role_Read>;
  update?: Maybe<ExperiencesFields_Role_Update>;
};

export type ExperiencesFields_Role_Create = {
  __typename?: 'ExperiencesFields_role_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Role_Delete = {
  __typename?: 'ExperiencesFields_role_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Role_Read = {
  __typename?: 'ExperiencesFields_role_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Role_Update = {
  __typename?: 'ExperiencesFields_role_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Slug = {
  __typename?: 'ExperiencesFields_slug';
  create?: Maybe<ExperiencesFields_Slug_Create>;
  delete?: Maybe<ExperiencesFields_Slug_Delete>;
  read?: Maybe<ExperiencesFields_Slug_Read>;
  update?: Maybe<ExperiencesFields_Slug_Update>;
};

export type ExperiencesFields_Slug_Create = {
  __typename?: 'ExperiencesFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Slug_Delete = {
  __typename?: 'ExperiencesFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Slug_Read = {
  __typename?: 'ExperiencesFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Slug_Update = {
  __typename?: 'ExperiencesFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_StartDate = {
  __typename?: 'ExperiencesFields_startDate';
  create?: Maybe<ExperiencesFields_StartDate_Create>;
  delete?: Maybe<ExperiencesFields_StartDate_Delete>;
  read?: Maybe<ExperiencesFields_StartDate_Read>;
  update?: Maybe<ExperiencesFields_StartDate_Update>;
};

export type ExperiencesFields_StartDate_Create = {
  __typename?: 'ExperiencesFields_startDate_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_StartDate_Delete = {
  __typename?: 'ExperiencesFields_startDate_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_StartDate_Read = {
  __typename?: 'ExperiencesFields_startDate_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_StartDate_Update = {
  __typename?: 'ExperiencesFields_startDate_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Summary = {
  __typename?: 'ExperiencesFields_summary';
  create?: Maybe<ExperiencesFields_Summary_Create>;
  delete?: Maybe<ExperiencesFields_Summary_Delete>;
  read?: Maybe<ExperiencesFields_Summary_Read>;
  update?: Maybe<ExperiencesFields_Summary_Update>;
};

export type ExperiencesFields_Summary_Create = {
  __typename?: 'ExperiencesFields_summary_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Summary_Delete = {
  __typename?: 'ExperiencesFields_summary_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Summary_Read = {
  __typename?: 'ExperiencesFields_summary_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Summary_Update = {
  __typename?: 'ExperiencesFields_summary_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Tags = {
  __typename?: 'ExperiencesFields_tags';
  create?: Maybe<ExperiencesFields_Tags_Create>;
  delete?: Maybe<ExperiencesFields_Tags_Delete>;
  read?: Maybe<ExperiencesFields_Tags_Read>;
  update?: Maybe<ExperiencesFields_Tags_Update>;
};

export type ExperiencesFields_Tags_Create = {
  __typename?: 'ExperiencesFields_tags_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Tags_Delete = {
  __typename?: 'ExperiencesFields_tags_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Tags_Read = {
  __typename?: 'ExperiencesFields_tags_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Tags_Update = {
  __typename?: 'ExperiencesFields_tags_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_ThumbnailImage = {
  __typename?: 'ExperiencesFields_thumbnailImage';
  create?: Maybe<ExperiencesFields_ThumbnailImage_Create>;
  delete?: Maybe<ExperiencesFields_ThumbnailImage_Delete>;
  read?: Maybe<ExperiencesFields_ThumbnailImage_Read>;
  update?: Maybe<ExperiencesFields_ThumbnailImage_Update>;
};

export type ExperiencesFields_ThumbnailImage_Create = {
  __typename?: 'ExperiencesFields_thumbnailImage_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_ThumbnailImage_Delete = {
  __typename?: 'ExperiencesFields_thumbnailImage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_ThumbnailImage_Read = {
  __typename?: 'ExperiencesFields_thumbnailImage_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_ThumbnailImage_Update = {
  __typename?: 'ExperiencesFields_thumbnailImage_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Title = {
  __typename?: 'ExperiencesFields_title';
  create?: Maybe<ExperiencesFields_Title_Create>;
  delete?: Maybe<ExperiencesFields_Title_Delete>;
  read?: Maybe<ExperiencesFields_Title_Read>;
  update?: Maybe<ExperiencesFields_Title_Update>;
};

export type ExperiencesFields_Title_Create = {
  __typename?: 'ExperiencesFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Title_Delete = {
  __typename?: 'ExperiencesFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Title_Read = {
  __typename?: 'ExperiencesFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Title_Update = {
  __typename?: 'ExperiencesFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_UpdatedAt = {
  __typename?: 'ExperiencesFields_updatedAt';
  create?: Maybe<ExperiencesFields_UpdatedAt_Create>;
  delete?: Maybe<ExperiencesFields_UpdatedAt_Delete>;
  read?: Maybe<ExperiencesFields_UpdatedAt_Read>;
  update?: Maybe<ExperiencesFields_UpdatedAt_Update>;
};

export type ExperiencesFields_UpdatedAt_Create = {
  __typename?: 'ExperiencesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_UpdatedAt_Delete = {
  __typename?: 'ExperiencesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_UpdatedAt_Read = {
  __typename?: 'ExperiencesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_UpdatedAt_Update = {
  __typename?: 'ExperiencesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperiencesReadAccess = {
  __typename?: 'ExperiencesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ExperiencesReadDocAccess = {
  __typename?: 'ExperiencesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ExperiencesUpdateAccess = {
  __typename?: 'ExperiencesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ExperiencesUpdateDocAccess = {
  __typename?: 'ExperiencesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeaturedCaseStudiesDocAccessFields = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields';
  caseStudies?: Maybe<FeaturedCaseStudiesDocAccessFields_CaseStudies>;
  createdAt?: Maybe<FeaturedCaseStudiesDocAccessFields_CreatedAt>;
  description?: Maybe<FeaturedCaseStudiesDocAccessFields_Description>;
  subtitle?: Maybe<FeaturedCaseStudiesDocAccessFields_Subtitle>;
  title?: Maybe<FeaturedCaseStudiesDocAccessFields_Title>;
  updatedAt?: Maybe<FeaturedCaseStudiesDocAccessFields_UpdatedAt>;
};

export type FeaturedCaseStudiesDocAccessFields_CaseStudies = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_caseStudies';
  create?: Maybe<FeaturedCaseStudiesDocAccessFields_CaseStudies_Create>;
  delete?: Maybe<FeaturedCaseStudiesDocAccessFields_CaseStudies_Delete>;
  read?: Maybe<FeaturedCaseStudiesDocAccessFields_CaseStudies_Read>;
  update?: Maybe<FeaturedCaseStudiesDocAccessFields_CaseStudies_Update>;
};

export type FeaturedCaseStudiesDocAccessFields_CaseStudies_Create = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_caseStudies_Create';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_CaseStudies_Delete = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_caseStudies_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_CaseStudies_Read = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_caseStudies_Read';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_CaseStudies_Update = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_caseStudies_Update';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_CreatedAt = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_createdAt';
  create?: Maybe<FeaturedCaseStudiesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<FeaturedCaseStudiesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<FeaturedCaseStudiesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<FeaturedCaseStudiesDocAccessFields_CreatedAt_Update>;
};

export type FeaturedCaseStudiesDocAccessFields_CreatedAt_Create = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_CreatedAt_Read = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_CreatedAt_Update = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_Description = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_description';
  create?: Maybe<FeaturedCaseStudiesDocAccessFields_Description_Create>;
  delete?: Maybe<FeaturedCaseStudiesDocAccessFields_Description_Delete>;
  read?: Maybe<FeaturedCaseStudiesDocAccessFields_Description_Read>;
  update?: Maybe<FeaturedCaseStudiesDocAccessFields_Description_Update>;
};

export type FeaturedCaseStudiesDocAccessFields_Description_Create = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_Description_Delete = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_Description_Read = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_Description_Update = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_Subtitle = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_subtitle';
  create?: Maybe<FeaturedCaseStudiesDocAccessFields_Subtitle_Create>;
  delete?: Maybe<FeaturedCaseStudiesDocAccessFields_Subtitle_Delete>;
  read?: Maybe<FeaturedCaseStudiesDocAccessFields_Subtitle_Read>;
  update?: Maybe<FeaturedCaseStudiesDocAccessFields_Subtitle_Update>;
};

export type FeaturedCaseStudiesDocAccessFields_Subtitle_Create = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_Subtitle_Delete = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_Subtitle_Read = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_Subtitle_Update = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_Title = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_title';
  create?: Maybe<FeaturedCaseStudiesDocAccessFields_Title_Create>;
  delete?: Maybe<FeaturedCaseStudiesDocAccessFields_Title_Delete>;
  read?: Maybe<FeaturedCaseStudiesDocAccessFields_Title_Read>;
  update?: Maybe<FeaturedCaseStudiesDocAccessFields_Title_Update>;
};

export type FeaturedCaseStudiesDocAccessFields_Title_Create = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_Title_Delete = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_Title_Read = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_Title_Update = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_UpdatedAt = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_updatedAt';
  create?: Maybe<FeaturedCaseStudiesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<FeaturedCaseStudiesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<FeaturedCaseStudiesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<FeaturedCaseStudiesDocAccessFields_UpdatedAt_Update>;
};

export type FeaturedCaseStudiesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'FeaturedCaseStudiesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields = {
  __typename?: 'FeaturedCaseStudiesFields';
  caseStudies?: Maybe<FeaturedCaseStudiesFields_CaseStudies>;
  createdAt?: Maybe<FeaturedCaseStudiesFields_CreatedAt>;
  description?: Maybe<FeaturedCaseStudiesFields_Description>;
  subtitle?: Maybe<FeaturedCaseStudiesFields_Subtitle>;
  title?: Maybe<FeaturedCaseStudiesFields_Title>;
  updatedAt?: Maybe<FeaturedCaseStudiesFields_UpdatedAt>;
};

export type FeaturedCaseStudiesFields_CaseStudies = {
  __typename?: 'FeaturedCaseStudiesFields_caseStudies';
  create?: Maybe<FeaturedCaseStudiesFields_CaseStudies_Create>;
  delete?: Maybe<FeaturedCaseStudiesFields_CaseStudies_Delete>;
  read?: Maybe<FeaturedCaseStudiesFields_CaseStudies_Read>;
  update?: Maybe<FeaturedCaseStudiesFields_CaseStudies_Update>;
};

export type FeaturedCaseStudiesFields_CaseStudies_Create = {
  __typename?: 'FeaturedCaseStudiesFields_caseStudies_Create';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_CaseStudies_Delete = {
  __typename?: 'FeaturedCaseStudiesFields_caseStudies_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_CaseStudies_Read = {
  __typename?: 'FeaturedCaseStudiesFields_caseStudies_Read';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_CaseStudies_Update = {
  __typename?: 'FeaturedCaseStudiesFields_caseStudies_Update';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_CreatedAt = {
  __typename?: 'FeaturedCaseStudiesFields_createdAt';
  create?: Maybe<FeaturedCaseStudiesFields_CreatedAt_Create>;
  delete?: Maybe<FeaturedCaseStudiesFields_CreatedAt_Delete>;
  read?: Maybe<FeaturedCaseStudiesFields_CreatedAt_Read>;
  update?: Maybe<FeaturedCaseStudiesFields_CreatedAt_Update>;
};

export type FeaturedCaseStudiesFields_CreatedAt_Create = {
  __typename?: 'FeaturedCaseStudiesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_CreatedAt_Delete = {
  __typename?: 'FeaturedCaseStudiesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_CreatedAt_Read = {
  __typename?: 'FeaturedCaseStudiesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_CreatedAt_Update = {
  __typename?: 'FeaturedCaseStudiesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_Description = {
  __typename?: 'FeaturedCaseStudiesFields_description';
  create?: Maybe<FeaturedCaseStudiesFields_Description_Create>;
  delete?: Maybe<FeaturedCaseStudiesFields_Description_Delete>;
  read?: Maybe<FeaturedCaseStudiesFields_Description_Read>;
  update?: Maybe<FeaturedCaseStudiesFields_Description_Update>;
};

export type FeaturedCaseStudiesFields_Description_Create = {
  __typename?: 'FeaturedCaseStudiesFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_Description_Delete = {
  __typename?: 'FeaturedCaseStudiesFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_Description_Read = {
  __typename?: 'FeaturedCaseStudiesFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_Description_Update = {
  __typename?: 'FeaturedCaseStudiesFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_Subtitle = {
  __typename?: 'FeaturedCaseStudiesFields_subtitle';
  create?: Maybe<FeaturedCaseStudiesFields_Subtitle_Create>;
  delete?: Maybe<FeaturedCaseStudiesFields_Subtitle_Delete>;
  read?: Maybe<FeaturedCaseStudiesFields_Subtitle_Read>;
  update?: Maybe<FeaturedCaseStudiesFields_Subtitle_Update>;
};

export type FeaturedCaseStudiesFields_Subtitle_Create = {
  __typename?: 'FeaturedCaseStudiesFields_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_Subtitle_Delete = {
  __typename?: 'FeaturedCaseStudiesFields_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_Subtitle_Read = {
  __typename?: 'FeaturedCaseStudiesFields_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_Subtitle_Update = {
  __typename?: 'FeaturedCaseStudiesFields_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_Title = {
  __typename?: 'FeaturedCaseStudiesFields_title';
  create?: Maybe<FeaturedCaseStudiesFields_Title_Create>;
  delete?: Maybe<FeaturedCaseStudiesFields_Title_Delete>;
  read?: Maybe<FeaturedCaseStudiesFields_Title_Read>;
  update?: Maybe<FeaturedCaseStudiesFields_Title_Update>;
};

export type FeaturedCaseStudiesFields_Title_Create = {
  __typename?: 'FeaturedCaseStudiesFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_Title_Delete = {
  __typename?: 'FeaturedCaseStudiesFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_Title_Read = {
  __typename?: 'FeaturedCaseStudiesFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_Title_Update = {
  __typename?: 'FeaturedCaseStudiesFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_UpdatedAt = {
  __typename?: 'FeaturedCaseStudiesFields_updatedAt';
  create?: Maybe<FeaturedCaseStudiesFields_UpdatedAt_Create>;
  delete?: Maybe<FeaturedCaseStudiesFields_UpdatedAt_Delete>;
  read?: Maybe<FeaturedCaseStudiesFields_UpdatedAt_Read>;
  update?: Maybe<FeaturedCaseStudiesFields_UpdatedAt_Update>;
};

export type FeaturedCaseStudiesFields_UpdatedAt_Create = {
  __typename?: 'FeaturedCaseStudiesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_UpdatedAt_Delete = {
  __typename?: 'FeaturedCaseStudiesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_UpdatedAt_Read = {
  __typename?: 'FeaturedCaseStudiesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_UpdatedAt_Update = {
  __typename?: 'FeaturedCaseStudiesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesReadAccess = {
  __typename?: 'FeaturedCaseStudiesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeaturedCaseStudiesReadDocAccess = {
  __typename?: 'FeaturedCaseStudiesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeaturedCaseStudiesUpdateAccess = {
  __typename?: 'FeaturedCaseStudiesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeaturedCaseStudiesUpdateDocAccess = {
  __typename?: 'FeaturedCaseStudiesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeaturedCaseStudy = {
  __typename?: 'FeaturedCaseStudy';
  caseStudies: Array<CaseStudy>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FeaturedExperience = {
  __typename?: 'FeaturedExperience';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  experiences: Array<Experience>;
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FeaturedExperiencesDocAccessFields = {
  __typename?: 'FeaturedExperiencesDocAccessFields';
  createdAt?: Maybe<FeaturedExperiencesDocAccessFields_CreatedAt>;
  description?: Maybe<FeaturedExperiencesDocAccessFields_Description>;
  experiences?: Maybe<FeaturedExperiencesDocAccessFields_Experiences>;
  subtitle?: Maybe<FeaturedExperiencesDocAccessFields_Subtitle>;
  title?: Maybe<FeaturedExperiencesDocAccessFields_Title>;
  updatedAt?: Maybe<FeaturedExperiencesDocAccessFields_UpdatedAt>;
};

export type FeaturedExperiencesDocAccessFields_CreatedAt = {
  __typename?: 'FeaturedExperiencesDocAccessFields_createdAt';
  create?: Maybe<FeaturedExperiencesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<FeaturedExperiencesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<FeaturedExperiencesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<FeaturedExperiencesDocAccessFields_CreatedAt_Update>;
};

export type FeaturedExperiencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'FeaturedExperiencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'FeaturedExperiencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'FeaturedExperiencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'FeaturedExperiencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Description = {
  __typename?: 'FeaturedExperiencesDocAccessFields_description';
  create?: Maybe<FeaturedExperiencesDocAccessFields_Description_Create>;
  delete?: Maybe<FeaturedExperiencesDocAccessFields_Description_Delete>;
  read?: Maybe<FeaturedExperiencesDocAccessFields_Description_Read>;
  update?: Maybe<FeaturedExperiencesDocAccessFields_Description_Update>;
};

export type FeaturedExperiencesDocAccessFields_Description_Create = {
  __typename?: 'FeaturedExperiencesDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Description_Delete = {
  __typename?: 'FeaturedExperiencesDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Description_Read = {
  __typename?: 'FeaturedExperiencesDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Description_Update = {
  __typename?: 'FeaturedExperiencesDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Experiences = {
  __typename?: 'FeaturedExperiencesDocAccessFields_experiences';
  create?: Maybe<FeaturedExperiencesDocAccessFields_Experiences_Create>;
  delete?: Maybe<FeaturedExperiencesDocAccessFields_Experiences_Delete>;
  read?: Maybe<FeaturedExperiencesDocAccessFields_Experiences_Read>;
  update?: Maybe<FeaturedExperiencesDocAccessFields_Experiences_Update>;
};

export type FeaturedExperiencesDocAccessFields_Experiences_Create = {
  __typename?: 'FeaturedExperiencesDocAccessFields_experiences_Create';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Experiences_Delete = {
  __typename?: 'FeaturedExperiencesDocAccessFields_experiences_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Experiences_Read = {
  __typename?: 'FeaturedExperiencesDocAccessFields_experiences_Read';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Experiences_Update = {
  __typename?: 'FeaturedExperiencesDocAccessFields_experiences_Update';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Subtitle = {
  __typename?: 'FeaturedExperiencesDocAccessFields_subtitle';
  create?: Maybe<FeaturedExperiencesDocAccessFields_Subtitle_Create>;
  delete?: Maybe<FeaturedExperiencesDocAccessFields_Subtitle_Delete>;
  read?: Maybe<FeaturedExperiencesDocAccessFields_Subtitle_Read>;
  update?: Maybe<FeaturedExperiencesDocAccessFields_Subtitle_Update>;
};

export type FeaturedExperiencesDocAccessFields_Subtitle_Create = {
  __typename?: 'FeaturedExperiencesDocAccessFields_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Subtitle_Delete = {
  __typename?: 'FeaturedExperiencesDocAccessFields_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Subtitle_Read = {
  __typename?: 'FeaturedExperiencesDocAccessFields_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Subtitle_Update = {
  __typename?: 'FeaturedExperiencesDocAccessFields_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Title = {
  __typename?: 'FeaturedExperiencesDocAccessFields_title';
  create?: Maybe<FeaturedExperiencesDocAccessFields_Title_Create>;
  delete?: Maybe<FeaturedExperiencesDocAccessFields_Title_Delete>;
  read?: Maybe<FeaturedExperiencesDocAccessFields_Title_Read>;
  update?: Maybe<FeaturedExperiencesDocAccessFields_Title_Update>;
};

export type FeaturedExperiencesDocAccessFields_Title_Create = {
  __typename?: 'FeaturedExperiencesDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Title_Delete = {
  __typename?: 'FeaturedExperiencesDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Title_Read = {
  __typename?: 'FeaturedExperiencesDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Title_Update = {
  __typename?: 'FeaturedExperiencesDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_UpdatedAt = {
  __typename?: 'FeaturedExperiencesDocAccessFields_updatedAt';
  create?: Maybe<FeaturedExperiencesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<FeaturedExperiencesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<FeaturedExperiencesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<FeaturedExperiencesDocAccessFields_UpdatedAt_Update>;
};

export type FeaturedExperiencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'FeaturedExperiencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'FeaturedExperiencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'FeaturedExperiencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'FeaturedExperiencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields = {
  __typename?: 'FeaturedExperiencesFields';
  createdAt?: Maybe<FeaturedExperiencesFields_CreatedAt>;
  description?: Maybe<FeaturedExperiencesFields_Description>;
  experiences?: Maybe<FeaturedExperiencesFields_Experiences>;
  subtitle?: Maybe<FeaturedExperiencesFields_Subtitle>;
  title?: Maybe<FeaturedExperiencesFields_Title>;
  updatedAt?: Maybe<FeaturedExperiencesFields_UpdatedAt>;
};

export type FeaturedExperiencesFields_CreatedAt = {
  __typename?: 'FeaturedExperiencesFields_createdAt';
  create?: Maybe<FeaturedExperiencesFields_CreatedAt_Create>;
  delete?: Maybe<FeaturedExperiencesFields_CreatedAt_Delete>;
  read?: Maybe<FeaturedExperiencesFields_CreatedAt_Read>;
  update?: Maybe<FeaturedExperiencesFields_CreatedAt_Update>;
};

export type FeaturedExperiencesFields_CreatedAt_Create = {
  __typename?: 'FeaturedExperiencesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_CreatedAt_Delete = {
  __typename?: 'FeaturedExperiencesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_CreatedAt_Read = {
  __typename?: 'FeaturedExperiencesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_CreatedAt_Update = {
  __typename?: 'FeaturedExperiencesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Description = {
  __typename?: 'FeaturedExperiencesFields_description';
  create?: Maybe<FeaturedExperiencesFields_Description_Create>;
  delete?: Maybe<FeaturedExperiencesFields_Description_Delete>;
  read?: Maybe<FeaturedExperiencesFields_Description_Read>;
  update?: Maybe<FeaturedExperiencesFields_Description_Update>;
};

export type FeaturedExperiencesFields_Description_Create = {
  __typename?: 'FeaturedExperiencesFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Description_Delete = {
  __typename?: 'FeaturedExperiencesFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Description_Read = {
  __typename?: 'FeaturedExperiencesFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Description_Update = {
  __typename?: 'FeaturedExperiencesFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Experiences = {
  __typename?: 'FeaturedExperiencesFields_experiences';
  create?: Maybe<FeaturedExperiencesFields_Experiences_Create>;
  delete?: Maybe<FeaturedExperiencesFields_Experiences_Delete>;
  read?: Maybe<FeaturedExperiencesFields_Experiences_Read>;
  update?: Maybe<FeaturedExperiencesFields_Experiences_Update>;
};

export type FeaturedExperiencesFields_Experiences_Create = {
  __typename?: 'FeaturedExperiencesFields_experiences_Create';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Experiences_Delete = {
  __typename?: 'FeaturedExperiencesFields_experiences_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Experiences_Read = {
  __typename?: 'FeaturedExperiencesFields_experiences_Read';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Experiences_Update = {
  __typename?: 'FeaturedExperiencesFields_experiences_Update';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Subtitle = {
  __typename?: 'FeaturedExperiencesFields_subtitle';
  create?: Maybe<FeaturedExperiencesFields_Subtitle_Create>;
  delete?: Maybe<FeaturedExperiencesFields_Subtitle_Delete>;
  read?: Maybe<FeaturedExperiencesFields_Subtitle_Read>;
  update?: Maybe<FeaturedExperiencesFields_Subtitle_Update>;
};

export type FeaturedExperiencesFields_Subtitle_Create = {
  __typename?: 'FeaturedExperiencesFields_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Subtitle_Delete = {
  __typename?: 'FeaturedExperiencesFields_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Subtitle_Read = {
  __typename?: 'FeaturedExperiencesFields_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Subtitle_Update = {
  __typename?: 'FeaturedExperiencesFields_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Title = {
  __typename?: 'FeaturedExperiencesFields_title';
  create?: Maybe<FeaturedExperiencesFields_Title_Create>;
  delete?: Maybe<FeaturedExperiencesFields_Title_Delete>;
  read?: Maybe<FeaturedExperiencesFields_Title_Read>;
  update?: Maybe<FeaturedExperiencesFields_Title_Update>;
};

export type FeaturedExperiencesFields_Title_Create = {
  __typename?: 'FeaturedExperiencesFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Title_Delete = {
  __typename?: 'FeaturedExperiencesFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Title_Read = {
  __typename?: 'FeaturedExperiencesFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Title_Update = {
  __typename?: 'FeaturedExperiencesFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_UpdatedAt = {
  __typename?: 'FeaturedExperiencesFields_updatedAt';
  create?: Maybe<FeaturedExperiencesFields_UpdatedAt_Create>;
  delete?: Maybe<FeaturedExperiencesFields_UpdatedAt_Delete>;
  read?: Maybe<FeaturedExperiencesFields_UpdatedAt_Read>;
  update?: Maybe<FeaturedExperiencesFields_UpdatedAt_Update>;
};

export type FeaturedExperiencesFields_UpdatedAt_Create = {
  __typename?: 'FeaturedExperiencesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_UpdatedAt_Delete = {
  __typename?: 'FeaturedExperiencesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_UpdatedAt_Read = {
  __typename?: 'FeaturedExperiencesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_UpdatedAt_Update = {
  __typename?: 'FeaturedExperiencesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesReadAccess = {
  __typename?: 'FeaturedExperiencesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeaturedExperiencesReadDocAccess = {
  __typename?: 'FeaturedExperiencesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeaturedExperiencesUpdateAccess = {
  __typename?: 'FeaturedExperiencesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeaturedExperiencesUpdateDocAccess = {
  __typename?: 'FeaturedExperiencesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Footer = {
  __typename?: 'Footer';
  bottomText: Scalars['String']['output'];
  buttonText: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  title1: Scalars['String']['output'];
  title2: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FooterDocAccessFields = {
  __typename?: 'FooterDocAccessFields';
  bottomText?: Maybe<FooterDocAccessFields_BottomText>;
  buttonText?: Maybe<FooterDocAccessFields_ButtonText>;
  createdAt?: Maybe<FooterDocAccessFields_CreatedAt>;
  description?: Maybe<FooterDocAccessFields_Description>;
  title1?: Maybe<FooterDocAccessFields_Title1>;
  title2?: Maybe<FooterDocAccessFields_Title2>;
  updatedAt?: Maybe<FooterDocAccessFields_UpdatedAt>;
};

export type FooterDocAccessFields_BottomText = {
  __typename?: 'FooterDocAccessFields_bottomText';
  create?: Maybe<FooterDocAccessFields_BottomText_Create>;
  delete?: Maybe<FooterDocAccessFields_BottomText_Delete>;
  read?: Maybe<FooterDocAccessFields_BottomText_Read>;
  update?: Maybe<FooterDocAccessFields_BottomText_Update>;
};

export type FooterDocAccessFields_BottomText_Create = {
  __typename?: 'FooterDocAccessFields_bottomText_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_BottomText_Delete = {
  __typename?: 'FooterDocAccessFields_bottomText_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_BottomText_Read = {
  __typename?: 'FooterDocAccessFields_bottomText_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_BottomText_Update = {
  __typename?: 'FooterDocAccessFields_bottomText_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ButtonText = {
  __typename?: 'FooterDocAccessFields_buttonText';
  create?: Maybe<FooterDocAccessFields_ButtonText_Create>;
  delete?: Maybe<FooterDocAccessFields_ButtonText_Delete>;
  read?: Maybe<FooterDocAccessFields_ButtonText_Read>;
  update?: Maybe<FooterDocAccessFields_ButtonText_Update>;
};

export type FooterDocAccessFields_ButtonText_Create = {
  __typename?: 'FooterDocAccessFields_buttonText_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ButtonText_Delete = {
  __typename?: 'FooterDocAccessFields_buttonText_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ButtonText_Read = {
  __typename?: 'FooterDocAccessFields_buttonText_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ButtonText_Update = {
  __typename?: 'FooterDocAccessFields_buttonText_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_CreatedAt = {
  __typename?: 'FooterDocAccessFields_createdAt';
  create?: Maybe<FooterDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<FooterDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<FooterDocAccessFields_CreatedAt_Read>;
  update?: Maybe<FooterDocAccessFields_CreatedAt_Update>;
};

export type FooterDocAccessFields_CreatedAt_Create = {
  __typename?: 'FooterDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_CreatedAt_Delete = {
  __typename?: 'FooterDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_CreatedAt_Read = {
  __typename?: 'FooterDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_CreatedAt_Update = {
  __typename?: 'FooterDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Description = {
  __typename?: 'FooterDocAccessFields_description';
  create?: Maybe<FooterDocAccessFields_Description_Create>;
  delete?: Maybe<FooterDocAccessFields_Description_Delete>;
  read?: Maybe<FooterDocAccessFields_Description_Read>;
  update?: Maybe<FooterDocAccessFields_Description_Update>;
};

export type FooterDocAccessFields_Description_Create = {
  __typename?: 'FooterDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Description_Delete = {
  __typename?: 'FooterDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Description_Read = {
  __typename?: 'FooterDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Description_Update = {
  __typename?: 'FooterDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Title1 = {
  __typename?: 'FooterDocAccessFields_title1';
  create?: Maybe<FooterDocAccessFields_Title1_Create>;
  delete?: Maybe<FooterDocAccessFields_Title1_Delete>;
  read?: Maybe<FooterDocAccessFields_Title1_Read>;
  update?: Maybe<FooterDocAccessFields_Title1_Update>;
};

export type FooterDocAccessFields_Title1_Create = {
  __typename?: 'FooterDocAccessFields_title1_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Title1_Delete = {
  __typename?: 'FooterDocAccessFields_title1_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Title1_Read = {
  __typename?: 'FooterDocAccessFields_title1_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Title1_Update = {
  __typename?: 'FooterDocAccessFields_title1_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Title2 = {
  __typename?: 'FooterDocAccessFields_title2';
  create?: Maybe<FooterDocAccessFields_Title2_Create>;
  delete?: Maybe<FooterDocAccessFields_Title2_Delete>;
  read?: Maybe<FooterDocAccessFields_Title2_Read>;
  update?: Maybe<FooterDocAccessFields_Title2_Update>;
};

export type FooterDocAccessFields_Title2_Create = {
  __typename?: 'FooterDocAccessFields_title2_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Title2_Delete = {
  __typename?: 'FooterDocAccessFields_title2_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Title2_Read = {
  __typename?: 'FooterDocAccessFields_title2_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Title2_Update = {
  __typename?: 'FooterDocAccessFields_title2_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_UpdatedAt = {
  __typename?: 'FooterDocAccessFields_updatedAt';
  create?: Maybe<FooterDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<FooterDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<FooterDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<FooterDocAccessFields_UpdatedAt_Update>;
};

export type FooterDocAccessFields_UpdatedAt_Create = {
  __typename?: 'FooterDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'FooterDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_UpdatedAt_Read = {
  __typename?: 'FooterDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_UpdatedAt_Update = {
  __typename?: 'FooterDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields = {
  __typename?: 'FooterFields';
  bottomText?: Maybe<FooterFields_BottomText>;
  buttonText?: Maybe<FooterFields_ButtonText>;
  createdAt?: Maybe<FooterFields_CreatedAt>;
  description?: Maybe<FooterFields_Description>;
  title1?: Maybe<FooterFields_Title1>;
  title2?: Maybe<FooterFields_Title2>;
  updatedAt?: Maybe<FooterFields_UpdatedAt>;
};

export type FooterFields_BottomText = {
  __typename?: 'FooterFields_bottomText';
  create?: Maybe<FooterFields_BottomText_Create>;
  delete?: Maybe<FooterFields_BottomText_Delete>;
  read?: Maybe<FooterFields_BottomText_Read>;
  update?: Maybe<FooterFields_BottomText_Update>;
};

export type FooterFields_BottomText_Create = {
  __typename?: 'FooterFields_bottomText_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_BottomText_Delete = {
  __typename?: 'FooterFields_bottomText_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_BottomText_Read = {
  __typename?: 'FooterFields_bottomText_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_BottomText_Update = {
  __typename?: 'FooterFields_bottomText_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ButtonText = {
  __typename?: 'FooterFields_buttonText';
  create?: Maybe<FooterFields_ButtonText_Create>;
  delete?: Maybe<FooterFields_ButtonText_Delete>;
  read?: Maybe<FooterFields_ButtonText_Read>;
  update?: Maybe<FooterFields_ButtonText_Update>;
};

export type FooterFields_ButtonText_Create = {
  __typename?: 'FooterFields_buttonText_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ButtonText_Delete = {
  __typename?: 'FooterFields_buttonText_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ButtonText_Read = {
  __typename?: 'FooterFields_buttonText_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ButtonText_Update = {
  __typename?: 'FooterFields_buttonText_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_CreatedAt = {
  __typename?: 'FooterFields_createdAt';
  create?: Maybe<FooterFields_CreatedAt_Create>;
  delete?: Maybe<FooterFields_CreatedAt_Delete>;
  read?: Maybe<FooterFields_CreatedAt_Read>;
  update?: Maybe<FooterFields_CreatedAt_Update>;
};

export type FooterFields_CreatedAt_Create = {
  __typename?: 'FooterFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_CreatedAt_Delete = {
  __typename?: 'FooterFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_CreatedAt_Read = {
  __typename?: 'FooterFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_CreatedAt_Update = {
  __typename?: 'FooterFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Description = {
  __typename?: 'FooterFields_description';
  create?: Maybe<FooterFields_Description_Create>;
  delete?: Maybe<FooterFields_Description_Delete>;
  read?: Maybe<FooterFields_Description_Read>;
  update?: Maybe<FooterFields_Description_Update>;
};

export type FooterFields_Description_Create = {
  __typename?: 'FooterFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Description_Delete = {
  __typename?: 'FooterFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Description_Read = {
  __typename?: 'FooterFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Description_Update = {
  __typename?: 'FooterFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Title1 = {
  __typename?: 'FooterFields_title1';
  create?: Maybe<FooterFields_Title1_Create>;
  delete?: Maybe<FooterFields_Title1_Delete>;
  read?: Maybe<FooterFields_Title1_Read>;
  update?: Maybe<FooterFields_Title1_Update>;
};

export type FooterFields_Title1_Create = {
  __typename?: 'FooterFields_title1_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Title1_Delete = {
  __typename?: 'FooterFields_title1_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Title1_Read = {
  __typename?: 'FooterFields_title1_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Title1_Update = {
  __typename?: 'FooterFields_title1_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Title2 = {
  __typename?: 'FooterFields_title2';
  create?: Maybe<FooterFields_Title2_Create>;
  delete?: Maybe<FooterFields_Title2_Delete>;
  read?: Maybe<FooterFields_Title2_Read>;
  update?: Maybe<FooterFields_Title2_Update>;
};

export type FooterFields_Title2_Create = {
  __typename?: 'FooterFields_title2_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Title2_Delete = {
  __typename?: 'FooterFields_title2_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Title2_Read = {
  __typename?: 'FooterFields_title2_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Title2_Update = {
  __typename?: 'FooterFields_title2_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_UpdatedAt = {
  __typename?: 'FooterFields_updatedAt';
  create?: Maybe<FooterFields_UpdatedAt_Create>;
  delete?: Maybe<FooterFields_UpdatedAt_Delete>;
  read?: Maybe<FooterFields_UpdatedAt_Read>;
  update?: Maybe<FooterFields_UpdatedAt_Update>;
};

export type FooterFields_UpdatedAt_Create = {
  __typename?: 'FooterFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_UpdatedAt_Delete = {
  __typename?: 'FooterFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_UpdatedAt_Read = {
  __typename?: 'FooterFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_UpdatedAt_Update = {
  __typename?: 'FooterFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterReadAccess = {
  __typename?: 'FooterReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FooterReadDocAccess = {
  __typename?: 'FooterReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FooterUpdateAccess = {
  __typename?: 'FooterUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FooterUpdateDocAccess = {
  __typename?: 'FooterUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Hero = {
  __typename?: 'Hero';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['JSON']['output'];
  meta?: Maybe<Hero_Meta>;
  name: Scalars['String']['output'];
  taglines: Array<Hero_Taglines>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type HeroDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type HeroDocAccessFields = {
  __typename?: 'HeroDocAccessFields';
  createdAt?: Maybe<HeroDocAccessFields_CreatedAt>;
  description?: Maybe<HeroDocAccessFields_Description>;
  meta?: Maybe<HeroDocAccessFields_Meta>;
  name?: Maybe<HeroDocAccessFields_Name>;
  taglines?: Maybe<HeroDocAccessFields_Taglines>;
  title?: Maybe<HeroDocAccessFields_Title>;
  updatedAt?: Maybe<HeroDocAccessFields_UpdatedAt>;
};

export type HeroDocAccessFields_CreatedAt = {
  __typename?: 'HeroDocAccessFields_createdAt';
  create?: Maybe<HeroDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<HeroDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<HeroDocAccessFields_CreatedAt_Read>;
  update?: Maybe<HeroDocAccessFields_CreatedAt_Update>;
};

export type HeroDocAccessFields_CreatedAt_Create = {
  __typename?: 'HeroDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_CreatedAt_Delete = {
  __typename?: 'HeroDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_CreatedAt_Read = {
  __typename?: 'HeroDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_CreatedAt_Update = {
  __typename?: 'HeroDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Description = {
  __typename?: 'HeroDocAccessFields_description';
  create?: Maybe<HeroDocAccessFields_Description_Create>;
  delete?: Maybe<HeroDocAccessFields_Description_Delete>;
  read?: Maybe<HeroDocAccessFields_Description_Read>;
  update?: Maybe<HeroDocAccessFields_Description_Update>;
};

export type HeroDocAccessFields_Description_Create = {
  __typename?: 'HeroDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Description_Delete = {
  __typename?: 'HeroDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Description_Read = {
  __typename?: 'HeroDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Description_Update = {
  __typename?: 'HeroDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta = {
  __typename?: 'HeroDocAccessFields_meta';
  create?: Maybe<HeroDocAccessFields_Meta_Create>;
  delete?: Maybe<HeroDocAccessFields_Meta_Delete>;
  fields?: Maybe<HeroDocAccessFields_Meta_Fields>;
  read?: Maybe<HeroDocAccessFields_Meta_Read>;
  update?: Maybe<HeroDocAccessFields_Meta_Update>;
};

export type HeroDocAccessFields_Meta_Create = {
  __typename?: 'HeroDocAccessFields_meta_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Delete = {
  __typename?: 'HeroDocAccessFields_meta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Fields = {
  __typename?: 'HeroDocAccessFields_meta_Fields';
  description?: Maybe<HeroDocAccessFields_Meta_Description>;
  image?: Maybe<HeroDocAccessFields_Meta_Image>;
  title?: Maybe<HeroDocAccessFields_Meta_Title>;
};

export type HeroDocAccessFields_Meta_Read = {
  __typename?: 'HeroDocAccessFields_meta_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Update = {
  __typename?: 'HeroDocAccessFields_meta_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Description = {
  __typename?: 'HeroDocAccessFields_meta_description';
  create?: Maybe<HeroDocAccessFields_Meta_Description_Create>;
  delete?: Maybe<HeroDocAccessFields_Meta_Description_Delete>;
  read?: Maybe<HeroDocAccessFields_Meta_Description_Read>;
  update?: Maybe<HeroDocAccessFields_Meta_Description_Update>;
};

export type HeroDocAccessFields_Meta_Description_Create = {
  __typename?: 'HeroDocAccessFields_meta_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Description_Delete = {
  __typename?: 'HeroDocAccessFields_meta_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Description_Read = {
  __typename?: 'HeroDocAccessFields_meta_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Description_Update = {
  __typename?: 'HeroDocAccessFields_meta_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Image = {
  __typename?: 'HeroDocAccessFields_meta_image';
  create?: Maybe<HeroDocAccessFields_Meta_Image_Create>;
  delete?: Maybe<HeroDocAccessFields_Meta_Image_Delete>;
  read?: Maybe<HeroDocAccessFields_Meta_Image_Read>;
  update?: Maybe<HeroDocAccessFields_Meta_Image_Update>;
};

export type HeroDocAccessFields_Meta_Image_Create = {
  __typename?: 'HeroDocAccessFields_meta_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Image_Delete = {
  __typename?: 'HeroDocAccessFields_meta_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Image_Read = {
  __typename?: 'HeroDocAccessFields_meta_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Image_Update = {
  __typename?: 'HeroDocAccessFields_meta_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Title = {
  __typename?: 'HeroDocAccessFields_meta_title';
  create?: Maybe<HeroDocAccessFields_Meta_Title_Create>;
  delete?: Maybe<HeroDocAccessFields_Meta_Title_Delete>;
  read?: Maybe<HeroDocAccessFields_Meta_Title_Read>;
  update?: Maybe<HeroDocAccessFields_Meta_Title_Update>;
};

export type HeroDocAccessFields_Meta_Title_Create = {
  __typename?: 'HeroDocAccessFields_meta_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Title_Delete = {
  __typename?: 'HeroDocAccessFields_meta_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Title_Read = {
  __typename?: 'HeroDocAccessFields_meta_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Title_Update = {
  __typename?: 'HeroDocAccessFields_meta_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Name = {
  __typename?: 'HeroDocAccessFields_name';
  create?: Maybe<HeroDocAccessFields_Name_Create>;
  delete?: Maybe<HeroDocAccessFields_Name_Delete>;
  read?: Maybe<HeroDocAccessFields_Name_Read>;
  update?: Maybe<HeroDocAccessFields_Name_Update>;
};

export type HeroDocAccessFields_Name_Create = {
  __typename?: 'HeroDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Name_Delete = {
  __typename?: 'HeroDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Name_Read = {
  __typename?: 'HeroDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Name_Update = {
  __typename?: 'HeroDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Taglines = {
  __typename?: 'HeroDocAccessFields_taglines';
  create?: Maybe<HeroDocAccessFields_Taglines_Create>;
  delete?: Maybe<HeroDocAccessFields_Taglines_Delete>;
  fields?: Maybe<HeroDocAccessFields_Taglines_Fields>;
  read?: Maybe<HeroDocAccessFields_Taglines_Read>;
  update?: Maybe<HeroDocAccessFields_Taglines_Update>;
};

export type HeroDocAccessFields_Taglines_Create = {
  __typename?: 'HeroDocAccessFields_taglines_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Taglines_Delete = {
  __typename?: 'HeroDocAccessFields_taglines_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Taglines_Fields = {
  __typename?: 'HeroDocAccessFields_taglines_Fields';
  id?: Maybe<HeroDocAccessFields_Taglines_Id>;
  text?: Maybe<HeroDocAccessFields_Taglines_Text>;
};

export type HeroDocAccessFields_Taglines_Read = {
  __typename?: 'HeroDocAccessFields_taglines_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Taglines_Update = {
  __typename?: 'HeroDocAccessFields_taglines_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Taglines_Id = {
  __typename?: 'HeroDocAccessFields_taglines_id';
  create?: Maybe<HeroDocAccessFields_Taglines_Id_Create>;
  delete?: Maybe<HeroDocAccessFields_Taglines_Id_Delete>;
  read?: Maybe<HeroDocAccessFields_Taglines_Id_Read>;
  update?: Maybe<HeroDocAccessFields_Taglines_Id_Update>;
};

export type HeroDocAccessFields_Taglines_Id_Create = {
  __typename?: 'HeroDocAccessFields_taglines_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Taglines_Id_Delete = {
  __typename?: 'HeroDocAccessFields_taglines_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Taglines_Id_Read = {
  __typename?: 'HeroDocAccessFields_taglines_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Taglines_Id_Update = {
  __typename?: 'HeroDocAccessFields_taglines_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Taglines_Text = {
  __typename?: 'HeroDocAccessFields_taglines_text';
  create?: Maybe<HeroDocAccessFields_Taglines_Text_Create>;
  delete?: Maybe<HeroDocAccessFields_Taglines_Text_Delete>;
  read?: Maybe<HeroDocAccessFields_Taglines_Text_Read>;
  update?: Maybe<HeroDocAccessFields_Taglines_Text_Update>;
};

export type HeroDocAccessFields_Taglines_Text_Create = {
  __typename?: 'HeroDocAccessFields_taglines_text_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Taglines_Text_Delete = {
  __typename?: 'HeroDocAccessFields_taglines_text_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Taglines_Text_Read = {
  __typename?: 'HeroDocAccessFields_taglines_text_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Taglines_Text_Update = {
  __typename?: 'HeroDocAccessFields_taglines_text_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Title = {
  __typename?: 'HeroDocAccessFields_title';
  create?: Maybe<HeroDocAccessFields_Title_Create>;
  delete?: Maybe<HeroDocAccessFields_Title_Delete>;
  read?: Maybe<HeroDocAccessFields_Title_Read>;
  update?: Maybe<HeroDocAccessFields_Title_Update>;
};

export type HeroDocAccessFields_Title_Create = {
  __typename?: 'HeroDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Title_Delete = {
  __typename?: 'HeroDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Title_Read = {
  __typename?: 'HeroDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Title_Update = {
  __typename?: 'HeroDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_UpdatedAt = {
  __typename?: 'HeroDocAccessFields_updatedAt';
  create?: Maybe<HeroDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<HeroDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<HeroDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<HeroDocAccessFields_UpdatedAt_Update>;
};

export type HeroDocAccessFields_UpdatedAt_Create = {
  __typename?: 'HeroDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'HeroDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_UpdatedAt_Read = {
  __typename?: 'HeroDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_UpdatedAt_Update = {
  __typename?: 'HeroDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields = {
  __typename?: 'HeroFields';
  createdAt?: Maybe<HeroFields_CreatedAt>;
  description?: Maybe<HeroFields_Description>;
  meta?: Maybe<HeroFields_Meta>;
  name?: Maybe<HeroFields_Name>;
  taglines?: Maybe<HeroFields_Taglines>;
  title?: Maybe<HeroFields_Title>;
  updatedAt?: Maybe<HeroFields_UpdatedAt>;
};

export type HeroFields_CreatedAt = {
  __typename?: 'HeroFields_createdAt';
  create?: Maybe<HeroFields_CreatedAt_Create>;
  delete?: Maybe<HeroFields_CreatedAt_Delete>;
  read?: Maybe<HeroFields_CreatedAt_Read>;
  update?: Maybe<HeroFields_CreatedAt_Update>;
};

export type HeroFields_CreatedAt_Create = {
  __typename?: 'HeroFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_CreatedAt_Delete = {
  __typename?: 'HeroFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_CreatedAt_Read = {
  __typename?: 'HeroFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_CreatedAt_Update = {
  __typename?: 'HeroFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Description = {
  __typename?: 'HeroFields_description';
  create?: Maybe<HeroFields_Description_Create>;
  delete?: Maybe<HeroFields_Description_Delete>;
  read?: Maybe<HeroFields_Description_Read>;
  update?: Maybe<HeroFields_Description_Update>;
};

export type HeroFields_Description_Create = {
  __typename?: 'HeroFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Description_Delete = {
  __typename?: 'HeroFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Description_Read = {
  __typename?: 'HeroFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Description_Update = {
  __typename?: 'HeroFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta = {
  __typename?: 'HeroFields_meta';
  create?: Maybe<HeroFields_Meta_Create>;
  delete?: Maybe<HeroFields_Meta_Delete>;
  fields?: Maybe<HeroFields_Meta_Fields>;
  read?: Maybe<HeroFields_Meta_Read>;
  update?: Maybe<HeroFields_Meta_Update>;
};

export type HeroFields_Meta_Create = {
  __typename?: 'HeroFields_meta_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Delete = {
  __typename?: 'HeroFields_meta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Fields = {
  __typename?: 'HeroFields_meta_Fields';
  description?: Maybe<HeroFields_Meta_Description>;
  image?: Maybe<HeroFields_Meta_Image>;
  title?: Maybe<HeroFields_Meta_Title>;
};

export type HeroFields_Meta_Read = {
  __typename?: 'HeroFields_meta_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Update = {
  __typename?: 'HeroFields_meta_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Description = {
  __typename?: 'HeroFields_meta_description';
  create?: Maybe<HeroFields_Meta_Description_Create>;
  delete?: Maybe<HeroFields_Meta_Description_Delete>;
  read?: Maybe<HeroFields_Meta_Description_Read>;
  update?: Maybe<HeroFields_Meta_Description_Update>;
};

export type HeroFields_Meta_Description_Create = {
  __typename?: 'HeroFields_meta_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Description_Delete = {
  __typename?: 'HeroFields_meta_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Description_Read = {
  __typename?: 'HeroFields_meta_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Description_Update = {
  __typename?: 'HeroFields_meta_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Image = {
  __typename?: 'HeroFields_meta_image';
  create?: Maybe<HeroFields_Meta_Image_Create>;
  delete?: Maybe<HeroFields_Meta_Image_Delete>;
  read?: Maybe<HeroFields_Meta_Image_Read>;
  update?: Maybe<HeroFields_Meta_Image_Update>;
};

export type HeroFields_Meta_Image_Create = {
  __typename?: 'HeroFields_meta_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Image_Delete = {
  __typename?: 'HeroFields_meta_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Image_Read = {
  __typename?: 'HeroFields_meta_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Image_Update = {
  __typename?: 'HeroFields_meta_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Title = {
  __typename?: 'HeroFields_meta_title';
  create?: Maybe<HeroFields_Meta_Title_Create>;
  delete?: Maybe<HeroFields_Meta_Title_Delete>;
  read?: Maybe<HeroFields_Meta_Title_Read>;
  update?: Maybe<HeroFields_Meta_Title_Update>;
};

export type HeroFields_Meta_Title_Create = {
  __typename?: 'HeroFields_meta_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Title_Delete = {
  __typename?: 'HeroFields_meta_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Title_Read = {
  __typename?: 'HeroFields_meta_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Title_Update = {
  __typename?: 'HeroFields_meta_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Name = {
  __typename?: 'HeroFields_name';
  create?: Maybe<HeroFields_Name_Create>;
  delete?: Maybe<HeroFields_Name_Delete>;
  read?: Maybe<HeroFields_Name_Read>;
  update?: Maybe<HeroFields_Name_Update>;
};

export type HeroFields_Name_Create = {
  __typename?: 'HeroFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Name_Delete = {
  __typename?: 'HeroFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Name_Read = {
  __typename?: 'HeroFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Name_Update = {
  __typename?: 'HeroFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Taglines = {
  __typename?: 'HeroFields_taglines';
  create?: Maybe<HeroFields_Taglines_Create>;
  delete?: Maybe<HeroFields_Taglines_Delete>;
  fields?: Maybe<HeroFields_Taglines_Fields>;
  read?: Maybe<HeroFields_Taglines_Read>;
  update?: Maybe<HeroFields_Taglines_Update>;
};

export type HeroFields_Taglines_Create = {
  __typename?: 'HeroFields_taglines_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Taglines_Delete = {
  __typename?: 'HeroFields_taglines_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Taglines_Fields = {
  __typename?: 'HeroFields_taglines_Fields';
  id?: Maybe<HeroFields_Taglines_Id>;
  text?: Maybe<HeroFields_Taglines_Text>;
};

export type HeroFields_Taglines_Read = {
  __typename?: 'HeroFields_taglines_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Taglines_Update = {
  __typename?: 'HeroFields_taglines_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Taglines_Id = {
  __typename?: 'HeroFields_taglines_id';
  create?: Maybe<HeroFields_Taglines_Id_Create>;
  delete?: Maybe<HeroFields_Taglines_Id_Delete>;
  read?: Maybe<HeroFields_Taglines_Id_Read>;
  update?: Maybe<HeroFields_Taglines_Id_Update>;
};

export type HeroFields_Taglines_Id_Create = {
  __typename?: 'HeroFields_taglines_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Taglines_Id_Delete = {
  __typename?: 'HeroFields_taglines_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Taglines_Id_Read = {
  __typename?: 'HeroFields_taglines_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Taglines_Id_Update = {
  __typename?: 'HeroFields_taglines_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Taglines_Text = {
  __typename?: 'HeroFields_taglines_text';
  create?: Maybe<HeroFields_Taglines_Text_Create>;
  delete?: Maybe<HeroFields_Taglines_Text_Delete>;
  read?: Maybe<HeroFields_Taglines_Text_Read>;
  update?: Maybe<HeroFields_Taglines_Text_Update>;
};

export type HeroFields_Taglines_Text_Create = {
  __typename?: 'HeroFields_taglines_text_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Taglines_Text_Delete = {
  __typename?: 'HeroFields_taglines_text_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Taglines_Text_Read = {
  __typename?: 'HeroFields_taglines_text_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Taglines_Text_Update = {
  __typename?: 'HeroFields_taglines_text_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Title = {
  __typename?: 'HeroFields_title';
  create?: Maybe<HeroFields_Title_Create>;
  delete?: Maybe<HeroFields_Title_Delete>;
  read?: Maybe<HeroFields_Title_Read>;
  update?: Maybe<HeroFields_Title_Update>;
};

export type HeroFields_Title_Create = {
  __typename?: 'HeroFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Title_Delete = {
  __typename?: 'HeroFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Title_Read = {
  __typename?: 'HeroFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Title_Update = {
  __typename?: 'HeroFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_UpdatedAt = {
  __typename?: 'HeroFields_updatedAt';
  create?: Maybe<HeroFields_UpdatedAt_Create>;
  delete?: Maybe<HeroFields_UpdatedAt_Delete>;
  read?: Maybe<HeroFields_UpdatedAt_Read>;
  update?: Maybe<HeroFields_UpdatedAt_Update>;
};

export type HeroFields_UpdatedAt_Create = {
  __typename?: 'HeroFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_UpdatedAt_Delete = {
  __typename?: 'HeroFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_UpdatedAt_Read = {
  __typename?: 'HeroFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_UpdatedAt_Update = {
  __typename?: 'HeroFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroReadAccess = {
  __typename?: 'HeroReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeroReadDocAccess = {
  __typename?: 'HeroReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeroUpdateAccess = {
  __typename?: 'HeroUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeroUpdateDocAccess = {
  __typename?: 'HeroUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Hero_Meta = {
  __typename?: 'Hero_Meta';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Hero_Taglines = {
  __typename?: 'Hero_Taglines';
  id?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type Journal = {
  __typename?: 'Journal';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  meta?: Maybe<Journal_Meta>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type JournalDocAccessFields = {
  __typename?: 'JournalDocAccessFields';
  createdAt?: Maybe<JournalDocAccessFields_CreatedAt>;
  description?: Maybe<JournalDocAccessFields_Description>;
  meta?: Maybe<JournalDocAccessFields_Meta>;
  subtitle?: Maybe<JournalDocAccessFields_Subtitle>;
  title?: Maybe<JournalDocAccessFields_Title>;
  updatedAt?: Maybe<JournalDocAccessFields_UpdatedAt>;
};

export type JournalDocAccessFields_CreatedAt = {
  __typename?: 'JournalDocAccessFields_createdAt';
  create?: Maybe<JournalDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<JournalDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<JournalDocAccessFields_CreatedAt_Read>;
  update?: Maybe<JournalDocAccessFields_CreatedAt_Update>;
};

export type JournalDocAccessFields_CreatedAt_Create = {
  __typename?: 'JournalDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_CreatedAt_Delete = {
  __typename?: 'JournalDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_CreatedAt_Read = {
  __typename?: 'JournalDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_CreatedAt_Update = {
  __typename?: 'JournalDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Description = {
  __typename?: 'JournalDocAccessFields_description';
  create?: Maybe<JournalDocAccessFields_Description_Create>;
  delete?: Maybe<JournalDocAccessFields_Description_Delete>;
  read?: Maybe<JournalDocAccessFields_Description_Read>;
  update?: Maybe<JournalDocAccessFields_Description_Update>;
};

export type JournalDocAccessFields_Description_Create = {
  __typename?: 'JournalDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Description_Delete = {
  __typename?: 'JournalDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Description_Read = {
  __typename?: 'JournalDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Description_Update = {
  __typename?: 'JournalDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta = {
  __typename?: 'JournalDocAccessFields_meta';
  create?: Maybe<JournalDocAccessFields_Meta_Create>;
  delete?: Maybe<JournalDocAccessFields_Meta_Delete>;
  fields?: Maybe<JournalDocAccessFields_Meta_Fields>;
  read?: Maybe<JournalDocAccessFields_Meta_Read>;
  update?: Maybe<JournalDocAccessFields_Meta_Update>;
};

export type JournalDocAccessFields_Meta_Create = {
  __typename?: 'JournalDocAccessFields_meta_Create';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Delete = {
  __typename?: 'JournalDocAccessFields_meta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Fields = {
  __typename?: 'JournalDocAccessFields_meta_Fields';
  description?: Maybe<JournalDocAccessFields_Meta_Description>;
  image?: Maybe<JournalDocAccessFields_Meta_Image>;
  title?: Maybe<JournalDocAccessFields_Meta_Title>;
};

export type JournalDocAccessFields_Meta_Read = {
  __typename?: 'JournalDocAccessFields_meta_Read';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Update = {
  __typename?: 'JournalDocAccessFields_meta_Update';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Description = {
  __typename?: 'JournalDocAccessFields_meta_description';
  create?: Maybe<JournalDocAccessFields_Meta_Description_Create>;
  delete?: Maybe<JournalDocAccessFields_Meta_Description_Delete>;
  read?: Maybe<JournalDocAccessFields_Meta_Description_Read>;
  update?: Maybe<JournalDocAccessFields_Meta_Description_Update>;
};

export type JournalDocAccessFields_Meta_Description_Create = {
  __typename?: 'JournalDocAccessFields_meta_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Description_Delete = {
  __typename?: 'JournalDocAccessFields_meta_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Description_Read = {
  __typename?: 'JournalDocAccessFields_meta_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Description_Update = {
  __typename?: 'JournalDocAccessFields_meta_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Image = {
  __typename?: 'JournalDocAccessFields_meta_image';
  create?: Maybe<JournalDocAccessFields_Meta_Image_Create>;
  delete?: Maybe<JournalDocAccessFields_Meta_Image_Delete>;
  read?: Maybe<JournalDocAccessFields_Meta_Image_Read>;
  update?: Maybe<JournalDocAccessFields_Meta_Image_Update>;
};

export type JournalDocAccessFields_Meta_Image_Create = {
  __typename?: 'JournalDocAccessFields_meta_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Image_Delete = {
  __typename?: 'JournalDocAccessFields_meta_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Image_Read = {
  __typename?: 'JournalDocAccessFields_meta_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Image_Update = {
  __typename?: 'JournalDocAccessFields_meta_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Title = {
  __typename?: 'JournalDocAccessFields_meta_title';
  create?: Maybe<JournalDocAccessFields_Meta_Title_Create>;
  delete?: Maybe<JournalDocAccessFields_Meta_Title_Delete>;
  read?: Maybe<JournalDocAccessFields_Meta_Title_Read>;
  update?: Maybe<JournalDocAccessFields_Meta_Title_Update>;
};

export type JournalDocAccessFields_Meta_Title_Create = {
  __typename?: 'JournalDocAccessFields_meta_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Title_Delete = {
  __typename?: 'JournalDocAccessFields_meta_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Title_Read = {
  __typename?: 'JournalDocAccessFields_meta_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Title_Update = {
  __typename?: 'JournalDocAccessFields_meta_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Subtitle = {
  __typename?: 'JournalDocAccessFields_subtitle';
  create?: Maybe<JournalDocAccessFields_Subtitle_Create>;
  delete?: Maybe<JournalDocAccessFields_Subtitle_Delete>;
  read?: Maybe<JournalDocAccessFields_Subtitle_Read>;
  update?: Maybe<JournalDocAccessFields_Subtitle_Update>;
};

export type JournalDocAccessFields_Subtitle_Create = {
  __typename?: 'JournalDocAccessFields_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Subtitle_Delete = {
  __typename?: 'JournalDocAccessFields_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Subtitle_Read = {
  __typename?: 'JournalDocAccessFields_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Subtitle_Update = {
  __typename?: 'JournalDocAccessFields_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Title = {
  __typename?: 'JournalDocAccessFields_title';
  create?: Maybe<JournalDocAccessFields_Title_Create>;
  delete?: Maybe<JournalDocAccessFields_Title_Delete>;
  read?: Maybe<JournalDocAccessFields_Title_Read>;
  update?: Maybe<JournalDocAccessFields_Title_Update>;
};

export type JournalDocAccessFields_Title_Create = {
  __typename?: 'JournalDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Title_Delete = {
  __typename?: 'JournalDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Title_Read = {
  __typename?: 'JournalDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Title_Update = {
  __typename?: 'JournalDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_UpdatedAt = {
  __typename?: 'JournalDocAccessFields_updatedAt';
  create?: Maybe<JournalDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<JournalDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<JournalDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<JournalDocAccessFields_UpdatedAt_Update>;
};

export type JournalDocAccessFields_UpdatedAt_Create = {
  __typename?: 'JournalDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'JournalDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_UpdatedAt_Read = {
  __typename?: 'JournalDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_UpdatedAt_Update = {
  __typename?: 'JournalDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields = {
  __typename?: 'JournalFields';
  createdAt?: Maybe<JournalFields_CreatedAt>;
  description?: Maybe<JournalFields_Description>;
  meta?: Maybe<JournalFields_Meta>;
  subtitle?: Maybe<JournalFields_Subtitle>;
  title?: Maybe<JournalFields_Title>;
  updatedAt?: Maybe<JournalFields_UpdatedAt>;
};

export type JournalFields_CreatedAt = {
  __typename?: 'JournalFields_createdAt';
  create?: Maybe<JournalFields_CreatedAt_Create>;
  delete?: Maybe<JournalFields_CreatedAt_Delete>;
  read?: Maybe<JournalFields_CreatedAt_Read>;
  update?: Maybe<JournalFields_CreatedAt_Update>;
};

export type JournalFields_CreatedAt_Create = {
  __typename?: 'JournalFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_CreatedAt_Delete = {
  __typename?: 'JournalFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_CreatedAt_Read = {
  __typename?: 'JournalFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_CreatedAt_Update = {
  __typename?: 'JournalFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Description = {
  __typename?: 'JournalFields_description';
  create?: Maybe<JournalFields_Description_Create>;
  delete?: Maybe<JournalFields_Description_Delete>;
  read?: Maybe<JournalFields_Description_Read>;
  update?: Maybe<JournalFields_Description_Update>;
};

export type JournalFields_Description_Create = {
  __typename?: 'JournalFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Description_Delete = {
  __typename?: 'JournalFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Description_Read = {
  __typename?: 'JournalFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Description_Update = {
  __typename?: 'JournalFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta = {
  __typename?: 'JournalFields_meta';
  create?: Maybe<JournalFields_Meta_Create>;
  delete?: Maybe<JournalFields_Meta_Delete>;
  fields?: Maybe<JournalFields_Meta_Fields>;
  read?: Maybe<JournalFields_Meta_Read>;
  update?: Maybe<JournalFields_Meta_Update>;
};

export type JournalFields_Meta_Create = {
  __typename?: 'JournalFields_meta_Create';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Delete = {
  __typename?: 'JournalFields_meta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Fields = {
  __typename?: 'JournalFields_meta_Fields';
  description?: Maybe<JournalFields_Meta_Description>;
  image?: Maybe<JournalFields_Meta_Image>;
  title?: Maybe<JournalFields_Meta_Title>;
};

export type JournalFields_Meta_Read = {
  __typename?: 'JournalFields_meta_Read';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Update = {
  __typename?: 'JournalFields_meta_Update';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Description = {
  __typename?: 'JournalFields_meta_description';
  create?: Maybe<JournalFields_Meta_Description_Create>;
  delete?: Maybe<JournalFields_Meta_Description_Delete>;
  read?: Maybe<JournalFields_Meta_Description_Read>;
  update?: Maybe<JournalFields_Meta_Description_Update>;
};

export type JournalFields_Meta_Description_Create = {
  __typename?: 'JournalFields_meta_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Description_Delete = {
  __typename?: 'JournalFields_meta_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Description_Read = {
  __typename?: 'JournalFields_meta_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Description_Update = {
  __typename?: 'JournalFields_meta_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Image = {
  __typename?: 'JournalFields_meta_image';
  create?: Maybe<JournalFields_Meta_Image_Create>;
  delete?: Maybe<JournalFields_Meta_Image_Delete>;
  read?: Maybe<JournalFields_Meta_Image_Read>;
  update?: Maybe<JournalFields_Meta_Image_Update>;
};

export type JournalFields_Meta_Image_Create = {
  __typename?: 'JournalFields_meta_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Image_Delete = {
  __typename?: 'JournalFields_meta_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Image_Read = {
  __typename?: 'JournalFields_meta_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Image_Update = {
  __typename?: 'JournalFields_meta_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Title = {
  __typename?: 'JournalFields_meta_title';
  create?: Maybe<JournalFields_Meta_Title_Create>;
  delete?: Maybe<JournalFields_Meta_Title_Delete>;
  read?: Maybe<JournalFields_Meta_Title_Read>;
  update?: Maybe<JournalFields_Meta_Title_Update>;
};

export type JournalFields_Meta_Title_Create = {
  __typename?: 'JournalFields_meta_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Title_Delete = {
  __typename?: 'JournalFields_meta_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Title_Read = {
  __typename?: 'JournalFields_meta_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Title_Update = {
  __typename?: 'JournalFields_meta_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Subtitle = {
  __typename?: 'JournalFields_subtitle';
  create?: Maybe<JournalFields_Subtitle_Create>;
  delete?: Maybe<JournalFields_Subtitle_Delete>;
  read?: Maybe<JournalFields_Subtitle_Read>;
  update?: Maybe<JournalFields_Subtitle_Update>;
};

export type JournalFields_Subtitle_Create = {
  __typename?: 'JournalFields_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Subtitle_Delete = {
  __typename?: 'JournalFields_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Subtitle_Read = {
  __typename?: 'JournalFields_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Subtitle_Update = {
  __typename?: 'JournalFields_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Title = {
  __typename?: 'JournalFields_title';
  create?: Maybe<JournalFields_Title_Create>;
  delete?: Maybe<JournalFields_Title_Delete>;
  read?: Maybe<JournalFields_Title_Read>;
  update?: Maybe<JournalFields_Title_Update>;
};

export type JournalFields_Title_Create = {
  __typename?: 'JournalFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Title_Delete = {
  __typename?: 'JournalFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Title_Read = {
  __typename?: 'JournalFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_Title_Update = {
  __typename?: 'JournalFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_UpdatedAt = {
  __typename?: 'JournalFields_updatedAt';
  create?: Maybe<JournalFields_UpdatedAt_Create>;
  delete?: Maybe<JournalFields_UpdatedAt_Delete>;
  read?: Maybe<JournalFields_UpdatedAt_Read>;
  update?: Maybe<JournalFields_UpdatedAt_Update>;
};

export type JournalFields_UpdatedAt_Create = {
  __typename?: 'JournalFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_UpdatedAt_Delete = {
  __typename?: 'JournalFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_UpdatedAt_Read = {
  __typename?: 'JournalFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type JournalFields_UpdatedAt_Update = {
  __typename?: 'JournalFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type JournalReadAccess = {
  __typename?: 'JournalReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type JournalReadDocAccess = {
  __typename?: 'JournalReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type JournalUpdateAccess = {
  __typename?: 'JournalUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type JournalUpdateDocAccess = {
  __typename?: 'JournalUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Journal_Meta = {
  __typename?: 'Journal_Meta';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Media = {
  __typename?: 'Media';
  alt: Scalars['String']['output'];
  blurDataURL?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  focalX?: Maybe<Scalars['Float']['output']>;
  focalY?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  mimeType?: Maybe<Scalars['String']['output']>;
  sizes?: Maybe<Media_Sizes>;
  thumbnailURL?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields';
  alt?: Maybe<MediaDocAccessFields_Alt>;
  blurDataURL?: Maybe<MediaDocAccessFields_BlurDataUrl>;
  caption?: Maybe<MediaDocAccessFields_Caption>;
  createdAt?: Maybe<MediaDocAccessFields_CreatedAt>;
  filename?: Maybe<MediaDocAccessFields_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Filesize>;
  focalX?: Maybe<MediaDocAccessFields_FocalX>;
  focalY?: Maybe<MediaDocAccessFields_FocalY>;
  height?: Maybe<MediaDocAccessFields_Height>;
  mimeType?: Maybe<MediaDocAccessFields_MimeType>;
  sizes?: Maybe<MediaDocAccessFields_Sizes>;
  thumbnailURL?: Maybe<MediaDocAccessFields_ThumbnailUrl>;
  updatedAt?: Maybe<MediaDocAccessFields_UpdatedAt>;
  url?: Maybe<MediaDocAccessFields_Url>;
  width?: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_Alt = {
  __typename?: 'MediaDocAccessFields_alt';
  create?: Maybe<MediaDocAccessFields_Alt_Create>;
  delete?: Maybe<MediaDocAccessFields_Alt_Delete>;
  read?: Maybe<MediaDocAccessFields_Alt_Read>;
  update?: Maybe<MediaDocAccessFields_Alt_Update>;
};

export type MediaDocAccessFields_Alt_Create = {
  __typename?: 'MediaDocAccessFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Delete = {
  __typename?: 'MediaDocAccessFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Read = {
  __typename?: 'MediaDocAccessFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Update = {
  __typename?: 'MediaDocAccessFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_BlurDataUrl = {
  __typename?: 'MediaDocAccessFields_blurDataURL';
  create?: Maybe<MediaDocAccessFields_BlurDataUrl_Create>;
  delete?: Maybe<MediaDocAccessFields_BlurDataUrl_Delete>;
  read?: Maybe<MediaDocAccessFields_BlurDataUrl_Read>;
  update?: Maybe<MediaDocAccessFields_BlurDataUrl_Update>;
};

export type MediaDocAccessFields_BlurDataUrl_Create = {
  __typename?: 'MediaDocAccessFields_blurDataURL_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_BlurDataUrl_Delete = {
  __typename?: 'MediaDocAccessFields_blurDataURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_BlurDataUrl_Read = {
  __typename?: 'MediaDocAccessFields_blurDataURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_BlurDataUrl_Update = {
  __typename?: 'MediaDocAccessFields_blurDataURL_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Caption = {
  __typename?: 'MediaDocAccessFields_caption';
  create?: Maybe<MediaDocAccessFields_Caption_Create>;
  delete?: Maybe<MediaDocAccessFields_Caption_Delete>;
  read?: Maybe<MediaDocAccessFields_Caption_Read>;
  update?: Maybe<MediaDocAccessFields_Caption_Update>;
};

export type MediaDocAccessFields_Caption_Create = {
  __typename?: 'MediaDocAccessFields_caption_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Caption_Delete = {
  __typename?: 'MediaDocAccessFields_caption_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Caption_Read = {
  __typename?: 'MediaDocAccessFields_caption_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Caption_Update = {
  __typename?: 'MediaDocAccessFields_caption_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt = {
  __typename?: 'MediaDocAccessFields_createdAt';
  create?: Maybe<MediaDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_CreatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_CreatedAt_Update>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
  __typename?: 'MediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'MediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'MediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename = {
  __typename?: 'MediaDocAccessFields_filename';
  create?: Maybe<MediaDocAccessFields_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize = {
  __typename?: 'MediaDocAccessFields_filesize';
  create?: Maybe<MediaDocAccessFields_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX = {
  __typename?: 'MediaDocAccessFields_focalX';
  create?: Maybe<MediaDocAccessFields_FocalX_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalX_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalX_Read>;
  update?: Maybe<MediaDocAccessFields_FocalX_Update>;
};

export type MediaDocAccessFields_FocalX_Create = {
  __typename?: 'MediaDocAccessFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Delete = {
  __typename?: 'MediaDocAccessFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Read = {
  __typename?: 'MediaDocAccessFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Update = {
  __typename?: 'MediaDocAccessFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY = {
  __typename?: 'MediaDocAccessFields_focalY';
  create?: Maybe<MediaDocAccessFields_FocalY_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalY_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalY_Read>;
  update?: Maybe<MediaDocAccessFields_FocalY_Update>;
};

export type MediaDocAccessFields_FocalY_Create = {
  __typename?: 'MediaDocAccessFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Delete = {
  __typename?: 'MediaDocAccessFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Read = {
  __typename?: 'MediaDocAccessFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Update = {
  __typename?: 'MediaDocAccessFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height = {
  __typename?: 'MediaDocAccessFields_height';
  create?: Maybe<MediaDocAccessFields_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType = {
  __typename?: 'MediaDocAccessFields_mimeType';
  create?: Maybe<MediaDocAccessFields_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes = {
  __typename?: 'MediaDocAccessFields_sizes';
  create?: Maybe<MediaDocAccessFields_Sizes_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Update>;
};

export type MediaDocAccessFields_Sizes_Create = {
  __typename?: 'MediaDocAccessFields_sizes_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_Fields';
  card?: Maybe<MediaDocAccessFields_Sizes_Card>;
  feature?: Maybe<MediaDocAccessFields_Sizes_Feature>;
  hero?: Maybe<MediaDocAccessFields_Sizes_Hero>;
  icon?: Maybe<MediaDocAccessFields_Sizes_Icon>;
  thumbnail?: Maybe<MediaDocAccessFields_Sizes_Thumbnail>;
};

export type MediaDocAccessFields_Sizes_Read = {
  __typename?: 'MediaDocAccessFields_sizes_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Update = {
  __typename?: 'MediaDocAccessFields_sizes_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card = {
  __typename?: 'MediaDocAccessFields_sizes_card';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Card_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_card_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Card_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Card_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Card_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Card_Width>;
};

export type MediaDocAccessFields_Sizes_Card_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Height = {
  __typename?: 'MediaDocAccessFields_sizes_card_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Url = {
  __typename?: 'MediaDocAccessFields_sizes_card_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Width = {
  __typename?: 'MediaDocAccessFields_sizes_card_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature = {
  __typename?: 'MediaDocAccessFields_sizes_feature';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Feature_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Feature_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Feature_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Feature_Width>;
};

export type MediaDocAccessFields_Sizes_Feature_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Height = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Url = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Width = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero = {
  __typename?: 'MediaDocAccessFields_sizes_hero';
  create?: Maybe<MediaDocAccessFields_Sizes_Hero_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Hero_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Hero_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Hero_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Hero_Update>;
};

export type MediaDocAccessFields_Sizes_Hero_Create = {
  __typename?: 'MediaDocAccessFields_sizes_hero_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_hero_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_hero_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Hero_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Hero_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Hero_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Hero_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Hero_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Hero_Width>;
};

export type MediaDocAccessFields_Sizes_Hero_Read = {
  __typename?: 'MediaDocAccessFields_sizes_hero_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Update = {
  __typename?: 'MediaDocAccessFields_sizes_hero_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_hero_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Hero_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Hero_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Hero_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Hero_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Hero_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_hero_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_hero_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_hero_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_hero_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_hero_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Hero_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Hero_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Hero_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Hero_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Hero_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_hero_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_hero_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_hero_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_hero_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Height = {
  __typename?: 'MediaDocAccessFields_sizes_hero_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Hero_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Hero_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Hero_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Hero_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Hero_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_hero_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_hero_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_hero_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_hero_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_hero_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Hero_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Hero_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Hero_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Hero_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Hero_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_hero_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_hero_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_hero_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_hero_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Url = {
  __typename?: 'MediaDocAccessFields_sizes_hero_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Hero_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Hero_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Hero_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Hero_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Hero_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_hero_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_hero_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_hero_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_hero_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Width = {
  __typename?: 'MediaDocAccessFields_sizes_hero_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Hero_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Hero_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Hero_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Hero_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Hero_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_hero_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_hero_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_hero_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_hero_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon = {
  __typename?: 'MediaDocAccessFields_sizes_icon';
  create?: Maybe<MediaDocAccessFields_Sizes_Icon_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Icon_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Icon_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Icon_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Icon_Update>;
};

export type MediaDocAccessFields_Sizes_Icon_Create = {
  __typename?: 'MediaDocAccessFields_sizes_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_icon_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Icon_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Icon_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Icon_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Icon_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Icon_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Icon_Width>;
};

export type MediaDocAccessFields_Sizes_Icon_Read = {
  __typename?: 'MediaDocAccessFields_sizes_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Update = {
  __typename?: 'MediaDocAccessFields_sizes_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_icon_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Icon_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Icon_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Icon_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Icon_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Icon_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_icon_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_icon_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_icon_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_icon_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_icon_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Icon_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Icon_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Icon_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Icon_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Icon_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_icon_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_icon_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_icon_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_icon_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Height = {
  __typename?: 'MediaDocAccessFields_sizes_icon_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Icon_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Icon_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Icon_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Icon_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Icon_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_icon_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_icon_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_icon_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_icon_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_icon_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Icon_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Icon_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Icon_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Icon_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Icon_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_icon_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_icon_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_icon_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_icon_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Url = {
  __typename?: 'MediaDocAccessFields_sizes_icon_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Icon_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Icon_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Icon_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Icon_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Icon_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_icon_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_icon_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_icon_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_icon_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Width = {
  __typename?: 'MediaDocAccessFields_sizes_icon_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Icon_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Icon_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Icon_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Icon_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Icon_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_icon_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_icon_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_icon_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_icon_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl = {
  __typename?: 'MediaDocAccessFields_thumbnailURL';
  create?: Maybe<MediaDocAccessFields_ThumbnailUrl_Create>;
  delete?: Maybe<MediaDocAccessFields_ThumbnailUrl_Delete>;
  read?: Maybe<MediaDocAccessFields_ThumbnailUrl_Read>;
  update?: Maybe<MediaDocAccessFields_ThumbnailUrl_Update>;
};

export type MediaDocAccessFields_ThumbnailUrl_Create = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Read = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Update = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt = {
  __typename?: 'MediaDocAccessFields_updatedAt';
  create?: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url = {
  __typename?: 'MediaDocAccessFields_url';
  create?: Maybe<MediaDocAccessFields_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width = {
  __typename?: 'MediaDocAccessFields_width';
  create?: Maybe<MediaDocAccessFields_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields = {
  __typename?: 'MediaFields';
  alt?: Maybe<MediaFields_Alt>;
  blurDataURL?: Maybe<MediaFields_BlurDataUrl>;
  caption?: Maybe<MediaFields_Caption>;
  createdAt?: Maybe<MediaFields_CreatedAt>;
  filename?: Maybe<MediaFields_Filename>;
  filesize?: Maybe<MediaFields_Filesize>;
  focalX?: Maybe<MediaFields_FocalX>;
  focalY?: Maybe<MediaFields_FocalY>;
  height?: Maybe<MediaFields_Height>;
  mimeType?: Maybe<MediaFields_MimeType>;
  sizes?: Maybe<MediaFields_Sizes>;
  thumbnailURL?: Maybe<MediaFields_ThumbnailUrl>;
  updatedAt?: Maybe<MediaFields_UpdatedAt>;
  url?: Maybe<MediaFields_Url>;
  width?: Maybe<MediaFields_Width>;
};

export type MediaFields_Alt = {
  __typename?: 'MediaFields_alt';
  create?: Maybe<MediaFields_Alt_Create>;
  delete?: Maybe<MediaFields_Alt_Delete>;
  read?: Maybe<MediaFields_Alt_Read>;
  update?: Maybe<MediaFields_Alt_Update>;
};

export type MediaFields_Alt_Create = {
  __typename?: 'MediaFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Delete = {
  __typename?: 'MediaFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Read = {
  __typename?: 'MediaFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Update = {
  __typename?: 'MediaFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_BlurDataUrl = {
  __typename?: 'MediaFields_blurDataURL';
  create?: Maybe<MediaFields_BlurDataUrl_Create>;
  delete?: Maybe<MediaFields_BlurDataUrl_Delete>;
  read?: Maybe<MediaFields_BlurDataUrl_Read>;
  update?: Maybe<MediaFields_BlurDataUrl_Update>;
};

export type MediaFields_BlurDataUrl_Create = {
  __typename?: 'MediaFields_blurDataURL_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_BlurDataUrl_Delete = {
  __typename?: 'MediaFields_blurDataURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_BlurDataUrl_Read = {
  __typename?: 'MediaFields_blurDataURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_BlurDataUrl_Update = {
  __typename?: 'MediaFields_blurDataURL_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Caption = {
  __typename?: 'MediaFields_caption';
  create?: Maybe<MediaFields_Caption_Create>;
  delete?: Maybe<MediaFields_Caption_Delete>;
  read?: Maybe<MediaFields_Caption_Read>;
  update?: Maybe<MediaFields_Caption_Update>;
};

export type MediaFields_Caption_Create = {
  __typename?: 'MediaFields_caption_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Caption_Delete = {
  __typename?: 'MediaFields_caption_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Caption_Read = {
  __typename?: 'MediaFields_caption_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Caption_Update = {
  __typename?: 'MediaFields_caption_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt = {
  __typename?: 'MediaFields_createdAt';
  create?: Maybe<MediaFields_CreatedAt_Create>;
  delete?: Maybe<MediaFields_CreatedAt_Delete>;
  read?: Maybe<MediaFields_CreatedAt_Read>;
  update?: Maybe<MediaFields_CreatedAt_Update>;
};

export type MediaFields_CreatedAt_Create = {
  __typename?: 'MediaFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Delete = {
  __typename?: 'MediaFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Read = {
  __typename?: 'MediaFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Update = {
  __typename?: 'MediaFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename = {
  __typename?: 'MediaFields_filename';
  create?: Maybe<MediaFields_Filename_Create>;
  delete?: Maybe<MediaFields_Filename_Delete>;
  read?: Maybe<MediaFields_Filename_Read>;
  update?: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  __typename?: 'MediaFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize = {
  __typename?: 'MediaFields_filesize';
  create?: Maybe<MediaFields_Filesize_Create>;
  delete?: Maybe<MediaFields_Filesize_Delete>;
  read?: Maybe<MediaFields_Filesize_Read>;
  update?: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  __typename?: 'MediaFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX = {
  __typename?: 'MediaFields_focalX';
  create?: Maybe<MediaFields_FocalX_Create>;
  delete?: Maybe<MediaFields_FocalX_Delete>;
  read?: Maybe<MediaFields_FocalX_Read>;
  update?: Maybe<MediaFields_FocalX_Update>;
};

export type MediaFields_FocalX_Create = {
  __typename?: 'MediaFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Delete = {
  __typename?: 'MediaFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Read = {
  __typename?: 'MediaFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Update = {
  __typename?: 'MediaFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY = {
  __typename?: 'MediaFields_focalY';
  create?: Maybe<MediaFields_FocalY_Create>;
  delete?: Maybe<MediaFields_FocalY_Delete>;
  read?: Maybe<MediaFields_FocalY_Read>;
  update?: Maybe<MediaFields_FocalY_Update>;
};

export type MediaFields_FocalY_Create = {
  __typename?: 'MediaFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Delete = {
  __typename?: 'MediaFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Read = {
  __typename?: 'MediaFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Update = {
  __typename?: 'MediaFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height = {
  __typename?: 'MediaFields_height';
  create?: Maybe<MediaFields_Height_Create>;
  delete?: Maybe<MediaFields_Height_Delete>;
  read?: Maybe<MediaFields_Height_Read>;
  update?: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  __typename?: 'MediaFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType = {
  __typename?: 'MediaFields_mimeType';
  create?: Maybe<MediaFields_MimeType_Create>;
  delete?: Maybe<MediaFields_MimeType_Delete>;
  read?: Maybe<MediaFields_MimeType_Read>;
  update?: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes = {
  __typename?: 'MediaFields_sizes';
  create?: Maybe<MediaFields_Sizes_Create>;
  delete?: Maybe<MediaFields_Sizes_Delete>;
  fields?: Maybe<MediaFields_Sizes_Fields>;
  read?: Maybe<MediaFields_Sizes_Read>;
  update?: Maybe<MediaFields_Sizes_Update>;
};

export type MediaFields_Sizes_Create = {
  __typename?: 'MediaFields_sizes_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Delete = {
  __typename?: 'MediaFields_sizes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Fields = {
  __typename?: 'MediaFields_sizes_Fields';
  card?: Maybe<MediaFields_Sizes_Card>;
  feature?: Maybe<MediaFields_Sizes_Feature>;
  hero?: Maybe<MediaFields_Sizes_Hero>;
  icon?: Maybe<MediaFields_Sizes_Icon>;
  thumbnail?: Maybe<MediaFields_Sizes_Thumbnail>;
};

export type MediaFields_Sizes_Read = {
  __typename?: 'MediaFields_sizes_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Update = {
  __typename?: 'MediaFields_sizes_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card = {
  __typename?: 'MediaFields_sizes_card';
  create?: Maybe<MediaFields_Sizes_Card_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Delete>;
  fields?: Maybe<MediaFields_Sizes_Card_Fields>;
  read?: Maybe<MediaFields_Sizes_Card_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Update>;
};

export type MediaFields_Sizes_Card_Create = {
  __typename?: 'MediaFields_sizes_card_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Delete = {
  __typename?: 'MediaFields_sizes_card_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Fields = {
  __typename?: 'MediaFields_sizes_card_Fields';
  filename?: Maybe<MediaFields_Sizes_Card_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Card_Filesize>;
  height?: Maybe<MediaFields_Sizes_Card_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Card_MimeType>;
  url?: Maybe<MediaFields_Sizes_Card_Url>;
  width?: Maybe<MediaFields_Sizes_Card_Width>;
};

export type MediaFields_Sizes_Card_Read = {
  __typename?: 'MediaFields_sizes_card_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Update = {
  __typename?: 'MediaFields_sizes_card_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filename = {
  __typename?: 'MediaFields_sizes_card_filename';
  create?: Maybe<MediaFields_Sizes_Card_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Filename_Update>;
};

export type MediaFields_Sizes_Card_Filename_Create = {
  __typename?: 'MediaFields_sizes_card_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filename_Delete = {
  __typename?: 'MediaFields_sizes_card_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filename_Read = {
  __typename?: 'MediaFields_sizes_card_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filename_Update = {
  __typename?: 'MediaFields_sizes_card_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filesize = {
  __typename?: 'MediaFields_sizes_card_filesize';
  create?: Maybe<MediaFields_Sizes_Card_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Filesize_Update>;
};

export type MediaFields_Sizes_Card_Filesize_Create = {
  __typename?: 'MediaFields_sizes_card_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_card_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filesize_Read = {
  __typename?: 'MediaFields_sizes_card_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filesize_Update = {
  __typename?: 'MediaFields_sizes_card_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Height = {
  __typename?: 'MediaFields_sizes_card_height';
  create?: Maybe<MediaFields_Sizes_Card_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Height_Update>;
};

export type MediaFields_Sizes_Card_Height_Create = {
  __typename?: 'MediaFields_sizes_card_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Height_Delete = {
  __typename?: 'MediaFields_sizes_card_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Height_Read = {
  __typename?: 'MediaFields_sizes_card_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Height_Update = {
  __typename?: 'MediaFields_sizes_card_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_MimeType = {
  __typename?: 'MediaFields_sizes_card_mimeType';
  create?: Maybe<MediaFields_Sizes_Card_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Card_MimeType_Update>;
};

export type MediaFields_Sizes_Card_MimeType_Create = {
  __typename?: 'MediaFields_sizes_card_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_card_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_MimeType_Read = {
  __typename?: 'MediaFields_sizes_card_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_MimeType_Update = {
  __typename?: 'MediaFields_sizes_card_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Url = {
  __typename?: 'MediaFields_sizes_card_url';
  create?: Maybe<MediaFields_Sizes_Card_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Url_Update>;
};

export type MediaFields_Sizes_Card_Url_Create = {
  __typename?: 'MediaFields_sizes_card_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Url_Delete = {
  __typename?: 'MediaFields_sizes_card_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Url_Read = {
  __typename?: 'MediaFields_sizes_card_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Url_Update = {
  __typename?: 'MediaFields_sizes_card_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Width = {
  __typename?: 'MediaFields_sizes_card_width';
  create?: Maybe<MediaFields_Sizes_Card_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Width_Update>;
};

export type MediaFields_Sizes_Card_Width_Create = {
  __typename?: 'MediaFields_sizes_card_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Width_Delete = {
  __typename?: 'MediaFields_sizes_card_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Width_Read = {
  __typename?: 'MediaFields_sizes_card_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Width_Update = {
  __typename?: 'MediaFields_sizes_card_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature = {
  __typename?: 'MediaFields_sizes_feature';
  create?: Maybe<MediaFields_Sizes_Feature_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Delete>;
  fields?: Maybe<MediaFields_Sizes_Feature_Fields>;
  read?: Maybe<MediaFields_Sizes_Feature_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Update>;
};

export type MediaFields_Sizes_Feature_Create = {
  __typename?: 'MediaFields_sizes_feature_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Delete = {
  __typename?: 'MediaFields_sizes_feature_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Fields = {
  __typename?: 'MediaFields_sizes_feature_Fields';
  filename?: Maybe<MediaFields_Sizes_Feature_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Feature_Filesize>;
  height?: Maybe<MediaFields_Sizes_Feature_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Feature_MimeType>;
  url?: Maybe<MediaFields_Sizes_Feature_Url>;
  width?: Maybe<MediaFields_Sizes_Feature_Width>;
};

export type MediaFields_Sizes_Feature_Read = {
  __typename?: 'MediaFields_sizes_feature_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Update = {
  __typename?: 'MediaFields_sizes_feature_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filename = {
  __typename?: 'MediaFields_sizes_feature_filename';
  create?: Maybe<MediaFields_Sizes_Feature_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Filename_Update>;
};

export type MediaFields_Sizes_Feature_Filename_Create = {
  __typename?: 'MediaFields_sizes_feature_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filename_Delete = {
  __typename?: 'MediaFields_sizes_feature_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filename_Read = {
  __typename?: 'MediaFields_sizes_feature_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filename_Update = {
  __typename?: 'MediaFields_sizes_feature_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filesize = {
  __typename?: 'MediaFields_sizes_feature_filesize';
  create?: Maybe<MediaFields_Sizes_Feature_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Filesize_Update>;
};

export type MediaFields_Sizes_Feature_Filesize_Create = {
  __typename?: 'MediaFields_sizes_feature_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_feature_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filesize_Read = {
  __typename?: 'MediaFields_sizes_feature_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filesize_Update = {
  __typename?: 'MediaFields_sizes_feature_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Height = {
  __typename?: 'MediaFields_sizes_feature_height';
  create?: Maybe<MediaFields_Sizes_Feature_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Height_Update>;
};

export type MediaFields_Sizes_Feature_Height_Create = {
  __typename?: 'MediaFields_sizes_feature_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Height_Delete = {
  __typename?: 'MediaFields_sizes_feature_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Height_Read = {
  __typename?: 'MediaFields_sizes_feature_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Height_Update = {
  __typename?: 'MediaFields_sizes_feature_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_MimeType = {
  __typename?: 'MediaFields_sizes_feature_mimeType';
  create?: Maybe<MediaFields_Sizes_Feature_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_MimeType_Update>;
};

export type MediaFields_Sizes_Feature_MimeType_Create = {
  __typename?: 'MediaFields_sizes_feature_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_feature_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_MimeType_Read = {
  __typename?: 'MediaFields_sizes_feature_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_MimeType_Update = {
  __typename?: 'MediaFields_sizes_feature_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Url = {
  __typename?: 'MediaFields_sizes_feature_url';
  create?: Maybe<MediaFields_Sizes_Feature_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Url_Update>;
};

export type MediaFields_Sizes_Feature_Url_Create = {
  __typename?: 'MediaFields_sizes_feature_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Url_Delete = {
  __typename?: 'MediaFields_sizes_feature_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Url_Read = {
  __typename?: 'MediaFields_sizes_feature_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Url_Update = {
  __typename?: 'MediaFields_sizes_feature_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Width = {
  __typename?: 'MediaFields_sizes_feature_width';
  create?: Maybe<MediaFields_Sizes_Feature_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Width_Update>;
};

export type MediaFields_Sizes_Feature_Width_Create = {
  __typename?: 'MediaFields_sizes_feature_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Width_Delete = {
  __typename?: 'MediaFields_sizes_feature_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Width_Read = {
  __typename?: 'MediaFields_sizes_feature_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Width_Update = {
  __typename?: 'MediaFields_sizes_feature_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero = {
  __typename?: 'MediaFields_sizes_hero';
  create?: Maybe<MediaFields_Sizes_Hero_Create>;
  delete?: Maybe<MediaFields_Sizes_Hero_Delete>;
  fields?: Maybe<MediaFields_Sizes_Hero_Fields>;
  read?: Maybe<MediaFields_Sizes_Hero_Read>;
  update?: Maybe<MediaFields_Sizes_Hero_Update>;
};

export type MediaFields_Sizes_Hero_Create = {
  __typename?: 'MediaFields_sizes_hero_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Delete = {
  __typename?: 'MediaFields_sizes_hero_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Fields = {
  __typename?: 'MediaFields_sizes_hero_Fields';
  filename?: Maybe<MediaFields_Sizes_Hero_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Hero_Filesize>;
  height?: Maybe<MediaFields_Sizes_Hero_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Hero_MimeType>;
  url?: Maybe<MediaFields_Sizes_Hero_Url>;
  width?: Maybe<MediaFields_Sizes_Hero_Width>;
};

export type MediaFields_Sizes_Hero_Read = {
  __typename?: 'MediaFields_sizes_hero_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Update = {
  __typename?: 'MediaFields_sizes_hero_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Filename = {
  __typename?: 'MediaFields_sizes_hero_filename';
  create?: Maybe<MediaFields_Sizes_Hero_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Hero_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Hero_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Hero_Filename_Update>;
};

export type MediaFields_Sizes_Hero_Filename_Create = {
  __typename?: 'MediaFields_sizes_hero_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Filename_Delete = {
  __typename?: 'MediaFields_sizes_hero_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Filename_Read = {
  __typename?: 'MediaFields_sizes_hero_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Filename_Update = {
  __typename?: 'MediaFields_sizes_hero_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Filesize = {
  __typename?: 'MediaFields_sizes_hero_filesize';
  create?: Maybe<MediaFields_Sizes_Hero_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Hero_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Hero_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Hero_Filesize_Update>;
};

export type MediaFields_Sizes_Hero_Filesize_Create = {
  __typename?: 'MediaFields_sizes_hero_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_hero_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Filesize_Read = {
  __typename?: 'MediaFields_sizes_hero_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Filesize_Update = {
  __typename?: 'MediaFields_sizes_hero_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Height = {
  __typename?: 'MediaFields_sizes_hero_height';
  create?: Maybe<MediaFields_Sizes_Hero_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Hero_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Hero_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Hero_Height_Update>;
};

export type MediaFields_Sizes_Hero_Height_Create = {
  __typename?: 'MediaFields_sizes_hero_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Height_Delete = {
  __typename?: 'MediaFields_sizes_hero_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Height_Read = {
  __typename?: 'MediaFields_sizes_hero_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Height_Update = {
  __typename?: 'MediaFields_sizes_hero_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_MimeType = {
  __typename?: 'MediaFields_sizes_hero_mimeType';
  create?: Maybe<MediaFields_Sizes_Hero_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Hero_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Hero_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Hero_MimeType_Update>;
};

export type MediaFields_Sizes_Hero_MimeType_Create = {
  __typename?: 'MediaFields_sizes_hero_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_hero_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_MimeType_Read = {
  __typename?: 'MediaFields_sizes_hero_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_MimeType_Update = {
  __typename?: 'MediaFields_sizes_hero_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Url = {
  __typename?: 'MediaFields_sizes_hero_url';
  create?: Maybe<MediaFields_Sizes_Hero_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Hero_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Hero_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Hero_Url_Update>;
};

export type MediaFields_Sizes_Hero_Url_Create = {
  __typename?: 'MediaFields_sizes_hero_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Url_Delete = {
  __typename?: 'MediaFields_sizes_hero_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Url_Read = {
  __typename?: 'MediaFields_sizes_hero_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Url_Update = {
  __typename?: 'MediaFields_sizes_hero_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Width = {
  __typename?: 'MediaFields_sizes_hero_width';
  create?: Maybe<MediaFields_Sizes_Hero_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Hero_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Hero_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Hero_Width_Update>;
};

export type MediaFields_Sizes_Hero_Width_Create = {
  __typename?: 'MediaFields_sizes_hero_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Width_Delete = {
  __typename?: 'MediaFields_sizes_hero_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Width_Read = {
  __typename?: 'MediaFields_sizes_hero_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Width_Update = {
  __typename?: 'MediaFields_sizes_hero_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon = {
  __typename?: 'MediaFields_sizes_icon';
  create?: Maybe<MediaFields_Sizes_Icon_Create>;
  delete?: Maybe<MediaFields_Sizes_Icon_Delete>;
  fields?: Maybe<MediaFields_Sizes_Icon_Fields>;
  read?: Maybe<MediaFields_Sizes_Icon_Read>;
  update?: Maybe<MediaFields_Sizes_Icon_Update>;
};

export type MediaFields_Sizes_Icon_Create = {
  __typename?: 'MediaFields_sizes_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Delete = {
  __typename?: 'MediaFields_sizes_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Fields = {
  __typename?: 'MediaFields_sizes_icon_Fields';
  filename?: Maybe<MediaFields_Sizes_Icon_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Icon_Filesize>;
  height?: Maybe<MediaFields_Sizes_Icon_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Icon_MimeType>;
  url?: Maybe<MediaFields_Sizes_Icon_Url>;
  width?: Maybe<MediaFields_Sizes_Icon_Width>;
};

export type MediaFields_Sizes_Icon_Read = {
  __typename?: 'MediaFields_sizes_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Update = {
  __typename?: 'MediaFields_sizes_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Filename = {
  __typename?: 'MediaFields_sizes_icon_filename';
  create?: Maybe<MediaFields_Sizes_Icon_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Icon_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Icon_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Icon_Filename_Update>;
};

export type MediaFields_Sizes_Icon_Filename_Create = {
  __typename?: 'MediaFields_sizes_icon_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Filename_Delete = {
  __typename?: 'MediaFields_sizes_icon_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Filename_Read = {
  __typename?: 'MediaFields_sizes_icon_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Filename_Update = {
  __typename?: 'MediaFields_sizes_icon_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Filesize = {
  __typename?: 'MediaFields_sizes_icon_filesize';
  create?: Maybe<MediaFields_Sizes_Icon_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Icon_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Icon_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Icon_Filesize_Update>;
};

export type MediaFields_Sizes_Icon_Filesize_Create = {
  __typename?: 'MediaFields_sizes_icon_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_icon_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Filesize_Read = {
  __typename?: 'MediaFields_sizes_icon_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Filesize_Update = {
  __typename?: 'MediaFields_sizes_icon_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Height = {
  __typename?: 'MediaFields_sizes_icon_height';
  create?: Maybe<MediaFields_Sizes_Icon_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Icon_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Icon_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Icon_Height_Update>;
};

export type MediaFields_Sizes_Icon_Height_Create = {
  __typename?: 'MediaFields_sizes_icon_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Height_Delete = {
  __typename?: 'MediaFields_sizes_icon_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Height_Read = {
  __typename?: 'MediaFields_sizes_icon_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Height_Update = {
  __typename?: 'MediaFields_sizes_icon_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_MimeType = {
  __typename?: 'MediaFields_sizes_icon_mimeType';
  create?: Maybe<MediaFields_Sizes_Icon_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Icon_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Icon_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Icon_MimeType_Update>;
};

export type MediaFields_Sizes_Icon_MimeType_Create = {
  __typename?: 'MediaFields_sizes_icon_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_icon_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_MimeType_Read = {
  __typename?: 'MediaFields_sizes_icon_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_MimeType_Update = {
  __typename?: 'MediaFields_sizes_icon_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Url = {
  __typename?: 'MediaFields_sizes_icon_url';
  create?: Maybe<MediaFields_Sizes_Icon_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Icon_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Icon_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Icon_Url_Update>;
};

export type MediaFields_Sizes_Icon_Url_Create = {
  __typename?: 'MediaFields_sizes_icon_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Url_Delete = {
  __typename?: 'MediaFields_sizes_icon_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Url_Read = {
  __typename?: 'MediaFields_sizes_icon_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Url_Update = {
  __typename?: 'MediaFields_sizes_icon_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Width = {
  __typename?: 'MediaFields_sizes_icon_width';
  create?: Maybe<MediaFields_Sizes_Icon_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Icon_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Icon_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Icon_Width_Update>;
};

export type MediaFields_Sizes_Icon_Width_Create = {
  __typename?: 'MediaFields_sizes_icon_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Width_Delete = {
  __typename?: 'MediaFields_sizes_icon_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Width_Read = {
  __typename?: 'MediaFields_sizes_icon_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Width_Update = {
  __typename?: 'MediaFields_sizes_icon_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail = {
  __typename?: 'MediaFields_sizes_thumbnail';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Delete>;
  fields?: Maybe<MediaFields_Sizes_Thumbnail_Fields>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Update>;
};

export type MediaFields_Sizes_Thumbnail_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Fields = {
  __typename?: 'MediaFields_sizes_thumbnail_Fields';
  filename?: Maybe<MediaFields_Sizes_Thumbnail_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Thumbnail_Filesize>;
  height?: Maybe<MediaFields_Sizes_Thumbnail_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Thumbnail_MimeType>;
  url?: Maybe<MediaFields_Sizes_Thumbnail_Url>;
  width?: Maybe<MediaFields_Sizes_Thumbnail_Width>;
};

export type MediaFields_Sizes_Thumbnail_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename = {
  __typename?: 'MediaFields_sizes_thumbnail_filename';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filename_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filesize_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height = {
  __typename?: 'MediaFields_sizes_thumbnail_height';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaFields_Sizes_Thumbnail_Height_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType';
  create?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaFields_Sizes_Thumbnail_MimeType_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url = {
  __typename?: 'MediaFields_sizes_thumbnail_url';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaFields_Sizes_Thumbnail_Url_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width = {
  __typename?: 'MediaFields_sizes_thumbnail_width';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaFields_Sizes_Thumbnail_Width_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl = {
  __typename?: 'MediaFields_thumbnailURL';
  create?: Maybe<MediaFields_ThumbnailUrl_Create>;
  delete?: Maybe<MediaFields_ThumbnailUrl_Delete>;
  read?: Maybe<MediaFields_ThumbnailUrl_Read>;
  update?: Maybe<MediaFields_ThumbnailUrl_Update>;
};

export type MediaFields_ThumbnailUrl_Create = {
  __typename?: 'MediaFields_thumbnailURL_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Read = {
  __typename?: 'MediaFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Update = {
  __typename?: 'MediaFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt = {
  __typename?: 'MediaFields_updatedAt';
  create?: Maybe<MediaFields_UpdatedAt_Create>;
  delete?: Maybe<MediaFields_UpdatedAt_Delete>;
  read?: Maybe<MediaFields_UpdatedAt_Read>;
  update?: Maybe<MediaFields_UpdatedAt_Update>;
};

export type MediaFields_UpdatedAt_Create = {
  __typename?: 'MediaFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Delete = {
  __typename?: 'MediaFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Read = {
  __typename?: 'MediaFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Update = {
  __typename?: 'MediaFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url = {
  __typename?: 'MediaFields_url';
  create?: Maybe<MediaFields_Url_Create>;
  delete?: Maybe<MediaFields_Url_Delete>;
  read?: Maybe<MediaFields_Url_Read>;
  update?: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  __typename?: 'MediaFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width = {
  __typename?: 'MediaFields_width';
  create?: Maybe<MediaFields_Width_Create>;
  delete?: Maybe<MediaFields_Width_Delete>;
  read?: Maybe<MediaFields_Width_Read>;
  update?: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  __typename?: 'MediaFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Media_Sizes = {
  __typename?: 'Media_Sizes';
  card?: Maybe<Media_Sizes_Card>;
  feature?: Maybe<Media_Sizes_Feature>;
  hero?: Maybe<Media_Sizes_Hero>;
  icon?: Maybe<Media_Sizes_Icon>;
  thumbnail?: Maybe<Media_Sizes_Thumbnail>;
};

export type Media_Sizes_Card = {
  __typename?: 'Media_Sizes_Card';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Feature = {
  __typename?: 'Media_Sizes_Feature';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Hero = {
  __typename?: 'Media_Sizes_Hero';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Icon = {
  __typename?: 'Media_Sizes_Icon';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Thumbnail = {
  __typename?: 'Media_Sizes_Thumbnail';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_BlurDataUrl_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Caption_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalX_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalY_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Card__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Card__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Card__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Card__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Card__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Card__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Feature__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Feature__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Feature__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Feature__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Feature__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Feature__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Hero__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Hero__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Hero__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Hero__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Hero__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Hero__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Icon__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Icon__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Icon__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Icon__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Icon__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Icon__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_ThumbnailUrl_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  blurDataURL?: InputMaybe<Media_BlurDataUrl_Operator>;
  caption?: InputMaybe<Media_Caption_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  sizes__feature__filename?: InputMaybe<Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Media_Sizes__Feature__Width_Operator>;
  sizes__hero__filename?: InputMaybe<Media_Sizes__Hero__Filename_Operator>;
  sizes__hero__filesize?: InputMaybe<Media_Sizes__Hero__Filesize_Operator>;
  sizes__hero__height?: InputMaybe<Media_Sizes__Hero__Height_Operator>;
  sizes__hero__mimeType?: InputMaybe<Media_Sizes__Hero__MimeType_Operator>;
  sizes__hero__url?: InputMaybe<Media_Sizes__Hero__Url_Operator>;
  sizes__hero__width?: InputMaybe<Media_Sizes__Hero__Width_Operator>;
  sizes__icon__filename?: InputMaybe<Media_Sizes__Icon__Filename_Operator>;
  sizes__icon__filesize?: InputMaybe<Media_Sizes__Icon__Filesize_Operator>;
  sizes__icon__height?: InputMaybe<Media_Sizes__Icon__Height_Operator>;
  sizes__icon__mimeType?: InputMaybe<Media_Sizes__Icon__MimeType_Operator>;
  sizes__icon__url?: InputMaybe<Media_Sizes__Icon__Url_Operator>;
  sizes__icon__width?: InputMaybe<Media_Sizes__Icon__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  blurDataURL?: InputMaybe<Media_BlurDataUrl_Operator>;
  caption?: InputMaybe<Media_Caption_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  sizes__feature__filename?: InputMaybe<Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Media_Sizes__Feature__Width_Operator>;
  sizes__hero__filename?: InputMaybe<Media_Sizes__Hero__Filename_Operator>;
  sizes__hero__filesize?: InputMaybe<Media_Sizes__Hero__Filesize_Operator>;
  sizes__hero__height?: InputMaybe<Media_Sizes__Hero__Height_Operator>;
  sizes__hero__mimeType?: InputMaybe<Media_Sizes__Hero__MimeType_Operator>;
  sizes__hero__url?: InputMaybe<Media_Sizes__Hero__Url_Operator>;
  sizes__hero__width?: InputMaybe<Media_Sizes__Hero__Width_Operator>;
  sizes__icon__filename?: InputMaybe<Media_Sizes__Icon__Filename_Operator>;
  sizes__icon__filesize?: InputMaybe<Media_Sizes__Icon__Filesize_Operator>;
  sizes__icon__height?: InputMaybe<Media_Sizes__Icon__Height_Operator>;
  sizes__icon__mimeType?: InputMaybe<Media_Sizes__Icon__MimeType_Operator>;
  sizes__icon__url?: InputMaybe<Media_Sizes__Icon__Url_Operator>;
  sizes__icon__width?: InputMaybe<Media_Sizes__Icon__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  blurDataURL?: InputMaybe<Media_BlurDataUrl_Operator>;
  caption?: InputMaybe<Media_Caption_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  sizes__feature__filename?: InputMaybe<Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Media_Sizes__Feature__Width_Operator>;
  sizes__hero__filename?: InputMaybe<Media_Sizes__Hero__Filename_Operator>;
  sizes__hero__filesize?: InputMaybe<Media_Sizes__Hero__Filesize_Operator>;
  sizes__hero__height?: InputMaybe<Media_Sizes__Hero__Height_Operator>;
  sizes__hero__mimeType?: InputMaybe<Media_Sizes__Hero__MimeType_Operator>;
  sizes__hero__url?: InputMaybe<Media_Sizes__Hero__Url_Operator>;
  sizes__hero__width?: InputMaybe<Media_Sizes__Hero__Width_Operator>;
  sizes__icon__filename?: InputMaybe<Media_Sizes__Icon__Filename_Operator>;
  sizes__icon__filesize?: InputMaybe<Media_Sizes__Icon__Filesize_Operator>;
  sizes__icon__height?: InputMaybe<Media_Sizes__Icon__Height_Operator>;
  sizes__icon__mimeType?: InputMaybe<Media_Sizes__Icon__MimeType_Operator>;
  sizes__icon__url?: InputMaybe<Media_Sizes__Icon__Url_Operator>;
  sizes__icon__width?: InputMaybe<Media_Sizes__Icon__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCaseStudy?: Maybe<CaseStudy>;
  createContactForm?: Maybe<ContactForm>;
  createExperience?: Maybe<Experience>;
  createMedia?: Maybe<Media>;
  createPayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  createPayloadPreference?: Maybe<PayloadPreference>;
  createTag?: Maybe<Tag>;
  createUser?: Maybe<User>;
  deleteCaseStudy?: Maybe<CaseStudy>;
  deleteContactForm?: Maybe<ContactForm>;
  deleteExperience?: Maybe<Experience>;
  deleteMedia?: Maybe<Media>;
  deletePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  deletePayloadPreference?: Maybe<PayloadPreference>;
  deleteTag?: Maybe<Tag>;
  deleteUser?: Maybe<User>;
  duplicateCaseStudy?: Maybe<CaseStudy>;
  duplicateContactForm?: Maybe<ContactForm>;
  duplicateExperience?: Maybe<Experience>;
  duplicateMedia?: Maybe<Media>;
  duplicatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  duplicatePayloadPreference?: Maybe<PayloadPreference>;
  duplicateTag?: Maybe<Tag>;
  forgotPasswordUser: Scalars['Boolean']['output'];
  loginUser?: Maybe<UsersLoginResult>;
  logoutUser?: Maybe<Scalars['String']['output']>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  unlockUser: Scalars['Boolean']['output'];
  updateCaseStudy?: Maybe<CaseStudy>;
  updateContactForm?: Maybe<ContactForm>;
  updateExperience?: Maybe<Experience>;
  updateFeaturedCaseStudy?: Maybe<FeaturedCaseStudy>;
  updateFeaturedExperience?: Maybe<FeaturedExperience>;
  updateFooter?: Maybe<Footer>;
  updateHero?: Maybe<Hero>;
  updateJournal?: Maybe<Journal>;
  updateMedia?: Maybe<Media>;
  updatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  updatePayloadPreference?: Maybe<PayloadPreference>;
  updateSkill?: Maybe<Skill>;
  updateTag?: Maybe<Tag>;
  updateUser?: Maybe<User>;
  updateWorkButton?: Maybe<WorkButton>;
  verifyEmailUser?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateCaseStudyArgs = {
  data: MutationCaseStudyInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateContactFormArgs = {
  data: MutationContactFormInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateExperienceArgs = {
  data: MutationExperienceInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateTagArgs = {
  data: MutationTagInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteCaseStudyArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteContactFormArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteExperienceArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteMediaArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePayloadLockedDocumentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicateCaseStudyArgs = {
  data: MutationCaseStudyInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateContactFormArgs = {
  data: MutationContactFormInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateExperienceArgs = {
  data: MutationExperienceInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateMediaArgs = {
  data: MutationMediaInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateTagArgs = {
  data: MutationTagInput;
  id: Scalars['Int']['input'];
};


export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  expiration?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationLoginUserArgs = {
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateCaseStudyArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationCaseStudyUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateContactFormArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationContactFormUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateExperienceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationExperienceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateFeaturedCaseStudyArgs = {
  data: MutationFeaturedCaseStudyInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateFeaturedExperienceArgs = {
  data: MutationFeaturedExperienceInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateFooterArgs = {
  data: MutationFooterInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateHeroArgs = {
  data: MutationHeroInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateJournalArgs = {
  data: MutationJournalInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationMediaUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdatePayloadLockedDocumentArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadLockedDocumentUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadPreferenceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateSkillArgs = {
  data: MutationSkillInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateTagArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationTagUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateWorkButtonArgs = {
  data: MutationWorkButtonInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type PayloadLockedDocument = {
  __typename?: 'PayloadLockedDocument';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  document?: Maybe<PayloadLockedDocument_Document_Relationship>;
  globalSlug?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: PayloadLockedDocument_User_Relationship;
};

export type PayloadLockedDocumentUpdate_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo {
  CaseStudies = 'case_studies',
  ContactForms = 'contact_forms',
  Experiences = 'experiences',
  Media = 'media',
  Tags = 'tags',
  Users = 'users'
}

export type PayloadLockedDocumentUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_Document = CaseStudy | ContactForm | Experience | Media | Tag | User;

export type PayloadLockedDocument_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_DocumentRelationshipInputRelationTo {
  CaseStudies = 'case_studies',
  ContactForms = 'contact_forms',
  Experiences = 'experiences',
  Media = 'media',
  Tags = 'tags',
  Users = 'users'
}

export enum PayloadLockedDocument_Document_RelationTo {
  CaseStudies = 'case_studies',
  ContactForms = 'contact_forms',
  Experiences = 'experiences',
  Media = 'media',
  Tags = 'tags',
  Users = 'users'
}

export type PayloadLockedDocument_Document_Relationship = {
  __typename?: 'PayloadLockedDocument_Document_Relationship';
  relationTo?: Maybe<PayloadLockedDocument_Document_RelationTo>;
  value?: Maybe<PayloadLockedDocument_Document>;
};

export type PayloadLockedDocument_User = User;

export type PayloadLockedDocument_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadLockedDocument_User_RelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_User_Relationship = {
  __typename?: 'PayloadLockedDocument_User_Relationship';
  relationTo?: Maybe<PayloadLockedDocument_User_RelationTo>;
  value?: Maybe<PayloadLockedDocument_User>;
};

export type PayloadLockedDocument_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadLockedDocument_Document_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_Document_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_Document_Relation_RelationTo {
  CaseStudies = 'case_studies',
  ContactForms = 'contact_forms',
  Experiences = 'experiences',
  Media = 'media',
  Tags = 'tags',
  Users = 'users'
}

export type PayloadLockedDocument_GlobalSlug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadLockedDocument_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type PayloadLockedDocument_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadLockedDocument_User_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocument_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocument_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocuments = {
  __typename?: 'PayloadLockedDocuments';
  docs: Array<PayloadLockedDocument>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage: Scalars['Int']['output'];
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage: Scalars['Int']['output'];
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadLockedDocumentsCreateAccess = {
  __typename?: 'PayloadLockedDocumentsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsCreateDocAccess = {
  __typename?: 'PayloadLockedDocumentsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteDocAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDocAccessFields = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields';
  createdAt?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt>;
  document?: Maybe<PayloadLockedDocumentsDocAccessFields_Document>;
  globalSlug?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug>;
  updatedAt?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadLockedDocumentsDocAccessFields_User>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_Document_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_User_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields = {
  __typename?: 'PayloadLockedDocumentsFields';
  createdAt?: Maybe<PayloadLockedDocumentsFields_CreatedAt>;
  document?: Maybe<PayloadLockedDocumentsFields_Document>;
  globalSlug?: Maybe<PayloadLockedDocumentsFields_GlobalSlug>;
  updatedAt?: Maybe<PayloadLockedDocumentsFields_UpdatedAt>;
  user?: Maybe<PayloadLockedDocumentsFields_User>;
};

export type PayloadLockedDocumentsFields_CreatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt';
  create?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsFields_CreatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document = {
  __typename?: 'PayloadLockedDocumentsFields_document';
  create?: Maybe<PayloadLockedDocumentsFields_Document_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_Document_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_Document_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_Document_Update>;
};

export type PayloadLockedDocumentsFields_Document_Create = {
  __typename?: 'PayloadLockedDocumentsFields_document_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsFields_document_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug';
  create?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsFields_GlobalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt';
  create?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsFields_UpdatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User = {
  __typename?: 'PayloadLockedDocumentsFields_user';
  create?: Maybe<PayloadLockedDocumentsFields_User_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_User_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_User_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_User_Update>;
};

export type PayloadLockedDocumentsFields_User_Create = {
  __typename?: 'PayloadLockedDocumentsFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsReadAccess = {
  __typename?: 'PayloadLockedDocumentsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsReadDocAccess = {
  __typename?: 'PayloadLockedDocumentsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateDocAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreference = {
  __typename?: 'PayloadPreference';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  key?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: PayloadPreference_User_Relationship;
  value?: Maybe<Scalars['JSON']['output']>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadPreference_User = User;

export type PayloadPreference_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadPreference_User_RelationTo {
  Users = 'users'
}

export type PayloadPreference_User_Relationship = {
  __typename?: 'PayloadPreference_User_Relationship';
  relationTo?: Maybe<PayloadPreference_User_RelationTo>;
  value?: Maybe<PayloadPreference_User>;
};

export type PayloadPreference_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type PayloadPreference_Key_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_User_Relation = {
  relationTo?: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadPreference_Value_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreference_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreferences = {
  __typename?: 'PayloadPreferences';
  docs: Array<PayloadPreference>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage: Scalars['Int']['output'];
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage: Scalars['Int']['output'];
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadPreferencesCreateAccess = {
  __typename?: 'PayloadPreferencesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesCreateDocAccess = {
  __typename?: 'PayloadPreferencesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteAccess = {
  __typename?: 'PayloadPreferencesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  __typename?: 'PayloadPreferencesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDocAccessFields = {
  __typename?: 'PayloadPreferencesDocAccessFields';
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesDocAccessFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesDocAccessFields_User>;
  value?: Maybe<PayloadPreferencesDocAccessFields_Value>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key = {
  __typename?: 'PayloadPreferencesDocAccessFields_key';
  create?: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User = {
  __typename?: 'PayloadPreferencesDocAccessFields_user';
  create?: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value = {
  __typename?: 'PayloadPreferencesDocAccessFields_value';
  create?: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields = {
  __typename?: 'PayloadPreferencesFields';
  createdAt?: Maybe<PayloadPreferencesFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesFields_User>;
  value?: Maybe<PayloadPreferencesFields_Value>;
};

export type PayloadPreferencesFields_CreatedAt = {
  __typename?: 'PayloadPreferencesFields_createdAt';
  create?: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key = {
  __typename?: 'PayloadPreferencesFields_key';
  create?: Maybe<PayloadPreferencesFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesFields_Key_Read>;
  update?: Maybe<PayloadPreferencesFields_Key_Update>;
};

export type PayloadPreferencesFields_Key_Create = {
  __typename?: 'PayloadPreferencesFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Delete = {
  __typename?: 'PayloadPreferencesFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Read = {
  __typename?: 'PayloadPreferencesFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Update = {
  __typename?: 'PayloadPreferencesFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesFields_updatedAt';
  create?: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User = {
  __typename?: 'PayloadPreferencesFields_user';
  create?: Maybe<PayloadPreferencesFields_User_Create>;
  delete?: Maybe<PayloadPreferencesFields_User_Delete>;
  read?: Maybe<PayloadPreferencesFields_User_Read>;
  update?: Maybe<PayloadPreferencesFields_User_Update>;
};

export type PayloadPreferencesFields_User_Create = {
  __typename?: 'PayloadPreferencesFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Delete = {
  __typename?: 'PayloadPreferencesFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Read = {
  __typename?: 'PayloadPreferencesFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Update = {
  __typename?: 'PayloadPreferencesFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value = {
  __typename?: 'PayloadPreferencesFields_value';
  create?: Maybe<PayloadPreferencesFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesFields_Value_Read>;
  update?: Maybe<PayloadPreferencesFields_Value_Update>;
};

export type PayloadPreferencesFields_Value_Create = {
  __typename?: 'PayloadPreferencesFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Delete = {
  __typename?: 'PayloadPreferencesFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Read = {
  __typename?: 'PayloadPreferencesFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Update = {
  __typename?: 'PayloadPreferencesFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesReadAccess = {
  __typename?: 'PayloadPreferencesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesReadDocAccess = {
  __typename?: 'PayloadPreferencesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateAccess = {
  __typename?: 'PayloadPreferencesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  __typename?: 'PayloadPreferencesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  CaseStudies?: Maybe<CaseStudies>;
  CaseStudy?: Maybe<CaseStudy>;
  ContactForm?: Maybe<ContactForm>;
  ContactForms?: Maybe<ContactForms>;
  Experience?: Maybe<Experience>;
  Experiences?: Maybe<Experiences>;
  FeaturedCaseStudy?: Maybe<FeaturedCaseStudy>;
  FeaturedExperience?: Maybe<FeaturedExperience>;
  Footer?: Maybe<Footer>;
  Hero?: Maybe<Hero>;
  Journal?: Maybe<Journal>;
  Media?: Maybe<Media>;
  PayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  PayloadLockedDocuments?: Maybe<PayloadLockedDocuments>;
  PayloadPreference?: Maybe<PayloadPreference>;
  PayloadPreferences?: Maybe<PayloadPreferences>;
  Skill?: Maybe<Skill>;
  Tag?: Maybe<Tag>;
  Tags?: Maybe<Tags>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  WorkButton?: Maybe<WorkButton>;
  allMedia?: Maybe<AllMedia>;
  countCaseStudies?: Maybe<CountCaseStudies>;
  countContactForms?: Maybe<CountContactForms>;
  countExperiences?: Maybe<CountExperiences>;
  countPayloadLockedDocuments?: Maybe<CountPayloadLockedDocuments>;
  countPayloadPreferences?: Maybe<CountPayloadPreferences>;
  countTags?: Maybe<CountTags>;
  countUsers?: Maybe<CountUsers>;
  countallMedia?: Maybe<CountallMedia>;
  docAccessCaseStudy?: Maybe<Case_StudiesDocAccess>;
  docAccessContactForm?: Maybe<Contact_FormsDocAccess>;
  docAccessExperience?: Maybe<ExperiencesDocAccess>;
  docAccessFeaturedCaseStudy?: Maybe<Featured_Case_StudiesDocAccess>;
  docAccessFeaturedExperience?: Maybe<Featured_ExperiencesDocAccess>;
  docAccessFooter?: Maybe<FooterDocAccess>;
  docAccessHero?: Maybe<HeroDocAccess>;
  docAccessJournal?: Maybe<JournalDocAccess>;
  docAccessMedia?: Maybe<MediaDocAccess>;
  docAccessPayloadLockedDocument?: Maybe<Payload_Locked_DocumentsDocAccess>;
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>;
  docAccessSkill?: Maybe<SkillsDocAccess>;
  docAccessTag?: Maybe<TagsDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  docAccessWorkButton?: Maybe<Work_ButtonsDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']['output']>;
  meUser?: Maybe<UsersMe>;
};


export type QueryCaseStudiesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<CaseStudy_Where>;
};


export type QueryCaseStudyArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryContactFormArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryContactFormsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ContactForm_Where>;
};


export type QueryExperienceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryExperiencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Experience_Where>;
};


export type QueryFeaturedCaseStudyArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFeaturedExperienceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFooterArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHeroArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryJournalArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryPayloadLockedDocumentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryPayloadPreferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QuerySkillArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTagArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryTagsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Tag_Where>;
};


export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryWorkButtonArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAllMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryCountCaseStudiesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CaseStudy_Where>;
};


export type QueryCountContactFormsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ContactForm_Where>;
};


export type QueryCountExperiencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Experience_Where>;
};


export type QueryCountPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryCountPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryCountTagsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Tag_Where>;
};


export type QueryCountUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryCountallMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryDocAccessCaseStudyArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessContactFormArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessExperienceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessPayloadLockedDocumentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessTagArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['Int']['input'];
};

export type Skill = {
  __typename?: 'Skill';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  skills: Array<Skill_Skills>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Skill_Skills = {
  __typename?: 'Skill_Skills';
  description?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
};


export type Skill_SkillsDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type SkillsDocAccessFields = {
  __typename?: 'SkillsDocAccessFields';
  createdAt?: Maybe<SkillsDocAccessFields_CreatedAt>;
  skills?: Maybe<SkillsDocAccessFields_Skills>;
  subtitle?: Maybe<SkillsDocAccessFields_Subtitle>;
  title?: Maybe<SkillsDocAccessFields_Title>;
  updatedAt?: Maybe<SkillsDocAccessFields_UpdatedAt>;
};

export type SkillsDocAccessFields_CreatedAt = {
  __typename?: 'SkillsDocAccessFields_createdAt';
  create?: Maybe<SkillsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<SkillsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<SkillsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<SkillsDocAccessFields_CreatedAt_Update>;
};

export type SkillsDocAccessFields_CreatedAt_Create = {
  __typename?: 'SkillsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'SkillsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_CreatedAt_Read = {
  __typename?: 'SkillsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_CreatedAt_Update = {
  __typename?: 'SkillsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills = {
  __typename?: 'SkillsDocAccessFields_skills';
  create?: Maybe<SkillsDocAccessFields_Skills_Create>;
  delete?: Maybe<SkillsDocAccessFields_Skills_Delete>;
  fields?: Maybe<SkillsDocAccessFields_Skills_Fields>;
  read?: Maybe<SkillsDocAccessFields_Skills_Read>;
  update?: Maybe<SkillsDocAccessFields_Skills_Update>;
};

export type SkillsDocAccessFields_Skills_Create = {
  __typename?: 'SkillsDocAccessFields_skills_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Delete = {
  __typename?: 'SkillsDocAccessFields_skills_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Fields = {
  __typename?: 'SkillsDocAccessFields_skills_Fields';
  description?: Maybe<SkillsDocAccessFields_Skills_Description>;
  id?: Maybe<SkillsDocAccessFields_Skills_Id>;
  name?: Maybe<SkillsDocAccessFields_Skills_Name>;
  subtitle?: Maybe<SkillsDocAccessFields_Skills_Subtitle>;
};

export type SkillsDocAccessFields_Skills_Read = {
  __typename?: 'SkillsDocAccessFields_skills_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Update = {
  __typename?: 'SkillsDocAccessFields_skills_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Description = {
  __typename?: 'SkillsDocAccessFields_skills_description';
  create?: Maybe<SkillsDocAccessFields_Skills_Description_Create>;
  delete?: Maybe<SkillsDocAccessFields_Skills_Description_Delete>;
  read?: Maybe<SkillsDocAccessFields_Skills_Description_Read>;
  update?: Maybe<SkillsDocAccessFields_Skills_Description_Update>;
};

export type SkillsDocAccessFields_Skills_Description_Create = {
  __typename?: 'SkillsDocAccessFields_skills_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Description_Delete = {
  __typename?: 'SkillsDocAccessFields_skills_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Description_Read = {
  __typename?: 'SkillsDocAccessFields_skills_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Description_Update = {
  __typename?: 'SkillsDocAccessFields_skills_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Id = {
  __typename?: 'SkillsDocAccessFields_skills_id';
  create?: Maybe<SkillsDocAccessFields_Skills_Id_Create>;
  delete?: Maybe<SkillsDocAccessFields_Skills_Id_Delete>;
  read?: Maybe<SkillsDocAccessFields_Skills_Id_Read>;
  update?: Maybe<SkillsDocAccessFields_Skills_Id_Update>;
};

export type SkillsDocAccessFields_Skills_Id_Create = {
  __typename?: 'SkillsDocAccessFields_skills_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Id_Delete = {
  __typename?: 'SkillsDocAccessFields_skills_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Id_Read = {
  __typename?: 'SkillsDocAccessFields_skills_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Id_Update = {
  __typename?: 'SkillsDocAccessFields_skills_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Name = {
  __typename?: 'SkillsDocAccessFields_skills_name';
  create?: Maybe<SkillsDocAccessFields_Skills_Name_Create>;
  delete?: Maybe<SkillsDocAccessFields_Skills_Name_Delete>;
  read?: Maybe<SkillsDocAccessFields_Skills_Name_Read>;
  update?: Maybe<SkillsDocAccessFields_Skills_Name_Update>;
};

export type SkillsDocAccessFields_Skills_Name_Create = {
  __typename?: 'SkillsDocAccessFields_skills_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Name_Delete = {
  __typename?: 'SkillsDocAccessFields_skills_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Name_Read = {
  __typename?: 'SkillsDocAccessFields_skills_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Name_Update = {
  __typename?: 'SkillsDocAccessFields_skills_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Subtitle = {
  __typename?: 'SkillsDocAccessFields_skills_subtitle';
  create?: Maybe<SkillsDocAccessFields_Skills_Subtitle_Create>;
  delete?: Maybe<SkillsDocAccessFields_Skills_Subtitle_Delete>;
  read?: Maybe<SkillsDocAccessFields_Skills_Subtitle_Read>;
  update?: Maybe<SkillsDocAccessFields_Skills_Subtitle_Update>;
};

export type SkillsDocAccessFields_Skills_Subtitle_Create = {
  __typename?: 'SkillsDocAccessFields_skills_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Subtitle_Delete = {
  __typename?: 'SkillsDocAccessFields_skills_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Subtitle_Read = {
  __typename?: 'SkillsDocAccessFields_skills_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Subtitle_Update = {
  __typename?: 'SkillsDocAccessFields_skills_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Subtitle = {
  __typename?: 'SkillsDocAccessFields_subtitle';
  create?: Maybe<SkillsDocAccessFields_Subtitle_Create>;
  delete?: Maybe<SkillsDocAccessFields_Subtitle_Delete>;
  read?: Maybe<SkillsDocAccessFields_Subtitle_Read>;
  update?: Maybe<SkillsDocAccessFields_Subtitle_Update>;
};

export type SkillsDocAccessFields_Subtitle_Create = {
  __typename?: 'SkillsDocAccessFields_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Subtitle_Delete = {
  __typename?: 'SkillsDocAccessFields_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Subtitle_Read = {
  __typename?: 'SkillsDocAccessFields_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Subtitle_Update = {
  __typename?: 'SkillsDocAccessFields_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Title = {
  __typename?: 'SkillsDocAccessFields_title';
  create?: Maybe<SkillsDocAccessFields_Title_Create>;
  delete?: Maybe<SkillsDocAccessFields_Title_Delete>;
  read?: Maybe<SkillsDocAccessFields_Title_Read>;
  update?: Maybe<SkillsDocAccessFields_Title_Update>;
};

export type SkillsDocAccessFields_Title_Create = {
  __typename?: 'SkillsDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Title_Delete = {
  __typename?: 'SkillsDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Title_Read = {
  __typename?: 'SkillsDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Title_Update = {
  __typename?: 'SkillsDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_UpdatedAt = {
  __typename?: 'SkillsDocAccessFields_updatedAt';
  create?: Maybe<SkillsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<SkillsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<SkillsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<SkillsDocAccessFields_UpdatedAt_Update>;
};

export type SkillsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'SkillsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'SkillsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'SkillsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'SkillsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields = {
  __typename?: 'SkillsFields';
  createdAt?: Maybe<SkillsFields_CreatedAt>;
  skills?: Maybe<SkillsFields_Skills>;
  subtitle?: Maybe<SkillsFields_Subtitle>;
  title?: Maybe<SkillsFields_Title>;
  updatedAt?: Maybe<SkillsFields_UpdatedAt>;
};

export type SkillsFields_CreatedAt = {
  __typename?: 'SkillsFields_createdAt';
  create?: Maybe<SkillsFields_CreatedAt_Create>;
  delete?: Maybe<SkillsFields_CreatedAt_Delete>;
  read?: Maybe<SkillsFields_CreatedAt_Read>;
  update?: Maybe<SkillsFields_CreatedAt_Update>;
};

export type SkillsFields_CreatedAt_Create = {
  __typename?: 'SkillsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_CreatedAt_Delete = {
  __typename?: 'SkillsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_CreatedAt_Read = {
  __typename?: 'SkillsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_CreatedAt_Update = {
  __typename?: 'SkillsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills = {
  __typename?: 'SkillsFields_skills';
  create?: Maybe<SkillsFields_Skills_Create>;
  delete?: Maybe<SkillsFields_Skills_Delete>;
  fields?: Maybe<SkillsFields_Skills_Fields>;
  read?: Maybe<SkillsFields_Skills_Read>;
  update?: Maybe<SkillsFields_Skills_Update>;
};

export type SkillsFields_Skills_Create = {
  __typename?: 'SkillsFields_skills_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Delete = {
  __typename?: 'SkillsFields_skills_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Fields = {
  __typename?: 'SkillsFields_skills_Fields';
  description?: Maybe<SkillsFields_Skills_Description>;
  id?: Maybe<SkillsFields_Skills_Id>;
  name?: Maybe<SkillsFields_Skills_Name>;
  subtitle?: Maybe<SkillsFields_Skills_Subtitle>;
};

export type SkillsFields_Skills_Read = {
  __typename?: 'SkillsFields_skills_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Update = {
  __typename?: 'SkillsFields_skills_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Description = {
  __typename?: 'SkillsFields_skills_description';
  create?: Maybe<SkillsFields_Skills_Description_Create>;
  delete?: Maybe<SkillsFields_Skills_Description_Delete>;
  read?: Maybe<SkillsFields_Skills_Description_Read>;
  update?: Maybe<SkillsFields_Skills_Description_Update>;
};

export type SkillsFields_Skills_Description_Create = {
  __typename?: 'SkillsFields_skills_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Description_Delete = {
  __typename?: 'SkillsFields_skills_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Description_Read = {
  __typename?: 'SkillsFields_skills_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Description_Update = {
  __typename?: 'SkillsFields_skills_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Id = {
  __typename?: 'SkillsFields_skills_id';
  create?: Maybe<SkillsFields_Skills_Id_Create>;
  delete?: Maybe<SkillsFields_Skills_Id_Delete>;
  read?: Maybe<SkillsFields_Skills_Id_Read>;
  update?: Maybe<SkillsFields_Skills_Id_Update>;
};

export type SkillsFields_Skills_Id_Create = {
  __typename?: 'SkillsFields_skills_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Id_Delete = {
  __typename?: 'SkillsFields_skills_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Id_Read = {
  __typename?: 'SkillsFields_skills_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Id_Update = {
  __typename?: 'SkillsFields_skills_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Name = {
  __typename?: 'SkillsFields_skills_name';
  create?: Maybe<SkillsFields_Skills_Name_Create>;
  delete?: Maybe<SkillsFields_Skills_Name_Delete>;
  read?: Maybe<SkillsFields_Skills_Name_Read>;
  update?: Maybe<SkillsFields_Skills_Name_Update>;
};

export type SkillsFields_Skills_Name_Create = {
  __typename?: 'SkillsFields_skills_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Name_Delete = {
  __typename?: 'SkillsFields_skills_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Name_Read = {
  __typename?: 'SkillsFields_skills_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Name_Update = {
  __typename?: 'SkillsFields_skills_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Subtitle = {
  __typename?: 'SkillsFields_skills_subtitle';
  create?: Maybe<SkillsFields_Skills_Subtitle_Create>;
  delete?: Maybe<SkillsFields_Skills_Subtitle_Delete>;
  read?: Maybe<SkillsFields_Skills_Subtitle_Read>;
  update?: Maybe<SkillsFields_Skills_Subtitle_Update>;
};

export type SkillsFields_Skills_Subtitle_Create = {
  __typename?: 'SkillsFields_skills_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Subtitle_Delete = {
  __typename?: 'SkillsFields_skills_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Subtitle_Read = {
  __typename?: 'SkillsFields_skills_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Subtitle_Update = {
  __typename?: 'SkillsFields_skills_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Subtitle = {
  __typename?: 'SkillsFields_subtitle';
  create?: Maybe<SkillsFields_Subtitle_Create>;
  delete?: Maybe<SkillsFields_Subtitle_Delete>;
  read?: Maybe<SkillsFields_Subtitle_Read>;
  update?: Maybe<SkillsFields_Subtitle_Update>;
};

export type SkillsFields_Subtitle_Create = {
  __typename?: 'SkillsFields_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Subtitle_Delete = {
  __typename?: 'SkillsFields_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Subtitle_Read = {
  __typename?: 'SkillsFields_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Subtitle_Update = {
  __typename?: 'SkillsFields_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Title = {
  __typename?: 'SkillsFields_title';
  create?: Maybe<SkillsFields_Title_Create>;
  delete?: Maybe<SkillsFields_Title_Delete>;
  read?: Maybe<SkillsFields_Title_Read>;
  update?: Maybe<SkillsFields_Title_Update>;
};

export type SkillsFields_Title_Create = {
  __typename?: 'SkillsFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Title_Delete = {
  __typename?: 'SkillsFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Title_Read = {
  __typename?: 'SkillsFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Title_Update = {
  __typename?: 'SkillsFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_UpdatedAt = {
  __typename?: 'SkillsFields_updatedAt';
  create?: Maybe<SkillsFields_UpdatedAt_Create>;
  delete?: Maybe<SkillsFields_UpdatedAt_Delete>;
  read?: Maybe<SkillsFields_UpdatedAt_Read>;
  update?: Maybe<SkillsFields_UpdatedAt_Update>;
};

export type SkillsFields_UpdatedAt_Create = {
  __typename?: 'SkillsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_UpdatedAt_Delete = {
  __typename?: 'SkillsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_UpdatedAt_Read = {
  __typename?: 'SkillsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_UpdatedAt_Update = {
  __typename?: 'SkillsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsReadAccess = {
  __typename?: 'SkillsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SkillsReadDocAccess = {
  __typename?: 'SkillsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SkillsUpdateAccess = {
  __typename?: 'SkillsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SkillsUpdateDocAccess = {
  __typename?: 'SkillsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Tag = {
  __typename?: 'Tag';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Tag_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Tag_Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Tag_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Tag_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Tag_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Tag_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Tag_Where = {
  AND?: InputMaybe<Array<InputMaybe<Tag_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Tag_Where_Or>>>;
  createdAt?: InputMaybe<Tag_CreatedAt_Operator>;
  description?: InputMaybe<Tag_Description_Operator>;
  id?: InputMaybe<Tag_Id_Operator>;
  name?: InputMaybe<Tag_Name_Operator>;
  slug?: InputMaybe<Tag_Slug_Operator>;
  updatedAt?: InputMaybe<Tag_UpdatedAt_Operator>;
};

export type Tag_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Tag_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Tag_Where_Or>>>;
  createdAt?: InputMaybe<Tag_CreatedAt_Operator>;
  description?: InputMaybe<Tag_Description_Operator>;
  id?: InputMaybe<Tag_Id_Operator>;
  name?: InputMaybe<Tag_Name_Operator>;
  slug?: InputMaybe<Tag_Slug_Operator>;
  updatedAt?: InputMaybe<Tag_UpdatedAt_Operator>;
};

export type Tag_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Tag_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Tag_Where_Or>>>;
  createdAt?: InputMaybe<Tag_CreatedAt_Operator>;
  description?: InputMaybe<Tag_Description_Operator>;
  id?: InputMaybe<Tag_Id_Operator>;
  name?: InputMaybe<Tag_Name_Operator>;
  slug?: InputMaybe<Tag_Slug_Operator>;
  updatedAt?: InputMaybe<Tag_UpdatedAt_Operator>;
};

export type Tags = {
  __typename?: 'Tags';
  docs: Array<Tag>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage: Scalars['Int']['output'];
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage: Scalars['Int']['output'];
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type TagsCreateAccess = {
  __typename?: 'TagsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsCreateDocAccess = {
  __typename?: 'TagsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsDeleteAccess = {
  __typename?: 'TagsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsDeleteDocAccess = {
  __typename?: 'TagsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsDocAccessFields = {
  __typename?: 'TagsDocAccessFields';
  createdAt?: Maybe<TagsDocAccessFields_CreatedAt>;
  description?: Maybe<TagsDocAccessFields_Description>;
  name?: Maybe<TagsDocAccessFields_Name>;
  slug?: Maybe<TagsDocAccessFields_Slug>;
  updatedAt?: Maybe<TagsDocAccessFields_UpdatedAt>;
};

export type TagsDocAccessFields_CreatedAt = {
  __typename?: 'TagsDocAccessFields_createdAt';
  create?: Maybe<TagsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<TagsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<TagsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<TagsDocAccessFields_CreatedAt_Update>;
};

export type TagsDocAccessFields_CreatedAt_Create = {
  __typename?: 'TagsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'TagsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_CreatedAt_Read = {
  __typename?: 'TagsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_CreatedAt_Update = {
  __typename?: 'TagsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Description = {
  __typename?: 'TagsDocAccessFields_description';
  create?: Maybe<TagsDocAccessFields_Description_Create>;
  delete?: Maybe<TagsDocAccessFields_Description_Delete>;
  read?: Maybe<TagsDocAccessFields_Description_Read>;
  update?: Maybe<TagsDocAccessFields_Description_Update>;
};

export type TagsDocAccessFields_Description_Create = {
  __typename?: 'TagsDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Description_Delete = {
  __typename?: 'TagsDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Description_Read = {
  __typename?: 'TagsDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Description_Update = {
  __typename?: 'TagsDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Name = {
  __typename?: 'TagsDocAccessFields_name';
  create?: Maybe<TagsDocAccessFields_Name_Create>;
  delete?: Maybe<TagsDocAccessFields_Name_Delete>;
  read?: Maybe<TagsDocAccessFields_Name_Read>;
  update?: Maybe<TagsDocAccessFields_Name_Update>;
};

export type TagsDocAccessFields_Name_Create = {
  __typename?: 'TagsDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Name_Delete = {
  __typename?: 'TagsDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Name_Read = {
  __typename?: 'TagsDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Name_Update = {
  __typename?: 'TagsDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Slug = {
  __typename?: 'TagsDocAccessFields_slug';
  create?: Maybe<TagsDocAccessFields_Slug_Create>;
  delete?: Maybe<TagsDocAccessFields_Slug_Delete>;
  read?: Maybe<TagsDocAccessFields_Slug_Read>;
  update?: Maybe<TagsDocAccessFields_Slug_Update>;
};

export type TagsDocAccessFields_Slug_Create = {
  __typename?: 'TagsDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Slug_Delete = {
  __typename?: 'TagsDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Slug_Read = {
  __typename?: 'TagsDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Slug_Update = {
  __typename?: 'TagsDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_UpdatedAt = {
  __typename?: 'TagsDocAccessFields_updatedAt';
  create?: Maybe<TagsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<TagsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<TagsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<TagsDocAccessFields_UpdatedAt_Update>;
};

export type TagsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'TagsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'TagsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'TagsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'TagsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields = {
  __typename?: 'TagsFields';
  createdAt?: Maybe<TagsFields_CreatedAt>;
  description?: Maybe<TagsFields_Description>;
  name?: Maybe<TagsFields_Name>;
  slug?: Maybe<TagsFields_Slug>;
  updatedAt?: Maybe<TagsFields_UpdatedAt>;
};

export type TagsFields_CreatedAt = {
  __typename?: 'TagsFields_createdAt';
  create?: Maybe<TagsFields_CreatedAt_Create>;
  delete?: Maybe<TagsFields_CreatedAt_Delete>;
  read?: Maybe<TagsFields_CreatedAt_Read>;
  update?: Maybe<TagsFields_CreatedAt_Update>;
};

export type TagsFields_CreatedAt_Create = {
  __typename?: 'TagsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_CreatedAt_Delete = {
  __typename?: 'TagsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_CreatedAt_Read = {
  __typename?: 'TagsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_CreatedAt_Update = {
  __typename?: 'TagsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Description = {
  __typename?: 'TagsFields_description';
  create?: Maybe<TagsFields_Description_Create>;
  delete?: Maybe<TagsFields_Description_Delete>;
  read?: Maybe<TagsFields_Description_Read>;
  update?: Maybe<TagsFields_Description_Update>;
};

export type TagsFields_Description_Create = {
  __typename?: 'TagsFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Description_Delete = {
  __typename?: 'TagsFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Description_Read = {
  __typename?: 'TagsFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Description_Update = {
  __typename?: 'TagsFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Name = {
  __typename?: 'TagsFields_name';
  create?: Maybe<TagsFields_Name_Create>;
  delete?: Maybe<TagsFields_Name_Delete>;
  read?: Maybe<TagsFields_Name_Read>;
  update?: Maybe<TagsFields_Name_Update>;
};

export type TagsFields_Name_Create = {
  __typename?: 'TagsFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Name_Delete = {
  __typename?: 'TagsFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Name_Read = {
  __typename?: 'TagsFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Name_Update = {
  __typename?: 'TagsFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Slug = {
  __typename?: 'TagsFields_slug';
  create?: Maybe<TagsFields_Slug_Create>;
  delete?: Maybe<TagsFields_Slug_Delete>;
  read?: Maybe<TagsFields_Slug_Read>;
  update?: Maybe<TagsFields_Slug_Update>;
};

export type TagsFields_Slug_Create = {
  __typename?: 'TagsFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Slug_Delete = {
  __typename?: 'TagsFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Slug_Read = {
  __typename?: 'TagsFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Slug_Update = {
  __typename?: 'TagsFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_UpdatedAt = {
  __typename?: 'TagsFields_updatedAt';
  create?: Maybe<TagsFields_UpdatedAt_Create>;
  delete?: Maybe<TagsFields_UpdatedAt_Delete>;
  read?: Maybe<TagsFields_UpdatedAt_Read>;
  update?: Maybe<TagsFields_UpdatedAt_Update>;
};

export type TagsFields_UpdatedAt_Create = {
  __typename?: 'TagsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_UpdatedAt_Delete = {
  __typename?: 'TagsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_UpdatedAt_Read = {
  __typename?: 'TagsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_UpdatedAt_Update = {
  __typename?: 'TagsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsReadAccess = {
  __typename?: 'TagsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsReadDocAccess = {
  __typename?: 'TagsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsUpdateAccess = {
  __typename?: 'TagsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsUpdateDocAccess = {
  __typename?: 'TagsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  hash?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  lockUntil?: Maybe<Scalars['DateTime']['output']>;
  loginAttempts?: Maybe<Scalars['Float']['output']>;
  resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>;
  resetPasswordToken?: Maybe<Scalars['String']['output']>;
  salt?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type User_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs: Array<User>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage: Scalars['Int']['output'];
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage: Scalars['Int']['output'];
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  createdAt?: Maybe<UsersDocAccessFields_CreatedAt>;
  email?: Maybe<UsersDocAccessFields_Email>;
  updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>;
};

export type UsersDocAccessFields_CreatedAt = {
  __typename?: 'UsersDocAccessFields_createdAt';
  create?: Maybe<UsersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt = {
  __typename?: 'UsersDocAccessFields_updatedAt';
  create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UsersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UsersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UsersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields = {
  __typename?: 'UsersFields';
  createdAt?: Maybe<UsersFields_CreatedAt>;
  email?: Maybe<UsersFields_Email>;
  updatedAt?: Maybe<UsersFields_UpdatedAt>;
};

export type UsersFields_CreatedAt = {
  __typename?: 'UsersFields_createdAt';
  create?: Maybe<UsersFields_CreatedAt_Create>;
  delete?: Maybe<UsersFields_CreatedAt_Delete>;
  read?: Maybe<UsersFields_CreatedAt_Read>;
  update?: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
  __typename?: 'UsersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Delete = {
  __typename?: 'UsersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Read = {
  __typename?: 'UsersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Update = {
  __typename?: 'UsersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email = {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_Email_Create>;
  delete?: Maybe<UsersFields_Email_Delete>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt = {
  __typename?: 'UsersFields_updatedAt';
  create?: Maybe<UsersFields_UpdatedAt_Create>;
  delete?: Maybe<UsersFields_UpdatedAt_Delete>;
  read?: Maybe<UsersFields_UpdatedAt_Read>;
  update?: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
  __typename?: 'UsersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Delete = {
  __typename?: 'UsersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Read = {
  __typename?: 'UsersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Update = {
  __typename?: 'UsersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type WorkButton = {
  __typename?: 'WorkButton';
  buttons: Array<WorkButton_Buttons>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type WorkButton_Buttons = {
  __typename?: 'WorkButton_Buttons';
  id?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type WorkButtonsDocAccessFields = {
  __typename?: 'WorkButtonsDocAccessFields';
  buttons?: Maybe<WorkButtonsDocAccessFields_Buttons>;
  createdAt?: Maybe<WorkButtonsDocAccessFields_CreatedAt>;
  updatedAt?: Maybe<WorkButtonsDocAccessFields_UpdatedAt>;
};

export type WorkButtonsDocAccessFields_Buttons = {
  __typename?: 'WorkButtonsDocAccessFields_buttons';
  create?: Maybe<WorkButtonsDocAccessFields_Buttons_Create>;
  delete?: Maybe<WorkButtonsDocAccessFields_Buttons_Delete>;
  fields?: Maybe<WorkButtonsDocAccessFields_Buttons_Fields>;
  read?: Maybe<WorkButtonsDocAccessFields_Buttons_Read>;
  update?: Maybe<WorkButtonsDocAccessFields_Buttons_Update>;
};

export type WorkButtonsDocAccessFields_Buttons_Create = {
  __typename?: 'WorkButtonsDocAccessFields_buttons_Create';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Delete = {
  __typename?: 'WorkButtonsDocAccessFields_buttons_Delete';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Fields = {
  __typename?: 'WorkButtonsDocAccessFields_buttons_Fields';
  id?: Maybe<WorkButtonsDocAccessFields_Buttons_Id>;
  text?: Maybe<WorkButtonsDocAccessFields_Buttons_Text>;
  url?: Maybe<WorkButtonsDocAccessFields_Buttons_Url>;
};

export type WorkButtonsDocAccessFields_Buttons_Read = {
  __typename?: 'WorkButtonsDocAccessFields_buttons_Read';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Update = {
  __typename?: 'WorkButtonsDocAccessFields_buttons_Update';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Id = {
  __typename?: 'WorkButtonsDocAccessFields_buttons_id';
  create?: Maybe<WorkButtonsDocAccessFields_Buttons_Id_Create>;
  delete?: Maybe<WorkButtonsDocAccessFields_Buttons_Id_Delete>;
  read?: Maybe<WorkButtonsDocAccessFields_Buttons_Id_Read>;
  update?: Maybe<WorkButtonsDocAccessFields_Buttons_Id_Update>;
};

export type WorkButtonsDocAccessFields_Buttons_Id_Create = {
  __typename?: 'WorkButtonsDocAccessFields_buttons_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Id_Delete = {
  __typename?: 'WorkButtonsDocAccessFields_buttons_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Id_Read = {
  __typename?: 'WorkButtonsDocAccessFields_buttons_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Id_Update = {
  __typename?: 'WorkButtonsDocAccessFields_buttons_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Text = {
  __typename?: 'WorkButtonsDocAccessFields_buttons_text';
  create?: Maybe<WorkButtonsDocAccessFields_Buttons_Text_Create>;
  delete?: Maybe<WorkButtonsDocAccessFields_Buttons_Text_Delete>;
  read?: Maybe<WorkButtonsDocAccessFields_Buttons_Text_Read>;
  update?: Maybe<WorkButtonsDocAccessFields_Buttons_Text_Update>;
};

export type WorkButtonsDocAccessFields_Buttons_Text_Create = {
  __typename?: 'WorkButtonsDocAccessFields_buttons_text_Create';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Text_Delete = {
  __typename?: 'WorkButtonsDocAccessFields_buttons_text_Delete';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Text_Read = {
  __typename?: 'WorkButtonsDocAccessFields_buttons_text_Read';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Text_Update = {
  __typename?: 'WorkButtonsDocAccessFields_buttons_text_Update';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Url = {
  __typename?: 'WorkButtonsDocAccessFields_buttons_url';
  create?: Maybe<WorkButtonsDocAccessFields_Buttons_Url_Create>;
  delete?: Maybe<WorkButtonsDocAccessFields_Buttons_Url_Delete>;
  read?: Maybe<WorkButtonsDocAccessFields_Buttons_Url_Read>;
  update?: Maybe<WorkButtonsDocAccessFields_Buttons_Url_Update>;
};

export type WorkButtonsDocAccessFields_Buttons_Url_Create = {
  __typename?: 'WorkButtonsDocAccessFields_buttons_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Url_Delete = {
  __typename?: 'WorkButtonsDocAccessFields_buttons_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Url_Read = {
  __typename?: 'WorkButtonsDocAccessFields_buttons_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Url_Update = {
  __typename?: 'WorkButtonsDocAccessFields_buttons_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_CreatedAt = {
  __typename?: 'WorkButtonsDocAccessFields_createdAt';
  create?: Maybe<WorkButtonsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<WorkButtonsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<WorkButtonsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<WorkButtonsDocAccessFields_CreatedAt_Update>;
};

export type WorkButtonsDocAccessFields_CreatedAt_Create = {
  __typename?: 'WorkButtonsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'WorkButtonsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_CreatedAt_Read = {
  __typename?: 'WorkButtonsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_CreatedAt_Update = {
  __typename?: 'WorkButtonsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_UpdatedAt = {
  __typename?: 'WorkButtonsDocAccessFields_updatedAt';
  create?: Maybe<WorkButtonsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<WorkButtonsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<WorkButtonsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<WorkButtonsDocAccessFields_UpdatedAt_Update>;
};

export type WorkButtonsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'WorkButtonsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'WorkButtonsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'WorkButtonsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'WorkButtonsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields = {
  __typename?: 'WorkButtonsFields';
  buttons?: Maybe<WorkButtonsFields_Buttons>;
  createdAt?: Maybe<WorkButtonsFields_CreatedAt>;
  updatedAt?: Maybe<WorkButtonsFields_UpdatedAt>;
};

export type WorkButtonsFields_Buttons = {
  __typename?: 'WorkButtonsFields_buttons';
  create?: Maybe<WorkButtonsFields_Buttons_Create>;
  delete?: Maybe<WorkButtonsFields_Buttons_Delete>;
  fields?: Maybe<WorkButtonsFields_Buttons_Fields>;
  read?: Maybe<WorkButtonsFields_Buttons_Read>;
  update?: Maybe<WorkButtonsFields_Buttons_Update>;
};

export type WorkButtonsFields_Buttons_Create = {
  __typename?: 'WorkButtonsFields_buttons_Create';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Delete = {
  __typename?: 'WorkButtonsFields_buttons_Delete';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Fields = {
  __typename?: 'WorkButtonsFields_buttons_Fields';
  id?: Maybe<WorkButtonsFields_Buttons_Id>;
  text?: Maybe<WorkButtonsFields_Buttons_Text>;
  url?: Maybe<WorkButtonsFields_Buttons_Url>;
};

export type WorkButtonsFields_Buttons_Read = {
  __typename?: 'WorkButtonsFields_buttons_Read';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Update = {
  __typename?: 'WorkButtonsFields_buttons_Update';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Id = {
  __typename?: 'WorkButtonsFields_buttons_id';
  create?: Maybe<WorkButtonsFields_Buttons_Id_Create>;
  delete?: Maybe<WorkButtonsFields_Buttons_Id_Delete>;
  read?: Maybe<WorkButtonsFields_Buttons_Id_Read>;
  update?: Maybe<WorkButtonsFields_Buttons_Id_Update>;
};

export type WorkButtonsFields_Buttons_Id_Create = {
  __typename?: 'WorkButtonsFields_buttons_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Id_Delete = {
  __typename?: 'WorkButtonsFields_buttons_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Id_Read = {
  __typename?: 'WorkButtonsFields_buttons_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Id_Update = {
  __typename?: 'WorkButtonsFields_buttons_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Text = {
  __typename?: 'WorkButtonsFields_buttons_text';
  create?: Maybe<WorkButtonsFields_Buttons_Text_Create>;
  delete?: Maybe<WorkButtonsFields_Buttons_Text_Delete>;
  read?: Maybe<WorkButtonsFields_Buttons_Text_Read>;
  update?: Maybe<WorkButtonsFields_Buttons_Text_Update>;
};

export type WorkButtonsFields_Buttons_Text_Create = {
  __typename?: 'WorkButtonsFields_buttons_text_Create';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Text_Delete = {
  __typename?: 'WorkButtonsFields_buttons_text_Delete';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Text_Read = {
  __typename?: 'WorkButtonsFields_buttons_text_Read';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Text_Update = {
  __typename?: 'WorkButtonsFields_buttons_text_Update';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Url = {
  __typename?: 'WorkButtonsFields_buttons_url';
  create?: Maybe<WorkButtonsFields_Buttons_Url_Create>;
  delete?: Maybe<WorkButtonsFields_Buttons_Url_Delete>;
  read?: Maybe<WorkButtonsFields_Buttons_Url_Read>;
  update?: Maybe<WorkButtonsFields_Buttons_Url_Update>;
};

export type WorkButtonsFields_Buttons_Url_Create = {
  __typename?: 'WorkButtonsFields_buttons_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Url_Delete = {
  __typename?: 'WorkButtonsFields_buttons_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Url_Read = {
  __typename?: 'WorkButtonsFields_buttons_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Url_Update = {
  __typename?: 'WorkButtonsFields_buttons_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_CreatedAt = {
  __typename?: 'WorkButtonsFields_createdAt';
  create?: Maybe<WorkButtonsFields_CreatedAt_Create>;
  delete?: Maybe<WorkButtonsFields_CreatedAt_Delete>;
  read?: Maybe<WorkButtonsFields_CreatedAt_Read>;
  update?: Maybe<WorkButtonsFields_CreatedAt_Update>;
};

export type WorkButtonsFields_CreatedAt_Create = {
  __typename?: 'WorkButtonsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_CreatedAt_Delete = {
  __typename?: 'WorkButtonsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_CreatedAt_Read = {
  __typename?: 'WorkButtonsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_CreatedAt_Update = {
  __typename?: 'WorkButtonsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_UpdatedAt = {
  __typename?: 'WorkButtonsFields_updatedAt';
  create?: Maybe<WorkButtonsFields_UpdatedAt_Create>;
  delete?: Maybe<WorkButtonsFields_UpdatedAt_Delete>;
  read?: Maybe<WorkButtonsFields_UpdatedAt_Read>;
  update?: Maybe<WorkButtonsFields_UpdatedAt_Update>;
};

export type WorkButtonsFields_UpdatedAt_Create = {
  __typename?: 'WorkButtonsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_UpdatedAt_Delete = {
  __typename?: 'WorkButtonsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_UpdatedAt_Read = {
  __typename?: 'WorkButtonsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_UpdatedAt_Update = {
  __typename?: 'WorkButtonsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type WorkButtonsReadAccess = {
  __typename?: 'WorkButtonsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type WorkButtonsReadDocAccess = {
  __typename?: 'WorkButtonsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type WorkButtonsUpdateAccess = {
  __typename?: 'WorkButtonsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type WorkButtonsUpdateDocAccess = {
  __typename?: 'WorkButtonsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AllMedia = {
  __typename?: 'allMedia';
  docs: Array<Media>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage: Scalars['Int']['output'];
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage: Scalars['Int']['output'];
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Case_StudiesAccess = {
  __typename?: 'case_studiesAccess';
  create?: Maybe<CaseStudiesCreateAccess>;
  delete?: Maybe<CaseStudiesDeleteAccess>;
  fields?: Maybe<CaseStudiesFields>;
  read?: Maybe<CaseStudiesReadAccess>;
  update?: Maybe<CaseStudiesUpdateAccess>;
};

export type Case_StudiesDocAccess = {
  __typename?: 'case_studiesDocAccess';
  create?: Maybe<CaseStudiesCreateDocAccess>;
  delete?: Maybe<CaseStudiesDeleteDocAccess>;
  fields?: Maybe<CaseStudiesDocAccessFields>;
  read?: Maybe<CaseStudiesReadDocAccess>;
  update?: Maybe<CaseStudiesUpdateDocAccess>;
};

export type Contact_FormsAccess = {
  __typename?: 'contact_formsAccess';
  create?: Maybe<ContactFormsCreateAccess>;
  delete?: Maybe<ContactFormsDeleteAccess>;
  fields?: Maybe<ContactFormsFields>;
  read?: Maybe<ContactFormsReadAccess>;
  update?: Maybe<ContactFormsUpdateAccess>;
};

export type Contact_FormsDocAccess = {
  __typename?: 'contact_formsDocAccess';
  create?: Maybe<ContactFormsCreateDocAccess>;
  delete?: Maybe<ContactFormsDeleteDocAccess>;
  fields?: Maybe<ContactFormsDocAccessFields>;
  read?: Maybe<ContactFormsReadDocAccess>;
  update?: Maybe<ContactFormsUpdateDocAccess>;
};

export type CountCaseStudies = {
  __typename?: 'countCaseStudies';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountContactForms = {
  __typename?: 'countContactForms';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountExperiences = {
  __typename?: 'countExperiences';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadLockedDocuments = {
  __typename?: 'countPayloadLockedDocuments';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadPreferences = {
  __typename?: 'countPayloadPreferences';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountTags = {
  __typename?: 'countTags';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountUsers = {
  __typename?: 'countUsers';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountallMedia = {
  __typename?: 'countallMedia';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type ExperiencesAccess = {
  __typename?: 'experiencesAccess';
  create?: Maybe<ExperiencesCreateAccess>;
  delete?: Maybe<ExperiencesDeleteAccess>;
  fields?: Maybe<ExperiencesFields>;
  read?: Maybe<ExperiencesReadAccess>;
  update?: Maybe<ExperiencesUpdateAccess>;
};

export type ExperiencesDocAccess = {
  __typename?: 'experiencesDocAccess';
  create?: Maybe<ExperiencesCreateDocAccess>;
  delete?: Maybe<ExperiencesDeleteDocAccess>;
  fields?: Maybe<ExperiencesDocAccessFields>;
  read?: Maybe<ExperiencesReadDocAccess>;
  update?: Maybe<ExperiencesUpdateDocAccess>;
};

export type Featured_Case_StudiesAccess = {
  __typename?: 'featured_case_studiesAccess';
  fields?: Maybe<FeaturedCaseStudiesFields>;
  read?: Maybe<FeaturedCaseStudiesReadAccess>;
  update?: Maybe<FeaturedCaseStudiesUpdateAccess>;
};

export type Featured_Case_StudiesDocAccess = {
  __typename?: 'featured_case_studiesDocAccess';
  fields?: Maybe<FeaturedCaseStudiesDocAccessFields>;
  read?: Maybe<FeaturedCaseStudiesReadDocAccess>;
  update?: Maybe<FeaturedCaseStudiesUpdateDocAccess>;
};

export type Featured_ExperiencesAccess = {
  __typename?: 'featured_experiencesAccess';
  fields?: Maybe<FeaturedExperiencesFields>;
  read?: Maybe<FeaturedExperiencesReadAccess>;
  update?: Maybe<FeaturedExperiencesUpdateAccess>;
};

export type Featured_ExperiencesDocAccess = {
  __typename?: 'featured_experiencesDocAccess';
  fields?: Maybe<FeaturedExperiencesDocAccessFields>;
  read?: Maybe<FeaturedExperiencesReadDocAccess>;
  update?: Maybe<FeaturedExperiencesUpdateDocAccess>;
};

export type FooterAccess = {
  __typename?: 'footerAccess';
  fields?: Maybe<FooterFields>;
  read?: Maybe<FooterReadAccess>;
  update?: Maybe<FooterUpdateAccess>;
};

export type FooterDocAccess = {
  __typename?: 'footerDocAccess';
  fields?: Maybe<FooterDocAccessFields>;
  read?: Maybe<FooterReadDocAccess>;
  update?: Maybe<FooterUpdateDocAccess>;
};

export type HeroAccess = {
  __typename?: 'heroAccess';
  fields?: Maybe<HeroFields>;
  read?: Maybe<HeroReadAccess>;
  update?: Maybe<HeroUpdateAccess>;
};

export type HeroDocAccess = {
  __typename?: 'heroDocAccess';
  fields?: Maybe<HeroDocAccessFields>;
  read?: Maybe<HeroReadDocAccess>;
  update?: Maybe<HeroUpdateDocAccess>;
};

export type JournalAccess = {
  __typename?: 'journalAccess';
  fields?: Maybe<JournalFields>;
  read?: Maybe<JournalReadAccess>;
  update?: Maybe<JournalUpdateAccess>;
};

export type JournalDocAccess = {
  __typename?: 'journalDocAccess';
  fields?: Maybe<JournalDocAccessFields>;
  read?: Maybe<JournalReadDocAccess>;
  update?: Maybe<JournalUpdateDocAccess>;
};

export type MediaAccess = {
  __typename?: 'mediaAccess';
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
  __typename?: 'mediaDocAccess';
  create?: Maybe<MediaCreateDocAccess>;
  delete?: Maybe<MediaDeleteDocAccess>;
  fields?: Maybe<MediaDocAccessFields>;
  read?: Maybe<MediaReadDocAccess>;
  update?: Maybe<MediaUpdateDocAccess>;
};

export type MutationCaseStudyInput = {
  content: Scalars['JSON']['input'];
  createdAt?: InputMaybe<Scalars['String']['input']>;
  experience?: InputMaybe<Scalars['Int']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  illustration?: InputMaybe<Scalars['Int']['input']>;
  meta?: InputMaybe<MutationCaseStudy_MetaInput>;
  publishedAt?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  summary: Scalars['JSON']['input'];
  tags?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCaseStudyUpdateInput = {
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  experience?: InputMaybe<Scalars['Int']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  illustration?: InputMaybe<Scalars['Int']['input']>;
  meta?: InputMaybe<MutationCaseStudyUpdate_MetaInput>;
  publishedAt?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['JSON']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCaseStudyUpdate_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCaseStudy_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationContactFormInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  message: Scalars['String']['input'];
  name: Scalars['String']['input'];
  status?: InputMaybe<ContactForm_Status_MutationInput>;
  subject: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationContactFormUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ContactFormUpdate_Status_MutationInput>;
  subject?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationExperienceInput = {
  coverImage?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<MutationExperience_MetaInput>;
  role?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  summary: Scalars['JSON']['input'];
  tags?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  thumbnailImage?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationExperienceUpdateInput = {
  coverImage?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<MutationExperienceUpdate_MetaInput>;
  role?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['JSON']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  thumbnailImage?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationExperienceUpdate_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationExperience_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFeaturedCaseStudyInput = {
  caseStudies?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFeaturedExperienceInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  experiences?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  subtitle: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFooterInput = {
  bottomText: Scalars['String']['input'];
  buttonText: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  title1: Scalars['String']['input'];
  title2: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHeroInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['JSON']['input'];
  meta?: InputMaybe<MutationHero_MetaInput>;
  name: Scalars['String']['input'];
  taglines?: InputMaybe<Array<MutationHero_TaglinesInput>>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHero_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHero_TaglinesInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
};

export type MutationJournalInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  meta?: InputMaybe<MutationJournal_MetaInput>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationJournal_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationMediaInput = {
  alt: Scalars['String']['input'];
  blurDataURL?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<MutationMedia_SizesInput>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  blurDataURL?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<MutationMediaUpdate_SizesInput>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_SizesInput = {
  card?: InputMaybe<MutationMediaUpdate_Sizes_CardInput>;
  feature?: InputMaybe<MutationMediaUpdate_Sizes_FeatureInput>;
  hero?: InputMaybe<MutationMediaUpdate_Sizes_HeroInput>;
  icon?: InputMaybe<MutationMediaUpdate_Sizes_IconInput>;
  thumbnail?: InputMaybe<MutationMediaUpdate_Sizes_ThumbnailInput>;
};

export type MutationMediaUpdate_Sizes_CardInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_FeatureInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_HeroInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_IconInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_SizesInput = {
  card?: InputMaybe<MutationMedia_Sizes_CardInput>;
  feature?: InputMaybe<MutationMedia_Sizes_FeatureInput>;
  hero?: InputMaybe<MutationMedia_Sizes_HeroInput>;
  icon?: InputMaybe<MutationMedia_Sizes_IconInput>;
  thumbnail?: InputMaybe<MutationMedia_Sizes_ThumbnailInput>;
};

export type MutationMedia_Sizes_CardInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_FeatureInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_HeroInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_IconInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationPayloadLockedDocumentInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadLockedDocument_UserRelationshipInput>;
};

export type MutationPayloadLockedDocumentUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInput>;
};

export type MutationPayloadPreferenceInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationPayloadPreferenceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationSkillInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Array<MutationSkill_SkillsInput>>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSkill_SkillsInput = {
  description: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  subtitle: Scalars['String']['input'];
};

export type MutationTagInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTagUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password: Scalars['String']['input'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationWorkButtonInput = {
  buttons?: InputMaybe<Array<MutationWorkButton_ButtonsInput>>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationWorkButton_ButtonsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type Payload_Locked_DocumentsAccess = {
  __typename?: 'payload_locked_documentsAccess';
  create?: Maybe<PayloadLockedDocumentsCreateAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteAccess>;
  fields?: Maybe<PayloadLockedDocumentsFields>;
  read?: Maybe<PayloadLockedDocumentsReadAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateAccess>;
};

export type Payload_Locked_DocumentsDocAccess = {
  __typename?: 'payload_locked_documentsDocAccess';
  create?: Maybe<PayloadLockedDocumentsCreateDocAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteDocAccess>;
  fields?: Maybe<PayloadLockedDocumentsDocAccessFields>;
  read?: Maybe<PayloadLockedDocumentsReadDocAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateDocAccess>;
};

export type Payload_PreferencesAccess = {
  __typename?: 'payload_preferencesAccess';
  create?: Maybe<PayloadPreferencesCreateAccess>;
  delete?: Maybe<PayloadPreferencesDeleteAccess>;
  fields?: Maybe<PayloadPreferencesFields>;
  read?: Maybe<PayloadPreferencesReadAccess>;
  update?: Maybe<PayloadPreferencesUpdateAccess>;
};

export type Payload_PreferencesDocAccess = {
  __typename?: 'payload_preferencesDocAccess';
  create?: Maybe<PayloadPreferencesCreateDocAccess>;
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields?: Maybe<PayloadPreferencesDocAccessFields>;
  read?: Maybe<PayloadPreferencesReadDocAccess>;
  update?: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type SkillsAccess = {
  __typename?: 'skillsAccess';
  fields?: Maybe<SkillsFields>;
  read?: Maybe<SkillsReadAccess>;
  update?: Maybe<SkillsUpdateAccess>;
};

export type SkillsDocAccess = {
  __typename?: 'skillsDocAccess';
  fields?: Maybe<SkillsDocAccessFields>;
  read?: Maybe<SkillsReadDocAccess>;
  update?: Maybe<SkillsUpdateDocAccess>;
};

export type TagsAccess = {
  __typename?: 'tagsAccess';
  create?: Maybe<TagsCreateAccess>;
  delete?: Maybe<TagsDeleteAccess>;
  fields?: Maybe<TagsFields>;
  read?: Maybe<TagsReadAccess>;
  update?: Maybe<TagsUpdateAccess>;
};

export type TagsDocAccess = {
  __typename?: 'tagsDocAccess';
  create?: Maybe<TagsCreateDocAccess>;
  delete?: Maybe<TagsDeleteDocAccess>;
  fields?: Maybe<TagsDocAccessFields>;
  read?: Maybe<TagsReadDocAccess>;
  update?: Maybe<TagsUpdateDocAccess>;
};

export type UsersAccess = {
  __typename?: 'usersAccess';
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  __typename?: 'usersDocAccess';
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  __typename?: 'usersJWT';
  collection: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
};

export type UsersLoginResult = {
  __typename?: 'usersLoginResult';
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersMe = {
  __typename?: 'usersMe';
  collection?: Maybe<Scalars['String']['output']>;
  exp?: Maybe<Scalars['Int']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']['output']>;
  refreshedToken?: Maybe<Scalars['String']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: 'usersResetPassword';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type Work_ButtonsAccess = {
  __typename?: 'work_buttonsAccess';
  fields?: Maybe<WorkButtonsFields>;
  read?: Maybe<WorkButtonsReadAccess>;
  update?: Maybe<WorkButtonsUpdateAccess>;
};

export type Work_ButtonsDocAccess = {
  __typename?: 'work_buttonsDocAccess';
  fields?: Maybe<WorkButtonsDocAccessFields>;
  read?: Maybe<WorkButtonsReadDocAccess>;
  update?: Maybe<WorkButtonsUpdateDocAccess>;
};

export type MediaFragmentFragment = { __typename?: 'Media', id: number, alt: string, caption?: string | null, blurDataURL?: string | null, focalX?: number | null, focalY?: number | null, url?: string | null, width?: number | null, height?: number | null, sizes?: { __typename?: 'Media_Sizes', icon?: { __typename?: 'Media_Sizes_Icon', url?: string | null, width?: number | null, height?: number | null } | null, thumbnail?: { __typename?: 'Media_Sizes_Thumbnail', url?: string | null, width?: number | null, height?: number | null } | null, card?: { __typename?: 'Media_Sizes_Card', url?: string | null, width?: number | null, height?: number | null } | null, feature?: { __typename?: 'Media_Sizes_Feature', url?: string | null, width?: number | null, height?: number | null } | null, hero?: { __typename?: 'Media_Sizes_Hero', url?: string | null, width?: number | null, height?: number | null } | null } | null } & { ' $fragmentName'?: 'MediaFragmentFragment' };

export type CreateContactFormMutationVariables = Exact<{
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  subject: Scalars['String']['input'];
  message: Scalars['String']['input'];
}>;


export type CreateContactFormMutation = { __typename?: 'Mutation', createContactForm?: { __typename?: 'ContactForm', id: number, name: string, email: any, subject: string, message: string, status?: ContactForm_Status | null } | null };

export type GetAllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTagsQuery = { __typename?: 'Query', CaseStudies?: { __typename?: 'CaseStudies', docs: Array<{ __typename?: 'CaseStudy', updatedAt?: any | null, tags: Array<{ __typename?: 'Tag', name: string, slug: string, id: number }> }> } | null };

export type GetCaseStudiesByParamsQueryVariables = Exact<{
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>> | InputMaybe<Scalars['JSON']['input']>>;
  experience?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>> | InputMaybe<Scalars['JSON']['input']>>;
}>;


export type GetCaseStudiesByParamsQuery = { __typename?: 'Query', CaseStudies?: { __typename?: 'CaseStudies', offset?: number | null, totalDocs: number, pagingCounter: number, docs: Array<{ __typename?: 'CaseStudy', id: number, slug?: string | null, title: string, summary: any, updatedAt?: any | null, tags: Array<{ __typename?: 'Tag', name: string, id: number }>, illustration?: (
        { __typename?: 'Media' }
        & { ' $fragmentRefs'?: { 'MediaFragmentFragment': MediaFragmentFragment } }
      ) | null, experience: { __typename?: 'Experience', role?: string | null, title: string, slug?: string | null } }> } | null, Journal?: { __typename?: 'Journal', title: string, subtitle?: string | null, description: string } | null };

export type GetCaseStudyBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetCaseStudyBySlugQuery = { __typename?: 'Query', CaseStudies?: { __typename?: 'CaseStudies', docs: Array<{ __typename?: 'CaseStudy', title: string, content: any, updatedAt?: any | null, experience: { __typename?: 'Experience', title: string, role?: string | null, startDate?: any | null, endDate?: any | null, id: number }, tags: Array<{ __typename?: 'Tag', name: string, id: number }>, illustration?: (
        { __typename?: 'Media' }
        & { ' $fragmentRefs'?: { 'MediaFragmentFragment': MediaFragmentFragment } }
      ) | null }> } | null };

export type GetContactFormsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContactFormsQuery = { __typename?: 'Query', ContactForms?: { __typename?: 'ContactForms', totalDocs: number, page: number, totalPages: number, docs: Array<{ __typename?: 'ContactForm', id: number, name: string, email: any, subject: string, message: string, status?: ContactForm_Status | null, createdAt?: any | null }> } | null };

export type GetExperienceBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetExperienceBySlugQuery = { __typename?: 'Query', Experiences?: { __typename?: 'Experiences', docs: Array<{ __typename?: 'Experience', id: number, role?: string | null, slug?: string | null, startDate?: any | null, summary: any, title: string, endDate?: any | null, coverImage?: (
        { __typename?: 'Media' }
        & { ' $fragmentRefs'?: { 'MediaFragmentFragment': MediaFragmentFragment } }
      ) | null, tags: Array<{ __typename?: 'Tag', id: number, name: string }> }> } | null };

export type GetFeaturedCaseStudiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFeaturedCaseStudiesQuery = { __typename?: 'Query', FeaturedCaseStudy?: { __typename?: 'FeaturedCaseStudy', title: string, subtitle?: string | null, description: string, caseStudies: Array<{ __typename?: 'CaseStudy', title: string, slug?: string | null, summary: any, illustration?: (
        { __typename?: 'Media' }
        & { ' $fragmentRefs'?: { 'MediaFragmentFragment': MediaFragmentFragment } }
      ) | null, tags: Array<{ __typename?: 'Tag', name: string, id: number }> }> } | null };

export type GetFeaturedExperiencesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFeaturedExperiencesQuery = { __typename?: 'Query', FeaturedExperience?: { __typename?: 'FeaturedExperience', description?: string | null, title: string, subtitle: string, experiences: Array<{ __typename?: 'Experience', id: number, title: string, slug?: string | null, endDate?: any | null, startDate?: any | null, role?: string | null, thumbnailImage?: (
        { __typename?: 'Media' }
        & { ' $fragmentRefs'?: { 'MediaFragmentFragment': MediaFragmentFragment } }
      ) | null }> } | null };

export type GetFooterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFooterQuery = { __typename?: 'Query', Footer?: { __typename?: 'Footer', title1: string, title2: string, description: string, buttonText: string, bottomText: string } | null };

export type GetHeroQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHeroQuery = { __typename?: 'Query', Hero?: { __typename?: 'Hero', name: string, title: string, description: any, taglines: Array<{ __typename?: 'Hero_Taglines', text?: string | null }> } | null };

export type GetSkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSkillsQuery = { __typename?: 'Query', Skill?: { __typename?: 'Skill', title: string, subtitle?: string | null, skills: Array<{ __typename?: 'Skill_Skills', name?: string | null, description?: any | null }> } | null };

export type GetWorkButtonsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWorkButtonsQuery = { __typename?: 'Query', WorkButton?: { __typename?: 'WorkButton', buttons: Array<{ __typename?: 'WorkButton_Buttons', text?: string | null, url?: string | null }> } | null };

export type GetAllCaseStudiesSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCaseStudiesSlugsQuery = { __typename?: 'Query', CaseStudies?: { __typename?: 'CaseStudies', docs: Array<{ __typename?: 'CaseStudy', slug?: string | null, updatedAt?: any | null }> } | null };

export type GetAllExperiencesSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllExperiencesSlugsQuery = { __typename?: 'Query', Experiences?: { __typename?: 'Experiences', docs: Array<{ __typename?: 'Experience', slug?: string | null, updatedAt?: any | null }> } | null };

export type GetCaseStudyBySlugMetaQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetCaseStudyBySlugMetaQuery = { __typename?: 'Query', CaseStudies?: { __typename?: 'CaseStudies', docs: Array<{ __typename?: 'CaseStudy', meta?: { __typename?: 'CaseStudy_Meta', title?: string | null, description?: string | null, image?: { __typename?: 'Media', url?: string | null } | null } | null }> } | null };

export type GetExperienceBySlugMetaQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetExperienceBySlugMetaQuery = { __typename?: 'Query', Experiences?: { __typename?: 'Experiences', docs: Array<{ __typename?: 'Experience', meta?: { __typename?: 'Experience_Meta', title?: string | null, description?: string | null, image?: { __typename?: 'Media', url?: string | null } | null } | null }> } | null };

export type GetHeroMetaQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHeroMetaQuery = { __typename?: 'Query', Hero?: { __typename?: 'Hero', meta?: { __typename?: 'Hero_Meta', title?: string | null, description?: string | null, image?: { __typename?: 'Media', url?: string | null } | null } | null } | null };

export type GetJournalMetaQueryVariables = Exact<{ [key: string]: never; }>;


export type GetJournalMetaQuery = { __typename?: 'Query', Journal?: { __typename?: 'Journal', meta?: { __typename?: 'Journal_Meta', title?: string | null, description?: string | null, image?: { __typename?: 'Media', alt: string, url?: string | null } | null } | null } | null };

export const MediaFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataURL"}},{"kind":"Field","name":{"kind":"Name","value":"focalX"}},{"kind":"Field","name":{"kind":"Name","value":"focalY"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"feature"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<MediaFragmentFragment, unknown>;
export const CreateContactFormDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateContactForm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subject"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"message"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createContactForm"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"subject"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subject"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"message"},"value":{"kind":"Variable","name":{"kind":"Name","value":"message"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<CreateContactFormMutation, CreateContactFormMutationVariables>;
export const GetAllTagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CaseStudies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllTagsQuery, GetAllTagsQueryVariables>;
export const GetCaseStudiesByParamsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCaseStudiesByParams"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tagIds"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"experience"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CaseStudies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tags"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tagIds"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"experience"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"experience"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"illustration"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"experience"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagingCounter"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Journal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataURL"}},{"kind":"Field","name":{"kind":"Name","value":"focalX"}},{"kind":"Field","name":{"kind":"Name","value":"focalY"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"feature"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<GetCaseStudiesByParamsQuery, GetCaseStudiesByParamsQueryVariables>;
export const GetCaseStudyBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCaseStudyBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CaseStudies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"experience"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"illustration"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataURL"}},{"kind":"Field","name":{"kind":"Name","value":"focalX"}},{"kind":"Field","name":{"kind":"Name","value":"focalY"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"feature"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<GetCaseStudyBySlugQuery, GetCaseStudyBySlugQueryVariables>;
export const GetContactFormsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetContactForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ContactForms"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<GetContactFormsQuery, GetContactFormsQueryVariables>;
export const GetExperienceBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetExperienceBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Experiences"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataURL"}},{"kind":"Field","name":{"kind":"Name","value":"focalX"}},{"kind":"Field","name":{"kind":"Name","value":"focalY"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"feature"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<GetExperienceBySlugQuery, GetExperienceBySlugQueryVariables>;
export const GetFeaturedCaseStudiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFeaturedCaseStudies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"FeaturedCaseStudy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"caseStudies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"illustration"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataURL"}},{"kind":"Field","name":{"kind":"Name","value":"focalX"}},{"kind":"Field","name":{"kind":"Name","value":"focalY"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"feature"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<GetFeaturedCaseStudiesQuery, GetFeaturedCaseStudiesQueryVariables>;
export const GetFeaturedExperiencesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFeaturedExperiences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"FeaturedExperience"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"experiences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataURL"}},{"kind":"Field","name":{"kind":"Name","value":"focalX"}},{"kind":"Field","name":{"kind":"Name","value":"focalY"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"feature"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<GetFeaturedExperiencesQuery, GetFeaturedExperiencesQueryVariables>;
export const GetFooterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFooter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Footer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title1"}},{"kind":"Field","name":{"kind":"Name","value":"title2"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"bottomText"}}]}}]}}]} as unknown as DocumentNode<GetFooterQuery, GetFooterQueryVariables>;
export const GetHeroDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"taglines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetHeroQuery, GetHeroQueryVariables>;
export const GetSkillsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSkills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Skill"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<GetSkillsQuery, GetSkillsQueryVariables>;
export const GetWorkButtonsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWorkButtons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"WorkButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"buttons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<GetWorkButtonsQuery, GetWorkButtonsQueryVariables>;
export const GetAllCaseStudiesSlugsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllCaseStudiesSlugs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CaseStudies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllCaseStudiesSlugsQuery, GetAllCaseStudiesSlugsQueryVariables>;
export const GetAllExperiencesSlugsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllExperiencesSlugs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Experiences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllExperiencesSlugsQuery, GetAllExperiencesSlugsQueryVariables>;
export const GetCaseStudyBySlugMetaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCaseStudyBySlugMeta"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CaseStudies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCaseStudyBySlugMetaQuery, GetCaseStudyBySlugMetaQueryVariables>;
export const GetExperienceBySlugMetaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetExperienceBySlugMeta"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Experiences"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetExperienceBySlugMetaQuery, GetExperienceBySlugMetaQueryVariables>;
export const GetHeroMetaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHeroMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetHeroMetaQuery, GetHeroMetaQueryVariables>;
export const GetJournalMetaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetJournalMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Journal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetJournalMetaQuery, GetJournalMetaQueryVariables>;