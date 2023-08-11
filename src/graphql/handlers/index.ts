import UserModel from '../../data-access/models';
import { makeGetUsers, makeCreateUser } from './users'; // Adjust the import

export const getUsers = makeGetUsers(UserModel);
export const createUser = makeCreateUser(UserModel);
export const empty = () => {
	return 'hello jatin';
};
