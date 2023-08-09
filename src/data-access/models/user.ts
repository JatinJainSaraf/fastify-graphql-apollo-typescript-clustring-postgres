import { DataTypes, Sequelize } from 'sequelize';

export const createUserModel = (sequelize: Sequelize)=>{
	const UserModal =sequelize.define('user',{ 
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		name: {
			type:DataTypes.STRING,
			allowNull : false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		age: {
			type: DataTypes.INTEGER,
			allowNull:false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
		},
	});
	return UserModal;
};