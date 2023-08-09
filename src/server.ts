import fastify from 'fastify';
import { fastifyApolloHandler } from '@as-integrations/fastify';
import logger from './shared/logger';
import { ApolloServer, BaseContext } from '@apollo/server';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';  // Assuming this is an array of transformer functions
import { fastifyApolloDrainPlugin } from '@as-integrations/fastify';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { customDirectives } from './graphql/directives';

export class Server {
	app;
	port;
	requestCount;
	constructor(port: number) {
		this.app = fastify({
			logger: true,
			forceCloseConnections: true,
			keepAliveTimeout: 61 * 1000,
		});
		this.port = port;
		this.requestCount = 0;
		this.app.server.headersTimeout = 65 * 1000;
	}

	start() {
		this.graphql().then(() => {
			this.app.listen({ port: this.port, host: '0.0.0.0' }).then(() => {
				logger.info(`server listening on ${this.port}`);
				process.send && process.send({ requestCount: this.requestCount });
			}).catch((err) => {
				this.app.log.error(err);
				process.exit(1);
			});
		});
	}

	async graphql() {
		try {
			const apollo = new ApolloServer<BaseContext>({
				schema: buildSubgraphSchema([{ typeDefs, resolvers: customDirectives(resolvers) }]),
				plugins: [fastifyApolloDrainPlugin(this.app)],
				includeStacktraceInErrorResponses: true,
			});
			await apollo.start();

			this.app.addHook('onRequest', (request, reply, done) => {
				this.requestCount++;
				done();
			});

			this.app.route({
				url: '/graphql',
				method: ['GET', 'POST', 'OPTIONS'],
				handler: fastifyApolloHandler(apollo, { context: async (request) => ({ dataLoaders: {}, headers: request.headers }) }),
			});
		} catch (e) {
			logger.info('ERROR ON CREATING GRAPHQL');
			logger.error(e);
			throw e;
		}
	}
}
