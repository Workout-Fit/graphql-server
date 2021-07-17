import { Context } from '../../context';

export const getExerciseTypes = async (ctx: Context) =>
  ctx.prisma.exerciseType.findMany();

export const getExerciseTypesByName = async (name: string, ctx: Context) =>
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
