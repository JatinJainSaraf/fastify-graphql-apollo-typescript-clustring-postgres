import { Model } from 'sequelize';

export const makeGetUser = (userModel : Model)=> {
	return [
		{
			id: 1,
			name:'jatin',
			age: 25
		}
	];
};