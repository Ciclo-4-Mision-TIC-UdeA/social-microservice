import { gql } from 'apollo-server';

const authorTypes = gql`
  type Author {
    id: ID!
    user: String
    posts: [Post]
    comments: [Comment]
  }

  type Query {
    authors: [Author]
  }
`;

export { authorTypes };
