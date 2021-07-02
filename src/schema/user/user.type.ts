import gql from 'graphql-tag';

export default gql`
  extend type Query {
    getUserById(id: ID!): User
  }

  type User {
    id: ID! 
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