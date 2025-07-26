import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  EmailAddress: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
};

export type Access = {
  readonly __typename?: 'Access';
  readonly canAccessAdmin: Scalars['Boolean']['output'];
  readonly case_studies?: Maybe<Case_StudiesAccess>;
  readonly contact_forms?: Maybe<Contact_FormsAccess>;
  readonly experiences?: Maybe<ExperiencesAccess>;
  readonly featured_case_studies?: Maybe<Featured_Case_StudiesAccess>;
  readonly featured_experiences?: Maybe<Featured_ExperiencesAccess>;
  readonly footer?: Maybe<FooterAccess>;
  readonly hero?: Maybe<HeroAccess>;
  readonly journal?: Maybe<JournalAccess>;
  readonly media?: Maybe<MediaAccess>;
  readonly payload_locked_documents?: Maybe<Payload_Locked_DocumentsAccess>;
  readonly payload_preferences?: Maybe<Payload_PreferencesAccess>;
  readonly skills?: Maybe<SkillsAccess>;
  readonly tags?: Maybe<TagsAccess>;
  readonly users?: Maybe<UsersAccess>;
  readonly work_buttons?: Maybe<Work_ButtonsAccess>;
};

export type CaseStudies = {
  readonly __typename?: 'CaseStudies';
  readonly docs: ReadonlyArray<CaseStudy>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPrevPage: Scalars['Boolean']['output'];
  readonly limit: Scalars['Int']['output'];
  readonly nextPage: Scalars['Int']['output'];
  readonly offset?: Maybe<Scalars['Int']['output']>;
  readonly page: Scalars['Int']['output'];
  readonly pagingCounter: Scalars['Int']['output'];
  readonly prevPage: Scalars['Int']['output'];
  readonly totalDocs: Scalars['Int']['output'];
  readonly totalPages: Scalars['Int']['output'];
};

export type CaseStudiesCreateAccess = {
  readonly __typename?: 'CaseStudiesCreateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudiesCreateDocAccess = {
  readonly __typename?: 'CaseStudiesCreateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudiesDeleteAccess = {
  readonly __typename?: 'CaseStudiesDeleteAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudiesDeleteDocAccess = {
  readonly __typename?: 'CaseStudiesDeleteDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudiesDocAccessFields = {
  readonly __typename?: 'CaseStudiesDocAccessFields';
  readonly content?: Maybe<CaseStudiesDocAccessFields_Content>;
  readonly createdAt?: Maybe<CaseStudiesDocAccessFields_CreatedAt>;
  readonly experience?: Maybe<CaseStudiesDocAccessFields_Experience>;
  readonly featured?: Maybe<CaseStudiesDocAccessFields_Featured>;
  readonly illustration?: Maybe<CaseStudiesDocAccessFields_Illustration>;
  readonly links?: Maybe<CaseStudiesDocAccessFields_Links>;
  readonly meta?: Maybe<CaseStudiesDocAccessFields_Meta>;
  readonly publishedAt?: Maybe<CaseStudiesDocAccessFields_PublishedAt>;
  readonly slug?: Maybe<CaseStudiesDocAccessFields_Slug>;
  readonly summary?: Maybe<CaseStudiesDocAccessFields_Summary>;
  readonly tags?: Maybe<CaseStudiesDocAccessFields_Tags>;
  readonly title?: Maybe<CaseStudiesDocAccessFields_Title>;
  readonly updatedAt?: Maybe<CaseStudiesDocAccessFields_UpdatedAt>;
};

export type CaseStudiesDocAccessFields_Content = {
  readonly __typename?: 'CaseStudiesDocAccessFields_content';
  readonly create?: Maybe<CaseStudiesDocAccessFields_Content_Create>;
  readonly delete?: Maybe<CaseStudiesDocAccessFields_Content_Delete>;
  readonly read?: Maybe<CaseStudiesDocAccessFields_Content_Read>;
  readonly update?: Maybe<CaseStudiesDocAccessFields_Content_Update>;
};

export type CaseStudiesDocAccessFields_Content_Create = {
  readonly __typename?: 'CaseStudiesDocAccessFields_content_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Content_Delete = {
  readonly __typename?: 'CaseStudiesDocAccessFields_content_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Content_Read = {
  readonly __typename?: 'CaseStudiesDocAccessFields_content_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Content_Update = {
  readonly __typename?: 'CaseStudiesDocAccessFields_content_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_CreatedAt = {
  readonly __typename?: 'CaseStudiesDocAccessFields_createdAt';
  readonly create?: Maybe<CaseStudiesDocAccessFields_CreatedAt_Create>;
  readonly delete?: Maybe<CaseStudiesDocAccessFields_CreatedAt_Delete>;
  readonly read?: Maybe<CaseStudiesDocAccessFields_CreatedAt_Read>;
  readonly update?: Maybe<CaseStudiesDocAccessFields_CreatedAt_Update>;
};

export type CaseStudiesDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'CaseStudiesDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'CaseStudiesDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'CaseStudiesDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'CaseStudiesDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Experience = {
  readonly __typename?: 'CaseStudiesDocAccessFields_experience';
  readonly create?: Maybe<CaseStudiesDocAccessFields_Experience_Create>;
  readonly delete?: Maybe<CaseStudiesDocAccessFields_Experience_Delete>;
  readonly read?: Maybe<CaseStudiesDocAccessFields_Experience_Read>;
  readonly update?: Maybe<CaseStudiesDocAccessFields_Experience_Update>;
};

export type CaseStudiesDocAccessFields_Experience_Create = {
  readonly __typename?: 'CaseStudiesDocAccessFields_experience_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Experience_Delete = {
  readonly __typename?: 'CaseStudiesDocAccessFields_experience_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Experience_Read = {
  readonly __typename?: 'CaseStudiesDocAccessFields_experience_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Experience_Update = {
  readonly __typename?: 'CaseStudiesDocAccessFields_experience_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Featured = {
  readonly __typename?: 'CaseStudiesDocAccessFields_featured';
  readonly create?: Maybe<CaseStudiesDocAccessFields_Featured_Create>;
  readonly delete?: Maybe<CaseStudiesDocAccessFields_Featured_Delete>;
  readonly read?: Maybe<CaseStudiesDocAccessFields_Featured_Read>;
  readonly update?: Maybe<CaseStudiesDocAccessFields_Featured_Update>;
};

export type CaseStudiesDocAccessFields_Featured_Create = {
  readonly __typename?: 'CaseStudiesDocAccessFields_featured_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Featured_Delete = {
  readonly __typename?: 'CaseStudiesDocAccessFields_featured_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Featured_Read = {
  readonly __typename?: 'CaseStudiesDocAccessFields_featured_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Featured_Update = {
  readonly __typename?: 'CaseStudiesDocAccessFields_featured_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Illustration = {
  readonly __typename?: 'CaseStudiesDocAccessFields_illustration';
  readonly create?: Maybe<CaseStudiesDocAccessFields_Illustration_Create>;
  readonly delete?: Maybe<CaseStudiesDocAccessFields_Illustration_Delete>;
  readonly read?: Maybe<CaseStudiesDocAccessFields_Illustration_Read>;
  readonly update?: Maybe<CaseStudiesDocAccessFields_Illustration_Update>;
};

export type CaseStudiesDocAccessFields_Illustration_Create = {
  readonly __typename?: 'CaseStudiesDocAccessFields_illustration_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Illustration_Delete = {
  readonly __typename?: 'CaseStudiesDocAccessFields_illustration_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Illustration_Read = {
  readonly __typename?: 'CaseStudiesDocAccessFields_illustration_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Illustration_Update = {
  readonly __typename?: 'CaseStudiesDocAccessFields_illustration_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Links = {
  readonly __typename?: 'CaseStudiesDocAccessFields_links';
  readonly create?: Maybe<CaseStudiesDocAccessFields_Links_Create>;
  readonly delete?: Maybe<CaseStudiesDocAccessFields_Links_Delete>;
  readonly fields?: Maybe<CaseStudiesDocAccessFields_Links_Fields>;
  readonly read?: Maybe<CaseStudiesDocAccessFields_Links_Read>;
  readonly update?: Maybe<CaseStudiesDocAccessFields_Links_Update>;
};

export type CaseStudiesDocAccessFields_Links_Create = {
  readonly __typename?: 'CaseStudiesDocAccessFields_links_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Links_Delete = {
  readonly __typename?: 'CaseStudiesDocAccessFields_links_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Links_Fields = {
  readonly __typename?: 'CaseStudiesDocAccessFields_links_Fields';
  readonly id?: Maybe<CaseStudiesDocAccessFields_Links_Id>;
  readonly label?: Maybe<CaseStudiesDocAccessFields_Links_Label>;
  readonly url?: Maybe<CaseStudiesDocAccessFields_Links_Url>;
};

export type CaseStudiesDocAccessFields_Links_Read = {
  readonly __typename?: 'CaseStudiesDocAccessFields_links_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Links_Update = {
  readonly __typename?: 'CaseStudiesDocAccessFields_links_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Links_Id = {
  readonly __typename?: 'CaseStudiesDocAccessFields_links_id';
  readonly create?: Maybe<CaseStudiesDocAccessFields_Links_Id_Create>;
  readonly delete?: Maybe<CaseStudiesDocAccessFields_Links_Id_Delete>;
  readonly read?: Maybe<CaseStudiesDocAccessFields_Links_Id_Read>;
  readonly update?: Maybe<CaseStudiesDocAccessFields_Links_Id_Update>;
};

export type CaseStudiesDocAccessFields_Links_Id_Create = {
  readonly __typename?: 'CaseStudiesDocAccessFields_links_id_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Links_Id_Delete = {
  readonly __typename?: 'CaseStudiesDocAccessFields_links_id_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Links_Id_Read = {
  readonly __typename?: 'CaseStudiesDocAccessFields_links_id_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Links_Id_Update = {
  readonly __typename?: 'CaseStudiesDocAccessFields_links_id_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Links_Label = {
  readonly __typename?: 'CaseStudiesDocAccessFields_links_label';
  readonly create?: Maybe<CaseStudiesDocAccessFields_Links_Label_Create>;
  readonly delete?: Maybe<CaseStudiesDocAccessFields_Links_Label_Delete>;
  readonly read?: Maybe<CaseStudiesDocAccessFields_Links_Label_Read>;
  readonly update?: Maybe<CaseStudiesDocAccessFields_Links_Label_Update>;
};

export type CaseStudiesDocAccessFields_Links_Label_Create = {
  readonly __typename?: 'CaseStudiesDocAccessFields_links_label_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Links_Label_Delete = {
  readonly __typename?: 'CaseStudiesDocAccessFields_links_label_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Links_Label_Read = {
  readonly __typename?: 'CaseStudiesDocAccessFields_links_label_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Links_Label_Update = {
  readonly __typename?: 'CaseStudiesDocAccessFields_links_label_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Links_Url = {
  readonly __typename?: 'CaseStudiesDocAccessFields_links_url';
  readonly create?: Maybe<CaseStudiesDocAccessFields_Links_Url_Create>;
  readonly delete?: Maybe<CaseStudiesDocAccessFields_Links_Url_Delete>;
  readonly read?: Maybe<CaseStudiesDocAccessFields_Links_Url_Read>;
  readonly update?: Maybe<CaseStudiesDocAccessFields_Links_Url_Update>;
};

export type CaseStudiesDocAccessFields_Links_Url_Create = {
  readonly __typename?: 'CaseStudiesDocAccessFields_links_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Links_Url_Delete = {
  readonly __typename?: 'CaseStudiesDocAccessFields_links_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Links_Url_Read = {
  readonly __typename?: 'CaseStudiesDocAccessFields_links_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Links_Url_Update = {
  readonly __typename?: 'CaseStudiesDocAccessFields_links_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta = {
  readonly __typename?: 'CaseStudiesDocAccessFields_meta';
  readonly create?: Maybe<CaseStudiesDocAccessFields_Meta_Create>;
  readonly delete?: Maybe<CaseStudiesDocAccessFields_Meta_Delete>;
  readonly fields?: Maybe<CaseStudiesDocAccessFields_Meta_Fields>;
  readonly read?: Maybe<CaseStudiesDocAccessFields_Meta_Read>;
  readonly update?: Maybe<CaseStudiesDocAccessFields_Meta_Update>;
};

export type CaseStudiesDocAccessFields_Meta_Create = {
  readonly __typename?: 'CaseStudiesDocAccessFields_meta_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Delete = {
  readonly __typename?: 'CaseStudiesDocAccessFields_meta_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Fields = {
  readonly __typename?: 'CaseStudiesDocAccessFields_meta_Fields';
  readonly description?: Maybe<CaseStudiesDocAccessFields_Meta_Description>;
  readonly image?: Maybe<CaseStudiesDocAccessFields_Meta_Image>;
  readonly title?: Maybe<CaseStudiesDocAccessFields_Meta_Title>;
};

export type CaseStudiesDocAccessFields_Meta_Read = {
  readonly __typename?: 'CaseStudiesDocAccessFields_meta_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Update = {
  readonly __typename?: 'CaseStudiesDocAccessFields_meta_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Description = {
  readonly __typename?: 'CaseStudiesDocAccessFields_meta_description';
  readonly create?: Maybe<CaseStudiesDocAccessFields_Meta_Description_Create>;
  readonly delete?: Maybe<CaseStudiesDocAccessFields_Meta_Description_Delete>;
  readonly read?: Maybe<CaseStudiesDocAccessFields_Meta_Description_Read>;
  readonly update?: Maybe<CaseStudiesDocAccessFields_Meta_Description_Update>;
};

export type CaseStudiesDocAccessFields_Meta_Description_Create = {
  readonly __typename?: 'CaseStudiesDocAccessFields_meta_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Description_Delete = {
  readonly __typename?: 'CaseStudiesDocAccessFields_meta_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Description_Read = {
  readonly __typename?: 'CaseStudiesDocAccessFields_meta_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Description_Update = {
  readonly __typename?: 'CaseStudiesDocAccessFields_meta_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Image = {
  readonly __typename?: 'CaseStudiesDocAccessFields_meta_image';
  readonly create?: Maybe<CaseStudiesDocAccessFields_Meta_Image_Create>;
  readonly delete?: Maybe<CaseStudiesDocAccessFields_Meta_Image_Delete>;
  readonly read?: Maybe<CaseStudiesDocAccessFields_Meta_Image_Read>;
  readonly update?: Maybe<CaseStudiesDocAccessFields_Meta_Image_Update>;
};

export type CaseStudiesDocAccessFields_Meta_Image_Create = {
  readonly __typename?: 'CaseStudiesDocAccessFields_meta_image_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Image_Delete = {
  readonly __typename?: 'CaseStudiesDocAccessFields_meta_image_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Image_Read = {
  readonly __typename?: 'CaseStudiesDocAccessFields_meta_image_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Image_Update = {
  readonly __typename?: 'CaseStudiesDocAccessFields_meta_image_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Title = {
  readonly __typename?: 'CaseStudiesDocAccessFields_meta_title';
  readonly create?: Maybe<CaseStudiesDocAccessFields_Meta_Title_Create>;
  readonly delete?: Maybe<CaseStudiesDocAccessFields_Meta_Title_Delete>;
  readonly read?: Maybe<CaseStudiesDocAccessFields_Meta_Title_Read>;
  readonly update?: Maybe<CaseStudiesDocAccessFields_Meta_Title_Update>;
};

export type CaseStudiesDocAccessFields_Meta_Title_Create = {
  readonly __typename?: 'CaseStudiesDocAccessFields_meta_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Title_Delete = {
  readonly __typename?: 'CaseStudiesDocAccessFields_meta_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Title_Read = {
  readonly __typename?: 'CaseStudiesDocAccessFields_meta_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Title_Update = {
  readonly __typename?: 'CaseStudiesDocAccessFields_meta_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_PublishedAt = {
  readonly __typename?: 'CaseStudiesDocAccessFields_publishedAt';
  readonly create?: Maybe<CaseStudiesDocAccessFields_PublishedAt_Create>;
  readonly delete?: Maybe<CaseStudiesDocAccessFields_PublishedAt_Delete>;
  readonly read?: Maybe<CaseStudiesDocAccessFields_PublishedAt_Read>;
  readonly update?: Maybe<CaseStudiesDocAccessFields_PublishedAt_Update>;
};

export type CaseStudiesDocAccessFields_PublishedAt_Create = {
  readonly __typename?: 'CaseStudiesDocAccessFields_publishedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_PublishedAt_Delete = {
  readonly __typename?: 'CaseStudiesDocAccessFields_publishedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_PublishedAt_Read = {
  readonly __typename?: 'CaseStudiesDocAccessFields_publishedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_PublishedAt_Update = {
  readonly __typename?: 'CaseStudiesDocAccessFields_publishedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Slug = {
  readonly __typename?: 'CaseStudiesDocAccessFields_slug';
  readonly create?: Maybe<CaseStudiesDocAccessFields_Slug_Create>;
  readonly delete?: Maybe<CaseStudiesDocAccessFields_Slug_Delete>;
  readonly read?: Maybe<CaseStudiesDocAccessFields_Slug_Read>;
  readonly update?: Maybe<CaseStudiesDocAccessFields_Slug_Update>;
};

export type CaseStudiesDocAccessFields_Slug_Create = {
  readonly __typename?: 'CaseStudiesDocAccessFields_slug_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Slug_Delete = {
  readonly __typename?: 'CaseStudiesDocAccessFields_slug_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Slug_Read = {
  readonly __typename?: 'CaseStudiesDocAccessFields_slug_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Slug_Update = {
  readonly __typename?: 'CaseStudiesDocAccessFields_slug_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Summary = {
  readonly __typename?: 'CaseStudiesDocAccessFields_summary';
  readonly create?: Maybe<CaseStudiesDocAccessFields_Summary_Create>;
  readonly delete?: Maybe<CaseStudiesDocAccessFields_Summary_Delete>;
  readonly read?: Maybe<CaseStudiesDocAccessFields_Summary_Read>;
  readonly update?: Maybe<CaseStudiesDocAccessFields_Summary_Update>;
};

export type CaseStudiesDocAccessFields_Summary_Create = {
  readonly __typename?: 'CaseStudiesDocAccessFields_summary_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Summary_Delete = {
  readonly __typename?: 'CaseStudiesDocAccessFields_summary_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Summary_Read = {
  readonly __typename?: 'CaseStudiesDocAccessFields_summary_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Summary_Update = {
  readonly __typename?: 'CaseStudiesDocAccessFields_summary_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Tags = {
  readonly __typename?: 'CaseStudiesDocAccessFields_tags';
  readonly create?: Maybe<CaseStudiesDocAccessFields_Tags_Create>;
  readonly delete?: Maybe<CaseStudiesDocAccessFields_Tags_Delete>;
  readonly read?: Maybe<CaseStudiesDocAccessFields_Tags_Read>;
  readonly update?: Maybe<CaseStudiesDocAccessFields_Tags_Update>;
};

export type CaseStudiesDocAccessFields_Tags_Create = {
  readonly __typename?: 'CaseStudiesDocAccessFields_tags_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Tags_Delete = {
  readonly __typename?: 'CaseStudiesDocAccessFields_tags_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Tags_Read = {
  readonly __typename?: 'CaseStudiesDocAccessFields_tags_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Tags_Update = {
  readonly __typename?: 'CaseStudiesDocAccessFields_tags_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Title = {
  readonly __typename?: 'CaseStudiesDocAccessFields_title';
  readonly create?: Maybe<CaseStudiesDocAccessFields_Title_Create>;
  readonly delete?: Maybe<CaseStudiesDocAccessFields_Title_Delete>;
  readonly read?: Maybe<CaseStudiesDocAccessFields_Title_Read>;
  readonly update?: Maybe<CaseStudiesDocAccessFields_Title_Update>;
};

export type CaseStudiesDocAccessFields_Title_Create = {
  readonly __typename?: 'CaseStudiesDocAccessFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Title_Delete = {
  readonly __typename?: 'CaseStudiesDocAccessFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Title_Read = {
  readonly __typename?: 'CaseStudiesDocAccessFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Title_Update = {
  readonly __typename?: 'CaseStudiesDocAccessFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_UpdatedAt = {
  readonly __typename?: 'CaseStudiesDocAccessFields_updatedAt';
  readonly create?: Maybe<CaseStudiesDocAccessFields_UpdatedAt_Create>;
  readonly delete?: Maybe<CaseStudiesDocAccessFields_UpdatedAt_Delete>;
  readonly read?: Maybe<CaseStudiesDocAccessFields_UpdatedAt_Read>;
  readonly update?: Maybe<CaseStudiesDocAccessFields_UpdatedAt_Update>;
};

export type CaseStudiesDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'CaseStudiesDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'CaseStudiesDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'CaseStudiesDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'CaseStudiesDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields = {
  readonly __typename?: 'CaseStudiesFields';
  readonly content?: Maybe<CaseStudiesFields_Content>;
  readonly createdAt?: Maybe<CaseStudiesFields_CreatedAt>;
  readonly experience?: Maybe<CaseStudiesFields_Experience>;
  readonly featured?: Maybe<CaseStudiesFields_Featured>;
  readonly illustration?: Maybe<CaseStudiesFields_Illustration>;
  readonly links?: Maybe<CaseStudiesFields_Links>;
  readonly meta?: Maybe<CaseStudiesFields_Meta>;
  readonly publishedAt?: Maybe<CaseStudiesFields_PublishedAt>;
  readonly slug?: Maybe<CaseStudiesFields_Slug>;
  readonly summary?: Maybe<CaseStudiesFields_Summary>;
  readonly tags?: Maybe<CaseStudiesFields_Tags>;
  readonly title?: Maybe<CaseStudiesFields_Title>;
  readonly updatedAt?: Maybe<CaseStudiesFields_UpdatedAt>;
};

export type CaseStudiesFields_Content = {
  readonly __typename?: 'CaseStudiesFields_content';
  readonly create?: Maybe<CaseStudiesFields_Content_Create>;
  readonly delete?: Maybe<CaseStudiesFields_Content_Delete>;
  readonly read?: Maybe<CaseStudiesFields_Content_Read>;
  readonly update?: Maybe<CaseStudiesFields_Content_Update>;
};

export type CaseStudiesFields_Content_Create = {
  readonly __typename?: 'CaseStudiesFields_content_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Content_Delete = {
  readonly __typename?: 'CaseStudiesFields_content_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Content_Read = {
  readonly __typename?: 'CaseStudiesFields_content_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Content_Update = {
  readonly __typename?: 'CaseStudiesFields_content_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_CreatedAt = {
  readonly __typename?: 'CaseStudiesFields_createdAt';
  readonly create?: Maybe<CaseStudiesFields_CreatedAt_Create>;
  readonly delete?: Maybe<CaseStudiesFields_CreatedAt_Delete>;
  readonly read?: Maybe<CaseStudiesFields_CreatedAt_Read>;
  readonly update?: Maybe<CaseStudiesFields_CreatedAt_Update>;
};

export type CaseStudiesFields_CreatedAt_Create = {
  readonly __typename?: 'CaseStudiesFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_CreatedAt_Delete = {
  readonly __typename?: 'CaseStudiesFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_CreatedAt_Read = {
  readonly __typename?: 'CaseStudiesFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_CreatedAt_Update = {
  readonly __typename?: 'CaseStudiesFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Experience = {
  readonly __typename?: 'CaseStudiesFields_experience';
  readonly create?: Maybe<CaseStudiesFields_Experience_Create>;
  readonly delete?: Maybe<CaseStudiesFields_Experience_Delete>;
  readonly read?: Maybe<CaseStudiesFields_Experience_Read>;
  readonly update?: Maybe<CaseStudiesFields_Experience_Update>;
};

export type CaseStudiesFields_Experience_Create = {
  readonly __typename?: 'CaseStudiesFields_experience_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Experience_Delete = {
  readonly __typename?: 'CaseStudiesFields_experience_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Experience_Read = {
  readonly __typename?: 'CaseStudiesFields_experience_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Experience_Update = {
  readonly __typename?: 'CaseStudiesFields_experience_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Featured = {
  readonly __typename?: 'CaseStudiesFields_featured';
  readonly create?: Maybe<CaseStudiesFields_Featured_Create>;
  readonly delete?: Maybe<CaseStudiesFields_Featured_Delete>;
  readonly read?: Maybe<CaseStudiesFields_Featured_Read>;
  readonly update?: Maybe<CaseStudiesFields_Featured_Update>;
};

export type CaseStudiesFields_Featured_Create = {
  readonly __typename?: 'CaseStudiesFields_featured_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Featured_Delete = {
  readonly __typename?: 'CaseStudiesFields_featured_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Featured_Read = {
  readonly __typename?: 'CaseStudiesFields_featured_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Featured_Update = {
  readonly __typename?: 'CaseStudiesFields_featured_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Illustration = {
  readonly __typename?: 'CaseStudiesFields_illustration';
  readonly create?: Maybe<CaseStudiesFields_Illustration_Create>;
  readonly delete?: Maybe<CaseStudiesFields_Illustration_Delete>;
  readonly read?: Maybe<CaseStudiesFields_Illustration_Read>;
  readonly update?: Maybe<CaseStudiesFields_Illustration_Update>;
};

export type CaseStudiesFields_Illustration_Create = {
  readonly __typename?: 'CaseStudiesFields_illustration_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Illustration_Delete = {
  readonly __typename?: 'CaseStudiesFields_illustration_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Illustration_Read = {
  readonly __typename?: 'CaseStudiesFields_illustration_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Illustration_Update = {
  readonly __typename?: 'CaseStudiesFields_illustration_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Links = {
  readonly __typename?: 'CaseStudiesFields_links';
  readonly create?: Maybe<CaseStudiesFields_Links_Create>;
  readonly delete?: Maybe<CaseStudiesFields_Links_Delete>;
  readonly fields?: Maybe<CaseStudiesFields_Links_Fields>;
  readonly read?: Maybe<CaseStudiesFields_Links_Read>;
  readonly update?: Maybe<CaseStudiesFields_Links_Update>;
};

export type CaseStudiesFields_Links_Create = {
  readonly __typename?: 'CaseStudiesFields_links_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Links_Delete = {
  readonly __typename?: 'CaseStudiesFields_links_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Links_Fields = {
  readonly __typename?: 'CaseStudiesFields_links_Fields';
  readonly id?: Maybe<CaseStudiesFields_Links_Id>;
  readonly label?: Maybe<CaseStudiesFields_Links_Label>;
  readonly url?: Maybe<CaseStudiesFields_Links_Url>;
};

export type CaseStudiesFields_Links_Read = {
  readonly __typename?: 'CaseStudiesFields_links_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Links_Update = {
  readonly __typename?: 'CaseStudiesFields_links_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Links_Id = {
  readonly __typename?: 'CaseStudiesFields_links_id';
  readonly create?: Maybe<CaseStudiesFields_Links_Id_Create>;
  readonly delete?: Maybe<CaseStudiesFields_Links_Id_Delete>;
  readonly read?: Maybe<CaseStudiesFields_Links_Id_Read>;
  readonly update?: Maybe<CaseStudiesFields_Links_Id_Update>;
};

export type CaseStudiesFields_Links_Id_Create = {
  readonly __typename?: 'CaseStudiesFields_links_id_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Links_Id_Delete = {
  readonly __typename?: 'CaseStudiesFields_links_id_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Links_Id_Read = {
  readonly __typename?: 'CaseStudiesFields_links_id_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Links_Id_Update = {
  readonly __typename?: 'CaseStudiesFields_links_id_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Links_Label = {
  readonly __typename?: 'CaseStudiesFields_links_label';
  readonly create?: Maybe<CaseStudiesFields_Links_Label_Create>;
  readonly delete?: Maybe<CaseStudiesFields_Links_Label_Delete>;
  readonly read?: Maybe<CaseStudiesFields_Links_Label_Read>;
  readonly update?: Maybe<CaseStudiesFields_Links_Label_Update>;
};

export type CaseStudiesFields_Links_Label_Create = {
  readonly __typename?: 'CaseStudiesFields_links_label_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Links_Label_Delete = {
  readonly __typename?: 'CaseStudiesFields_links_label_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Links_Label_Read = {
  readonly __typename?: 'CaseStudiesFields_links_label_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Links_Label_Update = {
  readonly __typename?: 'CaseStudiesFields_links_label_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Links_Url = {
  readonly __typename?: 'CaseStudiesFields_links_url';
  readonly create?: Maybe<CaseStudiesFields_Links_Url_Create>;
  readonly delete?: Maybe<CaseStudiesFields_Links_Url_Delete>;
  readonly read?: Maybe<CaseStudiesFields_Links_Url_Read>;
  readonly update?: Maybe<CaseStudiesFields_Links_Url_Update>;
};

export type CaseStudiesFields_Links_Url_Create = {
  readonly __typename?: 'CaseStudiesFields_links_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Links_Url_Delete = {
  readonly __typename?: 'CaseStudiesFields_links_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Links_Url_Read = {
  readonly __typename?: 'CaseStudiesFields_links_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Links_Url_Update = {
  readonly __typename?: 'CaseStudiesFields_links_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta = {
  readonly __typename?: 'CaseStudiesFields_meta';
  readonly create?: Maybe<CaseStudiesFields_Meta_Create>;
  readonly delete?: Maybe<CaseStudiesFields_Meta_Delete>;
  readonly fields?: Maybe<CaseStudiesFields_Meta_Fields>;
  readonly read?: Maybe<CaseStudiesFields_Meta_Read>;
  readonly update?: Maybe<CaseStudiesFields_Meta_Update>;
};

export type CaseStudiesFields_Meta_Create = {
  readonly __typename?: 'CaseStudiesFields_meta_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Delete = {
  readonly __typename?: 'CaseStudiesFields_meta_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Fields = {
  readonly __typename?: 'CaseStudiesFields_meta_Fields';
  readonly description?: Maybe<CaseStudiesFields_Meta_Description>;
  readonly image?: Maybe<CaseStudiesFields_Meta_Image>;
  readonly title?: Maybe<CaseStudiesFields_Meta_Title>;
};

export type CaseStudiesFields_Meta_Read = {
  readonly __typename?: 'CaseStudiesFields_meta_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Update = {
  readonly __typename?: 'CaseStudiesFields_meta_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Description = {
  readonly __typename?: 'CaseStudiesFields_meta_description';
  readonly create?: Maybe<CaseStudiesFields_Meta_Description_Create>;
  readonly delete?: Maybe<CaseStudiesFields_Meta_Description_Delete>;
  readonly read?: Maybe<CaseStudiesFields_Meta_Description_Read>;
  readonly update?: Maybe<CaseStudiesFields_Meta_Description_Update>;
};

export type CaseStudiesFields_Meta_Description_Create = {
  readonly __typename?: 'CaseStudiesFields_meta_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Description_Delete = {
  readonly __typename?: 'CaseStudiesFields_meta_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Description_Read = {
  readonly __typename?: 'CaseStudiesFields_meta_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Description_Update = {
  readonly __typename?: 'CaseStudiesFields_meta_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Image = {
  readonly __typename?: 'CaseStudiesFields_meta_image';
  readonly create?: Maybe<CaseStudiesFields_Meta_Image_Create>;
  readonly delete?: Maybe<CaseStudiesFields_Meta_Image_Delete>;
  readonly read?: Maybe<CaseStudiesFields_Meta_Image_Read>;
  readonly update?: Maybe<CaseStudiesFields_Meta_Image_Update>;
};

export type CaseStudiesFields_Meta_Image_Create = {
  readonly __typename?: 'CaseStudiesFields_meta_image_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Image_Delete = {
  readonly __typename?: 'CaseStudiesFields_meta_image_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Image_Read = {
  readonly __typename?: 'CaseStudiesFields_meta_image_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Image_Update = {
  readonly __typename?: 'CaseStudiesFields_meta_image_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Title = {
  readonly __typename?: 'CaseStudiesFields_meta_title';
  readonly create?: Maybe<CaseStudiesFields_Meta_Title_Create>;
  readonly delete?: Maybe<CaseStudiesFields_Meta_Title_Delete>;
  readonly read?: Maybe<CaseStudiesFields_Meta_Title_Read>;
  readonly update?: Maybe<CaseStudiesFields_Meta_Title_Update>;
};

export type CaseStudiesFields_Meta_Title_Create = {
  readonly __typename?: 'CaseStudiesFields_meta_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Title_Delete = {
  readonly __typename?: 'CaseStudiesFields_meta_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Title_Read = {
  readonly __typename?: 'CaseStudiesFields_meta_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Title_Update = {
  readonly __typename?: 'CaseStudiesFields_meta_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_PublishedAt = {
  readonly __typename?: 'CaseStudiesFields_publishedAt';
  readonly create?: Maybe<CaseStudiesFields_PublishedAt_Create>;
  readonly delete?: Maybe<CaseStudiesFields_PublishedAt_Delete>;
  readonly read?: Maybe<CaseStudiesFields_PublishedAt_Read>;
  readonly update?: Maybe<CaseStudiesFields_PublishedAt_Update>;
};

export type CaseStudiesFields_PublishedAt_Create = {
  readonly __typename?: 'CaseStudiesFields_publishedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_PublishedAt_Delete = {
  readonly __typename?: 'CaseStudiesFields_publishedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_PublishedAt_Read = {
  readonly __typename?: 'CaseStudiesFields_publishedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_PublishedAt_Update = {
  readonly __typename?: 'CaseStudiesFields_publishedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Slug = {
  readonly __typename?: 'CaseStudiesFields_slug';
  readonly create?: Maybe<CaseStudiesFields_Slug_Create>;
  readonly delete?: Maybe<CaseStudiesFields_Slug_Delete>;
  readonly read?: Maybe<CaseStudiesFields_Slug_Read>;
  readonly update?: Maybe<CaseStudiesFields_Slug_Update>;
};

export type CaseStudiesFields_Slug_Create = {
  readonly __typename?: 'CaseStudiesFields_slug_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Slug_Delete = {
  readonly __typename?: 'CaseStudiesFields_slug_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Slug_Read = {
  readonly __typename?: 'CaseStudiesFields_slug_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Slug_Update = {
  readonly __typename?: 'CaseStudiesFields_slug_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Summary = {
  readonly __typename?: 'CaseStudiesFields_summary';
  readonly create?: Maybe<CaseStudiesFields_Summary_Create>;
  readonly delete?: Maybe<CaseStudiesFields_Summary_Delete>;
  readonly read?: Maybe<CaseStudiesFields_Summary_Read>;
  readonly update?: Maybe<CaseStudiesFields_Summary_Update>;
};

export type CaseStudiesFields_Summary_Create = {
  readonly __typename?: 'CaseStudiesFields_summary_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Summary_Delete = {
  readonly __typename?: 'CaseStudiesFields_summary_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Summary_Read = {
  readonly __typename?: 'CaseStudiesFields_summary_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Summary_Update = {
  readonly __typename?: 'CaseStudiesFields_summary_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Tags = {
  readonly __typename?: 'CaseStudiesFields_tags';
  readonly create?: Maybe<CaseStudiesFields_Tags_Create>;
  readonly delete?: Maybe<CaseStudiesFields_Tags_Delete>;
  readonly read?: Maybe<CaseStudiesFields_Tags_Read>;
  readonly update?: Maybe<CaseStudiesFields_Tags_Update>;
};

export type CaseStudiesFields_Tags_Create = {
  readonly __typename?: 'CaseStudiesFields_tags_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Tags_Delete = {
  readonly __typename?: 'CaseStudiesFields_tags_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Tags_Read = {
  readonly __typename?: 'CaseStudiesFields_tags_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Tags_Update = {
  readonly __typename?: 'CaseStudiesFields_tags_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Title = {
  readonly __typename?: 'CaseStudiesFields_title';
  readonly create?: Maybe<CaseStudiesFields_Title_Create>;
  readonly delete?: Maybe<CaseStudiesFields_Title_Delete>;
  readonly read?: Maybe<CaseStudiesFields_Title_Read>;
  readonly update?: Maybe<CaseStudiesFields_Title_Update>;
};

export type CaseStudiesFields_Title_Create = {
  readonly __typename?: 'CaseStudiesFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Title_Delete = {
  readonly __typename?: 'CaseStudiesFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Title_Read = {
  readonly __typename?: 'CaseStudiesFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Title_Update = {
  readonly __typename?: 'CaseStudiesFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_UpdatedAt = {
  readonly __typename?: 'CaseStudiesFields_updatedAt';
  readonly create?: Maybe<CaseStudiesFields_UpdatedAt_Create>;
  readonly delete?: Maybe<CaseStudiesFields_UpdatedAt_Delete>;
  readonly read?: Maybe<CaseStudiesFields_UpdatedAt_Read>;
  readonly update?: Maybe<CaseStudiesFields_UpdatedAt_Update>;
};

export type CaseStudiesFields_UpdatedAt_Create = {
  readonly __typename?: 'CaseStudiesFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_UpdatedAt_Delete = {
  readonly __typename?: 'CaseStudiesFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_UpdatedAt_Read = {
  readonly __typename?: 'CaseStudiesFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_UpdatedAt_Update = {
  readonly __typename?: 'CaseStudiesFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CaseStudiesReadAccess = {
  readonly __typename?: 'CaseStudiesReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudiesReadDocAccess = {
  readonly __typename?: 'CaseStudiesReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudiesUpdateAccess = {
  readonly __typename?: 'CaseStudiesUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudiesUpdateDocAccess = {
  readonly __typename?: 'CaseStudiesUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudy = {
  readonly __typename?: 'CaseStudy';
  readonly content: Scalars['JSON']['output'];
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly experience: Experience;
  readonly featured?: Maybe<Scalars['Boolean']['output']>;
  readonly id: Scalars['Int']['output'];
  readonly illustration?: Maybe<Media>;
  readonly links?: Maybe<ReadonlyArray<CaseStudy_Links>>;
  readonly meta?: Maybe<CaseStudy_Meta>;
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly slug?: Maybe<Scalars['String']['output']>;
  readonly summary: Scalars['JSON']['output'];
  readonly tags: ReadonlyArray<Tag>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CaseStudyContentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


export type CaseStudySummaryArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type CaseStudy_Links = {
  readonly __typename?: 'CaseStudy_Links';
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly label?: Maybe<Scalars['String']['output']>;
  readonly url?: Maybe<Scalars['String']['output']>;
};

export type CaseStudy_Meta = {
  readonly __typename?: 'CaseStudy_Meta';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly image?: Maybe<Media>;
  readonly title?: Maybe<Scalars['String']['output']>;
};

export type CaseStudy_Content_Operator = {
  readonly contains?: InputMaybe<Scalars['JSON']['input']>;
  readonly equals?: InputMaybe<Scalars['JSON']['input']>;
  readonly like?: InputMaybe<Scalars['JSON']['input']>;
  readonly not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type CaseStudy_CreatedAt_Operator = {
  readonly equals?: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly like?: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CaseStudy_Experience_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals?: InputMaybe<Scalars['JSON']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals?: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type CaseStudy_Featured_Operator = {
  readonly equals?: InputMaybe<Scalars['Boolean']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CaseStudy_Id_Operator = {
  readonly equals?: InputMaybe<Scalars['Int']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Int']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  readonly less_than?: InputMaybe<Scalars['Int']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type CaseStudy_Illustration_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals?: InputMaybe<Scalars['JSON']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals?: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type CaseStudy_Links__Id_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Links__Label_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Links__Url_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Meta__Description_Operator = {
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type CaseStudy_Meta__Image_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals?: InputMaybe<Scalars['JSON']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals?: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type CaseStudy_Meta__Title_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_PublishedAt_Operator = {
  readonly equals?: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly like?: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CaseStudy_Slug_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Summary_Operator = {
  readonly contains?: InputMaybe<Scalars['JSON']['input']>;
  readonly equals?: InputMaybe<Scalars['JSON']['input']>;
  readonly like?: InputMaybe<Scalars['JSON']['input']>;
  readonly not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type CaseStudy_Tags_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals?: InputMaybe<Scalars['JSON']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals?: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type CaseStudy_Title_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_UpdatedAt_Operator = {
  readonly equals?: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly like?: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CaseStudy_Where = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<CaseStudy_Where_And>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<CaseStudy_Where_Or>>>;
  readonly content?: InputMaybe<CaseStudy_Content_Operator>;
  readonly createdAt?: InputMaybe<CaseStudy_CreatedAt_Operator>;
  readonly experience?: InputMaybe<CaseStudy_Experience_Operator>;
  readonly featured?: InputMaybe<CaseStudy_Featured_Operator>;
  readonly id?: InputMaybe<CaseStudy_Id_Operator>;
  readonly illustration?: InputMaybe<CaseStudy_Illustration_Operator>;
  readonly links__id?: InputMaybe<CaseStudy_Links__Id_Operator>;
  readonly links__label?: InputMaybe<CaseStudy_Links__Label_Operator>;
  readonly links__url?: InputMaybe<CaseStudy_Links__Url_Operator>;
  readonly meta__description?: InputMaybe<CaseStudy_Meta__Description_Operator>;
  readonly meta__image?: InputMaybe<CaseStudy_Meta__Image_Operator>;
  readonly meta__title?: InputMaybe<CaseStudy_Meta__Title_Operator>;
  readonly publishedAt?: InputMaybe<CaseStudy_PublishedAt_Operator>;
  readonly slug?: InputMaybe<CaseStudy_Slug_Operator>;
  readonly summary?: InputMaybe<CaseStudy_Summary_Operator>;
  readonly tags?: InputMaybe<CaseStudy_Tags_Operator>;
  readonly title?: InputMaybe<CaseStudy_Title_Operator>;
  readonly updatedAt?: InputMaybe<CaseStudy_UpdatedAt_Operator>;
};

export type CaseStudy_Where_And = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<CaseStudy_Where_And>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<CaseStudy_Where_Or>>>;
  readonly content?: InputMaybe<CaseStudy_Content_Operator>;
  readonly createdAt?: InputMaybe<CaseStudy_CreatedAt_Operator>;
  readonly experience?: InputMaybe<CaseStudy_Experience_Operator>;
  readonly featured?: InputMaybe<CaseStudy_Featured_Operator>;
  readonly id?: InputMaybe<CaseStudy_Id_Operator>;
  readonly illustration?: InputMaybe<CaseStudy_Illustration_Operator>;
  readonly links__id?: InputMaybe<CaseStudy_Links__Id_Operator>;
  readonly links__label?: InputMaybe<CaseStudy_Links__Label_Operator>;
  readonly links__url?: InputMaybe<CaseStudy_Links__Url_Operator>;
  readonly meta__description?: InputMaybe<CaseStudy_Meta__Description_Operator>;
  readonly meta__image?: InputMaybe<CaseStudy_Meta__Image_Operator>;
  readonly meta__title?: InputMaybe<CaseStudy_Meta__Title_Operator>;
  readonly publishedAt?: InputMaybe<CaseStudy_PublishedAt_Operator>;
  readonly slug?: InputMaybe<CaseStudy_Slug_Operator>;
  readonly summary?: InputMaybe<CaseStudy_Summary_Operator>;
  readonly tags?: InputMaybe<CaseStudy_Tags_Operator>;
  readonly title?: InputMaybe<CaseStudy_Title_Operator>;
  readonly updatedAt?: InputMaybe<CaseStudy_UpdatedAt_Operator>;
};

export type CaseStudy_Where_Or = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<CaseStudy_Where_And>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<CaseStudy_Where_Or>>>;
  readonly content?: InputMaybe<CaseStudy_Content_Operator>;
  readonly createdAt?: InputMaybe<CaseStudy_CreatedAt_Operator>;
  readonly experience?: InputMaybe<CaseStudy_Experience_Operator>;
  readonly featured?: InputMaybe<CaseStudy_Featured_Operator>;
  readonly id?: InputMaybe<CaseStudy_Id_Operator>;
  readonly illustration?: InputMaybe<CaseStudy_Illustration_Operator>;
  readonly links__id?: InputMaybe<CaseStudy_Links__Id_Operator>;
  readonly links__label?: InputMaybe<CaseStudy_Links__Label_Operator>;
  readonly links__url?: InputMaybe<CaseStudy_Links__Url_Operator>;
  readonly meta__description?: InputMaybe<CaseStudy_Meta__Description_Operator>;
  readonly meta__image?: InputMaybe<CaseStudy_Meta__Image_Operator>;
  readonly meta__title?: InputMaybe<CaseStudy_Meta__Title_Operator>;
  readonly publishedAt?: InputMaybe<CaseStudy_PublishedAt_Operator>;
  readonly slug?: InputMaybe<CaseStudy_Slug_Operator>;
  readonly summary?: InputMaybe<CaseStudy_Summary_Operator>;
  readonly tags?: InputMaybe<CaseStudy_Tags_Operator>;
  readonly title?: InputMaybe<CaseStudy_Title_Operator>;
  readonly updatedAt?: InputMaybe<CaseStudy_UpdatedAt_Operator>;
};

export type ContactForm = {
  readonly __typename?: 'ContactForm';
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly email: Scalars['EmailAddress']['output'];
  readonly id: Scalars['Int']['output'];
  readonly message: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly status?: Maybe<ContactForm_Status>;
  readonly subject: Scalars['String']['output'];
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum ContactFormUpdate_Status_MutationInput {
  InProgress = 'in_progress',
  New = 'new',
  Resolved = 'resolved'
}

export type ContactForm_CreatedAt_Operator = {
  readonly equals?: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly like?: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ContactForm_Email_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['EmailAddress']['input']>>>;
  readonly contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  readonly equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['EmailAddress']['input']>>>;
  readonly like?: InputMaybe<Scalars['EmailAddress']['input']>;
  readonly not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type ContactForm_Id_Operator = {
  readonly equals?: InputMaybe<Scalars['Int']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Int']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  readonly less_than?: InputMaybe<Scalars['Int']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type ContactForm_Message_Operator = {
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type ContactForm_Name_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
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
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<ContactForm_Status_Input>>>;
  readonly equals?: InputMaybe<ContactForm_Status_Input>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<ContactForm_Status_Input>>>;
  readonly not_equals?: InputMaybe<ContactForm_Status_Input>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<ContactForm_Status_Input>>>;
};

export type ContactForm_Subject_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ContactForm_UpdatedAt_Operator = {
  readonly equals?: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly like?: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ContactForm_Where = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<ContactForm_Where_And>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<ContactForm_Where_Or>>>;
  readonly createdAt?: InputMaybe<ContactForm_CreatedAt_Operator>;
  readonly email?: InputMaybe<ContactForm_Email_Operator>;
  readonly id?: InputMaybe<ContactForm_Id_Operator>;
  readonly message?: InputMaybe<ContactForm_Message_Operator>;
  readonly name?: InputMaybe<ContactForm_Name_Operator>;
  readonly status?: InputMaybe<ContactForm_Status_Operator>;
  readonly subject?: InputMaybe<ContactForm_Subject_Operator>;
  readonly updatedAt?: InputMaybe<ContactForm_UpdatedAt_Operator>;
};

export type ContactForm_Where_And = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<ContactForm_Where_And>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<ContactForm_Where_Or>>>;
  readonly createdAt?: InputMaybe<ContactForm_CreatedAt_Operator>;
  readonly email?: InputMaybe<ContactForm_Email_Operator>;
  readonly id?: InputMaybe<ContactForm_Id_Operator>;
  readonly message?: InputMaybe<ContactForm_Message_Operator>;
  readonly name?: InputMaybe<ContactForm_Name_Operator>;
  readonly status?: InputMaybe<ContactForm_Status_Operator>;
  readonly subject?: InputMaybe<ContactForm_Subject_Operator>;
  readonly updatedAt?: InputMaybe<ContactForm_UpdatedAt_Operator>;
};

export type ContactForm_Where_Or = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<ContactForm_Where_And>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<ContactForm_Where_Or>>>;
  readonly createdAt?: InputMaybe<ContactForm_CreatedAt_Operator>;
  readonly email?: InputMaybe<ContactForm_Email_Operator>;
  readonly id?: InputMaybe<ContactForm_Id_Operator>;
  readonly message?: InputMaybe<ContactForm_Message_Operator>;
  readonly name?: InputMaybe<ContactForm_Name_Operator>;
  readonly status?: InputMaybe<ContactForm_Status_Operator>;
  readonly subject?: InputMaybe<ContactForm_Subject_Operator>;
  readonly updatedAt?: InputMaybe<ContactForm_UpdatedAt_Operator>;
};

export type ContactForms = {
  readonly __typename?: 'ContactForms';
  readonly docs: ReadonlyArray<ContactForm>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPrevPage: Scalars['Boolean']['output'];
  readonly limit: Scalars['Int']['output'];
  readonly nextPage: Scalars['Int']['output'];
  readonly offset?: Maybe<Scalars['Int']['output']>;
  readonly page: Scalars['Int']['output'];
  readonly pagingCounter: Scalars['Int']['output'];
  readonly prevPage: Scalars['Int']['output'];
  readonly totalDocs: Scalars['Int']['output'];
  readonly totalPages: Scalars['Int']['output'];
};

export type ContactFormsCreateAccess = {
  readonly __typename?: 'ContactFormsCreateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactFormsCreateDocAccess = {
  readonly __typename?: 'ContactFormsCreateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactFormsDeleteAccess = {
  readonly __typename?: 'ContactFormsDeleteAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactFormsDeleteDocAccess = {
  readonly __typename?: 'ContactFormsDeleteDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactFormsDocAccessFields = {
  readonly __typename?: 'ContactFormsDocAccessFields';
  readonly createdAt?: Maybe<ContactFormsDocAccessFields_CreatedAt>;
  readonly email?: Maybe<ContactFormsDocAccessFields_Email>;
  readonly message?: Maybe<ContactFormsDocAccessFields_Message>;
  readonly name?: Maybe<ContactFormsDocAccessFields_Name>;
  readonly status?: Maybe<ContactFormsDocAccessFields_Status>;
  readonly subject?: Maybe<ContactFormsDocAccessFields_Subject>;
  readonly updatedAt?: Maybe<ContactFormsDocAccessFields_UpdatedAt>;
};

export type ContactFormsDocAccessFields_CreatedAt = {
  readonly __typename?: 'ContactFormsDocAccessFields_createdAt';
  readonly create?: Maybe<ContactFormsDocAccessFields_CreatedAt_Create>;
  readonly delete?: Maybe<ContactFormsDocAccessFields_CreatedAt_Delete>;
  readonly read?: Maybe<ContactFormsDocAccessFields_CreatedAt_Read>;
  readonly update?: Maybe<ContactFormsDocAccessFields_CreatedAt_Update>;
};

export type ContactFormsDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'ContactFormsDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'ContactFormsDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'ContactFormsDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'ContactFormsDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Email = {
  readonly __typename?: 'ContactFormsDocAccessFields_email';
  readonly create?: Maybe<ContactFormsDocAccessFields_Email_Create>;
  readonly delete?: Maybe<ContactFormsDocAccessFields_Email_Delete>;
  readonly read?: Maybe<ContactFormsDocAccessFields_Email_Read>;
  readonly update?: Maybe<ContactFormsDocAccessFields_Email_Update>;
};

export type ContactFormsDocAccessFields_Email_Create = {
  readonly __typename?: 'ContactFormsDocAccessFields_email_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Email_Delete = {
  readonly __typename?: 'ContactFormsDocAccessFields_email_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Email_Read = {
  readonly __typename?: 'ContactFormsDocAccessFields_email_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Email_Update = {
  readonly __typename?: 'ContactFormsDocAccessFields_email_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Message = {
  readonly __typename?: 'ContactFormsDocAccessFields_message';
  readonly create?: Maybe<ContactFormsDocAccessFields_Message_Create>;
  readonly delete?: Maybe<ContactFormsDocAccessFields_Message_Delete>;
  readonly read?: Maybe<ContactFormsDocAccessFields_Message_Read>;
  readonly update?: Maybe<ContactFormsDocAccessFields_Message_Update>;
};

export type ContactFormsDocAccessFields_Message_Create = {
  readonly __typename?: 'ContactFormsDocAccessFields_message_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Message_Delete = {
  readonly __typename?: 'ContactFormsDocAccessFields_message_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Message_Read = {
  readonly __typename?: 'ContactFormsDocAccessFields_message_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Message_Update = {
  readonly __typename?: 'ContactFormsDocAccessFields_message_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Name = {
  readonly __typename?: 'ContactFormsDocAccessFields_name';
  readonly create?: Maybe<ContactFormsDocAccessFields_Name_Create>;
  readonly delete?: Maybe<ContactFormsDocAccessFields_Name_Delete>;
  readonly read?: Maybe<ContactFormsDocAccessFields_Name_Read>;
  readonly update?: Maybe<ContactFormsDocAccessFields_Name_Update>;
};

export type ContactFormsDocAccessFields_Name_Create = {
  readonly __typename?: 'ContactFormsDocAccessFields_name_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Name_Delete = {
  readonly __typename?: 'ContactFormsDocAccessFields_name_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Name_Read = {
  readonly __typename?: 'ContactFormsDocAccessFields_name_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Name_Update = {
  readonly __typename?: 'ContactFormsDocAccessFields_name_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Status = {
  readonly __typename?: 'ContactFormsDocAccessFields_status';
  readonly create?: Maybe<ContactFormsDocAccessFields_Status_Create>;
  readonly delete?: Maybe<ContactFormsDocAccessFields_Status_Delete>;
  readonly read?: Maybe<ContactFormsDocAccessFields_Status_Read>;
  readonly update?: Maybe<ContactFormsDocAccessFields_Status_Update>;
};

export type ContactFormsDocAccessFields_Status_Create = {
  readonly __typename?: 'ContactFormsDocAccessFields_status_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Status_Delete = {
  readonly __typename?: 'ContactFormsDocAccessFields_status_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Status_Read = {
  readonly __typename?: 'ContactFormsDocAccessFields_status_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Status_Update = {
  readonly __typename?: 'ContactFormsDocAccessFields_status_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Subject = {
  readonly __typename?: 'ContactFormsDocAccessFields_subject';
  readonly create?: Maybe<ContactFormsDocAccessFields_Subject_Create>;
  readonly delete?: Maybe<ContactFormsDocAccessFields_Subject_Delete>;
  readonly read?: Maybe<ContactFormsDocAccessFields_Subject_Read>;
  readonly update?: Maybe<ContactFormsDocAccessFields_Subject_Update>;
};

export type ContactFormsDocAccessFields_Subject_Create = {
  readonly __typename?: 'ContactFormsDocAccessFields_subject_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Subject_Delete = {
  readonly __typename?: 'ContactFormsDocAccessFields_subject_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Subject_Read = {
  readonly __typename?: 'ContactFormsDocAccessFields_subject_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_Subject_Update = {
  readonly __typename?: 'ContactFormsDocAccessFields_subject_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_UpdatedAt = {
  readonly __typename?: 'ContactFormsDocAccessFields_updatedAt';
  readonly create?: Maybe<ContactFormsDocAccessFields_UpdatedAt_Create>;
  readonly delete?: Maybe<ContactFormsDocAccessFields_UpdatedAt_Delete>;
  readonly read?: Maybe<ContactFormsDocAccessFields_UpdatedAt_Read>;
  readonly update?: Maybe<ContactFormsDocAccessFields_UpdatedAt_Update>;
};

export type ContactFormsDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'ContactFormsDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'ContactFormsDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'ContactFormsDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'ContactFormsDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields = {
  readonly __typename?: 'ContactFormsFields';
  readonly createdAt?: Maybe<ContactFormsFields_CreatedAt>;
  readonly email?: Maybe<ContactFormsFields_Email>;
  readonly message?: Maybe<ContactFormsFields_Message>;
  readonly name?: Maybe<ContactFormsFields_Name>;
  readonly status?: Maybe<ContactFormsFields_Status>;
  readonly subject?: Maybe<ContactFormsFields_Subject>;
  readonly updatedAt?: Maybe<ContactFormsFields_UpdatedAt>;
};

export type ContactFormsFields_CreatedAt = {
  readonly __typename?: 'ContactFormsFields_createdAt';
  readonly create?: Maybe<ContactFormsFields_CreatedAt_Create>;
  readonly delete?: Maybe<ContactFormsFields_CreatedAt_Delete>;
  readonly read?: Maybe<ContactFormsFields_CreatedAt_Read>;
  readonly update?: Maybe<ContactFormsFields_CreatedAt_Update>;
};

export type ContactFormsFields_CreatedAt_Create = {
  readonly __typename?: 'ContactFormsFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_CreatedAt_Delete = {
  readonly __typename?: 'ContactFormsFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_CreatedAt_Read = {
  readonly __typename?: 'ContactFormsFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_CreatedAt_Update = {
  readonly __typename?: 'ContactFormsFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Email = {
  readonly __typename?: 'ContactFormsFields_email';
  readonly create?: Maybe<ContactFormsFields_Email_Create>;
  readonly delete?: Maybe<ContactFormsFields_Email_Delete>;
  readonly read?: Maybe<ContactFormsFields_Email_Read>;
  readonly update?: Maybe<ContactFormsFields_Email_Update>;
};

export type ContactFormsFields_Email_Create = {
  readonly __typename?: 'ContactFormsFields_email_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Email_Delete = {
  readonly __typename?: 'ContactFormsFields_email_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Email_Read = {
  readonly __typename?: 'ContactFormsFields_email_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Email_Update = {
  readonly __typename?: 'ContactFormsFields_email_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Message = {
  readonly __typename?: 'ContactFormsFields_message';
  readonly create?: Maybe<ContactFormsFields_Message_Create>;
  readonly delete?: Maybe<ContactFormsFields_Message_Delete>;
  readonly read?: Maybe<ContactFormsFields_Message_Read>;
  readonly update?: Maybe<ContactFormsFields_Message_Update>;
};

export type ContactFormsFields_Message_Create = {
  readonly __typename?: 'ContactFormsFields_message_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Message_Delete = {
  readonly __typename?: 'ContactFormsFields_message_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Message_Read = {
  readonly __typename?: 'ContactFormsFields_message_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Message_Update = {
  readonly __typename?: 'ContactFormsFields_message_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Name = {
  readonly __typename?: 'ContactFormsFields_name';
  readonly create?: Maybe<ContactFormsFields_Name_Create>;
  readonly delete?: Maybe<ContactFormsFields_Name_Delete>;
  readonly read?: Maybe<ContactFormsFields_Name_Read>;
  readonly update?: Maybe<ContactFormsFields_Name_Update>;
};

export type ContactFormsFields_Name_Create = {
  readonly __typename?: 'ContactFormsFields_name_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Name_Delete = {
  readonly __typename?: 'ContactFormsFields_name_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Name_Read = {
  readonly __typename?: 'ContactFormsFields_name_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Name_Update = {
  readonly __typename?: 'ContactFormsFields_name_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Status = {
  readonly __typename?: 'ContactFormsFields_status';
  readonly create?: Maybe<ContactFormsFields_Status_Create>;
  readonly delete?: Maybe<ContactFormsFields_Status_Delete>;
  readonly read?: Maybe<ContactFormsFields_Status_Read>;
  readonly update?: Maybe<ContactFormsFields_Status_Update>;
};

export type ContactFormsFields_Status_Create = {
  readonly __typename?: 'ContactFormsFields_status_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Status_Delete = {
  readonly __typename?: 'ContactFormsFields_status_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Status_Read = {
  readonly __typename?: 'ContactFormsFields_status_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Status_Update = {
  readonly __typename?: 'ContactFormsFields_status_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Subject = {
  readonly __typename?: 'ContactFormsFields_subject';
  readonly create?: Maybe<ContactFormsFields_Subject_Create>;
  readonly delete?: Maybe<ContactFormsFields_Subject_Delete>;
  readonly read?: Maybe<ContactFormsFields_Subject_Read>;
  readonly update?: Maybe<ContactFormsFields_Subject_Update>;
};

export type ContactFormsFields_Subject_Create = {
  readonly __typename?: 'ContactFormsFields_subject_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Subject_Delete = {
  readonly __typename?: 'ContactFormsFields_subject_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Subject_Read = {
  readonly __typename?: 'ContactFormsFields_subject_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_Subject_Update = {
  readonly __typename?: 'ContactFormsFields_subject_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_UpdatedAt = {
  readonly __typename?: 'ContactFormsFields_updatedAt';
  readonly create?: Maybe<ContactFormsFields_UpdatedAt_Create>;
  readonly delete?: Maybe<ContactFormsFields_UpdatedAt_Delete>;
  readonly read?: Maybe<ContactFormsFields_UpdatedAt_Read>;
  readonly update?: Maybe<ContactFormsFields_UpdatedAt_Update>;
};

export type ContactFormsFields_UpdatedAt_Create = {
  readonly __typename?: 'ContactFormsFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_UpdatedAt_Delete = {
  readonly __typename?: 'ContactFormsFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_UpdatedAt_Read = {
  readonly __typename?: 'ContactFormsFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsFields_UpdatedAt_Update = {
  readonly __typename?: 'ContactFormsFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ContactFormsReadAccess = {
  readonly __typename?: 'ContactFormsReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactFormsReadDocAccess = {
  readonly __typename?: 'ContactFormsReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactFormsUpdateAccess = {
  readonly __typename?: 'ContactFormsUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactFormsUpdateDocAccess = {
  readonly __typename?: 'ContactFormsUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Experience = {
  readonly __typename?: 'Experience';
  readonly coverImage?: Maybe<Media>;
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly endDate?: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['Int']['output'];
  readonly meta?: Maybe<Experience_Meta>;
  readonly role?: Maybe<Scalars['String']['output']>;
  readonly slug?: Maybe<Scalars['String']['output']>;
  readonly startDate?: Maybe<Scalars['DateTime']['output']>;
  readonly summary: Scalars['JSON']['output'];
  readonly tags: ReadonlyArray<Tag>;
  readonly thumbnailImage?: Maybe<Media>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ExperienceSummaryArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type Experience_Meta = {
  readonly __typename?: 'Experience_Meta';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly image?: Maybe<Media>;
  readonly title?: Maybe<Scalars['String']['output']>;
};

export type Experience_CoverImage_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals?: InputMaybe<Scalars['JSON']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals?: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Experience_CreatedAt_Operator = {
  readonly equals?: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly like?: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Experience_EndDate_Operator = {
  readonly equals?: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly like?: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Experience_Id_Operator = {
  readonly equals?: InputMaybe<Scalars['Int']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Int']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  readonly less_than?: InputMaybe<Scalars['Int']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Experience_Meta__Description_Operator = {
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Experience_Meta__Image_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals?: InputMaybe<Scalars['JSON']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals?: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Experience_Meta__Title_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Experience_Role_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Experience_Slug_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Experience_StartDate_Operator = {
  readonly equals?: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly like?: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Experience_Summary_Operator = {
  readonly contains?: InputMaybe<Scalars['JSON']['input']>;
  readonly equals?: InputMaybe<Scalars['JSON']['input']>;
  readonly like?: InputMaybe<Scalars['JSON']['input']>;
  readonly not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Experience_Tags_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals?: InputMaybe<Scalars['JSON']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals?: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Experience_ThumbnailImage_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals?: InputMaybe<Scalars['JSON']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals?: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Experience_Title_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Experience_UpdatedAt_Operator = {
  readonly equals?: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly like?: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Experience_Where = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<Experience_Where_And>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<Experience_Where_Or>>>;
  readonly coverImage?: InputMaybe<Experience_CoverImage_Operator>;
  readonly createdAt?: InputMaybe<Experience_CreatedAt_Operator>;
  readonly endDate?: InputMaybe<Experience_EndDate_Operator>;
  readonly id?: InputMaybe<Experience_Id_Operator>;
  readonly meta__description?: InputMaybe<Experience_Meta__Description_Operator>;
  readonly meta__image?: InputMaybe<Experience_Meta__Image_Operator>;
  readonly meta__title?: InputMaybe<Experience_Meta__Title_Operator>;
  readonly role?: InputMaybe<Experience_Role_Operator>;
  readonly slug?: InputMaybe<Experience_Slug_Operator>;
  readonly startDate?: InputMaybe<Experience_StartDate_Operator>;
  readonly summary?: InputMaybe<Experience_Summary_Operator>;
  readonly tags?: InputMaybe<Experience_Tags_Operator>;
  readonly thumbnailImage?: InputMaybe<Experience_ThumbnailImage_Operator>;
  readonly title?: InputMaybe<Experience_Title_Operator>;
  readonly updatedAt?: InputMaybe<Experience_UpdatedAt_Operator>;
};

export type Experience_Where_And = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<Experience_Where_And>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<Experience_Where_Or>>>;
  readonly coverImage?: InputMaybe<Experience_CoverImage_Operator>;
  readonly createdAt?: InputMaybe<Experience_CreatedAt_Operator>;
  readonly endDate?: InputMaybe<Experience_EndDate_Operator>;
  readonly id?: InputMaybe<Experience_Id_Operator>;
  readonly meta__description?: InputMaybe<Experience_Meta__Description_Operator>;
  readonly meta__image?: InputMaybe<Experience_Meta__Image_Operator>;
  readonly meta__title?: InputMaybe<Experience_Meta__Title_Operator>;
  readonly role?: InputMaybe<Experience_Role_Operator>;
  readonly slug?: InputMaybe<Experience_Slug_Operator>;
  readonly startDate?: InputMaybe<Experience_StartDate_Operator>;
  readonly summary?: InputMaybe<Experience_Summary_Operator>;
  readonly tags?: InputMaybe<Experience_Tags_Operator>;
  readonly thumbnailImage?: InputMaybe<Experience_ThumbnailImage_Operator>;
  readonly title?: InputMaybe<Experience_Title_Operator>;
  readonly updatedAt?: InputMaybe<Experience_UpdatedAt_Operator>;
};

export type Experience_Where_Or = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<Experience_Where_And>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<Experience_Where_Or>>>;
  readonly coverImage?: InputMaybe<Experience_CoverImage_Operator>;
  readonly createdAt?: InputMaybe<Experience_CreatedAt_Operator>;
  readonly endDate?: InputMaybe<Experience_EndDate_Operator>;
  readonly id?: InputMaybe<Experience_Id_Operator>;
  readonly meta__description?: InputMaybe<Experience_Meta__Description_Operator>;
  readonly meta__image?: InputMaybe<Experience_Meta__Image_Operator>;
  readonly meta__title?: InputMaybe<Experience_Meta__Title_Operator>;
  readonly role?: InputMaybe<Experience_Role_Operator>;
  readonly slug?: InputMaybe<Experience_Slug_Operator>;
  readonly startDate?: InputMaybe<Experience_StartDate_Operator>;
  readonly summary?: InputMaybe<Experience_Summary_Operator>;
  readonly tags?: InputMaybe<Experience_Tags_Operator>;
  readonly thumbnailImage?: InputMaybe<Experience_ThumbnailImage_Operator>;
  readonly title?: InputMaybe<Experience_Title_Operator>;
  readonly updatedAt?: InputMaybe<Experience_UpdatedAt_Operator>;
};

export type Experiences = {
  readonly __typename?: 'Experiences';
  readonly docs: ReadonlyArray<Experience>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPrevPage: Scalars['Boolean']['output'];
  readonly limit: Scalars['Int']['output'];
  readonly nextPage: Scalars['Int']['output'];
  readonly offset?: Maybe<Scalars['Int']['output']>;
  readonly page: Scalars['Int']['output'];
  readonly pagingCounter: Scalars['Int']['output'];
  readonly prevPage: Scalars['Int']['output'];
  readonly totalDocs: Scalars['Int']['output'];
  readonly totalPages: Scalars['Int']['output'];
};

export type ExperiencesCreateAccess = {
  readonly __typename?: 'ExperiencesCreateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ExperiencesCreateDocAccess = {
  readonly __typename?: 'ExperiencesCreateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ExperiencesDeleteAccess = {
  readonly __typename?: 'ExperiencesDeleteAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ExperiencesDeleteDocAccess = {
  readonly __typename?: 'ExperiencesDeleteDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ExperiencesDocAccessFields = {
  readonly __typename?: 'ExperiencesDocAccessFields';
  readonly coverImage?: Maybe<ExperiencesDocAccessFields_CoverImage>;
  readonly createdAt?: Maybe<ExperiencesDocAccessFields_CreatedAt>;
  readonly endDate?: Maybe<ExperiencesDocAccessFields_EndDate>;
  readonly meta?: Maybe<ExperiencesDocAccessFields_Meta>;
  readonly role?: Maybe<ExperiencesDocAccessFields_Role>;
  readonly slug?: Maybe<ExperiencesDocAccessFields_Slug>;
  readonly startDate?: Maybe<ExperiencesDocAccessFields_StartDate>;
  readonly summary?: Maybe<ExperiencesDocAccessFields_Summary>;
  readonly tags?: Maybe<ExperiencesDocAccessFields_Tags>;
  readonly thumbnailImage?: Maybe<ExperiencesDocAccessFields_ThumbnailImage>;
  readonly title?: Maybe<ExperiencesDocAccessFields_Title>;
  readonly updatedAt?: Maybe<ExperiencesDocAccessFields_UpdatedAt>;
};

export type ExperiencesDocAccessFields_CoverImage = {
  readonly __typename?: 'ExperiencesDocAccessFields_coverImage';
  readonly create?: Maybe<ExperiencesDocAccessFields_CoverImage_Create>;
  readonly delete?: Maybe<ExperiencesDocAccessFields_CoverImage_Delete>;
  readonly read?: Maybe<ExperiencesDocAccessFields_CoverImage_Read>;
  readonly update?: Maybe<ExperiencesDocAccessFields_CoverImage_Update>;
};

export type ExperiencesDocAccessFields_CoverImage_Create = {
  readonly __typename?: 'ExperiencesDocAccessFields_coverImage_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_CoverImage_Delete = {
  readonly __typename?: 'ExperiencesDocAccessFields_coverImage_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_CoverImage_Read = {
  readonly __typename?: 'ExperiencesDocAccessFields_coverImage_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_CoverImage_Update = {
  readonly __typename?: 'ExperiencesDocAccessFields_coverImage_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_CreatedAt = {
  readonly __typename?: 'ExperiencesDocAccessFields_createdAt';
  readonly create?: Maybe<ExperiencesDocAccessFields_CreatedAt_Create>;
  readonly delete?: Maybe<ExperiencesDocAccessFields_CreatedAt_Delete>;
  readonly read?: Maybe<ExperiencesDocAccessFields_CreatedAt_Read>;
  readonly update?: Maybe<ExperiencesDocAccessFields_CreatedAt_Update>;
};

export type ExperiencesDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'ExperiencesDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'ExperiencesDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'ExperiencesDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'ExperiencesDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_EndDate = {
  readonly __typename?: 'ExperiencesDocAccessFields_endDate';
  readonly create?: Maybe<ExperiencesDocAccessFields_EndDate_Create>;
  readonly delete?: Maybe<ExperiencesDocAccessFields_EndDate_Delete>;
  readonly read?: Maybe<ExperiencesDocAccessFields_EndDate_Read>;
  readonly update?: Maybe<ExperiencesDocAccessFields_EndDate_Update>;
};

export type ExperiencesDocAccessFields_EndDate_Create = {
  readonly __typename?: 'ExperiencesDocAccessFields_endDate_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_EndDate_Delete = {
  readonly __typename?: 'ExperiencesDocAccessFields_endDate_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_EndDate_Read = {
  readonly __typename?: 'ExperiencesDocAccessFields_endDate_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_EndDate_Update = {
  readonly __typename?: 'ExperiencesDocAccessFields_endDate_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta = {
  readonly __typename?: 'ExperiencesDocAccessFields_meta';
  readonly create?: Maybe<ExperiencesDocAccessFields_Meta_Create>;
  readonly delete?: Maybe<ExperiencesDocAccessFields_Meta_Delete>;
  readonly fields?: Maybe<ExperiencesDocAccessFields_Meta_Fields>;
  readonly read?: Maybe<ExperiencesDocAccessFields_Meta_Read>;
  readonly update?: Maybe<ExperiencesDocAccessFields_Meta_Update>;
};

export type ExperiencesDocAccessFields_Meta_Create = {
  readonly __typename?: 'ExperiencesDocAccessFields_meta_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Delete = {
  readonly __typename?: 'ExperiencesDocAccessFields_meta_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Fields = {
  readonly __typename?: 'ExperiencesDocAccessFields_meta_Fields';
  readonly description?: Maybe<ExperiencesDocAccessFields_Meta_Description>;
  readonly image?: Maybe<ExperiencesDocAccessFields_Meta_Image>;
  readonly title?: Maybe<ExperiencesDocAccessFields_Meta_Title>;
};

export type ExperiencesDocAccessFields_Meta_Read = {
  readonly __typename?: 'ExperiencesDocAccessFields_meta_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Update = {
  readonly __typename?: 'ExperiencesDocAccessFields_meta_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Description = {
  readonly __typename?: 'ExperiencesDocAccessFields_meta_description';
  readonly create?: Maybe<ExperiencesDocAccessFields_Meta_Description_Create>;
  readonly delete?: Maybe<ExperiencesDocAccessFields_Meta_Description_Delete>;
  readonly read?: Maybe<ExperiencesDocAccessFields_Meta_Description_Read>;
  readonly update?: Maybe<ExperiencesDocAccessFields_Meta_Description_Update>;
};

export type ExperiencesDocAccessFields_Meta_Description_Create = {
  readonly __typename?: 'ExperiencesDocAccessFields_meta_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Description_Delete = {
  readonly __typename?: 'ExperiencesDocAccessFields_meta_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Description_Read = {
  readonly __typename?: 'ExperiencesDocAccessFields_meta_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Description_Update = {
  readonly __typename?: 'ExperiencesDocAccessFields_meta_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Image = {
  readonly __typename?: 'ExperiencesDocAccessFields_meta_image';
  readonly create?: Maybe<ExperiencesDocAccessFields_Meta_Image_Create>;
  readonly delete?: Maybe<ExperiencesDocAccessFields_Meta_Image_Delete>;
  readonly read?: Maybe<ExperiencesDocAccessFields_Meta_Image_Read>;
  readonly update?: Maybe<ExperiencesDocAccessFields_Meta_Image_Update>;
};

export type ExperiencesDocAccessFields_Meta_Image_Create = {
  readonly __typename?: 'ExperiencesDocAccessFields_meta_image_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Image_Delete = {
  readonly __typename?: 'ExperiencesDocAccessFields_meta_image_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Image_Read = {
  readonly __typename?: 'ExperiencesDocAccessFields_meta_image_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Image_Update = {
  readonly __typename?: 'ExperiencesDocAccessFields_meta_image_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Title = {
  readonly __typename?: 'ExperiencesDocAccessFields_meta_title';
  readonly create?: Maybe<ExperiencesDocAccessFields_Meta_Title_Create>;
  readonly delete?: Maybe<ExperiencesDocAccessFields_Meta_Title_Delete>;
  readonly read?: Maybe<ExperiencesDocAccessFields_Meta_Title_Read>;
  readonly update?: Maybe<ExperiencesDocAccessFields_Meta_Title_Update>;
};

export type ExperiencesDocAccessFields_Meta_Title_Create = {
  readonly __typename?: 'ExperiencesDocAccessFields_meta_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Title_Delete = {
  readonly __typename?: 'ExperiencesDocAccessFields_meta_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Title_Read = {
  readonly __typename?: 'ExperiencesDocAccessFields_meta_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Meta_Title_Update = {
  readonly __typename?: 'ExperiencesDocAccessFields_meta_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Role = {
  readonly __typename?: 'ExperiencesDocAccessFields_role';
  readonly create?: Maybe<ExperiencesDocAccessFields_Role_Create>;
  readonly delete?: Maybe<ExperiencesDocAccessFields_Role_Delete>;
  readonly read?: Maybe<ExperiencesDocAccessFields_Role_Read>;
  readonly update?: Maybe<ExperiencesDocAccessFields_Role_Update>;
};

export type ExperiencesDocAccessFields_Role_Create = {
  readonly __typename?: 'ExperiencesDocAccessFields_role_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Role_Delete = {
  readonly __typename?: 'ExperiencesDocAccessFields_role_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Role_Read = {
  readonly __typename?: 'ExperiencesDocAccessFields_role_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Role_Update = {
  readonly __typename?: 'ExperiencesDocAccessFields_role_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Slug = {
  readonly __typename?: 'ExperiencesDocAccessFields_slug';
  readonly create?: Maybe<ExperiencesDocAccessFields_Slug_Create>;
  readonly delete?: Maybe<ExperiencesDocAccessFields_Slug_Delete>;
  readonly read?: Maybe<ExperiencesDocAccessFields_Slug_Read>;
  readonly update?: Maybe<ExperiencesDocAccessFields_Slug_Update>;
};

export type ExperiencesDocAccessFields_Slug_Create = {
  readonly __typename?: 'ExperiencesDocAccessFields_slug_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Slug_Delete = {
  readonly __typename?: 'ExperiencesDocAccessFields_slug_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Slug_Read = {
  readonly __typename?: 'ExperiencesDocAccessFields_slug_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Slug_Update = {
  readonly __typename?: 'ExperiencesDocAccessFields_slug_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_StartDate = {
  readonly __typename?: 'ExperiencesDocAccessFields_startDate';
  readonly create?: Maybe<ExperiencesDocAccessFields_StartDate_Create>;
  readonly delete?: Maybe<ExperiencesDocAccessFields_StartDate_Delete>;
  readonly read?: Maybe<ExperiencesDocAccessFields_StartDate_Read>;
  readonly update?: Maybe<ExperiencesDocAccessFields_StartDate_Update>;
};

export type ExperiencesDocAccessFields_StartDate_Create = {
  readonly __typename?: 'ExperiencesDocAccessFields_startDate_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_StartDate_Delete = {
  readonly __typename?: 'ExperiencesDocAccessFields_startDate_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_StartDate_Read = {
  readonly __typename?: 'ExperiencesDocAccessFields_startDate_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_StartDate_Update = {
  readonly __typename?: 'ExperiencesDocAccessFields_startDate_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Summary = {
  readonly __typename?: 'ExperiencesDocAccessFields_summary';
  readonly create?: Maybe<ExperiencesDocAccessFields_Summary_Create>;
  readonly delete?: Maybe<ExperiencesDocAccessFields_Summary_Delete>;
  readonly read?: Maybe<ExperiencesDocAccessFields_Summary_Read>;
  readonly update?: Maybe<ExperiencesDocAccessFields_Summary_Update>;
};

export type ExperiencesDocAccessFields_Summary_Create = {
  readonly __typename?: 'ExperiencesDocAccessFields_summary_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Summary_Delete = {
  readonly __typename?: 'ExperiencesDocAccessFields_summary_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Summary_Read = {
  readonly __typename?: 'ExperiencesDocAccessFields_summary_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Summary_Update = {
  readonly __typename?: 'ExperiencesDocAccessFields_summary_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Tags = {
  readonly __typename?: 'ExperiencesDocAccessFields_tags';
  readonly create?: Maybe<ExperiencesDocAccessFields_Tags_Create>;
  readonly delete?: Maybe<ExperiencesDocAccessFields_Tags_Delete>;
  readonly read?: Maybe<ExperiencesDocAccessFields_Tags_Read>;
  readonly update?: Maybe<ExperiencesDocAccessFields_Tags_Update>;
};

export type ExperiencesDocAccessFields_Tags_Create = {
  readonly __typename?: 'ExperiencesDocAccessFields_tags_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Tags_Delete = {
  readonly __typename?: 'ExperiencesDocAccessFields_tags_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Tags_Read = {
  readonly __typename?: 'ExperiencesDocAccessFields_tags_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Tags_Update = {
  readonly __typename?: 'ExperiencesDocAccessFields_tags_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_ThumbnailImage = {
  readonly __typename?: 'ExperiencesDocAccessFields_thumbnailImage';
  readonly create?: Maybe<ExperiencesDocAccessFields_ThumbnailImage_Create>;
  readonly delete?: Maybe<ExperiencesDocAccessFields_ThumbnailImage_Delete>;
  readonly read?: Maybe<ExperiencesDocAccessFields_ThumbnailImage_Read>;
  readonly update?: Maybe<ExperiencesDocAccessFields_ThumbnailImage_Update>;
};

export type ExperiencesDocAccessFields_ThumbnailImage_Create = {
  readonly __typename?: 'ExperiencesDocAccessFields_thumbnailImage_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_ThumbnailImage_Delete = {
  readonly __typename?: 'ExperiencesDocAccessFields_thumbnailImage_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_ThumbnailImage_Read = {
  readonly __typename?: 'ExperiencesDocAccessFields_thumbnailImage_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_ThumbnailImage_Update = {
  readonly __typename?: 'ExperiencesDocAccessFields_thumbnailImage_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Title = {
  readonly __typename?: 'ExperiencesDocAccessFields_title';
  readonly create?: Maybe<ExperiencesDocAccessFields_Title_Create>;
  readonly delete?: Maybe<ExperiencesDocAccessFields_Title_Delete>;
  readonly read?: Maybe<ExperiencesDocAccessFields_Title_Read>;
  readonly update?: Maybe<ExperiencesDocAccessFields_Title_Update>;
};

export type ExperiencesDocAccessFields_Title_Create = {
  readonly __typename?: 'ExperiencesDocAccessFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Title_Delete = {
  readonly __typename?: 'ExperiencesDocAccessFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Title_Read = {
  readonly __typename?: 'ExperiencesDocAccessFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_Title_Update = {
  readonly __typename?: 'ExperiencesDocAccessFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_UpdatedAt = {
  readonly __typename?: 'ExperiencesDocAccessFields_updatedAt';
  readonly create?: Maybe<ExperiencesDocAccessFields_UpdatedAt_Create>;
  readonly delete?: Maybe<ExperiencesDocAccessFields_UpdatedAt_Delete>;
  readonly read?: Maybe<ExperiencesDocAccessFields_UpdatedAt_Read>;
  readonly update?: Maybe<ExperiencesDocAccessFields_UpdatedAt_Update>;
};

export type ExperiencesDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'ExperiencesDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'ExperiencesDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'ExperiencesDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'ExperiencesDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields = {
  readonly __typename?: 'ExperiencesFields';
  readonly coverImage?: Maybe<ExperiencesFields_CoverImage>;
  readonly createdAt?: Maybe<ExperiencesFields_CreatedAt>;
  readonly endDate?: Maybe<ExperiencesFields_EndDate>;
  readonly meta?: Maybe<ExperiencesFields_Meta>;
  readonly role?: Maybe<ExperiencesFields_Role>;
  readonly slug?: Maybe<ExperiencesFields_Slug>;
  readonly startDate?: Maybe<ExperiencesFields_StartDate>;
  readonly summary?: Maybe<ExperiencesFields_Summary>;
  readonly tags?: Maybe<ExperiencesFields_Tags>;
  readonly thumbnailImage?: Maybe<ExperiencesFields_ThumbnailImage>;
  readonly title?: Maybe<ExperiencesFields_Title>;
  readonly updatedAt?: Maybe<ExperiencesFields_UpdatedAt>;
};

export type ExperiencesFields_CoverImage = {
  readonly __typename?: 'ExperiencesFields_coverImage';
  readonly create?: Maybe<ExperiencesFields_CoverImage_Create>;
  readonly delete?: Maybe<ExperiencesFields_CoverImage_Delete>;
  readonly read?: Maybe<ExperiencesFields_CoverImage_Read>;
  readonly update?: Maybe<ExperiencesFields_CoverImage_Update>;
};

export type ExperiencesFields_CoverImage_Create = {
  readonly __typename?: 'ExperiencesFields_coverImage_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_CoverImage_Delete = {
  readonly __typename?: 'ExperiencesFields_coverImage_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_CoverImage_Read = {
  readonly __typename?: 'ExperiencesFields_coverImage_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_CoverImage_Update = {
  readonly __typename?: 'ExperiencesFields_coverImage_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_CreatedAt = {
  readonly __typename?: 'ExperiencesFields_createdAt';
  readonly create?: Maybe<ExperiencesFields_CreatedAt_Create>;
  readonly delete?: Maybe<ExperiencesFields_CreatedAt_Delete>;
  readonly read?: Maybe<ExperiencesFields_CreatedAt_Read>;
  readonly update?: Maybe<ExperiencesFields_CreatedAt_Update>;
};

export type ExperiencesFields_CreatedAt_Create = {
  readonly __typename?: 'ExperiencesFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_CreatedAt_Delete = {
  readonly __typename?: 'ExperiencesFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_CreatedAt_Read = {
  readonly __typename?: 'ExperiencesFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_CreatedAt_Update = {
  readonly __typename?: 'ExperiencesFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_EndDate = {
  readonly __typename?: 'ExperiencesFields_endDate';
  readonly create?: Maybe<ExperiencesFields_EndDate_Create>;
  readonly delete?: Maybe<ExperiencesFields_EndDate_Delete>;
  readonly read?: Maybe<ExperiencesFields_EndDate_Read>;
  readonly update?: Maybe<ExperiencesFields_EndDate_Update>;
};

export type ExperiencesFields_EndDate_Create = {
  readonly __typename?: 'ExperiencesFields_endDate_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_EndDate_Delete = {
  readonly __typename?: 'ExperiencesFields_endDate_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_EndDate_Read = {
  readonly __typename?: 'ExperiencesFields_endDate_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_EndDate_Update = {
  readonly __typename?: 'ExperiencesFields_endDate_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta = {
  readonly __typename?: 'ExperiencesFields_meta';
  readonly create?: Maybe<ExperiencesFields_Meta_Create>;
  readonly delete?: Maybe<ExperiencesFields_Meta_Delete>;
  readonly fields?: Maybe<ExperiencesFields_Meta_Fields>;
  readonly read?: Maybe<ExperiencesFields_Meta_Read>;
  readonly update?: Maybe<ExperiencesFields_Meta_Update>;
};

export type ExperiencesFields_Meta_Create = {
  readonly __typename?: 'ExperiencesFields_meta_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Delete = {
  readonly __typename?: 'ExperiencesFields_meta_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Fields = {
  readonly __typename?: 'ExperiencesFields_meta_Fields';
  readonly description?: Maybe<ExperiencesFields_Meta_Description>;
  readonly image?: Maybe<ExperiencesFields_Meta_Image>;
  readonly title?: Maybe<ExperiencesFields_Meta_Title>;
};

export type ExperiencesFields_Meta_Read = {
  readonly __typename?: 'ExperiencesFields_meta_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Update = {
  readonly __typename?: 'ExperiencesFields_meta_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Description = {
  readonly __typename?: 'ExperiencesFields_meta_description';
  readonly create?: Maybe<ExperiencesFields_Meta_Description_Create>;
  readonly delete?: Maybe<ExperiencesFields_Meta_Description_Delete>;
  readonly read?: Maybe<ExperiencesFields_Meta_Description_Read>;
  readonly update?: Maybe<ExperiencesFields_Meta_Description_Update>;
};

export type ExperiencesFields_Meta_Description_Create = {
  readonly __typename?: 'ExperiencesFields_meta_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Description_Delete = {
  readonly __typename?: 'ExperiencesFields_meta_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Description_Read = {
  readonly __typename?: 'ExperiencesFields_meta_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Description_Update = {
  readonly __typename?: 'ExperiencesFields_meta_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Image = {
  readonly __typename?: 'ExperiencesFields_meta_image';
  readonly create?: Maybe<ExperiencesFields_Meta_Image_Create>;
  readonly delete?: Maybe<ExperiencesFields_Meta_Image_Delete>;
  readonly read?: Maybe<ExperiencesFields_Meta_Image_Read>;
  readonly update?: Maybe<ExperiencesFields_Meta_Image_Update>;
};

export type ExperiencesFields_Meta_Image_Create = {
  readonly __typename?: 'ExperiencesFields_meta_image_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Image_Delete = {
  readonly __typename?: 'ExperiencesFields_meta_image_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Image_Read = {
  readonly __typename?: 'ExperiencesFields_meta_image_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Image_Update = {
  readonly __typename?: 'ExperiencesFields_meta_image_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Title = {
  readonly __typename?: 'ExperiencesFields_meta_title';
  readonly create?: Maybe<ExperiencesFields_Meta_Title_Create>;
  readonly delete?: Maybe<ExperiencesFields_Meta_Title_Delete>;
  readonly read?: Maybe<ExperiencesFields_Meta_Title_Read>;
  readonly update?: Maybe<ExperiencesFields_Meta_Title_Update>;
};

export type ExperiencesFields_Meta_Title_Create = {
  readonly __typename?: 'ExperiencesFields_meta_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Title_Delete = {
  readonly __typename?: 'ExperiencesFields_meta_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Title_Read = {
  readonly __typename?: 'ExperiencesFields_meta_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Meta_Title_Update = {
  readonly __typename?: 'ExperiencesFields_meta_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Role = {
  readonly __typename?: 'ExperiencesFields_role';
  readonly create?: Maybe<ExperiencesFields_Role_Create>;
  readonly delete?: Maybe<ExperiencesFields_Role_Delete>;
  readonly read?: Maybe<ExperiencesFields_Role_Read>;
  readonly update?: Maybe<ExperiencesFields_Role_Update>;
};

export type ExperiencesFields_Role_Create = {
  readonly __typename?: 'ExperiencesFields_role_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Role_Delete = {
  readonly __typename?: 'ExperiencesFields_role_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Role_Read = {
  readonly __typename?: 'ExperiencesFields_role_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Role_Update = {
  readonly __typename?: 'ExperiencesFields_role_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Slug = {
  readonly __typename?: 'ExperiencesFields_slug';
  readonly create?: Maybe<ExperiencesFields_Slug_Create>;
  readonly delete?: Maybe<ExperiencesFields_Slug_Delete>;
  readonly read?: Maybe<ExperiencesFields_Slug_Read>;
  readonly update?: Maybe<ExperiencesFields_Slug_Update>;
};

export type ExperiencesFields_Slug_Create = {
  readonly __typename?: 'ExperiencesFields_slug_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Slug_Delete = {
  readonly __typename?: 'ExperiencesFields_slug_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Slug_Read = {
  readonly __typename?: 'ExperiencesFields_slug_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Slug_Update = {
  readonly __typename?: 'ExperiencesFields_slug_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_StartDate = {
  readonly __typename?: 'ExperiencesFields_startDate';
  readonly create?: Maybe<ExperiencesFields_StartDate_Create>;
  readonly delete?: Maybe<ExperiencesFields_StartDate_Delete>;
  readonly read?: Maybe<ExperiencesFields_StartDate_Read>;
  readonly update?: Maybe<ExperiencesFields_StartDate_Update>;
};

export type ExperiencesFields_StartDate_Create = {
  readonly __typename?: 'ExperiencesFields_startDate_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_StartDate_Delete = {
  readonly __typename?: 'ExperiencesFields_startDate_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_StartDate_Read = {
  readonly __typename?: 'ExperiencesFields_startDate_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_StartDate_Update = {
  readonly __typename?: 'ExperiencesFields_startDate_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Summary = {
  readonly __typename?: 'ExperiencesFields_summary';
  readonly create?: Maybe<ExperiencesFields_Summary_Create>;
  readonly delete?: Maybe<ExperiencesFields_Summary_Delete>;
  readonly read?: Maybe<ExperiencesFields_Summary_Read>;
  readonly update?: Maybe<ExperiencesFields_Summary_Update>;
};

export type ExperiencesFields_Summary_Create = {
  readonly __typename?: 'ExperiencesFields_summary_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Summary_Delete = {
  readonly __typename?: 'ExperiencesFields_summary_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Summary_Read = {
  readonly __typename?: 'ExperiencesFields_summary_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Summary_Update = {
  readonly __typename?: 'ExperiencesFields_summary_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Tags = {
  readonly __typename?: 'ExperiencesFields_tags';
  readonly create?: Maybe<ExperiencesFields_Tags_Create>;
  readonly delete?: Maybe<ExperiencesFields_Tags_Delete>;
  readonly read?: Maybe<ExperiencesFields_Tags_Read>;
  readonly update?: Maybe<ExperiencesFields_Tags_Update>;
};

export type ExperiencesFields_Tags_Create = {
  readonly __typename?: 'ExperiencesFields_tags_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Tags_Delete = {
  readonly __typename?: 'ExperiencesFields_tags_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Tags_Read = {
  readonly __typename?: 'ExperiencesFields_tags_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Tags_Update = {
  readonly __typename?: 'ExperiencesFields_tags_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_ThumbnailImage = {
  readonly __typename?: 'ExperiencesFields_thumbnailImage';
  readonly create?: Maybe<ExperiencesFields_ThumbnailImage_Create>;
  readonly delete?: Maybe<ExperiencesFields_ThumbnailImage_Delete>;
  readonly read?: Maybe<ExperiencesFields_ThumbnailImage_Read>;
  readonly update?: Maybe<ExperiencesFields_ThumbnailImage_Update>;
};

export type ExperiencesFields_ThumbnailImage_Create = {
  readonly __typename?: 'ExperiencesFields_thumbnailImage_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_ThumbnailImage_Delete = {
  readonly __typename?: 'ExperiencesFields_thumbnailImage_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_ThumbnailImage_Read = {
  readonly __typename?: 'ExperiencesFields_thumbnailImage_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_ThumbnailImage_Update = {
  readonly __typename?: 'ExperiencesFields_thumbnailImage_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Title = {
  readonly __typename?: 'ExperiencesFields_title';
  readonly create?: Maybe<ExperiencesFields_Title_Create>;
  readonly delete?: Maybe<ExperiencesFields_Title_Delete>;
  readonly read?: Maybe<ExperiencesFields_Title_Read>;
  readonly update?: Maybe<ExperiencesFields_Title_Update>;
};

export type ExperiencesFields_Title_Create = {
  readonly __typename?: 'ExperiencesFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Title_Delete = {
  readonly __typename?: 'ExperiencesFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Title_Read = {
  readonly __typename?: 'ExperiencesFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_Title_Update = {
  readonly __typename?: 'ExperiencesFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_UpdatedAt = {
  readonly __typename?: 'ExperiencesFields_updatedAt';
  readonly create?: Maybe<ExperiencesFields_UpdatedAt_Create>;
  readonly delete?: Maybe<ExperiencesFields_UpdatedAt_Delete>;
  readonly read?: Maybe<ExperiencesFields_UpdatedAt_Read>;
  readonly update?: Maybe<ExperiencesFields_UpdatedAt_Update>;
};

export type ExperiencesFields_UpdatedAt_Create = {
  readonly __typename?: 'ExperiencesFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_UpdatedAt_Delete = {
  readonly __typename?: 'ExperiencesFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_UpdatedAt_Read = {
  readonly __typename?: 'ExperiencesFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesFields_UpdatedAt_Update = {
  readonly __typename?: 'ExperiencesFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExperiencesReadAccess = {
  readonly __typename?: 'ExperiencesReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ExperiencesReadDocAccess = {
  readonly __typename?: 'ExperiencesReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ExperiencesUpdateAccess = {
  readonly __typename?: 'ExperiencesUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ExperiencesUpdateDocAccess = {
  readonly __typename?: 'ExperiencesUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeaturedCaseStudiesDocAccessFields = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields';
  readonly caseStudies?: Maybe<FeaturedCaseStudiesDocAccessFields_CaseStudies>;
  readonly createdAt?: Maybe<FeaturedCaseStudiesDocAccessFields_CreatedAt>;
  readonly description?: Maybe<FeaturedCaseStudiesDocAccessFields_Description>;
  readonly subtitle?: Maybe<FeaturedCaseStudiesDocAccessFields_Subtitle>;
  readonly title?: Maybe<FeaturedCaseStudiesDocAccessFields_Title>;
  readonly updatedAt?: Maybe<FeaturedCaseStudiesDocAccessFields_UpdatedAt>;
};

export type FeaturedCaseStudiesDocAccessFields_CaseStudies = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_caseStudies';
  readonly create?: Maybe<FeaturedCaseStudiesDocAccessFields_CaseStudies_Create>;
  readonly delete?: Maybe<FeaturedCaseStudiesDocAccessFields_CaseStudies_Delete>;
  readonly read?: Maybe<FeaturedCaseStudiesDocAccessFields_CaseStudies_Read>;
  readonly update?: Maybe<FeaturedCaseStudiesDocAccessFields_CaseStudies_Update>;
};

export type FeaturedCaseStudiesDocAccessFields_CaseStudies_Create = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_caseStudies_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_CaseStudies_Delete = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_caseStudies_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_CaseStudies_Read = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_caseStudies_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_CaseStudies_Update = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_caseStudies_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_CreatedAt = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_createdAt';
  readonly create?: Maybe<FeaturedCaseStudiesDocAccessFields_CreatedAt_Create>;
  readonly delete?: Maybe<FeaturedCaseStudiesDocAccessFields_CreatedAt_Delete>;
  readonly read?: Maybe<FeaturedCaseStudiesDocAccessFields_CreatedAt_Read>;
  readonly update?: Maybe<FeaturedCaseStudiesDocAccessFields_CreatedAt_Update>;
};

export type FeaturedCaseStudiesDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_Description = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_description';
  readonly create?: Maybe<FeaturedCaseStudiesDocAccessFields_Description_Create>;
  readonly delete?: Maybe<FeaturedCaseStudiesDocAccessFields_Description_Delete>;
  readonly read?: Maybe<FeaturedCaseStudiesDocAccessFields_Description_Read>;
  readonly update?: Maybe<FeaturedCaseStudiesDocAccessFields_Description_Update>;
};

export type FeaturedCaseStudiesDocAccessFields_Description_Create = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_Description_Delete = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_Description_Read = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_Description_Update = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_Subtitle = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_subtitle';
  readonly create?: Maybe<FeaturedCaseStudiesDocAccessFields_Subtitle_Create>;
  readonly delete?: Maybe<FeaturedCaseStudiesDocAccessFields_Subtitle_Delete>;
  readonly read?: Maybe<FeaturedCaseStudiesDocAccessFields_Subtitle_Read>;
  readonly update?: Maybe<FeaturedCaseStudiesDocAccessFields_Subtitle_Update>;
};

export type FeaturedCaseStudiesDocAccessFields_Subtitle_Create = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_subtitle_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_Subtitle_Delete = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_subtitle_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_Subtitle_Read = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_subtitle_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_Subtitle_Update = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_subtitle_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_Title = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_title';
  readonly create?: Maybe<FeaturedCaseStudiesDocAccessFields_Title_Create>;
  readonly delete?: Maybe<FeaturedCaseStudiesDocAccessFields_Title_Delete>;
  readonly read?: Maybe<FeaturedCaseStudiesDocAccessFields_Title_Read>;
  readonly update?: Maybe<FeaturedCaseStudiesDocAccessFields_Title_Update>;
};

export type FeaturedCaseStudiesDocAccessFields_Title_Create = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_Title_Delete = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_Title_Read = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_Title_Update = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_UpdatedAt = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_updatedAt';
  readonly create?: Maybe<FeaturedCaseStudiesDocAccessFields_UpdatedAt_Create>;
  readonly delete?: Maybe<FeaturedCaseStudiesDocAccessFields_UpdatedAt_Delete>;
  readonly read?: Maybe<FeaturedCaseStudiesDocAccessFields_UpdatedAt_Read>;
  readonly update?: Maybe<FeaturedCaseStudiesDocAccessFields_UpdatedAt_Update>;
};

export type FeaturedCaseStudiesDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'FeaturedCaseStudiesDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields = {
  readonly __typename?: 'FeaturedCaseStudiesFields';
  readonly caseStudies?: Maybe<FeaturedCaseStudiesFields_CaseStudies>;
  readonly createdAt?: Maybe<FeaturedCaseStudiesFields_CreatedAt>;
  readonly description?: Maybe<FeaturedCaseStudiesFields_Description>;
  readonly subtitle?: Maybe<FeaturedCaseStudiesFields_Subtitle>;
  readonly title?: Maybe<FeaturedCaseStudiesFields_Title>;
  readonly updatedAt?: Maybe<FeaturedCaseStudiesFields_UpdatedAt>;
};

export type FeaturedCaseStudiesFields_CaseStudies = {
  readonly __typename?: 'FeaturedCaseStudiesFields_caseStudies';
  readonly create?: Maybe<FeaturedCaseStudiesFields_CaseStudies_Create>;
  readonly delete?: Maybe<FeaturedCaseStudiesFields_CaseStudies_Delete>;
  readonly read?: Maybe<FeaturedCaseStudiesFields_CaseStudies_Read>;
  readonly update?: Maybe<FeaturedCaseStudiesFields_CaseStudies_Update>;
};

export type FeaturedCaseStudiesFields_CaseStudies_Create = {
  readonly __typename?: 'FeaturedCaseStudiesFields_caseStudies_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_CaseStudies_Delete = {
  readonly __typename?: 'FeaturedCaseStudiesFields_caseStudies_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_CaseStudies_Read = {
  readonly __typename?: 'FeaturedCaseStudiesFields_caseStudies_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_CaseStudies_Update = {
  readonly __typename?: 'FeaturedCaseStudiesFields_caseStudies_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_CreatedAt = {
  readonly __typename?: 'FeaturedCaseStudiesFields_createdAt';
  readonly create?: Maybe<FeaturedCaseStudiesFields_CreatedAt_Create>;
  readonly delete?: Maybe<FeaturedCaseStudiesFields_CreatedAt_Delete>;
  readonly read?: Maybe<FeaturedCaseStudiesFields_CreatedAt_Read>;
  readonly update?: Maybe<FeaturedCaseStudiesFields_CreatedAt_Update>;
};

export type FeaturedCaseStudiesFields_CreatedAt_Create = {
  readonly __typename?: 'FeaturedCaseStudiesFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_CreatedAt_Delete = {
  readonly __typename?: 'FeaturedCaseStudiesFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_CreatedAt_Read = {
  readonly __typename?: 'FeaturedCaseStudiesFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_CreatedAt_Update = {
  readonly __typename?: 'FeaturedCaseStudiesFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_Description = {
  readonly __typename?: 'FeaturedCaseStudiesFields_description';
  readonly create?: Maybe<FeaturedCaseStudiesFields_Description_Create>;
  readonly delete?: Maybe<FeaturedCaseStudiesFields_Description_Delete>;
  readonly read?: Maybe<FeaturedCaseStudiesFields_Description_Read>;
  readonly update?: Maybe<FeaturedCaseStudiesFields_Description_Update>;
};

export type FeaturedCaseStudiesFields_Description_Create = {
  readonly __typename?: 'FeaturedCaseStudiesFields_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_Description_Delete = {
  readonly __typename?: 'FeaturedCaseStudiesFields_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_Description_Read = {
  readonly __typename?: 'FeaturedCaseStudiesFields_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_Description_Update = {
  readonly __typename?: 'FeaturedCaseStudiesFields_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_Subtitle = {
  readonly __typename?: 'FeaturedCaseStudiesFields_subtitle';
  readonly create?: Maybe<FeaturedCaseStudiesFields_Subtitle_Create>;
  readonly delete?: Maybe<FeaturedCaseStudiesFields_Subtitle_Delete>;
  readonly read?: Maybe<FeaturedCaseStudiesFields_Subtitle_Read>;
  readonly update?: Maybe<FeaturedCaseStudiesFields_Subtitle_Update>;
};

export type FeaturedCaseStudiesFields_Subtitle_Create = {
  readonly __typename?: 'FeaturedCaseStudiesFields_subtitle_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_Subtitle_Delete = {
  readonly __typename?: 'FeaturedCaseStudiesFields_subtitle_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_Subtitle_Read = {
  readonly __typename?: 'FeaturedCaseStudiesFields_subtitle_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_Subtitle_Update = {
  readonly __typename?: 'FeaturedCaseStudiesFields_subtitle_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_Title = {
  readonly __typename?: 'FeaturedCaseStudiesFields_title';
  readonly create?: Maybe<FeaturedCaseStudiesFields_Title_Create>;
  readonly delete?: Maybe<FeaturedCaseStudiesFields_Title_Delete>;
  readonly read?: Maybe<FeaturedCaseStudiesFields_Title_Read>;
  readonly update?: Maybe<FeaturedCaseStudiesFields_Title_Update>;
};

export type FeaturedCaseStudiesFields_Title_Create = {
  readonly __typename?: 'FeaturedCaseStudiesFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_Title_Delete = {
  readonly __typename?: 'FeaturedCaseStudiesFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_Title_Read = {
  readonly __typename?: 'FeaturedCaseStudiesFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_Title_Update = {
  readonly __typename?: 'FeaturedCaseStudiesFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_UpdatedAt = {
  readonly __typename?: 'FeaturedCaseStudiesFields_updatedAt';
  readonly create?: Maybe<FeaturedCaseStudiesFields_UpdatedAt_Create>;
  readonly delete?: Maybe<FeaturedCaseStudiesFields_UpdatedAt_Delete>;
  readonly read?: Maybe<FeaturedCaseStudiesFields_UpdatedAt_Read>;
  readonly update?: Maybe<FeaturedCaseStudiesFields_UpdatedAt_Update>;
};

export type FeaturedCaseStudiesFields_UpdatedAt_Create = {
  readonly __typename?: 'FeaturedCaseStudiesFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_UpdatedAt_Delete = {
  readonly __typename?: 'FeaturedCaseStudiesFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_UpdatedAt_Read = {
  readonly __typename?: 'FeaturedCaseStudiesFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesFields_UpdatedAt_Update = {
  readonly __typename?: 'FeaturedCaseStudiesFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedCaseStudiesReadAccess = {
  readonly __typename?: 'FeaturedCaseStudiesReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeaturedCaseStudiesReadDocAccess = {
  readonly __typename?: 'FeaturedCaseStudiesReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeaturedCaseStudiesUpdateAccess = {
  readonly __typename?: 'FeaturedCaseStudiesUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeaturedCaseStudiesUpdateDocAccess = {
  readonly __typename?: 'FeaturedCaseStudiesUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeaturedCaseStudy = {
  readonly __typename?: 'FeaturedCaseStudy';
  readonly caseStudies: ReadonlyArray<CaseStudy>;
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly description: Scalars['String']['output'];
  readonly subtitle?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FeaturedExperience = {
  readonly __typename?: 'FeaturedExperience';
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly experiences: ReadonlyArray<Experience>;
  readonly subtitle: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FeaturedExperiencesDocAccessFields = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields';
  readonly createdAt?: Maybe<FeaturedExperiencesDocAccessFields_CreatedAt>;
  readonly description?: Maybe<FeaturedExperiencesDocAccessFields_Description>;
  readonly experiences?: Maybe<FeaturedExperiencesDocAccessFields_Experiences>;
  readonly subtitle?: Maybe<FeaturedExperiencesDocAccessFields_Subtitle>;
  readonly title?: Maybe<FeaturedExperiencesDocAccessFields_Title>;
  readonly updatedAt?: Maybe<FeaturedExperiencesDocAccessFields_UpdatedAt>;
};

export type FeaturedExperiencesDocAccessFields_CreatedAt = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_createdAt';
  readonly create?: Maybe<FeaturedExperiencesDocAccessFields_CreatedAt_Create>;
  readonly delete?: Maybe<FeaturedExperiencesDocAccessFields_CreatedAt_Delete>;
  readonly read?: Maybe<FeaturedExperiencesDocAccessFields_CreatedAt_Read>;
  readonly update?: Maybe<FeaturedExperiencesDocAccessFields_CreatedAt_Update>;
};

export type FeaturedExperiencesDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Description = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_description';
  readonly create?: Maybe<FeaturedExperiencesDocAccessFields_Description_Create>;
  readonly delete?: Maybe<FeaturedExperiencesDocAccessFields_Description_Delete>;
  readonly read?: Maybe<FeaturedExperiencesDocAccessFields_Description_Read>;
  readonly update?: Maybe<FeaturedExperiencesDocAccessFields_Description_Update>;
};

export type FeaturedExperiencesDocAccessFields_Description_Create = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Description_Delete = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Description_Read = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Description_Update = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Experiences = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_experiences';
  readonly create?: Maybe<FeaturedExperiencesDocAccessFields_Experiences_Create>;
  readonly delete?: Maybe<FeaturedExperiencesDocAccessFields_Experiences_Delete>;
  readonly read?: Maybe<FeaturedExperiencesDocAccessFields_Experiences_Read>;
  readonly update?: Maybe<FeaturedExperiencesDocAccessFields_Experiences_Update>;
};

export type FeaturedExperiencesDocAccessFields_Experiences_Create = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_experiences_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Experiences_Delete = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_experiences_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Experiences_Read = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_experiences_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Experiences_Update = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_experiences_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Subtitle = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_subtitle';
  readonly create?: Maybe<FeaturedExperiencesDocAccessFields_Subtitle_Create>;
  readonly delete?: Maybe<FeaturedExperiencesDocAccessFields_Subtitle_Delete>;
  readonly read?: Maybe<FeaturedExperiencesDocAccessFields_Subtitle_Read>;
  readonly update?: Maybe<FeaturedExperiencesDocAccessFields_Subtitle_Update>;
};

export type FeaturedExperiencesDocAccessFields_Subtitle_Create = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_subtitle_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Subtitle_Delete = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_subtitle_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Subtitle_Read = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_subtitle_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Subtitle_Update = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_subtitle_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Title = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_title';
  readonly create?: Maybe<FeaturedExperiencesDocAccessFields_Title_Create>;
  readonly delete?: Maybe<FeaturedExperiencesDocAccessFields_Title_Delete>;
  readonly read?: Maybe<FeaturedExperiencesDocAccessFields_Title_Read>;
  readonly update?: Maybe<FeaturedExperiencesDocAccessFields_Title_Update>;
};

export type FeaturedExperiencesDocAccessFields_Title_Create = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Title_Delete = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Title_Read = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_Title_Update = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_UpdatedAt = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_updatedAt';
  readonly create?: Maybe<FeaturedExperiencesDocAccessFields_UpdatedAt_Create>;
  readonly delete?: Maybe<FeaturedExperiencesDocAccessFields_UpdatedAt_Delete>;
  readonly read?: Maybe<FeaturedExperiencesDocAccessFields_UpdatedAt_Read>;
  readonly update?: Maybe<FeaturedExperiencesDocAccessFields_UpdatedAt_Update>;
};

export type FeaturedExperiencesDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'FeaturedExperiencesDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields = {
  readonly __typename?: 'FeaturedExperiencesFields';
  readonly createdAt?: Maybe<FeaturedExperiencesFields_CreatedAt>;
  readonly description?: Maybe<FeaturedExperiencesFields_Description>;
  readonly experiences?: Maybe<FeaturedExperiencesFields_Experiences>;
  readonly subtitle?: Maybe<FeaturedExperiencesFields_Subtitle>;
  readonly title?: Maybe<FeaturedExperiencesFields_Title>;
  readonly updatedAt?: Maybe<FeaturedExperiencesFields_UpdatedAt>;
};

export type FeaturedExperiencesFields_CreatedAt = {
  readonly __typename?: 'FeaturedExperiencesFields_createdAt';
  readonly create?: Maybe<FeaturedExperiencesFields_CreatedAt_Create>;
  readonly delete?: Maybe<FeaturedExperiencesFields_CreatedAt_Delete>;
  readonly read?: Maybe<FeaturedExperiencesFields_CreatedAt_Read>;
  readonly update?: Maybe<FeaturedExperiencesFields_CreatedAt_Update>;
};

export type FeaturedExperiencesFields_CreatedAt_Create = {
  readonly __typename?: 'FeaturedExperiencesFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_CreatedAt_Delete = {
  readonly __typename?: 'FeaturedExperiencesFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_CreatedAt_Read = {
  readonly __typename?: 'FeaturedExperiencesFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_CreatedAt_Update = {
  readonly __typename?: 'FeaturedExperiencesFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Description = {
  readonly __typename?: 'FeaturedExperiencesFields_description';
  readonly create?: Maybe<FeaturedExperiencesFields_Description_Create>;
  readonly delete?: Maybe<FeaturedExperiencesFields_Description_Delete>;
  readonly read?: Maybe<FeaturedExperiencesFields_Description_Read>;
  readonly update?: Maybe<FeaturedExperiencesFields_Description_Update>;
};

export type FeaturedExperiencesFields_Description_Create = {
  readonly __typename?: 'FeaturedExperiencesFields_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Description_Delete = {
  readonly __typename?: 'FeaturedExperiencesFields_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Description_Read = {
  readonly __typename?: 'FeaturedExperiencesFields_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Description_Update = {
  readonly __typename?: 'FeaturedExperiencesFields_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Experiences = {
  readonly __typename?: 'FeaturedExperiencesFields_experiences';
  readonly create?: Maybe<FeaturedExperiencesFields_Experiences_Create>;
  readonly delete?: Maybe<FeaturedExperiencesFields_Experiences_Delete>;
  readonly read?: Maybe<FeaturedExperiencesFields_Experiences_Read>;
  readonly update?: Maybe<FeaturedExperiencesFields_Experiences_Update>;
};

export type FeaturedExperiencesFields_Experiences_Create = {
  readonly __typename?: 'FeaturedExperiencesFields_experiences_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Experiences_Delete = {
  readonly __typename?: 'FeaturedExperiencesFields_experiences_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Experiences_Read = {
  readonly __typename?: 'FeaturedExperiencesFields_experiences_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Experiences_Update = {
  readonly __typename?: 'FeaturedExperiencesFields_experiences_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Subtitle = {
  readonly __typename?: 'FeaturedExperiencesFields_subtitle';
  readonly create?: Maybe<FeaturedExperiencesFields_Subtitle_Create>;
  readonly delete?: Maybe<FeaturedExperiencesFields_Subtitle_Delete>;
  readonly read?: Maybe<FeaturedExperiencesFields_Subtitle_Read>;
  readonly update?: Maybe<FeaturedExperiencesFields_Subtitle_Update>;
};

export type FeaturedExperiencesFields_Subtitle_Create = {
  readonly __typename?: 'FeaturedExperiencesFields_subtitle_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Subtitle_Delete = {
  readonly __typename?: 'FeaturedExperiencesFields_subtitle_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Subtitle_Read = {
  readonly __typename?: 'FeaturedExperiencesFields_subtitle_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Subtitle_Update = {
  readonly __typename?: 'FeaturedExperiencesFields_subtitle_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Title = {
  readonly __typename?: 'FeaturedExperiencesFields_title';
  readonly create?: Maybe<FeaturedExperiencesFields_Title_Create>;
  readonly delete?: Maybe<FeaturedExperiencesFields_Title_Delete>;
  readonly read?: Maybe<FeaturedExperiencesFields_Title_Read>;
  readonly update?: Maybe<FeaturedExperiencesFields_Title_Update>;
};

export type FeaturedExperiencesFields_Title_Create = {
  readonly __typename?: 'FeaturedExperiencesFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Title_Delete = {
  readonly __typename?: 'FeaturedExperiencesFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Title_Read = {
  readonly __typename?: 'FeaturedExperiencesFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_Title_Update = {
  readonly __typename?: 'FeaturedExperiencesFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_UpdatedAt = {
  readonly __typename?: 'FeaturedExperiencesFields_updatedAt';
  readonly create?: Maybe<FeaturedExperiencesFields_UpdatedAt_Create>;
  readonly delete?: Maybe<FeaturedExperiencesFields_UpdatedAt_Delete>;
  readonly read?: Maybe<FeaturedExperiencesFields_UpdatedAt_Read>;
  readonly update?: Maybe<FeaturedExperiencesFields_UpdatedAt_Update>;
};

export type FeaturedExperiencesFields_UpdatedAt_Create = {
  readonly __typename?: 'FeaturedExperiencesFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_UpdatedAt_Delete = {
  readonly __typename?: 'FeaturedExperiencesFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_UpdatedAt_Read = {
  readonly __typename?: 'FeaturedExperiencesFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesFields_UpdatedAt_Update = {
  readonly __typename?: 'FeaturedExperiencesFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FeaturedExperiencesReadAccess = {
  readonly __typename?: 'FeaturedExperiencesReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeaturedExperiencesReadDocAccess = {
  readonly __typename?: 'FeaturedExperiencesReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeaturedExperiencesUpdateAccess = {
  readonly __typename?: 'FeaturedExperiencesUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeaturedExperiencesUpdateDocAccess = {
  readonly __typename?: 'FeaturedExperiencesUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Footer = {
  readonly __typename?: 'Footer';
  readonly bottomText: Scalars['String']['output'];
  readonly buttonText: Scalars['String']['output'];
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly description: Scalars['String']['output'];
  readonly title1: Scalars['String']['output'];
  readonly title2: Scalars['String']['output'];
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FooterDocAccessFields = {
  readonly __typename?: 'FooterDocAccessFields';
  readonly bottomText?: Maybe<FooterDocAccessFields_BottomText>;
  readonly buttonText?: Maybe<FooterDocAccessFields_ButtonText>;
  readonly createdAt?: Maybe<FooterDocAccessFields_CreatedAt>;
  readonly description?: Maybe<FooterDocAccessFields_Description>;
  readonly title1?: Maybe<FooterDocAccessFields_Title1>;
  readonly title2?: Maybe<FooterDocAccessFields_Title2>;
  readonly updatedAt?: Maybe<FooterDocAccessFields_UpdatedAt>;
};

export type FooterDocAccessFields_BottomText = {
  readonly __typename?: 'FooterDocAccessFields_bottomText';
  readonly create?: Maybe<FooterDocAccessFields_BottomText_Create>;
  readonly delete?: Maybe<FooterDocAccessFields_BottomText_Delete>;
  readonly read?: Maybe<FooterDocAccessFields_BottomText_Read>;
  readonly update?: Maybe<FooterDocAccessFields_BottomText_Update>;
};

export type FooterDocAccessFields_BottomText_Create = {
  readonly __typename?: 'FooterDocAccessFields_bottomText_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_BottomText_Delete = {
  readonly __typename?: 'FooterDocAccessFields_bottomText_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_BottomText_Read = {
  readonly __typename?: 'FooterDocAccessFields_bottomText_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_BottomText_Update = {
  readonly __typename?: 'FooterDocAccessFields_bottomText_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ButtonText = {
  readonly __typename?: 'FooterDocAccessFields_buttonText';
  readonly create?: Maybe<FooterDocAccessFields_ButtonText_Create>;
  readonly delete?: Maybe<FooterDocAccessFields_ButtonText_Delete>;
  readonly read?: Maybe<FooterDocAccessFields_ButtonText_Read>;
  readonly update?: Maybe<FooterDocAccessFields_ButtonText_Update>;
};

export type FooterDocAccessFields_ButtonText_Create = {
  readonly __typename?: 'FooterDocAccessFields_buttonText_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ButtonText_Delete = {
  readonly __typename?: 'FooterDocAccessFields_buttonText_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ButtonText_Read = {
  readonly __typename?: 'FooterDocAccessFields_buttonText_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ButtonText_Update = {
  readonly __typename?: 'FooterDocAccessFields_buttonText_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_CreatedAt = {
  readonly __typename?: 'FooterDocAccessFields_createdAt';
  readonly create?: Maybe<FooterDocAccessFields_CreatedAt_Create>;
  readonly delete?: Maybe<FooterDocAccessFields_CreatedAt_Delete>;
  readonly read?: Maybe<FooterDocAccessFields_CreatedAt_Read>;
  readonly update?: Maybe<FooterDocAccessFields_CreatedAt_Update>;
};

export type FooterDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'FooterDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'FooterDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'FooterDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'FooterDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Description = {
  readonly __typename?: 'FooterDocAccessFields_description';
  readonly create?: Maybe<FooterDocAccessFields_Description_Create>;
  readonly delete?: Maybe<FooterDocAccessFields_Description_Delete>;
  readonly read?: Maybe<FooterDocAccessFields_Description_Read>;
  readonly update?: Maybe<FooterDocAccessFields_Description_Update>;
};

export type FooterDocAccessFields_Description_Create = {
  readonly __typename?: 'FooterDocAccessFields_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Description_Delete = {
  readonly __typename?: 'FooterDocAccessFields_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Description_Read = {
  readonly __typename?: 'FooterDocAccessFields_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Description_Update = {
  readonly __typename?: 'FooterDocAccessFields_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Title1 = {
  readonly __typename?: 'FooterDocAccessFields_title1';
  readonly create?: Maybe<FooterDocAccessFields_Title1_Create>;
  readonly delete?: Maybe<FooterDocAccessFields_Title1_Delete>;
  readonly read?: Maybe<FooterDocAccessFields_Title1_Read>;
  readonly update?: Maybe<FooterDocAccessFields_Title1_Update>;
};

export type FooterDocAccessFields_Title1_Create = {
  readonly __typename?: 'FooterDocAccessFields_title1_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Title1_Delete = {
  readonly __typename?: 'FooterDocAccessFields_title1_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Title1_Read = {
  readonly __typename?: 'FooterDocAccessFields_title1_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Title1_Update = {
  readonly __typename?: 'FooterDocAccessFields_title1_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Title2 = {
  readonly __typename?: 'FooterDocAccessFields_title2';
  readonly create?: Maybe<FooterDocAccessFields_Title2_Create>;
  readonly delete?: Maybe<FooterDocAccessFields_Title2_Delete>;
  readonly read?: Maybe<FooterDocAccessFields_Title2_Read>;
  readonly update?: Maybe<FooterDocAccessFields_Title2_Update>;
};

export type FooterDocAccessFields_Title2_Create = {
  readonly __typename?: 'FooterDocAccessFields_title2_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Title2_Delete = {
  readonly __typename?: 'FooterDocAccessFields_title2_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Title2_Read = {
  readonly __typename?: 'FooterDocAccessFields_title2_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Title2_Update = {
  readonly __typename?: 'FooterDocAccessFields_title2_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_UpdatedAt = {
  readonly __typename?: 'FooterDocAccessFields_updatedAt';
  readonly create?: Maybe<FooterDocAccessFields_UpdatedAt_Create>;
  readonly delete?: Maybe<FooterDocAccessFields_UpdatedAt_Delete>;
  readonly read?: Maybe<FooterDocAccessFields_UpdatedAt_Read>;
  readonly update?: Maybe<FooterDocAccessFields_UpdatedAt_Update>;
};

export type FooterDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'FooterDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'FooterDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'FooterDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'FooterDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields = {
  readonly __typename?: 'FooterFields';
  readonly bottomText?: Maybe<FooterFields_BottomText>;
  readonly buttonText?: Maybe<FooterFields_ButtonText>;
  readonly createdAt?: Maybe<FooterFields_CreatedAt>;
  readonly description?: Maybe<FooterFields_Description>;
  readonly title1?: Maybe<FooterFields_Title1>;
  readonly title2?: Maybe<FooterFields_Title2>;
  readonly updatedAt?: Maybe<FooterFields_UpdatedAt>;
};

export type FooterFields_BottomText = {
  readonly __typename?: 'FooterFields_bottomText';
  readonly create?: Maybe<FooterFields_BottomText_Create>;
  readonly delete?: Maybe<FooterFields_BottomText_Delete>;
  readonly read?: Maybe<FooterFields_BottomText_Read>;
  readonly update?: Maybe<FooterFields_BottomText_Update>;
};

export type FooterFields_BottomText_Create = {
  readonly __typename?: 'FooterFields_bottomText_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_BottomText_Delete = {
  readonly __typename?: 'FooterFields_bottomText_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_BottomText_Read = {
  readonly __typename?: 'FooterFields_bottomText_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_BottomText_Update = {
  readonly __typename?: 'FooterFields_bottomText_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_ButtonText = {
  readonly __typename?: 'FooterFields_buttonText';
  readonly create?: Maybe<FooterFields_ButtonText_Create>;
  readonly delete?: Maybe<FooterFields_ButtonText_Delete>;
  readonly read?: Maybe<FooterFields_ButtonText_Read>;
  readonly update?: Maybe<FooterFields_ButtonText_Update>;
};

export type FooterFields_ButtonText_Create = {
  readonly __typename?: 'FooterFields_buttonText_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_ButtonText_Delete = {
  readonly __typename?: 'FooterFields_buttonText_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_ButtonText_Read = {
  readonly __typename?: 'FooterFields_buttonText_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_ButtonText_Update = {
  readonly __typename?: 'FooterFields_buttonText_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_CreatedAt = {
  readonly __typename?: 'FooterFields_createdAt';
  readonly create?: Maybe<FooterFields_CreatedAt_Create>;
  readonly delete?: Maybe<FooterFields_CreatedAt_Delete>;
  readonly read?: Maybe<FooterFields_CreatedAt_Read>;
  readonly update?: Maybe<FooterFields_CreatedAt_Update>;
};

export type FooterFields_CreatedAt_Create = {
  readonly __typename?: 'FooterFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_CreatedAt_Delete = {
  readonly __typename?: 'FooterFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_CreatedAt_Read = {
  readonly __typename?: 'FooterFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_CreatedAt_Update = {
  readonly __typename?: 'FooterFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_Description = {
  readonly __typename?: 'FooterFields_description';
  readonly create?: Maybe<FooterFields_Description_Create>;
  readonly delete?: Maybe<FooterFields_Description_Delete>;
  readonly read?: Maybe<FooterFields_Description_Read>;
  readonly update?: Maybe<FooterFields_Description_Update>;
};

export type FooterFields_Description_Create = {
  readonly __typename?: 'FooterFields_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_Description_Delete = {
  readonly __typename?: 'FooterFields_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_Description_Read = {
  readonly __typename?: 'FooterFields_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_Description_Update = {
  readonly __typename?: 'FooterFields_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_Title1 = {
  readonly __typename?: 'FooterFields_title1';
  readonly create?: Maybe<FooterFields_Title1_Create>;
  readonly delete?: Maybe<FooterFields_Title1_Delete>;
  readonly read?: Maybe<FooterFields_Title1_Read>;
  readonly update?: Maybe<FooterFields_Title1_Update>;
};

export type FooterFields_Title1_Create = {
  readonly __typename?: 'FooterFields_title1_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_Title1_Delete = {
  readonly __typename?: 'FooterFields_title1_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_Title1_Read = {
  readonly __typename?: 'FooterFields_title1_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_Title1_Update = {
  readonly __typename?: 'FooterFields_title1_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_Title2 = {
  readonly __typename?: 'FooterFields_title2';
  readonly create?: Maybe<FooterFields_Title2_Create>;
  readonly delete?: Maybe<FooterFields_Title2_Delete>;
  readonly read?: Maybe<FooterFields_Title2_Read>;
  readonly update?: Maybe<FooterFields_Title2_Update>;
};

export type FooterFields_Title2_Create = {
  readonly __typename?: 'FooterFields_title2_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_Title2_Delete = {
  readonly __typename?: 'FooterFields_title2_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_Title2_Read = {
  readonly __typename?: 'FooterFields_title2_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_Title2_Update = {
  readonly __typename?: 'FooterFields_title2_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_UpdatedAt = {
  readonly __typename?: 'FooterFields_updatedAt';
  readonly create?: Maybe<FooterFields_UpdatedAt_Create>;
  readonly delete?: Maybe<FooterFields_UpdatedAt_Delete>;
  readonly read?: Maybe<FooterFields_UpdatedAt_Read>;
  readonly update?: Maybe<FooterFields_UpdatedAt_Update>;
};

export type FooterFields_UpdatedAt_Create = {
  readonly __typename?: 'FooterFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_UpdatedAt_Delete = {
  readonly __typename?: 'FooterFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_UpdatedAt_Read = {
  readonly __typename?: 'FooterFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterFields_UpdatedAt_Update = {
  readonly __typename?: 'FooterFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FooterReadAccess = {
  readonly __typename?: 'FooterReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FooterReadDocAccess = {
  readonly __typename?: 'FooterReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FooterUpdateAccess = {
  readonly __typename?: 'FooterUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FooterUpdateDocAccess = {
  readonly __typename?: 'FooterUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Hero = {
  readonly __typename?: 'Hero';
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly description: Scalars['JSON']['output'];
  readonly meta?: Maybe<Hero_Meta>;
  readonly name: Scalars['String']['output'];
  readonly taglines: ReadonlyArray<Hero_Taglines>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type HeroDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type HeroDocAccessFields = {
  readonly __typename?: 'HeroDocAccessFields';
  readonly createdAt?: Maybe<HeroDocAccessFields_CreatedAt>;
  readonly description?: Maybe<HeroDocAccessFields_Description>;
  readonly meta?: Maybe<HeroDocAccessFields_Meta>;
  readonly name?: Maybe<HeroDocAccessFields_Name>;
  readonly taglines?: Maybe<HeroDocAccessFields_Taglines>;
  readonly title?: Maybe<HeroDocAccessFields_Title>;
  readonly updatedAt?: Maybe<HeroDocAccessFields_UpdatedAt>;
};

export type HeroDocAccessFields_CreatedAt = {
  readonly __typename?: 'HeroDocAccessFields_createdAt';
  readonly create?: Maybe<HeroDocAccessFields_CreatedAt_Create>;
  readonly delete?: Maybe<HeroDocAccessFields_CreatedAt_Delete>;
  readonly read?: Maybe<HeroDocAccessFields_CreatedAt_Read>;
  readonly update?: Maybe<HeroDocAccessFields_CreatedAt_Update>;
};

export type HeroDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'HeroDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'HeroDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'HeroDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'HeroDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Description = {
  readonly __typename?: 'HeroDocAccessFields_description';
  readonly create?: Maybe<HeroDocAccessFields_Description_Create>;
  readonly delete?: Maybe<HeroDocAccessFields_Description_Delete>;
  readonly read?: Maybe<HeroDocAccessFields_Description_Read>;
  readonly update?: Maybe<HeroDocAccessFields_Description_Update>;
};

export type HeroDocAccessFields_Description_Create = {
  readonly __typename?: 'HeroDocAccessFields_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Description_Delete = {
  readonly __typename?: 'HeroDocAccessFields_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Description_Read = {
  readonly __typename?: 'HeroDocAccessFields_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Description_Update = {
  readonly __typename?: 'HeroDocAccessFields_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta = {
  readonly __typename?: 'HeroDocAccessFields_meta';
  readonly create?: Maybe<HeroDocAccessFields_Meta_Create>;
  readonly delete?: Maybe<HeroDocAccessFields_Meta_Delete>;
  readonly fields?: Maybe<HeroDocAccessFields_Meta_Fields>;
  readonly read?: Maybe<HeroDocAccessFields_Meta_Read>;
  readonly update?: Maybe<HeroDocAccessFields_Meta_Update>;
};

export type HeroDocAccessFields_Meta_Create = {
  readonly __typename?: 'HeroDocAccessFields_meta_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Delete = {
  readonly __typename?: 'HeroDocAccessFields_meta_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Fields = {
  readonly __typename?: 'HeroDocAccessFields_meta_Fields';
  readonly description?: Maybe<HeroDocAccessFields_Meta_Description>;
  readonly image?: Maybe<HeroDocAccessFields_Meta_Image>;
  readonly title?: Maybe<HeroDocAccessFields_Meta_Title>;
};

export type HeroDocAccessFields_Meta_Read = {
  readonly __typename?: 'HeroDocAccessFields_meta_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Update = {
  readonly __typename?: 'HeroDocAccessFields_meta_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Description = {
  readonly __typename?: 'HeroDocAccessFields_meta_description';
  readonly create?: Maybe<HeroDocAccessFields_Meta_Description_Create>;
  readonly delete?: Maybe<HeroDocAccessFields_Meta_Description_Delete>;
  readonly read?: Maybe<HeroDocAccessFields_Meta_Description_Read>;
  readonly update?: Maybe<HeroDocAccessFields_Meta_Description_Update>;
};

export type HeroDocAccessFields_Meta_Description_Create = {
  readonly __typename?: 'HeroDocAccessFields_meta_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Description_Delete = {
  readonly __typename?: 'HeroDocAccessFields_meta_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Description_Read = {
  readonly __typename?: 'HeroDocAccessFields_meta_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Description_Update = {
  readonly __typename?: 'HeroDocAccessFields_meta_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Image = {
  readonly __typename?: 'HeroDocAccessFields_meta_image';
  readonly create?: Maybe<HeroDocAccessFields_Meta_Image_Create>;
  readonly delete?: Maybe<HeroDocAccessFields_Meta_Image_Delete>;
  readonly read?: Maybe<HeroDocAccessFields_Meta_Image_Read>;
  readonly update?: Maybe<HeroDocAccessFields_Meta_Image_Update>;
};

export type HeroDocAccessFields_Meta_Image_Create = {
  readonly __typename?: 'HeroDocAccessFields_meta_image_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Image_Delete = {
  readonly __typename?: 'HeroDocAccessFields_meta_image_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Image_Read = {
  readonly __typename?: 'HeroDocAccessFields_meta_image_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Image_Update = {
  readonly __typename?: 'HeroDocAccessFields_meta_image_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Title = {
  readonly __typename?: 'HeroDocAccessFields_meta_title';
  readonly create?: Maybe<HeroDocAccessFields_Meta_Title_Create>;
  readonly delete?: Maybe<HeroDocAccessFields_Meta_Title_Delete>;
  readonly read?: Maybe<HeroDocAccessFields_Meta_Title_Read>;
  readonly update?: Maybe<HeroDocAccessFields_Meta_Title_Update>;
};

export type HeroDocAccessFields_Meta_Title_Create = {
  readonly __typename?: 'HeroDocAccessFields_meta_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Title_Delete = {
  readonly __typename?: 'HeroDocAccessFields_meta_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Title_Read = {
  readonly __typename?: 'HeroDocAccessFields_meta_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Meta_Title_Update = {
  readonly __typename?: 'HeroDocAccessFields_meta_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Name = {
  readonly __typename?: 'HeroDocAccessFields_name';
  readonly create?: Maybe<HeroDocAccessFields_Name_Create>;
  readonly delete?: Maybe<HeroDocAccessFields_Name_Delete>;
  readonly read?: Maybe<HeroDocAccessFields_Name_Read>;
  readonly update?: Maybe<HeroDocAccessFields_Name_Update>;
};

export type HeroDocAccessFields_Name_Create = {
  readonly __typename?: 'HeroDocAccessFields_name_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Name_Delete = {
  readonly __typename?: 'HeroDocAccessFields_name_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Name_Read = {
  readonly __typename?: 'HeroDocAccessFields_name_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Name_Update = {
  readonly __typename?: 'HeroDocAccessFields_name_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Taglines = {
  readonly __typename?: 'HeroDocAccessFields_taglines';
  readonly create?: Maybe<HeroDocAccessFields_Taglines_Create>;
  readonly delete?: Maybe<HeroDocAccessFields_Taglines_Delete>;
  readonly fields?: Maybe<HeroDocAccessFields_Taglines_Fields>;
  readonly read?: Maybe<HeroDocAccessFields_Taglines_Read>;
  readonly update?: Maybe<HeroDocAccessFields_Taglines_Update>;
};

export type HeroDocAccessFields_Taglines_Create = {
  readonly __typename?: 'HeroDocAccessFields_taglines_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Taglines_Delete = {
  readonly __typename?: 'HeroDocAccessFields_taglines_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Taglines_Fields = {
  readonly __typename?: 'HeroDocAccessFields_taglines_Fields';
  readonly id?: Maybe<HeroDocAccessFields_Taglines_Id>;
  readonly text?: Maybe<HeroDocAccessFields_Taglines_Text>;
};

export type HeroDocAccessFields_Taglines_Read = {
  readonly __typename?: 'HeroDocAccessFields_taglines_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Taglines_Update = {
  readonly __typename?: 'HeroDocAccessFields_taglines_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Taglines_Id = {
  readonly __typename?: 'HeroDocAccessFields_taglines_id';
  readonly create?: Maybe<HeroDocAccessFields_Taglines_Id_Create>;
  readonly delete?: Maybe<HeroDocAccessFields_Taglines_Id_Delete>;
  readonly read?: Maybe<HeroDocAccessFields_Taglines_Id_Read>;
  readonly update?: Maybe<HeroDocAccessFields_Taglines_Id_Update>;
};

export type HeroDocAccessFields_Taglines_Id_Create = {
  readonly __typename?: 'HeroDocAccessFields_taglines_id_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Taglines_Id_Delete = {
  readonly __typename?: 'HeroDocAccessFields_taglines_id_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Taglines_Id_Read = {
  readonly __typename?: 'HeroDocAccessFields_taglines_id_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Taglines_Id_Update = {
  readonly __typename?: 'HeroDocAccessFields_taglines_id_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Taglines_Text = {
  readonly __typename?: 'HeroDocAccessFields_taglines_text';
  readonly create?: Maybe<HeroDocAccessFields_Taglines_Text_Create>;
  readonly delete?: Maybe<HeroDocAccessFields_Taglines_Text_Delete>;
  readonly read?: Maybe<HeroDocAccessFields_Taglines_Text_Read>;
  readonly update?: Maybe<HeroDocAccessFields_Taglines_Text_Update>;
};

export type HeroDocAccessFields_Taglines_Text_Create = {
  readonly __typename?: 'HeroDocAccessFields_taglines_text_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Taglines_Text_Delete = {
  readonly __typename?: 'HeroDocAccessFields_taglines_text_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Taglines_Text_Read = {
  readonly __typename?: 'HeroDocAccessFields_taglines_text_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Taglines_Text_Update = {
  readonly __typename?: 'HeroDocAccessFields_taglines_text_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Title = {
  readonly __typename?: 'HeroDocAccessFields_title';
  readonly create?: Maybe<HeroDocAccessFields_Title_Create>;
  readonly delete?: Maybe<HeroDocAccessFields_Title_Delete>;
  readonly read?: Maybe<HeroDocAccessFields_Title_Read>;
  readonly update?: Maybe<HeroDocAccessFields_Title_Update>;
};

export type HeroDocAccessFields_Title_Create = {
  readonly __typename?: 'HeroDocAccessFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Title_Delete = {
  readonly __typename?: 'HeroDocAccessFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Title_Read = {
  readonly __typename?: 'HeroDocAccessFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Title_Update = {
  readonly __typename?: 'HeroDocAccessFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_UpdatedAt = {
  readonly __typename?: 'HeroDocAccessFields_updatedAt';
  readonly create?: Maybe<HeroDocAccessFields_UpdatedAt_Create>;
  readonly delete?: Maybe<HeroDocAccessFields_UpdatedAt_Delete>;
  readonly read?: Maybe<HeroDocAccessFields_UpdatedAt_Read>;
  readonly update?: Maybe<HeroDocAccessFields_UpdatedAt_Update>;
};

export type HeroDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'HeroDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'HeroDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'HeroDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'HeroDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields = {
  readonly __typename?: 'HeroFields';
  readonly createdAt?: Maybe<HeroFields_CreatedAt>;
  readonly description?: Maybe<HeroFields_Description>;
  readonly meta?: Maybe<HeroFields_Meta>;
  readonly name?: Maybe<HeroFields_Name>;
  readonly taglines?: Maybe<HeroFields_Taglines>;
  readonly title?: Maybe<HeroFields_Title>;
  readonly updatedAt?: Maybe<HeroFields_UpdatedAt>;
};

export type HeroFields_CreatedAt = {
  readonly __typename?: 'HeroFields_createdAt';
  readonly create?: Maybe<HeroFields_CreatedAt_Create>;
  readonly delete?: Maybe<HeroFields_CreatedAt_Delete>;
  readonly read?: Maybe<HeroFields_CreatedAt_Read>;
  readonly update?: Maybe<HeroFields_CreatedAt_Update>;
};

export type HeroFields_CreatedAt_Create = {
  readonly __typename?: 'HeroFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_CreatedAt_Delete = {
  readonly __typename?: 'HeroFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_CreatedAt_Read = {
  readonly __typename?: 'HeroFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_CreatedAt_Update = {
  readonly __typename?: 'HeroFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Description = {
  readonly __typename?: 'HeroFields_description';
  readonly create?: Maybe<HeroFields_Description_Create>;
  readonly delete?: Maybe<HeroFields_Description_Delete>;
  readonly read?: Maybe<HeroFields_Description_Read>;
  readonly update?: Maybe<HeroFields_Description_Update>;
};

export type HeroFields_Description_Create = {
  readonly __typename?: 'HeroFields_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Description_Delete = {
  readonly __typename?: 'HeroFields_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Description_Read = {
  readonly __typename?: 'HeroFields_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Description_Update = {
  readonly __typename?: 'HeroFields_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta = {
  readonly __typename?: 'HeroFields_meta';
  readonly create?: Maybe<HeroFields_Meta_Create>;
  readonly delete?: Maybe<HeroFields_Meta_Delete>;
  readonly fields?: Maybe<HeroFields_Meta_Fields>;
  readonly read?: Maybe<HeroFields_Meta_Read>;
  readonly update?: Maybe<HeroFields_Meta_Update>;
};

export type HeroFields_Meta_Create = {
  readonly __typename?: 'HeroFields_meta_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Delete = {
  readonly __typename?: 'HeroFields_meta_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Fields = {
  readonly __typename?: 'HeroFields_meta_Fields';
  readonly description?: Maybe<HeroFields_Meta_Description>;
  readonly image?: Maybe<HeroFields_Meta_Image>;
  readonly title?: Maybe<HeroFields_Meta_Title>;
};

export type HeroFields_Meta_Read = {
  readonly __typename?: 'HeroFields_meta_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Update = {
  readonly __typename?: 'HeroFields_meta_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Description = {
  readonly __typename?: 'HeroFields_meta_description';
  readonly create?: Maybe<HeroFields_Meta_Description_Create>;
  readonly delete?: Maybe<HeroFields_Meta_Description_Delete>;
  readonly read?: Maybe<HeroFields_Meta_Description_Read>;
  readonly update?: Maybe<HeroFields_Meta_Description_Update>;
};

export type HeroFields_Meta_Description_Create = {
  readonly __typename?: 'HeroFields_meta_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Description_Delete = {
  readonly __typename?: 'HeroFields_meta_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Description_Read = {
  readonly __typename?: 'HeroFields_meta_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Description_Update = {
  readonly __typename?: 'HeroFields_meta_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Image = {
  readonly __typename?: 'HeroFields_meta_image';
  readonly create?: Maybe<HeroFields_Meta_Image_Create>;
  readonly delete?: Maybe<HeroFields_Meta_Image_Delete>;
  readonly read?: Maybe<HeroFields_Meta_Image_Read>;
  readonly update?: Maybe<HeroFields_Meta_Image_Update>;
};

export type HeroFields_Meta_Image_Create = {
  readonly __typename?: 'HeroFields_meta_image_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Image_Delete = {
  readonly __typename?: 'HeroFields_meta_image_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Image_Read = {
  readonly __typename?: 'HeroFields_meta_image_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Image_Update = {
  readonly __typename?: 'HeroFields_meta_image_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Title = {
  readonly __typename?: 'HeroFields_meta_title';
  readonly create?: Maybe<HeroFields_Meta_Title_Create>;
  readonly delete?: Maybe<HeroFields_Meta_Title_Delete>;
  readonly read?: Maybe<HeroFields_Meta_Title_Read>;
  readonly update?: Maybe<HeroFields_Meta_Title_Update>;
};

export type HeroFields_Meta_Title_Create = {
  readonly __typename?: 'HeroFields_meta_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Title_Delete = {
  readonly __typename?: 'HeroFields_meta_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Title_Read = {
  readonly __typename?: 'HeroFields_meta_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Meta_Title_Update = {
  readonly __typename?: 'HeroFields_meta_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Name = {
  readonly __typename?: 'HeroFields_name';
  readonly create?: Maybe<HeroFields_Name_Create>;
  readonly delete?: Maybe<HeroFields_Name_Delete>;
  readonly read?: Maybe<HeroFields_Name_Read>;
  readonly update?: Maybe<HeroFields_Name_Update>;
};

export type HeroFields_Name_Create = {
  readonly __typename?: 'HeroFields_name_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Name_Delete = {
  readonly __typename?: 'HeroFields_name_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Name_Read = {
  readonly __typename?: 'HeroFields_name_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Name_Update = {
  readonly __typename?: 'HeroFields_name_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Taglines = {
  readonly __typename?: 'HeroFields_taglines';
  readonly create?: Maybe<HeroFields_Taglines_Create>;
  readonly delete?: Maybe<HeroFields_Taglines_Delete>;
  readonly fields?: Maybe<HeroFields_Taglines_Fields>;
  readonly read?: Maybe<HeroFields_Taglines_Read>;
  readonly update?: Maybe<HeroFields_Taglines_Update>;
};

export type HeroFields_Taglines_Create = {
  readonly __typename?: 'HeroFields_taglines_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Taglines_Delete = {
  readonly __typename?: 'HeroFields_taglines_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Taglines_Fields = {
  readonly __typename?: 'HeroFields_taglines_Fields';
  readonly id?: Maybe<HeroFields_Taglines_Id>;
  readonly text?: Maybe<HeroFields_Taglines_Text>;
};

export type HeroFields_Taglines_Read = {
  readonly __typename?: 'HeroFields_taglines_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Taglines_Update = {
  readonly __typename?: 'HeroFields_taglines_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Taglines_Id = {
  readonly __typename?: 'HeroFields_taglines_id';
  readonly create?: Maybe<HeroFields_Taglines_Id_Create>;
  readonly delete?: Maybe<HeroFields_Taglines_Id_Delete>;
  readonly read?: Maybe<HeroFields_Taglines_Id_Read>;
  readonly update?: Maybe<HeroFields_Taglines_Id_Update>;
};

export type HeroFields_Taglines_Id_Create = {
  readonly __typename?: 'HeroFields_taglines_id_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Taglines_Id_Delete = {
  readonly __typename?: 'HeroFields_taglines_id_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Taglines_Id_Read = {
  readonly __typename?: 'HeroFields_taglines_id_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Taglines_Id_Update = {
  readonly __typename?: 'HeroFields_taglines_id_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Taglines_Text = {
  readonly __typename?: 'HeroFields_taglines_text';
  readonly create?: Maybe<HeroFields_Taglines_Text_Create>;
  readonly delete?: Maybe<HeroFields_Taglines_Text_Delete>;
  readonly read?: Maybe<HeroFields_Taglines_Text_Read>;
  readonly update?: Maybe<HeroFields_Taglines_Text_Update>;
};

export type HeroFields_Taglines_Text_Create = {
  readonly __typename?: 'HeroFields_taglines_text_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Taglines_Text_Delete = {
  readonly __typename?: 'HeroFields_taglines_text_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Taglines_Text_Read = {
  readonly __typename?: 'HeroFields_taglines_text_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Taglines_Text_Update = {
  readonly __typename?: 'HeroFields_taglines_text_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Title = {
  readonly __typename?: 'HeroFields_title';
  readonly create?: Maybe<HeroFields_Title_Create>;
  readonly delete?: Maybe<HeroFields_Title_Delete>;
  readonly read?: Maybe<HeroFields_Title_Read>;
  readonly update?: Maybe<HeroFields_Title_Update>;
};

export type HeroFields_Title_Create = {
  readonly __typename?: 'HeroFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Title_Delete = {
  readonly __typename?: 'HeroFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Title_Read = {
  readonly __typename?: 'HeroFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_Title_Update = {
  readonly __typename?: 'HeroFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_UpdatedAt = {
  readonly __typename?: 'HeroFields_updatedAt';
  readonly create?: Maybe<HeroFields_UpdatedAt_Create>;
  readonly delete?: Maybe<HeroFields_UpdatedAt_Delete>;
  readonly read?: Maybe<HeroFields_UpdatedAt_Read>;
  readonly update?: Maybe<HeroFields_UpdatedAt_Update>;
};

export type HeroFields_UpdatedAt_Create = {
  readonly __typename?: 'HeroFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_UpdatedAt_Delete = {
  readonly __typename?: 'HeroFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_UpdatedAt_Read = {
  readonly __typename?: 'HeroFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroFields_UpdatedAt_Update = {
  readonly __typename?: 'HeroFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HeroReadAccess = {
  readonly __typename?: 'HeroReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeroReadDocAccess = {
  readonly __typename?: 'HeroReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeroUpdateAccess = {
  readonly __typename?: 'HeroUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeroUpdateDocAccess = {
  readonly __typename?: 'HeroUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Hero_Meta = {
  readonly __typename?: 'Hero_Meta';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly image?: Maybe<Media>;
  readonly title?: Maybe<Scalars['String']['output']>;
};

export type Hero_Taglines = {
  readonly __typename?: 'Hero_Taglines';
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly text?: Maybe<Scalars['String']['output']>;
};

export type Journal = {
  readonly __typename?: 'Journal';
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly description: Scalars['String']['output'];
  readonly meta?: Maybe<Journal_Meta>;
  readonly subtitle?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type JournalDocAccessFields = {
  readonly __typename?: 'JournalDocAccessFields';
  readonly createdAt?: Maybe<JournalDocAccessFields_CreatedAt>;
  readonly description?: Maybe<JournalDocAccessFields_Description>;
  readonly meta?: Maybe<JournalDocAccessFields_Meta>;
  readonly subtitle?: Maybe<JournalDocAccessFields_Subtitle>;
  readonly title?: Maybe<JournalDocAccessFields_Title>;
  readonly updatedAt?: Maybe<JournalDocAccessFields_UpdatedAt>;
};

export type JournalDocAccessFields_CreatedAt = {
  readonly __typename?: 'JournalDocAccessFields_createdAt';
  readonly create?: Maybe<JournalDocAccessFields_CreatedAt_Create>;
  readonly delete?: Maybe<JournalDocAccessFields_CreatedAt_Delete>;
  readonly read?: Maybe<JournalDocAccessFields_CreatedAt_Read>;
  readonly update?: Maybe<JournalDocAccessFields_CreatedAt_Update>;
};

export type JournalDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'JournalDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'JournalDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'JournalDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'JournalDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Description = {
  readonly __typename?: 'JournalDocAccessFields_description';
  readonly create?: Maybe<JournalDocAccessFields_Description_Create>;
  readonly delete?: Maybe<JournalDocAccessFields_Description_Delete>;
  readonly read?: Maybe<JournalDocAccessFields_Description_Read>;
  readonly update?: Maybe<JournalDocAccessFields_Description_Update>;
};

export type JournalDocAccessFields_Description_Create = {
  readonly __typename?: 'JournalDocAccessFields_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Description_Delete = {
  readonly __typename?: 'JournalDocAccessFields_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Description_Read = {
  readonly __typename?: 'JournalDocAccessFields_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Description_Update = {
  readonly __typename?: 'JournalDocAccessFields_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta = {
  readonly __typename?: 'JournalDocAccessFields_meta';
  readonly create?: Maybe<JournalDocAccessFields_Meta_Create>;
  readonly delete?: Maybe<JournalDocAccessFields_Meta_Delete>;
  readonly fields?: Maybe<JournalDocAccessFields_Meta_Fields>;
  readonly read?: Maybe<JournalDocAccessFields_Meta_Read>;
  readonly update?: Maybe<JournalDocAccessFields_Meta_Update>;
};

export type JournalDocAccessFields_Meta_Create = {
  readonly __typename?: 'JournalDocAccessFields_meta_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Delete = {
  readonly __typename?: 'JournalDocAccessFields_meta_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Fields = {
  readonly __typename?: 'JournalDocAccessFields_meta_Fields';
  readonly description?: Maybe<JournalDocAccessFields_Meta_Description>;
  readonly image?: Maybe<JournalDocAccessFields_Meta_Image>;
  readonly title?: Maybe<JournalDocAccessFields_Meta_Title>;
};

export type JournalDocAccessFields_Meta_Read = {
  readonly __typename?: 'JournalDocAccessFields_meta_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Update = {
  readonly __typename?: 'JournalDocAccessFields_meta_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Description = {
  readonly __typename?: 'JournalDocAccessFields_meta_description';
  readonly create?: Maybe<JournalDocAccessFields_Meta_Description_Create>;
  readonly delete?: Maybe<JournalDocAccessFields_Meta_Description_Delete>;
  readonly read?: Maybe<JournalDocAccessFields_Meta_Description_Read>;
  readonly update?: Maybe<JournalDocAccessFields_Meta_Description_Update>;
};

export type JournalDocAccessFields_Meta_Description_Create = {
  readonly __typename?: 'JournalDocAccessFields_meta_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Description_Delete = {
  readonly __typename?: 'JournalDocAccessFields_meta_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Description_Read = {
  readonly __typename?: 'JournalDocAccessFields_meta_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Description_Update = {
  readonly __typename?: 'JournalDocAccessFields_meta_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Image = {
  readonly __typename?: 'JournalDocAccessFields_meta_image';
  readonly create?: Maybe<JournalDocAccessFields_Meta_Image_Create>;
  readonly delete?: Maybe<JournalDocAccessFields_Meta_Image_Delete>;
  readonly read?: Maybe<JournalDocAccessFields_Meta_Image_Read>;
  readonly update?: Maybe<JournalDocAccessFields_Meta_Image_Update>;
};

export type JournalDocAccessFields_Meta_Image_Create = {
  readonly __typename?: 'JournalDocAccessFields_meta_image_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Image_Delete = {
  readonly __typename?: 'JournalDocAccessFields_meta_image_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Image_Read = {
  readonly __typename?: 'JournalDocAccessFields_meta_image_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Image_Update = {
  readonly __typename?: 'JournalDocAccessFields_meta_image_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Title = {
  readonly __typename?: 'JournalDocAccessFields_meta_title';
  readonly create?: Maybe<JournalDocAccessFields_Meta_Title_Create>;
  readonly delete?: Maybe<JournalDocAccessFields_Meta_Title_Delete>;
  readonly read?: Maybe<JournalDocAccessFields_Meta_Title_Read>;
  readonly update?: Maybe<JournalDocAccessFields_Meta_Title_Update>;
};

export type JournalDocAccessFields_Meta_Title_Create = {
  readonly __typename?: 'JournalDocAccessFields_meta_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Title_Delete = {
  readonly __typename?: 'JournalDocAccessFields_meta_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Title_Read = {
  readonly __typename?: 'JournalDocAccessFields_meta_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Meta_Title_Update = {
  readonly __typename?: 'JournalDocAccessFields_meta_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Subtitle = {
  readonly __typename?: 'JournalDocAccessFields_subtitle';
  readonly create?: Maybe<JournalDocAccessFields_Subtitle_Create>;
  readonly delete?: Maybe<JournalDocAccessFields_Subtitle_Delete>;
  readonly read?: Maybe<JournalDocAccessFields_Subtitle_Read>;
  readonly update?: Maybe<JournalDocAccessFields_Subtitle_Update>;
};

export type JournalDocAccessFields_Subtitle_Create = {
  readonly __typename?: 'JournalDocAccessFields_subtitle_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Subtitle_Delete = {
  readonly __typename?: 'JournalDocAccessFields_subtitle_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Subtitle_Read = {
  readonly __typename?: 'JournalDocAccessFields_subtitle_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Subtitle_Update = {
  readonly __typename?: 'JournalDocAccessFields_subtitle_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Title = {
  readonly __typename?: 'JournalDocAccessFields_title';
  readonly create?: Maybe<JournalDocAccessFields_Title_Create>;
  readonly delete?: Maybe<JournalDocAccessFields_Title_Delete>;
  readonly read?: Maybe<JournalDocAccessFields_Title_Read>;
  readonly update?: Maybe<JournalDocAccessFields_Title_Update>;
};

export type JournalDocAccessFields_Title_Create = {
  readonly __typename?: 'JournalDocAccessFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Title_Delete = {
  readonly __typename?: 'JournalDocAccessFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Title_Read = {
  readonly __typename?: 'JournalDocAccessFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_Title_Update = {
  readonly __typename?: 'JournalDocAccessFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_UpdatedAt = {
  readonly __typename?: 'JournalDocAccessFields_updatedAt';
  readonly create?: Maybe<JournalDocAccessFields_UpdatedAt_Create>;
  readonly delete?: Maybe<JournalDocAccessFields_UpdatedAt_Delete>;
  readonly read?: Maybe<JournalDocAccessFields_UpdatedAt_Read>;
  readonly update?: Maybe<JournalDocAccessFields_UpdatedAt_Update>;
};

export type JournalDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'JournalDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'JournalDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'JournalDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'JournalDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields = {
  readonly __typename?: 'JournalFields';
  readonly createdAt?: Maybe<JournalFields_CreatedAt>;
  readonly description?: Maybe<JournalFields_Description>;
  readonly meta?: Maybe<JournalFields_Meta>;
  readonly subtitle?: Maybe<JournalFields_Subtitle>;
  readonly title?: Maybe<JournalFields_Title>;
  readonly updatedAt?: Maybe<JournalFields_UpdatedAt>;
};

export type JournalFields_CreatedAt = {
  readonly __typename?: 'JournalFields_createdAt';
  readonly create?: Maybe<JournalFields_CreatedAt_Create>;
  readonly delete?: Maybe<JournalFields_CreatedAt_Delete>;
  readonly read?: Maybe<JournalFields_CreatedAt_Read>;
  readonly update?: Maybe<JournalFields_CreatedAt_Update>;
};

export type JournalFields_CreatedAt_Create = {
  readonly __typename?: 'JournalFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_CreatedAt_Delete = {
  readonly __typename?: 'JournalFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_CreatedAt_Read = {
  readonly __typename?: 'JournalFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_CreatedAt_Update = {
  readonly __typename?: 'JournalFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Description = {
  readonly __typename?: 'JournalFields_description';
  readonly create?: Maybe<JournalFields_Description_Create>;
  readonly delete?: Maybe<JournalFields_Description_Delete>;
  readonly read?: Maybe<JournalFields_Description_Read>;
  readonly update?: Maybe<JournalFields_Description_Update>;
};

export type JournalFields_Description_Create = {
  readonly __typename?: 'JournalFields_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Description_Delete = {
  readonly __typename?: 'JournalFields_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Description_Read = {
  readonly __typename?: 'JournalFields_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Description_Update = {
  readonly __typename?: 'JournalFields_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta = {
  readonly __typename?: 'JournalFields_meta';
  readonly create?: Maybe<JournalFields_Meta_Create>;
  readonly delete?: Maybe<JournalFields_Meta_Delete>;
  readonly fields?: Maybe<JournalFields_Meta_Fields>;
  readonly read?: Maybe<JournalFields_Meta_Read>;
  readonly update?: Maybe<JournalFields_Meta_Update>;
};

export type JournalFields_Meta_Create = {
  readonly __typename?: 'JournalFields_meta_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Delete = {
  readonly __typename?: 'JournalFields_meta_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Fields = {
  readonly __typename?: 'JournalFields_meta_Fields';
  readonly description?: Maybe<JournalFields_Meta_Description>;
  readonly image?: Maybe<JournalFields_Meta_Image>;
  readonly title?: Maybe<JournalFields_Meta_Title>;
};

export type JournalFields_Meta_Read = {
  readonly __typename?: 'JournalFields_meta_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Update = {
  readonly __typename?: 'JournalFields_meta_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Description = {
  readonly __typename?: 'JournalFields_meta_description';
  readonly create?: Maybe<JournalFields_Meta_Description_Create>;
  readonly delete?: Maybe<JournalFields_Meta_Description_Delete>;
  readonly read?: Maybe<JournalFields_Meta_Description_Read>;
  readonly update?: Maybe<JournalFields_Meta_Description_Update>;
};

export type JournalFields_Meta_Description_Create = {
  readonly __typename?: 'JournalFields_meta_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Description_Delete = {
  readonly __typename?: 'JournalFields_meta_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Description_Read = {
  readonly __typename?: 'JournalFields_meta_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Description_Update = {
  readonly __typename?: 'JournalFields_meta_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Image = {
  readonly __typename?: 'JournalFields_meta_image';
  readonly create?: Maybe<JournalFields_Meta_Image_Create>;
  readonly delete?: Maybe<JournalFields_Meta_Image_Delete>;
  readonly read?: Maybe<JournalFields_Meta_Image_Read>;
  readonly update?: Maybe<JournalFields_Meta_Image_Update>;
};

export type JournalFields_Meta_Image_Create = {
  readonly __typename?: 'JournalFields_meta_image_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Image_Delete = {
  readonly __typename?: 'JournalFields_meta_image_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Image_Read = {
  readonly __typename?: 'JournalFields_meta_image_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Image_Update = {
  readonly __typename?: 'JournalFields_meta_image_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Title = {
  readonly __typename?: 'JournalFields_meta_title';
  readonly create?: Maybe<JournalFields_Meta_Title_Create>;
  readonly delete?: Maybe<JournalFields_Meta_Title_Delete>;
  readonly read?: Maybe<JournalFields_Meta_Title_Read>;
  readonly update?: Maybe<JournalFields_Meta_Title_Update>;
};

export type JournalFields_Meta_Title_Create = {
  readonly __typename?: 'JournalFields_meta_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Title_Delete = {
  readonly __typename?: 'JournalFields_meta_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Title_Read = {
  readonly __typename?: 'JournalFields_meta_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Meta_Title_Update = {
  readonly __typename?: 'JournalFields_meta_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Subtitle = {
  readonly __typename?: 'JournalFields_subtitle';
  readonly create?: Maybe<JournalFields_Subtitle_Create>;
  readonly delete?: Maybe<JournalFields_Subtitle_Delete>;
  readonly read?: Maybe<JournalFields_Subtitle_Read>;
  readonly update?: Maybe<JournalFields_Subtitle_Update>;
};

export type JournalFields_Subtitle_Create = {
  readonly __typename?: 'JournalFields_subtitle_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Subtitle_Delete = {
  readonly __typename?: 'JournalFields_subtitle_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Subtitle_Read = {
  readonly __typename?: 'JournalFields_subtitle_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Subtitle_Update = {
  readonly __typename?: 'JournalFields_subtitle_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Title = {
  readonly __typename?: 'JournalFields_title';
  readonly create?: Maybe<JournalFields_Title_Create>;
  readonly delete?: Maybe<JournalFields_Title_Delete>;
  readonly read?: Maybe<JournalFields_Title_Read>;
  readonly update?: Maybe<JournalFields_Title_Update>;
};

export type JournalFields_Title_Create = {
  readonly __typename?: 'JournalFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Title_Delete = {
  readonly __typename?: 'JournalFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Title_Read = {
  readonly __typename?: 'JournalFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_Title_Update = {
  readonly __typename?: 'JournalFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_UpdatedAt = {
  readonly __typename?: 'JournalFields_updatedAt';
  readonly create?: Maybe<JournalFields_UpdatedAt_Create>;
  readonly delete?: Maybe<JournalFields_UpdatedAt_Delete>;
  readonly read?: Maybe<JournalFields_UpdatedAt_Read>;
  readonly update?: Maybe<JournalFields_UpdatedAt_Update>;
};

export type JournalFields_UpdatedAt_Create = {
  readonly __typename?: 'JournalFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_UpdatedAt_Delete = {
  readonly __typename?: 'JournalFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_UpdatedAt_Read = {
  readonly __typename?: 'JournalFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalFields_UpdatedAt_Update = {
  readonly __typename?: 'JournalFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type JournalReadAccess = {
  readonly __typename?: 'JournalReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type JournalReadDocAccess = {
  readonly __typename?: 'JournalReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type JournalUpdateAccess = {
  readonly __typename?: 'JournalUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type JournalUpdateDocAccess = {
  readonly __typename?: 'JournalUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Journal_Meta = {
  readonly __typename?: 'Journal_Meta';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly image?: Maybe<Media>;
  readonly title?: Maybe<Scalars['String']['output']>;
};

export type Media = {
  readonly __typename?: 'Media';
  readonly alt: Scalars['String']['output'];
  readonly blurDataURL?: Maybe<Scalars['String']['output']>;
  readonly caption?: Maybe<Scalars['String']['output']>;
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly filename?: Maybe<Scalars['String']['output']>;
  readonly filesize?: Maybe<Scalars['Float']['output']>;
  readonly focalX?: Maybe<Scalars['Float']['output']>;
  readonly focalY?: Maybe<Scalars['Float']['output']>;
  readonly height?: Maybe<Scalars['Float']['output']>;
  readonly id: Scalars['Int']['output'];
  readonly mimeType?: Maybe<Scalars['String']['output']>;
  readonly sizes?: Maybe<Media_Sizes>;
  readonly thumbnailURL?: Maybe<Scalars['String']['output']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly url?: Maybe<Scalars['String']['output']>;
  readonly width?: Maybe<Scalars['Float']['output']>;
};

export type MediaCreateAccess = {
  readonly __typename?: 'MediaCreateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaCreateDocAccess = {
  readonly __typename?: 'MediaCreateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteAccess = {
  readonly __typename?: 'MediaDeleteAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteDocAccess = {
  readonly __typename?: 'MediaDeleteDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDocAccessFields = {
  readonly __typename?: 'MediaDocAccessFields';
  readonly alt?: Maybe<MediaDocAccessFields_Alt>;
  readonly blurDataURL?: Maybe<MediaDocAccessFields_BlurDataUrl>;
  readonly caption?: Maybe<MediaDocAccessFields_Caption>;
  readonly createdAt?: Maybe<MediaDocAccessFields_CreatedAt>;
  readonly filename?: Maybe<MediaDocAccessFields_Filename>;
  readonly filesize?: Maybe<MediaDocAccessFields_Filesize>;
  readonly focalX?: Maybe<MediaDocAccessFields_FocalX>;
  readonly focalY?: Maybe<MediaDocAccessFields_FocalY>;
  readonly height?: Maybe<MediaDocAccessFields_Height>;
  readonly mimeType?: Maybe<MediaDocAccessFields_MimeType>;
  readonly sizes?: Maybe<MediaDocAccessFields_Sizes>;
  readonly thumbnailURL?: Maybe<MediaDocAccessFields_ThumbnailUrl>;
  readonly updatedAt?: Maybe<MediaDocAccessFields_UpdatedAt>;
  readonly url?: Maybe<MediaDocAccessFields_Url>;
  readonly width?: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_Alt = {
  readonly __typename?: 'MediaDocAccessFields_alt';
  readonly create?: Maybe<MediaDocAccessFields_Alt_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Alt_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Alt_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Alt_Update>;
};

export type MediaDocAccessFields_Alt_Create = {
  readonly __typename?: 'MediaDocAccessFields_alt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Delete = {
  readonly __typename?: 'MediaDocAccessFields_alt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Read = {
  readonly __typename?: 'MediaDocAccessFields_alt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Update = {
  readonly __typename?: 'MediaDocAccessFields_alt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_BlurDataUrl = {
  readonly __typename?: 'MediaDocAccessFields_blurDataURL';
  readonly create?: Maybe<MediaDocAccessFields_BlurDataUrl_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_BlurDataUrl_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_BlurDataUrl_Read>;
  readonly update?: Maybe<MediaDocAccessFields_BlurDataUrl_Update>;
};

export type MediaDocAccessFields_BlurDataUrl_Create = {
  readonly __typename?: 'MediaDocAccessFields_blurDataURL_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_BlurDataUrl_Delete = {
  readonly __typename?: 'MediaDocAccessFields_blurDataURL_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_BlurDataUrl_Read = {
  readonly __typename?: 'MediaDocAccessFields_blurDataURL_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_BlurDataUrl_Update = {
  readonly __typename?: 'MediaDocAccessFields_blurDataURL_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Caption = {
  readonly __typename?: 'MediaDocAccessFields_caption';
  readonly create?: Maybe<MediaDocAccessFields_Caption_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Caption_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Caption_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Caption_Update>;
};

export type MediaDocAccessFields_Caption_Create = {
  readonly __typename?: 'MediaDocAccessFields_caption_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Caption_Delete = {
  readonly __typename?: 'MediaDocAccessFields_caption_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Caption_Read = {
  readonly __typename?: 'MediaDocAccessFields_caption_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Caption_Update = {
  readonly __typename?: 'MediaDocAccessFields_caption_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt = {
  readonly __typename?: 'MediaDocAccessFields_createdAt';
  readonly create?: Maybe<MediaDocAccessFields_CreatedAt_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_CreatedAt_Read>;
  readonly update?: Maybe<MediaDocAccessFields_CreatedAt_Update>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'MediaDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'MediaDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'MediaDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'MediaDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename = {
  readonly __typename?: 'MediaDocAccessFields_filename';
  readonly create?: Maybe<MediaDocAccessFields_Filename_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Filename_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Filename_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  readonly __typename?: 'MediaDocAccessFields_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Delete = {
  readonly __typename?: 'MediaDocAccessFields_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Read = {
  readonly __typename?: 'MediaDocAccessFields_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Update = {
  readonly __typename?: 'MediaDocAccessFields_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize = {
  readonly __typename?: 'MediaDocAccessFields_filesize';
  readonly create?: Maybe<MediaDocAccessFields_Filesize_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Filesize_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Filesize_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  readonly __typename?: 'MediaDocAccessFields_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  readonly __typename?: 'MediaDocAccessFields_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Read = {
  readonly __typename?: 'MediaDocAccessFields_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Update = {
  readonly __typename?: 'MediaDocAccessFields_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX = {
  readonly __typename?: 'MediaDocAccessFields_focalX';
  readonly create?: Maybe<MediaDocAccessFields_FocalX_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_FocalX_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_FocalX_Read>;
  readonly update?: Maybe<MediaDocAccessFields_FocalX_Update>;
};

export type MediaDocAccessFields_FocalX_Create = {
  readonly __typename?: 'MediaDocAccessFields_focalX_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Delete = {
  readonly __typename?: 'MediaDocAccessFields_focalX_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Read = {
  readonly __typename?: 'MediaDocAccessFields_focalX_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Update = {
  readonly __typename?: 'MediaDocAccessFields_focalX_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY = {
  readonly __typename?: 'MediaDocAccessFields_focalY';
  readonly create?: Maybe<MediaDocAccessFields_FocalY_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_FocalY_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_FocalY_Read>;
  readonly update?: Maybe<MediaDocAccessFields_FocalY_Update>;
};

export type MediaDocAccessFields_FocalY_Create = {
  readonly __typename?: 'MediaDocAccessFields_focalY_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Delete = {
  readonly __typename?: 'MediaDocAccessFields_focalY_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Read = {
  readonly __typename?: 'MediaDocAccessFields_focalY_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Update = {
  readonly __typename?: 'MediaDocAccessFields_focalY_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height = {
  readonly __typename?: 'MediaDocAccessFields_height';
  readonly create?: Maybe<MediaDocAccessFields_Height_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Height_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Height_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  readonly __typename?: 'MediaDocAccessFields_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Delete = {
  readonly __typename?: 'MediaDocAccessFields_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Read = {
  readonly __typename?: 'MediaDocAccessFields_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Update = {
  readonly __typename?: 'MediaDocAccessFields_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType = {
  readonly __typename?: 'MediaDocAccessFields_mimeType';
  readonly create?: Maybe<MediaDocAccessFields_MimeType_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_MimeType_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_MimeType_Read>;
  readonly update?: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  readonly __typename?: 'MediaDocAccessFields_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  readonly __typename?: 'MediaDocAccessFields_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Read = {
  readonly __typename?: 'MediaDocAccessFields_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Update = {
  readonly __typename?: 'MediaDocAccessFields_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes = {
  readonly __typename?: 'MediaDocAccessFields_sizes';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Delete>;
  readonly fields?: Maybe<MediaDocAccessFields_Sizes_Fields>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Update>;
};

export type MediaDocAccessFields_Sizes_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Fields = {
  readonly __typename?: 'MediaDocAccessFields_sizes_Fields';
  readonly card?: Maybe<MediaDocAccessFields_Sizes_Card>;
  readonly feature?: Maybe<MediaDocAccessFields_Sizes_Feature>;
  readonly hero?: Maybe<MediaDocAccessFields_Sizes_Hero>;
  readonly icon?: Maybe<MediaDocAccessFields_Sizes_Icon>;
  readonly thumbnail?: Maybe<MediaDocAccessFields_Sizes_Thumbnail>;
};

export type MediaDocAccessFields_Sizes_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Card_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Card_Delete>;
  readonly fields?: Maybe<MediaDocAccessFields_Sizes_Card_Fields>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Card_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Card_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Fields = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_Fields';
  readonly filename?: Maybe<MediaDocAccessFields_Sizes_Card_Filename>;
  readonly filesize?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize>;
  readonly height?: Maybe<MediaDocAccessFields_Sizes_Card_Height>;
  readonly mimeType?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType>;
  readonly url?: Maybe<MediaDocAccessFields_Sizes_Card_Url>;
  readonly width?: Maybe<MediaDocAccessFields_Sizes_Card_Width>;
};

export type MediaDocAccessFields_Sizes_Card_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filename = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_filename';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Filename_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_filesize';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Height = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_height';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Height_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_mimeType';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Url = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_url';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Url_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Width = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_width';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Width_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_card_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Feature_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Delete>;
  readonly fields?: Maybe<MediaDocAccessFields_Sizes_Feature_Fields>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Feature_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Feature_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Fields = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_Fields';
  readonly filename?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename>;
  readonly filesize?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize>;
  readonly height?: Maybe<MediaDocAccessFields_Sizes_Feature_Height>;
  readonly mimeType?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType>;
  readonly url?: Maybe<MediaDocAccessFields_Sizes_Feature_Url>;
  readonly width?: Maybe<MediaDocAccessFields_Sizes_Feature_Width>;
};

export type MediaDocAccessFields_Sizes_Feature_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_filename';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_filesize';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Height = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_height';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Feature_Height_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Height_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Feature_Height_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Feature_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Height_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Height_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Height_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Height_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_mimeType';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Url = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_url';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Feature_Url_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Url_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Feature_Url_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Feature_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Url_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Url_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Url_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Url_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Width = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_width';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Feature_Width_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Width_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Feature_Width_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Feature_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Width_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Width_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Width_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Width_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_feature_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Hero_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Hero_Delete>;
  readonly fields?: Maybe<MediaDocAccessFields_Sizes_Hero_Fields>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Hero_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Hero_Update>;
};

export type MediaDocAccessFields_Sizes_Hero_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Fields = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_Fields';
  readonly filename?: Maybe<MediaDocAccessFields_Sizes_Hero_Filename>;
  readonly filesize?: Maybe<MediaDocAccessFields_Sizes_Hero_Filesize>;
  readonly height?: Maybe<MediaDocAccessFields_Sizes_Hero_Height>;
  readonly mimeType?: Maybe<MediaDocAccessFields_Sizes_Hero_MimeType>;
  readonly url?: Maybe<MediaDocAccessFields_Sizes_Hero_Url>;
  readonly width?: Maybe<MediaDocAccessFields_Sizes_Hero_Width>;
};

export type MediaDocAccessFields_Sizes_Hero_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Filename = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_filename';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Hero_Filename_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Hero_Filename_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Hero_Filename_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Hero_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Hero_Filename_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Filename_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Filename_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Filename_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Filesize = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_filesize';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Hero_Filesize_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Hero_Filesize_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Hero_Filesize_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Hero_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Hero_Filesize_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Filesize_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Filesize_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Filesize_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Height = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_height';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Hero_Height_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Hero_Height_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Hero_Height_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Hero_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Hero_Height_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Height_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Height_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Height_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_MimeType = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_mimeType';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Hero_MimeType_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Hero_MimeType_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Hero_MimeType_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Hero_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Hero_MimeType_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_MimeType_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_MimeType_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_MimeType_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Url = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_url';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Hero_Url_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Hero_Url_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Hero_Url_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Hero_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Hero_Url_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Url_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Url_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Url_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Width = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_width';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Hero_Width_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Hero_Width_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Hero_Width_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Hero_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Hero_Width_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Width_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Width_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Hero_Width_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_hero_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Icon_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Icon_Delete>;
  readonly fields?: Maybe<MediaDocAccessFields_Sizes_Icon_Fields>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Icon_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Icon_Update>;
};

export type MediaDocAccessFields_Sizes_Icon_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Fields = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_Fields';
  readonly filename?: Maybe<MediaDocAccessFields_Sizes_Icon_Filename>;
  readonly filesize?: Maybe<MediaDocAccessFields_Sizes_Icon_Filesize>;
  readonly height?: Maybe<MediaDocAccessFields_Sizes_Icon_Height>;
  readonly mimeType?: Maybe<MediaDocAccessFields_Sizes_Icon_MimeType>;
  readonly url?: Maybe<MediaDocAccessFields_Sizes_Icon_Url>;
  readonly width?: Maybe<MediaDocAccessFields_Sizes_Icon_Width>;
};

export type MediaDocAccessFields_Sizes_Icon_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Filename = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_filename';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Icon_Filename_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Icon_Filename_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Icon_Filename_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Icon_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Icon_Filename_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Filename_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Filename_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Filename_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Filesize = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_filesize';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Icon_Filesize_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Icon_Filesize_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Icon_Filesize_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Icon_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Icon_Filesize_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Filesize_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Filesize_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Filesize_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Height = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_height';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Icon_Height_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Icon_Height_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Icon_Height_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Icon_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Icon_Height_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Height_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Height_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Height_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_MimeType = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_mimeType';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Icon_MimeType_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Icon_MimeType_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Icon_MimeType_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Icon_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Icon_MimeType_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_MimeType_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_MimeType_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_MimeType_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Url = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_url';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Icon_Url_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Icon_Url_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Icon_Url_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Icon_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Icon_Url_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Url_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Url_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Url_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Width = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_width';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Icon_Width_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Icon_Width_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Icon_Width_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Icon_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Icon_Width_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Width_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Width_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Icon_Width_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_icon_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Delete>;
  readonly fields?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Fields>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Fields = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_Fields';
  readonly filename?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename>;
  readonly filesize?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize>;
  readonly height?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height>;
  readonly mimeType?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType>;
  readonly url?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url>;
  readonly width?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_height';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_url';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_width';
  readonly create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl = {
  readonly __typename?: 'MediaDocAccessFields_thumbnailURL';
  readonly create?: Maybe<MediaDocAccessFields_ThumbnailUrl_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_ThumbnailUrl_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_ThumbnailUrl_Read>;
  readonly update?: Maybe<MediaDocAccessFields_ThumbnailUrl_Update>;
};

export type MediaDocAccessFields_ThumbnailUrl_Create = {
  readonly __typename?: 'MediaDocAccessFields_thumbnailURL_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Delete = {
  readonly __typename?: 'MediaDocAccessFields_thumbnailURL_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Read = {
  readonly __typename?: 'MediaDocAccessFields_thumbnailURL_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Update = {
  readonly __typename?: 'MediaDocAccessFields_thumbnailURL_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt = {
  readonly __typename?: 'MediaDocAccessFields_updatedAt';
  readonly create?: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
  readonly update?: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'MediaDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'MediaDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'MediaDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url = {
  readonly __typename?: 'MediaDocAccessFields_url';
  readonly create?: Maybe<MediaDocAccessFields_Url_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Url_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Url_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  readonly __typename?: 'MediaDocAccessFields_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Delete = {
  readonly __typename?: 'MediaDocAccessFields_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Read = {
  readonly __typename?: 'MediaDocAccessFields_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Update = {
  readonly __typename?: 'MediaDocAccessFields_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width = {
  readonly __typename?: 'MediaDocAccessFields_width';
  readonly create?: Maybe<MediaDocAccessFields_Width_Create>;
  readonly delete?: Maybe<MediaDocAccessFields_Width_Delete>;
  readonly read?: Maybe<MediaDocAccessFields_Width_Read>;
  readonly update?: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  readonly __typename?: 'MediaDocAccessFields_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Delete = {
  readonly __typename?: 'MediaDocAccessFields_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Read = {
  readonly __typename?: 'MediaDocAccessFields_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Update = {
  readonly __typename?: 'MediaDocAccessFields_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields = {
  readonly __typename?: 'MediaFields';
  readonly alt?: Maybe<MediaFields_Alt>;
  readonly blurDataURL?: Maybe<MediaFields_BlurDataUrl>;
  readonly caption?: Maybe<MediaFields_Caption>;
  readonly createdAt?: Maybe<MediaFields_CreatedAt>;
  readonly filename?: Maybe<MediaFields_Filename>;
  readonly filesize?: Maybe<MediaFields_Filesize>;
  readonly focalX?: Maybe<MediaFields_FocalX>;
  readonly focalY?: Maybe<MediaFields_FocalY>;
  readonly height?: Maybe<MediaFields_Height>;
  readonly mimeType?: Maybe<MediaFields_MimeType>;
  readonly sizes?: Maybe<MediaFields_Sizes>;
  readonly thumbnailURL?: Maybe<MediaFields_ThumbnailUrl>;
  readonly updatedAt?: Maybe<MediaFields_UpdatedAt>;
  readonly url?: Maybe<MediaFields_Url>;
  readonly width?: Maybe<MediaFields_Width>;
};

export type MediaFields_Alt = {
  readonly __typename?: 'MediaFields_alt';
  readonly create?: Maybe<MediaFields_Alt_Create>;
  readonly delete?: Maybe<MediaFields_Alt_Delete>;
  readonly read?: Maybe<MediaFields_Alt_Read>;
  readonly update?: Maybe<MediaFields_Alt_Update>;
};

export type MediaFields_Alt_Create = {
  readonly __typename?: 'MediaFields_alt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Delete = {
  readonly __typename?: 'MediaFields_alt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Read = {
  readonly __typename?: 'MediaFields_alt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Update = {
  readonly __typename?: 'MediaFields_alt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_BlurDataUrl = {
  readonly __typename?: 'MediaFields_blurDataURL';
  readonly create?: Maybe<MediaFields_BlurDataUrl_Create>;
  readonly delete?: Maybe<MediaFields_BlurDataUrl_Delete>;
  readonly read?: Maybe<MediaFields_BlurDataUrl_Read>;
  readonly update?: Maybe<MediaFields_BlurDataUrl_Update>;
};

export type MediaFields_BlurDataUrl_Create = {
  readonly __typename?: 'MediaFields_blurDataURL_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_BlurDataUrl_Delete = {
  readonly __typename?: 'MediaFields_blurDataURL_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_BlurDataUrl_Read = {
  readonly __typename?: 'MediaFields_blurDataURL_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_BlurDataUrl_Update = {
  readonly __typename?: 'MediaFields_blurDataURL_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Caption = {
  readonly __typename?: 'MediaFields_caption';
  readonly create?: Maybe<MediaFields_Caption_Create>;
  readonly delete?: Maybe<MediaFields_Caption_Delete>;
  readonly read?: Maybe<MediaFields_Caption_Read>;
  readonly update?: Maybe<MediaFields_Caption_Update>;
};

export type MediaFields_Caption_Create = {
  readonly __typename?: 'MediaFields_caption_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Caption_Delete = {
  readonly __typename?: 'MediaFields_caption_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Caption_Read = {
  readonly __typename?: 'MediaFields_caption_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Caption_Update = {
  readonly __typename?: 'MediaFields_caption_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt = {
  readonly __typename?: 'MediaFields_createdAt';
  readonly create?: Maybe<MediaFields_CreatedAt_Create>;
  readonly delete?: Maybe<MediaFields_CreatedAt_Delete>;
  readonly read?: Maybe<MediaFields_CreatedAt_Read>;
  readonly update?: Maybe<MediaFields_CreatedAt_Update>;
};

export type MediaFields_CreatedAt_Create = {
  readonly __typename?: 'MediaFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Delete = {
  readonly __typename?: 'MediaFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Read = {
  readonly __typename?: 'MediaFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Update = {
  readonly __typename?: 'MediaFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename = {
  readonly __typename?: 'MediaFields_filename';
  readonly create?: Maybe<MediaFields_Filename_Create>;
  readonly delete?: Maybe<MediaFields_Filename_Delete>;
  readonly read?: Maybe<MediaFields_Filename_Read>;
  readonly update?: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  readonly __typename?: 'MediaFields_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Delete = {
  readonly __typename?: 'MediaFields_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Read = {
  readonly __typename?: 'MediaFields_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Update = {
  readonly __typename?: 'MediaFields_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize = {
  readonly __typename?: 'MediaFields_filesize';
  readonly create?: Maybe<MediaFields_Filesize_Create>;
  readonly delete?: Maybe<MediaFields_Filesize_Delete>;
  readonly read?: Maybe<MediaFields_Filesize_Read>;
  readonly update?: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  readonly __typename?: 'MediaFields_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Delete = {
  readonly __typename?: 'MediaFields_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Read = {
  readonly __typename?: 'MediaFields_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Update = {
  readonly __typename?: 'MediaFields_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX = {
  readonly __typename?: 'MediaFields_focalX';
  readonly create?: Maybe<MediaFields_FocalX_Create>;
  readonly delete?: Maybe<MediaFields_FocalX_Delete>;
  readonly read?: Maybe<MediaFields_FocalX_Read>;
  readonly update?: Maybe<MediaFields_FocalX_Update>;
};

export type MediaFields_FocalX_Create = {
  readonly __typename?: 'MediaFields_focalX_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Delete = {
  readonly __typename?: 'MediaFields_focalX_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Read = {
  readonly __typename?: 'MediaFields_focalX_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Update = {
  readonly __typename?: 'MediaFields_focalX_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY = {
  readonly __typename?: 'MediaFields_focalY';
  readonly create?: Maybe<MediaFields_FocalY_Create>;
  readonly delete?: Maybe<MediaFields_FocalY_Delete>;
  readonly read?: Maybe<MediaFields_FocalY_Read>;
  readonly update?: Maybe<MediaFields_FocalY_Update>;
};

export type MediaFields_FocalY_Create = {
  readonly __typename?: 'MediaFields_focalY_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Delete = {
  readonly __typename?: 'MediaFields_focalY_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Read = {
  readonly __typename?: 'MediaFields_focalY_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Update = {
  readonly __typename?: 'MediaFields_focalY_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height = {
  readonly __typename?: 'MediaFields_height';
  readonly create?: Maybe<MediaFields_Height_Create>;
  readonly delete?: Maybe<MediaFields_Height_Delete>;
  readonly read?: Maybe<MediaFields_Height_Read>;
  readonly update?: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  readonly __typename?: 'MediaFields_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Delete = {
  readonly __typename?: 'MediaFields_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Read = {
  readonly __typename?: 'MediaFields_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Update = {
  readonly __typename?: 'MediaFields_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType = {
  readonly __typename?: 'MediaFields_mimeType';
  readonly create?: Maybe<MediaFields_MimeType_Create>;
  readonly delete?: Maybe<MediaFields_MimeType_Delete>;
  readonly read?: Maybe<MediaFields_MimeType_Read>;
  readonly update?: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  readonly __typename?: 'MediaFields_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Delete = {
  readonly __typename?: 'MediaFields_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Read = {
  readonly __typename?: 'MediaFields_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Update = {
  readonly __typename?: 'MediaFields_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes = {
  readonly __typename?: 'MediaFields_sizes';
  readonly create?: Maybe<MediaFields_Sizes_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Delete>;
  readonly fields?: Maybe<MediaFields_Sizes_Fields>;
  readonly read?: Maybe<MediaFields_Sizes_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Update>;
};

export type MediaFields_Sizes_Create = {
  readonly __typename?: 'MediaFields_sizes_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Delete = {
  readonly __typename?: 'MediaFields_sizes_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Fields = {
  readonly __typename?: 'MediaFields_sizes_Fields';
  readonly card?: Maybe<MediaFields_Sizes_Card>;
  readonly feature?: Maybe<MediaFields_Sizes_Feature>;
  readonly hero?: Maybe<MediaFields_Sizes_Hero>;
  readonly icon?: Maybe<MediaFields_Sizes_Icon>;
  readonly thumbnail?: Maybe<MediaFields_Sizes_Thumbnail>;
};

export type MediaFields_Sizes_Read = {
  readonly __typename?: 'MediaFields_sizes_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Update = {
  readonly __typename?: 'MediaFields_sizes_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card = {
  readonly __typename?: 'MediaFields_sizes_card';
  readonly create?: Maybe<MediaFields_Sizes_Card_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Card_Delete>;
  readonly fields?: Maybe<MediaFields_Sizes_Card_Fields>;
  readonly read?: Maybe<MediaFields_Sizes_Card_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Card_Update>;
};

export type MediaFields_Sizes_Card_Create = {
  readonly __typename?: 'MediaFields_sizes_card_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Delete = {
  readonly __typename?: 'MediaFields_sizes_card_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Fields = {
  readonly __typename?: 'MediaFields_sizes_card_Fields';
  readonly filename?: Maybe<MediaFields_Sizes_Card_Filename>;
  readonly filesize?: Maybe<MediaFields_Sizes_Card_Filesize>;
  readonly height?: Maybe<MediaFields_Sizes_Card_Height>;
  readonly mimeType?: Maybe<MediaFields_Sizes_Card_MimeType>;
  readonly url?: Maybe<MediaFields_Sizes_Card_Url>;
  readonly width?: Maybe<MediaFields_Sizes_Card_Width>;
};

export type MediaFields_Sizes_Card_Read = {
  readonly __typename?: 'MediaFields_sizes_card_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Update = {
  readonly __typename?: 'MediaFields_sizes_card_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filename = {
  readonly __typename?: 'MediaFields_sizes_card_filename';
  readonly create?: Maybe<MediaFields_Sizes_Card_Filename_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Card_Filename_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Card_Filename_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Card_Filename_Update>;
};

export type MediaFields_Sizes_Card_Filename_Create = {
  readonly __typename?: 'MediaFields_sizes_card_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filename_Delete = {
  readonly __typename?: 'MediaFields_sizes_card_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filename_Read = {
  readonly __typename?: 'MediaFields_sizes_card_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filename_Update = {
  readonly __typename?: 'MediaFields_sizes_card_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filesize = {
  readonly __typename?: 'MediaFields_sizes_card_filesize';
  readonly create?: Maybe<MediaFields_Sizes_Card_Filesize_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Card_Filesize_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Card_Filesize_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Card_Filesize_Update>;
};

export type MediaFields_Sizes_Card_Filesize_Create = {
  readonly __typename?: 'MediaFields_sizes_card_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filesize_Delete = {
  readonly __typename?: 'MediaFields_sizes_card_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filesize_Read = {
  readonly __typename?: 'MediaFields_sizes_card_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filesize_Update = {
  readonly __typename?: 'MediaFields_sizes_card_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Height = {
  readonly __typename?: 'MediaFields_sizes_card_height';
  readonly create?: Maybe<MediaFields_Sizes_Card_Height_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Card_Height_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Card_Height_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Card_Height_Update>;
};

export type MediaFields_Sizes_Card_Height_Create = {
  readonly __typename?: 'MediaFields_sizes_card_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Height_Delete = {
  readonly __typename?: 'MediaFields_sizes_card_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Height_Read = {
  readonly __typename?: 'MediaFields_sizes_card_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Height_Update = {
  readonly __typename?: 'MediaFields_sizes_card_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_MimeType = {
  readonly __typename?: 'MediaFields_sizes_card_mimeType';
  readonly create?: Maybe<MediaFields_Sizes_Card_MimeType_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Card_MimeType_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Card_MimeType_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Card_MimeType_Update>;
};

export type MediaFields_Sizes_Card_MimeType_Create = {
  readonly __typename?: 'MediaFields_sizes_card_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_MimeType_Delete = {
  readonly __typename?: 'MediaFields_sizes_card_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_MimeType_Read = {
  readonly __typename?: 'MediaFields_sizes_card_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_MimeType_Update = {
  readonly __typename?: 'MediaFields_sizes_card_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Url = {
  readonly __typename?: 'MediaFields_sizes_card_url';
  readonly create?: Maybe<MediaFields_Sizes_Card_Url_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Card_Url_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Card_Url_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Card_Url_Update>;
};

export type MediaFields_Sizes_Card_Url_Create = {
  readonly __typename?: 'MediaFields_sizes_card_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Url_Delete = {
  readonly __typename?: 'MediaFields_sizes_card_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Url_Read = {
  readonly __typename?: 'MediaFields_sizes_card_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Url_Update = {
  readonly __typename?: 'MediaFields_sizes_card_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Width = {
  readonly __typename?: 'MediaFields_sizes_card_width';
  readonly create?: Maybe<MediaFields_Sizes_Card_Width_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Card_Width_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Card_Width_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Card_Width_Update>;
};

export type MediaFields_Sizes_Card_Width_Create = {
  readonly __typename?: 'MediaFields_sizes_card_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Width_Delete = {
  readonly __typename?: 'MediaFields_sizes_card_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Width_Read = {
  readonly __typename?: 'MediaFields_sizes_card_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Width_Update = {
  readonly __typename?: 'MediaFields_sizes_card_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature = {
  readonly __typename?: 'MediaFields_sizes_feature';
  readonly create?: Maybe<MediaFields_Sizes_Feature_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Feature_Delete>;
  readonly fields?: Maybe<MediaFields_Sizes_Feature_Fields>;
  readonly read?: Maybe<MediaFields_Sizes_Feature_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Feature_Update>;
};

export type MediaFields_Sizes_Feature_Create = {
  readonly __typename?: 'MediaFields_sizes_feature_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Delete = {
  readonly __typename?: 'MediaFields_sizes_feature_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Fields = {
  readonly __typename?: 'MediaFields_sizes_feature_Fields';
  readonly filename?: Maybe<MediaFields_Sizes_Feature_Filename>;
  readonly filesize?: Maybe<MediaFields_Sizes_Feature_Filesize>;
  readonly height?: Maybe<MediaFields_Sizes_Feature_Height>;
  readonly mimeType?: Maybe<MediaFields_Sizes_Feature_MimeType>;
  readonly url?: Maybe<MediaFields_Sizes_Feature_Url>;
  readonly width?: Maybe<MediaFields_Sizes_Feature_Width>;
};

export type MediaFields_Sizes_Feature_Read = {
  readonly __typename?: 'MediaFields_sizes_feature_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Update = {
  readonly __typename?: 'MediaFields_sizes_feature_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filename = {
  readonly __typename?: 'MediaFields_sizes_feature_filename';
  readonly create?: Maybe<MediaFields_Sizes_Feature_Filename_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Feature_Filename_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Feature_Filename_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Feature_Filename_Update>;
};

export type MediaFields_Sizes_Feature_Filename_Create = {
  readonly __typename?: 'MediaFields_sizes_feature_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filename_Delete = {
  readonly __typename?: 'MediaFields_sizes_feature_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filename_Read = {
  readonly __typename?: 'MediaFields_sizes_feature_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filename_Update = {
  readonly __typename?: 'MediaFields_sizes_feature_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filesize = {
  readonly __typename?: 'MediaFields_sizes_feature_filesize';
  readonly create?: Maybe<MediaFields_Sizes_Feature_Filesize_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Feature_Filesize_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Feature_Filesize_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Feature_Filesize_Update>;
};

export type MediaFields_Sizes_Feature_Filesize_Create = {
  readonly __typename?: 'MediaFields_sizes_feature_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filesize_Delete = {
  readonly __typename?: 'MediaFields_sizes_feature_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filesize_Read = {
  readonly __typename?: 'MediaFields_sizes_feature_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filesize_Update = {
  readonly __typename?: 'MediaFields_sizes_feature_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Height = {
  readonly __typename?: 'MediaFields_sizes_feature_height';
  readonly create?: Maybe<MediaFields_Sizes_Feature_Height_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Feature_Height_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Feature_Height_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Feature_Height_Update>;
};

export type MediaFields_Sizes_Feature_Height_Create = {
  readonly __typename?: 'MediaFields_sizes_feature_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Height_Delete = {
  readonly __typename?: 'MediaFields_sizes_feature_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Height_Read = {
  readonly __typename?: 'MediaFields_sizes_feature_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Height_Update = {
  readonly __typename?: 'MediaFields_sizes_feature_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_MimeType = {
  readonly __typename?: 'MediaFields_sizes_feature_mimeType';
  readonly create?: Maybe<MediaFields_Sizes_Feature_MimeType_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Feature_MimeType_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Feature_MimeType_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Feature_MimeType_Update>;
};

export type MediaFields_Sizes_Feature_MimeType_Create = {
  readonly __typename?: 'MediaFields_sizes_feature_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_MimeType_Delete = {
  readonly __typename?: 'MediaFields_sizes_feature_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_MimeType_Read = {
  readonly __typename?: 'MediaFields_sizes_feature_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_MimeType_Update = {
  readonly __typename?: 'MediaFields_sizes_feature_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Url = {
  readonly __typename?: 'MediaFields_sizes_feature_url';
  readonly create?: Maybe<MediaFields_Sizes_Feature_Url_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Feature_Url_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Feature_Url_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Feature_Url_Update>;
};

export type MediaFields_Sizes_Feature_Url_Create = {
  readonly __typename?: 'MediaFields_sizes_feature_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Url_Delete = {
  readonly __typename?: 'MediaFields_sizes_feature_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Url_Read = {
  readonly __typename?: 'MediaFields_sizes_feature_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Url_Update = {
  readonly __typename?: 'MediaFields_sizes_feature_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Width = {
  readonly __typename?: 'MediaFields_sizes_feature_width';
  readonly create?: Maybe<MediaFields_Sizes_Feature_Width_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Feature_Width_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Feature_Width_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Feature_Width_Update>;
};

export type MediaFields_Sizes_Feature_Width_Create = {
  readonly __typename?: 'MediaFields_sizes_feature_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Width_Delete = {
  readonly __typename?: 'MediaFields_sizes_feature_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Width_Read = {
  readonly __typename?: 'MediaFields_sizes_feature_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Width_Update = {
  readonly __typename?: 'MediaFields_sizes_feature_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero = {
  readonly __typename?: 'MediaFields_sizes_hero';
  readonly create?: Maybe<MediaFields_Sizes_Hero_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Hero_Delete>;
  readonly fields?: Maybe<MediaFields_Sizes_Hero_Fields>;
  readonly read?: Maybe<MediaFields_Sizes_Hero_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Hero_Update>;
};

export type MediaFields_Sizes_Hero_Create = {
  readonly __typename?: 'MediaFields_sizes_hero_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Delete = {
  readonly __typename?: 'MediaFields_sizes_hero_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Fields = {
  readonly __typename?: 'MediaFields_sizes_hero_Fields';
  readonly filename?: Maybe<MediaFields_Sizes_Hero_Filename>;
  readonly filesize?: Maybe<MediaFields_Sizes_Hero_Filesize>;
  readonly height?: Maybe<MediaFields_Sizes_Hero_Height>;
  readonly mimeType?: Maybe<MediaFields_Sizes_Hero_MimeType>;
  readonly url?: Maybe<MediaFields_Sizes_Hero_Url>;
  readonly width?: Maybe<MediaFields_Sizes_Hero_Width>;
};

export type MediaFields_Sizes_Hero_Read = {
  readonly __typename?: 'MediaFields_sizes_hero_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Update = {
  readonly __typename?: 'MediaFields_sizes_hero_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Filename = {
  readonly __typename?: 'MediaFields_sizes_hero_filename';
  readonly create?: Maybe<MediaFields_Sizes_Hero_Filename_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Hero_Filename_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Hero_Filename_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Hero_Filename_Update>;
};

export type MediaFields_Sizes_Hero_Filename_Create = {
  readonly __typename?: 'MediaFields_sizes_hero_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Filename_Delete = {
  readonly __typename?: 'MediaFields_sizes_hero_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Filename_Read = {
  readonly __typename?: 'MediaFields_sizes_hero_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Filename_Update = {
  readonly __typename?: 'MediaFields_sizes_hero_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Filesize = {
  readonly __typename?: 'MediaFields_sizes_hero_filesize';
  readonly create?: Maybe<MediaFields_Sizes_Hero_Filesize_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Hero_Filesize_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Hero_Filesize_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Hero_Filesize_Update>;
};

export type MediaFields_Sizes_Hero_Filesize_Create = {
  readonly __typename?: 'MediaFields_sizes_hero_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Filesize_Delete = {
  readonly __typename?: 'MediaFields_sizes_hero_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Filesize_Read = {
  readonly __typename?: 'MediaFields_sizes_hero_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Filesize_Update = {
  readonly __typename?: 'MediaFields_sizes_hero_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Height = {
  readonly __typename?: 'MediaFields_sizes_hero_height';
  readonly create?: Maybe<MediaFields_Sizes_Hero_Height_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Hero_Height_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Hero_Height_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Hero_Height_Update>;
};

export type MediaFields_Sizes_Hero_Height_Create = {
  readonly __typename?: 'MediaFields_sizes_hero_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Height_Delete = {
  readonly __typename?: 'MediaFields_sizes_hero_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Height_Read = {
  readonly __typename?: 'MediaFields_sizes_hero_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Height_Update = {
  readonly __typename?: 'MediaFields_sizes_hero_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_MimeType = {
  readonly __typename?: 'MediaFields_sizes_hero_mimeType';
  readonly create?: Maybe<MediaFields_Sizes_Hero_MimeType_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Hero_MimeType_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Hero_MimeType_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Hero_MimeType_Update>;
};

export type MediaFields_Sizes_Hero_MimeType_Create = {
  readonly __typename?: 'MediaFields_sizes_hero_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_MimeType_Delete = {
  readonly __typename?: 'MediaFields_sizes_hero_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_MimeType_Read = {
  readonly __typename?: 'MediaFields_sizes_hero_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_MimeType_Update = {
  readonly __typename?: 'MediaFields_sizes_hero_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Url = {
  readonly __typename?: 'MediaFields_sizes_hero_url';
  readonly create?: Maybe<MediaFields_Sizes_Hero_Url_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Hero_Url_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Hero_Url_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Hero_Url_Update>;
};

export type MediaFields_Sizes_Hero_Url_Create = {
  readonly __typename?: 'MediaFields_sizes_hero_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Url_Delete = {
  readonly __typename?: 'MediaFields_sizes_hero_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Url_Read = {
  readonly __typename?: 'MediaFields_sizes_hero_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Url_Update = {
  readonly __typename?: 'MediaFields_sizes_hero_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Width = {
  readonly __typename?: 'MediaFields_sizes_hero_width';
  readonly create?: Maybe<MediaFields_Sizes_Hero_Width_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Hero_Width_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Hero_Width_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Hero_Width_Update>;
};

export type MediaFields_Sizes_Hero_Width_Create = {
  readonly __typename?: 'MediaFields_sizes_hero_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Width_Delete = {
  readonly __typename?: 'MediaFields_sizes_hero_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Width_Read = {
  readonly __typename?: 'MediaFields_sizes_hero_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Hero_Width_Update = {
  readonly __typename?: 'MediaFields_sizes_hero_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon = {
  readonly __typename?: 'MediaFields_sizes_icon';
  readonly create?: Maybe<MediaFields_Sizes_Icon_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Icon_Delete>;
  readonly fields?: Maybe<MediaFields_Sizes_Icon_Fields>;
  readonly read?: Maybe<MediaFields_Sizes_Icon_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Icon_Update>;
};

export type MediaFields_Sizes_Icon_Create = {
  readonly __typename?: 'MediaFields_sizes_icon_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Delete = {
  readonly __typename?: 'MediaFields_sizes_icon_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Fields = {
  readonly __typename?: 'MediaFields_sizes_icon_Fields';
  readonly filename?: Maybe<MediaFields_Sizes_Icon_Filename>;
  readonly filesize?: Maybe<MediaFields_Sizes_Icon_Filesize>;
  readonly height?: Maybe<MediaFields_Sizes_Icon_Height>;
  readonly mimeType?: Maybe<MediaFields_Sizes_Icon_MimeType>;
  readonly url?: Maybe<MediaFields_Sizes_Icon_Url>;
  readonly width?: Maybe<MediaFields_Sizes_Icon_Width>;
};

export type MediaFields_Sizes_Icon_Read = {
  readonly __typename?: 'MediaFields_sizes_icon_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Update = {
  readonly __typename?: 'MediaFields_sizes_icon_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Filename = {
  readonly __typename?: 'MediaFields_sizes_icon_filename';
  readonly create?: Maybe<MediaFields_Sizes_Icon_Filename_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Icon_Filename_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Icon_Filename_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Icon_Filename_Update>;
};

export type MediaFields_Sizes_Icon_Filename_Create = {
  readonly __typename?: 'MediaFields_sizes_icon_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Filename_Delete = {
  readonly __typename?: 'MediaFields_sizes_icon_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Filename_Read = {
  readonly __typename?: 'MediaFields_sizes_icon_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Filename_Update = {
  readonly __typename?: 'MediaFields_sizes_icon_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Filesize = {
  readonly __typename?: 'MediaFields_sizes_icon_filesize';
  readonly create?: Maybe<MediaFields_Sizes_Icon_Filesize_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Icon_Filesize_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Icon_Filesize_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Icon_Filesize_Update>;
};

export type MediaFields_Sizes_Icon_Filesize_Create = {
  readonly __typename?: 'MediaFields_sizes_icon_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Filesize_Delete = {
  readonly __typename?: 'MediaFields_sizes_icon_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Filesize_Read = {
  readonly __typename?: 'MediaFields_sizes_icon_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Filesize_Update = {
  readonly __typename?: 'MediaFields_sizes_icon_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Height = {
  readonly __typename?: 'MediaFields_sizes_icon_height';
  readonly create?: Maybe<MediaFields_Sizes_Icon_Height_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Icon_Height_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Icon_Height_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Icon_Height_Update>;
};

export type MediaFields_Sizes_Icon_Height_Create = {
  readonly __typename?: 'MediaFields_sizes_icon_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Height_Delete = {
  readonly __typename?: 'MediaFields_sizes_icon_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Height_Read = {
  readonly __typename?: 'MediaFields_sizes_icon_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Height_Update = {
  readonly __typename?: 'MediaFields_sizes_icon_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_MimeType = {
  readonly __typename?: 'MediaFields_sizes_icon_mimeType';
  readonly create?: Maybe<MediaFields_Sizes_Icon_MimeType_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Icon_MimeType_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Icon_MimeType_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Icon_MimeType_Update>;
};

export type MediaFields_Sizes_Icon_MimeType_Create = {
  readonly __typename?: 'MediaFields_sizes_icon_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_MimeType_Delete = {
  readonly __typename?: 'MediaFields_sizes_icon_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_MimeType_Read = {
  readonly __typename?: 'MediaFields_sizes_icon_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_MimeType_Update = {
  readonly __typename?: 'MediaFields_sizes_icon_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Url = {
  readonly __typename?: 'MediaFields_sizes_icon_url';
  readonly create?: Maybe<MediaFields_Sizes_Icon_Url_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Icon_Url_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Icon_Url_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Icon_Url_Update>;
};

export type MediaFields_Sizes_Icon_Url_Create = {
  readonly __typename?: 'MediaFields_sizes_icon_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Url_Delete = {
  readonly __typename?: 'MediaFields_sizes_icon_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Url_Read = {
  readonly __typename?: 'MediaFields_sizes_icon_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Url_Update = {
  readonly __typename?: 'MediaFields_sizes_icon_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Width = {
  readonly __typename?: 'MediaFields_sizes_icon_width';
  readonly create?: Maybe<MediaFields_Sizes_Icon_Width_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Icon_Width_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Icon_Width_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Icon_Width_Update>;
};

export type MediaFields_Sizes_Icon_Width_Create = {
  readonly __typename?: 'MediaFields_sizes_icon_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Width_Delete = {
  readonly __typename?: 'MediaFields_sizes_icon_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Width_Read = {
  readonly __typename?: 'MediaFields_sizes_icon_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Icon_Width_Update = {
  readonly __typename?: 'MediaFields_sizes_icon_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail = {
  readonly __typename?: 'MediaFields_sizes_thumbnail';
  readonly create?: Maybe<MediaFields_Sizes_Thumbnail_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Thumbnail_Delete>;
  readonly fields?: Maybe<MediaFields_Sizes_Thumbnail_Fields>;
  readonly read?: Maybe<MediaFields_Sizes_Thumbnail_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Thumbnail_Update>;
};

export type MediaFields_Sizes_Thumbnail_Create = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Delete = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Fields = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_Fields';
  readonly filename?: Maybe<MediaFields_Sizes_Thumbnail_Filename>;
  readonly filesize?: Maybe<MediaFields_Sizes_Thumbnail_Filesize>;
  readonly height?: Maybe<MediaFields_Sizes_Thumbnail_Height>;
  readonly mimeType?: Maybe<MediaFields_Sizes_Thumbnail_MimeType>;
  readonly url?: Maybe<MediaFields_Sizes_Thumbnail_Url>;
  readonly width?: Maybe<MediaFields_Sizes_Thumbnail_Width>;
};

export type MediaFields_Sizes_Thumbnail_Read = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Update = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_filename';
  readonly create?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filename_Create = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Delete = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Read = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Update = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_filesize';
  readonly create?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filesize_Create = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Delete = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Read = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Update = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_height';
  readonly create?: Maybe<MediaFields_Sizes_Thumbnail_Height_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Thumbnail_Height_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Thumbnail_Height_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaFields_Sizes_Thumbnail_Height_Create = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Delete = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Read = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Update = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_mimeType';
  readonly create?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaFields_Sizes_Thumbnail_MimeType_Create = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Delete = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Read = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Update = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_url';
  readonly create?: Maybe<MediaFields_Sizes_Thumbnail_Url_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Thumbnail_Url_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Thumbnail_Url_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaFields_Sizes_Thumbnail_Url_Create = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Delete = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Read = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Update = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_width';
  readonly create?: Maybe<MediaFields_Sizes_Thumbnail_Width_Create>;
  readonly delete?: Maybe<MediaFields_Sizes_Thumbnail_Width_Delete>;
  readonly read?: Maybe<MediaFields_Sizes_Thumbnail_Width_Read>;
  readonly update?: Maybe<MediaFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaFields_Sizes_Thumbnail_Width_Create = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Delete = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Read = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Update = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl = {
  readonly __typename?: 'MediaFields_thumbnailURL';
  readonly create?: Maybe<MediaFields_ThumbnailUrl_Create>;
  readonly delete?: Maybe<MediaFields_ThumbnailUrl_Delete>;
  readonly read?: Maybe<MediaFields_ThumbnailUrl_Read>;
  readonly update?: Maybe<MediaFields_ThumbnailUrl_Update>;
};

export type MediaFields_ThumbnailUrl_Create = {
  readonly __typename?: 'MediaFields_thumbnailURL_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Delete = {
  readonly __typename?: 'MediaFields_thumbnailURL_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Read = {
  readonly __typename?: 'MediaFields_thumbnailURL_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Update = {
  readonly __typename?: 'MediaFields_thumbnailURL_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt = {
  readonly __typename?: 'MediaFields_updatedAt';
  readonly create?: Maybe<MediaFields_UpdatedAt_Create>;
  readonly delete?: Maybe<MediaFields_UpdatedAt_Delete>;
  readonly read?: Maybe<MediaFields_UpdatedAt_Read>;
  readonly update?: Maybe<MediaFields_UpdatedAt_Update>;
};

export type MediaFields_UpdatedAt_Create = {
  readonly __typename?: 'MediaFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Delete = {
  readonly __typename?: 'MediaFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Read = {
  readonly __typename?: 'MediaFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Update = {
  readonly __typename?: 'MediaFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url = {
  readonly __typename?: 'MediaFields_url';
  readonly create?: Maybe<MediaFields_Url_Create>;
  readonly delete?: Maybe<MediaFields_Url_Delete>;
  readonly read?: Maybe<MediaFields_Url_Read>;
  readonly update?: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  readonly __typename?: 'MediaFields_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Delete = {
  readonly __typename?: 'MediaFields_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Read = {
  readonly __typename?: 'MediaFields_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Update = {
  readonly __typename?: 'MediaFields_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width = {
  readonly __typename?: 'MediaFields_width';
  readonly create?: Maybe<MediaFields_Width_Create>;
  readonly delete?: Maybe<MediaFields_Width_Delete>;
  readonly read?: Maybe<MediaFields_Width_Read>;
  readonly update?: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  readonly __typename?: 'MediaFields_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Delete = {
  readonly __typename?: 'MediaFields_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Read = {
  readonly __typename?: 'MediaFields_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Update = {
  readonly __typename?: 'MediaFields_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaReadAccess = {
  readonly __typename?: 'MediaReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaReadDocAccess = {
  readonly __typename?: 'MediaReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateAccess = {
  readonly __typename?: 'MediaUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateDocAccess = {
  readonly __typename?: 'MediaUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Media_Sizes = {
  readonly __typename?: 'Media_Sizes';
  readonly card?: Maybe<Media_Sizes_Card>;
  readonly feature?: Maybe<Media_Sizes_Feature>;
  readonly hero?: Maybe<Media_Sizes_Hero>;
  readonly icon?: Maybe<Media_Sizes_Icon>;
  readonly thumbnail?: Maybe<Media_Sizes_Thumbnail>;
};

export type Media_Sizes_Card = {
  readonly __typename?: 'Media_Sizes_Card';
  readonly filename?: Maybe<Scalars['String']['output']>;
  readonly filesize?: Maybe<Scalars['Float']['output']>;
  readonly height?: Maybe<Scalars['Float']['output']>;
  readonly mimeType?: Maybe<Scalars['String']['output']>;
  readonly url?: Maybe<Scalars['String']['output']>;
  readonly width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Feature = {
  readonly __typename?: 'Media_Sizes_Feature';
  readonly filename?: Maybe<Scalars['String']['output']>;
  readonly filesize?: Maybe<Scalars['Float']['output']>;
  readonly height?: Maybe<Scalars['Float']['output']>;
  readonly mimeType?: Maybe<Scalars['String']['output']>;
  readonly url?: Maybe<Scalars['String']['output']>;
  readonly width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Hero = {
  readonly __typename?: 'Media_Sizes_Hero';
  readonly filename?: Maybe<Scalars['String']['output']>;
  readonly filesize?: Maybe<Scalars['Float']['output']>;
  readonly height?: Maybe<Scalars['Float']['output']>;
  readonly mimeType?: Maybe<Scalars['String']['output']>;
  readonly url?: Maybe<Scalars['String']['output']>;
  readonly width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Icon = {
  readonly __typename?: 'Media_Sizes_Icon';
  readonly filename?: Maybe<Scalars['String']['output']>;
  readonly filesize?: Maybe<Scalars['Float']['output']>;
  readonly height?: Maybe<Scalars['Float']['output']>;
  readonly mimeType?: Maybe<Scalars['String']['output']>;
  readonly url?: Maybe<Scalars['String']['output']>;
  readonly width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Thumbnail = {
  readonly __typename?: 'Media_Sizes_Thumbnail';
  readonly filename?: Maybe<Scalars['String']['output']>;
  readonly filesize?: Maybe<Scalars['Float']['output']>;
  readonly height?: Maybe<Scalars['Float']['output']>;
  readonly mimeType?: Maybe<Scalars['String']['output']>;
  readonly url?: Maybe<Scalars['String']['output']>;
  readonly width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Alt_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_BlurDataUrl_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Caption_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_CreatedAt_Operator = {
  readonly equals?: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly like?: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Filename_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Filesize_Operator = {
  readonly equals?: InputMaybe<Scalars['Float']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalX_Operator = {
  readonly equals?: InputMaybe<Scalars['Float']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalY_Operator = {
  readonly equals?: InputMaybe<Scalars['Float']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Height_Operator = {
  readonly equals?: InputMaybe<Scalars['Float']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Id_Operator = {
  readonly equals?: InputMaybe<Scalars['Int']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Int']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  readonly less_than?: InputMaybe<Scalars['Int']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Media_MimeType_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Card__Filename_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Card__Filesize_Operator = {
  readonly equals?: InputMaybe<Scalars['Float']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Card__Height_Operator = {
  readonly equals?: InputMaybe<Scalars['Float']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Card__MimeType_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Card__Url_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Card__Width_Operator = {
  readonly equals?: InputMaybe<Scalars['Float']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Feature__Filename_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Feature__Filesize_Operator = {
  readonly equals?: InputMaybe<Scalars['Float']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Feature__Height_Operator = {
  readonly equals?: InputMaybe<Scalars['Float']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Feature__MimeType_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Feature__Url_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Feature__Width_Operator = {
  readonly equals?: InputMaybe<Scalars['Float']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Hero__Filename_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Hero__Filesize_Operator = {
  readonly equals?: InputMaybe<Scalars['Float']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Hero__Height_Operator = {
  readonly equals?: InputMaybe<Scalars['Float']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Hero__MimeType_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Hero__Url_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Hero__Width_Operator = {
  readonly equals?: InputMaybe<Scalars['Float']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Icon__Filename_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Icon__Filesize_Operator = {
  readonly equals?: InputMaybe<Scalars['Float']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Icon__Height_Operator = {
  readonly equals?: InputMaybe<Scalars['Float']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Icon__MimeType_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Icon__Url_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Icon__Width_Operator = {
  readonly equals?: InputMaybe<Scalars['Float']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__Filename_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Filesize_Operator = {
  readonly equals?: InputMaybe<Scalars['Float']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__Height_Operator = {
  readonly equals?: InputMaybe<Scalars['Float']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__MimeType_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Url_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Width_Operator = {
  readonly equals?: InputMaybe<Scalars['Float']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_ThumbnailUrl_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_UpdatedAt_Operator = {
  readonly equals?: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly like?: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Url_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Where = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<Media_Where_And>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<Media_Where_Or>>>;
  readonly alt?: InputMaybe<Media_Alt_Operator>;
  readonly blurDataURL?: InputMaybe<Media_BlurDataUrl_Operator>;
  readonly caption?: InputMaybe<Media_Caption_Operator>;
  readonly createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  readonly filename?: InputMaybe<Media_Filename_Operator>;
  readonly filesize?: InputMaybe<Media_Filesize_Operator>;
  readonly focalX?: InputMaybe<Media_FocalX_Operator>;
  readonly focalY?: InputMaybe<Media_FocalY_Operator>;
  readonly height?: InputMaybe<Media_Height_Operator>;
  readonly id?: InputMaybe<Media_Id_Operator>;
  readonly mimeType?: InputMaybe<Media_MimeType_Operator>;
  readonly sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  readonly sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  readonly sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  readonly sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  readonly sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  readonly sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  readonly sizes__feature__filename?: InputMaybe<Media_Sizes__Feature__Filename_Operator>;
  readonly sizes__feature__filesize?: InputMaybe<Media_Sizes__Feature__Filesize_Operator>;
  readonly sizes__feature__height?: InputMaybe<Media_Sizes__Feature__Height_Operator>;
  readonly sizes__feature__mimeType?: InputMaybe<Media_Sizes__Feature__MimeType_Operator>;
  readonly sizes__feature__url?: InputMaybe<Media_Sizes__Feature__Url_Operator>;
  readonly sizes__feature__width?: InputMaybe<Media_Sizes__Feature__Width_Operator>;
  readonly sizes__hero__filename?: InputMaybe<Media_Sizes__Hero__Filename_Operator>;
  readonly sizes__hero__filesize?: InputMaybe<Media_Sizes__Hero__Filesize_Operator>;
  readonly sizes__hero__height?: InputMaybe<Media_Sizes__Hero__Height_Operator>;
  readonly sizes__hero__mimeType?: InputMaybe<Media_Sizes__Hero__MimeType_Operator>;
  readonly sizes__hero__url?: InputMaybe<Media_Sizes__Hero__Url_Operator>;
  readonly sizes__hero__width?: InputMaybe<Media_Sizes__Hero__Width_Operator>;
  readonly sizes__icon__filename?: InputMaybe<Media_Sizes__Icon__Filename_Operator>;
  readonly sizes__icon__filesize?: InputMaybe<Media_Sizes__Icon__Filesize_Operator>;
  readonly sizes__icon__height?: InputMaybe<Media_Sizes__Icon__Height_Operator>;
  readonly sizes__icon__mimeType?: InputMaybe<Media_Sizes__Icon__MimeType_Operator>;
  readonly sizes__icon__url?: InputMaybe<Media_Sizes__Icon__Url_Operator>;
  readonly sizes__icon__width?: InputMaybe<Media_Sizes__Icon__Width_Operator>;
  readonly sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  readonly sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  readonly sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  readonly sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  readonly sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  readonly sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  readonly thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  readonly updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  readonly url?: InputMaybe<Media_Url_Operator>;
  readonly width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<Media_Where_And>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<Media_Where_Or>>>;
  readonly alt?: InputMaybe<Media_Alt_Operator>;
  readonly blurDataURL?: InputMaybe<Media_BlurDataUrl_Operator>;
  readonly caption?: InputMaybe<Media_Caption_Operator>;
  readonly createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  readonly filename?: InputMaybe<Media_Filename_Operator>;
  readonly filesize?: InputMaybe<Media_Filesize_Operator>;
  readonly focalX?: InputMaybe<Media_FocalX_Operator>;
  readonly focalY?: InputMaybe<Media_FocalY_Operator>;
  readonly height?: InputMaybe<Media_Height_Operator>;
  readonly id?: InputMaybe<Media_Id_Operator>;
  readonly mimeType?: InputMaybe<Media_MimeType_Operator>;
  readonly sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  readonly sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  readonly sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  readonly sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  readonly sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  readonly sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  readonly sizes__feature__filename?: InputMaybe<Media_Sizes__Feature__Filename_Operator>;
  readonly sizes__feature__filesize?: InputMaybe<Media_Sizes__Feature__Filesize_Operator>;
  readonly sizes__feature__height?: InputMaybe<Media_Sizes__Feature__Height_Operator>;
  readonly sizes__feature__mimeType?: InputMaybe<Media_Sizes__Feature__MimeType_Operator>;
  readonly sizes__feature__url?: InputMaybe<Media_Sizes__Feature__Url_Operator>;
  readonly sizes__feature__width?: InputMaybe<Media_Sizes__Feature__Width_Operator>;
  readonly sizes__hero__filename?: InputMaybe<Media_Sizes__Hero__Filename_Operator>;
  readonly sizes__hero__filesize?: InputMaybe<Media_Sizes__Hero__Filesize_Operator>;
  readonly sizes__hero__height?: InputMaybe<Media_Sizes__Hero__Height_Operator>;
  readonly sizes__hero__mimeType?: InputMaybe<Media_Sizes__Hero__MimeType_Operator>;
  readonly sizes__hero__url?: InputMaybe<Media_Sizes__Hero__Url_Operator>;
  readonly sizes__hero__width?: InputMaybe<Media_Sizes__Hero__Width_Operator>;
  readonly sizes__icon__filename?: InputMaybe<Media_Sizes__Icon__Filename_Operator>;
  readonly sizes__icon__filesize?: InputMaybe<Media_Sizes__Icon__Filesize_Operator>;
  readonly sizes__icon__height?: InputMaybe<Media_Sizes__Icon__Height_Operator>;
  readonly sizes__icon__mimeType?: InputMaybe<Media_Sizes__Icon__MimeType_Operator>;
  readonly sizes__icon__url?: InputMaybe<Media_Sizes__Icon__Url_Operator>;
  readonly sizes__icon__width?: InputMaybe<Media_Sizes__Icon__Width_Operator>;
  readonly sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  readonly sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  readonly sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  readonly sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  readonly sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  readonly sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  readonly thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  readonly updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  readonly url?: InputMaybe<Media_Url_Operator>;
  readonly width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<Media_Where_And>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<Media_Where_Or>>>;
  readonly alt?: InputMaybe<Media_Alt_Operator>;
  readonly blurDataURL?: InputMaybe<Media_BlurDataUrl_Operator>;
  readonly caption?: InputMaybe<Media_Caption_Operator>;
  readonly createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  readonly filename?: InputMaybe<Media_Filename_Operator>;
  readonly filesize?: InputMaybe<Media_Filesize_Operator>;
  readonly focalX?: InputMaybe<Media_FocalX_Operator>;
  readonly focalY?: InputMaybe<Media_FocalY_Operator>;
  readonly height?: InputMaybe<Media_Height_Operator>;
  readonly id?: InputMaybe<Media_Id_Operator>;
  readonly mimeType?: InputMaybe<Media_MimeType_Operator>;
  readonly sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  readonly sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  readonly sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  readonly sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  readonly sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  readonly sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  readonly sizes__feature__filename?: InputMaybe<Media_Sizes__Feature__Filename_Operator>;
  readonly sizes__feature__filesize?: InputMaybe<Media_Sizes__Feature__Filesize_Operator>;
  readonly sizes__feature__height?: InputMaybe<Media_Sizes__Feature__Height_Operator>;
  readonly sizes__feature__mimeType?: InputMaybe<Media_Sizes__Feature__MimeType_Operator>;
  readonly sizes__feature__url?: InputMaybe<Media_Sizes__Feature__Url_Operator>;
  readonly sizes__feature__width?: InputMaybe<Media_Sizes__Feature__Width_Operator>;
  readonly sizes__hero__filename?: InputMaybe<Media_Sizes__Hero__Filename_Operator>;
  readonly sizes__hero__filesize?: InputMaybe<Media_Sizes__Hero__Filesize_Operator>;
  readonly sizes__hero__height?: InputMaybe<Media_Sizes__Hero__Height_Operator>;
  readonly sizes__hero__mimeType?: InputMaybe<Media_Sizes__Hero__MimeType_Operator>;
  readonly sizes__hero__url?: InputMaybe<Media_Sizes__Hero__Url_Operator>;
  readonly sizes__hero__width?: InputMaybe<Media_Sizes__Hero__Width_Operator>;
  readonly sizes__icon__filename?: InputMaybe<Media_Sizes__Icon__Filename_Operator>;
  readonly sizes__icon__filesize?: InputMaybe<Media_Sizes__Icon__Filesize_Operator>;
  readonly sizes__icon__height?: InputMaybe<Media_Sizes__Icon__Height_Operator>;
  readonly sizes__icon__mimeType?: InputMaybe<Media_Sizes__Icon__MimeType_Operator>;
  readonly sizes__icon__url?: InputMaybe<Media_Sizes__Icon__Url_Operator>;
  readonly sizes__icon__width?: InputMaybe<Media_Sizes__Icon__Width_Operator>;
  readonly sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  readonly sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  readonly sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  readonly sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  readonly sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  readonly sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  readonly thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  readonly updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  readonly url?: InputMaybe<Media_Url_Operator>;
  readonly width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
  readonly equals?: InputMaybe<Scalars['Float']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than?: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly createCaseStudy?: Maybe<CaseStudy>;
  readonly createContactForm?: Maybe<ContactForm>;
  readonly createExperience?: Maybe<Experience>;
  readonly createMedia?: Maybe<Media>;
  readonly createPayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  readonly createPayloadPreference?: Maybe<PayloadPreference>;
  readonly createTag?: Maybe<Tag>;
  readonly createUser?: Maybe<User>;
  readonly deleteCaseStudy?: Maybe<CaseStudy>;
  readonly deleteContactForm?: Maybe<ContactForm>;
  readonly deleteExperience?: Maybe<Experience>;
  readonly deleteMedia?: Maybe<Media>;
  readonly deletePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  readonly deletePayloadPreference?: Maybe<PayloadPreference>;
  readonly deleteTag?: Maybe<Tag>;
  readonly deleteUser?: Maybe<User>;
  readonly duplicateCaseStudy?: Maybe<CaseStudy>;
  readonly duplicateContactForm?: Maybe<ContactForm>;
  readonly duplicateExperience?: Maybe<Experience>;
  readonly duplicateMedia?: Maybe<Media>;
  readonly duplicatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  readonly duplicatePayloadPreference?: Maybe<PayloadPreference>;
  readonly duplicateTag?: Maybe<Tag>;
  readonly forgotPasswordUser: Scalars['Boolean']['output'];
  readonly loginUser?: Maybe<UsersLoginResult>;
  readonly logoutUser?: Maybe<Scalars['String']['output']>;
  readonly refreshTokenUser?: Maybe<UsersRefreshedUser>;
  readonly resetPasswordUser?: Maybe<UsersResetPassword>;
  readonly unlockUser: Scalars['Boolean']['output'];
  readonly updateCaseStudy?: Maybe<CaseStudy>;
  readonly updateContactForm?: Maybe<ContactForm>;
  readonly updateExperience?: Maybe<Experience>;
  readonly updateFeaturedCaseStudy?: Maybe<FeaturedCaseStudy>;
  readonly updateFeaturedExperience?: Maybe<FeaturedExperience>;
  readonly updateFooter?: Maybe<Footer>;
  readonly updateHero?: Maybe<Hero>;
  readonly updateJournal?: Maybe<Journal>;
  readonly updateMedia?: Maybe<Media>;
  readonly updatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  readonly updatePayloadPreference?: Maybe<PayloadPreference>;
  readonly updateSkill?: Maybe<Skill>;
  readonly updateTag?: Maybe<Tag>;
  readonly updateUser?: Maybe<User>;
  readonly updateWorkButton?: Maybe<WorkButton>;
  readonly verifyEmailUser?: Maybe<Scalars['Boolean']['output']>;
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
  readonly __typename?: 'PayloadLockedDocument';
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly document?: Maybe<PayloadLockedDocument_Document_Relationship>;
  readonly globalSlug?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['Int']['output'];
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly user: PayloadLockedDocument_User_Relationship;
};

export type PayloadLockedDocumentUpdate_DocumentRelationshipInput = {
  readonly relationTo?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo>;
  readonly value?: InputMaybe<Scalars['JSON']['input']>;
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
  readonly relationTo?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo>;
  readonly value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_Document = CaseStudy | ContactForm | Experience | Media | Tag | User;

export type PayloadLockedDocument_DocumentRelationshipInput = {
  readonly relationTo?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInputRelationTo>;
  readonly value?: InputMaybe<Scalars['JSON']['input']>;
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
  readonly __typename?: 'PayloadLockedDocument_Document_Relationship';
  readonly relationTo?: Maybe<PayloadLockedDocument_Document_RelationTo>;
  readonly value?: Maybe<PayloadLockedDocument_Document>;
};

export type PayloadLockedDocument_User = User;

export type PayloadLockedDocument_UserRelationshipInput = {
  readonly relationTo?: InputMaybe<PayloadLockedDocument_UserRelationshipInputRelationTo>;
  readonly value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadLockedDocument_User_RelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_User_Relationship = {
  readonly __typename?: 'PayloadLockedDocument_User_Relationship';
  readonly relationTo?: Maybe<PayloadLockedDocument_User_RelationTo>;
  readonly value?: Maybe<PayloadLockedDocument_User>;
};

export type PayloadLockedDocument_CreatedAt_Operator = {
  readonly equals?: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly like?: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadLockedDocument_Document_Relation = {
  readonly relationTo?: InputMaybe<PayloadLockedDocument_Document_Relation_RelationTo>;
  readonly value?: InputMaybe<Scalars['JSON']['input']>;
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
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadLockedDocument_Id_Operator = {
  readonly equals?: InputMaybe<Scalars['Int']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Int']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  readonly less_than?: InputMaybe<Scalars['Int']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type PayloadLockedDocument_UpdatedAt_Operator = {
  readonly equals?: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly like?: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadLockedDocument_User_Relation = {
  readonly relationTo?: InputMaybe<PayloadLockedDocument_User_Relation_RelationTo>;
  readonly value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_Where = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<PayloadLockedDocument_Where_And>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  readonly createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  readonly document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  readonly globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  readonly id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  readonly updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  readonly user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocument_Where_And = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<PayloadLockedDocument_Where_And>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  readonly createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  readonly document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  readonly globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  readonly id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  readonly updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  readonly user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocument_Where_Or = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<PayloadLockedDocument_Where_And>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  readonly createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  readonly document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  readonly globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  readonly id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  readonly updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  readonly user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocuments = {
  readonly __typename?: 'PayloadLockedDocuments';
  readonly docs: ReadonlyArray<PayloadLockedDocument>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPrevPage: Scalars['Boolean']['output'];
  readonly limit: Scalars['Int']['output'];
  readonly nextPage: Scalars['Int']['output'];
  readonly offset?: Maybe<Scalars['Int']['output']>;
  readonly page: Scalars['Int']['output'];
  readonly pagingCounter: Scalars['Int']['output'];
  readonly prevPage: Scalars['Int']['output'];
  readonly totalDocs: Scalars['Int']['output'];
  readonly totalPages: Scalars['Int']['output'];
};

export type PayloadLockedDocumentsCreateAccess = {
  readonly __typename?: 'PayloadLockedDocumentsCreateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsCreateDocAccess = {
  readonly __typename?: 'PayloadLockedDocumentsCreateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteAccess = {
  readonly __typename?: 'PayloadLockedDocumentsDeleteAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteDocAccess = {
  readonly __typename?: 'PayloadLockedDocumentsDeleteDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDocAccessFields = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields';
  readonly createdAt?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt>;
  readonly document?: Maybe<PayloadLockedDocumentsDocAccessFields_Document>;
  readonly globalSlug?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug>;
  readonly updatedAt?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt>;
  readonly user?: Maybe<PayloadLockedDocumentsDocAccessFields_User>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt';
  readonly create?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Create>;
  readonly delete?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete>;
  readonly read?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Read>;
  readonly update?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_document';
  readonly create?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Create>;
  readonly delete?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Delete>;
  readonly read?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Read>;
  readonly update?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_Document_Create = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Delete = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Read = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Update = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug';
  readonly create?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create>;
  readonly delete?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete>;
  readonly read?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read>;
  readonly update?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt';
  readonly create?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create>;
  readonly delete?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete>;
  readonly read?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read>;
  readonly update?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_user';
  readonly create?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Create>;
  readonly delete?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Delete>;
  readonly read?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Read>;
  readonly update?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_User_Create = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Delete = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Read = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Update = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields = {
  readonly __typename?: 'PayloadLockedDocumentsFields';
  readonly createdAt?: Maybe<PayloadLockedDocumentsFields_CreatedAt>;
  readonly document?: Maybe<PayloadLockedDocumentsFields_Document>;
  readonly globalSlug?: Maybe<PayloadLockedDocumentsFields_GlobalSlug>;
  readonly updatedAt?: Maybe<PayloadLockedDocumentsFields_UpdatedAt>;
  readonly user?: Maybe<PayloadLockedDocumentsFields_User>;
};

export type PayloadLockedDocumentsFields_CreatedAt = {
  readonly __typename?: 'PayloadLockedDocumentsFields_createdAt';
  readonly create?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Create>;
  readonly delete?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Delete>;
  readonly read?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Read>;
  readonly update?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsFields_CreatedAt_Create = {
  readonly __typename?: 'PayloadLockedDocumentsFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Delete = {
  readonly __typename?: 'PayloadLockedDocumentsFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Read = {
  readonly __typename?: 'PayloadLockedDocumentsFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Update = {
  readonly __typename?: 'PayloadLockedDocumentsFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document = {
  readonly __typename?: 'PayloadLockedDocumentsFields_document';
  readonly create?: Maybe<PayloadLockedDocumentsFields_Document_Create>;
  readonly delete?: Maybe<PayloadLockedDocumentsFields_Document_Delete>;
  readonly read?: Maybe<PayloadLockedDocumentsFields_Document_Read>;
  readonly update?: Maybe<PayloadLockedDocumentsFields_Document_Update>;
};

export type PayloadLockedDocumentsFields_Document_Create = {
  readonly __typename?: 'PayloadLockedDocumentsFields_document_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Delete = {
  readonly __typename?: 'PayloadLockedDocumentsFields_document_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Read = {
  readonly __typename?: 'PayloadLockedDocumentsFields_document_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Update = {
  readonly __typename?: 'PayloadLockedDocumentsFields_document_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug = {
  readonly __typename?: 'PayloadLockedDocumentsFields_globalSlug';
  readonly create?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Create>;
  readonly delete?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Delete>;
  readonly read?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Read>;
  readonly update?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsFields_GlobalSlug_Create = {
  readonly __typename?: 'PayloadLockedDocumentsFields_globalSlug_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Delete = {
  readonly __typename?: 'PayloadLockedDocumentsFields_globalSlug_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Read = {
  readonly __typename?: 'PayloadLockedDocumentsFields_globalSlug_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Update = {
  readonly __typename?: 'PayloadLockedDocumentsFields_globalSlug_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt = {
  readonly __typename?: 'PayloadLockedDocumentsFields_updatedAt';
  readonly create?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Create>;
  readonly delete?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Delete>;
  readonly read?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Read>;
  readonly update?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsFields_UpdatedAt_Create = {
  readonly __typename?: 'PayloadLockedDocumentsFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Delete = {
  readonly __typename?: 'PayloadLockedDocumentsFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Read = {
  readonly __typename?: 'PayloadLockedDocumentsFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Update = {
  readonly __typename?: 'PayloadLockedDocumentsFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User = {
  readonly __typename?: 'PayloadLockedDocumentsFields_user';
  readonly create?: Maybe<PayloadLockedDocumentsFields_User_Create>;
  readonly delete?: Maybe<PayloadLockedDocumentsFields_User_Delete>;
  readonly read?: Maybe<PayloadLockedDocumentsFields_User_Read>;
  readonly update?: Maybe<PayloadLockedDocumentsFields_User_Update>;
};

export type PayloadLockedDocumentsFields_User_Create = {
  readonly __typename?: 'PayloadLockedDocumentsFields_user_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Delete = {
  readonly __typename?: 'PayloadLockedDocumentsFields_user_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Read = {
  readonly __typename?: 'PayloadLockedDocumentsFields_user_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Update = {
  readonly __typename?: 'PayloadLockedDocumentsFields_user_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsReadAccess = {
  readonly __typename?: 'PayloadLockedDocumentsReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsReadDocAccess = {
  readonly __typename?: 'PayloadLockedDocumentsReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateAccess = {
  readonly __typename?: 'PayloadLockedDocumentsUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateDocAccess = {
  readonly __typename?: 'PayloadLockedDocumentsUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreference = {
  readonly __typename?: 'PayloadPreference';
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['Int']['output'];
  readonly key?: Maybe<Scalars['String']['output']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly user: PayloadPreference_User_Relationship;
  readonly value?: Maybe<Scalars['JSON']['output']>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  readonly relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  readonly value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadPreference_User = User;

export type PayloadPreference_UserRelationshipInput = {
  readonly relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  readonly value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadPreference_User_RelationTo {
  Users = 'users'
}

export type PayloadPreference_User_Relationship = {
  readonly __typename?: 'PayloadPreference_User_Relationship';
  readonly relationTo?: Maybe<PayloadPreference_User_RelationTo>;
  readonly value?: Maybe<PayloadPreference_User>;
};

export type PayloadPreference_CreatedAt_Operator = {
  readonly equals?: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly like?: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_Id_Operator = {
  readonly equals?: InputMaybe<Scalars['Int']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Int']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  readonly less_than?: InputMaybe<Scalars['Int']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type PayloadPreference_Key_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_UpdatedAt_Operator = {
  readonly equals?: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly like?: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_User_Relation = {
  readonly relationTo?: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
  readonly value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadPreference_Value_Operator = {
  readonly contains?: InputMaybe<Scalars['JSON']['input']>;
  readonly equals?: InputMaybe<Scalars['JSON']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly intersects?: InputMaybe<Scalars['JSON']['input']>;
  readonly like?: InputMaybe<Scalars['JSON']['input']>;
  readonly not_equals?: InputMaybe<Scalars['JSON']['input']>;
  readonly within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreference_Where = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<PayloadPreference_Where_And>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<PayloadPreference_Where_Or>>>;
  readonly createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  readonly id?: InputMaybe<PayloadPreference_Id_Operator>;
  readonly key?: InputMaybe<PayloadPreference_Key_Operator>;
  readonly updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  readonly user?: InputMaybe<PayloadPreference_User_Relation>;
  readonly value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_And = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<PayloadPreference_Where_And>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<PayloadPreference_Where_Or>>>;
  readonly createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  readonly id?: InputMaybe<PayloadPreference_Id_Operator>;
  readonly key?: InputMaybe<PayloadPreference_Key_Operator>;
  readonly updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  readonly user?: InputMaybe<PayloadPreference_User_Relation>;
  readonly value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_Or = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<PayloadPreference_Where_And>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<PayloadPreference_Where_Or>>>;
  readonly createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  readonly id?: InputMaybe<PayloadPreference_Id_Operator>;
  readonly key?: InputMaybe<PayloadPreference_Key_Operator>;
  readonly updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  readonly user?: InputMaybe<PayloadPreference_User_Relation>;
  readonly value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreferences = {
  readonly __typename?: 'PayloadPreferences';
  readonly docs: ReadonlyArray<PayloadPreference>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPrevPage: Scalars['Boolean']['output'];
  readonly limit: Scalars['Int']['output'];
  readonly nextPage: Scalars['Int']['output'];
  readonly offset?: Maybe<Scalars['Int']['output']>;
  readonly page: Scalars['Int']['output'];
  readonly pagingCounter: Scalars['Int']['output'];
  readonly prevPage: Scalars['Int']['output'];
  readonly totalDocs: Scalars['Int']['output'];
  readonly totalPages: Scalars['Int']['output'];
};

export type PayloadPreferencesCreateAccess = {
  readonly __typename?: 'PayloadPreferencesCreateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesCreateDocAccess = {
  readonly __typename?: 'PayloadPreferencesCreateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteAccess = {
  readonly __typename?: 'PayloadPreferencesDeleteAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  readonly __typename?: 'PayloadPreferencesDeleteDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDocAccessFields = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields';
  readonly createdAt?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
  readonly key?: Maybe<PayloadPreferencesDocAccessFields_Key>;
  readonly updatedAt?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
  readonly user?: Maybe<PayloadPreferencesDocAccessFields_User>;
  readonly value?: Maybe<PayloadPreferencesDocAccessFields_Value>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  readonly create?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
  readonly delete?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
  readonly read?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
  readonly update?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_key';
  readonly create?: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
  readonly delete?: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
  readonly read?: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
  readonly update?: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  readonly create?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
  readonly delete?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
  readonly read?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
  readonly update?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_user';
  readonly create?: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
  readonly delete?: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
  readonly read?: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
  readonly update?: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_value';
  readonly create?: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
  readonly delete?: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
  readonly read?: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
  readonly update?: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields = {
  readonly __typename?: 'PayloadPreferencesFields';
  readonly createdAt?: Maybe<PayloadPreferencesFields_CreatedAt>;
  readonly key?: Maybe<PayloadPreferencesFields_Key>;
  readonly updatedAt?: Maybe<PayloadPreferencesFields_UpdatedAt>;
  readonly user?: Maybe<PayloadPreferencesFields_User>;
  readonly value?: Maybe<PayloadPreferencesFields_Value>;
};

export type PayloadPreferencesFields_CreatedAt = {
  readonly __typename?: 'PayloadPreferencesFields_createdAt';
  readonly create?: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
  readonly delete?: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
  readonly read?: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
  readonly update?: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
  readonly __typename?: 'PayloadPreferencesFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  readonly __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  readonly __typename?: 'PayloadPreferencesFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  readonly __typename?: 'PayloadPreferencesFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key = {
  readonly __typename?: 'PayloadPreferencesFields_key';
  readonly create?: Maybe<PayloadPreferencesFields_Key_Create>;
  readonly delete?: Maybe<PayloadPreferencesFields_Key_Delete>;
  readonly read?: Maybe<PayloadPreferencesFields_Key_Read>;
  readonly update?: Maybe<PayloadPreferencesFields_Key_Update>;
};

export type PayloadPreferencesFields_Key_Create = {
  readonly __typename?: 'PayloadPreferencesFields_key_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Delete = {
  readonly __typename?: 'PayloadPreferencesFields_key_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Read = {
  readonly __typename?: 'PayloadPreferencesFields_key_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Update = {
  readonly __typename?: 'PayloadPreferencesFields_key_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt = {
  readonly __typename?: 'PayloadPreferencesFields_updatedAt';
  readonly create?: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
  readonly delete?: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
  readonly read?: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
  readonly update?: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
  readonly __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  readonly __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  readonly __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  readonly __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User = {
  readonly __typename?: 'PayloadPreferencesFields_user';
  readonly create?: Maybe<PayloadPreferencesFields_User_Create>;
  readonly delete?: Maybe<PayloadPreferencesFields_User_Delete>;
  readonly read?: Maybe<PayloadPreferencesFields_User_Read>;
  readonly update?: Maybe<PayloadPreferencesFields_User_Update>;
};

export type PayloadPreferencesFields_User_Create = {
  readonly __typename?: 'PayloadPreferencesFields_user_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Delete = {
  readonly __typename?: 'PayloadPreferencesFields_user_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Read = {
  readonly __typename?: 'PayloadPreferencesFields_user_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Update = {
  readonly __typename?: 'PayloadPreferencesFields_user_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value = {
  readonly __typename?: 'PayloadPreferencesFields_value';
  readonly create?: Maybe<PayloadPreferencesFields_Value_Create>;
  readonly delete?: Maybe<PayloadPreferencesFields_Value_Delete>;
  readonly read?: Maybe<PayloadPreferencesFields_Value_Read>;
  readonly update?: Maybe<PayloadPreferencesFields_Value_Update>;
};

export type PayloadPreferencesFields_Value_Create = {
  readonly __typename?: 'PayloadPreferencesFields_value_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Delete = {
  readonly __typename?: 'PayloadPreferencesFields_value_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Read = {
  readonly __typename?: 'PayloadPreferencesFields_value_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Update = {
  readonly __typename?: 'PayloadPreferencesFields_value_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesReadAccess = {
  readonly __typename?: 'PayloadPreferencesReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesReadDocAccess = {
  readonly __typename?: 'PayloadPreferencesReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateAccess = {
  readonly __typename?: 'PayloadPreferencesUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  readonly __typename?: 'PayloadPreferencesUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly Access?: Maybe<Access>;
  readonly CaseStudies?: Maybe<CaseStudies>;
  readonly CaseStudy?: Maybe<CaseStudy>;
  readonly ContactForm?: Maybe<ContactForm>;
  readonly ContactForms?: Maybe<ContactForms>;
  readonly Experience?: Maybe<Experience>;
  readonly Experiences?: Maybe<Experiences>;
  readonly FeaturedCaseStudy?: Maybe<FeaturedCaseStudy>;
  readonly FeaturedExperience?: Maybe<FeaturedExperience>;
  readonly Footer?: Maybe<Footer>;
  readonly Hero?: Maybe<Hero>;
  readonly Journal?: Maybe<Journal>;
  readonly Media?: Maybe<Media>;
  readonly PayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  readonly PayloadLockedDocuments?: Maybe<PayloadLockedDocuments>;
  readonly PayloadPreference?: Maybe<PayloadPreference>;
  readonly PayloadPreferences?: Maybe<PayloadPreferences>;
  readonly Skill?: Maybe<Skill>;
  readonly Tag?: Maybe<Tag>;
  readonly Tags?: Maybe<Tags>;
  readonly User?: Maybe<User>;
  readonly Users?: Maybe<Users>;
  readonly WorkButton?: Maybe<WorkButton>;
  readonly allMedia?: Maybe<AllMedia>;
  readonly countCaseStudies?: Maybe<CountCaseStudies>;
  readonly countContactForms?: Maybe<CountContactForms>;
  readonly countExperiences?: Maybe<CountExperiences>;
  readonly countPayloadLockedDocuments?: Maybe<CountPayloadLockedDocuments>;
  readonly countPayloadPreferences?: Maybe<CountPayloadPreferences>;
  readonly countTags?: Maybe<CountTags>;
  readonly countUsers?: Maybe<CountUsers>;
  readonly countallMedia?: Maybe<CountallMedia>;
  readonly docAccessCaseStudy?: Maybe<Case_StudiesDocAccess>;
  readonly docAccessContactForm?: Maybe<Contact_FormsDocAccess>;
  readonly docAccessExperience?: Maybe<ExperiencesDocAccess>;
  readonly docAccessFeaturedCaseStudy?: Maybe<Featured_Case_StudiesDocAccess>;
  readonly docAccessFeaturedExperience?: Maybe<Featured_ExperiencesDocAccess>;
  readonly docAccessFooter?: Maybe<FooterDocAccess>;
  readonly docAccessHero?: Maybe<HeroDocAccess>;
  readonly docAccessJournal?: Maybe<JournalDocAccess>;
  readonly docAccessMedia?: Maybe<MediaDocAccess>;
  readonly docAccessPayloadLockedDocument?: Maybe<Payload_Locked_DocumentsDocAccess>;
  readonly docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>;
  readonly docAccessSkill?: Maybe<SkillsDocAccess>;
  readonly docAccessTag?: Maybe<TagsDocAccess>;
  readonly docAccessUser?: Maybe<UsersDocAccess>;
  readonly docAccessWorkButton?: Maybe<Work_ButtonsDocAccess>;
  readonly initializedUser?: Maybe<Scalars['Boolean']['output']>;
  readonly meUser?: Maybe<UsersMe>;
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
  readonly __typename?: 'Skill';
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly skills: ReadonlyArray<Skill_Skills>;
  readonly subtitle?: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Skill_Skills = {
  readonly __typename?: 'Skill_Skills';
  readonly description?: Maybe<Scalars['JSON']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly subtitle?: Maybe<Scalars['String']['output']>;
};


export type Skill_SkillsDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type SkillsDocAccessFields = {
  readonly __typename?: 'SkillsDocAccessFields';
  readonly createdAt?: Maybe<SkillsDocAccessFields_CreatedAt>;
  readonly skills?: Maybe<SkillsDocAccessFields_Skills>;
  readonly subtitle?: Maybe<SkillsDocAccessFields_Subtitle>;
  readonly title?: Maybe<SkillsDocAccessFields_Title>;
  readonly updatedAt?: Maybe<SkillsDocAccessFields_UpdatedAt>;
};

export type SkillsDocAccessFields_CreatedAt = {
  readonly __typename?: 'SkillsDocAccessFields_createdAt';
  readonly create?: Maybe<SkillsDocAccessFields_CreatedAt_Create>;
  readonly delete?: Maybe<SkillsDocAccessFields_CreatedAt_Delete>;
  readonly read?: Maybe<SkillsDocAccessFields_CreatedAt_Read>;
  readonly update?: Maybe<SkillsDocAccessFields_CreatedAt_Update>;
};

export type SkillsDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'SkillsDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'SkillsDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'SkillsDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'SkillsDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills = {
  readonly __typename?: 'SkillsDocAccessFields_skills';
  readonly create?: Maybe<SkillsDocAccessFields_Skills_Create>;
  readonly delete?: Maybe<SkillsDocAccessFields_Skills_Delete>;
  readonly fields?: Maybe<SkillsDocAccessFields_Skills_Fields>;
  readonly read?: Maybe<SkillsDocAccessFields_Skills_Read>;
  readonly update?: Maybe<SkillsDocAccessFields_Skills_Update>;
};

export type SkillsDocAccessFields_Skills_Create = {
  readonly __typename?: 'SkillsDocAccessFields_skills_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Delete = {
  readonly __typename?: 'SkillsDocAccessFields_skills_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Fields = {
  readonly __typename?: 'SkillsDocAccessFields_skills_Fields';
  readonly description?: Maybe<SkillsDocAccessFields_Skills_Description>;
  readonly id?: Maybe<SkillsDocAccessFields_Skills_Id>;
  readonly name?: Maybe<SkillsDocAccessFields_Skills_Name>;
  readonly subtitle?: Maybe<SkillsDocAccessFields_Skills_Subtitle>;
};

export type SkillsDocAccessFields_Skills_Read = {
  readonly __typename?: 'SkillsDocAccessFields_skills_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Update = {
  readonly __typename?: 'SkillsDocAccessFields_skills_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Description = {
  readonly __typename?: 'SkillsDocAccessFields_skills_description';
  readonly create?: Maybe<SkillsDocAccessFields_Skills_Description_Create>;
  readonly delete?: Maybe<SkillsDocAccessFields_Skills_Description_Delete>;
  readonly read?: Maybe<SkillsDocAccessFields_Skills_Description_Read>;
  readonly update?: Maybe<SkillsDocAccessFields_Skills_Description_Update>;
};

export type SkillsDocAccessFields_Skills_Description_Create = {
  readonly __typename?: 'SkillsDocAccessFields_skills_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Description_Delete = {
  readonly __typename?: 'SkillsDocAccessFields_skills_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Description_Read = {
  readonly __typename?: 'SkillsDocAccessFields_skills_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Description_Update = {
  readonly __typename?: 'SkillsDocAccessFields_skills_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Id = {
  readonly __typename?: 'SkillsDocAccessFields_skills_id';
  readonly create?: Maybe<SkillsDocAccessFields_Skills_Id_Create>;
  readonly delete?: Maybe<SkillsDocAccessFields_Skills_Id_Delete>;
  readonly read?: Maybe<SkillsDocAccessFields_Skills_Id_Read>;
  readonly update?: Maybe<SkillsDocAccessFields_Skills_Id_Update>;
};

export type SkillsDocAccessFields_Skills_Id_Create = {
  readonly __typename?: 'SkillsDocAccessFields_skills_id_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Id_Delete = {
  readonly __typename?: 'SkillsDocAccessFields_skills_id_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Id_Read = {
  readonly __typename?: 'SkillsDocAccessFields_skills_id_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Id_Update = {
  readonly __typename?: 'SkillsDocAccessFields_skills_id_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Name = {
  readonly __typename?: 'SkillsDocAccessFields_skills_name';
  readonly create?: Maybe<SkillsDocAccessFields_Skills_Name_Create>;
  readonly delete?: Maybe<SkillsDocAccessFields_Skills_Name_Delete>;
  readonly read?: Maybe<SkillsDocAccessFields_Skills_Name_Read>;
  readonly update?: Maybe<SkillsDocAccessFields_Skills_Name_Update>;
};

export type SkillsDocAccessFields_Skills_Name_Create = {
  readonly __typename?: 'SkillsDocAccessFields_skills_name_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Name_Delete = {
  readonly __typename?: 'SkillsDocAccessFields_skills_name_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Name_Read = {
  readonly __typename?: 'SkillsDocAccessFields_skills_name_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Name_Update = {
  readonly __typename?: 'SkillsDocAccessFields_skills_name_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Subtitle = {
  readonly __typename?: 'SkillsDocAccessFields_skills_subtitle';
  readonly create?: Maybe<SkillsDocAccessFields_Skills_Subtitle_Create>;
  readonly delete?: Maybe<SkillsDocAccessFields_Skills_Subtitle_Delete>;
  readonly read?: Maybe<SkillsDocAccessFields_Skills_Subtitle_Read>;
  readonly update?: Maybe<SkillsDocAccessFields_Skills_Subtitle_Update>;
};

export type SkillsDocAccessFields_Skills_Subtitle_Create = {
  readonly __typename?: 'SkillsDocAccessFields_skills_subtitle_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Subtitle_Delete = {
  readonly __typename?: 'SkillsDocAccessFields_skills_subtitle_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Subtitle_Read = {
  readonly __typename?: 'SkillsDocAccessFields_skills_subtitle_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Skills_Subtitle_Update = {
  readonly __typename?: 'SkillsDocAccessFields_skills_subtitle_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Subtitle = {
  readonly __typename?: 'SkillsDocAccessFields_subtitle';
  readonly create?: Maybe<SkillsDocAccessFields_Subtitle_Create>;
  readonly delete?: Maybe<SkillsDocAccessFields_Subtitle_Delete>;
  readonly read?: Maybe<SkillsDocAccessFields_Subtitle_Read>;
  readonly update?: Maybe<SkillsDocAccessFields_Subtitle_Update>;
};

export type SkillsDocAccessFields_Subtitle_Create = {
  readonly __typename?: 'SkillsDocAccessFields_subtitle_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Subtitle_Delete = {
  readonly __typename?: 'SkillsDocAccessFields_subtitle_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Subtitle_Read = {
  readonly __typename?: 'SkillsDocAccessFields_subtitle_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Subtitle_Update = {
  readonly __typename?: 'SkillsDocAccessFields_subtitle_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Title = {
  readonly __typename?: 'SkillsDocAccessFields_title';
  readonly create?: Maybe<SkillsDocAccessFields_Title_Create>;
  readonly delete?: Maybe<SkillsDocAccessFields_Title_Delete>;
  readonly read?: Maybe<SkillsDocAccessFields_Title_Read>;
  readonly update?: Maybe<SkillsDocAccessFields_Title_Update>;
};

export type SkillsDocAccessFields_Title_Create = {
  readonly __typename?: 'SkillsDocAccessFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Title_Delete = {
  readonly __typename?: 'SkillsDocAccessFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Title_Read = {
  readonly __typename?: 'SkillsDocAccessFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Title_Update = {
  readonly __typename?: 'SkillsDocAccessFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_UpdatedAt = {
  readonly __typename?: 'SkillsDocAccessFields_updatedAt';
  readonly create?: Maybe<SkillsDocAccessFields_UpdatedAt_Create>;
  readonly delete?: Maybe<SkillsDocAccessFields_UpdatedAt_Delete>;
  readonly read?: Maybe<SkillsDocAccessFields_UpdatedAt_Read>;
  readonly update?: Maybe<SkillsDocAccessFields_UpdatedAt_Update>;
};

export type SkillsDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'SkillsDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'SkillsDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'SkillsDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'SkillsDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields = {
  readonly __typename?: 'SkillsFields';
  readonly createdAt?: Maybe<SkillsFields_CreatedAt>;
  readonly skills?: Maybe<SkillsFields_Skills>;
  readonly subtitle?: Maybe<SkillsFields_Subtitle>;
  readonly title?: Maybe<SkillsFields_Title>;
  readonly updatedAt?: Maybe<SkillsFields_UpdatedAt>;
};

export type SkillsFields_CreatedAt = {
  readonly __typename?: 'SkillsFields_createdAt';
  readonly create?: Maybe<SkillsFields_CreatedAt_Create>;
  readonly delete?: Maybe<SkillsFields_CreatedAt_Delete>;
  readonly read?: Maybe<SkillsFields_CreatedAt_Read>;
  readonly update?: Maybe<SkillsFields_CreatedAt_Update>;
};

export type SkillsFields_CreatedAt_Create = {
  readonly __typename?: 'SkillsFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_CreatedAt_Delete = {
  readonly __typename?: 'SkillsFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_CreatedAt_Read = {
  readonly __typename?: 'SkillsFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_CreatedAt_Update = {
  readonly __typename?: 'SkillsFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills = {
  readonly __typename?: 'SkillsFields_skills';
  readonly create?: Maybe<SkillsFields_Skills_Create>;
  readonly delete?: Maybe<SkillsFields_Skills_Delete>;
  readonly fields?: Maybe<SkillsFields_Skills_Fields>;
  readonly read?: Maybe<SkillsFields_Skills_Read>;
  readonly update?: Maybe<SkillsFields_Skills_Update>;
};

export type SkillsFields_Skills_Create = {
  readonly __typename?: 'SkillsFields_skills_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Delete = {
  readonly __typename?: 'SkillsFields_skills_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Fields = {
  readonly __typename?: 'SkillsFields_skills_Fields';
  readonly description?: Maybe<SkillsFields_Skills_Description>;
  readonly id?: Maybe<SkillsFields_Skills_Id>;
  readonly name?: Maybe<SkillsFields_Skills_Name>;
  readonly subtitle?: Maybe<SkillsFields_Skills_Subtitle>;
};

export type SkillsFields_Skills_Read = {
  readonly __typename?: 'SkillsFields_skills_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Update = {
  readonly __typename?: 'SkillsFields_skills_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Description = {
  readonly __typename?: 'SkillsFields_skills_description';
  readonly create?: Maybe<SkillsFields_Skills_Description_Create>;
  readonly delete?: Maybe<SkillsFields_Skills_Description_Delete>;
  readonly read?: Maybe<SkillsFields_Skills_Description_Read>;
  readonly update?: Maybe<SkillsFields_Skills_Description_Update>;
};

export type SkillsFields_Skills_Description_Create = {
  readonly __typename?: 'SkillsFields_skills_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Description_Delete = {
  readonly __typename?: 'SkillsFields_skills_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Description_Read = {
  readonly __typename?: 'SkillsFields_skills_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Description_Update = {
  readonly __typename?: 'SkillsFields_skills_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Id = {
  readonly __typename?: 'SkillsFields_skills_id';
  readonly create?: Maybe<SkillsFields_Skills_Id_Create>;
  readonly delete?: Maybe<SkillsFields_Skills_Id_Delete>;
  readonly read?: Maybe<SkillsFields_Skills_Id_Read>;
  readonly update?: Maybe<SkillsFields_Skills_Id_Update>;
};

export type SkillsFields_Skills_Id_Create = {
  readonly __typename?: 'SkillsFields_skills_id_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Id_Delete = {
  readonly __typename?: 'SkillsFields_skills_id_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Id_Read = {
  readonly __typename?: 'SkillsFields_skills_id_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Id_Update = {
  readonly __typename?: 'SkillsFields_skills_id_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Name = {
  readonly __typename?: 'SkillsFields_skills_name';
  readonly create?: Maybe<SkillsFields_Skills_Name_Create>;
  readonly delete?: Maybe<SkillsFields_Skills_Name_Delete>;
  readonly read?: Maybe<SkillsFields_Skills_Name_Read>;
  readonly update?: Maybe<SkillsFields_Skills_Name_Update>;
};

export type SkillsFields_Skills_Name_Create = {
  readonly __typename?: 'SkillsFields_skills_name_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Name_Delete = {
  readonly __typename?: 'SkillsFields_skills_name_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Name_Read = {
  readonly __typename?: 'SkillsFields_skills_name_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Name_Update = {
  readonly __typename?: 'SkillsFields_skills_name_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Subtitle = {
  readonly __typename?: 'SkillsFields_skills_subtitle';
  readonly create?: Maybe<SkillsFields_Skills_Subtitle_Create>;
  readonly delete?: Maybe<SkillsFields_Skills_Subtitle_Delete>;
  readonly read?: Maybe<SkillsFields_Skills_Subtitle_Read>;
  readonly update?: Maybe<SkillsFields_Skills_Subtitle_Update>;
};

export type SkillsFields_Skills_Subtitle_Create = {
  readonly __typename?: 'SkillsFields_skills_subtitle_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Subtitle_Delete = {
  readonly __typename?: 'SkillsFields_skills_subtitle_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Subtitle_Read = {
  readonly __typename?: 'SkillsFields_skills_subtitle_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Skills_Subtitle_Update = {
  readonly __typename?: 'SkillsFields_skills_subtitle_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Subtitle = {
  readonly __typename?: 'SkillsFields_subtitle';
  readonly create?: Maybe<SkillsFields_Subtitle_Create>;
  readonly delete?: Maybe<SkillsFields_Subtitle_Delete>;
  readonly read?: Maybe<SkillsFields_Subtitle_Read>;
  readonly update?: Maybe<SkillsFields_Subtitle_Update>;
};

export type SkillsFields_Subtitle_Create = {
  readonly __typename?: 'SkillsFields_subtitle_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Subtitle_Delete = {
  readonly __typename?: 'SkillsFields_subtitle_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Subtitle_Read = {
  readonly __typename?: 'SkillsFields_subtitle_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Subtitle_Update = {
  readonly __typename?: 'SkillsFields_subtitle_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Title = {
  readonly __typename?: 'SkillsFields_title';
  readonly create?: Maybe<SkillsFields_Title_Create>;
  readonly delete?: Maybe<SkillsFields_Title_Delete>;
  readonly read?: Maybe<SkillsFields_Title_Read>;
  readonly update?: Maybe<SkillsFields_Title_Update>;
};

export type SkillsFields_Title_Create = {
  readonly __typename?: 'SkillsFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Title_Delete = {
  readonly __typename?: 'SkillsFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Title_Read = {
  readonly __typename?: 'SkillsFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Title_Update = {
  readonly __typename?: 'SkillsFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_UpdatedAt = {
  readonly __typename?: 'SkillsFields_updatedAt';
  readonly create?: Maybe<SkillsFields_UpdatedAt_Create>;
  readonly delete?: Maybe<SkillsFields_UpdatedAt_Delete>;
  readonly read?: Maybe<SkillsFields_UpdatedAt_Read>;
  readonly update?: Maybe<SkillsFields_UpdatedAt_Update>;
};

export type SkillsFields_UpdatedAt_Create = {
  readonly __typename?: 'SkillsFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_UpdatedAt_Delete = {
  readonly __typename?: 'SkillsFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_UpdatedAt_Read = {
  readonly __typename?: 'SkillsFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsFields_UpdatedAt_Update = {
  readonly __typename?: 'SkillsFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SkillsReadAccess = {
  readonly __typename?: 'SkillsReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SkillsReadDocAccess = {
  readonly __typename?: 'SkillsReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SkillsUpdateAccess = {
  readonly __typename?: 'SkillsUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SkillsUpdateDocAccess = {
  readonly __typename?: 'SkillsUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Tag = {
  readonly __typename?: 'Tag';
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['Int']['output'];
  readonly name: Scalars['String']['output'];
  readonly slug: Scalars['String']['output'];
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Tag_CreatedAt_Operator = {
  readonly equals?: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly like?: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Tag_Description_Operator = {
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Tag_Id_Operator = {
  readonly equals?: InputMaybe<Scalars['Int']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Int']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  readonly less_than?: InputMaybe<Scalars['Int']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Tag_Name_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Tag_Slug_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
  readonly not_equals?: InputMaybe<Scalars['String']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Tag_UpdatedAt_Operator = {
  readonly equals?: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly like?: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Tag_Where = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<Tag_Where_And>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<Tag_Where_Or>>>;
  readonly createdAt?: InputMaybe<Tag_CreatedAt_Operator>;
  readonly description?: InputMaybe<Tag_Description_Operator>;
  readonly id?: InputMaybe<Tag_Id_Operator>;
  readonly name?: InputMaybe<Tag_Name_Operator>;
  readonly slug?: InputMaybe<Tag_Slug_Operator>;
  readonly updatedAt?: InputMaybe<Tag_UpdatedAt_Operator>;
};

export type Tag_Where_And = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<Tag_Where_And>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<Tag_Where_Or>>>;
  readonly createdAt?: InputMaybe<Tag_CreatedAt_Operator>;
  readonly description?: InputMaybe<Tag_Description_Operator>;
  readonly id?: InputMaybe<Tag_Id_Operator>;
  readonly name?: InputMaybe<Tag_Name_Operator>;
  readonly slug?: InputMaybe<Tag_Slug_Operator>;
  readonly updatedAt?: InputMaybe<Tag_UpdatedAt_Operator>;
};

export type Tag_Where_Or = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<Tag_Where_And>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<Tag_Where_Or>>>;
  readonly createdAt?: InputMaybe<Tag_CreatedAt_Operator>;
  readonly description?: InputMaybe<Tag_Description_Operator>;
  readonly id?: InputMaybe<Tag_Id_Operator>;
  readonly name?: InputMaybe<Tag_Name_Operator>;
  readonly slug?: InputMaybe<Tag_Slug_Operator>;
  readonly updatedAt?: InputMaybe<Tag_UpdatedAt_Operator>;
};

export type Tags = {
  readonly __typename?: 'Tags';
  readonly docs: ReadonlyArray<Tag>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPrevPage: Scalars['Boolean']['output'];
  readonly limit: Scalars['Int']['output'];
  readonly nextPage: Scalars['Int']['output'];
  readonly offset?: Maybe<Scalars['Int']['output']>;
  readonly page: Scalars['Int']['output'];
  readonly pagingCounter: Scalars['Int']['output'];
  readonly prevPage: Scalars['Int']['output'];
  readonly totalDocs: Scalars['Int']['output'];
  readonly totalPages: Scalars['Int']['output'];
};

export type TagsCreateAccess = {
  readonly __typename?: 'TagsCreateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsCreateDocAccess = {
  readonly __typename?: 'TagsCreateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsDeleteAccess = {
  readonly __typename?: 'TagsDeleteAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsDeleteDocAccess = {
  readonly __typename?: 'TagsDeleteDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsDocAccessFields = {
  readonly __typename?: 'TagsDocAccessFields';
  readonly createdAt?: Maybe<TagsDocAccessFields_CreatedAt>;
  readonly description?: Maybe<TagsDocAccessFields_Description>;
  readonly name?: Maybe<TagsDocAccessFields_Name>;
  readonly slug?: Maybe<TagsDocAccessFields_Slug>;
  readonly updatedAt?: Maybe<TagsDocAccessFields_UpdatedAt>;
};

export type TagsDocAccessFields_CreatedAt = {
  readonly __typename?: 'TagsDocAccessFields_createdAt';
  readonly create?: Maybe<TagsDocAccessFields_CreatedAt_Create>;
  readonly delete?: Maybe<TagsDocAccessFields_CreatedAt_Delete>;
  readonly read?: Maybe<TagsDocAccessFields_CreatedAt_Read>;
  readonly update?: Maybe<TagsDocAccessFields_CreatedAt_Update>;
};

export type TagsDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'TagsDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'TagsDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'TagsDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'TagsDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Description = {
  readonly __typename?: 'TagsDocAccessFields_description';
  readonly create?: Maybe<TagsDocAccessFields_Description_Create>;
  readonly delete?: Maybe<TagsDocAccessFields_Description_Delete>;
  readonly read?: Maybe<TagsDocAccessFields_Description_Read>;
  readonly update?: Maybe<TagsDocAccessFields_Description_Update>;
};

export type TagsDocAccessFields_Description_Create = {
  readonly __typename?: 'TagsDocAccessFields_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Description_Delete = {
  readonly __typename?: 'TagsDocAccessFields_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Description_Read = {
  readonly __typename?: 'TagsDocAccessFields_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Description_Update = {
  readonly __typename?: 'TagsDocAccessFields_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Name = {
  readonly __typename?: 'TagsDocAccessFields_name';
  readonly create?: Maybe<TagsDocAccessFields_Name_Create>;
  readonly delete?: Maybe<TagsDocAccessFields_Name_Delete>;
  readonly read?: Maybe<TagsDocAccessFields_Name_Read>;
  readonly update?: Maybe<TagsDocAccessFields_Name_Update>;
};

export type TagsDocAccessFields_Name_Create = {
  readonly __typename?: 'TagsDocAccessFields_name_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Name_Delete = {
  readonly __typename?: 'TagsDocAccessFields_name_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Name_Read = {
  readonly __typename?: 'TagsDocAccessFields_name_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Name_Update = {
  readonly __typename?: 'TagsDocAccessFields_name_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Slug = {
  readonly __typename?: 'TagsDocAccessFields_slug';
  readonly create?: Maybe<TagsDocAccessFields_Slug_Create>;
  readonly delete?: Maybe<TagsDocAccessFields_Slug_Delete>;
  readonly read?: Maybe<TagsDocAccessFields_Slug_Read>;
  readonly update?: Maybe<TagsDocAccessFields_Slug_Update>;
};

export type TagsDocAccessFields_Slug_Create = {
  readonly __typename?: 'TagsDocAccessFields_slug_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Slug_Delete = {
  readonly __typename?: 'TagsDocAccessFields_slug_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Slug_Read = {
  readonly __typename?: 'TagsDocAccessFields_slug_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Slug_Update = {
  readonly __typename?: 'TagsDocAccessFields_slug_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_UpdatedAt = {
  readonly __typename?: 'TagsDocAccessFields_updatedAt';
  readonly create?: Maybe<TagsDocAccessFields_UpdatedAt_Create>;
  readonly delete?: Maybe<TagsDocAccessFields_UpdatedAt_Delete>;
  readonly read?: Maybe<TagsDocAccessFields_UpdatedAt_Read>;
  readonly update?: Maybe<TagsDocAccessFields_UpdatedAt_Update>;
};

export type TagsDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'TagsDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'TagsDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'TagsDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'TagsDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsFields = {
  readonly __typename?: 'TagsFields';
  readonly createdAt?: Maybe<TagsFields_CreatedAt>;
  readonly description?: Maybe<TagsFields_Description>;
  readonly name?: Maybe<TagsFields_Name>;
  readonly slug?: Maybe<TagsFields_Slug>;
  readonly updatedAt?: Maybe<TagsFields_UpdatedAt>;
};

export type TagsFields_CreatedAt = {
  readonly __typename?: 'TagsFields_createdAt';
  readonly create?: Maybe<TagsFields_CreatedAt_Create>;
  readonly delete?: Maybe<TagsFields_CreatedAt_Delete>;
  readonly read?: Maybe<TagsFields_CreatedAt_Read>;
  readonly update?: Maybe<TagsFields_CreatedAt_Update>;
};

export type TagsFields_CreatedAt_Create = {
  readonly __typename?: 'TagsFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsFields_CreatedAt_Delete = {
  readonly __typename?: 'TagsFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsFields_CreatedAt_Read = {
  readonly __typename?: 'TagsFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsFields_CreatedAt_Update = {
  readonly __typename?: 'TagsFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsFields_Description = {
  readonly __typename?: 'TagsFields_description';
  readonly create?: Maybe<TagsFields_Description_Create>;
  readonly delete?: Maybe<TagsFields_Description_Delete>;
  readonly read?: Maybe<TagsFields_Description_Read>;
  readonly update?: Maybe<TagsFields_Description_Update>;
};

export type TagsFields_Description_Create = {
  readonly __typename?: 'TagsFields_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsFields_Description_Delete = {
  readonly __typename?: 'TagsFields_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsFields_Description_Read = {
  readonly __typename?: 'TagsFields_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsFields_Description_Update = {
  readonly __typename?: 'TagsFields_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsFields_Name = {
  readonly __typename?: 'TagsFields_name';
  readonly create?: Maybe<TagsFields_Name_Create>;
  readonly delete?: Maybe<TagsFields_Name_Delete>;
  readonly read?: Maybe<TagsFields_Name_Read>;
  readonly update?: Maybe<TagsFields_Name_Update>;
};

export type TagsFields_Name_Create = {
  readonly __typename?: 'TagsFields_name_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsFields_Name_Delete = {
  readonly __typename?: 'TagsFields_name_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsFields_Name_Read = {
  readonly __typename?: 'TagsFields_name_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsFields_Name_Update = {
  readonly __typename?: 'TagsFields_name_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsFields_Slug = {
  readonly __typename?: 'TagsFields_slug';
  readonly create?: Maybe<TagsFields_Slug_Create>;
  readonly delete?: Maybe<TagsFields_Slug_Delete>;
  readonly read?: Maybe<TagsFields_Slug_Read>;
  readonly update?: Maybe<TagsFields_Slug_Update>;
};

export type TagsFields_Slug_Create = {
  readonly __typename?: 'TagsFields_slug_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsFields_Slug_Delete = {
  readonly __typename?: 'TagsFields_slug_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsFields_Slug_Read = {
  readonly __typename?: 'TagsFields_slug_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsFields_Slug_Update = {
  readonly __typename?: 'TagsFields_slug_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsFields_UpdatedAt = {
  readonly __typename?: 'TagsFields_updatedAt';
  readonly create?: Maybe<TagsFields_UpdatedAt_Create>;
  readonly delete?: Maybe<TagsFields_UpdatedAt_Delete>;
  readonly read?: Maybe<TagsFields_UpdatedAt_Read>;
  readonly update?: Maybe<TagsFields_UpdatedAt_Update>;
};

export type TagsFields_UpdatedAt_Create = {
  readonly __typename?: 'TagsFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsFields_UpdatedAt_Delete = {
  readonly __typename?: 'TagsFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsFields_UpdatedAt_Read = {
  readonly __typename?: 'TagsFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsFields_UpdatedAt_Update = {
  readonly __typename?: 'TagsFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TagsReadAccess = {
  readonly __typename?: 'TagsReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsReadDocAccess = {
  readonly __typename?: 'TagsReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsUpdateAccess = {
  readonly __typename?: 'TagsUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsUpdateDocAccess = {
  readonly __typename?: 'TagsUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type User = {
  readonly __typename?: 'User';
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly email: Scalars['EmailAddress']['output'];
  readonly hash?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['Int']['output'];
  readonly lockUntil?: Maybe<Scalars['DateTime']['output']>;
  readonly loginAttempts?: Maybe<Scalars['Float']['output']>;
  readonly resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>;
  readonly resetPasswordToken?: Maybe<Scalars['String']['output']>;
  readonly salt?: Maybe<Scalars['String']['output']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type User_CreatedAt_Operator = {
  readonly equals?: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly like?: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Email_Operator = {
  readonly all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['EmailAddress']['input']>>>;
  readonly contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  readonly equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['EmailAddress']['input']>>>;
  readonly like?: InputMaybe<Scalars['EmailAddress']['input']>;
  readonly not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  readonly not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type User_Id_Operator = {
  readonly equals?: InputMaybe<Scalars['Int']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['Int']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  readonly less_than?: InputMaybe<Scalars['Int']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  readonly not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type User_UpdatedAt_Operator = {
  readonly equals?: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than?: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  readonly like?: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Where = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<User_Where_And>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<User_Where_Or>>>;
  readonly createdAt?: InputMaybe<User_CreatedAt_Operator>;
  readonly email?: InputMaybe<User_Email_Operator>;
  readonly id?: InputMaybe<User_Id_Operator>;
  readonly updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<User_Where_And>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<User_Where_Or>>>;
  readonly createdAt?: InputMaybe<User_CreatedAt_Operator>;
  readonly email?: InputMaybe<User_Email_Operator>;
  readonly id?: InputMaybe<User_Id_Operator>;
  readonly updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<User_Where_And>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<User_Where_Or>>>;
  readonly createdAt?: InputMaybe<User_CreatedAt_Operator>;
  readonly email?: InputMaybe<User_Email_Operator>;
  readonly id?: InputMaybe<User_Id_Operator>;
  readonly updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  readonly __typename?: 'Users';
  readonly docs: ReadonlyArray<User>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPrevPage: Scalars['Boolean']['output'];
  readonly limit: Scalars['Int']['output'];
  readonly nextPage: Scalars['Int']['output'];
  readonly offset?: Maybe<Scalars['Int']['output']>;
  readonly page: Scalars['Int']['output'];
  readonly pagingCounter: Scalars['Int']['output'];
  readonly prevPage: Scalars['Int']['output'];
  readonly totalDocs: Scalars['Int']['output'];
  readonly totalPages: Scalars['Int']['output'];
};

export type UsersCreateAccess = {
  readonly __typename?: 'UsersCreateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersCreateDocAccess = {
  readonly __typename?: 'UsersCreateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteAccess = {
  readonly __typename?: 'UsersDeleteAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteDocAccess = {
  readonly __typename?: 'UsersDeleteDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDocAccessFields = {
  readonly __typename?: 'UsersDocAccessFields';
  readonly createdAt?: Maybe<UsersDocAccessFields_CreatedAt>;
  readonly email?: Maybe<UsersDocAccessFields_Email>;
  readonly updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>;
};

export type UsersDocAccessFields_CreatedAt = {
  readonly __typename?: 'UsersDocAccessFields_createdAt';
  readonly create?: Maybe<UsersDocAccessFields_CreatedAt_Create>;
  readonly delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
  readonly read?: Maybe<UsersDocAccessFields_CreatedAt_Read>;
  readonly update?: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'UsersDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'UsersDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'UsersDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'UsersDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email = {
  readonly __typename?: 'UsersDocAccessFields_email';
  readonly create?: Maybe<UsersDocAccessFields_Email_Create>;
  readonly delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  readonly read?: Maybe<UsersDocAccessFields_Email_Read>;
  readonly update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  readonly __typename?: 'UsersDocAccessFields_email_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Delete = {
  readonly __typename?: 'UsersDocAccessFields_email_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Read = {
  readonly __typename?: 'UsersDocAccessFields_email_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Update = {
  readonly __typename?: 'UsersDocAccessFields_email_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt = {
  readonly __typename?: 'UsersDocAccessFields_updatedAt';
  readonly create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
  readonly delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
  readonly read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
  readonly update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'UsersDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'UsersDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'UsersDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields = {
  readonly __typename?: 'UsersFields';
  readonly createdAt?: Maybe<UsersFields_CreatedAt>;
  readonly email?: Maybe<UsersFields_Email>;
  readonly updatedAt?: Maybe<UsersFields_UpdatedAt>;
};

export type UsersFields_CreatedAt = {
  readonly __typename?: 'UsersFields_createdAt';
  readonly create?: Maybe<UsersFields_CreatedAt_Create>;
  readonly delete?: Maybe<UsersFields_CreatedAt_Delete>;
  readonly read?: Maybe<UsersFields_CreatedAt_Read>;
  readonly update?: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
  readonly __typename?: 'UsersFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Delete = {
  readonly __typename?: 'UsersFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Read = {
  readonly __typename?: 'UsersFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Update = {
  readonly __typename?: 'UsersFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email = {
  readonly __typename?: 'UsersFields_email';
  readonly create?: Maybe<UsersFields_Email_Create>;
  readonly delete?: Maybe<UsersFields_Email_Delete>;
  readonly read?: Maybe<UsersFields_Email_Read>;
  readonly update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  readonly __typename?: 'UsersFields_email_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Delete = {
  readonly __typename?: 'UsersFields_email_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Read = {
  readonly __typename?: 'UsersFields_email_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Update = {
  readonly __typename?: 'UsersFields_email_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt = {
  readonly __typename?: 'UsersFields_updatedAt';
  readonly create?: Maybe<UsersFields_UpdatedAt_Create>;
  readonly delete?: Maybe<UsersFields_UpdatedAt_Delete>;
  readonly read?: Maybe<UsersFields_UpdatedAt_Read>;
  readonly update?: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
  readonly __typename?: 'UsersFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Delete = {
  readonly __typename?: 'UsersFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Read = {
  readonly __typename?: 'UsersFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Update = {
  readonly __typename?: 'UsersFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersReadAccess = {
  readonly __typename?: 'UsersReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadDocAccess = {
  readonly __typename?: 'UsersReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockAccess = {
  readonly __typename?: 'UsersUnlockAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockDocAccess = {
  readonly __typename?: 'UsersUnlockDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateAccess = {
  readonly __typename?: 'UsersUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateDocAccess = {
  readonly __typename?: 'UsersUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type WorkButton = {
  readonly __typename?: 'WorkButton';
  readonly buttons: ReadonlyArray<WorkButton_Buttons>;
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type WorkButton_Buttons = {
  readonly __typename?: 'WorkButton_Buttons';
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly text?: Maybe<Scalars['String']['output']>;
  readonly url?: Maybe<Scalars['String']['output']>;
};

export type WorkButtonsDocAccessFields = {
  readonly __typename?: 'WorkButtonsDocAccessFields';
  readonly buttons?: Maybe<WorkButtonsDocAccessFields_Buttons>;
  readonly createdAt?: Maybe<WorkButtonsDocAccessFields_CreatedAt>;
  readonly updatedAt?: Maybe<WorkButtonsDocAccessFields_UpdatedAt>;
};

export type WorkButtonsDocAccessFields_Buttons = {
  readonly __typename?: 'WorkButtonsDocAccessFields_buttons';
  readonly create?: Maybe<WorkButtonsDocAccessFields_Buttons_Create>;
  readonly delete?: Maybe<WorkButtonsDocAccessFields_Buttons_Delete>;
  readonly fields?: Maybe<WorkButtonsDocAccessFields_Buttons_Fields>;
  readonly read?: Maybe<WorkButtonsDocAccessFields_Buttons_Read>;
  readonly update?: Maybe<WorkButtonsDocAccessFields_Buttons_Update>;
};

export type WorkButtonsDocAccessFields_Buttons_Create = {
  readonly __typename?: 'WorkButtonsDocAccessFields_buttons_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Delete = {
  readonly __typename?: 'WorkButtonsDocAccessFields_buttons_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Fields = {
  readonly __typename?: 'WorkButtonsDocAccessFields_buttons_Fields';
  readonly id?: Maybe<WorkButtonsDocAccessFields_Buttons_Id>;
  readonly text?: Maybe<WorkButtonsDocAccessFields_Buttons_Text>;
  readonly url?: Maybe<WorkButtonsDocAccessFields_Buttons_Url>;
};

export type WorkButtonsDocAccessFields_Buttons_Read = {
  readonly __typename?: 'WorkButtonsDocAccessFields_buttons_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Update = {
  readonly __typename?: 'WorkButtonsDocAccessFields_buttons_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Id = {
  readonly __typename?: 'WorkButtonsDocAccessFields_buttons_id';
  readonly create?: Maybe<WorkButtonsDocAccessFields_Buttons_Id_Create>;
  readonly delete?: Maybe<WorkButtonsDocAccessFields_Buttons_Id_Delete>;
  readonly read?: Maybe<WorkButtonsDocAccessFields_Buttons_Id_Read>;
  readonly update?: Maybe<WorkButtonsDocAccessFields_Buttons_Id_Update>;
};

export type WorkButtonsDocAccessFields_Buttons_Id_Create = {
  readonly __typename?: 'WorkButtonsDocAccessFields_buttons_id_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Id_Delete = {
  readonly __typename?: 'WorkButtonsDocAccessFields_buttons_id_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Id_Read = {
  readonly __typename?: 'WorkButtonsDocAccessFields_buttons_id_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Id_Update = {
  readonly __typename?: 'WorkButtonsDocAccessFields_buttons_id_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Text = {
  readonly __typename?: 'WorkButtonsDocAccessFields_buttons_text';
  readonly create?: Maybe<WorkButtonsDocAccessFields_Buttons_Text_Create>;
  readonly delete?: Maybe<WorkButtonsDocAccessFields_Buttons_Text_Delete>;
  readonly read?: Maybe<WorkButtonsDocAccessFields_Buttons_Text_Read>;
  readonly update?: Maybe<WorkButtonsDocAccessFields_Buttons_Text_Update>;
};

export type WorkButtonsDocAccessFields_Buttons_Text_Create = {
  readonly __typename?: 'WorkButtonsDocAccessFields_buttons_text_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Text_Delete = {
  readonly __typename?: 'WorkButtonsDocAccessFields_buttons_text_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Text_Read = {
  readonly __typename?: 'WorkButtonsDocAccessFields_buttons_text_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Text_Update = {
  readonly __typename?: 'WorkButtonsDocAccessFields_buttons_text_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Url = {
  readonly __typename?: 'WorkButtonsDocAccessFields_buttons_url';
  readonly create?: Maybe<WorkButtonsDocAccessFields_Buttons_Url_Create>;
  readonly delete?: Maybe<WorkButtonsDocAccessFields_Buttons_Url_Delete>;
  readonly read?: Maybe<WorkButtonsDocAccessFields_Buttons_Url_Read>;
  readonly update?: Maybe<WorkButtonsDocAccessFields_Buttons_Url_Update>;
};

export type WorkButtonsDocAccessFields_Buttons_Url_Create = {
  readonly __typename?: 'WorkButtonsDocAccessFields_buttons_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Url_Delete = {
  readonly __typename?: 'WorkButtonsDocAccessFields_buttons_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Url_Read = {
  readonly __typename?: 'WorkButtonsDocAccessFields_buttons_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_Buttons_Url_Update = {
  readonly __typename?: 'WorkButtonsDocAccessFields_buttons_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_CreatedAt = {
  readonly __typename?: 'WorkButtonsDocAccessFields_createdAt';
  readonly create?: Maybe<WorkButtonsDocAccessFields_CreatedAt_Create>;
  readonly delete?: Maybe<WorkButtonsDocAccessFields_CreatedAt_Delete>;
  readonly read?: Maybe<WorkButtonsDocAccessFields_CreatedAt_Read>;
  readonly update?: Maybe<WorkButtonsDocAccessFields_CreatedAt_Update>;
};

export type WorkButtonsDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'WorkButtonsDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'WorkButtonsDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'WorkButtonsDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'WorkButtonsDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_UpdatedAt = {
  readonly __typename?: 'WorkButtonsDocAccessFields_updatedAt';
  readonly create?: Maybe<WorkButtonsDocAccessFields_UpdatedAt_Create>;
  readonly delete?: Maybe<WorkButtonsDocAccessFields_UpdatedAt_Delete>;
  readonly read?: Maybe<WorkButtonsDocAccessFields_UpdatedAt_Read>;
  readonly update?: Maybe<WorkButtonsDocAccessFields_UpdatedAt_Update>;
};

export type WorkButtonsDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'WorkButtonsDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'WorkButtonsDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'WorkButtonsDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'WorkButtonsDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields = {
  readonly __typename?: 'WorkButtonsFields';
  readonly buttons?: Maybe<WorkButtonsFields_Buttons>;
  readonly createdAt?: Maybe<WorkButtonsFields_CreatedAt>;
  readonly updatedAt?: Maybe<WorkButtonsFields_UpdatedAt>;
};

export type WorkButtonsFields_Buttons = {
  readonly __typename?: 'WorkButtonsFields_buttons';
  readonly create?: Maybe<WorkButtonsFields_Buttons_Create>;
  readonly delete?: Maybe<WorkButtonsFields_Buttons_Delete>;
  readonly fields?: Maybe<WorkButtonsFields_Buttons_Fields>;
  readonly read?: Maybe<WorkButtonsFields_Buttons_Read>;
  readonly update?: Maybe<WorkButtonsFields_Buttons_Update>;
};

export type WorkButtonsFields_Buttons_Create = {
  readonly __typename?: 'WorkButtonsFields_buttons_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Delete = {
  readonly __typename?: 'WorkButtonsFields_buttons_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Fields = {
  readonly __typename?: 'WorkButtonsFields_buttons_Fields';
  readonly id?: Maybe<WorkButtonsFields_Buttons_Id>;
  readonly text?: Maybe<WorkButtonsFields_Buttons_Text>;
  readonly url?: Maybe<WorkButtonsFields_Buttons_Url>;
};

export type WorkButtonsFields_Buttons_Read = {
  readonly __typename?: 'WorkButtonsFields_buttons_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Update = {
  readonly __typename?: 'WorkButtonsFields_buttons_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Id = {
  readonly __typename?: 'WorkButtonsFields_buttons_id';
  readonly create?: Maybe<WorkButtonsFields_Buttons_Id_Create>;
  readonly delete?: Maybe<WorkButtonsFields_Buttons_Id_Delete>;
  readonly read?: Maybe<WorkButtonsFields_Buttons_Id_Read>;
  readonly update?: Maybe<WorkButtonsFields_Buttons_Id_Update>;
};

export type WorkButtonsFields_Buttons_Id_Create = {
  readonly __typename?: 'WorkButtonsFields_buttons_id_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Id_Delete = {
  readonly __typename?: 'WorkButtonsFields_buttons_id_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Id_Read = {
  readonly __typename?: 'WorkButtonsFields_buttons_id_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Id_Update = {
  readonly __typename?: 'WorkButtonsFields_buttons_id_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Text = {
  readonly __typename?: 'WorkButtonsFields_buttons_text';
  readonly create?: Maybe<WorkButtonsFields_Buttons_Text_Create>;
  readonly delete?: Maybe<WorkButtonsFields_Buttons_Text_Delete>;
  readonly read?: Maybe<WorkButtonsFields_Buttons_Text_Read>;
  readonly update?: Maybe<WorkButtonsFields_Buttons_Text_Update>;
};

export type WorkButtonsFields_Buttons_Text_Create = {
  readonly __typename?: 'WorkButtonsFields_buttons_text_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Text_Delete = {
  readonly __typename?: 'WorkButtonsFields_buttons_text_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Text_Read = {
  readonly __typename?: 'WorkButtonsFields_buttons_text_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Text_Update = {
  readonly __typename?: 'WorkButtonsFields_buttons_text_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Url = {
  readonly __typename?: 'WorkButtonsFields_buttons_url';
  readonly create?: Maybe<WorkButtonsFields_Buttons_Url_Create>;
  readonly delete?: Maybe<WorkButtonsFields_Buttons_Url_Delete>;
  readonly read?: Maybe<WorkButtonsFields_Buttons_Url_Read>;
  readonly update?: Maybe<WorkButtonsFields_Buttons_Url_Update>;
};

export type WorkButtonsFields_Buttons_Url_Create = {
  readonly __typename?: 'WorkButtonsFields_buttons_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Url_Delete = {
  readonly __typename?: 'WorkButtonsFields_buttons_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Url_Read = {
  readonly __typename?: 'WorkButtonsFields_buttons_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_Buttons_Url_Update = {
  readonly __typename?: 'WorkButtonsFields_buttons_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_CreatedAt = {
  readonly __typename?: 'WorkButtonsFields_createdAt';
  readonly create?: Maybe<WorkButtonsFields_CreatedAt_Create>;
  readonly delete?: Maybe<WorkButtonsFields_CreatedAt_Delete>;
  readonly read?: Maybe<WorkButtonsFields_CreatedAt_Read>;
  readonly update?: Maybe<WorkButtonsFields_CreatedAt_Update>;
};

export type WorkButtonsFields_CreatedAt_Create = {
  readonly __typename?: 'WorkButtonsFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_CreatedAt_Delete = {
  readonly __typename?: 'WorkButtonsFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_CreatedAt_Read = {
  readonly __typename?: 'WorkButtonsFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_CreatedAt_Update = {
  readonly __typename?: 'WorkButtonsFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_UpdatedAt = {
  readonly __typename?: 'WorkButtonsFields_updatedAt';
  readonly create?: Maybe<WorkButtonsFields_UpdatedAt_Create>;
  readonly delete?: Maybe<WorkButtonsFields_UpdatedAt_Delete>;
  readonly read?: Maybe<WorkButtonsFields_UpdatedAt_Read>;
  readonly update?: Maybe<WorkButtonsFields_UpdatedAt_Update>;
};

export type WorkButtonsFields_UpdatedAt_Create = {
  readonly __typename?: 'WorkButtonsFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_UpdatedAt_Delete = {
  readonly __typename?: 'WorkButtonsFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_UpdatedAt_Read = {
  readonly __typename?: 'WorkButtonsFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsFields_UpdatedAt_Update = {
  readonly __typename?: 'WorkButtonsFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type WorkButtonsReadAccess = {
  readonly __typename?: 'WorkButtonsReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type WorkButtonsReadDocAccess = {
  readonly __typename?: 'WorkButtonsReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type WorkButtonsUpdateAccess = {
  readonly __typename?: 'WorkButtonsUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type WorkButtonsUpdateDocAccess = {
  readonly __typename?: 'WorkButtonsUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AllMedia = {
  readonly __typename?: 'allMedia';
  readonly docs: ReadonlyArray<Media>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPrevPage: Scalars['Boolean']['output'];
  readonly limit: Scalars['Int']['output'];
  readonly nextPage: Scalars['Int']['output'];
  readonly offset?: Maybe<Scalars['Int']['output']>;
  readonly page: Scalars['Int']['output'];
  readonly pagingCounter: Scalars['Int']['output'];
  readonly prevPage: Scalars['Int']['output'];
  readonly totalDocs: Scalars['Int']['output'];
  readonly totalPages: Scalars['Int']['output'];
};

export type Case_StudiesAccess = {
  readonly __typename?: 'case_studiesAccess';
  readonly create?: Maybe<CaseStudiesCreateAccess>;
  readonly delete?: Maybe<CaseStudiesDeleteAccess>;
  readonly fields?: Maybe<CaseStudiesFields>;
  readonly read?: Maybe<CaseStudiesReadAccess>;
  readonly update?: Maybe<CaseStudiesUpdateAccess>;
};

export type Case_StudiesDocAccess = {
  readonly __typename?: 'case_studiesDocAccess';
  readonly create?: Maybe<CaseStudiesCreateDocAccess>;
  readonly delete?: Maybe<CaseStudiesDeleteDocAccess>;
  readonly fields?: Maybe<CaseStudiesDocAccessFields>;
  readonly read?: Maybe<CaseStudiesReadDocAccess>;
  readonly update?: Maybe<CaseStudiesUpdateDocAccess>;
};

export type Contact_FormsAccess = {
  readonly __typename?: 'contact_formsAccess';
  readonly create?: Maybe<ContactFormsCreateAccess>;
  readonly delete?: Maybe<ContactFormsDeleteAccess>;
  readonly fields?: Maybe<ContactFormsFields>;
  readonly read?: Maybe<ContactFormsReadAccess>;
  readonly update?: Maybe<ContactFormsUpdateAccess>;
};

export type Contact_FormsDocAccess = {
  readonly __typename?: 'contact_formsDocAccess';
  readonly create?: Maybe<ContactFormsCreateDocAccess>;
  readonly delete?: Maybe<ContactFormsDeleteDocAccess>;
  readonly fields?: Maybe<ContactFormsDocAccessFields>;
  readonly read?: Maybe<ContactFormsReadDocAccess>;
  readonly update?: Maybe<ContactFormsUpdateDocAccess>;
};

export type CountCaseStudies = {
  readonly __typename?: 'countCaseStudies';
  readonly totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountContactForms = {
  readonly __typename?: 'countContactForms';
  readonly totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountExperiences = {
  readonly __typename?: 'countExperiences';
  readonly totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadLockedDocuments = {
  readonly __typename?: 'countPayloadLockedDocuments';
  readonly totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadPreferences = {
  readonly __typename?: 'countPayloadPreferences';
  readonly totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountTags = {
  readonly __typename?: 'countTags';
  readonly totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountUsers = {
  readonly __typename?: 'countUsers';
  readonly totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountallMedia = {
  readonly __typename?: 'countallMedia';
  readonly totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type ExperiencesAccess = {
  readonly __typename?: 'experiencesAccess';
  readonly create?: Maybe<ExperiencesCreateAccess>;
  readonly delete?: Maybe<ExperiencesDeleteAccess>;
  readonly fields?: Maybe<ExperiencesFields>;
  readonly read?: Maybe<ExperiencesReadAccess>;
  readonly update?: Maybe<ExperiencesUpdateAccess>;
};

export type ExperiencesDocAccess = {
  readonly __typename?: 'experiencesDocAccess';
  readonly create?: Maybe<ExperiencesCreateDocAccess>;
  readonly delete?: Maybe<ExperiencesDeleteDocAccess>;
  readonly fields?: Maybe<ExperiencesDocAccessFields>;
  readonly read?: Maybe<ExperiencesReadDocAccess>;
  readonly update?: Maybe<ExperiencesUpdateDocAccess>;
};

export type Featured_Case_StudiesAccess = {
  readonly __typename?: 'featured_case_studiesAccess';
  readonly fields?: Maybe<FeaturedCaseStudiesFields>;
  readonly read?: Maybe<FeaturedCaseStudiesReadAccess>;
  readonly update?: Maybe<FeaturedCaseStudiesUpdateAccess>;
};

export type Featured_Case_StudiesDocAccess = {
  readonly __typename?: 'featured_case_studiesDocAccess';
  readonly fields?: Maybe<FeaturedCaseStudiesDocAccessFields>;
  readonly read?: Maybe<FeaturedCaseStudiesReadDocAccess>;
  readonly update?: Maybe<FeaturedCaseStudiesUpdateDocAccess>;
};

export type Featured_ExperiencesAccess = {
  readonly __typename?: 'featured_experiencesAccess';
  readonly fields?: Maybe<FeaturedExperiencesFields>;
  readonly read?: Maybe<FeaturedExperiencesReadAccess>;
  readonly update?: Maybe<FeaturedExperiencesUpdateAccess>;
};

export type Featured_ExperiencesDocAccess = {
  readonly __typename?: 'featured_experiencesDocAccess';
  readonly fields?: Maybe<FeaturedExperiencesDocAccessFields>;
  readonly read?: Maybe<FeaturedExperiencesReadDocAccess>;
  readonly update?: Maybe<FeaturedExperiencesUpdateDocAccess>;
};

export type FooterAccess = {
  readonly __typename?: 'footerAccess';
  readonly fields?: Maybe<FooterFields>;
  readonly read?: Maybe<FooterReadAccess>;
  readonly update?: Maybe<FooterUpdateAccess>;
};

export type FooterDocAccess = {
  readonly __typename?: 'footerDocAccess';
  readonly fields?: Maybe<FooterDocAccessFields>;
  readonly read?: Maybe<FooterReadDocAccess>;
  readonly update?: Maybe<FooterUpdateDocAccess>;
};

export type HeroAccess = {
  readonly __typename?: 'heroAccess';
  readonly fields?: Maybe<HeroFields>;
  readonly read?: Maybe<HeroReadAccess>;
  readonly update?: Maybe<HeroUpdateAccess>;
};

export type HeroDocAccess = {
  readonly __typename?: 'heroDocAccess';
  readonly fields?: Maybe<HeroDocAccessFields>;
  readonly read?: Maybe<HeroReadDocAccess>;
  readonly update?: Maybe<HeroUpdateDocAccess>;
};

export type JournalAccess = {
  readonly __typename?: 'journalAccess';
  readonly fields?: Maybe<JournalFields>;
  readonly read?: Maybe<JournalReadAccess>;
  readonly update?: Maybe<JournalUpdateAccess>;
};

export type JournalDocAccess = {
  readonly __typename?: 'journalDocAccess';
  readonly fields?: Maybe<JournalDocAccessFields>;
  readonly read?: Maybe<JournalReadDocAccess>;
  readonly update?: Maybe<JournalUpdateDocAccess>;
};

export type MediaAccess = {
  readonly __typename?: 'mediaAccess';
  readonly create?: Maybe<MediaCreateAccess>;
  readonly delete?: Maybe<MediaDeleteAccess>;
  readonly fields?: Maybe<MediaFields>;
  readonly read?: Maybe<MediaReadAccess>;
  readonly update?: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
  readonly __typename?: 'mediaDocAccess';
  readonly create?: Maybe<MediaCreateDocAccess>;
  readonly delete?: Maybe<MediaDeleteDocAccess>;
  readonly fields?: Maybe<MediaDocAccessFields>;
  readonly read?: Maybe<MediaReadDocAccess>;
  readonly update?: Maybe<MediaUpdateDocAccess>;
};

export type MutationCaseStudyInput = {
  readonly content: Scalars['JSON']['input'];
  readonly createdAt?: InputMaybe<Scalars['String']['input']>;
  readonly experience?: InputMaybe<Scalars['Int']['input']>;
  readonly featured?: InputMaybe<Scalars['Boolean']['input']>;
  readonly illustration?: InputMaybe<Scalars['Int']['input']>;
  readonly links?: InputMaybe<ReadonlyArray<InputMaybe<MutationCaseStudy_LinksInput>>>;
  readonly meta?: InputMaybe<MutationCaseStudy_MetaInput>;
  readonly publishedAt?: InputMaybe<Scalars['String']['input']>;
  readonly slug?: InputMaybe<Scalars['String']['input']>;
  readonly summary: Scalars['JSON']['input'];
  readonly tags?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly title: Scalars['String']['input'];
  readonly updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCaseStudyUpdateInput = {
  readonly content?: InputMaybe<Scalars['JSON']['input']>;
  readonly createdAt?: InputMaybe<Scalars['String']['input']>;
  readonly experience?: InputMaybe<Scalars['Int']['input']>;
  readonly featured?: InputMaybe<Scalars['Boolean']['input']>;
  readonly illustration?: InputMaybe<Scalars['Int']['input']>;
  readonly links?: InputMaybe<ReadonlyArray<InputMaybe<MutationCaseStudyUpdate_LinksInput>>>;
  readonly meta?: InputMaybe<MutationCaseStudyUpdate_MetaInput>;
  readonly publishedAt?: InputMaybe<Scalars['String']['input']>;
  readonly slug?: InputMaybe<Scalars['String']['input']>;
  readonly summary?: InputMaybe<Scalars['JSON']['input']>;
  readonly tags?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCaseStudyUpdate_LinksInput = {
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly label: Scalars['String']['input'];
  readonly url: Scalars['String']['input'];
};

export type MutationCaseStudyUpdate_MetaInput = {
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly image?: InputMaybe<Scalars['Int']['input']>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCaseStudy_LinksInput = {
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly label: Scalars['String']['input'];
  readonly url: Scalars['String']['input'];
};

export type MutationCaseStudy_MetaInput = {
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly image?: InputMaybe<Scalars['Int']['input']>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationContactFormInput = {
  readonly createdAt?: InputMaybe<Scalars['String']['input']>;
  readonly email: Scalars['String']['input'];
  readonly message: Scalars['String']['input'];
  readonly name: Scalars['String']['input'];
  readonly status?: InputMaybe<ContactForm_Status_MutationInput>;
  readonly subject: Scalars['String']['input'];
  readonly updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationContactFormUpdateInput = {
  readonly createdAt?: InputMaybe<Scalars['String']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly message?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly status?: InputMaybe<ContactFormUpdate_Status_MutationInput>;
  readonly subject?: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationExperienceInput = {
  readonly coverImage?: InputMaybe<Scalars['Int']['input']>;
  readonly createdAt?: InputMaybe<Scalars['String']['input']>;
  readonly endDate?: InputMaybe<Scalars['String']['input']>;
  readonly meta?: InputMaybe<MutationExperience_MetaInput>;
  readonly role?: InputMaybe<Scalars['String']['input']>;
  readonly slug?: InputMaybe<Scalars['String']['input']>;
  readonly startDate?: InputMaybe<Scalars['String']['input']>;
  readonly summary: Scalars['JSON']['input'];
  readonly tags?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly thumbnailImage?: InputMaybe<Scalars['Int']['input']>;
  readonly title: Scalars['String']['input'];
  readonly updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationExperienceUpdateInput = {
  readonly coverImage?: InputMaybe<Scalars['Int']['input']>;
  readonly createdAt?: InputMaybe<Scalars['String']['input']>;
  readonly endDate?: InputMaybe<Scalars['String']['input']>;
  readonly meta?: InputMaybe<MutationExperienceUpdate_MetaInput>;
  readonly role?: InputMaybe<Scalars['String']['input']>;
  readonly slug?: InputMaybe<Scalars['String']['input']>;
  readonly startDate?: InputMaybe<Scalars['String']['input']>;
  readonly summary?: InputMaybe<Scalars['JSON']['input']>;
  readonly tags?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly thumbnailImage?: InputMaybe<Scalars['Int']['input']>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationExperienceUpdate_MetaInput = {
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly image?: InputMaybe<Scalars['Int']['input']>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationExperience_MetaInput = {
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly image?: InputMaybe<Scalars['Int']['input']>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFeaturedCaseStudyInput = {
  readonly caseStudies?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly createdAt?: InputMaybe<Scalars['String']['input']>;
  readonly description: Scalars['String']['input'];
  readonly subtitle?: InputMaybe<Scalars['String']['input']>;
  readonly title: Scalars['String']['input'];
  readonly updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFeaturedExperienceInput = {
  readonly createdAt?: InputMaybe<Scalars['String']['input']>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly experiences?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly subtitle: Scalars['String']['input'];
  readonly title: Scalars['String']['input'];
  readonly updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFooterInput = {
  readonly bottomText: Scalars['String']['input'];
  readonly buttonText: Scalars['String']['input'];
  readonly createdAt?: InputMaybe<Scalars['String']['input']>;
  readonly description: Scalars['String']['input'];
  readonly title1: Scalars['String']['input'];
  readonly title2: Scalars['String']['input'];
  readonly updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHeroInput = {
  readonly createdAt?: InputMaybe<Scalars['String']['input']>;
  readonly description: Scalars['JSON']['input'];
  readonly meta?: InputMaybe<MutationHero_MetaInput>;
  readonly name: Scalars['String']['input'];
  readonly taglines?: InputMaybe<ReadonlyArray<MutationHero_TaglinesInput>>;
  readonly title: Scalars['String']['input'];
  readonly updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHero_MetaInput = {
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly image?: InputMaybe<Scalars['Int']['input']>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHero_TaglinesInput = {
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly text: Scalars['String']['input'];
};

export type MutationJournalInput = {
  readonly createdAt?: InputMaybe<Scalars['String']['input']>;
  readonly description: Scalars['String']['input'];
  readonly meta?: InputMaybe<MutationJournal_MetaInput>;
  readonly subtitle?: InputMaybe<Scalars['String']['input']>;
  readonly title: Scalars['String']['input'];
  readonly updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationJournal_MetaInput = {
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly image?: InputMaybe<Scalars['Int']['input']>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationMediaInput = {
  readonly alt: Scalars['String']['input'];
  readonly blurDataURL?: InputMaybe<Scalars['String']['input']>;
  readonly caption?: InputMaybe<Scalars['String']['input']>;
  readonly createdAt?: InputMaybe<Scalars['String']['input']>;
  readonly filename?: InputMaybe<Scalars['String']['input']>;
  readonly filesize?: InputMaybe<Scalars['Float']['input']>;
  readonly focalX?: InputMaybe<Scalars['Float']['input']>;
  readonly focalY?: InputMaybe<Scalars['Float']['input']>;
  readonly height?: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType?: InputMaybe<Scalars['String']['input']>;
  readonly sizes?: InputMaybe<MutationMedia_SizesInput>;
  readonly thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt?: InputMaybe<Scalars['String']['input']>;
  readonly url?: InputMaybe<Scalars['String']['input']>;
  readonly width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdateInput = {
  readonly alt?: InputMaybe<Scalars['String']['input']>;
  readonly blurDataURL?: InputMaybe<Scalars['String']['input']>;
  readonly caption?: InputMaybe<Scalars['String']['input']>;
  readonly createdAt?: InputMaybe<Scalars['String']['input']>;
  readonly filename?: InputMaybe<Scalars['String']['input']>;
  readonly filesize?: InputMaybe<Scalars['Float']['input']>;
  readonly focalX?: InputMaybe<Scalars['Float']['input']>;
  readonly focalY?: InputMaybe<Scalars['Float']['input']>;
  readonly height?: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType?: InputMaybe<Scalars['String']['input']>;
  readonly sizes?: InputMaybe<MutationMediaUpdate_SizesInput>;
  readonly thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt?: InputMaybe<Scalars['String']['input']>;
  readonly url?: InputMaybe<Scalars['String']['input']>;
  readonly width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_SizesInput = {
  readonly card?: InputMaybe<MutationMediaUpdate_Sizes_CardInput>;
  readonly feature?: InputMaybe<MutationMediaUpdate_Sizes_FeatureInput>;
  readonly hero?: InputMaybe<MutationMediaUpdate_Sizes_HeroInput>;
  readonly icon?: InputMaybe<MutationMediaUpdate_Sizes_IconInput>;
  readonly thumbnail?: InputMaybe<MutationMediaUpdate_Sizes_ThumbnailInput>;
};

export type MutationMediaUpdate_Sizes_CardInput = {
  readonly filename?: InputMaybe<Scalars['String']['input']>;
  readonly filesize?: InputMaybe<Scalars['Float']['input']>;
  readonly height?: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType?: InputMaybe<Scalars['String']['input']>;
  readonly url?: InputMaybe<Scalars['String']['input']>;
  readonly width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_FeatureInput = {
  readonly filename?: InputMaybe<Scalars['String']['input']>;
  readonly filesize?: InputMaybe<Scalars['Float']['input']>;
  readonly height?: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType?: InputMaybe<Scalars['String']['input']>;
  readonly url?: InputMaybe<Scalars['String']['input']>;
  readonly width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_HeroInput = {
  readonly filename?: InputMaybe<Scalars['String']['input']>;
  readonly filesize?: InputMaybe<Scalars['Float']['input']>;
  readonly height?: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType?: InputMaybe<Scalars['String']['input']>;
  readonly url?: InputMaybe<Scalars['String']['input']>;
  readonly width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_IconInput = {
  readonly filename?: InputMaybe<Scalars['String']['input']>;
  readonly filesize?: InputMaybe<Scalars['Float']['input']>;
  readonly height?: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType?: InputMaybe<Scalars['String']['input']>;
  readonly url?: InputMaybe<Scalars['String']['input']>;
  readonly width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_ThumbnailInput = {
  readonly filename?: InputMaybe<Scalars['String']['input']>;
  readonly filesize?: InputMaybe<Scalars['Float']['input']>;
  readonly height?: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType?: InputMaybe<Scalars['String']['input']>;
  readonly url?: InputMaybe<Scalars['String']['input']>;
  readonly width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_SizesInput = {
  readonly card?: InputMaybe<MutationMedia_Sizes_CardInput>;
  readonly feature?: InputMaybe<MutationMedia_Sizes_FeatureInput>;
  readonly hero?: InputMaybe<MutationMedia_Sizes_HeroInput>;
  readonly icon?: InputMaybe<MutationMedia_Sizes_IconInput>;
  readonly thumbnail?: InputMaybe<MutationMedia_Sizes_ThumbnailInput>;
};

export type MutationMedia_Sizes_CardInput = {
  readonly filename?: InputMaybe<Scalars['String']['input']>;
  readonly filesize?: InputMaybe<Scalars['Float']['input']>;
  readonly height?: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType?: InputMaybe<Scalars['String']['input']>;
  readonly url?: InputMaybe<Scalars['String']['input']>;
  readonly width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_FeatureInput = {
  readonly filename?: InputMaybe<Scalars['String']['input']>;
  readonly filesize?: InputMaybe<Scalars['Float']['input']>;
  readonly height?: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType?: InputMaybe<Scalars['String']['input']>;
  readonly url?: InputMaybe<Scalars['String']['input']>;
  readonly width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_HeroInput = {
  readonly filename?: InputMaybe<Scalars['String']['input']>;
  readonly filesize?: InputMaybe<Scalars['Float']['input']>;
  readonly height?: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType?: InputMaybe<Scalars['String']['input']>;
  readonly url?: InputMaybe<Scalars['String']['input']>;
  readonly width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_IconInput = {
  readonly filename?: InputMaybe<Scalars['String']['input']>;
  readonly filesize?: InputMaybe<Scalars['Float']['input']>;
  readonly height?: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType?: InputMaybe<Scalars['String']['input']>;
  readonly url?: InputMaybe<Scalars['String']['input']>;
  readonly width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_ThumbnailInput = {
  readonly filename?: InputMaybe<Scalars['String']['input']>;
  readonly filesize?: InputMaybe<Scalars['Float']['input']>;
  readonly height?: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType?: InputMaybe<Scalars['String']['input']>;
  readonly url?: InputMaybe<Scalars['String']['input']>;
  readonly width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationPayloadLockedDocumentInput = {
  readonly createdAt?: InputMaybe<Scalars['String']['input']>;
  readonly document?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInput>;
  readonly globalSlug?: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt?: InputMaybe<Scalars['String']['input']>;
  readonly user?: InputMaybe<PayloadLockedDocument_UserRelationshipInput>;
};

export type MutationPayloadLockedDocumentUpdateInput = {
  readonly createdAt?: InputMaybe<Scalars['String']['input']>;
  readonly document?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInput>;
  readonly globalSlug?: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt?: InputMaybe<Scalars['String']['input']>;
  readonly user?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInput>;
};

export type MutationPayloadPreferenceInput = {
  readonly createdAt?: InputMaybe<Scalars['String']['input']>;
  readonly key?: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt?: InputMaybe<Scalars['String']['input']>;
  readonly user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  readonly value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationPayloadPreferenceUpdateInput = {
  readonly createdAt?: InputMaybe<Scalars['String']['input']>;
  readonly key?: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt?: InputMaybe<Scalars['String']['input']>;
  readonly user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  readonly value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationSkillInput = {
  readonly createdAt?: InputMaybe<Scalars['String']['input']>;
  readonly skills?: InputMaybe<ReadonlyArray<MutationSkill_SkillsInput>>;
  readonly subtitle?: InputMaybe<Scalars['String']['input']>;
  readonly title: Scalars['String']['input'];
  readonly updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSkill_SkillsInput = {
  readonly description: Scalars['JSON']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly subtitle: Scalars['String']['input'];
};

export type MutationTagInput = {
  readonly createdAt?: InputMaybe<Scalars['String']['input']>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly slug: Scalars['String']['input'];
  readonly updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTagUpdateInput = {
  readonly createdAt?: InputMaybe<Scalars['String']['input']>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly slug?: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserInput = {
  readonly createdAt?: InputMaybe<Scalars['String']['input']>;
  readonly email: Scalars['String']['input'];
  readonly hash?: InputMaybe<Scalars['String']['input']>;
  readonly lockUntil?: InputMaybe<Scalars['String']['input']>;
  readonly loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  readonly password: Scalars['String']['input'];
  readonly resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  readonly resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  readonly salt?: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdateInput = {
  readonly createdAt?: InputMaybe<Scalars['String']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly hash?: InputMaybe<Scalars['String']['input']>;
  readonly lockUntil?: InputMaybe<Scalars['String']['input']>;
  readonly loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  readonly password?: InputMaybe<Scalars['String']['input']>;
  readonly resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  readonly resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  readonly salt?: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationWorkButtonInput = {
  readonly buttons?: InputMaybe<ReadonlyArray<MutationWorkButton_ButtonsInput>>;
  readonly createdAt?: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationWorkButton_ButtonsInput = {
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly text: Scalars['String']['input'];
  readonly url: Scalars['String']['input'];
};

export type Payload_Locked_DocumentsAccess = {
  readonly __typename?: 'payload_locked_documentsAccess';
  readonly create?: Maybe<PayloadLockedDocumentsCreateAccess>;
  readonly delete?: Maybe<PayloadLockedDocumentsDeleteAccess>;
  readonly fields?: Maybe<PayloadLockedDocumentsFields>;
  readonly read?: Maybe<PayloadLockedDocumentsReadAccess>;
  readonly update?: Maybe<PayloadLockedDocumentsUpdateAccess>;
};

export type Payload_Locked_DocumentsDocAccess = {
  readonly __typename?: 'payload_locked_documentsDocAccess';
  readonly create?: Maybe<PayloadLockedDocumentsCreateDocAccess>;
  readonly delete?: Maybe<PayloadLockedDocumentsDeleteDocAccess>;
  readonly fields?: Maybe<PayloadLockedDocumentsDocAccessFields>;
  readonly read?: Maybe<PayloadLockedDocumentsReadDocAccess>;
  readonly update?: Maybe<PayloadLockedDocumentsUpdateDocAccess>;
};

export type Payload_PreferencesAccess = {
  readonly __typename?: 'payload_preferencesAccess';
  readonly create?: Maybe<PayloadPreferencesCreateAccess>;
  readonly delete?: Maybe<PayloadPreferencesDeleteAccess>;
  readonly fields?: Maybe<PayloadPreferencesFields>;
  readonly read?: Maybe<PayloadPreferencesReadAccess>;
  readonly update?: Maybe<PayloadPreferencesUpdateAccess>;
};

export type Payload_PreferencesDocAccess = {
  readonly __typename?: 'payload_preferencesDocAccess';
  readonly create?: Maybe<PayloadPreferencesCreateDocAccess>;
  readonly delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
  readonly fields?: Maybe<PayloadPreferencesDocAccessFields>;
  readonly read?: Maybe<PayloadPreferencesReadDocAccess>;
  readonly update?: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type SkillsAccess = {
  readonly __typename?: 'skillsAccess';
  readonly fields?: Maybe<SkillsFields>;
  readonly read?: Maybe<SkillsReadAccess>;
  readonly update?: Maybe<SkillsUpdateAccess>;
};

export type SkillsDocAccess = {
  readonly __typename?: 'skillsDocAccess';
  readonly fields?: Maybe<SkillsDocAccessFields>;
  readonly read?: Maybe<SkillsReadDocAccess>;
  readonly update?: Maybe<SkillsUpdateDocAccess>;
};

export type TagsAccess = {
  readonly __typename?: 'tagsAccess';
  readonly create?: Maybe<TagsCreateAccess>;
  readonly delete?: Maybe<TagsDeleteAccess>;
  readonly fields?: Maybe<TagsFields>;
  readonly read?: Maybe<TagsReadAccess>;
  readonly update?: Maybe<TagsUpdateAccess>;
};

export type TagsDocAccess = {
  readonly __typename?: 'tagsDocAccess';
  readonly create?: Maybe<TagsCreateDocAccess>;
  readonly delete?: Maybe<TagsDeleteDocAccess>;
  readonly fields?: Maybe<TagsDocAccessFields>;
  readonly read?: Maybe<TagsReadDocAccess>;
  readonly update?: Maybe<TagsUpdateDocAccess>;
};

export type UsersAccess = {
  readonly __typename?: 'usersAccess';
  readonly create?: Maybe<UsersCreateAccess>;
  readonly delete?: Maybe<UsersDeleteAccess>;
  readonly fields?: Maybe<UsersFields>;
  readonly read?: Maybe<UsersReadAccess>;
  readonly unlock?: Maybe<UsersUnlockAccess>;
  readonly update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  readonly __typename?: 'usersDocAccess';
  readonly create?: Maybe<UsersCreateDocAccess>;
  readonly delete?: Maybe<UsersDeleteDocAccess>;
  readonly fields?: Maybe<UsersDocAccessFields>;
  readonly read?: Maybe<UsersReadDocAccess>;
  readonly unlock?: Maybe<UsersUnlockDocAccess>;
  readonly update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  readonly __typename?: 'usersJWT';
  readonly collection: Scalars['String']['output'];
  readonly email: Scalars['EmailAddress']['output'];
};

export type UsersLoginResult = {
  readonly __typename?: 'usersLoginResult';
  readonly exp?: Maybe<Scalars['Int']['output']>;
  readonly token?: Maybe<Scalars['String']['output']>;
  readonly user?: Maybe<User>;
};

export type UsersMe = {
  readonly __typename?: 'usersMe';
  readonly collection?: Maybe<Scalars['String']['output']>;
  readonly exp?: Maybe<Scalars['Int']['output']>;
  readonly strategy?: Maybe<Scalars['String']['output']>;
  readonly token?: Maybe<Scalars['String']['output']>;
  readonly user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  readonly __typename?: 'usersRefreshedUser';
  readonly exp?: Maybe<Scalars['Int']['output']>;
  readonly refreshedToken?: Maybe<Scalars['String']['output']>;
  readonly strategy?: Maybe<Scalars['String']['output']>;
  readonly user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  readonly __typename?: 'usersResetPassword';
  readonly token?: Maybe<Scalars['String']['output']>;
  readonly user?: Maybe<User>;
};

export type Work_ButtonsAccess = {
  readonly __typename?: 'work_buttonsAccess';
  readonly fields?: Maybe<WorkButtonsFields>;
  readonly read?: Maybe<WorkButtonsReadAccess>;
  readonly update?: Maybe<WorkButtonsUpdateAccess>;
};

export type Work_ButtonsDocAccess = {
  readonly __typename?: 'work_buttonsDocAccess';
  readonly fields?: Maybe<WorkButtonsDocAccessFields>;
  readonly read?: Maybe<WorkButtonsReadDocAccess>;
  readonly update?: Maybe<WorkButtonsUpdateDocAccess>;
};

export type MediaFragmentFragment = { readonly __typename?: 'Media', readonly id: number, readonly alt: string, readonly caption?: string | null, readonly blurDataURL?: string | null, readonly focalX?: number | null, readonly focalY?: number | null, readonly url?: string | null, readonly width?: number | null, readonly height?: number | null, readonly sizes?: { readonly __typename?: 'Media_Sizes', readonly icon?: { readonly __typename?: 'Media_Sizes_Icon', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly thumbnail?: { readonly __typename?: 'Media_Sizes_Thumbnail', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly card?: { readonly __typename?: 'Media_Sizes_Card', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly feature?: { readonly __typename?: 'Media_Sizes_Feature', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly hero?: { readonly __typename?: 'Media_Sizes_Hero', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null } | null };

export type CreateContactFormMutationVariables = Exact<{
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  subject: Scalars['String']['input'];
  message: Scalars['String']['input'];
}>;


export type CreateContactFormMutation = { readonly __typename?: 'Mutation', readonly createContactForm?: { readonly __typename?: 'ContactForm', readonly id: number, readonly name: string, readonly email: any, readonly subject: string, readonly message: string, readonly status?: ContactForm_Status | null } | null };

export type GetAllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTagsQuery = { readonly __typename?: 'Query', readonly CaseStudies?: { readonly __typename?: 'CaseStudies', readonly docs: ReadonlyArray<{ readonly __typename?: 'CaseStudy', readonly updatedAt?: any | null, readonly tags: ReadonlyArray<{ readonly __typename?: 'Tag', readonly name: string, readonly slug: string, readonly id: number }> }> } | null };

export type GetCaseStudiesByParamsQueryVariables = Exact<{
  tagIds?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>> | InputMaybe<Scalars['JSON']['input']>>;
  experience?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>> | InputMaybe<Scalars['JSON']['input']>>;
}>;


export type GetCaseStudiesByParamsQuery = { readonly __typename?: 'Query', readonly CaseStudies?: { readonly __typename?: 'CaseStudies', readonly offset?: number | null, readonly totalDocs: number, readonly pagingCounter: number, readonly docs: ReadonlyArray<{ readonly __typename?: 'CaseStudy', readonly id: number, readonly slug?: string | null, readonly title: string, readonly summary: any, readonly updatedAt?: any | null, readonly tags: ReadonlyArray<{ readonly __typename?: 'Tag', readonly name: string, readonly id: number }>, readonly illustration?: { readonly __typename?: 'Media', readonly id: number, readonly alt: string, readonly caption?: string | null, readonly blurDataURL?: string | null, readonly focalX?: number | null, readonly focalY?: number | null, readonly url?: string | null, readonly width?: number | null, readonly height?: number | null, readonly sizes?: { readonly __typename?: 'Media_Sizes', readonly icon?: { readonly __typename?: 'Media_Sizes_Icon', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly thumbnail?: { readonly __typename?: 'Media_Sizes_Thumbnail', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly card?: { readonly __typename?: 'Media_Sizes_Card', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly feature?: { readonly __typename?: 'Media_Sizes_Feature', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly hero?: { readonly __typename?: 'Media_Sizes_Hero', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null } | null } | null, readonly experience: { readonly __typename?: 'Experience', readonly role?: string | null, readonly title: string, readonly slug?: string | null } }> } | null, readonly Journal?: { readonly __typename?: 'Journal', readonly title: string, readonly subtitle?: string | null, readonly description: string } | null };

export type GetCaseStudyBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetCaseStudyBySlugQuery = { readonly __typename?: 'Query', readonly CaseStudies?: { readonly __typename?: 'CaseStudies', readonly docs: ReadonlyArray<{ readonly __typename?: 'CaseStudy', readonly title: string, readonly content: any, readonly updatedAt?: any | null, readonly experience: { readonly __typename?: 'Experience', readonly title: string, readonly role?: string | null, readonly startDate?: any | null, readonly endDate?: any | null, readonly id: number }, readonly tags: ReadonlyArray<{ readonly __typename?: 'Tag', readonly name: string, readonly id: number }>, readonly illustration?: { readonly __typename?: 'Media', readonly id: number, readonly alt: string, readonly caption?: string | null, readonly blurDataURL?: string | null, readonly focalX?: number | null, readonly focalY?: number | null, readonly url?: string | null, readonly width?: number | null, readonly height?: number | null, readonly sizes?: { readonly __typename?: 'Media_Sizes', readonly icon?: { readonly __typename?: 'Media_Sizes_Icon', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly thumbnail?: { readonly __typename?: 'Media_Sizes_Thumbnail', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly card?: { readonly __typename?: 'Media_Sizes_Card', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly feature?: { readonly __typename?: 'Media_Sizes_Feature', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly hero?: { readonly __typename?: 'Media_Sizes_Hero', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null } | null } | null, readonly links?: ReadonlyArray<{ readonly __typename?: 'CaseStudy_Links', readonly label?: string | null, readonly id?: string | null, readonly url?: string | null }> | null }> } | null };

export type GetContactFormsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContactFormsQuery = { readonly __typename?: 'Query', readonly ContactForms?: { readonly __typename?: 'ContactForms', readonly totalDocs: number, readonly page: number, readonly totalPages: number, readonly docs: ReadonlyArray<{ readonly __typename?: 'ContactForm', readonly id: number, readonly name: string, readonly email: any, readonly subject: string, readonly message: string, readonly status?: ContactForm_Status | null, readonly createdAt?: any | null }> } | null };

export type GetExperienceBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetExperienceBySlugQuery = { readonly __typename?: 'Query', readonly Experiences?: { readonly __typename?: 'Experiences', readonly docs: ReadonlyArray<{ readonly __typename?: 'Experience', readonly id: number, readonly role?: string | null, readonly slug?: string | null, readonly startDate?: any | null, readonly summary: any, readonly title: string, readonly endDate?: any | null, readonly coverImage?: { readonly __typename?: 'Media', readonly id: number, readonly alt: string, readonly caption?: string | null, readonly blurDataURL?: string | null, readonly focalX?: number | null, readonly focalY?: number | null, readonly url?: string | null, readonly width?: number | null, readonly height?: number | null, readonly sizes?: { readonly __typename?: 'Media_Sizes', readonly icon?: { readonly __typename?: 'Media_Sizes_Icon', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly thumbnail?: { readonly __typename?: 'Media_Sizes_Thumbnail', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly card?: { readonly __typename?: 'Media_Sizes_Card', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly feature?: { readonly __typename?: 'Media_Sizes_Feature', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly hero?: { readonly __typename?: 'Media_Sizes_Hero', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null } | null } | null, readonly tags: ReadonlyArray<{ readonly __typename?: 'Tag', readonly id: number, readonly name: string }> }> } | null };

export type GetFeaturedCaseStudiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFeaturedCaseStudiesQuery = { readonly __typename?: 'Query', readonly FeaturedCaseStudy?: { readonly __typename?: 'FeaturedCaseStudy', readonly title: string, readonly subtitle?: string | null, readonly description: string, readonly caseStudies: ReadonlyArray<{ readonly __typename?: 'CaseStudy', readonly title: string, readonly slug?: string | null, readonly summary: any, readonly illustration?: { readonly __typename?: 'Media', readonly id: number, readonly alt: string, readonly caption?: string | null, readonly blurDataURL?: string | null, readonly focalX?: number | null, readonly focalY?: number | null, readonly url?: string | null, readonly width?: number | null, readonly height?: number | null, readonly sizes?: { readonly __typename?: 'Media_Sizes', readonly icon?: { readonly __typename?: 'Media_Sizes_Icon', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly thumbnail?: { readonly __typename?: 'Media_Sizes_Thumbnail', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly card?: { readonly __typename?: 'Media_Sizes_Card', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly feature?: { readonly __typename?: 'Media_Sizes_Feature', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly hero?: { readonly __typename?: 'Media_Sizes_Hero', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null } | null } | null, readonly tags: ReadonlyArray<{ readonly __typename?: 'Tag', readonly name: string, readonly id: number }> }> } | null };

export type GetFeaturedExperiencesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFeaturedExperiencesQuery = { readonly __typename?: 'Query', readonly FeaturedExperience?: { readonly __typename?: 'FeaturedExperience', readonly description?: string | null, readonly title: string, readonly subtitle: string, readonly experiences: ReadonlyArray<{ readonly __typename?: 'Experience', readonly id: number, readonly title: string, readonly slug?: string | null, readonly endDate?: any | null, readonly startDate?: any | null, readonly role?: string | null, readonly thumbnailImage?: { readonly __typename?: 'Media', readonly id: number, readonly alt: string, readonly caption?: string | null, readonly blurDataURL?: string | null, readonly focalX?: number | null, readonly focalY?: number | null, readonly url?: string | null, readonly width?: number | null, readonly height?: number | null, readonly sizes?: { readonly __typename?: 'Media_Sizes', readonly icon?: { readonly __typename?: 'Media_Sizes_Icon', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly thumbnail?: { readonly __typename?: 'Media_Sizes_Thumbnail', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly card?: { readonly __typename?: 'Media_Sizes_Card', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly feature?: { readonly __typename?: 'Media_Sizes_Feature', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly hero?: { readonly __typename?: 'Media_Sizes_Hero', readonly url?: string | null, readonly width?: number | null, readonly height?: number | null } | null } | null } | null }> } | null };

export type GetFooterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFooterQuery = { readonly __typename?: 'Query', readonly Footer?: { readonly __typename?: 'Footer', readonly title1: string, readonly title2: string, readonly description: string, readonly buttonText: string, readonly bottomText: string } | null };

export type GetHeroQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHeroQuery = { readonly __typename?: 'Query', readonly Hero?: { readonly __typename?: 'Hero', readonly name: string, readonly title: string, readonly description: any, readonly taglines: ReadonlyArray<{ readonly __typename?: 'Hero_Taglines', readonly text?: string | null }> } | null };

export type GetSkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSkillsQuery = { readonly __typename?: 'Query', readonly Skill?: { readonly __typename?: 'Skill', readonly title: string, readonly subtitle?: string | null, readonly skills: ReadonlyArray<{ readonly __typename?: 'Skill_Skills', readonly name?: string | null, readonly description?: any | null }> } | null };

export type GetWorkButtonsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWorkButtonsQuery = { readonly __typename?: 'Query', readonly WorkButton?: { readonly __typename?: 'WorkButton', readonly buttons: ReadonlyArray<{ readonly __typename?: 'WorkButton_Buttons', readonly text?: string | null, readonly url?: string | null }> } | null };

export type GetAllCaseStudiesSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCaseStudiesSlugsQuery = { readonly __typename?: 'Query', readonly CaseStudies?: { readonly __typename?: 'CaseStudies', readonly docs: ReadonlyArray<{ readonly __typename?: 'CaseStudy', readonly slug?: string | null, readonly updatedAt?: any | null }> } | null };

export type GetAllExperiencesSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllExperiencesSlugsQuery = { readonly __typename?: 'Query', readonly Experiences?: { readonly __typename?: 'Experiences', readonly docs: ReadonlyArray<{ readonly __typename?: 'Experience', readonly slug?: string | null, readonly updatedAt?: any | null }> } | null };

export type GetCaseStudyBySlugMetaQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetCaseStudyBySlugMetaQuery = { readonly __typename?: 'Query', readonly CaseStudies?: { readonly __typename?: 'CaseStudies', readonly docs: ReadonlyArray<{ readonly __typename?: 'CaseStudy', readonly meta?: { readonly __typename?: 'CaseStudy_Meta', readonly title?: string | null, readonly description?: string | null, readonly image?: { readonly __typename?: 'Media', readonly url?: string | null } | null } | null }> } | null };

export type GetExperienceBySlugMetaQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetExperienceBySlugMetaQuery = { readonly __typename?: 'Query', readonly Experiences?: { readonly __typename?: 'Experiences', readonly docs: ReadonlyArray<{ readonly __typename?: 'Experience', readonly meta?: { readonly __typename?: 'Experience_Meta', readonly title?: string | null, readonly description?: string | null, readonly image?: { readonly __typename?: 'Media', readonly url?: string | null } | null } | null }> } | null };

export type GetHeroMetaQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHeroMetaQuery = { readonly __typename?: 'Query', readonly Hero?: { readonly __typename?: 'Hero', readonly meta?: { readonly __typename?: 'Hero_Meta', readonly title?: string | null, readonly description?: string | null, readonly image?: { readonly __typename?: 'Media', readonly url?: string | null } | null } | null } | null };

export type GetJournalMetaQueryVariables = Exact<{ [key: string]: never; }>;


export type GetJournalMetaQuery = { readonly __typename?: 'Query', readonly Journal?: { readonly __typename?: 'Journal', readonly meta?: { readonly __typename?: 'Journal_Meta', readonly title?: string | null, readonly description?: string | null, readonly image?: { readonly __typename?: 'Media', readonly alt: string, readonly url?: string | null } | null } | null } | null };

export const MediaFragmentFragmentDoc = gql`
    fragment MediaFragment on Media {
  id
  alt
  caption
  blurDataURL
  focalX
  focalY
  url
  width
  height
  sizes {
    icon {
      url
      width
      height
    }
    thumbnail {
      url
      width
      height
    }
    card {
      url
      width
      height
    }
    feature {
      url
      width
      height
    }
    hero {
      url
      width
      height
    }
  }
}
    `;
export const CreateContactFormDocument = gql`
    mutation CreateContactForm($name: String!, $email: String!, $subject: String!, $message: String!) {
  createContactForm(
    data: {name: $name, email: $email, subject: $subject, message: $message}
  ) {
    id
    name
    email
    subject
    message
    status
  }
}
    `;
export type CreateContactFormMutationFn = Apollo.MutationFunction<CreateContactFormMutation, CreateContactFormMutationVariables>;

/**
 * __useCreateContactFormMutation__
 *
 * To run a mutation, you first call `useCreateContactFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateContactFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createContactFormMutation, { data, loading, error }] = useCreateContactFormMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      subject: // value for 'subject'
 *      message: // value for 'message'
 *   },
 * });
 */
export function useCreateContactFormMutation(baseOptions?: Apollo.MutationHookOptions<CreateContactFormMutation, CreateContactFormMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateContactFormMutation, CreateContactFormMutationVariables>(CreateContactFormDocument, options);
      }
export type CreateContactFormMutationHookResult = ReturnType<typeof useCreateContactFormMutation>;
export type CreateContactFormMutationResult = Apollo.MutationResult<CreateContactFormMutation>;
export type CreateContactFormMutationOptions = Apollo.BaseMutationOptions<CreateContactFormMutation, CreateContactFormMutationVariables>;
export const GetAllTagsDocument = gql`
    query GetAllTags {
  CaseStudies {
    docs {
      tags {
        name
        slug
        id
      }
      updatedAt
    }
  }
}
    `;

/**
 * __useGetAllTagsQuery__
 *
 * To run a query within a React component, call `useGetAllTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTagsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTagsQuery, GetAllTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTagsQuery, GetAllTagsQueryVariables>(GetAllTagsDocument, options);
      }
export function useGetAllTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTagsQuery, GetAllTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTagsQuery, GetAllTagsQueryVariables>(GetAllTagsDocument, options);
        }
export function useGetAllTagsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllTagsQuery, GetAllTagsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllTagsQuery, GetAllTagsQueryVariables>(GetAllTagsDocument, options);
        }
export type GetAllTagsQueryHookResult = ReturnType<typeof useGetAllTagsQuery>;
export type GetAllTagsLazyQueryHookResult = ReturnType<typeof useGetAllTagsLazyQuery>;
export type GetAllTagsSuspenseQueryHookResult = ReturnType<typeof useGetAllTagsSuspenseQuery>;
export type GetAllTagsQueryResult = Apollo.QueryResult<GetAllTagsQuery, GetAllTagsQueryVariables>;
export const GetCaseStudiesByParamsDocument = gql`
    query GetCaseStudiesByParams($tagIds: [JSON], $experience: [JSON]) {
  CaseStudies(where: {tags: {in: $tagIds}, experience: {in: $experience}}) {
    offset
    totalDocs
    docs {
      id
      slug
      title
      summary
      tags {
        name
        id
      }
      updatedAt
      illustration {
        ...MediaFragment
      }
      experience {
        role
        title
        slug
      }
    }
    pagingCounter
  }
  Journal {
    title
    subtitle
    description
  }
}
    ${MediaFragmentFragmentDoc}`;

/**
 * __useGetCaseStudiesByParamsQuery__
 *
 * To run a query within a React component, call `useGetCaseStudiesByParamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCaseStudiesByParamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCaseStudiesByParamsQuery({
 *   variables: {
 *      tagIds: // value for 'tagIds'
 *      experience: // value for 'experience'
 *   },
 * });
 */
export function useGetCaseStudiesByParamsQuery(baseOptions?: Apollo.QueryHookOptions<GetCaseStudiesByParamsQuery, GetCaseStudiesByParamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCaseStudiesByParamsQuery, GetCaseStudiesByParamsQueryVariables>(GetCaseStudiesByParamsDocument, options);
      }
export function useGetCaseStudiesByParamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCaseStudiesByParamsQuery, GetCaseStudiesByParamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCaseStudiesByParamsQuery, GetCaseStudiesByParamsQueryVariables>(GetCaseStudiesByParamsDocument, options);
        }
export function useGetCaseStudiesByParamsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCaseStudiesByParamsQuery, GetCaseStudiesByParamsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCaseStudiesByParamsQuery, GetCaseStudiesByParamsQueryVariables>(GetCaseStudiesByParamsDocument, options);
        }
export type GetCaseStudiesByParamsQueryHookResult = ReturnType<typeof useGetCaseStudiesByParamsQuery>;
export type GetCaseStudiesByParamsLazyQueryHookResult = ReturnType<typeof useGetCaseStudiesByParamsLazyQuery>;
export type GetCaseStudiesByParamsSuspenseQueryHookResult = ReturnType<typeof useGetCaseStudiesByParamsSuspenseQuery>;
export type GetCaseStudiesByParamsQueryResult = Apollo.QueryResult<GetCaseStudiesByParamsQuery, GetCaseStudiesByParamsQueryVariables>;
export const GetCaseStudyBySlugDocument = gql`
    query GetCaseStudyBySlug($slug: String!) {
  CaseStudies(where: {slug: {equals: $slug}}) {
    docs {
      title
      experience {
        title
        role
        startDate
        endDate
        id
      }
      tags {
        name
        id
      }
      content
      illustration {
        ...MediaFragment
      }
      updatedAt
      links {
        label
        id
        url
      }
    }
  }
}
    ${MediaFragmentFragmentDoc}`;

/**
 * __useGetCaseStudyBySlugQuery__
 *
 * To run a query within a React component, call `useGetCaseStudyBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCaseStudyBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCaseStudyBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetCaseStudyBySlugQuery(baseOptions: Apollo.QueryHookOptions<GetCaseStudyBySlugQuery, GetCaseStudyBySlugQueryVariables> & ({ variables: GetCaseStudyBySlugQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCaseStudyBySlugQuery, GetCaseStudyBySlugQueryVariables>(GetCaseStudyBySlugDocument, options);
      }
export function useGetCaseStudyBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCaseStudyBySlugQuery, GetCaseStudyBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCaseStudyBySlugQuery, GetCaseStudyBySlugQueryVariables>(GetCaseStudyBySlugDocument, options);
        }
export function useGetCaseStudyBySlugSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCaseStudyBySlugQuery, GetCaseStudyBySlugQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCaseStudyBySlugQuery, GetCaseStudyBySlugQueryVariables>(GetCaseStudyBySlugDocument, options);
        }
export type GetCaseStudyBySlugQueryHookResult = ReturnType<typeof useGetCaseStudyBySlugQuery>;
export type GetCaseStudyBySlugLazyQueryHookResult = ReturnType<typeof useGetCaseStudyBySlugLazyQuery>;
export type GetCaseStudyBySlugSuspenseQueryHookResult = ReturnType<typeof useGetCaseStudyBySlugSuspenseQuery>;
export type GetCaseStudyBySlugQueryResult = Apollo.QueryResult<GetCaseStudyBySlugQuery, GetCaseStudyBySlugQueryVariables>;
export const GetContactFormsDocument = gql`
    query GetContactForms {
  ContactForms(limit: 100) {
    docs {
      id
      name
      email
      subject
      message
      status
      createdAt
    }
    totalDocs
    page
    totalPages
  }
}
    `;

/**
 * __useGetContactFormsQuery__
 *
 * To run a query within a React component, call `useGetContactFormsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContactFormsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContactFormsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContactFormsQuery(baseOptions?: Apollo.QueryHookOptions<GetContactFormsQuery, GetContactFormsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContactFormsQuery, GetContactFormsQueryVariables>(GetContactFormsDocument, options);
      }
export function useGetContactFormsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContactFormsQuery, GetContactFormsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContactFormsQuery, GetContactFormsQueryVariables>(GetContactFormsDocument, options);
        }
export function useGetContactFormsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetContactFormsQuery, GetContactFormsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetContactFormsQuery, GetContactFormsQueryVariables>(GetContactFormsDocument, options);
        }
export type GetContactFormsQueryHookResult = ReturnType<typeof useGetContactFormsQuery>;
export type GetContactFormsLazyQueryHookResult = ReturnType<typeof useGetContactFormsLazyQuery>;
export type GetContactFormsSuspenseQueryHookResult = ReturnType<typeof useGetContactFormsSuspenseQuery>;
export type GetContactFormsQueryResult = Apollo.QueryResult<GetContactFormsQuery, GetContactFormsQueryVariables>;
export const GetExperienceBySlugDocument = gql`
    query GetExperienceBySlug($slug: String!) {
  Experiences(where: {slug: {equals: $slug}}) {
    docs {
      id
      role
      slug
      startDate
      summary
      title
      endDate
      coverImage {
        ...MediaFragment
      }
      tags {
        id
        name
      }
    }
  }
}
    ${MediaFragmentFragmentDoc}`;

/**
 * __useGetExperienceBySlugQuery__
 *
 * To run a query within a React component, call `useGetExperienceBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExperienceBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExperienceBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetExperienceBySlugQuery(baseOptions: Apollo.QueryHookOptions<GetExperienceBySlugQuery, GetExperienceBySlugQueryVariables> & ({ variables: GetExperienceBySlugQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetExperienceBySlugQuery, GetExperienceBySlugQueryVariables>(GetExperienceBySlugDocument, options);
      }
export function useGetExperienceBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetExperienceBySlugQuery, GetExperienceBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetExperienceBySlugQuery, GetExperienceBySlugQueryVariables>(GetExperienceBySlugDocument, options);
        }
export function useGetExperienceBySlugSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetExperienceBySlugQuery, GetExperienceBySlugQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetExperienceBySlugQuery, GetExperienceBySlugQueryVariables>(GetExperienceBySlugDocument, options);
        }
export type GetExperienceBySlugQueryHookResult = ReturnType<typeof useGetExperienceBySlugQuery>;
export type GetExperienceBySlugLazyQueryHookResult = ReturnType<typeof useGetExperienceBySlugLazyQuery>;
export type GetExperienceBySlugSuspenseQueryHookResult = ReturnType<typeof useGetExperienceBySlugSuspenseQuery>;
export type GetExperienceBySlugQueryResult = Apollo.QueryResult<GetExperienceBySlugQuery, GetExperienceBySlugQueryVariables>;
export const GetFeaturedCaseStudiesDocument = gql`
    query GetFeaturedCaseStudies {
  FeaturedCaseStudy {
    title
    subtitle
    description
    caseStudies {
      title
      slug
      illustration {
        ...MediaFragment
      }
      summary
      tags {
        name
        id
      }
    }
  }
}
    ${MediaFragmentFragmentDoc}`;

/**
 * __useGetFeaturedCaseStudiesQuery__
 *
 * To run a query within a React component, call `useGetFeaturedCaseStudiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeaturedCaseStudiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeaturedCaseStudiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFeaturedCaseStudiesQuery(baseOptions?: Apollo.QueryHookOptions<GetFeaturedCaseStudiesQuery, GetFeaturedCaseStudiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFeaturedCaseStudiesQuery, GetFeaturedCaseStudiesQueryVariables>(GetFeaturedCaseStudiesDocument, options);
      }
export function useGetFeaturedCaseStudiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFeaturedCaseStudiesQuery, GetFeaturedCaseStudiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFeaturedCaseStudiesQuery, GetFeaturedCaseStudiesQueryVariables>(GetFeaturedCaseStudiesDocument, options);
        }
export function useGetFeaturedCaseStudiesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetFeaturedCaseStudiesQuery, GetFeaturedCaseStudiesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFeaturedCaseStudiesQuery, GetFeaturedCaseStudiesQueryVariables>(GetFeaturedCaseStudiesDocument, options);
        }
export type GetFeaturedCaseStudiesQueryHookResult = ReturnType<typeof useGetFeaturedCaseStudiesQuery>;
export type GetFeaturedCaseStudiesLazyQueryHookResult = ReturnType<typeof useGetFeaturedCaseStudiesLazyQuery>;
export type GetFeaturedCaseStudiesSuspenseQueryHookResult = ReturnType<typeof useGetFeaturedCaseStudiesSuspenseQuery>;
export type GetFeaturedCaseStudiesQueryResult = Apollo.QueryResult<GetFeaturedCaseStudiesQuery, GetFeaturedCaseStudiesQueryVariables>;
export const GetFeaturedExperiencesDocument = gql`
    query GetFeaturedExperiences {
  FeaturedExperience {
    experiences {
      id
      title
      slug
      endDate
      startDate
      thumbnailImage {
        ...MediaFragment
      }
      role
    }
    description
    title
    subtitle
  }
}
    ${MediaFragmentFragmentDoc}`;

/**
 * __useGetFeaturedExperiencesQuery__
 *
 * To run a query within a React component, call `useGetFeaturedExperiencesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeaturedExperiencesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeaturedExperiencesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFeaturedExperiencesQuery(baseOptions?: Apollo.QueryHookOptions<GetFeaturedExperiencesQuery, GetFeaturedExperiencesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFeaturedExperiencesQuery, GetFeaturedExperiencesQueryVariables>(GetFeaturedExperiencesDocument, options);
      }
export function useGetFeaturedExperiencesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFeaturedExperiencesQuery, GetFeaturedExperiencesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFeaturedExperiencesQuery, GetFeaturedExperiencesQueryVariables>(GetFeaturedExperiencesDocument, options);
        }
export function useGetFeaturedExperiencesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetFeaturedExperiencesQuery, GetFeaturedExperiencesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFeaturedExperiencesQuery, GetFeaturedExperiencesQueryVariables>(GetFeaturedExperiencesDocument, options);
        }
export type GetFeaturedExperiencesQueryHookResult = ReturnType<typeof useGetFeaturedExperiencesQuery>;
export type GetFeaturedExperiencesLazyQueryHookResult = ReturnType<typeof useGetFeaturedExperiencesLazyQuery>;
export type GetFeaturedExperiencesSuspenseQueryHookResult = ReturnType<typeof useGetFeaturedExperiencesSuspenseQuery>;
export type GetFeaturedExperiencesQueryResult = Apollo.QueryResult<GetFeaturedExperiencesQuery, GetFeaturedExperiencesQueryVariables>;
export const GetFooterDocument = gql`
    query GetFooter {
  Footer {
    title1
    title2
    description
    buttonText
    bottomText
  }
}
    `;

/**
 * __useGetFooterQuery__
 *
 * To run a query within a React component, call `useGetFooterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFooterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFooterQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFooterQuery(baseOptions?: Apollo.QueryHookOptions<GetFooterQuery, GetFooterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFooterQuery, GetFooterQueryVariables>(GetFooterDocument, options);
      }
export function useGetFooterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFooterQuery, GetFooterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFooterQuery, GetFooterQueryVariables>(GetFooterDocument, options);
        }
export function useGetFooterSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetFooterQuery, GetFooterQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFooterQuery, GetFooterQueryVariables>(GetFooterDocument, options);
        }
export type GetFooterQueryHookResult = ReturnType<typeof useGetFooterQuery>;
export type GetFooterLazyQueryHookResult = ReturnType<typeof useGetFooterLazyQuery>;
export type GetFooterSuspenseQueryHookResult = ReturnType<typeof useGetFooterSuspenseQuery>;
export type GetFooterQueryResult = Apollo.QueryResult<GetFooterQuery, GetFooterQueryVariables>;
export const GetHeroDocument = gql`
    query GetHero {
  Hero {
    name
    title
    taglines {
      text
    }
    description
  }
}
    `;

/**
 * __useGetHeroQuery__
 *
 * To run a query within a React component, call `useGetHeroQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHeroQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHeroQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHeroQuery(baseOptions?: Apollo.QueryHookOptions<GetHeroQuery, GetHeroQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHeroQuery, GetHeroQueryVariables>(GetHeroDocument, options);
      }
export function useGetHeroLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHeroQuery, GetHeroQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHeroQuery, GetHeroQueryVariables>(GetHeroDocument, options);
        }
export function useGetHeroSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetHeroQuery, GetHeroQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetHeroQuery, GetHeroQueryVariables>(GetHeroDocument, options);
        }
export type GetHeroQueryHookResult = ReturnType<typeof useGetHeroQuery>;
export type GetHeroLazyQueryHookResult = ReturnType<typeof useGetHeroLazyQuery>;
export type GetHeroSuspenseQueryHookResult = ReturnType<typeof useGetHeroSuspenseQuery>;
export type GetHeroQueryResult = Apollo.QueryResult<GetHeroQuery, GetHeroQueryVariables>;
export const GetSkillsDocument = gql`
    query GetSkills {
  Skill {
    title
    subtitle
    skills {
      name
      description
    }
  }
}
    `;

/**
 * __useGetSkillsQuery__
 *
 * To run a query within a React component, call `useGetSkillsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSkillsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSkillsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSkillsQuery(baseOptions?: Apollo.QueryHookOptions<GetSkillsQuery, GetSkillsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSkillsQuery, GetSkillsQueryVariables>(GetSkillsDocument, options);
      }
export function useGetSkillsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSkillsQuery, GetSkillsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSkillsQuery, GetSkillsQueryVariables>(GetSkillsDocument, options);
        }
export function useGetSkillsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSkillsQuery, GetSkillsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSkillsQuery, GetSkillsQueryVariables>(GetSkillsDocument, options);
        }
export type GetSkillsQueryHookResult = ReturnType<typeof useGetSkillsQuery>;
export type GetSkillsLazyQueryHookResult = ReturnType<typeof useGetSkillsLazyQuery>;
export type GetSkillsSuspenseQueryHookResult = ReturnType<typeof useGetSkillsSuspenseQuery>;
export type GetSkillsQueryResult = Apollo.QueryResult<GetSkillsQuery, GetSkillsQueryVariables>;
export const GetWorkButtonsDocument = gql`
    query GetWorkButtons {
  WorkButton {
    buttons {
      text
      url
    }
  }
}
    `;

/**
 * __useGetWorkButtonsQuery__
 *
 * To run a query within a React component, call `useGetWorkButtonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkButtonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkButtonsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWorkButtonsQuery(baseOptions?: Apollo.QueryHookOptions<GetWorkButtonsQuery, GetWorkButtonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkButtonsQuery, GetWorkButtonsQueryVariables>(GetWorkButtonsDocument, options);
      }
export function useGetWorkButtonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkButtonsQuery, GetWorkButtonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkButtonsQuery, GetWorkButtonsQueryVariables>(GetWorkButtonsDocument, options);
        }
export function useGetWorkButtonsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetWorkButtonsQuery, GetWorkButtonsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetWorkButtonsQuery, GetWorkButtonsQueryVariables>(GetWorkButtonsDocument, options);
        }
export type GetWorkButtonsQueryHookResult = ReturnType<typeof useGetWorkButtonsQuery>;
export type GetWorkButtonsLazyQueryHookResult = ReturnType<typeof useGetWorkButtonsLazyQuery>;
export type GetWorkButtonsSuspenseQueryHookResult = ReturnType<typeof useGetWorkButtonsSuspenseQuery>;
export type GetWorkButtonsQueryResult = Apollo.QueryResult<GetWorkButtonsQuery, GetWorkButtonsQueryVariables>;
export const GetAllCaseStudiesSlugsDocument = gql`
    query GetAllCaseStudiesSlugs {
  CaseStudies {
    docs {
      slug
      updatedAt
    }
  }
}
    `;

/**
 * __useGetAllCaseStudiesSlugsQuery__
 *
 * To run a query within a React component, call `useGetAllCaseStudiesSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCaseStudiesSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCaseStudiesSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCaseStudiesSlugsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCaseStudiesSlugsQuery, GetAllCaseStudiesSlugsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCaseStudiesSlugsQuery, GetAllCaseStudiesSlugsQueryVariables>(GetAllCaseStudiesSlugsDocument, options);
      }
export function useGetAllCaseStudiesSlugsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCaseStudiesSlugsQuery, GetAllCaseStudiesSlugsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCaseStudiesSlugsQuery, GetAllCaseStudiesSlugsQueryVariables>(GetAllCaseStudiesSlugsDocument, options);
        }
export function useGetAllCaseStudiesSlugsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllCaseStudiesSlugsQuery, GetAllCaseStudiesSlugsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllCaseStudiesSlugsQuery, GetAllCaseStudiesSlugsQueryVariables>(GetAllCaseStudiesSlugsDocument, options);
        }
export type GetAllCaseStudiesSlugsQueryHookResult = ReturnType<typeof useGetAllCaseStudiesSlugsQuery>;
export type GetAllCaseStudiesSlugsLazyQueryHookResult = ReturnType<typeof useGetAllCaseStudiesSlugsLazyQuery>;
export type GetAllCaseStudiesSlugsSuspenseQueryHookResult = ReturnType<typeof useGetAllCaseStudiesSlugsSuspenseQuery>;
export type GetAllCaseStudiesSlugsQueryResult = Apollo.QueryResult<GetAllCaseStudiesSlugsQuery, GetAllCaseStudiesSlugsQueryVariables>;
export const GetAllExperiencesSlugsDocument = gql`
    query GetAllExperiencesSlugs {
  Experiences {
    docs {
      slug
      updatedAt
    }
  }
}
    `;

/**
 * __useGetAllExperiencesSlugsQuery__
 *
 * To run a query within a React component, call `useGetAllExperiencesSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllExperiencesSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllExperiencesSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllExperiencesSlugsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllExperiencesSlugsQuery, GetAllExperiencesSlugsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllExperiencesSlugsQuery, GetAllExperiencesSlugsQueryVariables>(GetAllExperiencesSlugsDocument, options);
      }
export function useGetAllExperiencesSlugsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllExperiencesSlugsQuery, GetAllExperiencesSlugsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllExperiencesSlugsQuery, GetAllExperiencesSlugsQueryVariables>(GetAllExperiencesSlugsDocument, options);
        }
export function useGetAllExperiencesSlugsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllExperiencesSlugsQuery, GetAllExperiencesSlugsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllExperiencesSlugsQuery, GetAllExperiencesSlugsQueryVariables>(GetAllExperiencesSlugsDocument, options);
        }
export type GetAllExperiencesSlugsQueryHookResult = ReturnType<typeof useGetAllExperiencesSlugsQuery>;
export type GetAllExperiencesSlugsLazyQueryHookResult = ReturnType<typeof useGetAllExperiencesSlugsLazyQuery>;
export type GetAllExperiencesSlugsSuspenseQueryHookResult = ReturnType<typeof useGetAllExperiencesSlugsSuspenseQuery>;
export type GetAllExperiencesSlugsQueryResult = Apollo.QueryResult<GetAllExperiencesSlugsQuery, GetAllExperiencesSlugsQueryVariables>;
export const GetCaseStudyBySlugMetaDocument = gql`
    query GetCaseStudyBySlugMeta($slug: String!) {
  CaseStudies(where: {slug: {equals: $slug}}) {
    docs {
      meta {
        title
        description
        image {
          url
        }
      }
    }
  }
}
    `;

/**
 * __useGetCaseStudyBySlugMetaQuery__
 *
 * To run a query within a React component, call `useGetCaseStudyBySlugMetaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCaseStudyBySlugMetaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCaseStudyBySlugMetaQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetCaseStudyBySlugMetaQuery(baseOptions: Apollo.QueryHookOptions<GetCaseStudyBySlugMetaQuery, GetCaseStudyBySlugMetaQueryVariables> & ({ variables: GetCaseStudyBySlugMetaQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCaseStudyBySlugMetaQuery, GetCaseStudyBySlugMetaQueryVariables>(GetCaseStudyBySlugMetaDocument, options);
      }
export function useGetCaseStudyBySlugMetaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCaseStudyBySlugMetaQuery, GetCaseStudyBySlugMetaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCaseStudyBySlugMetaQuery, GetCaseStudyBySlugMetaQueryVariables>(GetCaseStudyBySlugMetaDocument, options);
        }
export function useGetCaseStudyBySlugMetaSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCaseStudyBySlugMetaQuery, GetCaseStudyBySlugMetaQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCaseStudyBySlugMetaQuery, GetCaseStudyBySlugMetaQueryVariables>(GetCaseStudyBySlugMetaDocument, options);
        }
export type GetCaseStudyBySlugMetaQueryHookResult = ReturnType<typeof useGetCaseStudyBySlugMetaQuery>;
export type GetCaseStudyBySlugMetaLazyQueryHookResult = ReturnType<typeof useGetCaseStudyBySlugMetaLazyQuery>;
export type GetCaseStudyBySlugMetaSuspenseQueryHookResult = ReturnType<typeof useGetCaseStudyBySlugMetaSuspenseQuery>;
export type GetCaseStudyBySlugMetaQueryResult = Apollo.QueryResult<GetCaseStudyBySlugMetaQuery, GetCaseStudyBySlugMetaQueryVariables>;
export const GetExperienceBySlugMetaDocument = gql`
    query GetExperienceBySlugMeta($slug: String!) {
  Experiences(where: {slug: {equals: $slug}}) {
    docs {
      meta {
        title
        description
        image {
          url
        }
      }
    }
  }
}
    `;

/**
 * __useGetExperienceBySlugMetaQuery__
 *
 * To run a query within a React component, call `useGetExperienceBySlugMetaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExperienceBySlugMetaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExperienceBySlugMetaQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetExperienceBySlugMetaQuery(baseOptions: Apollo.QueryHookOptions<GetExperienceBySlugMetaQuery, GetExperienceBySlugMetaQueryVariables> & ({ variables: GetExperienceBySlugMetaQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetExperienceBySlugMetaQuery, GetExperienceBySlugMetaQueryVariables>(GetExperienceBySlugMetaDocument, options);
      }
export function useGetExperienceBySlugMetaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetExperienceBySlugMetaQuery, GetExperienceBySlugMetaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetExperienceBySlugMetaQuery, GetExperienceBySlugMetaQueryVariables>(GetExperienceBySlugMetaDocument, options);
        }
export function useGetExperienceBySlugMetaSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetExperienceBySlugMetaQuery, GetExperienceBySlugMetaQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetExperienceBySlugMetaQuery, GetExperienceBySlugMetaQueryVariables>(GetExperienceBySlugMetaDocument, options);
        }
export type GetExperienceBySlugMetaQueryHookResult = ReturnType<typeof useGetExperienceBySlugMetaQuery>;
export type GetExperienceBySlugMetaLazyQueryHookResult = ReturnType<typeof useGetExperienceBySlugMetaLazyQuery>;
export type GetExperienceBySlugMetaSuspenseQueryHookResult = ReturnType<typeof useGetExperienceBySlugMetaSuspenseQuery>;
export type GetExperienceBySlugMetaQueryResult = Apollo.QueryResult<GetExperienceBySlugMetaQuery, GetExperienceBySlugMetaQueryVariables>;
export const GetHeroMetaDocument = gql`
    query GetHeroMeta {
  Hero {
    meta {
      title
      description
      image {
        url
      }
    }
  }
}
    `;

/**
 * __useGetHeroMetaQuery__
 *
 * To run a query within a React component, call `useGetHeroMetaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHeroMetaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHeroMetaQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHeroMetaQuery(baseOptions?: Apollo.QueryHookOptions<GetHeroMetaQuery, GetHeroMetaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHeroMetaQuery, GetHeroMetaQueryVariables>(GetHeroMetaDocument, options);
      }
export function useGetHeroMetaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHeroMetaQuery, GetHeroMetaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHeroMetaQuery, GetHeroMetaQueryVariables>(GetHeroMetaDocument, options);
        }
export function useGetHeroMetaSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetHeroMetaQuery, GetHeroMetaQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetHeroMetaQuery, GetHeroMetaQueryVariables>(GetHeroMetaDocument, options);
        }
export type GetHeroMetaQueryHookResult = ReturnType<typeof useGetHeroMetaQuery>;
export type GetHeroMetaLazyQueryHookResult = ReturnType<typeof useGetHeroMetaLazyQuery>;
export type GetHeroMetaSuspenseQueryHookResult = ReturnType<typeof useGetHeroMetaSuspenseQuery>;
export type GetHeroMetaQueryResult = Apollo.QueryResult<GetHeroMetaQuery, GetHeroMetaQueryVariables>;
export const GetJournalMetaDocument = gql`
    query GetJournalMeta {
  Journal {
    meta {
      title
      description
      image {
        alt
        url
      }
    }
  }
}
    `;

/**
 * __useGetJournalMetaQuery__
 *
 * To run a query within a React component, call `useGetJournalMetaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJournalMetaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJournalMetaQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetJournalMetaQuery(baseOptions?: Apollo.QueryHookOptions<GetJournalMetaQuery, GetJournalMetaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJournalMetaQuery, GetJournalMetaQueryVariables>(GetJournalMetaDocument, options);
      }
export function useGetJournalMetaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJournalMetaQuery, GetJournalMetaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJournalMetaQuery, GetJournalMetaQueryVariables>(GetJournalMetaDocument, options);
        }
export function useGetJournalMetaSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetJournalMetaQuery, GetJournalMetaQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetJournalMetaQuery, GetJournalMetaQueryVariables>(GetJournalMetaDocument, options);
        }
export type GetJournalMetaQueryHookResult = ReturnType<typeof useGetJournalMetaQuery>;
export type GetJournalMetaLazyQueryHookResult = ReturnType<typeof useGetJournalMetaLazyQuery>;
export type GetJournalMetaSuspenseQueryHookResult = ReturnType<typeof useGetJournalMetaSuspenseQuery>;
export type GetJournalMetaQueryResult = Apollo.QueryResult<GetJournalMetaQuery, GetJournalMetaQueryVariables>;