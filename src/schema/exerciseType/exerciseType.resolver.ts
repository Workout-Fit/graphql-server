import prisma from '../../db';

const resolvers = {
  Query: {
    getExerciseTypes: async (parent) => prisma.exerciseType.findMany(),
    getExerciseTypesByName: async (parent, args) =>
      await prisma.exerciseType.findMany({
        where: { name: args.name }
      }),
    getExerciseTypeById: async (parent, args) =>
      await prisma.exerciseType.findUnique({
        where: { id: args.id }
      }),
  },
};

export default resolvers;
