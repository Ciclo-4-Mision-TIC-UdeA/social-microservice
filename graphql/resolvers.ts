import { postResolvers } from './post/resolvers';
import { commentResolvers } from './comment/resolvers';
import { authorResolvers } from './author/resolvers';

const resolvers = { authorResolvers, postResolvers, commentResolvers };

export { resolvers };
