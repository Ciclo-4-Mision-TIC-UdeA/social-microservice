import { prisma } from '../../config/prisma';

const postResolvers = {
  Query: {
    posts: async (parent, args, context) => {
      return await prisma.post.findMany({
        include: {
          comments: true,
          author: true,
        },
      });
    },
  },
};

export { postResolvers };
