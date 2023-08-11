import { Model, DataTypes, Sequelize } from 'sequelize';

export const createUserModel = (sequelize: Sequelize) => {
	const UserModel = sequelize.define('user', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		age: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: Sequelize.literal('NOW()'),
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
		},
	});

	return UserModel as typeof UserModel & {
    new (): UserInstance;
  };
};

export interface UserAttributes {
  id: number;
  name: string;
  email: string;
  age: number;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UserInstance = Model<UserAttributes>;

export type UserModelType = typeof Model & {
  new (): UserInstance;
};
