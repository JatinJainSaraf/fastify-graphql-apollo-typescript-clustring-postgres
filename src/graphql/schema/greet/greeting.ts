import gql from "graphql-tag";
export const greetTypeDef = gql`
  type Query {
    me: User
  }

  type User {
    id: ID!
    username: String
  }
`;
