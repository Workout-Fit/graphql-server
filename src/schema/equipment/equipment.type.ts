import gql from 'graphql-tag';

export default gql`
  extend type Query {
    getEquipments: [Equipment]
    getEquipmentsByName(name: String!): Equipment
    getEquipmentById(id: ID!): Equipment
  }

  type Equipment {
    id: ID!
    name: String!
  }
`;