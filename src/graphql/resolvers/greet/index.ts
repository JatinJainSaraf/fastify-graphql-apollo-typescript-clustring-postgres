import { createGreetResolver } from './greeting';
import { greet } from '../../handlers/greeting';


const greetResolver = createGreetResolver(greet);
export { greetResolver };
