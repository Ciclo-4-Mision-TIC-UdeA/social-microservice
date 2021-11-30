import { prisma } from '../../config/prisma';

const authorResolvers = {
  Author: {
    __resolveReference: async (ref) => {
      return prisma.author.findUnique({
        where: {
          id: ref.id,
        },
      });
    },
    comments: async (parent, args, context) => {
      return await prisma.comment.findMany({
        where: {
          authorId: parent.id,
        },
      });
    },
    posts: async (parent, args, context) => {
      return await prisma.post.findMany({
        where: {
          authorId: parent.id,
        },
      });
    },
    user: async (parent, args, context) => {
      const us = await prisma.$queryRaw<
        [any]
      >`select * from user."User" as U where U."id" = ${parent.userId} limit 1`;
      if (us.length > 0) {
        return us[0];
      }
    },
  },
  Query: {
    authors: async (parent, args, context) => {
      return await prisma.author.findMany();
    },
  },
};

export { authorResolvers };
