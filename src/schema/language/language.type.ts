import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    getLanguages(name: String, languageCode: String): [Language]
    getLanguageById(id: String!): Language
  }

  type Language {
    id: String!
    name: String!
    languageCode: String!
  }
`;
