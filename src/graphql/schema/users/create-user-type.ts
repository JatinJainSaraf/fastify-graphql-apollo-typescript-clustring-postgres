import { DocumentNode } from 'graphql';

export const createCreateUserType = (gql: (template: TemplateStringsArray) => DocumentNode) => gql`
  type Mutation {
    createUser(input: CreateUserInput): CreatedUserResponse
  }

  input CreateUserInput {
    name: String!
    email: String!
    age: Int
    password: String!
  }

  type CreatedUserResponse {
    id: ID!
    name: String!
    email: String!
    age: Int
    password: String!
  }
`;
