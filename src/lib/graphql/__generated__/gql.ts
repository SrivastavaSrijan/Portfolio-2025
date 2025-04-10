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
    "mutation CreateContactForm($name: String!, $email: String!, $subject: String!, $message: String!) {\n  createContactForm(\n    data: {name: $name, email: $email, subject: $subject, message: $message}\n  ) {\n    id\n    name\n    email\n    subject\n    message\n    status\n  }\n}": typeof types.CreateContactFormDocument,
    "query GetContactForms {\n  ContactForms(limit: 100) {\n    docs {\n      id\n      name\n      email\n      subject\n      message\n      status\n      createdAt\n    }\n    totalDocs\n    page\n    totalPages\n  }\n}": typeof types.GetContactFormsDocument,
    "query GetFooter {\n  Footer {\n    title1\n    title2\n    description\n    buttonText\n    bottomText\n  }\n}": typeof types.GetFooterDocument,
    "query GetHero {\n  Hero {\n    name\n    title\n    taglines {\n      text\n    }\n    description\n  }\n}": typeof types.GetHeroDocument,
    "query GetSkills {\n  Skill {\n    title\n    subtitle\n    skills {\n      name\n      description\n    }\n  }\n}": typeof types.GetSkillsDocument,
    "query GetWorkButtons {\n  WorkButton {\n    buttons {\n      text\n      url\n    }\n  }\n}": typeof types.GetWorkButtonsDocument,
};
const documents: Documents = {
    "mutation CreateContactForm($name: String!, $email: String!, $subject: String!, $message: String!) {\n  createContactForm(\n    data: {name: $name, email: $email, subject: $subject, message: $message}\n  ) {\n    id\n    name\n    email\n    subject\n    message\n    status\n  }\n}": types.CreateContactFormDocument,
    "query GetContactForms {\n  ContactForms(limit: 100) {\n    docs {\n      id\n      name\n      email\n      subject\n      message\n      status\n      createdAt\n    }\n    totalDocs\n    page\n    totalPages\n  }\n}": types.GetContactFormsDocument,
    "query GetFooter {\n  Footer {\n    title1\n    title2\n    description\n    buttonText\n    bottomText\n  }\n}": types.GetFooterDocument,
    "query GetHero {\n  Hero {\n    name\n    title\n    taglines {\n      text\n    }\n    description\n  }\n}": types.GetHeroDocument,
    "query GetSkills {\n  Skill {\n    title\n    subtitle\n    skills {\n      name\n      description\n    }\n  }\n}": types.GetSkillsDocument,
    "query GetWorkButtons {\n  WorkButton {\n    buttons {\n      text\n      url\n    }\n  }\n}": types.GetWorkButtonsDocument,
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
export function gql(source: "mutation CreateContactForm($name: String!, $email: String!, $subject: String!, $message: String!) {\n  createContactForm(\n    data: {name: $name, email: $email, subject: $subject, message: $message}\n  ) {\n    id\n    name\n    email\n    subject\n    message\n    status\n  }\n}"): (typeof documents)["mutation CreateContactForm($name: String!, $email: String!, $subject: String!, $message: String!) {\n  createContactForm(\n    data: {name: $name, email: $email, subject: $subject, message: $message}\n  ) {\n    id\n    name\n    email\n    subject\n    message\n    status\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetContactForms {\n  ContactForms(limit: 100) {\n    docs {\n      id\n      name\n      email\n      subject\n      message\n      status\n      createdAt\n    }\n    totalDocs\n    page\n    totalPages\n  }\n}"): (typeof documents)["query GetContactForms {\n  ContactForms(limit: 100) {\n    docs {\n      id\n      name\n      email\n      subject\n      message\n      status\n      createdAt\n    }\n    totalDocs\n    page\n    totalPages\n  }\n}"];
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

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;