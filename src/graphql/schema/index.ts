import gql from '../../shared/gql';
import { greetTypeDef } from './greet';
import { userTypeDef } from './users';
import { mergeTypeDefs } from '@graphql-tools/merge';
const rootTypeDefs = gql`
extend schema @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key", "@shareable"])
  type Query {
    _empty: String
  }
`;

const typeDefs = mergeTypeDefs([rootTypeDefs, greetTypeDef, userTypeDef]);

export default typeDefs;
