export const createCreateUserResolver = (getUsers: () => { id: number; name: string; age: number }[]) => {
	return {
		Query: {
			getUsers: getUsers
		},
	};
};
