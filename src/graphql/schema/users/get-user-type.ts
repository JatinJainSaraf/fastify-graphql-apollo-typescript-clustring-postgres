import { DocumentNode } from 'graphql';

export const makeGetUserTypeDef = (gql: (template: TemplateStringsArray) => DocumentNode) => gql`
  type Query {
    getUsers: [User!]
  }

  type User {
    id: ID!
    name: String!
    age: Int!
  }
`;
