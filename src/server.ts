import { ApolloServer } from 'apollo-server';
import schema from './schema';
import context from './context';

const { PORT = 4000 } = process.env;

new ApolloServer({ schema, context }).listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at: http://localhost:${PORT}`)
);
