import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    getMuscleGroups: [MuscleGroup]
    getMuscleGroupsByName(name: String!): MuscleGroup
    getMuscleGroupById(id: String!): MuscleGroup
  }

  type MuscleGroup {
    id: String!
    name: String!
  }
`;
