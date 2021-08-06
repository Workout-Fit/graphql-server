import 'reflect-metadata';
import { graphqlUploadExpress } from 'graphql-upload';
import { ApolloServer } from 'apollo-server-express';
import context from './context';
import { writeFile } from 'fs';
import { log } from './utils/console';
import compression from 'compression';
import helmet from 'helmet';
import { buildSchema } from 'type-graphql';
import { printSchema } from 'graphql';

const express = require('express');

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

      await new Promise((resolve) => app.listen({ port: PORT }, resolve));
      log(`🚀 Server ready at port ${PORT}`, 'green');
    }
  } catch (e) {
    log(e, 'red');
  }
}

startServer();
