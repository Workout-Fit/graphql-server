import gql from 'graphql-tag';

export default gql`
  extend type Query {
    getMuscleGroups: [MuscleGroup]
    getMuscleGroupsByName(name: String!): MuscleGroup
    getMuscleGroupById(id: ID!): MuscleGroup
  }

  type MuscleGroup {
    id: ID!
    name: String!
  }
`;