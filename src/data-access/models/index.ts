import { createUserModel } from './user';
import sequelize from '..';
const userModel=createUserModel(sequelize);
const models = [userModel];

models.forEach((model)=>{
	model.sync();
});