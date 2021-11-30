import { prisma } from '../../config/prisma';

const authorResolvers = {
  Query: {
    authors: async (parent, args, context) => {
      return await prisma.author.findMany({
        include: {
          posts: true,
          comments: true,
        },
      });
    },
  },
};

export { authorResolvers };
