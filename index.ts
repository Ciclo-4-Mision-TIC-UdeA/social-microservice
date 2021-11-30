import { ApolloServer } from 'apollo-server';
import { authorResolvers, commentResolvers, postResolvers } from './graphql/resolvers';
import { authorTypes, commentTypes, postTypes } from './graphql/types';
import { buildSubgraphSchema } from '@apollo/subgraph';
import dotenv from 'dotenv';

dotenv.config();

const server = new ApolloServer({
  schema: buildSubgraphSchema([
    { typeDefs: authorTypes, resolvers: authorResolvers },
    { typeDefs: commentTypes, resolvers: commentResolvers },
    { typeDefs: postTypes, resolvers: postResolvers },
  ]),
});

server.listen({ port: process.env.PORT || 5002 }).then((url) => {
  console.log('Microservicio social corriendo');
});
