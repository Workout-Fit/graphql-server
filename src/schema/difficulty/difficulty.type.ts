import gql from 'graphql-tag';

export default gql`
  extend type Query {
    getDifficultyLevels: [Difficulty]
    getDifficultyLevelsByName(name: String!): Difficulty
    getDifficultyById(id: String!): Difficulty
  }

  type Difficulty {
    id: String!
    name: String!
  }
`;
