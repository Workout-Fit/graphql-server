import gql from 'graphql-tag';

export default gql`
  type Query {
    getExerciseTypes: [ExerciseType]
    getExerciseTypesByName(name: String!): ExerciseType
    getExerciseTypeById(id: ID!): ExerciseType
  }

  type ExerciseType {
    id: ID!
    name: String!
  }
`;