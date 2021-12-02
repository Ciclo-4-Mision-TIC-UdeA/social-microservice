import { prisma } from '../../config/prisma';

const commentResolvers = {
  Comment: {
    author: async (parent, args, context) => {
      return await prisma.author.findUnique({
        where: {
          id: parent.authorId,
        },
      });
    },
    post: async (parent, args, context) => {
      return await prisma.post.findUnique({
        where: {
          id: parent.postId,
        },
      });
    },
  },
  Query: {
    comments: async (parent, args, context) => {
      return await prisma.comment.findMany();
    },
  },
};

export { commentResolvers };
