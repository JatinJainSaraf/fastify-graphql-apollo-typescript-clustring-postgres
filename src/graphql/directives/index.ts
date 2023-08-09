import { IResolvers } from '@graphql-tools/utils';
export const customDirectives = (schema:  IResolvers<unknown, unknown>) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const directiveTransformers: any[] = [
  
	];
	return directiveTransformers.reduce((curSchema, transformer) => transformer(curSchema), schema);
};
  