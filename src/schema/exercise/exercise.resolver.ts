import prisma from '../../db';

const resolvers = {
  Query: {
    getExercises: async (parent, args) =>
      prisma.exercise.findMany({
        where: {
          muscleGroupId: args.muscleGroupId,
          exerciseTypeId: args.exerciseTypeId,
          equipmentId: args.equipmentId,
          difficultyId: args.difficultyId,
        },
        include: {
          muscleGroup: true,
          exerciseType: true,
          equipment: true,
          difficulty: true,
        },
      }),
    getExerciseById: async (parent, args) =>
      await prisma.exercise.findUnique({
        where: { id: args.id },
        include: {
          muscleGroup: true,
          exerciseType: true,
          equipment: true,
          difficulty: true,
        },
      }),
    getExercisesByName: async (parent, args) =>
      await prisma.exercise.findMany({
        where: {
          name: {
            contains: args.name,
          },
        },
        include: {
          muscleGroup: true,
          exerciseType: true,
          equipment: true,
          difficulty: true,
        },
      }),
  },
};

export default resolvers;
