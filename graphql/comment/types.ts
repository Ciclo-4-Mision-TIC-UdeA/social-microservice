import { gql } from 'apollo-server';

const commentTypes = gql`
  type Comment @key(fields: "id") {
    id: ID!
    content: String!
    author: Author
    post: Post
  }

  extend type Query {
    comment: [Comment]
  }
`;

export { commentTypes };
