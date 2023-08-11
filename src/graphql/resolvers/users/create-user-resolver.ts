import { UserAttributes, UserModelType } from '../../../data-access/models/user';
type CreateUserResolver = (input: UserAttributes) => Promise<UserModelType>;
export const createCreateUserResolver = (createUser:CreateUserResolver) => {
	return {
		Mutation: {
			createUser: createUser
		},
	};
};
