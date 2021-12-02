import { prisma } from '../../config/prisma';

const postResolvers = {
  Post: {
    comments: async (parent, args, context) => {
      return await prisma.comment.findMany({
        where: {
          postId: parent.id,
        },
      });
    },
    author: async (parent, args, context) => {
      return await prisma.author.findUnique({
        where: {
          id: parent.authorId,
        },
      });
    },
  },
  Query: {
    posts: async (parent, args, context) => {
      const psts = await prisma.post.findMany();
      return psts;
    },
  },
};

export { postResolvers };
