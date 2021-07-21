import { Context } from '../../context';

export const getExercises = async (
  name: string,
  muscleGroupId: number,
  exerciseTypeId: number,
  equipmentId: number,
  difficultyId: number,
  ctx: Context
) =>
  await ctx.prisma.exercise.findMany({
    take: 20,
    where: {
      name: { contains: name, mode: 'insensitive' },
      muscleGroupId,
      exerciseTypeId,
      equipmentId,
      difficultyId,
    },
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
