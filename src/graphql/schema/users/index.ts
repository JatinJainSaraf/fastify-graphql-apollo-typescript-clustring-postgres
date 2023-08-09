import gql from '../../../shared/gql';
import { createUserTypeDef } from './create-user-type';

const userTypeDef = createUserTypeDef(gql);
export { userTypeDef };
