import { makeExecutableSchema } from '@graphql-tools/schema';

const { generateTypeScriptTypes } = require('graphql-schema-typescript');
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const context = require('./context');
const { typeDefs, resolvers } = require('./schema');

const { PORT = 4000 } = process.env;

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers, context });
  await server.start();
  const app = express();
  await generateTypeScriptTypes(
    makeExecutableSchema({ typeDefs, resolvers }),
    'src/types.d.ts',
    {}
  );
  console.log('✅ Types generated');

  server.applyMiddleware({ app });

  app.listen({ port: PORT }, () =>
    console.log(`🚀Server ready at port ${PORT}`)
  );
}

startServer();
