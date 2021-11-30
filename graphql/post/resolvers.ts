import { prisma } from '../../config/prisma';

const postResolvers = {
  Query: {
    users: async (parent, args, context) => {
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
