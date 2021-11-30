import { prisma } from '../../config/prisma';

const commentResolvers = {
  Query: {
    comments: async (parent, args, context) => {
      return await prisma.comment.findMany({
        include: {
          author: true,
          post: {
            include: {
              author: true,
            },
          },
        },
      });
    },
  },
};

export { commentResolvers };
