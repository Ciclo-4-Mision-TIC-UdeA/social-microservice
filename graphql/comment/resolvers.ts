import { prisma } from '../../config/prisma';

const commentResolvers = {
  Comment: {
    __resolveReference: async (ref) => {
      return prisma.comment.findUnique({
        where: {
          id: ref.id,
        },
      });
    },
  },
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
