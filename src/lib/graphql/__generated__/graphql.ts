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
  contact_forms?: Maybe<Contact_FormsAccess>;
  hero?: Maybe<HeroAccess>;
  media?: Maybe<MediaAccess>;
  payload_locked_documents?: Maybe<Payload_Locked_DocumentsAccess>;
  payload_preferences?: Maybe<Payload_PreferencesAccess>;
  users?: Maybe<UsersAccess>;
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

export type Hero = {
  __typename?: 'Hero';
  buttons: Array<Hero_Buttons>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['JSON']['output'];
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
  buttons?: Maybe<HeroDocAccessFields_Buttons>;
  createdAt?: Maybe<HeroDocAccessFields_CreatedAt>;
  description?: Maybe<HeroDocAccessFields_Description>;
  name?: Maybe<HeroDocAccessFields_Name>;
  taglines?: Maybe<HeroDocAccessFields_Taglines>;
  title?: Maybe<HeroDocAccessFields_Title>;
  updatedAt?: Maybe<HeroDocAccessFields_UpdatedAt>;
};

export type HeroDocAccessFields_Buttons = {
  __typename?: 'HeroDocAccessFields_buttons';
  create?: Maybe<HeroDocAccessFields_Buttons_Create>;
  delete?: Maybe<HeroDocAccessFields_Buttons_Delete>;
  fields?: Maybe<HeroDocAccessFields_Buttons_Fields>;
  read?: Maybe<HeroDocAccessFields_Buttons_Read>;
  update?: Maybe<HeroDocAccessFields_Buttons_Update>;
};

export type HeroDocAccessFields_Buttons_Create = {
  __typename?: 'HeroDocAccessFields_buttons_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Buttons_Delete = {
  __typename?: 'HeroDocAccessFields_buttons_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Buttons_Fields = {
  __typename?: 'HeroDocAccessFields_buttons_Fields';
  id?: Maybe<HeroDocAccessFields_Buttons_Id>;
  text?: Maybe<HeroDocAccessFields_Buttons_Text>;
  url?: Maybe<HeroDocAccessFields_Buttons_Url>;
};

export type HeroDocAccessFields_Buttons_Read = {
  __typename?: 'HeroDocAccessFields_buttons_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Buttons_Update = {
  __typename?: 'HeroDocAccessFields_buttons_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Buttons_Id = {
  __typename?: 'HeroDocAccessFields_buttons_id';
  create?: Maybe<HeroDocAccessFields_Buttons_Id_Create>;
  delete?: Maybe<HeroDocAccessFields_Buttons_Id_Delete>;
  read?: Maybe<HeroDocAccessFields_Buttons_Id_Read>;
  update?: Maybe<HeroDocAccessFields_Buttons_Id_Update>;
};

export type HeroDocAccessFields_Buttons_Id_Create = {
  __typename?: 'HeroDocAccessFields_buttons_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Buttons_Id_Delete = {
  __typename?: 'HeroDocAccessFields_buttons_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Buttons_Id_Read = {
  __typename?: 'HeroDocAccessFields_buttons_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Buttons_Id_Update = {
  __typename?: 'HeroDocAccessFields_buttons_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Buttons_Text = {
  __typename?: 'HeroDocAccessFields_buttons_text';
  create?: Maybe<HeroDocAccessFields_Buttons_Text_Create>;
  delete?: Maybe<HeroDocAccessFields_Buttons_Text_Delete>;
  read?: Maybe<HeroDocAccessFields_Buttons_Text_Read>;
  update?: Maybe<HeroDocAccessFields_Buttons_Text_Update>;
};

export type HeroDocAccessFields_Buttons_Text_Create = {
  __typename?: 'HeroDocAccessFields_buttons_text_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Buttons_Text_Delete = {
  __typename?: 'HeroDocAccessFields_buttons_text_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Buttons_Text_Read = {
  __typename?: 'HeroDocAccessFields_buttons_text_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Buttons_Text_Update = {
  __typename?: 'HeroDocAccessFields_buttons_text_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Buttons_Url = {
  __typename?: 'HeroDocAccessFields_buttons_url';
  create?: Maybe<HeroDocAccessFields_Buttons_Url_Create>;
  delete?: Maybe<HeroDocAccessFields_Buttons_Url_Delete>;
  read?: Maybe<HeroDocAccessFields_Buttons_Url_Read>;
  update?: Maybe<HeroDocAccessFields_Buttons_Url_Update>;
};

export type HeroDocAccessFields_Buttons_Url_Create = {
  __typename?: 'HeroDocAccessFields_buttons_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Buttons_Url_Delete = {
  __typename?: 'HeroDocAccessFields_buttons_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Buttons_Url_Read = {
  __typename?: 'HeroDocAccessFields_buttons_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroDocAccessFields_Buttons_Url_Update = {
  __typename?: 'HeroDocAccessFields_buttons_url_Update';
  permission: Scalars['Boolean']['output'];
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
  buttons?: Maybe<HeroFields_Buttons>;
  createdAt?: Maybe<HeroFields_CreatedAt>;
  description?: Maybe<HeroFields_Description>;
  name?: Maybe<HeroFields_Name>;
  taglines?: Maybe<HeroFields_Taglines>;
  title?: Maybe<HeroFields_Title>;
  updatedAt?: Maybe<HeroFields_UpdatedAt>;
};

export type HeroFields_Buttons = {
  __typename?: 'HeroFields_buttons';
  create?: Maybe<HeroFields_Buttons_Create>;
  delete?: Maybe<HeroFields_Buttons_Delete>;
  fields?: Maybe<HeroFields_Buttons_Fields>;
  read?: Maybe<HeroFields_Buttons_Read>;
  update?: Maybe<HeroFields_Buttons_Update>;
};

export type HeroFields_Buttons_Create = {
  __typename?: 'HeroFields_buttons_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Buttons_Delete = {
  __typename?: 'HeroFields_buttons_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Buttons_Fields = {
  __typename?: 'HeroFields_buttons_Fields';
  id?: Maybe<HeroFields_Buttons_Id>;
  text?: Maybe<HeroFields_Buttons_Text>;
  url?: Maybe<HeroFields_Buttons_Url>;
};

export type HeroFields_Buttons_Read = {
  __typename?: 'HeroFields_buttons_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Buttons_Update = {
  __typename?: 'HeroFields_buttons_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Buttons_Id = {
  __typename?: 'HeroFields_buttons_id';
  create?: Maybe<HeroFields_Buttons_Id_Create>;
  delete?: Maybe<HeroFields_Buttons_Id_Delete>;
  read?: Maybe<HeroFields_Buttons_Id_Read>;
  update?: Maybe<HeroFields_Buttons_Id_Update>;
};

export type HeroFields_Buttons_Id_Create = {
  __typename?: 'HeroFields_buttons_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Buttons_Id_Delete = {
  __typename?: 'HeroFields_buttons_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Buttons_Id_Read = {
  __typename?: 'HeroFields_buttons_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Buttons_Id_Update = {
  __typename?: 'HeroFields_buttons_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Buttons_Text = {
  __typename?: 'HeroFields_buttons_text';
  create?: Maybe<HeroFields_Buttons_Text_Create>;
  delete?: Maybe<HeroFields_Buttons_Text_Delete>;
  read?: Maybe<HeroFields_Buttons_Text_Read>;
  update?: Maybe<HeroFields_Buttons_Text_Update>;
};

export type HeroFields_Buttons_Text_Create = {
  __typename?: 'HeroFields_buttons_text_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Buttons_Text_Delete = {
  __typename?: 'HeroFields_buttons_text_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Buttons_Text_Read = {
  __typename?: 'HeroFields_buttons_text_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Buttons_Text_Update = {
  __typename?: 'HeroFields_buttons_text_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Buttons_Url = {
  __typename?: 'HeroFields_buttons_url';
  create?: Maybe<HeroFields_Buttons_Url_Create>;
  delete?: Maybe<HeroFields_Buttons_Url_Delete>;
  read?: Maybe<HeroFields_Buttons_Url_Read>;
  update?: Maybe<HeroFields_Buttons_Url_Update>;
};

export type HeroFields_Buttons_Url_Create = {
  __typename?: 'HeroFields_buttons_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Buttons_Url_Delete = {
  __typename?: 'HeroFields_buttons_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Buttons_Url_Read = {
  __typename?: 'HeroFields_buttons_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeroFields_Buttons_Url_Update = {
  __typename?: 'HeroFields_buttons_url_Update';
  permission: Scalars['Boolean']['output'];
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

export type Hero_Buttons = {
  __typename?: 'Hero_Buttons';
  id?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Hero_Taglines = {
  __typename?: 'Hero_Taglines';
  id?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type Media = {
  __typename?: 'Media';
  alt: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  focalX?: Maybe<Scalars['Float']['output']>;
  focalY?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  mimeType?: Maybe<Scalars['String']['output']>;
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
  createdAt?: Maybe<MediaDocAccessFields_CreatedAt>;
  filename?: Maybe<MediaDocAccessFields_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Filesize>;
  focalX?: Maybe<MediaDocAccessFields_FocalX>;
  focalY?: Maybe<MediaDocAccessFields_FocalY>;
  height?: Maybe<MediaDocAccessFields_Height>;
  mimeType?: Maybe<MediaDocAccessFields_MimeType>;
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
  createdAt?: Maybe<MediaFields_CreatedAt>;
  filename?: Maybe<MediaFields_Filename>;
  filesize?: Maybe<MediaFields_Filesize>;
  focalX?: Maybe<MediaFields_FocalX>;
  focalY?: Maybe<MediaFields_FocalY>;
  height?: Maybe<MediaFields_Height>;
  mimeType?: Maybe<MediaFields_MimeType>;
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

export type Media_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
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
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
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
  createContactForm?: Maybe<ContactForm>;
  createMedia?: Maybe<Media>;
  createPayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  createPayloadPreference?: Maybe<PayloadPreference>;
  createUser?: Maybe<User>;
  deleteContactForm?: Maybe<ContactForm>;
  deleteMedia?: Maybe<Media>;
  deletePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  deletePayloadPreference?: Maybe<PayloadPreference>;
  deleteUser?: Maybe<User>;
  duplicateContactForm?: Maybe<ContactForm>;
  duplicateMedia?: Maybe<Media>;
  duplicatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  duplicatePayloadPreference?: Maybe<PayloadPreference>;
  forgotPasswordUser: Scalars['Boolean']['output'];
  loginUser?: Maybe<UsersLoginResult>;
  logoutUser?: Maybe<Scalars['String']['output']>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  unlockUser: Scalars['Boolean']['output'];
  updateContactForm?: Maybe<ContactForm>;
  updateHero?: Maybe<Hero>;
  updateMedia?: Maybe<Media>;
  updatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  updatePayloadPreference?: Maybe<PayloadPreference>;
  updateUser?: Maybe<User>;
  verifyEmailUser?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateContactFormArgs = {
  data: MutationContactFormInput;
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


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteContactFormArgs = {
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


export type MutationDeleteUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicateContactFormArgs = {
  data: MutationContactFormInput;
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


export type MutationUpdateContactFormArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationContactFormUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateHeroArgs = {
  data: MutationHeroInput;
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


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
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
  ContactForms = 'contact_forms',
  Media = 'media',
  Users = 'users'
}

export type PayloadLockedDocumentUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_Document = ContactForm | Media | User;

export type PayloadLockedDocument_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_DocumentRelationshipInputRelationTo {
  ContactForms = 'contact_forms',
  Media = 'media',
  Users = 'users'
}

export enum PayloadLockedDocument_Document_RelationTo {
  ContactForms = 'contact_forms',
  Media = 'media',
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
  ContactForms = 'contact_forms',
  Media = 'media',
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
  ContactForm?: Maybe<ContactForm>;
  ContactForms?: Maybe<ContactForms>;
  Hero?: Maybe<Hero>;
  Media?: Maybe<Media>;
  PayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  PayloadLockedDocuments?: Maybe<PayloadLockedDocuments>;
  PayloadPreference?: Maybe<PayloadPreference>;
  PayloadPreferences?: Maybe<PayloadPreferences>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  allMedia?: Maybe<AllMedia>;
  countContactForms?: Maybe<CountContactForms>;
  countPayloadLockedDocuments?: Maybe<CountPayloadLockedDocuments>;
  countPayloadPreferences?: Maybe<CountPayloadPreferences>;
  countUsers?: Maybe<CountUsers>;
  countallMedia?: Maybe<CountallMedia>;
  docAccessContactForm?: Maybe<Contact_FormsDocAccess>;
  docAccessHero?: Maybe<HeroDocAccess>;
  docAccessMedia?: Maybe<MediaDocAccess>;
  docAccessPayloadLockedDocument?: Maybe<Payload_Locked_DocumentsDocAccess>;
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']['output']>;
  meUser?: Maybe<UsersMe>;
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


export type QueryHeroArgs = {
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


export type QueryAllMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryCountContactFormsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ContactForm_Where>;
};


export type QueryCountPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryCountPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryCountUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryCountallMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryDocAccessContactFormArgs = {
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


export type QueryDocAccessUserArgs = {
  id: Scalars['Int']['input'];
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

export type CountContactForms = {
  __typename?: 'countContactForms';
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

export type CountUsers = {
  __typename?: 'countUsers';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountallMedia = {
  __typename?: 'countallMedia';
  totalDocs?: Maybe<Scalars['Int']['output']>;
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

export type MutationHeroInput = {
  buttons?: InputMaybe<Array<MutationHero_ButtonsInput>>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['JSON']['input'];
  name: Scalars['String']['input'];
  taglines?: InputMaybe<Array<MutationHero_TaglinesInput>>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHero_ButtonsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type MutationHero_TaglinesInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
};

export type MutationMediaInput = {
  alt: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
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

export type CreateContactFormMutationVariables = Exact<{
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  subject: Scalars['String']['input'];
  message: Scalars['String']['input'];
}>;


export type CreateContactFormMutation = { __typename?: 'Mutation', createContactForm?: { __typename?: 'ContactForm', id: number, name: string, email: any, subject: string, message: string, status?: ContactForm_Status | null } | null };

export type GetContactFormsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContactFormsQuery = { __typename?: 'Query', ContactForms?: { __typename?: 'ContactForms', totalDocs: number, page: number, totalPages: number, docs: Array<{ __typename?: 'ContactForm', id: number, name: string, email: any, subject: string, message: string, status?: ContactForm_Status | null, createdAt?: any | null }> } | null };

export type GetHeroQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHeroQuery = { __typename?: 'Query', Hero?: { __typename?: 'Hero', name: string, title: string, description: any, taglines: Array<{ __typename?: 'Hero_Taglines', text?: string | null }>, buttons: Array<{ __typename?: 'Hero_Buttons', text?: string | null, url?: string | null }> } | null };


export const CreateContactFormDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateContactForm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subject"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"message"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createContactForm"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"subject"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subject"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"message"},"value":{"kind":"Variable","name":{"kind":"Name","value":"message"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<CreateContactFormMutation, CreateContactFormMutationVariables>;
export const GetContactFormsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetContactForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ContactForms"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<GetContactFormsQuery, GetContactFormsQueryVariables>;
export const GetHeroDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"taglines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"buttons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<GetHeroQuery, GetHeroQueryVariables>;