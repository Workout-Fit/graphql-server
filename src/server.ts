const { generateTypeScriptTypes } = require('graphql-schema-typescript');
const { graphqlUploadExpress } = require('graphql-upload');
const { ApolloServer } = require('apollo-server-express');
const { express } = require('express');
const context = require('./context');
const schema = require('./schema');

const { PORT = 4000 } = process.env;

async function startServer() {
  const server = new ApolloServer({ schema, context });
  await server.start();
  const app = express();
  console.log('faaf');
  await generateTypeScriptTypes(schema, 'src/types.d.ts', {});
  console.log('✅ Types generated');

  server.applyMiddleware({ app });

  app.listen({ port: PORT }, () =>
    console.log(`🚀Server ready at port ${PORT}`)
  );
}

startServer();
