import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    getExerciseTypes: [ExerciseType]
    getExerciseTypesByName(name: String!): [ExerciseType]
    getExerciseTypeById(id: String!): ExerciseType
  }

  type ExerciseType {
    id: String!
    name: String!
  }
`;
