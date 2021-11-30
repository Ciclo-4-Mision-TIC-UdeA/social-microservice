import { gql } from 'apollo-server';

const authorTypes = gql`
  type Author @key(fields: "id") {
    id: ID!
    user: String
    posts: [Post]
    comments: [Comment]
  }

  extend type Query {
    authors: [Author]
  }
`;

export { authorTypes };
