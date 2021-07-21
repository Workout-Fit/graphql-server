import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    getEquipments: [Equipment]
    getEquipmentsByName(name: String!): Equipment
    getEquipmentById(id: String!): Equipment
  }

  type Equipment {
    id: String!
    name: String!
  }
`;
