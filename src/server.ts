import { ApolloServer } from 'apollo-server';
import schema from './schema';

const { PORT = 4000 } = process.env;

new ApolloServer({ schema }).listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at: http://localhost:${PORT}`)
);
