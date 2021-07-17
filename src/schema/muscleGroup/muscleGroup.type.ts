import gql from 'graphql-tag';

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
