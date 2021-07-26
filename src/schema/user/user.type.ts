import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    getUserById(id: String!): User
  }

  extend type Mutation {
    createUser(userId: String!, profileInfo: ProfileInfoInput!): User
  }

  type User {
    id: String!
    username: String
    profileInfo: ProfileInfo
    workout: [Workout]
  }

  input ProfileInfoInput {
    height: Float
    weight: Float
    bio: String
    profilePicture: String
    username: String!
    name: String!
  }

  type ProfileInfo {
    height: Float
    weight: Float
    username: String
    bio: String
    profilePicture: String
    name: String
  }
`;
