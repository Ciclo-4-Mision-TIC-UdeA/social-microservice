import { gql } from 'apollo-server';

const postTypes = gql`
  type Post @key(fields: "id") {
    id: ID!
    content: String!
    author: Author
    comments: [Comment]
  }

  extend type Query {
    posts: [Post]
  }
`;

export { postTypes };
