import { gql } from 'apollo-server';

const authorTypes = gql`
  type Author @key(fields: "id") {
    id: ID!
    posts: [Post]
    comments: [Comment]
    user: User
  }

  extend type User @key(fields: "id") {
    id: ID! @external
  }

  extend type Query {
    authors: [Author]
  }
`;

export { authorTypes };
