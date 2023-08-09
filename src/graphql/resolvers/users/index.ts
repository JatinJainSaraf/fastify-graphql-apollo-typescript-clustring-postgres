import { createCreateUserResolver } from './create-user-resolver';
import { getUsers } from '../../handlers/users';

const createUserResolver = createCreateUserResolver(getUsers);
export {createUserResolver};