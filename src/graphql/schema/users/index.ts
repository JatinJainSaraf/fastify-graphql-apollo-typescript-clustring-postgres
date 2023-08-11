import gql from '../../../shared/gql';
import { makeGetUserTypeDef } from './get-user-type';
import { createCreateUserType } from './create-user-type';

const getUserTypeDef = makeGetUserTypeDef(gql);
const createUserType = createCreateUserType(gql);

const userTypeDefs = [getUserTypeDef, createUserType];

export default userTypeDefs;
