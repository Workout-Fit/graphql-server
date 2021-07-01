import gql from 'graphql-tag';

export default gql`
  extend type Query {
    getDifficultyLevels: [Difficulty]
    getDifficultyLevelsByName(name: String!): Difficulty
    getDifficultyById(id: ID!): Difficulty
  }

  type Difficulty {
    id: ID!
    name: String!
  }
`;