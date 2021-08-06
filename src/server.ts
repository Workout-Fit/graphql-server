import { generateTypeScriptTypes } from '@peergrade/graphql-schema-typescript';
import { graphqlUploadExpress } from 'graphql-upload';
import { ApolloServer } from 'apollo-server-express';
import context from './context';
import schema from './schema';
import { log } from './utils/console';
import compression from 'compression';
import helmet from 'helmet';

const express = require('express');

const { PORT = 4000, NODE_ENV, BUCKET_HOST } = process.env;

async function startServer() {
  try {
    if (!BUCKET_HOST)
      throw new Error('BUCKET_HOST environment variable required');
    else {
      const server = new ApolloServer({ schema, context });
      const app = express();
      await server.start();
      if (NODE_ENV !== 'production') {
        await generateTypeScriptTypes(schema, 'src/types.d.ts', {});
        log('✅ Types generated', 'green');
      }

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
