import { greetResolver } from './greet';
import { userResolver } from './users';
import { mergeResolvers } from '@graphql-tools/merge';
import { empty } from '../handlers';
export const baseResolvers = {
	Query: {
		_empty: empty
	},
};
const resolvers = mergeResolvers([baseResolvers, greetResolver, userResolver]);

export default resolvers;
