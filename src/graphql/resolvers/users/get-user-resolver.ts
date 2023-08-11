import { Model } from 'sequelize';
export const createGetUserResolver = (getUsers: () => Promise<Model[]>) => {
	return {
		Query: {
			getUsers: getUsers
		},
	};
};
