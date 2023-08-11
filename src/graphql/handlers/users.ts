import { UserAttributes, UserModelType } from './../../data-access/models/user';

export const makeGetUsers = (UserModel: UserModelType) => { // Adjust the parameter type
	return async () => {
		try {
			const users = await UserModel.findAll({ attributes: ['id', 'name', 'age'] });
			return users;
		} catch (error) {
			console.error('Error fetching users:', error);
			throw new Error('Failed to fetch users');
		}
	};
};

export const makeCreateUser = (UserModel: UserModelType) => {
	return async (input: UserAttributes) => { 
		try {
			const newUser = await UserModel.create(input);
			return newUser;
		} catch (error) {
			console.error('Error creating user:', error);
			throw new Error('Failed to create user');
		}
	};
};
