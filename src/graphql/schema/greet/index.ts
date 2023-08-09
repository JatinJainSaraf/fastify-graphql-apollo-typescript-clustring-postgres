import gql from '../../../shared/gql';
import { createGreetTypeDef } from './greeting';

const greetTypeDef = createGreetTypeDef(gql);
export { greetTypeDef };
