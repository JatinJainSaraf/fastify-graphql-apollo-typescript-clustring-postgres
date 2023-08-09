import gql from 'graphql-tag';
import { greetTypeDef } from './greet';
import { mergeTypeDefs } from '@graphql-tools/merge';
const rootTypeDefs = gql`
extend schema @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key", "@shareable"])
  type Query {
    _empty: String
  }
`;

const typeDefs = mergeTypeDefs([rootTypeDefs, greetTypeDef]);

export default typeDefs;
