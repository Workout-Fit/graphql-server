import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    getUserById(id: String!): User
  }

  type User {
    id: String!
    username: String
    email: String
    password: String
    profileInfo: ProfileInfo
    workout: [Workout]
  }

  type ProfileInfo {
    id: String!
    height: Float
    weight: Float
    bio: String
    profile_picture: String
    name: String
    user: User
  }
`;
