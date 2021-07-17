import gql from 'graphql-tag';

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
