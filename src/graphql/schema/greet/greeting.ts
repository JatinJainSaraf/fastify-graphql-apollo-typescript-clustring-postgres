import { DocumentNode } from 'graphql';

export const createGreetTypeDef = (gql: (template: TemplateStringsArray) => DocumentNode) => gql`
  type Query {
    greet: Greetings!
  }

  type Greetings {
    id: ID!
    msg: String
  }
`;
