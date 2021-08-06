import { Context } from '../../context';

export const getMuscleGroups = async (name: string, ctx: Context) =>
  await ctx.prisma.muscleGroup.findMany({
    where: {
      name: {
        contains: name,
        mode: 'insensitive',
      },
    },
  });

export const getMuscleGroupById = async (id: number, ctx: Context) =>
  await ctx.prisma.muscleGroup.findUnique({ where: { id } });
