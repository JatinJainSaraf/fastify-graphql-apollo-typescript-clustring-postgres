import { greetResolver } from './greet';
import { createUserResolver } from './users';
import { mergeResolvers } from '@graphql-tools/merge';
import { empty } from '../handlers';
export const baseResolvers = {
	Query: {
		_empty: empty
	},
};
const resolvers = mergeResolvers([baseResolvers, greetResolver, createUserResolver]);

export default resolvers;
