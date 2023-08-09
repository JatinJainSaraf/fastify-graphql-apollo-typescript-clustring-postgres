import { PG } from '../config/config';
import {Options, Sequelize} from 'sequelize';
import logger from '../shared/logger';

const options = {
	host: PG.host,
	port: PG.port,
	dialect: PG.dialect,
	logging: false,
	pool: {
		max: 20,
		min: 1,
		acquire: 30000,
		idle: 60000,
		evict: 10000,
	},
};
const sequelize = new Sequelize(PG.database as string, PG.username as string, PG.password, options as Options );

sequelize.authenticate().then(()=>{
	logger.info('Database connected------------------------');
}).catch((err)=>{
	logger.error('Database is not Connected-----------------------');
	logger.error(err);
});

export default sequelize;