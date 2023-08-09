import { userModel } from '../../data-access/models';
import { makeGetUser } from './users';
export const getUser= makeGetUser(userModel);
export const empty = () =>{
	
	return 'hello jatin';
};