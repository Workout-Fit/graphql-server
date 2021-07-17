import { ApolloServer } from 'apollo-server';
import schema from './schema';
import context from './context';

const { PORT = 4000 } = process.env;

new ApolloServer({
  schema,
  context,
  subscriptions: {
    path: '/subscriptions',
  },
})
  .listen({ port: PORT })
  .then(({ url }) => console.log(`🚀 Server ready at: ${url}`));
