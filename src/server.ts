import { ApolloServer } from 'apollo-server-express';
import compression from 'compression';
import { graphqlUploadExpress } from 'graphql-upload';
import helmet from 'helmet';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import context from './context';
import logger from './utils/console';

import express from 'express';

const { PORT = 4000, BUCKET_HOST } = process.env;

async function startServer() {
  try {
    if (!BUCKET_HOST)
      throw new Error('BUCKET_HOST environment variable required');
    else {
      const schema = await buildSchema({
        resolvers: [`${__dirname}/schema/**/*.resolver.{ts,js}`],
      });
      const server = new ApolloServer({ schema, context });
      const app = express();
      await server.start();

      app.use(helmet());
      app.use(compression());
      app.use(graphqlUploadExpress());
      server.applyMiddleware({ app });

      app.listen({ port: PORT }, () => {
        logger.success(`🚀 Server ready at port ${PORT}`);
      });
    }
  } catch (e) {
    logger.error(e);
  }
}

startServer();
