import { prisma } from '../../config/prisma';

const authorResolvers = {
  Author: {
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
      const user =
        await prisma.$queryRaw`select * from usuarios."User" as U where U.id = ${parent.userId}`;

      return user[0];
    },
  },
  Query: {
    authors: async (parent, args, context) => {
      return await prisma.author.findMany();
    },
  },
};

export { authorResolvers };
