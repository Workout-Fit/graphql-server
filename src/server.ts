import { makeExecutableSchema } from '@graphql-tools/schema';
import { generateTypeScriptTypes } from 'graphql-schema-typescript';
import { graphqlUploadExpress } from 'graphql-upload';
import { ApolloServer } from 'apollo-server-express';
import context from './context';
import { typeDefs, resolvers } from './schema';

const express = require('express');

const { PORT = 4000 } = process.env;

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers, context });
  const app = express();
  await server.start();
  await generateTypeScriptTypes(
    makeExecutableSchema({ typeDefs, resolvers }),
    'src/types.d.ts',
    {}
  );
  console.log('✅ Types generated');

  app.use(graphqlUploadExpress());
  server.applyMiddleware({ app });

  await new Promise((resolve) => app.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at port ${PORT}`);
}

startServer();
