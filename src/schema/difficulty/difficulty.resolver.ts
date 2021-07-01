import prisma from '../../db';

const resolvers = {
  Query: {
    getDifficultyLevels: async (parent) => prisma.difficulty.findMany(),
    getDifficultyLevelsByName: async (parent, args) =>
      await prisma.difficulty.findMany({
        where: { name: args.name }
      }),
    getDifficultyById: async (parent, args) =>
      await prisma.difficulty.findUnique({
        where: { id: args.id }
      }),
  },
};

export default resolvers;
