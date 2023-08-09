export const createGreetResolver = (greet: () => { id: number; msg: string; }) => {
	return {
		Query: {
			greet: greet
		},
	};
};
