import { Context } from '../../context';

export const getExercises = async (
  muscleGroupId: number,
  exerciseTypeId: number,
  equipmentId: number,
  difficultyId: number,
  ctx: Context
) =>
  await ctx.prisma.exercise.findMany({
    where: { muscleGroupId, exerciseTypeId, equipmentId, difficultyId },
    include: {
      muscleGroup: true,
      exerciseType: true,
      equipment: true,
      difficulty: true,
    },
  });

export const getExerciseById = async (id, ctx: Context) =>
  await ctx.prisma.exercise.findUnique({
    where: { id },
    include: {
      muscleGroup: true,
      exerciseType: true,
      equipment: true,
      difficulty: true,
    },
  });

export const getExercisesByName = async (name, ctx: Context) =>
  await ctx.prisma.exercise.findMany({
    where: {
      name: {
        contains: name,
      },
    },
    include: {
      muscleGroup: true,
      exerciseType: true,
      equipment: true,
      difficulty: true,
    },
  });
