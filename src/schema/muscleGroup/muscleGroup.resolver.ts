import prisma from '../../db';

const resolvers = {
  Query: {
    getMuscleGroups: async (parent) => prisma.muscleGroup.findMany(),
    getMuscleGroupsByName: async (parent, args) =>
      await prisma.muscleGroup.findMany({
        where: { name: args.name }
      }),
    getMuscleGroupById: async (parent, args) =>
      await prisma.muscleGroup.findUnique({
        where: { id: args.id }
      }),
  },
};

export default resolvers;
