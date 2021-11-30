import { gql } from 'apollo-server';

const postTypes = gql`
  type Post {
    id: ID!
    content: String!
    author: Author
    comments: [Comment]
  }

  type Query {
    posts: [Post]
  }
`;

export { postTypes };
