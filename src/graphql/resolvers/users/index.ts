import { createGetUserResolver } from './get-user-resolver';
import { createCreateUserResolver } from './create-user-resolver';
import { getUsers, createUser } from '../../handlers';

const getUserResolver =()=> createGetUserResolver(getUsers);
const createUserResolver =()=> createCreateUserResolver(createUser);

export const userResolver = {
	Query: {
		getUsers: getUserResolver, 
	},
	Mutation: {
		createUser: createUserResolver(),
	},
};
