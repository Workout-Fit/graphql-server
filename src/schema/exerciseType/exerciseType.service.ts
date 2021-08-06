import { Context } from '../../context';

export const getExerciseTypes = async (name: string, ctx: Context) =>
  await ctx.prisma.exerciseType.findMany({
    where: {
      name: {
        contains: name,
        mode: 'insensitive',
      },
    },
  });

export const getExerciseTypeById = async (id: number, ctx: Context) =>
  await ctx.prisma.exerciseType.findUnique({ where: { id } });
