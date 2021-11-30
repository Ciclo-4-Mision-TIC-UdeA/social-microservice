import { ApolloServer } from 'apollo-server';
import { resolvers } from './graphql/resolvers';
import { types } from './graphql/types';
import dotenv from 'dotenv';

dotenv.config();

const server = new ApolloServer({
  typeDefs: types,
  resolvers: resolvers,
});

server.listen({ port: process.env.PORT || 5002 }).then((url) => {
  console.log('Microservicio social corriendo');
});
