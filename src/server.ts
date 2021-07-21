import { ApolloServer } from 'apollo-server';
import schema from './schema';
import { generateTypeScriptTypes } from 'graphql-schema-typescript';
import context from './context';

const { PORT = 4000, NODE_ENV } = process.env;

new ApolloServer({
  schema,
  introspection: NODE_ENV !== 'production',
  context,
  subscriptions: {
    path: '/subscriptions',
  },
})
  .listen({ port: PORT })
  .then(({ url }) => {
    generateTypeScriptTypes(schema, 'src/types.d.ts', {}).then(() => {
      console.log('✅ Types generated');
    });
    console.log(`🚀 Server ready at: ${url}`);
  });
